# Building a react-native app inside of a docker container

## Setup
```sh
# build docker image
docker build -t renabuilder .
# del: docker rmi renabuilder
# check if image built:
docker image ls | grep renabuilder
```
## Execute android build
```sh
docker run --rm -it -e "FIRESTORE_PROJECT_ID=expoapp" -v `pwd`/..:/opt/data  -v `pwd`:/opt/cmd renabuilder /bin/bash -c "cd /opt/data && chmod +x /opt/cmd/build.sh && /opt/cmd/build.sh"
```


<img src=../_res/containerized.build.png width="450px">
