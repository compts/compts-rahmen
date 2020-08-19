

var controller_utitlities = {
  
}

function dom_template_cleanup(temp){
    temp = temp.replace(/(<!--)/g,"<!")
    temp = temp.replace(/(!-->)/g,"!>")
    return temp;
}


function ValidateController(dom){
    this.dom = dom;
    this.uniq_controller = _ct.getUniq();
    this.dom_controller = "none";
    this.argValue = {};

    this.argValue['require']=[];
    this.argValue['events']={};
    this.argValue['data']={};

    this.argValue['render']={};
    this.argValue['method']={};


    this.argValue['config']={
            evaluate:"<![^\=\-]([\\s\\S]+?)!>",
            interpolate:"<!\=([\\s\\S]+?)!>",
            escape:"<!\-([\\s\\S]+?)!>",
        };

}
ValidateController.prototype.setArgumentValidation = function(option_var,app_dispatch){

    if(_ct.has(option_var) && _ct.getTypeof(option_var) == "json"){
      
        if(_ct.has(option_var,"require")){
            this.argValue['require'] = _ct.getTypeof(option_var['require']) == "array"?option_var['require']:[];

        }
        
        if(_ct.has(option_var,"data")){
            this.argValue['data'] = option_var['data'];
        }

        if(_ct.has(option_var,"config")){
            this.argValue['config'] = option_var['config'];
        }
        if(_ct.has(option_var,"render")){
            if(_ct.getTypeof(option_var['render'])=="function"){
                var library = controller_library_external_api(this,app_dispatch);
                option_var['render'](this.argValue['render'],library);                
            }
        }
        if(_ct.has(option_var,"method")){
            if(_ct.getTypeof(option_var['method'])=="function"){
                var library = controller_library_external_api(this,app_dispatch);
                option_var['method'](this.argValue['method'],library);                
            }
        }
        if(_ct.has(option_var,"collection")){
            if(_ct.indexOf(["json","array"], _ct.getTypeof(option_var['collection']) >-1) ){
              
                option_var['collection'](this.argValue['data']);                
            }
        }
    }

}
ValidateController.prototype.getArgValue = function(){
    return this.argValue;
}
ValidateController.prototype.isValid = function(){
    if(ct$("*[ct_appname= "+this.dom+"]").getlength()>0){
        this.dom_controller = "*[ct_appname= "+this.dom+"]";
        return true;
    }else if( ct$("#"+this.dom).getlength()>0 ){
        this.dom_controller = "#"+this.dom;
        return true;
    }else{
        return false;
    }
    
}