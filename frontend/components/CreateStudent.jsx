import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CreateStudent = () => {
	const [student, setStudent] = useState({
		name: '',
		grade: 9,
		role: 'student',
	});

	const handleCreate = async () => {
		await axios.post('http://localhost:8080/students', student);
	};

	const handleNameChange = (e) => {
		let fullName = e.target.value;
		setStudent((prevState) => ({
			...prevState,
			name: fullName,
		}));
	};
	const handleGradeChange = (e) => {
		let gradeNumber = e.target.value;
		setStudent((prevState) => ({
			...prevState,
			grade: gradeNumber,
		}));
	};

	return (
		<div className="create-form">
			<form>
				<label>
					Name
					<input
						type="text"
						placeholder="Full Name"
						onChange={handleNameChange}
					/>
				</label>
				<label>
					Grade
					<input
						type="number"
						placeholder='9'
						onChange={handleGradeChange}
					/>
				</label>
				<Link to="/">
					<button onClick={handleCreate}>Create</button>
				</Link>
			</form>
		</div>
	);
};

export default CreateStudent;
