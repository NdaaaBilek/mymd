
let nodemailer = require('nodemailer')
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command, args }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!args[0]) throw `Penggunaan salah!\ncontoh:\n*${usedPrefix + command} manusia|email kamu*`
  /*if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} manusia|email kamu*`*/
  let urut = text.split`|`
  let name = urut[0]
  let mail = urut[1] 
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!mail) throw 'Email Tidak Boleh Kosong!!'
  const res = await sendMail(mail)
  m.reply(`Daftar Berhasil silahkan cek email mu untuk melihat code verify\n\n*Note :* sesudah mendaapatkan kode verify silahkan mengetik ${usedPrefix}verify <kode verify>`)
  user.name = name.trim()

}
handler.help = ['daftar', 'register'].map(v => v + ' <name>|<email>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler

async function sendMail(email) {
        const inboxGmail = `<div
        style="width: 600px; height: 500px;margin: auto;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
        <div
            style="line-height: 2; letter-spacing: 0.5px; position: relative; padding: 10px 20px; width: 540px;min-height: 360px; margin: auto; border: 1px solid #DDD; border-radius: 14px;">
            <h3>Welcome to NdaaBotz-MD - an awesome Bot Whatsapp!</h3>
            <p>
                Terima kasih suddah mendaftar di NdaaBotz-MD, code Verify kamu adalah 122430
            </p>
<br>
If you have any problem, please contact via <span
                    style="color: #4D96FF;"><a href="https://api.whatsapp.com/send?phone=6285640575421">WhatsApp</a></span></span>
            <span style="display: block;"><br>Regards,<br>NdaaCyyy</span>
        </div>
    </div>
      `;
  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: 'ndaatzy123@gmail.com',
        pass: 'ascnbdnzhwokaset',
      },
    });

    let info = await transporter.sendMail({
      from: '"Selamat Datang Di NdaaBotz!" <ndaatzy123@gmail.com>',
      to: email,
      subject: "Verify code",
      text: "Halo!",
      html: inboxGmail,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error(error);
  }
}
