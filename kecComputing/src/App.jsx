import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Samplefunc/Home';
import About from './components/Samplefunc/About';
import Gallery from './Components/Samplefunc/Gallery';
import Contact from './Components/Samplefunc/Contact';
import NavBar from './components/Samplefunc/Navbar';
import Form from './Components/Samplefunc/Form';
import UseEffect from './Components/Hooks/UseEffect';
import UseRef from './Components/Hooks/UseRef';
import ExamResults from './Components/Hooks/UseContext';
import UseMemo from './Components/Hooks/UseMemo';
import Login from './components/Samplefunc/login';
import SignUp from './components/Samplefunc/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <SignUp/>
        <Routes>

          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/useeffect" element = {<UseEffect />} />
          <Route path="/usecontext" element = {<ExamResults />} />
          <Route path="/useref" element = {<UseRef />} />
          <Route path="/usememo" element = {<UseMemo />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Form/>
    </div>
  );
}

export default App;