const Teacher = require('../models/teachers.js');

//get all teachers

exports.getAllTeachers = async (req, res) => {
    try {
        let teachers = await Teacher.find();
        res.json(teachers)
        return teachers;
    } catch (error) {
        console.log(error)
        res.status(404).send('Could not get teachers')
    }
}

//get teacher

exports.getTeacherByName = async (req, res) => {    
    try {
        let teacher = await Teacher.findOne({ name: req.params.name });
		res.json(teacher);
		return teacher;   
    } catch (error) {
        res.status(404).send(`Could not find Teacher by name: ${req.params.name}`);
        console.log(error)
        
    }
}

//create teacher

exports.createTeacher = async (req, res) => {
    try {
        //potential error here may need to create the model using an object not just the body
        let createTeacher = new Teacher(req.body);
        let newTeacher = await createTeacher.save();
        res.status(201).json(newTeacher);
        return newTeacher
    } catch (error) {
        res.status(404).send('Teacher could not be added')
        console.log(error);
    }
}

//update teacher
exports.updateTeacher = async (req, res) => {
    try {
      let updatedTeacher = await Teacher.findOneAndUpdate(
	  { name: req.body.name },
	  req.body,
	  {new: true });
	  res.json(updatedTeacher);
      return updatedTeacher;   
    } catch (error) {
        res.status(404).send('Teacher could not be updated');
        console.log(error);
    }

}
//delete teacher

exports.deleteTeacher = async (req, res) => {
    try {
        await Teacher.findOneAndDelete({ name: req.params.name });
        res.send('book deleted')
    } catch (error) {
        res.status(404).json({
            message: 'Teacher could not be found so it can not be delete',
        error: error.message});

    }
    
}