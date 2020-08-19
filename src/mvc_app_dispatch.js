function dispatch_app_init(app){

  this.apps = app;
  this.is_amd = false;
  
  //this.$scope = {}
  this.uniq_controller = _ct.getUniq();
  //this.uni_scope = $scope[uniq_controller]={}
  //this.$scope['event'] = {};
  //this.$scope['render'] = {};

  this.$internal = {}
  this.$internal['key_render'] = [];
  this.$internal['render'] = [];


 

  this.contoller_value = ps_glbl.controller_value[this.uniq_controller];
}
dispatch_app_init.prototype.amd = function() {
  if(this.is_amd == false){
      for(var i in this.apps.argValue['require']){
          ct("require",this.apps.argValue['require'][i],true);
      }
  }
  this.is_amd = true;

}
dispatch_app_init.prototype.Load=  function(func){

  ct.ready(function(){     
     func();
 });
}


dispatch_app_init.prototype.reload_module = function() {
  var self = this;
    for(var i in self.$internal['render']){
        var val_render = self.$internal['render'][i];
        val_render['event'].call(val_render['main_element']);
        var local_template_value = _ct.templateValue(  dom_template_cleanup(val_render['template']) ,self.apps.argValue['data'],self.apps.argValue['config'] );
        
        
        ct$(val_render['main_element']).html(local_template_value )

        //console.log(val_render,"val_render")
        //console.log(local_template_value,"local_template_value")
    }

}
dispatch_app_init.prototype.get_exec_render_module = function() {
  
  var self = this;
  
    for(var i in self.apps.argValue['render']){
    
        var val_func = self.apps.argValue['render'][i];

        if(_ct.getTypeof(val_func) == "json"){

            if(_ct.has(val_func,"event") && _ct.has(val_func,"action")){
                ct("dom","body").delegate(val_func["event"],i,function(e){
                  //? extension_loader(this).load_controller_module()
              
                    if(_ct.getTypeof(val_func["action"]) == "function"){
                        val_func["action"].call(this,e);
                        self.reload_module();
                    }else{
                        if(_ct.has(params , val_func["action"])){
                            params[val_func["action"]].call(this,e);
                            self.reload_module();
                        }
                    }
                });
            }
        }
    }
}
dispatch_app_init.prototype.get_exec_view_module = function() {
  
  var self = this;
  var dom_list_view =  ct("dom",self.apps.dom_controller+" => *[ct_views]");

  dom_list_view.each(function(htm){
      var attr_view = ct("dom",htm);
      var attr_view_attr = attr_view.attr("ct_views");
      var params = self.apps.argValue['method'];
      if(_ct.has(params,attr_view_attr)){

          params[attr_view_attr].call(htm);

          if(_ct.indexOf( self.$internal['key_render'] , attr_view_attr ) ==-1){


              var arg_element = {
                  "main_element":htm,
                  "element":attr_view,
                  "template":attr_view.html(),
                  "event":params[attr_view_attr]
              }
              self.$internal['render'].push(arg_element)
              self.$internal['key_render'].push( attr_view_attr );
          }
          

         
      }
  })
  self.reload_module();
  
  


}
dispatch_app_init.prototype.get_exec_method_module = function() {
  
  
  
  var self = this;
    var dom_list_events =  ct("dom",self.apps.dom_controller+" => *["+devnt_controller_event.join(";")+"]"); 
    var main_init_controller = self.main_init;
    var list_event_dom = [];
    var params = self.apps.argValue['method'];
    dom_list_events.each(function(htm){
      
        if(_ct.indexOf(list_event_dom,htm)==-1){

             var attr_events = ct("dom",htm).attr(devnt_controller_event);


        _ct.each(attr_events,function(kk,vv){

            var events_key = kk.split(":")
            var events_val = vv
                        ct("dom",self.apps.dom_controller).delegate(events_key[1],htm,function(e){

                          
                            if(_ct.has(params,events_val)){
                                params[events_val].call(htm,e);
                                self.reload_module();
                            } 
                            
                        });
                

        })

          list_event_dom.push(htm);
        }
       
      
        
        
    
    })


}

dispatch_app_init.prototype.get_exec_collection_module = function() {
  
var main = this;
 


}