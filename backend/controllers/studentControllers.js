const Student = require('../models/students.js');

//get all students

exports.getAllStudents = async (req, res) => {
	try {
		let students = await Student.find();
		res.json(students);
		return students;
	} catch (error) {
		console.log(error);
		res.status(404).send('Could not get students');
	}
};

//get teacher

exports.getStudentByName = async (req, res) => {
	try {
		let student = await Student.findOne({ name: req.params.name });
		res.json(student);
		return student;
	} catch (error) {
		res.status(404).send(`Could not find Student by name: ${req.params.name}`);
		console.log(error);
	}
};

//create teacher

exports.createStudent = async (req, res) => {
	try {
		//potential error here may need to create the model using an object not just the body
		let createStudent = new Student(req.body);
		let newStudent = await createStudent.save();
		res.status(201).json(newStudent);
		return newStudent;
	} catch (error) {
		res.status(404).send('Student could not be added');
		console.log(error);
	}
};

//update teacher
exports.updateStudent = async (req, res) => {
	try {
		let updatedStudent = await Student.findOneAndUpdate(
			{ name: req.params.name },
			req.body,
			{ new: true });
        res.json(updatedStudent);
        return updatedStudent
	} catch (error) {
		res.status(404).send('Student could not be updated');
		console.log(error);
	}
};
//delete teacher

exports.deleteStudent = async (req, res) => {
	try {
		await Student.findOneAndDelete({ name: req.params.name });
		res.send('Student deleted');
	} catch (error) {
		res.status(404).json({
			message: 'Student could not be found so it can not be delete',
			error: error.message,
		});
	}
};
