//© Create by L E X I C -  T E A M

const fs = require("fs");

module.exports = {
    help: ["gp"],
    usage: "*get features*",
    command: ["gp"],
    category: ["owner"],
    example: "*• Example :* %cmd *[filename]*",
    run: async (m, {
        kgy,
        usedPrefix,
        command,
        text
    }) => {
        let fitur = Object.keys(features);
        if (isNaN(text)) throw `*[ ⚠️ ]* Kesalahan input, ketik angka *1 -> ${fitur.length}*
sesuai angka dibawah ini :

${fitur.map((a, i) => `*${i + 1}.* ${a.split("features/")[1]}`).join("\n")}`

        if (parseInt(text) < 1) throw `*[ ⚠️ ]* Kesalahan input, ketik angka *1 -> ${fitur.length}*
sesuai angka dibawah ini :

${fitur.map((a, i) => `*${i + 1}.* ${a.split("features/")[1]}`).join("\n")}`
        if (parseInt(text) > fitur.length) throw `*[ ⚠️ ]* Kesalahan input, ketik angka *1 -> ${fitur.length}*
sesuai angka dibawah ini :

${fitur.map((a, i) => `*${i + 1}.* ${a.split("features/")[1]}`).join("\n")}`
        if (parseInt(text) < 1) throw `*[ ⚠️ ]* Kesalahan input, ketik angka *1 -> ${fitur.length}*
sesuai angka dibawah ini :

${fitur.map((a, i) => `*${i + 1}.* ${a.split("features/")[1]}`).join("\n")}`

        let pilihan = fitur[parseInt(text) - 1]
        let hasil = await fs.readFileSync(process.cwd() + pilihan).toString()
        m.reply(hasil);
    },
    wait: true,
    owner: true,
    group: false,
    private: false,
    botadmin: false,
    premium: false,
    error: 0,
    update: Date.now()
}