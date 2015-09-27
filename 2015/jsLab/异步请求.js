function createXHR() {
    if ( typeof XMLHttpRequest != "undefined" ) {
            return new XMLHttpRequest();
        } else if (typeof ActiveXobject != "undefined") {
            if (typeof arguments.callee.activeString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "XSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],i,len;
                for (i=0, len=versions.length; i < len; i++){
                    try{
                        new AcctiveXobject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    }catch(ex){

                    }
                }
            };
            return new ActiveXobject(arguments.callee.activeXString);
        }else{
            throw new Error("no XHR object available.")
        }
    }
    
var xhr = createXHR();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            alert(xhr.responseText);
        } else {
            alert('Resquest was unsuccessful: ' + xhr.status);
        }
    }
}
xhr.open("get", "example.txt", true);
xhr.send(null);

function ajax(obj){
    obj.type = obj.type || 'GET';
    var xhr = createXHR();
    obj.data = obj.data || null;

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                obj.success(xhr.responseText);
            } else {
                alert('Resquest was unsuccessful: ' + xhr.status);
            }
        }
    }

    try{
        xhr.open(obj.type, obj.url, true);
        xhr.send(obj.data);
    }catch(err){
        throw err;
    }   
}
// $.ajax({
//     data:aaa,
//     url:aaa,
//     type:'get'
// }).done(function(data,err){

// })