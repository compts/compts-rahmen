  var list_package_mvc_js =  [ 
    "src/window_open.js",
    "src/mvc_core_library.js",
    "src/mvc_library.js",
  //  "src/mvc_route.js",
  "src/mvc_app_dispatch.js",
    "src/mvc_app_init.js",
   
    "src/mvc_model.js",    
    "src/mvc_init.js",


];  




exports.module=function(grassconf){   
var grass_concat = grassconf.require("grass_concat")
var grass_composer = grassconf.require("grass_composer");

      

        grassconf.load("mvvm",function(test){


          return grassconf.src(list_package_mvc_js)
            .pipe(grass_composer( {
              "banner":{
                  "header":"(function(window){ \n" +
                  " /** \n" +
                  " /* This program was writtern by pein freccs. \n" +
                  " /* Please check my repository for more details and update \n" +
                  " /* https://github.com/compts-rahmen \n"+
                  " **/ \n",
              "footer":"\n })(window);"
              }
            } ) )
            .pipe(grass_concat(__dirname+"/dist/compt-rahmen.js",{
              istruncate:true
            }) );

  
        });
 } 

exports.execute=function( lib ){   
  lib.default=function(strm){
    strm.series("mvvm");
  }
   
     
 return lib;    
}       
  
