
root.ctRahmen=init_controller;
	document_ready_exist(function() {
		var event_list = ["click","mouseover","keyup","keypress"];
		ct("dom",document.body).on(event_list.join(","),function(e) {
			if (e.target){
				var elem_indexof = _ct.indexOf(ps_glbl.control.delegation_record_list,e.target);
				if(elem_indexof>-1){
					ps_glbl.control.delegation_record_list.splice(elem_indexof,1);
				}
			}
		});	
	});		