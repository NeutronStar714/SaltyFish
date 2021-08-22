var names = ["Jacob", "Yaakov", "Jasmine_1224", "IceDragon2048"];
var greetings = ["Hello ", "Goodbye ", "Hi ", "Bye "]
for (var name in names) {
	for (var gre in greetings) {
		console.log(greetings[gre] + "" + names[name]);
	}
}
(function (window) {
	var everyoneGreeter = {};
	everyoneGreeter.name = "Jsomeone";
	var greeting = "Hey ";
	everyoneGreeter.sayHello = function () {
		console.log(greeting + everyoneGreeter.name);
	}
	window.everyoneGreeter = everyoneGreeter;
})(window);
everyoneGreeter.sayHello();