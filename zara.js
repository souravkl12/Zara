/* codded by raashii
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 OB_NAME: process.env.Z_BOT_NAME === undefined ? 'Zara' : process.env.Z_BOT_NAME,
 SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
 SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
 DESC: process.env.BOT_DESCRIPTION === undefined ? '💥 𝐏𝐄𝐖𝐄𝐑 𝐈𝐒 𝐏𝐄𝐖𝐄𝐑 💥' : process.env.BOT_DESCRIPTION,
 OA_NAME: process.env.Z_DEP_NAME === undefined ? '*New Device Registered To ZaraMwol Database!*' : process.env.Z_DEP_NAME,
 REMOVE2: process.env.THERI_KICK_PM === undefined ? 'false' : process.env.THERI_KICK_PM,
 PM_BLOCK: process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK,
 THERI_BLOCK: process.env.THERI_BLOCK === undefined ? 'false' : process.env.THERI_BLOCK,
 LOGO: process.env.LOGO_LINK === undefined ? 'https://i.ibb.co/9rrnJ7g/20210815-080839.jpg' : process.env.LOGO_LINK,
 PLKAFN: process.env.THERI_LIST_PM === undefined ? false : process.env.THERI_LIST_PM,
 OA_REPLY: process.env.Z_DEP_REPLY === undefined ? '*𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄𝐃*\n\nʏᴏᴜʀ ᴅᴀᴛᴀ ɪɴғᴏ ᴡᴏɴᴛ ʙᴇ sʜᴏᴡɴ ᴘᴜʙʟɪᴄ. ᴛʜɪs ɪs ғᴏʀ ᴜsᴇʀs sᴇᴄᴜʀɪᴛʏ. ᴅᴏ ʏᴏᴜ ᴡᴀɴᴛ ᴅᴇᴘʟᴏʏ ʟɪɴᴋ ᴊᴜsᴛ ᴍsɢ - *deploy*\n\n*𝚃𝙷𝙰𝙽𝙺 𝚈𝙾𝚄 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚉𝙰𝚁𝙰𝙼𝚆𝙾𝙻 💖*' : process.env.Z_DEP_REPLY,
 PHONE: process.env.NUMBER === undefined ? '+994 40 360 13 40' : process.env.NUMBER,   
    

};
