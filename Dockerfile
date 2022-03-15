FROM node:latest

WORKDIR /code

COPY . /code

# RUN npm install -g yarn

RUN yarn

CMD ["yarn","serve"]