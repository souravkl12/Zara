FROM fusuf/whatsasena:latest

RUN git clone https://github.com/souravkl12/Zara /root/WhatsAsenaDuplicated

WORKDIR /root/WhatsAsenaDuplicated/

RUN git clone https://github.com/Raashii/media

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]
