import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageHeadline, PageLogin, PageRegister } from 'views/pages/index'
import { Header, Footer } from 'views/layouts/index'
import { BaseStyle } from 'views/styles'
import { Auth } from 'middleware/index'

function App() {
  return (
    <BrowserRouter>
      <BaseStyle />
      <Header />
      <Routes>
        <Route path="/" element={<PageHeadline />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/register" element={<PageRegister />} />

        <Route
          path="/test"
          element={<Auth path="/hogehoge" element={<PageRegister />} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
