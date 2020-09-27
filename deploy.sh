rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:jujuul/world-ui-website.git
git push -f -u origin master &&
cd -
echo https://jujuul.github.io/world-ui-website/index