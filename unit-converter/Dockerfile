# Bundle static assets with nginx
FROM nginx as production
ENV NODE_ENV production
# Copy built assets from builder
RUN rm /usr/share/nginx/html/*
COPY . /usr/share/nginx/html/
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Start nginx
CMD ["nginx", "-g", "daemon off;"]