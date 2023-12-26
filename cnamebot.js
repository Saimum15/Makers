module.exports.config = {
    name: "cnamebot",
    version: "1.0.4",
    hasPermssion: 0,
    creditss: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Automatically prevent change bot nickname",
    commandCategory: "system",
    usages: "",
    cooldowns: 5
};


module.exports.handleEvent = async function ({ api, args, event, client, __GLOBAL, Threads, Currencies }) {
    const { threadID } = event;
    let { nicknames } = await api.getThreadInfo(event.threadID)
    const nameBot = nicknames[api.getCurrentUserID()]
    if (nameBot !== `【 ${config.PREFIX} 】➭ ${config.BOTNAME}`) {
        api.changeNickname(`【 ${global.config.PREFIX} 】➭ ${(!global.config.BOTNAME) ? "Made by 𝙍𝙖𝙩𝙪𝙡 𝙃𝙖𝙨𝙨𝙖𝙣" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        setTimeout(() => {
            return api.sendMessage(`❗Arfhat er permission chara kew Name Change korte parbe na`, threadID);
        }, 1500);
    }
}

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["cnamebot"] == "undefined" || data["cnamebot"] == false) data["cnamebot"] = true;
    else data["cnamebot"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ ${(data["cnamebot"] == true) ? "Turn on" : "Turn off"} successfully cnamebot!`, event.threadID);

}