FROM nginx:latest

RUN apt-get update && apt-get install -y curl

RUN apt-get install -y nodejs

RUN apt-get install -y npm

RUN cd /usr/share/nginx/html && npm install mysql2

COPY app/index.html /usr/share/nginx/html

COPY app/db-query.js /usr/share/nginx/html

CMD ["node", "/usr/share/nginx/html/db-query.js"]  
