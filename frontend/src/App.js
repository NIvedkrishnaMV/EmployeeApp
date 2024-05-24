import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/add" element={<Add data= {{eName:"" ,eAge:"",ePosition:"",eSalary:""}} method='post'/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
