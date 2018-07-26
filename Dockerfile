FROM nginx

COPY nginx.conf /etc/nginx/conf.default

COPY build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
