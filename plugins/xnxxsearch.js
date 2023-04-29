let { xnxxsearch } = require('../lib/scrape.js')
let handler = async (m, {conn, text, command, usedPrefix}) => {
    let err = `${set.sb} *Example* : ${usedPrefix + command} teks\n\n_Gesek pesan ini kekanan untuk mencari *bkp:v*_`
    if (!text) throw err
    let res = await xnxxsearch(text)
    let json = await res.result.map((v => `*Title*: ${v.title}\n*Info*: ${v.info}\n*Link*: ${v.link}`)).join('\n\n')
    let hasil = `${set.sa} Xnxx Search *${text}* ${set.sa}\n\n${json}`
    conn.reply(m.chat, hasil, m)
}
handler.help = ['xnxxsearch'].map(v => v + ' <query>')
handler.tags = ['nsfw']
handler.command = /^(xnxxsearch|xnxx)$/i
handler.premium = true
module.exports = handler 
