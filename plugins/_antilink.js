let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `🏷 *Hey!! el anti link esta activo pero eres admin, ¡salvado!*`, m, rcanal, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `☠ 𝑬𝒏𝒍𝒂𝒄𝒆 𝒅𝒆𝒕𝒆𝒄𝒕𝒂𝒅𝒐\n\n𝘕𝘰 𝘱𝘦𝘳𝘮𝘪𝘳𝘪𝘮𝘰𝘴 𝘦𝘯𝘭𝘢𝘤𝘦𝘴 de otros 𝘨𝘳𝘶𝘱𝘰𝘴, 𝘭𝘰 𝘤𝘪𝘦𝘯𝘵𝘰 *${await this.getName(m.sender)} 🤖 𝘴𝘦𝘳𝘢́𝘴 𝘦𝘹𝘱𝘶𝘭𝘴𝘢𝘥𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰`, m)
if (!isBotAdmin) return conn.reply(m.chat, `🌼 *No soy admin, no puedo eliminar intrusos*`, m, rcanal, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, rcanal, )
}
return !0

}