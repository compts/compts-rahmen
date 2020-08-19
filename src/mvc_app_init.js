var devnt_controller_event = [];

for (var i in devnt){
    var val_evnt = devnt[i];
    devnt_controller_event.push("ct_events:"+val_evnt)
}




init_controller = (function(inits,options){

function controller(validation){

  var self = this;
  this.execute = new dispatch_app_init(validation);
  this.execute.amd();
  validation.setArgumentValidation(options,this.execute);
  this.execute.Load(function() { 
    self.execute.get_exec_view_module();
    self.execute.get_exec_render_module();
    self.execute.get_exec_method_module();
    self.execute.get_exec_collection_module();

  });
}

var validation = new ValidateController(inits);

if(validation.isValid()){
  
init = new controller(validation);
 return init; 
}
else{
    console.log("controller does not exist or element ID does not exist");
    return null;
}
});