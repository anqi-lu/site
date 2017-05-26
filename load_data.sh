mongoimport -h localhost:3001 --db meteor --collection projects --type json --file server/data/projects.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection reading --type json --file server/data/reading.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection professional --type json --file server/data/professional.json --jsonArray
mongoimport -h localhost:3001 --db meteor --collection research --type json --file server/data/research.json --jsonArray
