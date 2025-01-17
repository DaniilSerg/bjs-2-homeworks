function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks') === false) {
		return console.log("Студент отчислен");
	} else {

		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
		this.Average = 0;
	} else {
		sum = this.marks.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		avg = +(sum / this.marks.length).toFixed(2);
		this.Average = avg;
	}
	return this.Average;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.Average;
	this.excluded = reason;

}
