# site
Collaboration to build a reactive and clean personal website. 

## setup

Install meteor

```
curl https://install.meteor.com/ | sh
```

Install dependencies

```
meteor npm run install
```

Install mongodb to load json data directly into db

```
brew install mongodb
```

Load JSON data into db

```
    mongoimport -h localhost:3001 --db meteor --collection tweets --type json --file exampletweets.json --jsonArray	
```



To run, enter `meteor` and view site at `http://localhost:3000`
