import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import OrganizationLogin from '../src/components/OrganizationLogin';
import OrganizationRegister from '../src/components/OrganizationRegister';
import CourseCards from '../src/components/CourseCard'; 
import CourseRoadmap from '../src/components/CourseRoadmap';

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/organization/login" element={<OrganizationLogin />} />
        <Route path="/organization/register" element={<OrganizationRegister />} />
        <Route path="/courses" element={<CourseCards />} /> 
        <Route path="/course-roadmap/:courseId" element={<CourseRoadmap />} /> {/* New route for course roadmap */}
      </Routes>
    </div>
  </Router>
);

export default App;
