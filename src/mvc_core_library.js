var controller_library_external_api = (function(property,app_dispatch){


    return {
        Data:function(){
            return property.argValue['data'];//property.cls_extend_controller.main_option['data'];
        },
        AjaxPost:function(url,param,func){
            ct("ajax",url).post(param,
                function(res){
                    if(_ct.has(func)){
                        app_dispatch.reload_module();
                        func(res);
                    }   
                });
        },
        AjaxGet:function(url,param,func){
            ct("ajax",url).get(param,
                function(res){
                    if(_ct.has(func)){
                        app_dispatch.reload_module();
                        func(res);
                    }   
                });
        }

    }    
})