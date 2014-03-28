print("=====================test Base API===========");
(function(){
	//test Base API
	print(NaN);
	print(undefined);
	eval("print(this)");
	print(isNaN(1));
	print(isNaN(NaN));
	
	
	var c = new Object(1);
	for(var name in c ){
		print(name);
	}
	print(c);
	c.a = 1;
	print(c.hasOwnProperty('a'));
	print(c.hasOwnProperty('c'));
	print(c.hasOwnProperty('hasOwnProperty'));
	var  c = function(){};
	var d = new c();
	print(c.prototype.isPrototypeOf(d));
	var array = new Array(10,1,21,2);
	for(var i = 0;i<array.length;++i)
		print(array[i]);
	array.push(1);
	array.pop();
	print(array);
	
	
	var string = new String("12");
	print(string);
	string = new String(32);
	print(string);
	string   = "abcd";
	print(string.length);
	for(var i = 0; i < string.length;++i){
		print(string.charAt(i))
	}
	var b = new Boolean(true);
	print(b);
	
	var a = new Number("1233");
	print(a);
})();
setTimeout(function(){
	print("hello setTimeout");
	throw "finish";
},1);

synchronized function funa(id){
	for(var i = 0 ; i < 100;++i)
		print("thread ["+id+"]: "+i);
	throw "finish"
}
var i = 0;
var lock = {};
var fCreateNewThread = function(id,fun){
	thread(function(){
		synchronized(lock){
			for(var i = 0 ; i < 10;++i)
				print("thread ["+id+"]: "+i);
			throw "finish"
		}
		funa(id);
	});
};
for(var i = 0 ; i < 5 ;++i)
	fCreateNewThread(i);