# Introduction

### Node.js + Grpc 環境のコンテナを作成するテンプレート

# Getting Started

### このプロジェクトから立ち上げる方法

1. git clone
2. yarn
3. yarn dev

### docker コンテナとして立ち上げる方法

1. git clone
2. yarn
3. yarn tsc
4. docker build . -t 【Container-Name】
5. docker run -p 【bind-port】:【project-port】 【Container-Name】

# Build

1.  yarn tsc
2.  docker build . -t 【Container-Name】

# Compile

1.  yarn codegen

- win 環境で動かない可能性あり

# Directory structure

dist  
 => ts ファイルを js にコンパイルする際に出力されるディレクトリ（docker の中身）

proto  
 => Grpc の型ファイル

src  
 => プロジェクトのソース(tsc コマンドで、コンパイルされるディレクトリ)

# Contribute
