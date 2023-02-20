FROM php:8.2-fpm-alpine

WORKDIR /var/www/html/project

RUN apk update \
  && apk upgrade \
  && apk add nginx supervisor jpegoptim optipng pngquant gifsicle ffmpeg libwebp libwebp-tools

# Install dependencies
RUN apk add --no-cache --update --virtual .phpize-deps $PHPIZE_DEPS \
  libxml2-dev curl-dev linux-headers oniguruma-dev imap-dev openssl-dev

# install extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql dom curl mbstring imap opcache

# install redis php and enable
RUN pecl install redis \
  && docker-php-ext-enable redis

# install xdebug
RUN pecl install xdebug \
  && docker-php-ext-enable xdebug

# Composer
RUN \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && HASH="$(wget -q -O - https://composer.github.io/installer.sig)" \
    && php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php --version=2.5.4 --install-dir=/usr/local/bin --filename=composer

# Copy files
COPY ./docker/configs/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/configs/supervisord/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./docker/configs/file.ini /usr/local/etc/php/conf.d/file.ini
COPY ./docker/configs/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
COPY . /var/www/html/project/

# Setup cron
# RUN echo '*  *  *  *  * /usr/local/bin/php  /var/www/html/project/artisan schedule:run >> /dev/null 2>&1' > /etc/crontabs/root

RUN composer install

RUN chown -R $USER:www-data storage \
  && chown -R $USER:www-data bootstrap/cache \
  && chown -R $USER:www-data /var/lib/nginx /var/log/nginx \
  && chmod -R 755 /var/lib/nginx /var/log/nginx

EXPOSE 80 443 9003

# Remove Build Dependencies
RUN apk del -f $PHPIZE_DEPS libxml2-dev curl-dev linux-headers oniguruma-dev imap-dev openssl-dev

# RUN /usr/bin/supervisord -C /etc/supervisor/conf.d/supervisord.conf

CMD ["php", "artisan", "serve", "--host=173.23.0.3"]
