# update data!
DEPLOY = true

if [ $DEPLOY ]
    ## get conf variables 
    heroku config -s

    ## delete old data
    mongo $MONGO_HOST:$MONGO_PORT/$MONGO_NAME -u $MONGO_USER -p $MONGO_PASS --eval "db.dropDatabase()"

    ## import new data
    mongoimport -h $MONGO_HOST:$MONGO_PORT --db $MONGO_NAME --collection projects -u $MONGO_USER -p $MONGO_PASS --type json --file server/data/projects.json --jsonArray
    mongoimport -h $MONGO_HOST:$MONGO_PORT --db $MONGO_NAME --collection professional -u $MONGO_USER -p $MONGO_PASS --type json --file server/data/professional.json --jsonArray
    mongoimport -h $MONGO_HOST:$MONGO_PORT --db $MONGO_NAME --collection reading -u $MONGO_USER -p $MONGO_PASS --type json --file server/data/reading.json --jsonArray
    mongoimport -h $MONGO_HOST:$MONGO_PORT --db $MONGO_NAME --collection research -u $MONGO_USER -p $MONGO_PASS --type json --file server/data/research.json --jsonArray
fi

## import local data for dev
mongo meteor --host localhost:3001 --eval "db.dropDatabase()"
mongoimport -h localhost:3001 --db meteor --collection projects --type json --file server/data/projects.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection reading --type json --file server/data/reading.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection professional --type json --file server/data/professional.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection research --type json --file server/data/research.json --jsonArray