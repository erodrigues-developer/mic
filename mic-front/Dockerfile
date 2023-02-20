FROM node:18.14.0-alpine3.16

WORKDIR /var/www/html/project

RUN apk update \
  && apk upgrade

RUN npm install -g @angular/cli @angular-devkit/build-angular

COPY . /var/www/html/project

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]