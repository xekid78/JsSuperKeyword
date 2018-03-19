# JsSuperKeyword
superキーワード

## 処理
superキーワードを使って、JewelryBoxクラスから親クラスのコンストラクタの変数を出力。

## コード
```
(function() {
    'use strict'

    class Greeting {
        constructor() {
            this.msg = "Hello";
            this.target = " World";
        }

        say_hello() {
            console.log(this.msg + this.target);
        }
    }

    class Hello extends Greeting {
        say_hello() {
            super.say_hello();
            console.log("WA HA HA HA");
        }
    }

    var hello = new Hello();
    hello.say_hello();

})();
```

## 出力結果  
```
Hello World
WA HA HA HA
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
