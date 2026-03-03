import Header from "./UI/Header"
import Footer from "./UI/Footer"
import LoginPage from "./pages/loginPage.jsx"
import HomePage from "./pages/homePage.jsx"
import SignUpPage from "./pages/signupPage.jsx"
import AdminHomePage from "./pages/adminHomePage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes path="/">
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/admin/*" element={<AdminHomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
      <LoginPage />
    </BrowserRouter>
  )
}

export default App
