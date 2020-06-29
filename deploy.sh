react-scripts build
cp -R ./build/ ../plutodark.github.io/
cd ../plutodark.github.io
git add .
git commit -m "deploy"
git push -f origin master
