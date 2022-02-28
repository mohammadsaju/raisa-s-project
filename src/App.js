import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./private/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <>
      <Router>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<PrivateRoute><Blog/></PrivateRoute>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
