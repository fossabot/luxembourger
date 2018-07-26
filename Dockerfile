FROM nginx

COPY nginx.conf /etc/nginx/sites-available/default

COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
