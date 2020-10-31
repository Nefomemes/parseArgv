const assign = require("./assign.js")

function parseArgv(array, opts){
	var o = {
		_:[]
	};
	var i = -1;
	for(let element of array){
		i++;
		if(element.startsWith("--")){
			if(element.split("=")[1]){
				var ok = element.split("=");
				assign(o, ok.shift().slice(2), ok.join("="))
			} else if(array[i + 1] && !array.startsWith("--") && !array.startsWith("-")){
			
				assign(o, ok.slice(2), array[i + 1]);
			} else {
				assign(o, element.slice(2), true);
			}



		} else if(element.startsWith("-")){
			var key = element.slice(1).split("");
			var u = -1;
			for(let e of key){
				u++;
				
				if(u === key.length - 1){
					if( array[i + 1] && !array[i + 1].startsWith("--") && !array[i + 1].startsWith("-")){
				assign(o, e, array[i+1])
					} else if (key[u+1] === "="){
						
					}			
				} else if(u === ){
					
				} else {
					o[e] = true;
				}
			}
		} else {

		}
	}
}