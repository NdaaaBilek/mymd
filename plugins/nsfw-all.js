//let fetch = require('node-fetch')
let handler = async (m, {conn, text, command, usedPrefix}) => {

    if (command == 'neko') {
        let res = await fetch("https://api.waifu.pics/nsfw/neko")
        let json = await res.json()
        conn.sendFile(m.chat, json.url, null, null, m)
    }

    if (command == 'trap') {
        let res = await fetch("https://api.waifu.pics/nsfw/trap")
        let json = await res.json()
        conn.sendFile(m.chat, json.url, null, null, m)
    }

    if (command == 'blowjob') {
        let res = await fetch("https://api.waifu.pics/nsfw/blowjob")
        let json = await res.json()
        conn.sendFile(m.chat, json.url, null, null, m)
    }

    if (command == 'waifu') {
        let res = await fetch("https://api.waifu.pics/nsfw/waifu")
        let json = await res.json()
        conn.sendFile(m.chat, json.url, null, null, m)
    }
}
handler.command = handler.help = ['neko', 'trap', 'blowjob', 'waifu']
handler.tags = ['nsfw']

module.exports = handler
