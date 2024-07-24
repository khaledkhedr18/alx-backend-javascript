function myFunc() {
	console.log("No. of arguments is: " + arguments.length)
	for (var i = 0; i < arguments.length; i++) {
		console.log("Argument No. " + (i + 1) + " is " + arguments[i])
	}
}

myFunc("khaled", "ahmed", "ahmed", "Awad", "Khedr"); 