import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Index from './components/Index';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Error from './components/Error';
import Blankpage from './components/Blankpage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    
    <div className="App">
    <Routes>
     <Route path="/" element={<Index></Index>} exact />
     <Route path="/signin" element={<Signin></Signin>}  />
     <Route path="/signup" element={<Signup></Signup>}  />
     <Route path="/error" element={<Error></Error>}  />
     <Route path="/blank" element={<Blankpage></Blankpage>}  />
     <Route path="/Detail" element={<DetailPage></DetailPage>}  />
    </Routes>
     
   
      
      
      
      
    </div>
   
    
  );
}

export default App;
