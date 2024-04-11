//═══════════════════════════════════════════════════════//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
//global.ytname = "UUU" //ur yt chanel name
//global.socialm = "insta : https://instagram.com/the_real_mikhaiel" //ur github or insta name
//global.location = "India, Kerala, Pathanamthitta" //ur location

//new
global.botname = 'Call Me Jimbru' //ur bot name
global.ownernumber = '919544846609' //ur owner number
global.ownername = 'Mikhaiel' //ur owner name
global.websitex = "https://github.com/Mikhaiel/Jimbru v4.1"
global.wagc = "https://whatsapp.com/channel"
global.themeemoji = '🪀'
global.wm = "Jimbru Bot Inc."
global.botscript = 'https://github.com/Mikhaiel/jimbru-returns' //script link
global.packname = "Sticker By"
global.author = "Jimbru dev by mikhaiel"
global.creator = "919544846609@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["919544846609"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./Media/theme/Jimbru.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
//customize settings\\
//global.owner = ['919544846609','919746319042']
//global.premium = ['919544846609','919746319042']
//global.ownernomer = '919544846609','919746319042'
//global.ownername = 'Mikhaiel'
//global.botname = 'Jimbru v4.1'
//global.footer = '© JIMBRU OFFICAL'
