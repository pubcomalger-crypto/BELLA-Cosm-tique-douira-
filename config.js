// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "BELLA Cosmétique douira",
    bio: "مرحبا بكم عند",
    profileImage: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fee03f9d9804b4814d09a8f2404319a7~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=426f3b24&x-expires=1767268800&x-signature=FTTDH%2BZmv%2Bz4EGqp9SyXNKkJ9S8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/profile.php?id=100063736591462#",
        instagram: "https://www.instagram.com/bella_cosmetique_douera/",
        tiktok: "https://www.tiktok.com/@www.tiktok.combellacosm7",
        whatsapp: "+213665360063",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://maps.app.goo.gl/f5GCpyApjdFpDx39A",
        phone: "+213665360063"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: false,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: false,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}

