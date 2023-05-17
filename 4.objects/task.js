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
		this.marks = marks;
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
		this.average = 0;
	} else {
		sum = this.marks.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		avg = +(sum / this.marks.length).toFixed(2);
		this.average = avg;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.average;
	this.exclude = reason;

}

let student1 = new Student("sergey", "men", 35);
student1.setSubject("wwww");
console.log(student1);

let student2 = new Student("ekaterina", "women", 18);
student2.addMarks(5, 3, 4, 3);
console.log(student2);

let student3 = new Student("andrey", "men", 19);
student3.addMarks(2, 2, 2, 2);
student3.getAverage();
student3.exclude("Плохая успеваемость")
console.log(student3);
console.log(student3.marks);
