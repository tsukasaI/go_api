import styled from 'styled-components'

const WeatherWrapper = styled.div`
  max-height: 200px
`

const tempRound = (temp: number) => {
  return (Math.round(temp * 10) / 10).toFixed(1)
}

const Weather = (props: any) => {
  const isRain = typeof props.props.filter((v: any, key: number) => key < 6).find((v: any) => v.weather === 'Rain') !== 'undefined'
  return (
    <div className="md:flex">
      <p className="font">
        Umbrella:
        <b className={isRain ? 'text-red-600 text-xl' : 'text-gray-400 text-lg'}>{isRain ?  'Necessary' : 'Fine'}</b>
      </p>
      <WeatherWrapper className="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2">Temp</th>
              <th className="px-3 py-2">Feels</th>
              <th className="px-3 py-2">Pressure</th>
              <th className="px-3 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.props.map((v: any, key: number) => {
              const time = v.time.substr(5, 8).replace('-', '/') + '時'

              const icon = () => {
                switch (v.weather) {
                  case 'Clouds':
                    return (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    )
                  case 'Rain':
                    return (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    )
                  case 'Clear':
                    return (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    )

                  default:
                    return (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )
                }
              }

              return (
                <tr key={key} className={key % 2 === 0 ? '' : 'bg-gray-100'}>
                  <td className="px-3 py-2 flex justify-center items-center">
                    {icon()}
                    {time}
                  </td>
                  <td className="px-3 py-2">
                      <p>{tempRound(v.temp)} °C</p>
                  </td>
                  <td className="px-3 py-2">
                      <p>{tempRound(v.feel)} °C</p>
                  </td>
                  <td className="px-3 py-2">{v.pressure} Pa</td>
                  <td className="px-3 py-2">{v.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </WeatherWrapper>

    </div>
  )
}

export default Weather
