# site
Collaboration to build a reactive and clean personal website. 

## setup

We *deprecated* meteor from out site!

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

Load JSON data into db locally. Edit load_data to not deploy.

```
./load_data.sh
```

To run, enter `meteor` and view site at `http://localhost:3000`

Deploying site. Set up heroku and mongodb.

```
# set up heroku
heroku login
heroku apps:create foobar

# set buildpack for meteor
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git

# create mLab (mongodb) instance. note: you will need to verify heroku account
heroku addons:create mongolab:sandbox

# find MONGODB_URI
heroku config | grep MONGODB_URI

# set config vars for heroku/meteor
heroku config:add MONGO_URL=<MONGODB_URI value>
heroku config:add ROOT_URL=https://foobar.herokuapp.com

# set config vars for loading data
#  look at MONGODB_URI and parse as following:
#  mongodb://<dbUser>:<dbPassword>@<service>.com:<port>/<databaseName>
heroku config:set MONGO_USER=<dbUser>
heroku config:set MONGO_NAME=<databaseName>
heroku config:set MONGO_PORT=<port>
heroku config:set MONGO_HOST=<service>
heroku config:set MONGO_PASS=<dbPassword>

# push app
git push heroku master

# load data
./c_deploy.sh
```