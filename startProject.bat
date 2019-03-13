set "PATH=%~dp0..\devenv\git;%~dp0..\devenv\git\bin;%PATH%"
set "PATH=%~dp0..\devenv\nodejs;%~dp0..\devenv\nodejs\node_modules\npm;%PATH%"
set "PATH=%~dp0..\devenv\python;%~dp0..\devenv\python\Scripts;%PATH%"

set PYTHON=%~dp0..\devenv\python\python.exe

rem needs Java >=8.x
SET JAVA_HOME=%~dp0..\devenv\jdk1.8.0.win32
SET JAVA_OPTS=%JAVA_OPTS% -Xms1024M -Xmx1024M
set JAVA_OPTIONS=%JAVA_OPTS%
set _JAVA_OPTIONS=%JAVA_OPTS%

set ANDROID_SDK_HOME=%~dp0..\devenv\androidsdk
set ANDROID_HOME=%~dp0..\devenv\androidsdk
set ANDROID_SDK_ROOT=%ANDROID_HOME%
set GRADLE_HOME=%~dp0..\devenv\android\gradle\gradle-4.10.1
set ANT_EXECUTABLE=%~dp0..\devenv\apache-ant-1.9.5\bin\ant.bat
rem SET ANDROID_NDK_HOME=c:\android\android-ndk-r10e-windows-x86

rem TODO: set avd path: %~dp0..\devenv\androidsdk\.android\avd\Nexus_5X_API_28_x86.avd\

set PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\build-tools\25.0.3;%ANDROID_HOME%\emulator;%ANDROID_HOME%\emulator\bin;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin;%GRADLE_HOME%;%GRADLE_HOME%\bin;%PATH%;

set APPDATA=%~dp0../devenv/MsVSCode
set USERPROFILE=%~dp0../devenv/MsVSCode

start "" %~dp0../devenv/MsVSCode/Code.exe %~dp0
