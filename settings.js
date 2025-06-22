const fs = require('fs')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || ''


global.PREFIX = process.env.PREFIXZ || '.'


global.mode = process.env.MODE || 'public';
// Set 'private' to enable private mode
// Set 'public' to enable public mode


global.botname = process.env.BOT_NAME || 'IMMU MD'

global.ownernumber = process.env.OWNER_NUMBER || '92xxxxxxxxx'


global.antidelete = process.env.ANTIDELETE || 'private'
// options:- 'private', 'chat' or 'off'
// private = Sends to message yourself 
// chat = sends to the current chat 
// off = Disables detection of deleted messages


global.statusemoji = process.env.STATUS_EMOJI || "🧡,💚,🔥,✨,❤️,🥰,😎";


global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'


global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'false'


global.timezones = process.env.TIMEZONE || "Pakistan/Karachi" 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Updated '${__filename}'`)
  delete require.cache[file]
  require(file)
})