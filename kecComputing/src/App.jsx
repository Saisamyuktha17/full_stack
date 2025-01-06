

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Samplefunc/Home';
import About from './components/Samplefunc/About';
import Gallery from './components/Samplefunc/Gallery';
import Contact from './components/Samplefunc/Contact';
import UseEffect from './components/Hooks/UseEffect';
import ExamResults from './components/Hooks/UseContext';
import UseRef from './components/Hooks/UseRef';
import UseMemo from './components/Hooks/UseMemo';
import NavBar from './components/Samplefunc/Navbar';
import Form from './components/Samplefunc/Form';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/home" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/useeffect" element = {<UseEffect />} />
          <Route path="/usecontext" element = {<ExamResults />} />
          <Route path="/useref" element = {<UseRef />} />
          <Route path="/usememo" element = {<UseMemo />} />
        </Routes>
      </BrowserRouter>
      <Form/>
    </div>
  );
}

export default App;