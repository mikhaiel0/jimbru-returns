

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const pkg = require('imgur')
const { ImgurClient } = pkg
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteJimbru = JSON.parse(fs.readFileSync('./Media/database/jimbruvn.json'))
const JimbruSticker = JSON.parse(fs.readFileSync('./Media/database/jimbrusticker.json'))
const JimbruImage = JSON.parse(fs.readFileSync('./Media/database/jimbruimage.json'))
const JimbruVideo = JSON.parse(fs.readFileSync('./Media/database/jimbruvideo.json'))
const JimbruDoc = JSON.parse(fs.readFileSync('./Media/database/doc.json'))
const JimbruZip = JSON.parse(fs.readFileSync('./Media/database/zip.json'))
const JimbruApk = JSON.parse(fs.readFileSync('./Media/database/apk.json'))

//bug database removed


//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var jimbrutime = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var jimbrutime = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var jimbrutime = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var jimbrutime = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var jimbrutime = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var jimbrutime = `Good Morning 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = JimbruBot = async (JimbruBot, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await JimbruBot.decodeJid(JimbruBot.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const jimbrrubody = body.startsWith(pric)
        const isCommand = jimbrrubody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await JimbruBot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const JimbrooMedia = m.mtype
        //user status
        const isUser = jimbruverifieduser.includes(sender)
        const JimbruByMikhaiel = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= JimbruByMikhaiel || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(JimbruBot, m, premium)
        
        //theme sticker reply
        const JimbruStickerWait = () => {
        let JimbruStickerReply = fs.readFileSync('./Media/theme/sticker_reply/wait.webp')
        JimbruBot.sendMessage(from, { sticker: JimbruStickerReply }, { quoted: m })
        }
        const JimbruStickerAdmin = () => {
        let JimbruStickerReply = fs.readFileSync('./Media/theme/sticker_reply/admin.webp')
        JimbruBot.sendMessage(from, { sticker: JimbruStickerReply }, { quoted: m })
        }
        const JimbruStickerBotAdmin = () => {
        let JimbruStickerReply = fs.readFileSync('./Media/theme/sticker_reply/botadmin.webp')
        JimbruBot.sendMessage(from, { sticker: JimbruStickerReply }, { quoted: m })
        }
        const JimbruStickerOwner = () => {
        let JimbruStickerReply = fs.readFileSync('./Media/theme/sticker_reply/owner.webp')
        JimbruBot.sendMessage(from, { sticker: JimbruStickerReply }, { quoted: m })
        }
        const JimbruStickerGroup = () => {
        let JimbruStickerReply = fs.readFileSync('./Media/theme/sticker_reply/group.webp')
        JimbruBot.sendMessage(from, { sticker: JimbruStickerReply }, { quoted: m })
        }
        const JimbruStickerPrivate = () => {
        let JimbruStickerReply = fs.readFileSync('./Media/theme/sticker_reply/private.webp')
        JimbruBot.sendMessage(from, { sticker: JimbruStickerReply }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
    replygcjimbru(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendJimbruBotMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await JimbruBot.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcjimbru(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                JimbruBot.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               JimbruBot.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            }
        }
        
        //fake bug
        
            //end fbug
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=919544846609:919544846609\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/theme/Jimbru.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = JimbruBot.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: JimbruBot.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: JimbruBot.getName(botNumber), alias: botname}, owner: { nick: JimbruBot.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: JimbruBot.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: JimbruBot.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}
        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//bug loading


async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcjimbru('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const jimbrruresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Mikhaiel',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            jimbrruresult.push(result)
        }
    resolve(jimbrruresult)
    })
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcjimbru(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitjimbru = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitjimbru
            }
            JimbruBot.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !JimbruByMikhaiel && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcjimbru(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!JimbruByMikhaiel && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcjimbru("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!JimbruBot.public) {
            if (JimbruByMikhaiel && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	JimbruBot.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            JimbruBot.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            JimbruBot.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let jimbrumix = ['composing', 'recording']
            jimbrumix2 = jimbrumix[Math.floor(jimbrumix.length * Math.random())]
            JimbruBot.sendPresenceUpdate(jimbrumix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let jimbrumix = ['recording']
            jimbrumix2 = jimbrumix[Math.floor(jimbrumix.length * Math.random())]
            JimbruBot.sendPresenceUpdate(jimbrumix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let jimbrupos = ['composing']
            JimbruBot.sendPresenceUpdate(jimbrupos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return JimbruBot.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return JimbruBot.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return JimbruBot.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (JimbruByMikhaiel || isAdmins || !isBotAdmins) return
            JimbruBot.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await JimbruBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await JimbruBot.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await JimbruBot.getName(i)}\nFN:${await JimbruBot.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
    
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await JimbruBot.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcjimbru('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
JimbruBot.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(JimbruByMikhaiel) return
JimbruBot.groupParticipantsUpdate(from, [sender], 'remove')
await JimbruBot.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
JimbruBot.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          replygcjimbru(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await JimbruBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && JimbrooMedia) {
    if(JimbrooMedia === "imageMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && JimbrooMedia) {
    if(JimbrooMedia === "videoMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && JimbrooMedia) {
    if(JimbrooMedia === "stickerMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && JimbrooMedia) {
    if(JimbrooMedia === "audioMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && JimbrooMedia) {
    if(JimbrooMedia === "pollCreationMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && JimbrooMedia) {
    if(JimbrooMedia === "locationMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && JimbrooMedia) {
    if(JimbrooMedia === "documentMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && JimbrooMedia) {
    if(JimbrooMedia === "contactMessage"){
        if (JimbruByMikhaiel || isAdmins || !isBotAdmins){		  
        } else {
          replygcjimbru(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return JimbruBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  JimbruBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			JimbruBot.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                JimbruBot.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                JimbruBot.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return replygcjimbru(bvl)
if (m.key.fromMe) return replygcjimbru(bvl)
if (JimbruByMikhaiel) return replygcjimbru(bvl)
               await JimbruBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			JimbruBot.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return replygcjimbru(bvl)
if (m.key.fromMe) return replygcjimbru(bvl)
if (JimbruByMikhaiel) return replygcjimbru(bvl)
               await JimbruBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			JimbruBot.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcjimbru(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcjimbru(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const jimbrufeature = () =>{
            var mytext = fs.readFileSync("./Jimbrureturn.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
for (let BhoomJimbru of VoiceNoteJimbru) {
if (budy === BhoomJimbru) {
let audiobuffy = fs.readFileSync(`./Media/audio/${BhoomJimbru}.mp3`)
JimbruBot.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhoomJimbru of JimbruSticker){
if (budy === BhoomJimbru){
let stickerbuffy = fs.readFileSync(`./Media/sticker/${BhoomJimbru}.webp`)
JimbruBot.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhoomJimbru of JimbruImage){
if (budy === BhoomJimbru){
let imagebuffy = fs.readFileSync(`./Media/image/${BhoomJimbru}.jpg`)
JimbruBot.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhoomJimbru of JimbruVideo){
if (budy === BhoomJimbru){
let videobuffy = fs.readFileSync(`./Media/video/${BhoomJimbru}.mp4`)
JimbruBot.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
JimbruBot.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhoomJimbru of JimbruApk) {
if (budy === BhoomJimbru) {
let buffer = fs.readFileSync(`./Media/apk/${BhoomJimbru}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
JimbruBot.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhoomJimbru of JimbruZip) {
if (budy === BhoomJimbru) {
let buffer = fs.readFileSync(`./Media/zip/${BhoomJimbru}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
JimbruBot.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhoomJimbru of JimbruDoc) {
if (budy === BhoomJimbru) {
let buffer = fs.readFileSync(`./Media/doc/${BhoomJimbru}.pdf`)
senddocu(buffer)
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: JimbruBot.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, JimbruBot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
JimbruBot.ev.emit('messages.upsert', msg)
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcjimbru(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcjimbru('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcjimbru(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcjimbru({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) JimbruBot.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            JimbruBot.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    JimbruBot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    JimbruBot.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) JimbruBot.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) JimbruBot.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) JimbruBot.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    JimbruBot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcjimbru(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) JimbruBot.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcjimbru(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) JimbruBot.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    JimbruBot.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
jimbruverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(jimbruverifieduser, null, 2))
}
        
        switch (isCommand) {
            case 'addbadword': case 'addbd':
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!groupAdmins) return replygcjimbru(mess.admin)
               if (args.length < 1) return replygcjimbru( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcjimbru('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!groupAdmins) return replygcjimbru(mess.admin)
               if (args.length < 1) return replygcjimbru( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcjimbru('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               let totalusernya = db.data.users[0]
               replygcjimbru(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygcjimbru(mess.done)
            }
            break
            case 'setmenu':{
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!text) return replygcjimbru(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  replygcjimbru(mess.done)
               } else {
                  replygcjimbru(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
            case 'setreply':{
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!text) return replygcjimbru(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  replygcjimbru(mess.done)
               } else {
                  replygcjimbru(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
            case 'statustext': 
            case 'upswteks': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!q) return replygcjimbru('Text?')
               await JimbruBot.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygcjimbru(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (/video/.test(mime)) {
                  var videosw = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                  await JimbruBot.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygcjimbru(mess.done)
               } else {
                  replygcjimbru('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (/image/.test(mime)) {
                  var imagesw = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                  await JimbruBot.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygcjimbru(mess.done)
               } else {
                  replygcjimbru('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                  await JimbruBot.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygcjimbru(mess.done)
               } else {
                  replygcjimbru('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './Media/theme/Jimbru.jpg')
                fs.unlinkSync(delb)
                replygcjimbru(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './Media/theme/Jimbru-bot.mp4')
                fs.unlinkSync(delb)
                replygcjimbru(mess.done)
            }
            break
            case 'addtitle':{
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!text) return replygcjimbru(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await replygcjimbru(mess.done)
            }
            break
            case 'deltitle':{
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!text) return replygcjimbru(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await replygcjimbru(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                replygcjimbru(mess.done)
            }
            break
            case 'dellimit':{
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygcjimbru(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygcjimbru(mess.done)
            }
            break
            case 'addprem':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 2)
                    return replygcjimbru(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygcjimbru("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygcjimbru("Premium Success")
                }
            break
            case 'delprem':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 919544846609`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    replygcjimbru("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    replygcjimbru("Delete Success")
                }
            break
            case 'listprem': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                JimbruBot.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (!args[0]) return replygcjimbru(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await JimbruBot.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcjimbru(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcjimbru(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (!args[0]) return replygcjimbru(`Use ${prefix+command} nomor\nExample ${prefix+command} 919544846609`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcjimbru(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcjimbru(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcjimbru('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcjimbru(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcjimbru(teks)
                    await sleep(2000)
                    replygcjimbru("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcjimbru("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!JimbruByMikhaiel) return JimbruStickerOwner()
                    if (!text) return replygcjimbru('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcjimbru('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    JimbruBot.groupAcceptInvite(result)
                    await replygcjimbru(`Done`)
                } catch {
                    replygcjimbru('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                replygcjimbru('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                JimbruBot.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcjimbru("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygcjimbru(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                JimbruBot.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            JimbruBot.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'shutdown':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                replygcjimbru(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    replygcjimbru(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    replygcjimbru(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replygcjimbru(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replygcjimbru(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcjimbru(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcjimbru(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcjimbru(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcjimbru(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcjimbru(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcjimbru(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    replygcjimbru(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    replygcjimbru(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
                if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    replygcjimbru(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    replygcjimbru(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autoblock':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcjimbru(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcjimbru(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcjimbru(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcjimbru(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcjimbru(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcjimbru(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    replygcjimbru(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    replygcjimbru(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    replygcjimbru(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    replygcjimbru(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'self': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                JimbruBot.public = false
                replygcjimbru('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                JimbruBot.public = true
                replygcjimbru('*Successful in Changing To Public Usage*')
            }
            break
            case 'mode':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (args.length < 1) return replygcjimbru(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    JimbruBot.public = true
                    replygcjimbru(mess.done)
                } else if (q == 'self') {
                    JimbruBot.public = false
                    replygcjimbru(mess.done)
                }
            break
            case 'setexif':
            case 'setwm':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcjimbru(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'setprefix':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                replygcjimbru(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                replygcjimbru(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                replygcjimbru(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!quoted) return replygcjimbru(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcjimbru(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcjimbru(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await JimbruBot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await JimbruBot.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcjimbru(mess.done)
                } else {
                    var memeg = await JimbruBot.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcjimbru(mess.done)
                }
                break
            case 'leave':
            case 'out':
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!m.isGroup) return JimbruStickerGroup()
                replygcjimbru('Bye Everyone 🥺')
                await JimbruBot.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (!text) return replygcjimbru('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await JimbruBot.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await JimbruBot.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await JimbruBot.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcjimbru(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'pushcontact': {
    if (!JimbruByMikhaiel) return JimbruStickerOwner()
      if (!m.isGroup) return replygcjimbru(`The feature works only in grup`)
    if (!text) return replygcjimbru(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcjimbru(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    JimbruBot.sendMessage(pler, { text: q})
     }  
     replygcjimbru(`Done`)
      }
      break
case "pushcontactv2":{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (!q) return replygcjimbru(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await JimbruStickerWait()
const metadata2 = await JimbruBot.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
JimbruBot.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcjimbru(`Success`)
}
break
case 'block': case 'ban': {
		if (!JimbruByMikhaiel) return JimbruStickerOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await JimbruBot.updateBlockStatus(users, 'block')
		await replygcjimbru(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!JimbruByMikhaiel) return JimbruStickerOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await JimbruBot.updateBlockStatus(users, 'unblock')
		await replygcjimbru(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!text) return replygcjimbru(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await JimbruBot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcjimbru(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    JimbruBot.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcjimbru(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            
            //group
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  replygcjimbru(`${commad} is disabled`)
               }
               }
            break
            case 'react': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                JimbruBot.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcjimbru('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcjimbru('Success in turning on nsfw in this group')
var groupe = await JimbruBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
JimbruBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcjimbru('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcjimbru('Success in turning off nsfw in this group')
} else {
  await replygcjimbru(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'id':{
            replygcjimbru(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!JimbruByMikhaiel) return JimbruStickerOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcjimbru(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Mikhaiel,Adhil,Rahul...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await JimbruBot.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antiviewonce':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygcjimbru(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return JimbruStickerGroup()
if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return JimbruStickerGroup()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return JimbruStickerGroup()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return JimbruStickerGroup()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break 
            case 'invite': {
	if (!m.isGroup) return JimbruStickerGroup()
	if (!isBotAdmins) return JimbruStickerBotAdmin()
if (!text) return replygcjimbru(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 919544846609`)
if (text.includes('+')) return replygcjimbru(`Enter the number together without *+*`)
if (isNaN(text)) return replygcjimbru(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await JimbruBot.groupInviteCode(group)
      await JimbruBot.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcjimbru(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcjimbru('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcjimbru(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    JimbruBot.groupSettingUpdate(m.chat, 'announcement')
                    replygcjimbru(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !JimbruByMikhaiel) return replygcjimbru(mess.admin)
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcjimbru('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcjimbru(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    JimbruBot.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcjimbru(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await JimbruBot.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcjimbru(mess.done)
                break
                case "idgroup": case "groupid": {
if (!JimbruByMikhaiel) return JimbruStickerOwner()
let getGroups = await JimbruBot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await JimbruBot.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcjimbru(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcjimbru(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcjimbru(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await JimbruBot.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await JimbruBot.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcjimbru(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return JimbruStickerGroup()
if (!(isGroupAdmins || JimbruByMikhaiel)) return JimbruStickerAdmin()
jimbrubigpp = await JimbruBot.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
JimbruBot.sendContact(m.chat, participants.map(a => a.id), jimbrubigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return JimbruStickerGroup()
if (!(isGroupAdmins || JimbruByMikhaiel)) return JimbruStickerAdmin()
let cmiggc = await JimbruBot.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcjimbru('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
JimbruBot.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return JimbruStickerGroup()
if (!m.mentionedJid[0]) return replygcjimbru('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
JimbruBot.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return JimbruStickerGroup()
if (!(isGroupAdmins || JimbruByMikhaiel)) return JimbruStickerAdmin()
if (!m.mentionedJid[0]) return replygcjimbru('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
JimbruBot.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return JimbruStickerGroup()
                if(!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await JimbruBot.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygcjimbru(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await JimbruBot.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygcjimbru(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await JimbruBot.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygcjimbru(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (!text) return replygcjimbru('Text ?')
                await JimbruBot.groupUpdateSubject(m.chat, text)
                replygcjimbru(mess.done)
                break
                case 'userjid':{
          	if(!JimbruByMikhaiel) return JimbruStickerOwner()
        const groupMetadata = m.isGroup ? await JimbruBot.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcjimbru(textt)
    }
    break
    case 'creategc': case 'creategroup': {
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (!args.join(" ")) return replygcjimbru(`Use ${prefix+command} groupname`)
try {
let cret = await JimbruBot.groupCreate(args.join(" "), [])
let response = await JimbruBot.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
JimbruBot.sendMessage(m.chat, { text:teksop, mentions: await JimbruBot.parseMention(teksop)}, {quoted:m})
} catch {
	replygcjimbru(`Error`)
	}
}
break
    case 'setbotbio':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (!text) return replygcjimbru(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await JimbruBot.updateProfileStatus(text)
    replygcjimbru(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return JimbruStickerGroup()
if (!isAdmins && !JimbruByMikhaiel) return JimbruStickerAdmin()
if (!isBotAdmins) return JimbruStickerBotAdmin()
    await JimbruBot.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!JimbruByMikhaiel) return JimbruStickerOwner()
    await JimbruBot.removeProfilePicture(JimbruBot.user.id)
    replygcjimbru(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (!text) return replygcjimbru('Text ?')
                await JimbruBot.groupUpdateDescription(m.chat, text)
                replygcjimbru(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins) return replygcjimbru(mess.admin)
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (!quoted) return replygcjimbru(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcjimbru(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcjimbru(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await JimbruBot.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await JimbruBot.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcjimbru(mess.done)
                } else {
                    var memeg = await JimbruBot.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcjimbru(mess.done)
                }
                break
            case 'tagall':
            case 'tag':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                JimbruBot.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'hidetag':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                JimbruBot.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (!isAdmins) return replygcjimbru(mess.admin)
                if (!m.quoted) return replygcjimbru(`Reply media with caption ${prefix + command}`)
                JimbruBot.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (args[0] === 'close') {
                    await JimbruBot.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcjimbru(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await JimbruBot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcjimbru(`Success Opening Group`))
                } else {
                    replygcjimbru(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (args[0] === 'open') {
                    await JimbruBot.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcjimbru(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await JimbruBot.groupSettingUpdate(m.chat, 'locked').then((res) => replygcjimbru(`Successfully Closed Edit Group Info`))
                } else {
                    replygcjimbru(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                let response = await JimbruBot.groupInviteCode(m.chat)
                JimbruBot.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await JimbruBot.fetchStatus(who)
    replygcjimbru(bio.status)
  } catch {
    if (text) return replygcjimbru(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await JimbruBot.fetchStatus(who)
      replygcjimbru(bio.status)
    } catch {
      return replygcjimbru(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return JimbruStickerGroup()
            if (m.chat in vote) return replygcjimbru(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcjimbru(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcjimbru(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            JimbruBot.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return JimbruStickerGroup()
            if (!(m.chat in vote)) return replygcjimbru(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcjimbru('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            JimbruBot.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return JimbruStickerGroup()
            if (!(m.chat in vote)) return replygcjimbru(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcjimbru('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            JimbruBot.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return JimbruStickerGroup()
if (!(m.chat in vote)) return replygcjimbru(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${JimbruBot.user.id}
`
JimbruBot.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return JimbruStickerGroup()
            if (!(m.chat in vote)) return replygcjimbru(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcjimbru('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isAdmins && !isGroupOwner && !JimbruByMikhaiel) return JimbruStickerAdmin()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                await JimbruBot.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcjimbru(`Reset Success`)
                    })
            break
                //bot status
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	JimbruBot.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await JimbruBot.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      await replygcjimbru(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await replygcjimbru(`Repository currently not available `)
  }
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`
                await JimbruBot.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygcjimbru(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                replygcjimbru('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) JimbruBot.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) JimbruBot.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                JimbruBot.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\nDont forget to donate yeah🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`
sendJimbruBotMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/Jimbru.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
            case 'owner': {
                JimbruBot.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcjimbru(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await JimbruBot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcjimbru('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await JimbruBot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcjimbru(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcjimbru(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
JimbruBot.downloadAndSaveMediaMessage(quoted, "gifee")
JimbruBot.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await JimbruBot.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcjimbru('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await JimbruBot.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcjimbru(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcjimbru(`Reply sticker with caption *${prefix + command}*`)
                await JimbruStickerWait()
                let media = await JimbruBot.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    JimbruBot.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcjimbru(`Reply sticker with caption *${prefix + command}*`)
                await JimbruStickerWait()
                let media = await JimbruBot.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await JimbruBot.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcjimbru(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await JimbruStickerWait()
                let media = await JimbruBot.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                JimbruBot.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcjimbru(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await JimbruStickerWait()
                let media = await JimbruBot.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                JimbruBot.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `jimbru.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcjimbru(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await JimbruStickerWait()
                let media = await JimbruBot.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                JimbruBot.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcjimbru(`Reply sticker with caption *${prefix + command}*`)
                await JimbruStickerWait()
                let media = await JimbruBot.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await JimbruBot.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await JimbruStickerWait()
                let media = await JimbruBot.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcjimbru(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcjimbru(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcjimbru(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcjimbru(`Example : ${prefix + command} 😅+🤔`)
                await JimbruStickerWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await JimbruBot.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygcjimbru(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await JimbruBot.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcjimbru(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                    JimbruBot.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                    JimbruBot.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                   JimbruBot.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcjimbru(`Example:\n${prefix}fliptext jimbru`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcjimbru(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return replygcjimbru(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await JimbruBot.sendMessage(from, { image: medi, caption:"Jeem bhoom bhaaaah!!!!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return replygcjimbru(`Example: ${prefix + command} 10`)
media = await JimbruBot.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcjimbru('Error!')
jadie = fs.readFileSync(rname)
JimbruBot.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcjimbru(`Example: ${prefix + command} 10`)
media = await JimbruBot.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcjimbru('Error!')
jadie = fs.readFileSync(rname)
JimbruBot.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await JimbruStickerWait()
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcjimbru(err)
                let buff = fs.readFileSync(ran)
                JimbruBot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcjimbru(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcjimbru(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcjimbru(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcjimbru('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygcjimbru('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await JimbruBot.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await JimbruBot.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygcjimbru('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        JimbruBot.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        replygcjimbru(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    replygcjimbru('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcjimbru(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replygcjimbru(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return replygcjimbru(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcjimbru(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await JimbruBot.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) JimbruBot.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcjimbru(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcjimbru(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                JimbruBot.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcjimbru("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygcjimbru(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'ai': 
            case 'ask':
            case 'openai': {
               if (db.data.users[sender].limit < 1) return replygcjimbru(mess.limit)
	            if (!q) return replygcjimbru(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await replygcjimbru(isi)
			   }
			   break
    case 'xxqc': {
if (!q) return replygcjimbru(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return replygcjimbru(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return replygcjimbru('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await JimbruBot.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
JimbruBot.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    case 'ephemeral': {
                if (!m.isGroup) return JimbruStickerGroup()
                if (!isBotAdmins) return JimbruStickerBotAdmin()
                if (!isAdmins) return JimbruStickerAdmin()
                if (!text) return replygcjimbru('Enter the value enable/disable')
                if (args[0] === 'on') {
                    await JimbruBot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcjimbru(`Done`)
                } else if (args[0] === 'off') {
                    await JimbruBot.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcjimbru(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 JimbruBot.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break
    case 'anticall': {
             if (!JimbruByMikhaiel) return JimbruStickerOwner()
               if (args.length < 1) return replygcjimbru('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  replygcjimbru(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  replygcjimbru(`${command} is disabled`)
               }
            }
            break
             break
case 'addvideo':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Whats the video name?')
if (JimbruVideo.includes(q)) return replygcjimbru("The name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
JimbruVideo.push(q)
await fsx.copy(delb, `./Media/video/${q}.mp4`)
fs.writeFileSync('./Media/database/jimbruvideo.json', JSON.stringify(JimbruVideo))
fs.unlinkSync(delb)
replygcjimbru(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Enter the video name')
if (!JimbruVideo.includes(q)) return replygcjimbru("The name does not exist in the database")
let wanu = JimbruVideo.indexOf(q)
JimbruVideo.splice(wanu, 1)
fs.writeFileSync('./Media/database/jimbruvideo.json', JSON.stringify(JimbruVideo))
fs.unlinkSync(`./Media/video/${q}.mp4`)
replygcjimbru(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of JimbruVideo) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${JimbruVideo.length}*`
replygcjimbru(teks)
}
break
case 'addimage':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Whats the image name?')
if (JimbruImage.includes(q)) return replygcjimbru("The name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
JimbruImage.push(q)
await fsx.copy(delb, `./Media/image/${q}.jpg`)
fs.writeFileSync('./Media/database/jimbruimage.json', JSON.stringify(JimbruImage))
fs.unlinkSync(delb)
replygcjimbru(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Enter the image name')
if (!JimbruImage.includes(q)) return replygcjimbru("The name does not exist in the database")
let wanu = JimbruImage.indexOf(q)
JimbruImage.splice(wanu, 1)
fs.writeFileSync('./Media/database/jimbruimage.json', JSON.stringify(JimbruImage))
fs.unlinkSync(`./Media/image/${q}.jpg`)
replygcjimbru(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of JimbruImage) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${JimbruImage.length}*`
replygcjimbru(teks)
}
break
case 'addsticker':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Whats the sticker name?')
if (JimbruSticker.includes(q)) return replygcjimbru("The name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
JimbruSticker.push(q)
await fsx.copy(delb, `./Media/sticker/${q}.webp`)
fs.writeFileSync('./Media/database/jimbrusticker.json', JSON.stringify(JimbruSticker))
fs.unlinkSync(delb)
replygcjimbru(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Enter the sticker name')
if (!JimbruSticker.includes(q)) return replygcjimbru("The name does not exist in the database")
let wanu = JimbruSticker.indexOf(q)
JimbruSticker.splice(wanu, 1)
fs.writeFileSync('./Media/database/jimbrusticker.json', JSON.stringify(JimbruSticker))
fs.unlinkSync(`./Media/sticker/${q}.webp`)
replygcjimbru(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of JimbruSticker) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${JimbruSticker.length}*`
replygcjimbru(teks)
}
break
case 'addmsg': {
	if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!m.quoted) return replygcjimbru('Reply Message You Want To Save In Database')
                if (!text) return replygcjimbru(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygcjimbru(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcjimbru(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcjimbru(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygcjimbru(`'${text}' not listed in the message list`)
                JimbruBot.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcjimbru(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!JimbruByMikhaiel) return JimbruStickerOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygcjimbru(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcjimbru(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Whats the audio name?')
if (VoiceNoteJimbru.includes(q)) return replygcjimbru("The name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
VoiceNoteJimbru.push(q)
await fsx.copy(delb, `./Media/audio/${q}.mp3`)
fs.writeFileSync('./Media/database/jimbruvn.json', JSON.stringify(VoiceNoteJimbru))
fs.unlinkSync(delb)
replygcjimbru(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()
if (args.length < 1) return replygcjimbru('Enter the vn name')
if (!VoiceNoteJimbru.includes(q)) return replygcjimbru("The name does not exist in the database")
let wanu = VoiceNoteJimbru.indexOf(q)
VoiceNoteJimbru.splice(wanu, 1)
fs.writeFileSync('./Media/database/jimbruvn.json', JSON.stringify(VoiceNoteJimbru))
fs.unlinkSync(`./Media/audio/${q}.mp3`)
replygcjimbru(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteJimbru) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteJimbru.length}*`
replygcjimbru(teks)
}
break
case 'addzip':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()

if (args.length < 1) return replygcjimbru(`What's the zip name?`)
let teks = `${text}`
{
if (JimbruZip.includes(teks)) return replygcjimbru("This name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
JimbruZip.push(teks)
await fsx.copy(delb, `./Media/zip/${teks}.zip`)
fs.writeFileSync('./Media/database/zip.json', JSON.stringify(JimbruZip))
fs.unlinkSync(delb)
replygcjimbru(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()

if (args.length < 1) return replygcjimbru('Enter the text in the zip list')
let teks = `${text}`
{
if (!JimbruZip.includes(teks)) return replygcjimbru("This name does not exist in the database")
let wanu = JimbruZip.indexOf(teks)
JimbruZip.splice(wanu, 1)
fs.writeFileSync('./Media/database/zip.json', JSON.stringify(JimbruZip))
fs.unlinkSync(`./Media/zip/${teks}.zip`)
replygcjimbru(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of JimbruZip) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${JimbruZip.length}*`
replygcjimbru(teksooooo)
}
break
case 'addapk':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()

if (args.length < 1) return replygcjimbru('What is the name of the apk?')
let teks = `${text}`
{
if (JimbruApk.includes(teks)) return replygcjimbru("This name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./Media/apk/${teks}.apk`)
fs.writeFileSync('./Media/database/apk.json', JSON.stringify(JimbruApk))
fs.unlinkSync(delb)
replygcjimbru(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()

if (args.length < 1) return replygcjimbru('Name of the apk?')
let teks = `${text}`
{
if (!JimbruApk.includes(teks)) return replygcjimbru("This name does not exist in the database")
let wanu = JimbruApk.indexOf(teks)
JimbruApk.splice(wanu, 1)
fs.writeFileSync('./Media/database/apk.json', JSON.stringify(JimbruApk))
fs.unlinkSync(`./Media/apk/${teks}.apk`)
replygcjimbru(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of JimbruApk) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${JimbruApk.length}`
replygcjimbru(teksoooooo)
}
break
case 'addpdf':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()

if (args.length < 1) return replygcjimbru('What is the name of the pdf')
let teks = `${text}`
{
if (JimbruDoc.includes(teks)) return replygcjimbru("This name is already in use")
let delb = await JimbruBot.downloadAndSaveMediaMessage(quoted)
JimbruDoc.push(teks)
await fsx.copy(delb, `./Media/doc/${teks}.pdf`)
fs.writeFileSync('./Media/database/doc.json', JSON.stringify(JimbruDoc))
fs.unlinkSync(delb)
replygcjimbru(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!JimbruByMikhaiel) return JimbruStickerOwner()

if (args.length < 1) return replygcjimbru('Enter the name')
let teks = `${text}`
{
if (!JimbruDoc.includes(teks)) return replygcjimbru("This name does not exist in the database")
let wanu = JimbruDoc.indexOf(teks)
JimbruDoc.splice(wanu, 1)
fs.writeFileSync('./Media/database/doc.json', JSON.stringify(JimbruDoc))
fs.unlinkSync(`./Media/doc/${teks}.pdf`)
replygcjimbru(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of JimbruDoc) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${JimbruDoc.length}*`
replygcjimbru(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
JimbruBot_dev = await getBuffer(`https://github.com/Mikhaiel/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await JimbruBot.sendMessage(m.chat, { audio: JimbruBot_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await JimbruStickerWait()
let teman = pickRandom(jimbruverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcjimbru('Managed to Get One Person')
}, 5000)
setTimeout(() => {
JimbruBot.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcjimbru('Reply the Message!!')
let jimbruquotx= await JimbruBot.serializeM(await m.getQuotedObj())
if (!jimbruquotx.quoted) return replygcjimbru('The message you are replying to is not sent by the bot')
await jimbruquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcjimbru(`Example ${prefix+command} const jimbrubot = require('baileys')`)
let meg = await obfus(q)
replygcjimbru(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcjimbru('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcjimbru(teks)
	    }
	    break
case 'yts': case 'ytsearch': {
                if (!text) return replygcjimbru(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                JimbruBot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'play':  case 'song': {
if (!text) return replygcjimbru(`Example : ${prefix + command} anime whatsapp status`)
const jimbruplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await jimbruplaymp3.mp3(anup3k.url)
await JimbruBot.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp3': case 'ytaudio':
let jimbruaudp3 = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !jimbruaudp3.isYTUrl(text)) return replygcjimbru(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
let audio = await jimbruaudp3.mp3(text)
await JimbruBot.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const jimbruvidoh = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !jimbruvidoh.isYTUrl(text)) replygcjimbru(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await jimbruvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await JimbruBot.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'git': case 'gitclone':
if (!args[0]) return replygcjimbru(`Where is the link?\nExample :\n${prefix}${command} https://github.com/Mikhaiel/Jimbru4.7`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcjimbru(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    JimbruBot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcjimbru(mess.error))
break

case 'google': {
if (!q) return replygcjimbru(`Example : ${prefix + command} ${botname}`)
await JimbruStickerWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcjimbru(teks)
})
}
break
case 'weather':{
if (!text) return replygcjimbru('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           JimbruBot.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'fb':
           case 'facebook': {
           if (!args[0]) {
    return replygcjimbru(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygcjimbru('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    JimbruBot.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygcjimbru('Maybe private video!')
  }
  }
  break
case 'xxxigstalk': {
if (!text) return replygcjimbru(`Enter Instagram Username\n\nExample: ${prefix + command} the_real_mikhaiel`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await JimbruBot.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcjimbru(`Example ${prefix+command} Mikhaiel`)
await JimbruStickerWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
JimbruBot.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcjimbru(`Example ${prefix+command} xeonapi`)
await JimbruStickerWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcjimbru(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygcjimbru(`Example ${prefix+command} 946716486`)
await JimbruStickerWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygcjimbru(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return replygcjimbru(`Example ${prefix+command} 530793138|8129`)
await JimbruStickerWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcjimbru(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return replygcjimbru(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcjimbru('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcjimbru('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcjimbru( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "bhoom",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await JimbruBot.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcjimbru('*Error*')
    }
    }
    break
case 'imdb':
if (!text) return replygcjimbru(`_Name a Series or movie`)
await JimbruStickerWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           JimbruBot.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return replygcjimbru(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcjimbru(eb)
}
break
case 'dbinary': {
if (!q) return replygcjimbru(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcjimbru(db)
}
break
case 'happymod':{
if (!q) return replygcjimbru(`Example ${prefix+command} Sufway surfer mod`)
await JimbruStickerWait()
let kat = await scp2.happymod(q)
replygcjimbru(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygcjimbru(`Enter the Google Drive link`)
	await JimbruStickerWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcjimbru(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	JimbruBot.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcjimbru('Error: Check link or try another link') 
  }
}
break
case 'pinterest': {
if (!text) return replygcjimbru(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
JimbruBot.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcjimbru(`Example : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		JimbruBot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tiktokgirl':
await JimbruStickerWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await JimbruStickerWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await JimbruStickerWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await JimbruStickerWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await JimbruStickerWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await JimbruStickerWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await JimbruStickerWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
JimbruBot.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
JimbruBot.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await JimbruStickerWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': {
			if (!quoted) return replygcjimbru(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcjimbru(`Send/Reply Photos With Captions ${prefix + command}`)
			await JimbruStickerWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			JimbruBot.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'define': 
if (!q) return replygcjimbru(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcjimbru(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   JimbruBot.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcjimbru(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcjimbru(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcjimbru(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcjimbru(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcjimbru(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcjimbru(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcjimbru(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcjimbru(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcjimbru(jawab)
            }
            break
case 'where': {
if (!text) return replygcjimbru(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcjimbru(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcjimbru(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcjimbru(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcjimbru(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcjimbru(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcjimbru(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const jimbrukak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
JimbruBot.sendMessage(m.chat, { text: jimbrukak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return JimbruStickerGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
JimbruBot.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/Jimbru.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return JimbruStickerGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
JimbruBot.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/Jimbru.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                JimbruBot.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcjimbru('Enter Query Title')
                await JimbruStickerWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                JimbruBot.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcjimbru('Enter Query Title')
                await JimbruStickerWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                JimbruBot.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      JimbruBot.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      JimbruBot.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      JimbruBot.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }

case 'lyrics': {
if (!text) return replygcjimbru(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await JimbruStickerWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcjimbru(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'pick': {
            	if (!m.isGroup) return JimbruStickerGroup()
            	if (!text) return replygcjimbru(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await JimbruBot.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let jimbrushimts = member[Math.floor(Math.random() * member.length)]
             JimbruBot.sendMessage(from, { 
text: `The most *${text}* here is *@${jimbrushimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[jimbrushimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/Jimbru.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return replygcjimbru('Where is the text?')
            let texttts = text
            const rljimbru = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return JimbruBot.sendMessage(m.chat, {
                audio: {
                    url: rljimbru,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcjimbru(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quotejimmbru = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotejimmbru.data.quote.body}\n\n*${themeemoji} Author:* ${quotejimmbru.data.quote.author}`
return replygcjimbru(textquotes)
break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot Creator Mikhaiel through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const jimbrudare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              JimbruBot.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ jimbrudare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Mikhaiel?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const jimbrutruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              JimbruBot.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ jimbrutruth }, {quoted:m})
              break
              case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
JimbruBot.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
JimbruBot.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await JimbruBot.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await JimbruBot.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'anime': {
if (!text) return replygcjimbru(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await JimbruStickerWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcjimbru(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await JimbruBot.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
                await JimbruStickerWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                JimbruBot.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return JimbruStickerGroup()
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await JimbruBot.sendMessage(m.chat, { caption:  `Jeem bhoom bhaaaah!!!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'blowjob':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gangbang.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/nsfwloli.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return JimbruStickerGroup()
	if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var jimbrruresult = pickRandom(ahegaonsfw)
JimbruBot.sendMessage(m.chat, { caption: mess.success, image: { url: jimbrruresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await JimbruBot.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return JimbruStickerGroup()
if (!AntiNsfw) return replygcjimbru(mess.nsfw)
await JimbruStickerWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gifs.json'))
var jimbrruresultx = pickRandom(ahegaonsfw)
    await JimbruBot.sendMessage(m.chat,{video:jimbrruresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await JimbruBot.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppjimbru = await getBuffer(ppuser)
JimbruBot.sendMessage(from, { image: ppjimbru, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return replygcjimbru(`Tag Someone, Example : ${prefix + command} @mikhaiel`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
JimbruBot.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcjimbru(`Tag Someone, Example : ${prefix + command} @mikhaiel`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
JimbruBot.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcjimbru(`Tag Someone, Example : ${prefix + command} @mikhaiel`)
					const jimmbru =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = jimmbru[Math.floor(Math.random() * jimmbru.length)]
					JimbruBot.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return JimbruStickerGroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
JimbruBot.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
JimbruBot.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
JimbruBot.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/Mikhaiel/Media/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await JimbruBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/Mikhaiel/Media/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await JimbruBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/Mikhaiel/Media/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await JimbruBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/Mikhaiel/Media/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await JimbruBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return JimbruStickerPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let jimbruresources = await Telesticker(args[0])
		await replygcjimbru(`Sending ${jimbruresources.length} stickers...`)
		if (m.isGroup && jimbruresources.length > 30) {
			await replygcjimbru('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < jimbruresources.length; i++) {
				JimbruBot.sendMessage(m.sender, { sticker: { url: jimbruresources[i].url }})
			}
		} else {
			for (let i = 0; i < jimbruresources.length; i++) {
				JimbruBot.sendMessage(m.chat, { sticker: { url: jimbruresources[i].url }})
			}
		}
	} else replygcjimbru(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return replygcjimbru(`Example : ${prefix+command} JimbruBot`) 
await JimbruStickerWait()
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
JimbruBot.sendMessage(m.chat, { image: { url: dehe }, caption: mess.success}, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replygcjimbru(`Example : ${prefix+command} JimbruBot`) 
await JimbruStickerWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
JimbruBot.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'setcmd': {
                if (!m.quoted) return replygcjimbru('Reply Message!')
                if (!m.quoted.fileSha256) return replygcjimbru('SHA256 Hash Missing')
                if (!text) return replygcjimbru(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcjimbru('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcjimbru(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcjimbru(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcjimbru('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                replygcjimbru(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                JimbruBot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!JimbruByMikhaiel) return JimbruStickerOwner()
                if (!m.quoted) return replygcjimbru('Reply Message!')
                if (!m.quoted.fileSha256) return replygcjimbru('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygcjimbru('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygcjimbru('Done!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return replygcjimbru(`Example ${prefix+command} link`)
await JimbruStickerWait()
let krt = await scp2.ssweb(q)
JimbruBot.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    replygcjimbru(pickupLine)
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    JimbruBot.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m })
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    replygcjimbru(bibleChapter)
  } catch (error) {
    replygcjimbru(`Error: ${error.message}`)
  }
  }
  break
  case 'dalle': {
  if (!text) return replygcjimbru(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`)
  try {
  	replygcjimbru('*Please wait, generating image...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await JimbruBot.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    replygcjimbru('*Oops! Something went wrong while generating images. Please try again later.*')
  }
  }
  break
  case 'translate':{
  	if (!q) return replygcjimbru(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       replygcjimbru(result.text)
    } catch (e) {
        return replygcjimbru(err)
    } 
    }
    break
    case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcjimbru(quranSurah)

    if (json.data.recitation.full) {
      JimbruBot.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcjimbru(`Error: ${error.message}`)
  }
  }
  break
  case 'mediafire': {
  	if (!args[0]) return replygcjimbru(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return replygcjimbru(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    JimbruBot.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
    case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return JimbruStickerGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    JimbruBot.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'instagram': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcjimbru(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygcjimbru(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygcjimbru(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      JimbruBot.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      JimbruBot.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
case 'apk':
case 'apkdl':{
if (!text) return replygcjimbru("What apk u wanna download?")
let resjimbru = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonjimbru = await resjimbru.json()
JimbruBot.sendMessage(from, { document: { url: jsonjimbru.data.dllink}, fileName : jsonjimbru.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break
case 'mathsai': {
                if (!text) return replygcjimbru('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/mathssolve?q=${text}`)                
                replygcjimbru(d.data)
           }
            break
            case 'blackboxai': {
                if (!text) return replygcjimbru('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/blackboxv4?q=${text}`)                
                replygcjimbru(d.data)
           }
            break
            case 'bardai': {
                if (!text) return replygcjimbru('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/bard?q=${text}`)                
                replygcjimbru(d.data)
           }
            break
            case 'photoleapai': {
	if (!text) return replygcjimbru('What is your question?')
	let jimbrufetch = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${text}`)
	JimbruBot.sendMessage(from, { image: {url:jimbrufetch.data}}, { quoted: m })
	}
	break
	case 'lamaai': {
                if (!text) return replygcjimbru('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/llama-2?q=${text}`)                
                replygcjimbru(d.data)
           }
            break
            case 'geminiai': {
                if (!text) return replygcjimbru('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/gemini?q=${text}`)                
                replygcjimbru(d.data)
           }
            break
case 'itunes': {
if (!text) return replygcjimbru('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await JimbruBot.sendMessage(m.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted: m})
    } else {
      replygcjimbru(songInfo)
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} jeem bhoom bhaaa`)
dgjimbrutks = args.join(" ")
dgjimbruvuff = await getBuffer(`https://vihangayt.me/maker/text2img?q=${dgjimbrutks}`)
JimbruBot.sendImageAsSticker(m.chat, dgjimbruvuff, m, {
                        packname: packname,
                        author: author
                    })
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} jeem bhoom bhaaa`)
dgjimbrutks2 = args.join(" ")
dgjimbruvuff2 = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${dgjimbrutks2}`)
JimbruBot.sendImageAsSticker(m.chat, dgjimbruvuff2, m, {
                        packname: packname,
                        author: author
                    })
break
case 'blur':
  case 'blurimg': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/blur?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'beautiful':
  case 'beautifulimg': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/beautiful?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'facepalm':
  case 'facepalmimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/facepalm?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'invert':
  case 'invertimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/invert?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'pixelate':
  case 'pixelateimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/pixelate?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'rainbow':
  case 'rainbowimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/rainbow?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'trigger':
  case 'triggerimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/trigger?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'wanted':
  case 'wantedimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/wanted?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'wasted':
  case 'wastedimage': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/wasted?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'carbon':
  case 'carbonimage': {
 if (!text) return replygcjimbru('Where is the text?')
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/carbonimg?q=${text}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'colorize': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/tools/colorize?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'enhance': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/tools/enhance?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
            case 'dehaze': {
 if (!isMedia) return replygcjimbru("Where Is The Image")
                let media = await JimbruBot.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                JimbruBot.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/tools/dehaze?url=${anu}` },caption: "Jeem bhoom bhaaaah!!!!" }, { quoted: m}) }
            break
           
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygcjimbru(`Total Features of ${botname} is ${jimbrufeature()}`)
        break
            case 'menu':
            case 'help': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let xmenu_oh = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${jimbrutime} 😄${readmore} 
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${xprefix} ]
│𝗠𝗼𝗱𝗲 : ${JimbruBot.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│??𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬───────────────── ⳹
   │✑  Please Type The *MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
│❏${xprefix}allmenu
│❏${xprefix}downloadmenu
│❏${xprefix}funmenu
│❏${xprefix}aimenu
│❏${xprefix}groupmenu
│❏${xprefix}ownermenu
│❏${xprefix}photooxymenu
│❏${xprefix}ephoto360menu
│❏${xprefix}makermenu
│❏${xprefix}animemenu
│❏${xprefix}nsfwmenu
│❏${xprefix}randomphotomenu
│❏${xprefix}randomvideomenu
│❏${xprefix}stickermenu
│❏${xprefix}databasemenu
│❏${xprefix}stalkermenu
│❏${xprefix}othermenu
└─────────────────┈ ⳹`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'allmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${allmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'ownermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'othermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'downloadmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'groupmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'funmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stalkermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomphotomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomvideomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'photooxymenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'ephoto360menu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ephoto360menu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'makermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${makermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'nsfwmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'animemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stickermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'databasemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    JimbruBot.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    JimbruBot.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    JimbruBot.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    JimbruBot.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    JimbruBot.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    JimbruBot.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/Jimbru.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	JimbruBot.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Jimbru-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/Jimbru.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               JimbruBot.sendMessage(sender, { text: b }, { quoted: m })
               replygcjimbru('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygcjimbru(b)
            }
            break
            
            // bug war features removed for security reasons 



//ban/unban whatsApp accounts removed for security reasons 

            default:
                if (budy.startsWith('=>')) {
                    if (!JimbruByMikhaiel) return JimbruStickerOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcjimbru(bang)
                    }
                    try {
                        replygcjimbru(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcjimbru(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!JimbruByMikhaiel) return JimbruStickerOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcjimbru(evaled)
                    } catch (err) {
                        await replygcjimbru(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!JimbruByMikhaiel) return JimbruStickerOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcjimbru(err)
                        if (stdout) return replygcjimbru(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
JimbruBot.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
JimbruBot.sendMessage("919544846609@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
