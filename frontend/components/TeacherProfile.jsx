import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';


const TeacherProfile = () => {
    let url = 'http://localhost:8080/teachers';
	let teacherName = useParams();
	url += `/${teacherName.teacher}`;
	const [teacher, setTeacher] = useState({});
	const [isForm, setIsForm] = useState(false);
	useEffect(() => {
		const getTeacher = async () => {
			let result = await axios.get(url);
			let teacherObject = result.data;
			console.log(url);
			setTeacher(teacherObject);
            console.log(teacherObject)
        };

			getTeacher();
		}, []);

	const toggleForm = () => {
		setIsForm(!isForm);
	};

	const handleUpdate = () => {
		toggleForm();
	};

	const handleNameChange = (e) => {
		const change = e.target.value;
		setTeacher(prevState => ({
			...prevState,
			name: change,
		}))}
	const handleSubjectChange = (e) => {
		const change = e.target.value;
		setTeacher(prevState => ({
			...prevState,
			subject: change,
	}))}

	const handleSave = async () => {
		const change = await axios.put(url, teacher);
		console.log(change);
	};

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
							<h1>{teacher.name}</h1>
							<h1>{teacher.subject}</h1>
							<div className="icons">
								<button onClick={handleDelete}>
									<Link className="button-links" to="/">
										<FaTrash />
									</Link>
								</button>
								<button onClick={handleUpdate}>
									<BsFillPencilFill />
								</button>
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
									placeholder={`${teacher.name}`}
									value={teacher.name}
									onChange={handleNameChange}
								/>
							</label>
							<label>
								Subject:
								<input
									type="text"
									placeholder={`${teacher.subject}`}
									value={teacher.subject}
									onChange={handleSubjectChange}
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

export default TeacherProfile;