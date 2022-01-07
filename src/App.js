
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Header from "./Header"
import SwipeButton from "./components/SwipeButton"
import TinderCards from "./components/TinderCards"
import ChatBox from "./components/ChatBox"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<><Header /><TinderCards/><SwipeButton/></>} />
       <Route path="/chat" element={<><Header backButton ="/"/><ChatBox/></>} />
       {/* <Route path="/signup" element={<SignUp/>} />  */}
     </Routes>

   </BrowserRouter>
     
    </div>
  );
}

export default App;

