let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/c1f3adc59818e62a90a8f.mp4'
  let { name } = global.db.data.users[who]
  m.react('🎮')
let str = `                  ✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم الترفيه≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
❐..🎮╎❯ .اكس_او⌉
❐..🎮╎❯ .كنسل⌉
❐..🎮╎❯ .تحدي⌉
❐..🎮╎❯ .حرب⌉
❐..🎮╎❯ .احزر⌉
❐..🎮╎❯ .حظ⌉
❐..🎮╎❯ .جميل⌉
❐..🎮╎❯ .صفع⌉
❐..🎮╎❯ .طبطبه⌉
❐..🎮╎❯ .ورع⌉
❐..🎮╎❯ .اهبل⌉
❐..🎮╎❯ .خروف⌉
❐..🎮╎❯ .انطق⌉
❐..🎮╎❯ .نسبه⌉
❐..🎮╎❯ .لو⌉
❐..🎮╎❯ .تويت⌉
❐..🎮╎❯ .تاج⌉
❐..🎮╎❯ .سؤال⌉
❐..🎮╎❯ .اسئلني⌉
❐..🎮╎❯  كت⌉
❐..🎮╎❯ .شطرنج⌉
❐..🎮╎❯ .سلاحي
❐..🎮╎❯ .علم⌉
❐..🎮╎❯ .نصايح⌉
❐..🎮╎❯ .علم⌉
❐..🎮╎❯ .عكس⌉
❐..🎮╎❯ .تويت⌉
❐..🎮╎❯ .مراتي⌉
❐..🎮╎❯ .فزوره⌉
❐..🎮╎❯ .لغز⌉
❐..🎮╎❯ .حروف⌉
❐..🎮╎❯ .شخصيه⌉
❐..🎮╎❯ .احرجني⌉
❐..🎮╎❯ .خمن⌉
❐╎..🎮❯ .شاذ⌉
❐..🎮╎❯ .فكك⌉
❐..🎮╎❯ .المارد⌉
❐..🎮╎❯ .ايمو⌉
❐..🎮╎❯ .دين⌉
❐..🎮╎❯ .كوره⌉
❐..🎮╎❯ .رياضيات⌉
                    ✥━─━⌬ 𝒎𝒆𝒈𝒐_𝒃𝒐𝒕 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الترفيه']

export default handler
