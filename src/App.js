import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Page/Home';
import Footer from './Shared/Footer';
import SignUp from './Page/Login/SignUp';
import SignIn from './Page/Login/SignIn';
import CheckOut from './Page/CheckOut/CheckOut';
import RequireAuth from './Page/Login/RequireAuth';
import Zoom from './Page/Zoom/Zoom';
import Header from './Shared/Header';

function App() {
  return (
      <div>
        <Header></Header>
      <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/check-out" element={<CheckOut></CheckOut>}></Route>
      <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      <Route path="/zoom" element={
      <RequireAuth><Zoom></Zoom> </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
  );
}

export default App;
