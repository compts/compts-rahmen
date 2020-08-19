if (typeof exports !== 'undefined') {
   var root = Object; 
   if (typeof window !== 'undefined' && typeof module !== 'undefined' && module.exports) {
   // var document = Object;
   }	
 
  }
else{
	var root = window;
   
} 

var bootstrap={};

var ps_glbl=root[Math.random().toString(36).replace(/[^a-z]+/g, '')]={};


ps_glbl.src=[];	
ps_glbl.remove_list_action=[]

ps_glbl.report={};
ps_glbl.report.loadjs=[];
ps_glbl.report.loadjs_error=[];
ps_glbl.control={};

ps_glbl.global_setting={};
ps_glbl.controller_value={};
ps_glbl.control.delegation_record_list=[]; 



ps_glbl.config={};





ps_glbl.extension_load_element=[]; 
ps_glbl.extension_load_event={}; 
var devnt=['scroll','focus','blur','change','abort','error','click','dblclick','mousemove','mouseout','mouseover','mousedown','mouseup','mouseenter','mouseleave','resize','keydown','keyup','keypress','touchstart','touchmove','touchend','contextmenu',
			'drag','dragstart','dragend','dragover','dragenter','dragleave','drop',
			'd_focus','d_blur','d_change','d_abort','d_error','d_click','d_dblclick','d_mousemove','d_mouseout','d_mouseover','d_mousedown','d_mouseup','d_resize','d_keydown','d_keyup','d_keypress','d_touchstart','d_touchmove','d_touchend','d_contextmenu'];		
var child={0:["firstChild","first"],1:["haschild","haschild"],2:["hasChildNodes","hasChildNodes"],3:["childNodes","hasChildNodes"],4:["lastChild","last"],5:["even","even"],6:["odd","odd"]};		
var appendhtml={0:["after","afterend"],1:["before","beforebegin"],2:["prepend","afterbegin"],3:["append","beforeend"]};
var styletype=['width','display','height','visible'];
var domview=['val','html','text','outerhtml'];
var elemfade=['fadein','fadeout','fadeto','fadetoggle'];