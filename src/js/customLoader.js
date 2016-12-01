module.exports = function (source){
	this.cacheable && this.cacheable();
    var value;
    if (!this.inputValue) {
        value = typeof source === "string" ? JSON.parse(source) : source;
    } else {
        if(Object.prototype.toString.call( this.inputValue ) === '[object Array]' ) {
            value = this.inputValue[0];
        } else {
            value = this.inputValue;
        }
    }

    Object.keys(value).forEach(function (key) {
        if (parseInt(key)) {
            delete value[key];
            console.log("deleted -" + key + "-");
        }
    });

    return "module.exports = " + JSON.stringify(value) + ";";
}