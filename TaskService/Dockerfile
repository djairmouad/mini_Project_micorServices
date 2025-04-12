FROM node

COPY  . .

COPY  protoFiles /protoFiles

RUN npm install

EXPOSE 3001

EXPOSE 50051

CMD [ "node","appService.js" ]