/* Codded by @Raashii
edited by joker ser
ZaraMwol V2
*/

const { WAConnection, MessageOptions, MessageType, Mimetype, Presence } = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const Config = require('../config');

const Asena = require('../events');

let wk = Config.WORKTYPE == 'public' ? false : true

const ll = "```Type somethingðââï¸```"

const pack = `â­âââââââââââââââââ®
        *Êá´É¢á´ á´á´á´á´Ê á´á´á´á´*
â°âââââââââââââââââ¯
              
â *á´ÊÊ á´á´á´á´á´É´á´s*
â­ââââââââââââââââ
â â¢ .ÊÊá´á´á´
â â¢ .É´á´Êá´á´á´
â â¢ .É¢É´á´á´É´
â â¢ .ÊÉ´á´á´É´
â â¢ .Êá´á´á´
â â¢ .á´Êá´á´
â â¢ .ÒÊá´á´¡á´Ê
â â¢ .sÉªÊá´
â â¢ .ÒÊá´á´á´
â â¢ .sá´á´á´á´
â â¢ .sá´Ê
â â¢ .ÊÊá´á´á´á´ÉªÉ´á´
â â¢ .É´á´á´É´
â â¢ .Òá´É´á´Ê
â â¢ .É¢Êá´É¢á´
â â¢ .sá´á´Êá´
â°ââââââââââââââââ
â­âââââââââââââââââ®
            *Êá´É¢á´ á´á´á´á´Ê á´ ð·*
     
             âá´¢á´Êá´á´á´¡á´Êâ
â°âââââââââââââââââ¯`

Asena.tozara({pattern: 'logopack', fromMe: false, desc: 'its send logo pack'}, (async (message, match) => {

    await message.client.sendMessage(
    message.jid,pack, MessageType.text);
  }));
  
//zeks api

Asena.tozara({pattern: 'break ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "breakwall"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));
 
 Asena.tozara({pattern: 'naruto ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "naruto"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

 Asena.tozara({pattern: 'hack ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "Matrix"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

Asena.tozara({pattern: 'bneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "bneon"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

Asena.tozara({pattern: 'gneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "gneon"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

 Asena.tozara({pattern: 'drop ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "Dropwater"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

 Asena.tozara({pattern: 'flower ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "Flowertext"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

 Asena.tozara({pattern: 'silk ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "SilkText"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

  Asena.tozara({pattern: 'flame ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "FlameText"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

 Asena.tozara({pattern: 'smoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "smokeText"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

 Asena.tozara({pattern: 'sky ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const nam = "Skytext"
  const zeks = "https://api.zeks.xyz/api/" + nam + "?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text="
  
    var webimage = await axios.get(zeks + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

// jojo api

Asena.tozara({pattern: 'neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const jojo = "https://docs-jojo.herokuapp.com/api/neon_light?text="
  
    var webimage = await axios.get(jojo + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

Asena.tozara({pattern: 'blackpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const jojo = "https://docs-jojo.herokuapp.com/api/blackpink?text="
  
    var webimage = await axios.get(jojo + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));


Asena.tozara({pattern: 'fancy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const jojo = "https://docs-jojo.herokuapp.com/api/text3d?text="
  
    var webimage = await axios.get(jojo + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

Asena.tozara({pattern: 'glogo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const jojo = "https://docs-jojo.herokuapp.com/api/gaming?text="
  
    var webimage = await axios.get(jojo + `${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

Asena.tozara({pattern: 'spark ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
    
  const jojo = "https://docs-jojo.herokuapp.com/api/sparkling?text1="
  
    var webimage = await axios.get(jojo + `${match[1]}&text2=_`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

//zeks scrap

Asena.tozara({pattern: 'spooky ?(.*)', fromMe: wk, dontAddCommandList: true }, async (message, match) => {
	
	if (match[1] === '') return await message.client.sendMessage(message.jid, ll);
	
	const html = "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
	
        const {data} = await axios(`https://api.zeks.me/api/textpro-scraper?apikey=ApiKannappi&data={%22text%22:%20[%22${match[1]}%22],%20%22url%22:%20%22` + html + `%22,%20%22radio0[radio]%22:%20%22783ab148-70af-40b4-a0e0-6dd837ae6e8b%22}`)
	
        const { status, result } = data

	var img = await axios.get(`${result}`, {responseType: 'arraybuffer'})

       
         return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg})
        });
    
