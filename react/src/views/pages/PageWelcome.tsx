import { Link } from 'react-router-dom'

const PageWelcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Register</h2>
      <Link to="/register">Register</Link>
      <h2>Login</h2>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default PageWelcome
