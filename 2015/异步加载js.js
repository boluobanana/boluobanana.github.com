function loadjs
 
(script_filename){
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', script_filename);
    script.setAttribute('id', 'script-id');
 
    scriptElement = document.getElementById('script-id');
    if(scriptElement){
        document.getElementsByTagName('head')[0].removeChild(scriptElement);
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}
var script = 'scripts/alert.js';
loadjs(script);