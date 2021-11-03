const Rashi = require('../events');
const { WAConnection, MessageOptions, MessageType, Mimetype, Presence } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const plk1 = "*𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄𝐃*\n\nʏᴏᴜʀ ᴅᴀᴛᴀ ɪɴғᴏ ᴡᴏɴᴛ ʙᴇ sʜᴏᴡɴ ᴘᴜʙʟɪᴄ. ᴛʜɪs ɪs ғᴏʀ ᴜsᴇʀs sᴇᴄᴜʀɪᴛʏ. ᴅᴏ ʏᴏᴜ ᴡᴀɴᴛ ᴅᴇᴘʟᴏʏ ʟɪɴᴋ ᴊᴜsᴛ ᴍsɢ - *deploy*\n\n*𝚃𝙷𝙰𝙽𝙺 𝚈𝙾𝚄 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚉𝙰𝚁𝙰𝙼𝚆𝙾𝙻 💖*"
const plk = "*🛑 𝔻𝕠 𝕟𝕠𝕥 𝕣𝕖𝕡𝕝𝕪. 𝕋𝕙𝕚𝕤 𝕓𝕠𝕥 𝕚𝕤 𝕡𝕣𝕚𝕧𝕒𝕥𝕖 🛑*"
const ll = "```https://bit.ly/deploy-ZaraMwol```"

Rashi.tozara({ on: 'text', fromMe: false, onlyPm: true, deleteCommand: false }, (async (message, match) => {
    

            let regex1 = new RegExp('*New Device Registered To ZaraMwol Database!*')
            let regex2 = new RegExp('deploy')
            
            if (regex1.test(message.message)) {
              await message.client.sendMessage(message.jid, plk1, MessageType.text, { quoted: message.data })
              await message.client.sendMessage(message.jid, plk, MessageType.text)
            }
            if (regex2.test(message.message)) {
              await message.client.sendMessage(message.jid, ll, MessageType.text, { quoted: message.data })
            }
            
}))
