const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	name: String,
	grade: Number,
	role: String,
});

module.exports = mongoose.model('Student', studentSchema);
