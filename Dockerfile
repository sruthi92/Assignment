FROM node:16.15.1

WORKDIR /usr/app

COPY . .

ADD . /usr/app/

RUN npm install

ENTRYPOINT [ "npm", "run" ]

CMD ["test"]
