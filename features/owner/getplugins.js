
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
        let fitur = Object.keys(features).map(a => a.split("features/")[1]);
        if (!fitur.includes(text)) throw `*[ ⚠️ ]* plugins tidak ditemukan!

*• List Plugins :*
${fitur.map((a, i) => `*${i + 1}.* ${a}`).join("\n")}`
        let pilihan = fitur[parseInt(text) - 1]
        let hasil = await fs.readFileSync(process.cwd() + "/features/" + pilihan).toString()
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