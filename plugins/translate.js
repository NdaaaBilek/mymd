const translate = require('translate-google')
let handler = async (m, {conn, text, command, usedPrefix}) => {
    if (!text) throw `Masukkan Text Yang Ingin Di Translate!`
translate(text, {from: 'en', to: 'id'}).then(res => conn.reply(m.chat, res, fkontak))
}
handler.help = ['translate / tr']
handler.tags = ['main']
handler.command = /^(tr|translate)$/i

module.exports = handler
