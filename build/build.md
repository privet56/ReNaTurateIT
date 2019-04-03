# Building a react-native app inside of a docker container

## Setup
```sh
cd ./build/
# build docker image
docker build -t renabuilder .
# del: docker rmi renabuilder
# check if image built:
docker image ls | grep renabuilder
```
## Execute android build
```sh
# ensure ./build/ is your current directory
docker run --rm -it -e "FIRESTORE_PROJECT_ID=expoapp" -v `pwd`/..:/opt/data  -v `pwd`:/opt/cmd renabuilder /bin/bash -c "cd /opt/data && chmod +x /opt/cmd/build.sh && /opt/cmd/build.sh"
```
The result apk is (as usual with manual build too) in the directory<br>
/android/app/build/outputs/apk/debug/*.apk

<img src=../_res/containerized.build.png width="450px">

#### TODO for Release build:
For **Release** build you have to
* generate a **key** with keytool (java utility) and put it into the keystore;<br> adjust the gradle build files to use the keys
* ensure that you specify the real backend services URL in [../cfg/cfg.js](../cfg/cfg.js)
* adjust [build.sh](build.sh):
    * specify the parameter --dev **false** in the command for bundling the js file
    * specify the parameter **'assembleRelease'** for gradle, instead of assembleDebug

