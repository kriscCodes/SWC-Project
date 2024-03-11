const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
const teacherRoutes = require('./routes/teacherRoutes.js')
const studentRoutes = require('./routes/studentRoutes.js')
const PORT = process.env.PORT || 8080;

//SCHEMAS
let uri = "mongodb+srv://krisc2004:pMgAKkUpNbWAYbHQ@school.ltbw0tm.mongodb.net/school?retryWrites=true&w=majority&appName=School";

mongoose.connect(uri)

app.use(express.json())
app.use('/teachers', teacherRoutes)
app.use('/students', studentRoutes)

app.listen(PORT, () =>
	console.log(`Backend listening at http://localhost:${PORT}`)
);