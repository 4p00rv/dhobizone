FROM node:14
COPY . /app
WORKDIR /app
RUN apt-get update \
 && apt-get install -y libglu1 \
 && apt-get clean
RUN npm install
