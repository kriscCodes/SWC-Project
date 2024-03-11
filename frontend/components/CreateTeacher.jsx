import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateTeacher = () => {
    const [teacher, setTeacher] = useState({
	name: '',
	subject: '',
	role: 'teacher',
    });


    const handleCreate = async () => {
        await axios.post('http://localhost:8080/teachers', teacher);
    }

    const handleNameChange = (e) => {
        let fullName = e.target.value
        setTeacher(prevState => ({
            ...prevState,
            name: fullName
        }))
    }
    const handleSubjectChange = (e) => {
        let subjectName = e.target.value
        setTeacher(prevState => ({
            ...prevState,
            subject: subjectName
        }))
    }


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
						Subject
						<input
							type="text"
							placeholder="Subject"
							onChange={handleSubjectChange}
						/>
					</label>
					<Link to="/">
						<button onClick={handleCreate}>Create</button>
					</Link>
				</form>
			</div>
		);
}

export default CreateTeacher;