let nodemailer = require('nodemailer')
let handler = async (m, {conn, text, args, command, usedPrefix}) => {
  if (!text) throw `Masukkan Email`

  let res = await sendMail(text)

  m.reply(`Sukses!`)
}
handler.command = /^(sendMail)$/i

module.exports = handler

async function sendMail(email) {

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'ndaatzy123@gmail.com', // generated ethereal user
      pass: 'ascnbdnzhwokaset', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Selamat Datang Di NdaaBotz!" <ndaatzy123@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Welcome To NdaaBotz!!", // Subject line
    text: 'Your verification code is: ' + Math.floor(Math.random() * 10000)
    //html: "<b>Selamat Datang! User Baru Dari NdaaBotz!!, Semoga Betah YAAAAAA!?</b>", // html body
  });

  console.log(`Sukses!`)

}
