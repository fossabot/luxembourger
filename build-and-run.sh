#!/usr/bin/env bash
rm -r ./build

npm run-script build

docker build -t rodislav/becoming:0.0.1-SNAPSHOT .

docker rm -f becoming

docker run -d -p80:80 --name becoming rodislav/becoming:0.0.1-SNAPSHOT