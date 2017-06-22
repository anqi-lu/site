# site

Collaboration to build a reactive and clean personal website. 

## setup

Install dependencies

```
npm run install
```

To develop and hot load changes run

```
npm run dev
```

To build production bundle run

```
npm run prod
```

## deploying

connect and navigate to server

```
    ssh [user]@[url]
```

remove everything in public_html

```
mkdir backup_html
mv public_html/* backup_html
```

clone repo
```
cd public_html
git clone [url] .
```
note: remove everything before this works including hidden files.

make necessary files public
```
chmod -R 775 public/
chmod 775 build/css/main.css
```

no npm, so locally build bundle and then scp
```
npm run prod
scp build/js/bundle.js [user]@[url]:~/public_html/build/js/bundle.js
```
