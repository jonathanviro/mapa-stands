#Generar Empaquetado del ejecutable de la aplicacion
npx electron-packager . mapa-stands --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Mapa Stands"
