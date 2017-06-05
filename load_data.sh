## import local data for dev
mongo meteor --host localhost:3001 --eval "db.dropDatabase()"
mongoimport -h localhost:3001 --db meteor --collection a_projects --type json --file server/data/projects.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection a_reading --type json --file server/data/reading.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection a_professional --type json --file server/data/professional.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection a_research --type json --file server/data/research.json --jsonArray