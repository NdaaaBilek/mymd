const { execSync } = require('child_process')
const { readdirSync } = require('fs')
const { format } = require('util')

let handler = async (m, { conn, text, isROwner }) => {
  try {
    let stdout = execSync('git remote set-url origin ' + set.repo + ' && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) readdirSync('plugins').map(v => global.reload('', v))
    let hasil = stdout.toString()
    m.react('⚡').then(_=> 
       conn.reply(m.chat, hasil, m)
    )
    } catch (e) {
    conn.reply(m.chat, format(e), m)
  }
}
handler.help = ['update']
handler.tags = ['host']
handler.command = /^(update|u)$/i //sedia payung sebelum hujan meteor 
handler.rowner = true
module.exports = handler
