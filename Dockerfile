FROM node:10 as builder

COPY . .

RUN npm install
RUN npm run build

FROM httpd:2.4

COPY --from=builder ./dist /usr/local/apache2/htdocs
