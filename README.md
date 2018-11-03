# becoming.lu

[https://becoming.lu](https://becoming.lu)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bbitbucket.org%2Frodislav%2Fbecoming.svg?type=large)](https://app.fossa.io/projects/git%2Bbitbucket.org%2Frodislav%2Fbecoming?ref=badge_large)

[FOSSA Reports](https://app.fossa.io/reports/a8b6858f-3304-4b23-9584-358e76c67a56)

## About

The project is created as a tool that is going to help newcomers to integrate
into luxembourger society much easier than usually is.

+ It contains articles on most popular topics asked by expats.

+ Each article has references to existing sources which provide good content

+ For now the main language is English, as is the most popular known language by expats

+ Internalization will come later into the equation

## Setup and run locally

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In order to run the project locally we have to `npm install && npm start`

## HTTPS

1. Have nginx installed
1. Follow: https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx
  - `sudo certbot --nginx certonly`
1. Now you can remove nginx, or just stop it
1. `sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 4096`
  - this will take some good minutes


https://gist.github.com/nrollr/9a39bb636a820fb97eec2ed85e473d38

```text
# Advanced config for NGINX
	server_tokens off;
	add_header X-XSS-Protection "1; mode=block";
	add_header X-Content-Type-Options nosniff;

# Redirect all HTTP traffic to HTTPS
server {
   listen 80;
   	server_name www.domain.com domain.com;
   	return 301 https://$host$request_uri;
}

# SSL configuration
server {
   listen 443 ssl default deferred;
   server_name www.domain.com domain.com;
	ssl_certificate      /etc/letsencrypt/live/www.domain.com/fullchain.pem;
    	ssl_certificate_key  /etc/letsencrypt/live/www.domain.com/privkey.pem;
  
  	# Improve HTTPS performance with session resumption
  	ssl_session_cache shared:SSL:10m;
  	ssl_session_timeout 5m;

	# Enable server-side protection against BEAST attacks
  	ssl_prefer_server_ciphers on;
	ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;
  		
  	# Disable SSLv3
  	ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    	# Diffie-Hellman parameter for DHE ciphersuites
        # $ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 4096
    	ssl_dhparam /etc/ssl/certs/dhparam.pem;

	# Enable HSTS (https://developer.mozilla.org/en-US/docs/Security/HTTP_Strict_Transport_Security)
	add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";  

  	# Enable OCSP stapling (http://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox)
  	ssl_stapling on;
  	ssl_stapling_verify on;
  	ssl_trusted_certificate /etc/letsencrypt/live/www.domain.com/fullchain.pem;
  	resolver 8.8.8.8 8.8.4.4 valid=300s;
  	resolver_timeout 5s;

# Required for LE certificate enrollment using certbot
   location '/.well-known/acme-challenge' {
	default_type "text/plain";
	root /var/www/html;
   }
   location / {
	root /var/www/html;
   }
}
```