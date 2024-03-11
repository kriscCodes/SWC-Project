const express = require('express');
const studentControllers = require('../controllers/studentControllers.js');
const router = express.Router();

router.get('/', studentControllers.getAllStudents);
router.get('/:name', studentControllers.getStudentByName);
router.post('/', studentControllers.createStudent);
router.put('/:name', studentControllers.updateStudent);
router.delete('/:name', studentControllers.deleteStudent);

module.exports = router;
