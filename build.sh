vuepress build
mv -v .vuepress/dist/* ../akash-joshi.github.io
cd ../akash-joshi.github.io
ga .
gc -m "Site Update"
gp
