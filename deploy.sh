npm run build
cp -R ./build/ ../plutodark.github.io
cd ../plutodark.github.io
git add .
git commit -m "deployment"
git push -f origin master
