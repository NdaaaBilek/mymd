let { xnxxdl } = require('../lib/scrape.js')
let handler = async (m, {conn, text, command, usedPrefix}) => {
    let err = `${set.sb} *Example* : ${usedPrefix + command} link\n\n_Gesek pesan ini kekanan untuk mendownload video *Bokep*_`
    if (!text) throw err
    let res = await xnxxdl(text)
conn.sendFile(m.chat, res.result.files.high, null, null, m)
}
handler.help = ['xnxxdl'].map(v => v + ' <link>')
handler.tags = ['nsfw']
handler.command = /^(xnxxdl)$/i
handler.premium = true
module.exports = handler 
