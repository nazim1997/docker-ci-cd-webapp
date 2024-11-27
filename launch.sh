docker-compose -f docker-compose.yml up db -d
sleep 20
docker-compose -f docker-compose.yml up web -d
