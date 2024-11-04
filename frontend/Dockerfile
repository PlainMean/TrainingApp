# frontend/Dockerfile
FROM nginx:alpine

COPY app/index.html /usr/share/nginx/html/
COPY app/script.js /usr/share/nginx/html/
COPY app/styles.css /usr/share/nginx/html/

# Copy the custom Nginx configuration file
# COPY app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
