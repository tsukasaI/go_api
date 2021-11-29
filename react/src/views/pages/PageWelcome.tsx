import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Login, Weather } from 'views/components/service'

const WelcomeWrapper = styled.div`
  margin: 16px;
`

const Headline1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-top: 12px;
`
const Headline2 = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-top: 12px;
`

const temp = [
  {
    "time": "2021-11-29 00:00:00",
    "temp": 6.93,
    "feel": 6.93,
    "pressure": 1031,
    "humidity": 61,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-11-29 03:00:00",
    "temp": 8.51,
    "feel": 7.73,
    "pressure": 1030,
    "humidity": 55,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-11-29 06:00:00",
    "temp": 11.9,
    "feel": 10.43,
    "pressure": 1028,
    "humidity": 49,
    "weather": "Clouds",
    "description": "overcast clouds"
  },
  {
    "time": "2021-11-29 09:00:00",
    "temp": 13.69,
    "feel": 12.24,
    "pressure": 1027,
    "humidity": 43,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-11-29 12:00:00",
    "temp": 11.69,
    "feel": 9.99,
    "pressure": 1027,
    "humidity": 41,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-11-29 15:00:00",
    "temp": 10.96,
    "feel": 9.13,
    "pressure": 1027,
    "humidity": 39,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-11-29 18:00:00",
    "temp": 10.15,
    "feel": 8.21,
    "pressure": 1026,
    "humidity": 38,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-11-29 21:00:00",
    "temp": 9.53,
    "feel": 8.96,
    "pressure": 1025,
    "humidity": 40,
    "weather": "Clouds",
    "description": "few clouds"
  },
  {
    "time": "2021-11-30 00:00:00",
    "temp": 10.57,
    "feel": 8.7,
    "pressure": 1025,
    "humidity": 39,
    "weather": "Clear",
    "description": "clear sky"
  },
  {
    "time": "2021-11-30 03:00:00",
    "temp": 14.72,
    "feel": 13.4,
    "pressure": 1022,
    "humidity": 44,
    "weather": "Clouds",
    "description": "few clouds"
  },
  {
    "time": "2021-11-30 06:00:00",
    "temp": 17.26,
    "feel": 16.37,
    "pressure": 1019,
    "humidity": 51,
    "weather": "Clouds",
    "description": "few clouds"
  },
  {
    "time": "2021-11-30 09:00:00",
    "temp": 16.55,
    "feel": 15.75,
    "pressure": 1017,
    "humidity": 57,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-11-30 12:00:00",
    "temp": 16.01,
    "feel": 15.49,
    "pressure": 1016,
    "humidity": 70,
    "weather": "Rain",
    "description": "light rain"
  },
  {
    "time": "2021-11-30 15:00:00",
    "temp": 16.86,
    "feel": 16.48,
    "pressure": 1011,
    "humidity": 72,
    "weather": "Rain",
    "description": "light rain"
  },
  {
    "time": "2021-11-30 18:00:00",
    "temp": 17.69,
    "feel": 17.5,
    "pressure": 1006,
    "humidity": 76,
    "weather": "Rain",
    "description": "light rain"
  },
  {
    "time": "2021-11-30 21:00:00",
    "temp": 17.26,
    "feel": 17.42,
    "pressure": 1001,
    "humidity": 91,
    "weather": "Rain",
    "description": "moderate rain"
  },
  {
    "time": "2021-12-01 00:00:00",
    "temp": 16.73,
    "feel": 16.18,
    "pressure": 1000,
    "humidity": 66,
    "weather": "Rain",
    "description": "light rain"
  },
  {
    "time": "2021-12-01 03:00:00",
    "temp": 17.8,
    "feel": 16.94,
    "pressure": 997,
    "humidity": 50,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-12-01 06:00:00",
    "temp": 17.67,
    "feel": 16.41,
    "pressure": 998,
    "humidity": 35,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-12-01 09:00:00",
    "temp": 15.14,
    "feel": 13.49,
    "pressure": 1001,
    "humidity": 30,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-12-01 12:00:00",
    "temp": 12.83,
    "feel": 11,
    "pressure": 1003,
    "humidity": 32,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-12-01 15:00:00",
    "temp": 11.61,
    "feel": 9.56,
    "pressure": 1005,
    "humidity": 28,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-12-01 18:00:00",
    "temp": 10.3,
    "feel": 8.06,
    "pressure": 1009,
    "humidity": 26,
    "weather": "Clouds",
    "description": "broken clouds"
  },
  {
    "time": "2021-12-01 21:00:00",
    "temp": 9.65,
    "feel": 8.07,
    "pressure": 1012,
    "humidity": 31,
    "weather": "Clouds",
    "description": "few clouds"
  },
  {
    "time": "2021-12-02 00:00:00",
    "temp": 10.1,
    "feel": 8,
    "pressure": 1016,
    "humidity": 32,
    "weather": "Clouds",
    "description": "few clouds"
  },
  {
    "time": "2021-12-02 03:00:00",
    "temp": 11.43,
    "feel": 9.46,
    "pressure": 1015,
    "humidity": 32,
    "weather": "Clear",
    "description": "clear sky"
  },
  {
    "time": "2021-12-02 06:00:00",
    "temp": 12.85,
    "feel": 11.18,
    "pressure": 1016,
    "humidity": 38,
    "weather": "Clear",
    "description": "clear sky"
  },
  {
    "time": "2021-12-02 09:00:00",
    "temp": 12.85,
    "feel": 11.42,
    "pressure": 1018,
    "humidity": 47,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-12-02 12:00:00",
    "temp": 13.81,
    "feel": 12.66,
    "pressure": 1018,
    "humidity": 54,
    "weather": "Rain",
    "description": "light rain"
  },
  {
    "time": "2021-12-02 15:00:00",
    "temp": 12.11,
    "feel": 10.79,
    "pressure": 1018,
    "humidity": 54,
    "weather": "Clear",
    "description": "clear sky"
  },
  {
    "time": "2021-12-02 18:00:00",
    "temp": 10.93,
    "feel": 9.33,
    "pressure": 1017,
    "humidity": 48,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-12-02 21:00:00",
    "temp": 10.47,
    "feel": 8.83,
    "pressure": 1018,
    "humidity": 48,
    "weather": "Clouds",
    "description": "overcast clouds"
  },
  {
    "time": "2021-12-03 00:00:00",
    "temp": 11.88,
    "feel": 10.25,
    "pressure": 1018,
    "humidity": 43,
    "weather": "Clouds",
    "description": "overcast clouds"
  },
  {
    "time": "2021-12-03 03:00:00",
    "temp": 14.04,
    "feel": 12.47,
    "pressure": 1016,
    "humidity": 37,
    "weather": "Clouds",
    "description": "overcast clouds"
  },
  {
    "time": "2021-12-03 06:00:00",
    "temp": 15.22,
    "feel": 13.61,
    "pressure": 1013,
    "humidity": 31,
    "weather": "Clouds",
    "description": "overcast clouds"
  },
  {
    "time": "2021-12-03 09:00:00",
    "temp": 13.82,
    "feel": 12.07,
    "pressure": 1014,
    "humidity": 31,
    "weather": "Clouds",
    "description": "overcast clouds"
  },
  {
    "time": "2021-12-03 12:00:00",
    "temp": 12.39,
    "feel": 10.55,
    "pressure": 1014,
    "humidity": 33,
    "weather": "Clouds",
    "description": "scattered clouds"
  },
  {
    "time": "2021-12-03 15:00:00",
    "temp": 11.03,
    "feel": 9.15,
    "pressure": 1013,
    "humidity": 37,
    "weather": "Clear",
    "description": "clear sky"
  },
  {
    "time": "2021-12-03 18:00:00",
    "temp": 10.07,
    "feel": 8.12,
    "pressure": 1011,
    "humidity": 38,
    "weather": "Clear",
    "description": "clear sky"
  },
  {
    "time": "2021-12-03 21:00:00",
    "temp": 9.47,
    "feel": 8.09,
    "pressure": 1011,
    "humidity": 38,
    "weather": "Clear",
    "description": "clear sky"
  }
]


const PageWelcome = () => {
  return (
    <WelcomeWrapper>
      <Headline1>Welcome to Ysem</Headline1>
      <p>We will give you greater days by supporting info</p>

      <Headline2>First of all, Register your information</Headline2>
      <p className="mb-4">You can use only by name and Password</p>
      <Link
        to="/register"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Register
      </Link>

      <Headline2>Have you already registered? Login from here</Headline2>
      <Login />


      <p>Ysem means Your secretary for effective morning</p>


      <Weather props={temp} />


    </WelcomeWrapper>
  )
}

export default PageWelcome
