import styled from 'styled-components'

const Article = styled.article`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 16px;
`

const Time = styled.time`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.8;
`

const Qiita = (props: any) => {
  return (
    <div>
      <h1>qiita</h1>
      {props.props.map((v: any, key: number) => {
        return (
          <Article>
            <header>
              <Time>投稿日: {v.date.substr(0, 10)}</Time>
            </header>
            <h2 className="font-bold text-lg">
              <a href={v.url} rel="noreferrer" target="_blank">
                {v.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </h2>
            <footer className="mt-2">
              <p>
                {v.tags.map((tag: any) => {
                  return (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      <span className="mr-2">
                        {tag.name}
                      </span>
                    </span>
                  )
                })}
              </p>
            </footer>
          </Article>
        )
      })}
    </div>
  )
}

export default Qiita
