const express = require('express');
const teacherControllers = require('../controllers/teacherControllers.js');
const router = express.Router();

router.get('/', teacherControllers.getAllTeachers);
router.get('/:name', teacherControllers.getTeacherByName);
router.post('/', teacherControllers.createTeacher);
router.put('/:name', teacherControllers.updateTeacher);
router.delete('/:name', teacherControllers.deleteTeacher);

module.exports = router;