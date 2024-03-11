import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';

const StudentProfile = () => {
	let url = 'http://localhost:8080/students';
	let studentName = useParams();
	url += `/${studentName.student}`;
	const [student, setStudent] = useState({});
    const [isForm, setIsForm] = useState(false);
	useEffect(() => {
		const getStudent = async () => {
			let result = await axios.get(url);
			let studentObject = result.data;
			console.log(url);
			setStudent(studentObject);
		};

		getStudent();
	}, []);
    
    const toggleForm = () => {
        setIsForm(!isForm);
    }

    const handleUpdate = () => {
        toggleForm();
    };

    const handleNameChange = (e) => {
        const change = e.target.value;
        setStudent(prevState => ({
            ...prevState,
            name: change
        }))
    }
    const handleGradeChange = (e) => {
        const change = e.target.value;
        setStudent(prevState => ({
            ...prevState,
            grade: change
        }))
    }

    const handleSave = async () => {
       const change = await axios.put(url, student)
       console.log(change)
    }

	const handleDelete = async () => {
        await axios.delete(url);
	};
	return (
		<div className="profile-page">
			<Link className="back-nav" to="/">
				Back
			</Link>
			{!isForm ? (
				<div className="static-profile">
					<div>
						<h1>{student.name}</h1>
						<h1>{student.grade}</h1>
						<div className="icons">
							<button onClick={handleDelete}>
								<Link className="button-links" to="/">
									<FaTrash />
								</Link>
							</button>
							<button onClick={handleUpdate}><BsFillPencilFill /></button>
						</div>
					</div>
				</div>
			) : (
				<div className="edit-page">
					<form>
						<label>
							Name:
							<input
								type="text"
								placeholder={`${student.name}`}
								value={student.name}
								onChange={handleNameChange}
							/>
						</label>
						<label>
							Name:
							<input
								type="number"
								placeholder={`${student.grade}`}
								value={student.grade}
								onChange={handleGradeChange}
							/>
						</label>
						<Link to="/">
							<button onClick={handleSave}>Save Changes</button>
						</Link>
					</form>
				</div>
			)}
		</div>
	);
}

export default StudentProfile;
