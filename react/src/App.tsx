import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  PageWelcome,
  PageHome,
  PageLogin,
  PageRegister,
} from 'views/pages/index'
import { Header, Footer } from 'views/layouts/index'
import { BaseStyle } from 'views/styles'
import { Auth } from 'middleware/index'

function App() {
  return (
    <BrowserRouter>
      <BaseStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Auth path="/" element={<PageWelcome />} />}
        />
        <Route
          path="/login"
          element={<Auth path="/login" element={<PageLogin />} />}
        />
        <Route
          path="/register"
          element={<Auth path="/register" element={<PageRegister />} />}
        />

        <Route
          path="/home"
          element={<Auth path="/home" element={<PageHome />} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
