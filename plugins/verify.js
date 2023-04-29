const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!text) throw `contoh : .verify <code>`
  if (/^122430/i.test(text)) {
  conn.reply(m.chat, `daftar berhasil!`, m)
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, m)
  } else {
    conn.reply(m.chat, `Code Verify Salah!!`, m)
  }
}
handler.command = /^(verify)$/i

module.exports = handler