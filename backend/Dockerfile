# Use an official PHP image as a base
FROM php:7.4-apache

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory
WORKDIR /var/www/html

# Copy .env.example and create .env
COPY .env.example .env

# Copy the application files
COPY . .

# Install dependencies using Composer
RUN composer install

# Expose Apache port
EXPOSE 80

# Run migrations
CMD ["php", "artisan", "migrate"]

# Run php artisan serve when the container starts
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
