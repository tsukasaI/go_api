import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { PageHeadline, PageLogin, PageRegister } from "views/pages/index";

function App() {
  return (
    <BrowserRouter>
      <h1>Router</h1>
      <Routes>
        <Route path="/" element={<PageHeadline />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
