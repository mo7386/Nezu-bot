import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['967712272493', '🌩️ ẉa.me//𝑀𝐸𝐺𝛩‖.peị!‽ 👑', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['967712272493']
global.suittag = ['967712272493']
global.mods = []
global.prems = []

global.packname = '『 نيزو 』'
global.author = '『 نيزوكو بــ💃ـوت 』'
global.wm = 'نيزوؤؤ بــ🥀ـؤؤت 』'
global.wm2 = '『 نيزو بــ💎ـوت 』'
global.azami = '『نيزؤؤ بــ💞ـؤؤ 』'
global.cb = '『 نيزو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© Nezu_BOT'
global.devnum = '+967712272493'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
