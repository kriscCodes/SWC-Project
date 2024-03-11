import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../src/Home.css';
//MAKE API CALL TO OUR API
let url = 'http://localhost:8080/';
const Home = () => {

  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    const getAll = async () => {
			const teacherResult = await fetch(url + 'teachers');
			const teacherList = await teacherResult.json();
			const studentResult = await fetch(url + 'students');
			const studentList = await studentResult.json();
			console.log(teacherList);
      console.log(studentList);
      setTeachers(teacherList);
      setStudents(studentList);
		};
    getAll();
  }, [])

  return (
		<div className="home-container">
			<div className="teachers-container roles-container">
				<div className="teachers-h1 roles-h1">
					<h1>Teachers</h1>
				</div>
				<div className="teachers-list roles-list">
					<div className="list-content">
						<ul>
							{teachers.map((teacher) => (
								<li key={teacher.id}>
									<Link to={`/teacher/${teacher.name}`}>{teacher.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="teachers-create roles-create">
					<Link to="/createTeacher">Create Teacher</Link>
				</div>
			</div>
			<div className="students-container roles-container">
				<div className="roles-h1">
					<h1>Students</h1>
				</div>
				<div className="roles-list">
					<div className="list-content">
						<ul>
							{students.map((student) => (
								<li key={student.id}>
									<Link to={`/student/${student.name}`}>{student.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="roles-create">
					<Link to="/createStudent">Create Student</Link>
				</div>
			</div>
		</div>
	);
}

export default Home