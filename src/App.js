import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Page/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import SignUp from './Page/Login/SignUp';
import SignIn from './Page/Login/SignIn';
import CheckOut from './Page/CheckOut/CheckOut';
import RequireAuth from './Page/Login/RequireAuth';
import Zoom from './Page/Zoom/Zoom';

function App() {
  return (
      <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/zoom" element={<Zoom></Zoom>}></Route>
      <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      <Route path="/check-out" element={
      <RequireAuth>
        <CheckOut></CheckOut>
      </RequireAuth>
      }></Route>
      </Routes>
      <Footer></Footer>
      </div>
  );
}

export default App;
