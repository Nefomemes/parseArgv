function assign(o, key, value, opts){
	if(o[key] === null || o[key] === undefined){
			o[key] = value;
	} else {
		if(typeof o[key] !== "array") o[key] = [o[key]];

		o[key].push(value);
	}
return o;
}