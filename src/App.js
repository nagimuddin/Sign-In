import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Page/Home';
import SignIn from './Page/SignIn';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import SignUp from './Page/SignUp';

function App() {
  return (
      <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
  );
}

export default App;
