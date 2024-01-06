import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Index from './components/Index';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Error from './components/Error';
import Blankpage from './components/Blankpage';
import DetailPage from './components/DetailPage';
import Content from './components/Content';
import AssignmentSub from './components/AssigmentSub';
import Grades from './components/Grades';
import TeacherContact from './components/TeacherContact';

function App() {
  return (
    
    <div className="App">
    <Routes>
     <Route path="/blank" element={<Index></Index>} exact />
     <Route path="/signin" element={<Signin></Signin>}  />
     <Route path="/signup" element={<Signup></Signup>}  />
     <Route path="/error" element={<Error></Error>}  />
     <Route path="/" element={<Blankpage></Blankpage>}  />
     <Route path="/Detail" element={<DetailPage></DetailPage>}  />
     <Route path="/coursecontent" element={<Content></Content>}  />
     <Route path="/assignment" element={<AssignmentSub></AssignmentSub>}  />
     <Route path="/grades" element={<Grades></Grades>}  />
     <Route path="/teacher" element={<TeacherContact></TeacherContact>}  />
    </Routes>
     
   
      
      
      
      
    </div>
   
    
  );
}

export default App;
