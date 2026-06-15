/**
 * Global Configuration for Aarav WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx'], // apna number add karo
    ownerName: ['Aarav'],

    // Bot Configuration
    botName: 'Aarav Bot',
    prefix: '.',
    sessionName: 'aarav-session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '',
    updateZipUrl: '',

    // Sticker Configuration
    packname: 'Aarav Bot',

    // Bot Behavior
    selfMode: false,
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,

    // Group Settings Defaults
    defaultGroupSettings: {
        antilink: false,
        antilinkAction: 'delete',

        antitag: false,
        antitagAction: 'delete',

        antiall: false,

        antiviewonce: false,
        antibot: false,
        anticall: false,

        antigroupmention: false,
        antigroupmentionAction: 'delete',

        welcome: true,
        welcomeMessage:
`╭━━━〔 ✨ AARAV BOT ✨ 〕━━━╮
┃ Welcome @user 👋
┃ Member: #memberCount
┃ Time: time ⏰
╰━━━━━━━━━━━━━━╯

Welcome to @group 🎉

Powered by Aarav Bot`,

        goodbye: true,
        goodbyeMessage:
        'Goodbye @user 👋',

        antiSpam: false,
        antidelete: false,
        nsfw: false,
        detect: false,
        chatbot: false,
        autosticker: false
    },

    // API Keys
    apiKeys: {
        openai: '',
        deepai: '',
        remove_bg: ''
    },

    // Messages
    messages: {
        wait: '⏳ Aarav Bot processing...',
        success: '✅ Done!',
        error: '❌ Error!',
        ownerOnly: '👑 Owner only command!',
        adminOnly: '🛡️ Admin only command!',
        groupOnly: '👥 Group only command!',
        privateOnly: '💬 Private chat only!',
        botAdminNeeded: '🤖 Make bot admin first!',
        invalidCommand: '❓ Type .menu for commands'
    },

    timezone: 'Asia/Kolkata',

    maxWarnings: 3,

    social: {
        github: '',
        instagram: '',
        youtube: ''
    }
};
