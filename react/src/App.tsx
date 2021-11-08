import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Headline, Login } from "views/pages/index";
import {useSelector} from 'react-redux'

function App() {
  // const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  console.log(selector)
  return (
    <BrowserRouter>
      <h1>Router</h1>
      <Routes>
        <Route path="/" element={ <Headline /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/Contact" element={ <Contact />} />
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
