FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .
EXPOSE 3005
CMD ["npx","serve","-s",".","-l","3005"]
