import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Login, Qiita, Weather } from 'views/components/service'

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

const qiita = [
  {
    "title": "【os.FileInfo】ファイルの属性情報【Golang】",
    "date": "2021-11-28T12:35:22+09:00",
    "url": "https://qiita.com/blackmax1886/items/0e39b5bfc12a4620dbb5",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "ファイル操作",
        "versions": []
      }
    ],
    "description": "# はじめに\nGolangでファイルに関するインターフェースの一つ、os.FileInfoを簡単に調べたのでメモ\n\n# 定義\n\n```go\ntype FileInfo interface {\n\tName() string       // base name of the file\n\tSize() int64        // length in bytes for regular files; system-dependent for others\n\tMode() FileMode     // file mode bits\n\tModTime() time.Time // modification time\n\tIsDir() bool        // abbreviation for Mode().IsDir()\n\tSys() interface{}   // underlying data source (can return nil)\n}\n```\nその名の通り、ファイルの情報に関するインターフェース\nFileInfoはファイル情報を取得するメソッドが使用できる\n\nFileInfo自体はos.Stat()かos.Lstat()で得ることができる\n\n## os.Stat()/Lstat()\n\n```go\nfunc Stat(name string) (FileInfo, error)\n\nfunc Lstat(name string) (FileInfo, error)\n```\nどちらもファイルパスを指定すれば、そのファイルに関する属性FileInfoを返す。基本的には違いがない。\n異なるのはシンボリックリンクの扱いである。\nLstatはシンボリックリンク(他のファイルを参照するリンク)のファイルを渡すと、そのリンク自体のFileInfoを返す。\n一方でStatはリンクを渡すとリンクの先を追跡してFileInfoを返す。\n\n詳しくは以下\n\nhttp://manpages.ubuntu.com/manpages/bionic/ja/man2/stat.2.html\n\nhttps://qiita.com/go_astrayer/items/ab993cdc420d4f7f50d4\n\n## FileInfoのサンプル\nFileInfoの取得方法がわかったので、書いてみる\n事前準備として、任意のディレクトリにtest.txtという空のテキストファイルを作成した\n\n```go\npackage main\n\nimport (\n\t\"log\"\n\t\"os\"\n\t\"path/filepath\"\n)\n\nfunc main() {\n\tfilepath := filepath.FromSlash(\"C:/Users/xxxx/Documents/test.txt\")\n\tfileinfo, err := os.Stat(filepath)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tlog.Println(fileinfo.Name())\n\tlog.Println(fileinfo.Size())\n\tlog.Println(fileinfo.Mode())\n\tlog.Println(fileinfo.ModTime())\n\tlog.Println(fileinfo.IsDir())\n\tlog.Println(fileinfo.Sys())\n}\n```\n実行結果は以下の通り\n\n```\n2021/11/28 12:09:47 test.txt\n2021/11/28 12:09:47 0\n2021/11/28 12:09:47 -rw-rw-rw-\n2021/11/28 12:09:47 2021-11-28 11:47:28.5960394 +0900 JST\n2021/11/28 12:09:47 false\n2021/11/28 12:09:47 \u0026{32 {1214173898 30925826} {1214173898 30925826} {1214173898 30925826} 0 0}\n```\n\ntestという新規ディレクトリを作成して再実行\n\n```go\nfilepath := filepath.FromSlash(\"C:/Users/xxxx/Documents/test\")\n```\n\n```\n2021/11/28 12:11:24 test\n2021/11/28 12:11:24 0\n2021/11/28 12:11:24 drwxrwxrwx\n2021/11/28 12:11:24 2021-11-28 12:10:25.3242045 +0900 JST\n2021/11/28 12:11:24 true\n2021/11/28 12:11:24 \u0026{16 {2096553661 30925829} {2145054610 30925829} {2096553661 30925829} 0 0}\n```\n\nSys()だけドキュメントに記載している内容が殆どなかったので調べてみたところ\nいい記事を発見したので引用\n\nhttps://ascii.jp/elem/000/001/423/1423022/\n\n![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/694714/f1e648a0-6911-9e50-54e0-af5f007f9da8.png)\n\nこれによると、OS特有のファイル属性を利用するときに使うメソッドとのこと。FileInfoにないOS特有の情報もまとまっていたが、Linuxでファイル作成日時が取得できないのは知らなかった。\n\n"
  },
  {
    "title": "【Golang/ goenv】goenv install -lで古いバージョンしか表示されないときの解消法",
    "date": "2021-11-27T20:06:39+09:00",
    "url": "https://qiita.com/zb185423/items/bb4d7ad9b6663da2d4cb",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "goenv",
        "versions": []
      }
    ],
    "description": "## 原因\n\ngoenvのバージョンが古い\n\n\n## 解消方法\n\nアンインストールしてから新しいバージョンをインストール\n\n```\nbrew uninstall goenv \u0026\u0026 brew install --HEAD goenv\n```\n\nで解消しました！\n"
  },
  {
    "title": "AWSLambda(Golang)×DynamoDBのローカル開発環境を整える",
    "date": "2021-11-27T16:33:23+09:00",
    "url": "https://qiita.com/tenshinhan_yamucha/items/2023af1961f8b9a337d0",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "AWS",
        "versions": []
      },
      {
        "name": "DynamoDB",
        "versions": []
      },
      {
        "name": "lambda",
        "versions": []
      },
      {
        "name": "AWSLambda",
        "versions": []
      }
    ],
    "description": "# 目的\nAWS LambdaでバックエンドAPIを構築しているとき、関数の挙動を確認したいときは都度devにデプロイしていました。流石にローカルでの開発環境を整えたいと思ったのですがGoでの使い方の情報が少なかったので個人メモとしてまとめてみました。\n今回はAPI GatewayがトリガーのLambda関数になります。\n→[`serverless invoke local -f \u003cfunction\u003e` で十分らしいです](https://blog.70-10.net/2018/08/29/serverless-typescript/#4-code-classlanguage-textserverless-offlinecode%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%A7%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B)\n\n# 全体の流れ\n\n以下のJavascript filesのところを今回はGolangにしてやってみます。\n\u003cimg width=\"1400\" alt=\"https___qiita-image-store.s3.amazonaws.com_0_27509_b36f68ce-5e37-b597-2eae-0e67bd06d8dd.png (178.1 kB)\" src=\"https://img.esa.io/uploads/production/attachments/1486/2021/06/02/92504/5dbead6f-6167-48eb-9d93-4c6cfa44d67e.png\"\u003e\n\n引用:https://qiita.com/noralife/items/e36621ddd0e5b8ff4447#%E6%A7%8B%E6%88%90\n\n大まかな流れは以下です。\n1. DynamoDB Localをインストール\u0026セットアップ\n2. Serverless offlineをインストール \u0026セットアップ\n\n# DynamoDB Localをインストール\u0026セットアップ\n\n## パッケージインストール\n\n```sh\n$ npm install --save-dev serverless-dynamodb-local\n```\n\n## serverless.ymlにプラグインを追記\n\n```serverless.yml\nplugins: \n - serverless-dynamodb-local\n```\n\n## JDKがなければここでインストール\ndynamodb-localのためにはJavaが必要でしたので、ローカルpcにJavaを入れていない方はインストールします。\n\nインストールの仕方は、mac osだと、以下が参考になります。\nhttps://qiita.com/suke_masa/items/f9af0fb84ad9447ae961\n\n\n## dynamo db localをインストール\n\nserverless.ymlのあるディレクトリにて、\n\n```sh\n$ sls dynamodb install\n```\n\n## カスタム定義\n\n```serverless.yml\ncustom:\n    dynamodb:\n        stages:\n          - dev\n        start:\n          port: 8000\n          inMemory: true\n          migrate: true\n          seed: true\n        seed:\n          development:\n            sources:\n              - table: テーブル名\n```\n\nこの状態で、\n\n```sh\nsls dynamodb start\n```\nでdynamodbがローカルで立ち上がります。\n\n`http://localhost:8000/shell`\n\nにアクセスすると管理画面に移れる。\n\nシェル例\n\n```\nvar params = {\n    TableName: 'pr_enqueteform_dev',\n};\ndynamodb.scan(params, function(err, data) {\n    if (err) ppJson(err);\n    else ppJson(data);\n});\n```\n\n# Serverless offlineをインストール \u0026セットアップ\n\n次にローカルでapi gatewayを試すためにServerless offlineをインストールしていきます。\n\n## パッケージインストール\n\n```sh\n$ npm install --save-dev serverless-offline\n```\n\n## serverless.ymlにプラグインを追記\n\n```serverless.yml\nplugins: \n - serverless-dynamodb-local\n - serverless-offline ### 追記\n```\n\n## カスタム定義\n\n\n```serverless.yml\ncustom:\n  serverless-offline:\n    useDocker: true\n```\n\nこの状態で\n\n```sh\nnpx sls offline\n```\n\nでローカルで起動できます。\n\n※Makefileにて、\n\n```sh\nmake local-test\n```\n\nを打つことでビルド〜offline起動までやってくれるようにしています。\n\n例:\n\n```sh\n$ npx sls offline\nServerless: Deprecation warning: CLI options definitions were upgraded with \u003c中略\u003e\n   ┌───────────────────────────────────────────────────────────────────────────────────────┐\n   │                                                                                       │\n   │   POST | http://localhost:3000/dev/submit                                             │\n   │   POST | http://localhost:3000/2015-03-31/functions/EnqueteformReceiver/invocations   │\n   │                                                                                       │\n   └───────────────────────────────────────────────────────────────────────────────────────┘\n\noffline: [HTTP] server ready: http://localhost:3000 🚀\noffline:\noffline: Enter \"rp\" to replay the last request\n\noffline: POST /dev/submit (λ: EnqueteformReceiver)\n```\n\n上記みたいな感じになっていたら立ち上がっています🎉\n\n# offlineとdynamodb-localを疎通させる\n\nlocalでofflineを使ってlambda apiを叩いてログを出力してみると、\nhandlerのeventsの中の、\n\n`events.APIGatewayProxyRequest.RequestContext.APIID`\n\nが `\"offlineContext_apiId\"`　となっていました。\n\nそこで、この部分で判断して、localのdynamodbクライアントを生成するか本番用のdynamodbクライアントを生成するかを条件分岐させることにします。\n\nlocalのdynamodbクライアントの生成方法は以下でやります。\n\n```go\nfunc (c *DynamoDBClient) OfflineDynamoDBClient(region string, tableName string) *DynamoDBClient {\n\tsess := session.Must(session.NewSession())\n\tconfig := aws.Config{\n\t\tRegion: aws.String(region),\n\t\tEndpoint: aws.String(\"http://host.docker.internal:8000\"),\n\t\tDisableSSL: aws.Bool(true),\n\t\tCredentials: credentials.NewStaticCredentials(\"dummy\", \"dummy\", \"dummy\"),\n\t}\n\n\tdynamodbClient := DynamoDBClient{\n\t\ttableName: tableName,\n\t\tdynamo:    dynamodb.New(sess, \u0026config),\n\t}\n\n\treturn \u0026dynamodbClient\n}\n```\n\n※もっとよい判定方法がありそうな感じです。\n\n\n# 試してみる\nローカルでコードを編集した後、一度ビルドしなければローカルの方にも反映されませんので、\n\n```sh\nmake clean\nmake build\nnpx sls offline\n```\n\nとします。\n\n## curlで疎通してみる\n\nsls offlineしたターミナルとは別のタブにて、\n\n```sh\ncurl http://localhost:3000/dev/submit -X POST -H \"Content-Type: application/json\" -d '{\"category\":\"hogecategory\",\"email\":\"sample@gmail.com\",\"address\":\"東京都\", \"hoge\":{\"id\":\"1001\",\"text\":\"hogehoge\"}}'\n```\n\nsls offlineしたターミナルのタブにてログが出てくる。\n\n```sh\nSTART RequestId: d09*7296d-***-1c72-545b-5**c58d99034 Version: $LATEST\n\n\u003c中略\u003e\n\nEND RequestId: d09729?6d-b4e2-1c72-5*45b-5e**ec58d99034\nREPORT RequestId: d09?7296d-*b4e2-1c72-545b-5c5*d99034\tInit Duration: 189.68 ms\tDuration: 5513.25 ms\tBilled Duration: 5514 ms\tMemory Size: 3008 MB\tMax Memory Used: 34 MB\n```\n実際にローカルのdynamoDBにデータを挿入する関数であれば、\n`http://localhost:8000/shell`\nをみてみると挿入されていることが確認できます！\n\n\n# 参考\n\n[Serverless Framework での AWS Lambda + Go ローカル開発事情](https://qiita.com/frozenbonito/items/effcc31ca2117789f0e9)\n[Serverless アプリケーションをローカルで開発する](https://qiita.com/noralife/items/e36621ddd0e5b8ff4447)\n[serverless framework + TypeScript +DynamoDB のローカル環境](https://zenn.dev/maruware/articles/cac0052812c2e3293dd5)\n[Go で DynamoDB Local を使った時にいろいろハマったのでメモ](https://bearmini.hatenablog.com/entry/2015/10/09/233849)\n[example](https://gist.github.com/Tamal/02776c3e2db7eec73c001225ff52e827)\n"
  },
  {
    "title": "Goで Quick Select を書いた",
    "date": "2021-11-27T11:56:20+09:00",
    "url": "https://qiita.com/comi19/items/f7a7dd250067c5972273",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "競技プログラミング",
        "versions": []
      }
    ],
    "description": "日本語の資料が乏しかったので,ここにまとめます。\n必要な前提知識も多く、この記事単体では完結していないです。\n詳しくは、参考文献等をご参照ください。\nまた、書かれているコードは、以下の問題で検証済みですが、\n不十分であるため、コピペされる方は自己責任でお願いいたします。\n\nhttps://atcoder.jp/contests/abc228/tasks/abc228_c\n\n## Quick Select とは\n「ある配列の中で、k番目に小さい値はいくつ？」に答えるアルゴリズム。\nクイックソートの要領で pivot を選択し、pivotを元に、配列を分割しながら答えを探す。\n愚直に考えると、ソートしてk番目をとればいいが、その場合は、最悪計算量がソートがボトルネックになり$O(nlogn)$になる。\n一方、このアルゴリズムは、平均計算量$O(n)$で解くことができる。\n\n## 実装方針\npivot の選択方法には、以下の方法があるが、今回は中央値の中央値をpivotにすることにした。\n\n- 常に左の要素を採用する\n- ランダムに取得した要素を採用する\n- 中央値の中央値を採用する\n\nまた、pivotに対して、配列を並べ替える戦略が以下にあるが、効率がよい前者を採用した。\n\n- Hoare partition scheme\n- Lomuto partition scheme\n\n## コード\n\n```golang\nfunc insertionSort(a []int, left, right int) {\n\tfor i := left; i \u003c= right; i++ {\n\t\tj := i\n\t\tfor (j \u003e left) \u0026\u0026 (a[j-1] \u003e a[j]) {\n\t\t\ta[j-1], a[j] = a[j], a[j-1]\n\t\t\tj--\n\t\t}\n\t}\n}\n\nfunc median(a []int, left, right int) int {\n\tinsertionSort(a, left, right)\n\treturn a[left+(right-left)/2]\n}\n\nfunc partition(a []int, left, right, pivot int) int {\n\ti := left - 1\n\tj := right + 1\n\n\tfor {\n\t\ti, j = i+1, j-1\n\t\tfor a[i] \u003c pivot {\n\t\t\ti += 1\n\t\t}\n\t\tfor a[j] \u003e pivot {\n\t\t\tj -= 1\n\t\t}\n\t\tif i \u003c j {\n\t\t\ta[i], a[j] = a[j], a[i]\n\t\t} else {\n\t\t\treturn j\n\t\t}\n\t}\n}\n\nfunc selectPivot(a []int, left, right int) int {\n\tif right-left \u003c 5 {\n\t\treturn median(a, left, right)\n\t}\n\n\tfor i := left; i+4 \u003c= right; i += 5 {\n\t\tinsertionSort(a, i, i+4)\n\t\ta[i+2], a[left+(i-left)/5] = a[left+(i-left)/5], a[i+2]\n\t}\n\n\tn := right - left + 1\n\treturn innerSelect(a, left, left+n/5-1, left+n/10-1)\n}\n\nfunc innerSelect(a []int, left, right, kth int) int {\n\tif left == right {\n\t\treturn a[left]\n\t}\n\n\tpivot := selectPivot(a, left, right)\n\tpivotIndex := partition(a, left, right, pivot)\n\tif kth \u003c= pivotIndex {\n\t\treturn innerSelect(a, left, pivotIndex, kth)\n\t} else {\n\t\treturn innerSelect(a, pivotIndex+1, right, kth)\n\t}\n}\n\nfunc QuickSelect(a []int, left, right, kth int) int {\n\treturn innerSelect(a, left, right, kth)\n}\n\n```\n\n## 参考文献\n\n### クイックセレクトの考え方の元となるクイックソートの詳細\n- https://en.wikipedia.org/wiki/Quicksort\n\n### クイックセレクトの実装の概要\n- https://en.wikipedia.org/wiki/Quickselect\n- http://www.dais.is.tohoku.ac.jp/~shioura/teaching/ad09/ad09-05.pdf\n- https://en.wikipedia.org/wiki/Median_of_medians\n\n### 中央値の中央値のわかりやすい解説\n- http://www.flint.jp/blog/?entry=109\n\n### 実装がハマったときにみたサイト\n- https://stackoverflow.com/questions/58331986/quickselect-with-hoare-partition-scheme\n\n\n"
  },
  {
    "title": "Golang + EchoでJWTを使ってみる",
    "date": "2021-11-25T17:25:33+09:00",
    "url": "https://qiita.com/gs1068/items/7dc95a21eb6611714855",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "api",
        "versions": []
      },
      {
        "name": "JWT",
        "versions": []
      },
      {
        "name": "echo",
        "versions": []
      },
      {
        "name": "golang,Go",
        "versions": []
      }
    ],
    "description": "#はじめに\nJWT(JSON Web Token)をSPAに使用するべきか否かの議論はありますが、今回はそれは度外視にGolangのEchoでJWTを使用するケースを想定し、実装をしてみようと思います。今回は説明を省きますが、当方フロントエンドにNext.js、AuthenticateにFirebaseを一部使用しています。またJWTの基本的な説明は公式サイトや他参考記事をご覧ください。\n\n# ゴール\n- 任意のペイロードを設定できる\n- GoアプリケーションでJWTが発行できる\n- リクエスト内にJWTトークンを認可し適切な処理ができる\n- JWTの送信者の本人認証ができる\n\n# 実行環境\n- Mac 11.5.2\n- Docker Desktop 4.0.0\n- Golang\n- Echo\n- Gorm\n\n# イメージ図\n![test.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/932783/36b0a2f0-ea77-fdb4-5188-fc86641b2636.png)\n\n# 手順一覧\n- Echo環境構築\n- ルーティング設定\n- ログインメソッドとペイロードの設定とJWTの発行\n- 本人確認メソッド\n- PostmanでのJWTの扱い方\n- JavaScript（Typescript）でfetchメソッドでのJWTの取り扱い方\n\n# Echo環境構築\n基本的なEchoの環境構築、実装は過去記事または公式をご参考ください。\n\nhttps://qiita.com/gs1068/items/194a4c35a3709d7a4342\n\nhttps://echo.labstack.com/\n\n# ルーティング設定\n\nEchoのJWT環境構築は公式を参考に構築していきます。\n\nhttps://echo.labstack.com/cookbook/jwt/\n\n:::note info\nエンドポイント以降、\"/restricted\"をrとしてグループ化する。\n上記でグループ化したrをEchoのmiddleware.JWTを経由させる。\nこうすることで/restricted/以降はJWT認証を行う。\n:::\n\n```main.go\npackage main\n\nimport (\n\t\"net/http\"\n\t\"github.com/labstack/echo\"\n\t\"github.com/labstack/echo/middleware\"\n)\n\nfunc main() {\n\trouter := newRouter()\n\trouter.Logger.Fatal(router.Start(\":8080\"))\n}\n\nfunc newRouter() *echo.Echo {\n\te := echo.New()\n\te.Use(middleware.CORS())\n\te.GET(\"/\", func(c echo.Context) error {\n\t\treturn c.String(http.StatusOK, \"Hello, World!\")\n\t})\n\n\tr := e.Group(\"/restricted\")\n// グループ化されたrをmiddlwwareを経由するように設定\n// ルーティングでeを選択するとJWT認証をせず、rを選択するとJWT認証を行うことができる。\n\tr.Use(middleware.JWT([]byte(\"secret\")))\n\tr.POST(\"/login\", middle_ware.Login())\n\tr.POST(\"/user\", controllers.UserCreate())\n\tr.GET(\"/user/:id\", controllers.UserShow())\n\tr.PUT(\"/user/:id\", controllers.UserEdit())\n\tr.DELETE(\"/user/:id\", controllers.UserDelete())\n\treturn e\n}\n```\n\n# ログインメソッドとJWTの発行\n\n公式はHTMLのformタグから直接値を取得する方法で実装してますが、今回はNext.jsから送られてくるJSONを使用します。\n\n```go\ntype LoginUser struct {\n\tId    string `json:\"id\"`\n\tEmail string `json:\"email\"`\n\tUid   string `json:\"uid\"`\n}\n\ntype AuthUser struct {\n\tId        string `json:\"id\"`\n\tEmail     string `json:\"email\"`\n\tUidDigest string `json:\"uid_digest\"`\n}\n\nfunc Login() echo.HandlerFunc {\n\treturn func(c echo.Context) error {\n\t\tdb := dbconnect.Connect()\n\t\tdefer db.Close()\n\n\t\tloginUser := new(LoginUser)\n\t\tif err := c.Bind(loginUser); err != nil {\n\t\t\treturn err\n\t\t}\n\n\t\temail := loginUser.Email\n\t\tuid := loginUser.Uid\n\n\t\tuser := AuthUser{}\n\t\tresult := db.Table(\"users\").Find(\u0026user, \"email = ?\", email)\n\t\tif result.RecordNotFound() {\n\t\t\tfmt.Println(\"IDかfirebase_idが間違っています\")\n\t\t\treturn echo.ErrUnauthorized\n\t\t} else {\n\t\t\thashedUid := user.UidDigest\n\t\t\terr := bcrypt.CompareHashAndPassword([]byte(hashedUid), []byte(uid))\n\t\t\tif err != nil {\n\t\t\t\tfmt.Println(\"IDかfirebase_idが間違っています\")\n\t\t\t\treturn echo.ErrUnauthorized\n\t\t\t} else {\n\t\t\t\tid := user.Id\n\t\t\t\ttoken := jwt.New(jwt.SigningMethodHS256)\n\t\t\t\tclaims := token.Claims.(jwt.MapClaims)\n\t\t\t\tclaims[\"uid\"] = uid\n\t\t\t\tclaims[\"id\"] = id\n\t\t\t\tclaims[\"admin\"] = false\n\t\t\t\tclaims[\"iat\"] = time.Now().Unix()\n\t\t\t\tclaims[\"exp\"] = time.Now().Add(time.Hour * 24).Unix()\n\t\t\t\tt, err := token.SignedString([]byte(\"secret\"))\n\t\t\t\tif err != nil {\n\t\t\t\t\treturn err\n\t\t\t\t}\n\t\t\t\treturn c.JSON(http.StatusOK, map[string]string{\n\t\t\t\t\t\"token\": t,\n\t\t\t\t})\n\t\t\t}\n\t\t}\n\t}\n}\n```\n\n少し回りくどい実装をしているため解説いたします。\n\nLoginUserを初期化し、JSONで送られてくるデータをバインドします。\nバインドしたデータからメールアドレスとfirebase UIDを変数に格納します。\n\n```go\nloginUser := new(LoginUser)\nif err := c.Bind(loginUser); err != nil {\n\treturn err\n}\n\nemail := loginUser.Email\nuid := loginUser.Uid\n```\n\n取得したメースアドレスを基にusersテーブルからユーザーを取得します。\n\n```go\nresult := db.Table(\"users\").Find(\u0026user, \"email = ?\", email)\n```\n\n上記でユーザーが取得できた場合、ユーザー作成時にFIrebaes Uidをハッシュ化したUidDigestを基にログイン時に取得したFirebase UIDを比較します。\n*ハッシュ化にはbcryptを使用しています。\n\nhttps://pkg.go.dev/golang.org/x/crypto/bcrypt\n\n```go\nhashedUid := user.UidDigest\nerr := bcrypt.CompareHashAndPassword([]byte(hashedUid), []byte(uid))\nif err != nil {\n\tfmt.Println(\"IDかfirebase_idが間違っています\")\n\treturn echo.ErrUnauthorized\n```\n\nペーロードの設定とTokenの発行\nここは各プロジェクトで必要な値を入れればOKです。\n\n:::note info\nJWTはJavaScriptなどで容易にデコード可能なため、含める情報には機密情報は含めないことを強くお勧めいたします。\n:::\n\n| クレーム名 | 説明 |\n|:---------------|:----------------------------|\n| uid |Firebase UID|\n| id |usersテーブルのID|\n| admin | ユーザーを管理者かどうかを判断する true or false |\n| exp | JWT 有効期限 |\n| iat | isuued at の略。JWT 発行時刻 |\n\n```go\nid := adminUser.Id\ntoken := jwt.New(jwt.SigningMethodHS256)\nclaims := token.Claims.(jwt.MapClaims)\nclaims[\"uid\"] = uid\nclaims[\"id\"] = id\nclaims[\"admin\"] = true\nclaims[\"iat\"] = time.Now().Unix()\nclaims[\"exp\"] = time.Now().Add(time.Hour * 24).Unix()\nt, err := token.SignedString([]byte(\"secret\"))\nif err != nil {\n\treturn err\n}\nreturn c.JSON(http.StatusOK, map[string]string{\n\t\"token\": t,\n})\n```\n\nログインのメソッドを送ると以下のような結果が返ってきます。\n\n```json\n{\n    \"email\": \"golang.jwt@test.com\",\n    \"uid\": \"CS1z7P70T4ZYNkl0mg37Rujv6Iu1\"\n}\n```\n\n```json\n// 成功時\n{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImV4cCI6MTYzNzgyMzczNiwiaWF0IjoxNjM3NzM3MzM2LCJpZCI6InVzZXIiLCJ1aWQiOiJDUzF6N1A3MFQ0WllOa2wwbWczN1J1anY2SXUxIn0.bxHJChPl8Oi6Mfpub02k5POv0n5F8P4Z8kUilEeMN_E\"\n}\n\n// 失敗時\n{\n    \"message\": \"Unauthorized\"\n}\n```\n\n# 本人確認メソッド\n\nあくまでも一例ですが、パラメータとして送られてくるUserのIDと一緒に送られてくるJWTに含まれるidが一致するかをチェックするメソッドを紹介します。\nrを含めるルーティング（EchoのMiddleware）はあくまでもJWTの有効性を確認するだけの処理なので本人確認までは担保しません。ですのでデータの編集や削除などの本人しか行わないような処理には本人確認処理を行うことをお勧めします。\n\n```go\n// 本人かどうかでTrue/Falseを返す。\nfunc Auth(c echo.Context, id string) bool {\n\tcurrentUser := c.Get(\"user\").(*jwt.Token)\n\tclaims := currentUser.Claims.(jwt.MapClaims)\n\tuserId := claims[\"id\"].(string)\n\n\tdb := dbconnect.Connect()\n\tdefer db.Close()\n\tuser := User{}\n// 渡されたuser_idでUserを取得する。\n\tresult := db.Table(\"users\").Find(\u0026user, \"id = ?\", id)\n\tif result.RecordNotFound() {\n\t\tfmt.Println(\"レコードが見つかりません\")\n\t\treturn false\n\t} else {\n// 取得したUserのIDとJWTのIDが一致するかチェックする。\n\t\tif user.Id != userId {\n\t\t\tfmt.Println(\"ユーザーが一致しません\")\n\t\t\treturn false\n\t\t} else {\n\t\t\treturn true\n\t\t}\n\t}\n}\n\nfunc UserEdit() echo.HandlerFunc {\n\treturn func(c echo.Context) error {\n\t\tdb := dbconnect.Connect()\n\t\tdefer db.Close()\n\n\t\tuser_id := c.Param(\"id\")\n\t\tnew_user := new(User)\n\t\tuser := User{}\n// Authメソッドを呼び出し、パラメータのuser_idを渡す。\n\t\tjudgement := Auth(c, user_id)\n\t\tif err := c.Bind(new_user); err != nil {\n\t\t\treturn err\n\t\t}\n\t\tif !judgement {\n\t\t\treturn c.JSON(http.StatusNotFound, nil)\n\t\t} else {\n\t\t\tresult := db.Table(\"users\").First(\u0026user, \"id = ?\", user_id).Update(\u0026new_user)\n\t\t\tif result.RecordNotFound() {\n\t\t\t\tfmt.Println(\"レコードが見つかりません\")\n\t\t\t\treturn c.JSON(http.StatusNotFound, nil)\n\t\t\t} else {\n\t\t\t\treturn c.JSON(http.StatusOK, user)\n\t\t\t}\n\t\t}\n\t}\n}\n```\n\n# PostmanでのJWTの扱い方\n\n1. Authorizationをクリック\n\n![スクリーンショット 2021-11-25 17.06.54.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/932783/49ace643-4455-c098-a42d-56b3cba5612a.png)\n\n2. Bearer Tokenを選択\n\n![スクリーンショット 2021-11-25 17.07.49.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/932783/901cfb0b-2414-6953-3d3e-a7fa8c135db8.png)\n\n\n3. ログインメソッドで取得したJWTを入力する\n\n![スクリーンショット 2021-11-25 17.08.54.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/932783/4be614aa-967e-f2e5-e9e4-8dc849747fd1.png)\n\nあとはURLやJSONなどを含めてリクエストするだけです！\n\n# JavaScript（Typescript）でfetchメソッドでのJWTの取り扱い方\n\nTypescriptですみません。型を消してくれれはOKです。\n\n```typescript\nconst editAdminUser = async (\n  data: Level,\n  id: string,\n  self_id: string,\n  jwt: string\n) =\u003e {\n  try {\n    await fetch(\n// 環境変数を呼び出してますが、エンドポイントが含まれます\n      process.env.NEXT_PUBLIC_API_URL_RESTRICTED +\n        \"user/\" +\n        \"/\" +\n        id,\n      {\n        method: \"PUT\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer\" + \":\" + jwt,\n        },\n        body: JSON.stringify(data),\n      }\n    );\n  } catch (err) {\n    return err;\n  }\n};\n```\n\nheaderの中に以下を含めます。（jwtには実際のトークンを代入してください）\n\n```typescript\nAuthorization: \"Bearer\" + \":\" + jwt\n```\n\nよかったら参考にしてみてください。\nそれでは👋\n\n#参考記事\n\nhttps://qiita.com/gs1068/items/194a4c35a3709d7a4342\n\nhttps://echo.labstack.com/\n\nhttps://jwt.io/\n\nhttps://qiita.com/Naoto9282/items/8427918564400968bd2b\n\nhttps://techblog.yahoo.co.jp/advent-calendar-2017/jwt/\n\nhttps://pkg.go.dev/golang.org/x/crypto/bcrypt\n"
  },
  {
    "title": "いろいろな言語でAPIコールするよ！",
    "date": "2021-11-25T10:22:51+09:00",
    "url": "https://qiita.com/teppei22/items/9562f5592ccdcad07c41",
    "tags": [
      {
        "name": "Python",
        "versions": []
      },
      {
        "name": "PHP",
        "versions": []
      },
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "WebAPI",
        "versions": []
      },
      {
        "name": "api",
        "versions": []
      }
    ],
    "description": "## 導入\nwebAPIの叩き方を各言語でまとめました。\n後で見返す用です。\n2021年11月23日時点：Postリクエスト送信\n\n### json リクエストのサンプルパラメータ\n\n```python\nsample_endpoint = \"http://localhost:8888/sample\"\nsample_parameter = {\n    \"title\": \"トマトスープ\",\n    \"making_time\": \"15分\",\n    \"serves\": \"5人\",\n    \"ingredients\": \"玉ねぎ, トマト, スパイス, 水\",\n    \"cost\": \"450\"\n}\n```\n### Curl\n```terminal\ncurl --location --request POST 'http://localhost:8888/recipes' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"title\": \"トマトスープ\",\n    \"making_time\": \"15分\",\n    \"serves\": \"5人\",\n    \"ingredients\": \"玉ねぎ, トマト, スパイス, 水\",\n    \"cost\": \"450\"\n}'\n```\n\n### Go\n```golang\npackage main\n\nimport (\n  \"fmt\"\n  \"strings\"\n  \"net/http\"\n  \"io/ioutil\"\n)\n\nfunc main() {\n\n  url := \"http://localhost:8888/recipes\"\n  method := \"POST\"\n\n  payload := strings.NewReader(`{\n    \"title\": \"トマトスープ\",\n    \"making_time\": \"15分\",\n    \"serves\": \"5人\",\n    \"ingredients\": \"玉ねぎ, トマト, スパイス, 水\",\n    \"cost\": \"450\"\n}`)\n\n  client := \u0026http.Client {\n  }\n  req, err := http.NewRequest(method, url, payload)\n\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  req.Header.Add(\"Content-Type\", \"application/json\")\n\n  res, err := client.Do(req)\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  defer res.Body.Close()\n\n  body, err := ioutil.ReadAll(res.Body)\n  if err != nil {\n    fmt.Println(err)\n    return\n  }\n  fmt.Println(string(body))\n}\n```\n\n### php\n```php\n\u003c?php\nrequire_once 'HTTP/Request2.php';\n$request = new HTTP_Request2();\n$request-\u003esetUrl('http://localhost:8888/recipes');\n$request-\u003esetMethod(HTTP_Request2::METHOD_POST);\n$request-\u003esetConfig(array(\n  'follow_redirects' =\u003e TRUE\n));\n$request-\u003esetHeader(array(\n  'Content-Type' =\u003e 'application/json'\n));\n$request-\u003esetBody('{\\n    \"title\": \"トマトスープ\",\\n    \"making_time\": \"15分\",\\n    \"serves\": \"5人\",\\n    \"ingredients\": \"玉ねぎ, トマト, スパイス, 水\",\\n    \"cost\": \"450\"\\n}');\ntry {\n  $response = $request-\u003esend();\n  if ($response-\u003egetStatus() == 200) {\n    echo $response-\u003egetBody();\n  }\n  else {\n    echo 'Unexpected HTTP status: ' . $response-\u003egetStatus() . ' ' .\n    $response-\u003egetReasonPhrase();\n  }\n}\ncatch(HTTP_Request2_Exception $e) {\n  echo 'Error: ' . $e-\u003egetMessage();\n}\n```\n\n### python\n```python\nimport requests\nimport json\n\nurl = \"http://localhost:8888/recipes\"\n\npayload = json.dumps({\n  \"title\": \"トマトスープ\",\n  \"making_time\": \"15分\",\n  \"serves\": \"5人\",\n  \"ingredients\": \"玉ねぎ, トマト, スパイス, 水\",\n  \"cost\": \"450\"\n})\nheaders = {\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload)\n\nprint(response.text)\n```\n\n## これから\ngetパラメータの記述方法なども追記していく\n\n"
  },
  {
    "title": "【Golang】ポインタ型の int 変数に値をセットする",
    "date": "2021-11-24T15:13:11+09:00",
    "url": "https://qiita.com/KEINOS/items/2ed8f47e6ff3c22ff44c",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "ポインタ",
        "versions": []
      }
    ],
    "description": "ここ 1 年で作成・更新された記事を[「\"golang\" ポインタに値をセットする int」でググって](https://www.google.com/search?q=%22golang%22+%E3%83%9D%E3%82%A4%E3%83%B3%E3%82%BF%E3%81%AB%E5%80%A4%E3%82%92%E3%82%BB%E3%83%83%E3%83%88%E3%81%99%E3%82%8B+int\u0026tbs=qdr:y)も、わかりやすいタイトルがヒットしなかったので、自分のググラビリティとして。\n\n## TL; DR \u003csub\u003e\u003csup\u003e\u003csub\u003e\u003csup\u003e（今北産業）\u003c/sup\u003e\u003c/sub\u003e\u003c/sup\u003e\u003c/sub\u003e\n\n```go:変数の前に*を付ける\nfunc resetToTen(i *int) {\n\t*i = 10 // \u003c- ここ\n}\n```\n```go:動くサンプル\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n\ti := 100\n\n\tresetToTen(\u0026i)\n\n\tfmt.Println(i)\n}\n\nfunc resetToTen(i *int) {\n\t*i = 10\n}\n// Output: 10\n```\n- [オンラインで動作をみる](https://go.dev/play/p/vlQgqqLtcMR) @ Go Playground\n\n## 参考文献\n\n- [Go で関数に渡したポインタの値を変更するには](https://qiita.com/m_green14/items/1efe3f887aee082ba4ef) @ Qiita\n  - 「`\u0026` や `*` をどうつけたらいいか、よくわからなくなってしまいがち」な人は必読。\n\n"
  },
  {
    "title": "zinのLogin",
    "date": "2021-11-24T00:21:19+09:00",
    "url": "https://qiita.com/m_k_n/items/97218d944cfee28bf8dc",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "Zin",
        "versions": []
      }
    ],
    "description": "#はじめに\nGolangのZinを使いログイン処理を書きました　\n\n#Login\n```\n[hoge] % tree                                                                         ~/go/src/login\n.\n├── SessionInfo\n│   └── sessioninfo.go\n├── controller\n│   └── Login.go\n├── crypto\n│   └── crypto.go\n├── db\n│   └── db.go\n├── go.mod\n├── go.sum\n├── login\n├── main.go\n├── migrate\n│   └── migrate.go\n├── model\n│   ├── Login.go\n│   └── User.go\n└── template\n    ├── login.html\n    ├── logout.html\n    ├── menu.html\n    └── singup.html\n\n7 directories, 15 files\n```\n\n##main\n```\npackage main\n\nimport (\n   \"log\"\n   sessioninfo \"login/SessionInfo\"\n   \"login/controller\"\n   \"net/http\"\n\n   \"github.com/gin-contrib/sessions\"\n   \"github.com/gin-contrib/sessions/cookie\"\n   \"github.com/gin-gonic/gin\"\n)\n\nvar LoginInfo sessioninfo.SessionInfo\n\nfunc main() {\n   engine := gin.Default()\n   engine.LoadHTMLGlob(\"template/*\")\n   store := cookie.NewStore([]byte(\"select\"))\n   engine.Use(sessions.Sessions(\"mysession\", store))\n\n   engine.GET(\"/login\", func(c *gin.Context) {\n       c.HTML(200, \"login.html\", gin.H{\n           \"UserId\": \"\",\n       })\n   })\n   engine.POST(\"/login\", controller.NewLogin().LoginK)\n\n   engine.GET(\"/singup\", func(c *gin.Context) {\n       c.HTML(200, \"singup.html\", gin.H{})\n   })\n   engine.POST(\"/singup\", controller.NewLogin().SingUp)\n   menu := engine.Group(\"/menu\")\n   menu.Use(sessionCheck())\n   {\n       menu.GET(\"/top\", controller.GetMenu)\n       \n   }\n\n   engine.POST(\"/logout\", controller.PostLogout)\n   engine.Run(\":8080\")\n}\n\nfunc sessionCheck() gin.HandlerFunc {\n   return func(c *gin.Context) {\n       session := sessions.Default(c)\n       LoginInfo.Name = session.Get(\"name\")\n       // セッションがない場合、ログインフォームをだす\n       if LoginInfo.Name == nil {\n           log.Println(session)\n           log.Println(\"ログインしていません\")\n           c.Redirect(http.StatusMovedPermanently, \"/login\")\n           c.Abort() // これがないと続けて処理されてしまう\n       } else {\n           c.Set(\"name\", LoginInfo.Name) // ユーザidをセット\n           c.Next()\n       }\n       log.Println(\"ログインチェック終わり\")\n   }\n}\n```\n\n\n\n##db\n```\npackage db\n\nimport (\n \"fmt\"\n \"os\"\n\n \"github.com/jinzhu/gorm\"\n _ \"github.com/jinzhu/gorm/dialects/mysql\"\n \"github.com/joho/godotenv\"\n)\n\nfunc Connection() *gorm.DB {\n err := godotenv.Load(fmt.Sprintf(\"./%s.env\", os.Getenv(\"GO_ENV\")))\n if err != nil {\n   // .env読めなかった場合の処理\n }\n DBMS := os.Getenv(\"login_DBMS\")\n USER := os.Getenv(\"login_USER\")\n PASS := os.Getenv(\"login_PASS\")\n DBNAME := os.Getenv(\"login_DBNAME\")\n CONNECT := USER + \":\" + PASS + \"@/\" + DBNAME + \"?parseTime=true\"\n db, err := gorm.Open(DBMS, CONNECT)\n\n if err != nil {\n   panic(err.Error())\n }\n db.LogMode(true)\n return db\n}\n```\n\n\n\n\n##migrate\n```\npackage main\n\nimport (\n   \"login/db\"\n   \"login/model\"\n)\n\nfunc main() {\n   db := db.Connection()\n   defer db.Close()\n\n   db.AutoMigrate(\u0026model.Login{})\n   db.AutoMigrate(\u0026model.User{})\n}\n```\n\n\n\n##model\n###DB\n```\npackage model\n\nimport (\n   _ \"github.com/go-sql-driver/mysql\"\n   \"github.com/jinzhu/gorm\"\n   _ \"github.com/jinzhu/gorm/dialects/mysql\"\n)\n\ntype Login struct {\n   gorm.Model\n   Name string `gorm:\"unique; not null\"`\n   Pass string `gorm:\"not null\"`\n}\n```\n\n\n\n##crypto\n```\npackage crypto\n\nimport (\n   \"golang.org/x/crypto/bcrypt\"\n)\n\n// PasswordEncrypt パスワードをhash化\nfunc PasswordEncrypt(password string) (string, error) {\n   hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)\n   return string(hash), err\n}\n\n// CompareHashAndPassword hashと非hashパスワード比較\nfunc CompareHashAndPassword(hash, password string) error {\n   return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))\n}\n```\n##Sessions \n```\npackage sessioninfo\n\ntype SessionInfo struct {\n   Name interface{}\n}\n```\n \n\n##Controller\n```\npackage controller\n\nimport (\n   \"log\"\n   \"login/crypto\"\n   \"login/db\"\n   \"login/model\"\n   \"net/http\"\n\n   \"github.com/gin-contrib/sessions\"\n   \"github.com/gin-gonic/gin\"\n)\n\ntype Login struct{}\n\nfunc NewLogin() *Login {\n   return \u0026Login{}\n}\n\nfunc LoginM(c *gin.Context, name string) {\n   session := sessions.Default(c)\n   session.Set(\"name\", name)\n   session.Save()\n}\nfunc getUser(username string) model.Login {\n   db := db.Connection()\n   var user model.Login\n   db.First(\u0026user, \"name = ?\", username)\n   db.Close()\n   return user\n}\nfunc (l *Login) LoginK(c *gin.Context) {\n   db := db.Connection()\n   defer db.Close()\n   log.Println(\"ログイン処理\")\n   name := c.PostForm(\"name\")\n\n   LoginM(c, name) // // 同じパッケージ内のログイン処理\n\n   dbPassword := getUser(c.PostForm(\"name\")).Pass\n   log.Println(dbPassword)\n   // フォームから取得したユーザーパスワード\n   formPassword := c.PostForm(\"pass\")\n\n   // ユーザーパスワードの比較\n   if err := crypto.CompareHashAndPassword(dbPassword, formPassword); err != nil {\n       log.Println(\"ログインできませんでした\")\n\n       c.Abort()\n   } else {\n       log.Println(\"ログインできました\")\n       c.Redirect(http.StatusMovedPermanently, \"/menu/top\")\n   }\n}\nfunc (l *Login) SingUp(c *gin.Context) {\n   var form Login\n   if err := c.Bind(\u0026form); err != nil {\n       c.Abort()\n   } else {\n       username := c.PostForm(\"name\")\n       password := c.PostForm(\"pass\")\n       // 登録ユーザーが重複していた場合にはじく処理PasswordEncrypt\n\n       passwordEncrypt, _ := crypto.PasswordEncrypt(password)\n       db := db.Connection()\n       defer db.Close()\n\n       if err := db.Create(\u0026model.Login{Name: username, Pass: passwordEncrypt}).GetErrors(); err != nil {\n\n       }\n       c.Redirect(302, \"/login\")   }\n}\nfunc PostLogout(c *gin.Context) {\n   log.Println(\"ログアウト処理\")\n   Logout(c) // 同じパッケージ内のログアウト処理\n\n   // ログインフォームに戻す\n   c.HTML(http.StatusOK, \"login.html\", gin.H{\n       \"name\":         \"\",\n       \"ErrorMessage\": \"\",\n   })\n}\nfunc Logout(c *gin.Context) {\n   session := sessions.Default(c)\n   log.Println(\"セッション取得\")\n   session.Clear()\n   log.Println(\"クリア処理\")\n   session.Save()\n}\nfunc GetMenu(c *gin.Context) {\n   name, _ := c.Get(\"name\") // ログインユーザの取得\n\n   c.HTML(http.StatusOK, \"menu\", gin.H{\"name\": name})\n}\n\n```\n\n\n"
  },
  {
    "title": "【rclone】過去のコミットからプロジェクトの作り方やコーディングを学ぶ 1【Golang】",
    "date": "2021-11-23T18:51:34+09:00",
    "url": "https://qiita.com/blackmax1886/items/801c6ee7951b958ad76c",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "GitHub",
        "versions": []
      },
      {
        "name": "GoogleDrive",
        "versions": []
      },
      {
        "name": "GoogleDriveAPI",
        "versions": []
      },
      {
        "name": "rclone",
        "versions": []
      }
    ],
    "description": "# はじめに\nGolangを始めてから簡単なコーディングは理解できるようになったが、その先の学習方針に困った。\nコーディングに関してはコードを読むのが一番だと思い、OSSの一つであるrcloneのコードを選んで読んでみることにする。\n\n# rcloneについて\nサードパーティ製クラウドデータ同期のコマンドラインツールである。特に公式のアプリの同期がうまくいかないときに導入を検討した人もいるのではないだろうか。幅広くクラウドサービスに対応しているようだ。\n\nhttps://rclone.org/\n\nhttps://github.com/rclone/rclone\n\nちょうどGoogle Driveの同期が悪くて導入したかったので、中のコードを読んでみる\n\n\n# Initial Commit\n\n## Swiftssync\n当初はSwitfとのファイルやディレクトリの同期を目的として作成されたようだ\nなので、Mainパッケージのファイル名もswiftssync.goとなっている。\n\n## コマンドラインのフラグを定義\nコマンドラインからのフラグが定義されている。\n\n```golang:swiftssync.go\n// Globals\nvar (\n\t// Flags\n\t//fileSize      = flag.Int64(\"s\", 1E9, \"Size of the check files\")\n\tcpuprofile = flag.String(\"cpuprofile\", \"\", \"Write cpu profile to file\")\n\t//time.Hour \u0026 time.Minute = constants\n\t//duration      = flag.Duration(\"duration\", time.Hour*24, \"Duration to run test\")\n\t//statsInterval = flag.Duration(\"stats\", time.Minute*1, \"Interval to print stats\")\n\t//logfile       = flag.String(\"logfile\", \"stressdisk.log\", \"File to write log to set to empty to ignore\")\n\n\tsnet    = flag.Bool(\"snet\", false, \"Use internal service network\") // FIXME not implemented\n\tverbose = flag.Bool(\"verbose\", false, \"Print lots more stuff\")\n\tquiet   = flag.Bool(\"quiet\", false, \"Print as little stuff as possible\")\n\t// FIXME make these part of swift so we get a standard set of flags?\n\tauthUrl  = flag.String(\"auth\", os.Getenv(\"SWIFT_AUTH_USER\"), \"Auth URL for server. Defaults to environment var SWIFT_AUTH_USER.\")\n\tuserName = flag.String(\"user\", os.Getenv(\"ST_USER\"), \"User name. Defaults to environment var ST_USER.\")\n\tapiKey   = flag.String(\"key\", os.Getenv(\"ST_KEY\"), \"API key (password). Defaults to environment var ST_KEY.\")\n)\n\n```\n### コマンドラインのフラグとは\nコマンドラインで指定できるオプションのこと\n例えば\n\n```\ngo build xxxx.go -v -o xxxx.exe\n```\nにおける**-v** や **-o** のこと。\n\n## flagパッケージ\nGoではコマンドラインから受け取るフラグや引数の管理をflagパッケージで行うことができる。\n\n```go\nauthUrl  = flag.String(\"auth\", os.Getenv(\"SWIFT_AUTH_USER\"), \"Auth URL for server. Defaults to environment var SWIFT_AUTH_USER.\")\n```\nauthUrl : フラグの変数のポインタ\n\"auth\" : フラグの名前、コマンドラインで指定するときの名前\nos.Getenv(\"SWIFT_AUTH_USER\") : フラグのデフォルト値 / ここでは環境変数からSWIFTのサーバーURLを取得している\n\"Auth URL....\" : このフラグに対する説明 / フラグの情報を見るフラグ **-h** or **--help** で見ることができる\n\nフラグについては以下のリンクがわかりやすい\n\nhttps://www.spinute.org/go-by-example/command-line-flags.html\n\nhttps://qiita.com/mocotan/items/b1889ca798d5331a23c2\n\n### flag.Usage/PrintDefaults\n\n```golang\nfunc main() {\n\tflag.Usage = syntaxError\n}\nfunc syntaxError() {\n\tfmt.Fprintf(os.Stderr, `Sync files and directores to and from swift\n\nFIXME\n\nFull options:\n`)\n\tflag.PrintDefaults()\n}\n\n```\n\nflag.Usageのデフォルト定義は以下の通り\n\n```golang\nvar Usage = func() {\n\tfmt.Fprintf(CommandLine.Output(), \"Usage of %s:\\n\", os.Args[0])\n\tPrintDefaults()\n}\n```\n\nここではsyntaxErrorという関数で書き直している\n標準エラーが出たときに、それを出力してオプションのヘルプを表示する\n試しにエラーが出るようなコードを叩いてみる\n\n```\n.\\swiftsync.exe -snet=4\n```\nsnetはBooleanなので、当然エラーが出て\n\n```\ninvalid boolean value \"4\" for -snet: parse error\nSync files and directores to and from swift\n\nFIXME\n\nFull options:\n  -auth string\n        Auth URL for server. Defaults to environment var SWIFT_AUTH_USER.\n  -cpuprofile string\n        Write cpu profile to file...\n```\n\nとなった。つまり、main()で必ずUsageを呼び出し、標準エラーがあったときはそのエラーとともにPrintDefaultsで使い方を表示するという仕様である。確かにexeファイルの中には実行した時にコマンドライン上でオプションを表示してくれるものを見かけたことがある。\nflag.Usage = syntaxErrorの一文をコメントアウトして実行してみるとわかりやすい。\n\n## pprofによるプロファイリング\nプロファイリングとはコードのCPUやメモリのボトルネックを調査することで、プロファイルの方法としてよく耳にするのがベンチマークテストである。\nGoでは主に3つの方法があるが、コード内で埋め込んで測定する方法としてはpprofパッケージが存在する\n\ninitial commitではswiftへの接続処理のプロファイリングを行っている\n\n```golang\nmain() {\n\t// Setup profiling if desired\n\tif *cpuprofile != \"\" {\n\t\tf, err := os.Create(*cpuprofile)\n\t\tif err != nil {\n\t\t\tlog.Fatal(err)\n\t\t}\n\t\tpprof.StartCPUProfile(f)\n\t\tdefer pprof.StopCPUProfile()\n\t}\n// swiftsの接続処理\n// ......\n}\n```\n\nswift周りは検証しようがなかったので、とりあえず全てコメントアウトし、以下のコマンドを実行\n\n```\n.\\swiftsync.exe -cpuprofile=\"test.prof\" -user=testuser -key=testkey -auth=testu\nrl\ngo tool pprof .\\test.prof\n```\nすると\n\n```\nType: cpu\nTime: Nov 23, 2021 at 6:27pm (JST)\nDuration: 216.06ms, Total samples = 0\nNo samples were found with the default sample value type.\nTry \"sample_index\" command to analyze different sample values.\nEntering interactive mode (type \"help\" for commands, \"o\" for options)\n(pprof)\n```\n実際には検証したい関数などの実行時間が見れる\n使い方はわかったので、次に進む\n\n### 参考\n\nhttps://www.twihike.dev/docs/golang-primer/profiling\n\nhttps://qiita.com/momotaro98/items/bd24a5d4603e378cc357\n\n## 残りのコードについて\nnsToFloatStringやfloatStringToNsは秒⇔ナノ秒の変換を行う関数で、testコードもそれについてのものだった。\nどう使うのかぱっと見で分からなかったので先のコミットを見ていくことにする。\n\n# 総括\n最初のコミットを見るだけで、コマンドラインのフラグや引数の管理、プロファイリングについて学ぶことができた。やっぱり知らないことを知るにはコード読むのが最適らしい。可能な限りコミットを追ってみたい。個人的にはGoogle Driveにつなぐときのコードを参考にしたいので、大きな改修がない限りは次のコミットはGoogle Driveの接続を書いてるところにしようかなと\n"
  },
  {
    "title": "goのhttpパッケージの一部を理解する",
    "date": "2021-11-23T17:33:32+09:00",
    "url": "https://qiita.com/shotaoni/items/27fcffe847cd6866a713",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "初心者",
        "versions": []
      }
    ],
    "description": "## 初めに\n参考になる記事がたくさんあるので、まずリンクを貼る\n\nhttps://journal.lampetty.net/entry/understanding-http-handler-in-go\n\nhttps://qiita.com/immrshc/items/1d1c64d05f7e72e31a98\n\nhttps://www.morelife.work/entry/2019/09/27/go-web-app-handler\n\n\n\n## 目的\n自分はあまり理解力が高くないので、記事を見るだけでは理解できなかったりする。\n参考になる記事たちを見て、改めて自分の中で整理してこの記事でアウトプットすることで自分の理解を深める\n\n下記サンプルコードをもとに理解を深める\n\nhttps://dev.classmethod.jp/articles/go-sample-rest-api/#toc-11\n\n```go:main.go\npackage main\n\nimport (\n\t\"net/http\"\n\n\t\"github.com/koga456/sample-api/controller\"\n\t\"github.com/koga456/sample-api/model/repository\"\n)\n\nvar tr = repository.NewTodoRepository()\nvar tc = controller.NewTodoController(tr)\nvar ro = controller.NewRouter(tc)\n\nfunc main() {\n\n\tserver := http.Server{\n\t\tAddr: \":8080\",\n\t}\n\thttp.HandleFunc(\"/todos/\", ro.HandleTodosRequest)\n\tserver.ListenAndServe()\n}\n```\n\n## コードリーディング\n\n\u003eserver := http.Server{\n\t\tAddr: \":8080\",\n\t}\n\nserver変数にhttpパッケージのServer型にAddrのみ指定して代入\n\n\u003ehttp.HandleFunc(\"/todos/\", ro.HandleTodosRequest)\n\n```go\nfunc HandleFunc(pattern string, handler func(ResponseWriter, *Request)) {\n    DefaultServeMux.HandleFunc(pattern, handler)\n}\n```\n\npattern（パス)とfunc(ResponseWriter, *Request)型のhandlerを引数にDefaultServeMuxのHandleFuncメソッドを実行している\n\n```go\n// DefaultServeMux is the default ServeMux used by Serve.\nvar DefaultServeMux = \u0026defaultServeMux\n\nvar defaultServeMux ServeMux\n```\n\nDeualtServeMuxはServeMux型の変数。\n要するにhttp.HandleFuncはServeMux型をレシーバにもつHandleFuncメソッドを実行している。\n\n```go\n// HandleFunc registers the handler function for the given pattern\nfunc (mux *ServeMux) HandleFunc(pattern string, handler func(ResponseWriter, *Request))\n```\nHandleFunc（httpパッケージのServeMux型をレシーバにもつHandleFuncメソッド)\n\nServeMux型をレシーバに持つメソッドであり、pattern(/todos/)にhandler関数を登録(httpパッケージのServeMux型をレシーバに持つHandleメソッドを呼び出し)する\n\n\u003cdetails\u003e\u003csummary\u003eserveMux型,muxEntry型\u003c/summary\u003e\n\u003cdiv\u003e\n\n```go\n\ntype ServeMux struct {\n\tmu    sync.RWMutex\n\tm     map[string]muxEntry\n\tes    []muxEntry // slice of entries sorted from longest to shortest.\n\thosts bool       // whether any patterns contain hostnames\n}\n\ntype muxEntry struct {\n\th       Handler\n\tpattern string\n}\n\n```\n\n\u003c/div\u003e\n\u003c/details\u003e\n\nhttp.ServeMux.Handleは何をするのか\n\u003cdetails\u003e\u003csummary\u003eソースコード\u003c/summary\u003e\n\u003cdiv\u003e\n\n```go\n// Handle registers the handler for the given pattern.\n// If a handler already exists for pattern, Handle panics.\nfunc (mux *ServeMux) Handle(pattern string, handler Handler) {\n\tmux.mu.Lock()\n\tdefer mux.mu.Unlock()\n\n\tif pattern == \"\" {\n\t\tpanic(\"http: invalid pattern\")\n\t}\n\tif handler == nil {\n\t\tpanic(\"http: nil handler\")\n\t}\n\tif _, exist := mux.m[pattern]; exist {\n\t\tpanic(\"http: multiple registrations for \" + pattern)\n\t}\n\n\tif mux.m == nil {\n\t\tmux.m = make(map[string]muxEntry)\n\t}\n\te := muxEntry{h: handler, pattern: pattern}\n\tmux.m[pattern] = e\n\tif pattern[len(pattern)-1] == '/' {\n\t\tmux.es = appendSorted(mux.es, e)\n\t}\n\n\tif pattern[0] != '/' {\n\t\tmux.hosts = true\n\t}\n}\n\n```\n\u003c/div\u003e\n\n\u003c/details\u003e\n\npattern(パス)に対応づけてmux[string]muxEntryとして登録している\n\n`mux.Handle(pattern, HandlerFunc(handler))`\n\nhandler(func ResponseWriter, *Request)をHandlerFunc型に変換してから渡すことで\nfunc (m *ServeMux) Handle(pattern string, handler Handler)のHandler型に納めている\n\n\u003cdetails\u003e\u003csummary\u003eHandlerFunc型,Handler型\u003c/summary\u003e\n\u003cdiv\u003e\n\n```go\ntype HandlerFunc func(ResponseWriter, *Request)\n\nfunc (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request)\n\ntype Handler interface {\n\tServeHTTP(ResponseWriter, *Request)\n}\n```\n\n\u003c/div\u003e\n\u003c/details\u003e\n\nHandlerFunc型はServeHttpメソッドを実装していて、 Handlerはインターフェースであり、ServeHttpを実装していることが求められていることがわかる\n\n上記HandlerFunc型に変換しているのはServeHttpを実装させるため、実装していればHandler Interfaceに収まる。\n\n\u003eserver.ListenAndServe()\n\n先ほど定義したserver変数のListenAndServeメソッドを実行している。\n\n```go\n// ListenAndServe listens on the TCP network address srv.Addr and then calls Serve to handle requests on incoming connections.\n// Accepted connections are configured to enable TCP keep-alives.\n\nfunc (srv *Server) ListenAndServe() error\n```\n\nserver型　他にもたくさんあるけど、よく使う?ものだけ抜粋\n\n```go\ntype Server struct {\n\t// Addr optionally specifies the TCP address for the server to listen on,\n\t// in the form \"host:port\". If empty, \":http\" (port 80) is used.\n\t// The service names are defined in RFC 6335 and assigned by IANA.\n\t// See net.Dial for details of the address format.\n\tAddr string\n\n\tHandler Handler // handler to invoke, http.DefaultServeMux if nil\n}\n```\n\n今回、server型のAddrのみ指定して、Handlerは指定しなかったため、http.DefaultServeMuxになる\n\nDefaultServeMuxについては上に書いたとおり、HandleFuncが呼び出されていく\n\n## まとめ • 感想\n\n今回色々な記事を見て頭に入らなかった原因がこの記事を書いている内にわかった\n\n- 公式のdocを全然見てなかった\n\n　　下記に理由はあるが、公式のドキュメントを読んでいなかった\n\n- メソッドについての理解が足りていなかった\n\n　　A Tour of Goをさらっと流し読みして、分かった気になっていたが、メソッド関数と関数の違いを分かっていなかったのでドキュメントを見てもイマイチピンと来なかった\n\n後は書いている内に理解が深まっていった(わかっていないところがわかるようになった)ので、いい記事を書こうとは思わず、誰が見るわけでもないと思って気軽に書いていきたい\n\n\n\n\n\n\n\n\n"
  },
  {
    "title": "[Golang]Gormで行うPagination(sort対応)",
    "date": "2021-11-23T12:17:59+09:00",
    "url": "https://qiita.com/DaisukeHirabayashi/items/e0cf33419ce26913eae3",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "GORM",
        "versions": []
      },
      {
        "name": "gin",
        "versions": []
      }
    ],
    "description": "# はじめに\nこの記事では、Gormで行うPaginetionについて述べたいと思います。\nまた、paginationと同時にソートや検索等を行うことが多くあると思い、こちらに関しても記述させていただきました。\nサンプルコードとして、Ginを使って行っていますが、echoでやる場合もほぼ同様にできます。\n\n## 参考\n- Gormの公式pagination\nhttps://gorm.io/docs/scopes.html#Pagination\n- 特に参考にした記事\nhttps://dev.to/rafaelgfirmino/pagination-using-gorm-scopes-3k5f\n\n## github\ngithubにコードをまとめたので、分からない箇所等があれば見てみてください。\nフォルダ名がpagenationになっているのは見てみぬふりをしてくれると助かります🙏\n\nhttps://github.com/DaisukeHirabayashi/golang-pagenation\n\n## 全体のAPI構成\n今回、以下のような構成で行っています。\ncontrollerやserviseに関しては今回の記事とは趣旨が異なるので説明は割愛させていただきます。\n\n構成に関して以下の記事を参考にさせていただいています。\nhttps://qiita.com/Asuforce/items/0bde8cabb30ac094fcb4\n\n```\n.\n├── controller\n│   └── shop_controller.go #apiのエンドポイント\n├── db\n│   └── db.go # dbのInitやClose\n├── dto\n│   ├── page.go #pageのmodel\n│   └── shop_dto.go #レスポンスデータ(dto)\n├── entity\n│   └── shop.go #entityオブジェクト\n├── main.go\n├── mapper\n│   └── page_mapper.go #pageobjへの変換\n├── query # gormのquery生成\n│   ├── pagination.go\n│   └── sort.go\n├── server\n│   └── server.go # routing等を記載\n└── service\n    └── shop_service.go # entityとdtoの変換\n```\n\n## レスポンス\n今回、レスポンスとしては以下のようなものを想定しています。\n自分はpaginationの情報をpageでラッピングしていますが、_metadataのようにすると汎用性が高まるかもしれません。\nhttps://stackoverflow.com/questions/12168624/pagination-response-payload-from-a-restful-api\n\nRequestUrl: http://localhost:8080/shops?size=2\u0026\u0026page=1\u0026\u0026direction=asc\u0026\u0026orderby=name\n\n\n```\n{\n  \"page\": {\n    \"number\": 2, # page number\n    \"size\": 2, #contents size\n    \"total_elements\": 7, # total size\n    \"total_pages\": 4 # total pages\n  },\n  \"shops\": [\n    {\n      \"id\": 7,\n      \"name\": \"Beauty-Beauty\",\n      \"created_at\": \"2021-11-21T16:42:43.655756Z\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Ceauty-Beauty\",\n      \"created_at\": \"2021-11-21T16:42:43.651779Z\"\n    }\n  ]\n}\n```\n### 扱うエンティティ\n今回扱うEntityです。shopsテーブルを例として扱います。\n\n```go\npackage entity\n\nimport \"time\"\n\ntype Shop struct {\n\tId        uint      `json:\"id\"`\n\tName      string    `json:\"name\"`\n\tCreatedAt time.Time `json:\"created_at\"`\n}\n```\n\n### モデルの作成\nまず、pageのモデルを生成していきます。\n\n```go\npackage dto\n\ntype Page struct {\n\tNumber        int `json:\"number\"`\n\tSize          int `json:\"size\"`\n\tTotalElements int `json:\"total_elements\"`\n\tTotalPages    int `json:\"total_pages\"`\n}\n\n```\npageの構造体には、現在の表示ページ(number)、1ページあたりに表示する件数(size)、件数(total_elements)、最後に全体のページ数(total_pages)を定義しています。\nこれだけの情報があれば、view上でpaginationを表現する際に必要な情報としては十分かと思います。\n\n![Screen Shot 2021-11-22 at 17.55.33.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/539384/27460d85-3df1-0d29-a6b3-3bd4ebe2754c.png)\n引用元: https://terasolunaorg.github.io/guideline/5.0.0.RELEASE/ja/ArchitectureInDetail/Pagination.html\n\nまた、レスポンスとして返信するshopのdtoクラスも作成します。\nレスポンスとしてはdbから受け取ったshopの配列及び、pageの情報を返します。\n\n```go\npackage dto\n\nimport \"github.com/DaisukeHirabayashi/golang-pagenation/entity\"\n\ntype ShopDto struct {\n\tPage  Page          `json:\"page\"`\n\tShops []entity.Shop `json:\"shops\"`\n}\n```\n\n### mapperの作成\n次に、mapperを生成します。\nmapperではurlのqueryパラメーターと、データの大きさ(totalElements)を元にpageのオブジェクトを生成しています。\n\n```go\npackage mapper\n\nimport (\n\t\"log\"\n\t\"math\"\n\t\"strconv\"\n\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/dto\"\n\t\"github.com/gin-gonic/gin\"\n)\n\nfunc ConvertContextAndTotalElementsToPage(context *gin.Context, totalElements int) dto.Page {\n\tpage, _ := strconv.Atoi(context.Query(\"page\"))\n\tif page == 0 {\n\t\tpage = 1\n\t}\n\n\tpageSize, _ := strconv.Atoi(context.Query(\"size\"))\n\tswitch {\n\tcase pageSize \u003e totalElements:\n\t\tpageSize = totalElements\n\tcase pageSize \u003e 100:\n\t\tpageSize = 100\n\tcase pageSize \u003c= 0:\n\t\tif totalElements \u003c 5 {\n\t\t\tpageSize = totalElements\n\t\t} else {\n\t\t\tpageSize = 5\n\t\t}\n\t}\n\ttotalPages := int(math.Ceil(float64(totalElements) / float64(pageSize)))\n\n\treturn dto.Page{Number: page, Size: pageSize, TotalElements: totalElements, TotalPages: totalPages}\n}\n```\n例として、下記のようなurlでリクエストを送信した場合、1ページあたりに表示する件数を2件、表示するpageを1としてpageオブジェクトを生成しています。\nhttp://localhost:8080/shops?size=2\u0026\u0026page=1\nまた、queryパラメーターとしてsizeやpage情報を送信しなかった場合には初期値としてsize=5,page=1としています。\n\n### queryの作成\nここでは、pagenationの情報を基に、dbから必要な情報のみを取得するようにQueryを生成します。\n\n```go\npackage query\n\nimport (\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/dto\"\n\t\"github.com/jinzhu/gorm\"\n)\n\ntype Pagination struct{}\n\nfunc (pagination Pagination) Pagination(page dto.Page) func(db *gorm.DB) *gorm.DB {\n\treturn func(db *gorm.DB) *gorm.DB {\n\t\toffset := (page.Number - 1) * page.Size\n\t\treturn db.Offset(offset).Limit(page.Size)\n\t}\n}\n```\npageオブジェクトの内容を元にオフセットや個数を定義しQueryとして生成しています。\n\n### serviceの作成\n```go\npackage service\n\nimport (\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/db\"\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/dto\"\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/entity\"\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/mapper\"\n\t\"github.com/DaisukeHirabayashi/golang-pagenation/query\"\n\t\"github.com/gin-gonic/gin\"\n)\n\ntype ShopService struct{}\n\nvar query_pagination query.Pagination\n\nfunc (shopService ShopService) GetShops(context *gin.Context) (dto.ShopDto, error) {\n\tdb := db.GetDB()\n\tvar shops []entity.Shop\n\n\ttotalElements := db.Find(\u0026shops).RowsAffected\n\tvar page dto.Page = mapper.ConvertContextAndTotalElementsToPage(context, int(totalElements))\n\n\tif err := db.Scopes(query_pagination.Pagination(page)).Find(\u0026shops).Error; err != nil {\n\t\treturn dto.ShopDto{}, err\n\t}\n\n\treturn dto.ShopDto{Page: page, Shops: shops}, nil\n}\n```\nここでは、ページネーションの情報に必要となる、データの総数を以下のようにして取得します。\n`totalElements := db.Find(\u0026shops).RowsAffected`\nその後、`mapper.ConvertContextAndTotalElementsToPage(context, int(totalElements))`にて、totalElementsとurlのqueryパラメータを元にpageオブジェクトに変換します。\nまた、ScopeやFindによるQueryによってdbからデータを取得しています。\n最後に、レスポンスとして必要となる情報を`dto.ShopDto{Page: page, Shops: shops}`にて返しています。\n\n## その他\n### 検索\nwhere句等で検索したものに対してpaginationを行うには、以下のようにすることで対処可能です。\n今回のコードでは、全体の個数が特定されればpaginationができるようになっています。\nしたがって、検索で今回のコードを使いたい場合、serviceの箇所を以下のように変更することで可能となります。\n\n```go\n\ttotalElements := db.Where(\"title LIKE ? \",\"%\"+context.Query(\"keyword\")+\"%\")Find(\u0026shops).RowsAffected\n\tvar page dto.Page = mapper.ConvertContextAndTotalElementsToPage(context, int(totalElements))\n\n\tif err := db.Scopes(query_pagination.Pagination(page)).Where(\"title LIKE ? \",\"%\"+context.Query(\"keyword\")+\"%\").Find(\u0026shops).Error; err != nil {\n\t\treturn dto.ShopDto{}, err\n\t}\n}\n```\n\n### ソート\nソートを行いたい場合、ソートのための関数をまず作成します。\n\n```go\npackage query\n\nimport (\n\t\"strings\"\n\n\t\"github.com/gin-gonic/gin\"\n\t\"github.com/jinzhu/gorm\"\n)\n\ntype Sort struct{}\n\nfunc (sort Sort) Sort(context *gin.Context) func(db *gorm.DB) *gorm.DB {\n\treturn func(db *gorm.DB) *gorm.DB {\n\t\tdirection := context.Query(\"direction\")\n\t\tif direction != \"asc\" \u0026\u0026 direction != \"desc\" {\n\t\t\tdirection = \"desc\"\n\t\t}\n\n\t\torderby := context.Query(\"orderby\")\n\t\tif orderby == \"\" {\n\t\t\torderby = \"id\"\n\t\t}\n\n\t\torder := strings.Join([]string{orderby, direction}, \" \")\n\t\treturn db.Order(order)\n\t}\n}\n```\nここでは、ソートの初期値をidの降順としています。\n\nその後、検索の際と同様に以下のようにすることで対応可能です。\nソートの場合には全体の個数は変わらないのでtotalElementsの記述は変わりません。\n\n```go\n\ttotalElements := db.Find(\u0026shops).RowsAffected\n\tvar page dto.Page = mapper.ConvertContextAndTotalElementsToPage(context, int(totalElements))\n\n\tif err := db.Scopes(query_pagination.Pagination(page)).Scopes(query_sort.Sort(context)).Find(\u0026shops).Error; err != nil {\n\t\treturn dto.ShopDto{}, err\n\t}\n```\n\n## まとめ\n今回、gormでのpaginationについてまとめてみました。\nどのコードでも扱えるように共通化したつもりなのでよかったら参考にしてみてください。\n\n以下、行ったことのまとめです。\n\n- データの総数をもとにpageのオブジェクト生成\n- pageのオブジェクトをもとに、dbからデータを取り出す。\n- pagenationを扱いたい場合、`Scopes(query_pagination.Pagination(page))`をメソッドチェーンでつなげる。\n\n\n"
  },
  {
    "title": "Golang + Gorm + EchoでPreloadを使う",
    "date": "2021-11-22T23:15:35+09:00",
    "url": "https://qiita.com/gs1068/items/81145efa65acb8fa5ee6",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "api",
        "versions": []
      },
      {
        "name": "GORM",
        "versions": []
      },
      {
        "name": "golang,Go",
        "versions": []
      },
      {
        "name": "preload",
        "versions": []
      }
    ],
    "description": "#はじめに\nGormのPreloadに関しての備忘録です。よかったら参考にどうぞ🦍\n\n参考のコードの詳細はこちらをご確認ください。\n\nhttps://github.com/gs1068/daily_fruit\n\n## Preloading (Eager Loading)\n公式より\n\u003eGORMの Preload を使用すると、別のSQLを発行して関連レコードを eager loading することができます。\n\nhttps://gorm.io/ja_JP/docs/preload.html\n\n## 構造体\n\nUser構造体は複数のProduct構造体を持ち、Product構造体は複数のProductImages構造体\u0008を持ちます。\n\n```go\ntype User struct {\n\tId             string    `gorm:\"primaryKey\" json:\"id\"`\n\tName           string    `json:\"name\"`\n\tProduct        []Product `gorm:\"foreignKey:UserId\" json:\"products\"`\n}\n\ntype Product struct {\n\tId                  string          `gorm:\"primaryKey\" json:\"id\"`\n\tUserId              string          `json:\"user_id\"`\n\tName                string          `json:\"name\"`\n\tProductImages       []ProductImages `gorm:\"foreignKey:ProductId\" json:\"product_images\"`\n}\n\ntype ProductImages struct {\n\tId         string    `gorm:\"primaryKey\" json:\"id\"`\n\tProductId  string    `json:\"products_id\"`\n\tUrl        string    `json:\"url\"`\n}\n```\n\n`foreignKey`にProductが持つUserIdを付与します。\nPreloadで取得したい構造体が複数の場合は構造体名の前にスライスを付与します。\n→[]構造体名\n\n\n```go\nProduct        []Product `gorm:\"foreignKey:UserId\" json:\"products\"`\n```\n\n## Echo実装\n今回はEchoを使用し実装をしてます。説明は割愛しますので詳しくは以前書いた記事をご覧ください。\n\nhttps://qiita.com/gs1068/items/194a4c35a3709d7a4342\n\n## Preload実装\n#### 第一段階\nUserが持つProductを全て取得する。\n`Preload(\"構造体名\")をテーブル名の前に設定する。`\n\n```go\nfunc UserShow() echo.HandlerFunc {\n\treturn func(c echo.Context) error {\n\t\tdb := dbconnect.Connect()\n\t\tdefer db.Close()\n\t\tuser_id := c.Param(\"user-id\")\n\t\tuser := User{}\n\t\tresult := db.Preload(\"Product\").Table(\"users\").Find(\u0026user, \"id = ?\", user_id)\n\t\tif result.RecordNotFound() {\n\t\t\tfmt.Println(\"レコードが見つかりません\")\n\t\t\treturn c.JSON(http.StatusNotFound, nil)\n\t\t} else {\n\t\t\treturn c.JSON(http.StatusOK, user)\n\t\t}\n\t}\n}\n```\n\n取得できるデータ\n\n```json\n{\n    \"id\": \"user\",\n    \"name\": \"test\",\n    \"products\": [\n        {\n            \"id\": \"01FN3Z67338ABXWMWFKEPWTBT3\",\n            \"user_id\": \"user\",\n            \"name\": \"test\",\n            \"product_images\": []\n        },\n        {\n            \"id\": \"01FN3Z683VPVWP200E4GTS73SZ\",\n            \"user_id\": \"user\",\n            \"name\": \"test\",\n            \"product_images\": []\n        }\n    ]\n}\n```\n\n#### 第二段階\n\nProductが持つProductImagesを取得する。\n`Preload(\"構造体名.子構造体\")をテーブル名の前に設定する。`\n\n```go\nfunc UserShow() echo.HandlerFunc {\n\treturn func(c echo.Context) error {\n\t\tdb := dbconnect.Connect()\n\t\tdefer db.Close()\n\t\tuser_id := c.Param(\"user-id\")\n\t\tuser := User{}\n\t\tresult := db.Preload(\"Product.ProductImages\").Table(\"users\").Find(\u0026user, \"id = ?\", user_id)\n\t\tif result.RecordNotFound() {\n\t\t\tfmt.Println(\"レコードが見つかりません\")\n\t\t\treturn c.JSON(http.StatusNotFound, nil)\n\t\t} else {\n\t\t\treturn c.JSON(http.StatusOK, user)\n\t\t}\n\t}\n}\n```\n\n取得できるデータ\n\n```json\n{\n    \"id\": \"user\",\n    \"name\": \"test\",\n    \"products\": [\n        {\n            \"id\": \"01FN3Z67338ABXWMWFKEPWTBT3\",\n            \"user_id\": \"user\",\n            \"name\": \"test\",\n            \"product_images\": [\n                {\n                    \"id\": \"1\",\n                    \"products_id\": \"01FN3Z67338ABXWMWFKEPWTBT3\",\n                    \"url\": \"http:///test1\"\n                },\n                {\n                    \"id\": \"2\",\n                    \"products_id\": \"01FN3Z67338ABXWMWFKEPWTBT3\",\n                    \"url\": \"http:///test2\"\n                },\n                {\n                    \"id\": \"3\",\n                    \"products_id\": \"01FN3Z67338ABXWMWFKEPWTBT3\",\n                    \"url\": \"http:///test3\"\n                }\n            ],\n        },\n        {\n            \"id\": \"01FN3Z683VPVWP200E4GTS73SZ\",\n            \"user_id\": \"user\",\n            \"name\": \"test\",\n            \"product_images\": [\n                {\n                    \"id\": \"4\",\n                    \"products_id\": \"01FN3Z683VPVWP200E4GTS73SZ\",\n                    \"url\": \"http:///test4\"\n                },\n                {\n                    \"id\": \"5\",\n                    \"products_id\": \"01FN3Z683VPVWP200E4GTS73SZ\",\n                    \"url\": \"http:///test5\"\n                },\n                {\n                    \"id\": \"6\",\n                    \"products_id\": \"01FN3Z683VPVWP200E4GTS73SZ\",\n                    \"url\": \"http:///test6\"\n                }\n            ],\n        }\n    ]\n}\n```\n\n参考資料\n\nhttps://gorm.io/ja_JP/docs/preload.html\n\n以上です！！！それでは👋\n"
  },
  {
    "title": "Goで2つの日付間の日数を取得する",
    "date": "2021-11-21T20:30:55+09:00",
    "url": "https://qiita.com/maatanman/items/2d304bc4bde3d5affaf2",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "golang,Go",
        "versions": []
      }
    ],
    "description": "## 概要\n2つの日付間の日数を取得する処理を書く機会があったので備忘録的に書き残します。\n\n## 実装\n```main.go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"time\"\n)\n\nfunc main() {\n\tstart := time.Date(2021, 12, 28, 0, 0, 0, 0, time.Local)\n\tend := time.Date(2022, 1, 2, 0, 0, 0, 0, time.Local)\n\t// 日付間の日数を取得\n\tdiffDays := end.Sub(start).Hours() / 24\n\tfmt.Println(diffDays)\n\n\t// 日数分処理を行う\n\tfor i := 0; i \u003c= int(diffDays); i++ {\n\t\taddDate := start.AddDate(0, 0, i)\n\t\tfmt.Println(addDate)\n\t\t// ...処理\n\t}\n}\n```\n\n↑を実行すると出力結果は以下のようになります。\n\n```text\n5\n2021-12-28 00:00:00 +0000 UTC\n2021-12-29 00:00:00 +0000 UTC\n2021-12-30 00:00:00 +0000 UTC\n2021-12-31 00:00:00 +0000 UTC\n2022-01-01 00:00:00 +0000 UTC\n2022-01-02 00:00:00 +0000 UTC\n```\n\n\n### 解説\nまず、 `end.Sub(start)`で２つの日付の差分を取得します。\n`Sub`メソッドの定義は以下のようになっていて、Duration型が返ってきます。\n\n```go\nfunc (t Time) Sub(u Time) Duration\n```\n\nDurationの定義はint64のエイリアス型になっていて、時間を取得する`Hours()`メソッドが定義されています。\n\n```go\ntype Duration int64\n\nfunc (d Duration) Hours() float64\n```\n\n`Hours()`メソッドで取得した時間を1日の時間(=24)で割ってあげれば差の日数が取得できます。\n\n```go\nend.Sub(start).Hours() / 24\n```\n\n## 参考\nhttps://pkg.go.dev/time#Time.Sub\nhttps://pkg.go.dev/time#Duration\nhttps://pkg.go.dev/time#Duration.Hours\n\n"
  },
  {
    "title": "[GCP] Container failed to start. Failed to start and then listen on the port defined by the PORT environment variable.",
    "date": "2021-11-21T17:38:34+09:00",
    "url": "https://qiita.com/hkengo/items/5f549bf5883adede2974",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "gcp",
        "versions": []
      },
      {
        "name": "CloudRun",
        "versions": []
      }
    ],
    "description": "# Cloud Runデプロイ時にエラー\n\n\n\u003e Container failed to start. Failed to start and then listen on the port defined by the PORT environment variable.\n\n# 対処法\nCloudRun起動時に、`0.0.0.0:8080`に対してヘルスチェックが通らず、エラーとなっていた。\n`PORT`環境変数によって、portのマッピングを自動で設定してくれるが、未指定の場合、デフォルトで`8080`となるそう。\nserverのlistenしているポートが3000となっていたので、環境変数`PORT`を読むように変更した。\n\n### 問題のコード\n```main.go\nfunc main() {\n        log.Print(\"starting server...\")\n        http.HandleFunc(\"/\", handler)\n\n        // Start HTTP server.\n        if err := http.ListenAndServe(\":3000\", nil); err != nil {\n                log.Fatal(err)\n        }\n}\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n        name := os.Getenv(\"NAME\")\n        if name == \"\" {\n                name = \"World\"\n        }\n        fmt.Fprintf(w, \"Hello %s!\\n\", name)\n}\n```\n### 修正後\n```main.go\nfunc main() {\n        log.Print(\"starting server...\")\n        http.HandleFunc(\"/\", handler)\n\n        // 追加\n        port := os.Getenv(\"PORT\")\n        if port == \"\" {\n                port = \"8080\"\n        }\n\n        // Start HTTP server.\n        if err := http.ListenAndServe(\":\"+port, nil); err != nil {\n                log.Fatal(err)\n        }\n}\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n        name := os.Getenv(\"NAME\")\n        if name == \"\" {\n                name = \"World\"\n        }\n        fmt.Fprintf(w, \"Hello %s!\\n\", name)\n}\n```\n\n# デバッグ過程\n今回のエラーに関しては、GCPのトラブルシューティングに沿ってデバッグした。\nありがたいmm\n\nhttps://cloud.google.com/run/docs/troubleshooting\n\n### ステップ１\n\u003e コンテナ イメージをローカルで実行できることを確認します。コンテナ イメージをローカルで実行できない場合は、まず問題をローカルで診断して修正する必要があります。\n\n下記コマンド実行、`https://localhost:3000`にアクセス。OK。\n\n```zsh\n$ docker run -it IMAGE_NAME\n```\n\n\n### ステップ2\n\n\u003e コンテナ ランタイムの契約に記載されているように、コンテナが想定ポートでリクエストをリッスンしていることを確認します。コンテナは、Cloud Run によって定義され、PORT 環境変数で指定されているポートで受信リクエストをリッスンする必要があります。\n\n下記のコマンド実行。`https://localhost:8080`にアクセス。動かない、、\n\n```zsh\n$ PORT=8080 \u0026\u0026 docker run -it IMAGE_NAME\n```\n\nmain.goを見たら、portが即値で入っていました。。。\n直して、無事動いた。\n\n### これでも動かない場合\n公式のトラブルシューティングにてmm\n\nhttps://cloud.google.com/run/docs/troubleshooting\n"
  },
  {
    "title": "[VScode] Docker+Go+air+delveでリモートデバッグ",
    "date": "2021-11-20T21:37:17+09:00",
    "url": "https://qiita.com/masataka715/items/f87afa3e7f2c4e640ba7",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "Docker",
        "versions": []
      },
      {
        "name": "VSCode",
        "versions": []
      },
      {
        "name": "delve",
        "versions": []
      }
    ],
    "description": "## はじめに\nDocker上で動いているGo言語のアプリケーションを、VScodeでリモートデバッグします。\nその際に、デバッガツールの [delve](https://github.com/go-delve/delve) と、ホットリロードツールの [air](https://github.com/cosmtrek/air) を使います。\n\n\n## ディレクトリ構成\n\n```\n├── .vscode\n│   └── launch.json\n├── cmd\n│   ├── .air.toml\n│   ├── go.mod\n│   └── main.go\n├── Dockerfile\n└── docker-compose.yml\n```\n\n## Dockerfile\nまず、Dockerで以下の２つをインストールします。\n\n```Dockerfile\nFROM golang:1.17.2\n\nRUN go install github.com/go-delve/delve/cmd/dlv@latest\n    \nRUN go install github.com/cosmtrek/air@latest\n```\n\n## docker-compose.yml\n\n```yaml\nversion: '3.7'\nservices:\n  app:\n    build: .\n    ports:\n      - \"2345:2345\" #delve用のポート\n    volumes:\n      - ./:/go/src\n    working_dir: /go/src/cmd\n    command: air -c .air.toml\n```\n\ncommandでairを実行しています。\n（airの設定ファイル`.air.toml`の中で、delve実行も設定している）\n\n## .air.toml\n\n[air_example.toml](https://github.com/cosmtrek/air/blob/master/air_example.toml)\nこちらをコピペして使いました。\n変更ポイントは、`cmd`と`full_bin`だけです。\n\n```toml\n# Config file for [Air](https://github.com/cosmtrek/air) in TOML format\n\n# Working directory\n# . or absolute path, please note that the directories following must be under root.\nroot = \".\"\ntmp_dir = \"tmp\"\n\n[build]\n# Just plain old shell command. You could use `make` as well.\ncmd = \"go build -gcflags \\\"all=-N -l\\\" -o tmp/main .\"\n# Binary file yields from `cmd`.\nbin = \"tmp/main\"\n# Customize binary.\nfull_bin = \"dlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./tmp/main\"\n# Watch these filename extensions.\ninclude_ext = [\"go\", \"tpl\", \"tmpl\", \"html\"]\n# Ignore these filename extensions or directories.\nexclude_dir = [\"assets\", \"tmp\", \"vendor\", \"frontend/node_modules\"]\n# Watch these directories if you specified.\ninclude_dir = []\n# Exclude files.\nexclude_file = []\n# Exclude specific regular expressions.\nexclude_regex = [\"_test.go\"]\n# Exclude unchanged files.\nexclude_unchanged = true\n# Follow symlink for directories\nfollow_symlink = true\n# This log file places in your tmp_dir.\nlog = \"air.log\"\n# It's not necessary to trigger build each time file changes if it's too frequent.\ndelay = 1000 # ms\n# Stop running old binary when build errors occur.\nstop_on_error = true\n# Send Interrupt signal before killing process (windows does not support this feature)\nsend_interrupt = false\n# Delay after sending Interrupt signal\nkill_delay = 500 # ms\n\n[log]\n# Show log time\ntime = false\n\n[color]\n# Customize each part's color. If no color found, use the raw app log.\nmain = \"magenta\"\nwatcher = \"cyan\"\nbuild = \"yellow\"\nrunner = \"green\"\n\n[misc]\n# Delete tmp directory on exit\nclean_on_exit = true\n```\n\n+ `cmd` = `\"go build -gcflags \\\"all=-N -l\\\" -o tmp/main .\"`\n`dlv exec` を使うためには、`-gcflags=all='-N -l'`が必要になります。\n\u003e [go build](https://pkg.go.dev/cmd/go#hdr-Compile_packages_and_dependencies)\n\u003e -gcflags '[pattern=]arg list'\n\u003e        arguments to pass on each go tool compile invocation.\n\n\n+ `full_bin` =\n`\"dlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./tmp/main\"`\n\u003e cf.　[dlvコマンドのoption詳細](https://github.com/go-delve/delve/blob/master/Documentation/usage/dlv.md#options)\n\u003e --api-version int                  Selects API version when headless. New clients should use v2. Can be reset via RPCServer.SetApiVersion. See Documentation/api/json-rpc/README.md. (default 1)\n\u003e  --accept-multiclient               Allows a headless server to accept multiple client connections.\n\n\n## .vscode/launch.json\n\n```json\n{\n    \"version\": \"0.2.0\",\n    \"configurations\": [\n        {\n            \"name\": \"Remote\",\n            \"type\": \"go\",\n            \"request\": \"attach\",\n            \"mode\": \"remote\",\n            \"remotePath\": \"/go/src/cmd\",\n            \"port\": 2345,\n            \"host\": \"localhost\",\n            \"cwd\": \"${workspaceRoot}/cmd\",\n            \"env\": {},\n            \"args\": [],\n        }\n    ]\n}\n```\n\n+ `name`: お好きな名前\n+ `type`: デバッガーの種別\n+ `request`: デバッグ時にプログラムを起動するか（launch）、  \n既に起動しているプログラムにデバッガーをアタッチするか（attach）\n+ `remotePath`: コンテナ内のパス\n+ `port`: dlvのポート\n+ `cwd`: デバッグ実行を行うディレクトリ\n+ `${workspaceRoot}`: VSコードで開いたディレクトリのパス\n\n詳細：[launchjson-attributes](https://code.visualstudio.com/Docs/editor/debugging#_launchjson-attributes)\n"
  },
  {
    "title": "Golang 標準パッケージ ～os.Exit()～",
    "date": "2021-11-18T21:21:24+09:00",
    "url": "https://qiita.com/hosimiaa/items/71f4bb1c6e2ad9fede37",
    "tags": [
      {
        "name": "Go",
        "versions": []
      }
    ],
    "description": "## はじめに\n最近Go言語の勉強を始めて、ここに学んだことをアウトプットとして書いていければいいかなと思います。\n諸学者なので、間違い等あるかもしれませんが、外期は優しく指摘してくれるとありがたいです。\n\nなお、Goの基礎的なところに関しては、既に記事がたくさんあったので今回は標準パッケージの `os` について書いていこうかと思います。\n\n### os.Exit()\n* プログラムを終了することができる。\n* `os.Exit()`以降に記述されたプログラムは実行されない。\n* 引数には、ステータスを渡すことができる。\n* defer文も実行されないので注意する\n\n引数の種類は、\n0だと成功を示して、0以外はエラーを示す。\n\n```main1.go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"os\"\n)\n\nfunc main() {\n\n     os.Exit(1)\n     fmt.Println(\"Start\")\n}\t\n```\n```main2.go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"os\"\n)\nfunc main() {\n//実行されない\n     defer fmt.Println(\"defer\")\n     os.Exit(0)\n}\n```\n\n### 参考\nhttps://pkg.go.dev/os#Exit\n"
  },
  {
    "title": "【Go】自動生成されたdocument idを取得したい【Firestore】",
    "date": "2021-11-17T20:52:57+09:00",
    "url": "https://qiita.com/yoshi1007/items/1d8fe01849d0edc3b65b",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "Firestore",
        "versions": []
      }
    ],
    "description": "Goにて、Firestoreのデータをクエリで引っ張ってくるときに、document idを取ってくる方法がなかなか見つからなかったので、自分の備忘録です。\n\n#結論\niter.Next()した結果は「DocumentSnapshot」になる。\ndoc.Ref.ID　でdocument idを取ってこれる。\n\n``` go\niter := client.Collection(\"activities\").Where(\"Date\", \"==\", v).Documents(ctx)\n\nvar result []interface{}\nfor {\n\tdoc, err := iter.Next()\n\tif err == iterator.Done {\n\t\tbreak\n\t}\n\tif err != nil {\n\t\tfmt.Fprint(w, err)\n\t\treturn\n\t}\n\tfmt.Println(doc.Ref.ID)\n\tm := doc.Data()\n\tm[\"id\"] = doc.Ref.ID\n\tresult = append(result, m)\n}\n```\n\n#参考\nhttps://pkg.go.dev/cloud.google.com/go/firestore#DocumentSnapshot\nhttps://pkg.go.dev/cloud.google.com/go/firestore#DocumentRef\n"
  },
  {
    "title": "Go言語からArgoCDのApplication CustomResourceを作成する例",
    "date": "2021-11-17T16:57:33+09:00",
    "url": "https://qiita.com/reoring/items/aa15d040049e91059a3d",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "kubernetes",
        "versions": []
      },
      {
        "name": "CustomResource",
        "versions": []
      },
      {
        "name": "ArgoCD",
        "versions": []
      }
    ],
    "description": "# argocd v1alpha1.Application構造体を生成する\n\nまず、Application構造体を生成します。SourceやDestinationなどに指定するパラメタはYAMLでApplicationを書いているときと同じです。\n\n```golang\n\tapp := \u0026v1alpha1.Application{\n\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\tName:      \"myapp\",\n\t\t\tNamespace: \"argocd\",\n\t\t},\n\t\tSpec: v1alpha1.ApplicationSpec{\n\t\t\tSource: v1alpha1.ApplicationSource{\n\t\t\t\tRepoURL:        \"\",\n\t\t\t\tPath:           \"\",\n\t\t\t\tTargetRevision: \"\",\n\t\t\t\tHelm:           nil,\n\t\t\t\tKustomize:      nil,\n\t\t\t\tKsonnet:        nil,\n\t\t\t\tDirectory:      nil,\n\t\t\t\tPlugin:         nil,\n\t\t\t\tChart:          \"\",\n\t\t\t},\n\t\t\tDestination: v1alpha1.ApplicationDestination{\n\t\t\t\tServer:    \"\",\n\t\t\t\tNamespace: \"\",\n\t\t\t\tName:      \"\",\n\t\t\t},\n\t\t\tProject:              \"default\",\n\t\t\tSyncPolicy:           nil,\n\t\t\tIgnoreDifferences:    nil,\n\t\t\tInfo:                 nil,\n\t\t\tRevisionHistoryLimit: nil,\n\t\t},\n\t}\n```\n\n次にargocdのclientsetを使ってカスタムリソースを実際に作成します。\n\n```golang\nclientset.ArgoprojV1alpha1()\n         .Applications(\"default\")\n         .Create(context.TODO(), app, metav1.CreateOptions{})\n```\n\n# コード全文\n\n```golang\npackage main\n\nimport (\n\t\"context\"\n\t\"github.com/argoproj/argo-cd/v2/pkg/apis/application/v1alpha1\"\n\t\"os\"\n\t\"path/filepath\"\n\n\targocdclientset \"github.com/argoproj/argo-cd/v2/pkg/client/clientset/versioned\"\n\n\tv1 \"k8s.io/api/core/v1\"\n\tmetav1 \"k8s.io/apimachinery/pkg/apis/meta/v1\"\n\t\"k8s.io/client-go/kubernetes\"\n\t\"k8s.io/client-go/rest\"\n\t\"k8s.io/client-go/tools/clientcmd\"\n\t\"k8s.io/client-go/util/homedir\"\n)\n\nvar config *rest.Config\n\ntype Client struct {\n\tclientset    *kubernetes.Clientset\n\targocdClient argocdclientset.Interface\n}\n\nfunc exists(filename string) bool {\n\t_, err := os.Stat(filename)\n\treturn err == nil\n}\n\nfunc NewClient() (client *Client, err error) {\n\tif config == nil {\n\t\tvar kubeconfig string\n\n\t\tkubeconfig, ok := os.LookupEnv(\"KUBECONFIG\")\n\t\tif !ok {\n\t\t\tpathToConfig := filepath.Join(homedir.HomeDir(), \".kube\", \"config\")\n\n\t\t\tif exists(pathToConfig) {\n\t\t\t\tkubeconfig = pathToConfig\n\t\t\t\tconfig, err = clientcmd.BuildConfigFromFlags(\"\", kubeconfig)\n\t\t\t} else {\n\t\t\t\tconfig, err = rest.InClusterConfig()\n\t\t\t}\n\t\t\tif err != nil {\n\t\t\t\treturn nil, err\n\t\t\t}\n\t\t}\n\t}\n\n\t// create the clientset\n\tclientset, err := kubernetes.NewForConfig(config)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\targocdclientset, err := argocdclientset.NewForConfig(config)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\treturn \u0026Client{\n\t\tclientset:    clientset,\n\t\targocdClient: argocdclientset,\n\t}, nil\n}\n\nfunc (c *Client) CreateNamespace(namespace string) (err error) {\n\t_, err = c.clientset.CoreV1().Namespaces().Create(context.Background(), \u0026v1.Namespace{\n\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\tName: namespace,\n\t\t},\n\t}, metav1.CreateOptions{})\n\tif err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n\nfunc main() {\n\tc, err := NewClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tapp := \u0026v1alpha1.Application{\n\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\tName:      \"myapp\",\n\t\t\tNamespace: \"argocd\",\n\t\t},\n\t\tSpec: v1alpha1.ApplicationSpec{\n\t\t\tSource: v1alpha1.ApplicationSource{\n\t\t\t\tRepoURL:        \"\",\n\t\t\t\tPath:           \"\",\n\t\t\t\tTargetRevision: \"\",\n\t\t\t\tHelm:           nil,\n\t\t\t\tKustomize:      nil,\n\t\t\t\tKsonnet:        nil,\n\t\t\t\tDirectory:      nil,\n\t\t\t\tPlugin:         nil,\n\t\t\t\tChart:          \"\",\n\t\t\t},\n\t\t\tDestination: v1alpha1.ApplicationDestination{\n\t\t\t\tServer:    \"\",\n\t\t\t\tNamespace: \"\",\n\t\t\t\tName:      \"\",\n\t\t\t},\n\t\t\tProject:              \"default\",\n\t\t\tSyncPolicy:           nil,\n\t\t\tIgnoreDifferences:    nil,\n\t\t\tInfo:                 nil,\n\t\t\tRevisionHistoryLimit: nil,\n\t\t},\n\t}\n\n\t_, err = c.argocdClient.ArgoprojV1alpha1().Applications(\"default\").Create(context.TODO(), app, metav1.CreateOptions{})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n}\n```\n\nこのコードはきっと動きますが、プロダクション用ではない例となるコードなので参考程度に参照ください。\n\n\n# 参照\n\n- [argoproj/argo-cd: Declarative continuous deployment for Kubernetes.](https://github.com/argoproj/argo-cd)\n- [v1alpha1 package - github.com/argoproj/argo-cd/pkg/apis/application/v1alpha1 - pkg.go.dev](https://pkg.go.dev/github.com/argoproj/argo-cd/pkg/apis/application/v1alpha1)\n- [kubernetes/client-go: Go client for Kubernetes.](https://github.com/kubernetes/client-go)\n"
  },
  {
    "title": "Goのデバッグ方法",
    "date": "2021-11-17T16:20:23+09:00",
    "url": "https://qiita.com/KKKKKen/items/84d0db3cc14fa27e1466",
    "tags": [
      {
        "name": "Go",
        "versions": []
      }
    ],
    "description": "#ステップ\n\n###1ターミナルを見る\n\n###2ファイル名と行が書かれているのでその箇所を検索してその該当箇所にいく\n\n###3fmt.Printf(\"%v\", 表示させたいもの)をする\n\n#本番環境では出来てローカルでは出来ない理由\n\nコードは同じはずなので環境変数の問題かな\n"
  },
  {
    "title": "Go言語でKubernetes関連開発時に unknown revision v0.0.0 エラーが発生した時の対処",
    "date": "2021-11-17T11:58:45+09:00",
    "url": "https://qiita.com/reoring/items/d30a4cff8049d1ff9d38",
    "tags": [
      {
        "name": "Go",
        "versions": []
      },
      {
        "name": "error",
        "versions": []
      },
      {
        "name": "kubernetes",
        "versions": []
      },
      {
        "name": "golang,Go",
        "versions": []
      }
    ],
    "description": "# コンパイルエラー全体\n\n```\ngo: finding module for package github.com/argoproj/argo-cd/v2/pkg/client/clientset/versioned\ngo: found github.com/argoproj/argo-cd/v2/pkg/client/clientset/versioned in github.com/argoproj/argo-cd/v2 v2.1.6\ngo: github.com/argoproj/argo-cd/v2@v2.1.6 requires\n\tgithub.com/argoproj/gitops-engine@v0.4.1 requires\n\tk8s.io/kubernetes@v1.21.0 requires\n\tk8s.io/api@v0.0.0: reading k8s.io/api/go.mod at revision v0.0.0: unknown revision v0.0.0\n```\n\n# 対処方法\n\n\n`go.mod` にk8s.io関連のバージョンを固定で指定する。KubernetesのAPIが1.21系であれば下記のように指定する。マイナーバージョンは時期によって都度調整すること。k8s.ioパッケージのバージョン一覧は、https://pkg.go.dev/k8s.io/api?tab=versions ここに記載されている。\n\n\n```golang:go.mod\nreplace (\n\tk8s.io/api =\u003e k8s.io/api v0.21.6\n\tk8s.io/apiextensions-apiserver =\u003e k8s.io/apiextensions-apiserver v0.21.6\n\tk8s.io/apimachinery =\u003e k8s.io/apimachinery v0.21.6\n\tk8s.io/apiserver =\u003e k8s.io/apiserver v0.21.6\n\tk8s.io/cli-runtime =\u003e k8s.io/cli-runtime v0.21.6\n\tk8s.io/client-go =\u003e k8s.io/client-go v0.21.6\n\tk8s.io/cloud-provider =\u003e k8s.io/cloud-provider v0.21.6\n\tk8s.io/cluster-bootstrap =\u003e k8s.io/cluster-bootstrap v0.21.6\n\tk8s.io/code-generator =\u003e k8s.io/code-generator v0.21.6\n\tk8s.io/component-base =\u003e k8s.io/component-base v0.21.6\n\tk8s.io/component-helpers =\u003e k8s.io/component-helpers v0.21.6\n\tk8s.io/cri-api =\u003e k8s.io/cri-api v0.21.6\n\tk8s.io/csi-translation-lib =\u003e k8s.io/csi-translation-lib v0.21.6\n\tk8s.io/kube-aggregator =\u003e k8s.io/kube-aggregator v0.21.6\n\tk8s.io/kube-controller-manager =\u003e k8s.io/kube-controller-manager v0.21.6\n\tk8s.io/controller-manager =\u003e k8s.io/controller-manager v0.21.6\n\tk8s.io/mount-utils =\u003e k8s.io/mount-utils v0.21.6\n\tk8s.io/kube-proxy =\u003e k8s.io/kube-proxy v0.21.6\n\tk8s.io/kube-scheduler =\u003e k8s.io/kube-scheduler v0.21.6\n\tk8s.io/kubectl =\u003e k8s.io/kubectl v0.21.6\n\tk8s.io/kubelet =\u003e k8s.io/kubelet v0.21.6\n\tk8s.io/legacy-cloud-providers =\u003e k8s.io/legacy-cloud-providers v0.21.6\n\tk8s.io/metrics =\u003e k8s.io/metrics v0.21.6\n\tk8s.io/sample-apiserver =\u003e k8s.io/sample-apiserver v0.21.6\n)\n```\n\n# 関連issue\n\n- ['unknown revision v0.0.0' errors, seemingly due to 'require k8s.io/foo v0.0.0' · Issue #79384 · kubernetes/kubernetes](https://github.com/kubernetes/kubernetes/issues/79384)\n- [k8s.io/api@v0.0.0: reading k8s.io/api/go.mod at revision v0.0.0: unknown revision v0.0.0 · Issue #90358 · kubernetes/kubernetes](https://github.com/kubernetes/kubernetes/issues/90358)\n"
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

      <Qiita props={qiita} />

    </WelcomeWrapper>
  )
}

export default PageWelcome
