import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home.jsx'
import TeacherProfile from '../components/TeacherProfile.jsx';
import StudentProfile from '../components/StudentProfile.jsx';
import './Home.css'
import CreateTeacher from '../components/CreateTeacher.jsx';
import CreateStudent from '../components/CreateStudent.jsx';

function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/teacher/:teacher' element={<TeacherProfile />}></Route>
      <Route path='/student/:student' element={<StudentProfile />}></Route>
      <Route path='/createTeacher' element={<CreateTeacher/>}></Route>
      <Route path='/createStudent' element={<CreateStudent/>}></Route>
    </Routes>
  </Router>
  )
}

export default App
