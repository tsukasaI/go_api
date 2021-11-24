import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { PageHeadline, PageLogin, PageRegister } from "views/pages/index";
import { Header, Footer } from "views/layouts/index";
import { BaseStyle } from 'views/styles';

function App() {
  return (
    <BrowserRouter>
      <BaseStyle />
      <Header />
      <Routes>
        <Route path="/" element={<PageHeadline />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
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
