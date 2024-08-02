//© Create by L E X I C -  T E A M

async function event(m, {
    kgy
}) {
    if (m.mtype === "eventMessage") {
        m.reply("*[ ⚠️ ]* terdeteksi mengirim pesan acara !")
        kgy.sendMessage(m.chat, {
            delete: m.key
        })
    }
}
module.exports = {
    event
}