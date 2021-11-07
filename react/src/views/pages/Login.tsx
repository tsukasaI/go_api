import axios from 'axios'
// import { useEffect, useState } from 'react';


const Login = () => {
  const login = async () => {
    console.log('click')
    const res = await axios.post('http://localhost:8087/login', {name: 'hogehoge', token: 'acs'})
    console.log(res);
  }

  return (
    <div>
      <button onClick={login}>送信</button>
    </div>
  )
}

export default Login;
