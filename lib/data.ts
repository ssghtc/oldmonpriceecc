export interface Post {
    id: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    image: string;
    features: string[];
    officialLink: string;
    relatedSlugs: string[];
}

export interface Category {
    id: string;
    title: string;
    href: string;
    posts: Post[];
}

export const categories: Category[] = [
    {
        id: 'apps',
        title: 'Top Apps',
        href: '/apps',
        posts: [
            {
                id: 1,
                slug: 'instagram',
                title: 'Instagram',
                description: 'The best social media app for photo and video sharing.',
                content: 'Instagram is a free, online photo-sharing application and social network platform that was acquired by Facebook in 2012. Instagram allows users to edit and upload photos and short videos through a mobile app. Users can add a caption to each of their posts and use hashtags and location-based geotags to index these posts and make them searchable by other users within the app.',
                image: 'https://images.unsplash.com/photo-1611162727355-93f4fe323485?w=800&q=80',
                features: ['Photo Filters', 'Stories', 'Reels', 'Direct Messaging', 'IGTV'],
                officialLink: 'https://www.instagram.com',
                relatedSlugs: ['whatsapp', 'tiktok']
            },
            {
                id: 2,
                slug: 'whatsapp',
                title: 'WhatsApp',
                description: 'Stay connected with friends and family worldwide.',
                content: 'WhatsApp Messenger is a freeware, cross-platform, centralized instant messaging and voice-over-IP service owned by Meta Platforms. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other content.',
                image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
                features: ['End-to-End Encryption', 'Voice & Video Calls', 'Status Updates', 'Document Sharing', 'WhatsApp Web'],
                officialLink: 'https://www.whatsapp.com',
                relatedSlugs: ['instagram', 'netflix']
            },
            {
                id: 3,
                slug: 'tiktok',
                title: 'TikTok',
                description: 'Short-form mobile videos for endless entertainment.',
                content: 'TikTok is a social media platform for creating, sharing and discovering short videos. The app is used by young people as an outlet to express themselves through singing, dancing, comedy, and lip-syncing, and allows users to create videos and share them across a community.',
                image: 'https://images.unsplash.com/photo-1611267258573-110d9ae44093?w=800&q=80',
                features: ['Video Editing Tools', 'Music Library', 'Duets', 'Live Streaming', 'Personalized Feed'],
                officialLink: 'https://www.tiktok.com',
                relatedSlugs: ['instagram', 'spotify']
            },
            {
                id: 4,
                slug: 'spotify',
                title: 'Spotify',
                description: 'Listen to millions of songs and podcasts on the go.',
                content: 'Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. Basic functions such as playing music are totally free, but you can also choose to upgrade to Spotify Premium.',
                image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
                features: ['Personalized Playlists', 'Podcast Integration', 'Device Sync', 'High Quality Audio', 'Offline Listening'],
                officialLink: 'https://www.spotify.com',
                relatedSlugs: ['netflix', 'tiktok']
            },
            {
                id: 5,
                slug: 'netflix',
                title: 'Netflix',
                description: 'Stream your favorite movies and TV shows anywhere.',
                content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.',
                image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
                features: ['Ad-Free Streaming', 'Offline Downloads', 'Multiple Profiles', '4K Ultra HD', 'Personalized Recommendations'],
                officialLink: 'https://www.netflix.com',
                relatedSlugs: ['spotify', 'whatsapp']
            },
        ]
    },
    {
        id: 'games',
        title: 'Top Games',
        href: '/games',
        posts: [
            {
                id: 1,
                slug: 'bgmi',
                title: 'BGMI',
                description: 'Battlegrounds Mobile India - the ultimate battle royale.',
                content: 'BATTLEGROUNDS MOBILE INDIA is a new Battle Royale game where multiple players employ strategies to fight and be the last man standing on the battlegrounds. A free-to-play, multiplayer experience, in BATTLEGROUNDS MOBILE INDIA, players can battle it out in diverse game modes which can be squad based or solo.',
                image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
                features: ['Realistic Graphics', 'Multiple Maps', 'Team Squads', 'Vehicle Combat', 'Ranked Tiers'],
                officialLink: 'https://www.battlegroundsmobileindia.com',
                relatedSlugs: ['free-fire', 'roblox']
            },
            {
                id: 2,
                slug: 'free-fire',
                title: 'Free Fire',
                description: 'Fast-paced survival shooter for mobile devices.',
                content: 'Free Fire is a mobile-only battle royale game that has become one of the world\'s most popular mobile games. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute and aim to stay in the safe zone for as long as possible.',
                image: 'https://images.unsplash.com/photo-1552824788-fb1115e4787a?w=800&q=80',
                features: ['10-Min Fast Gameplay', 'Unique Characters', 'Clash Squad Mode', 'Customizable Controls', 'Low Spec Compatibility'],
                officialLink: 'https://ff.garena.com',
                relatedSlugs: ['bgmi', 'minecraft']
            },
            {
                id: 3,
                slug: 'minecraft',
                title: 'Minecraft',
                description: 'Build, explore and survive in a blocky world.',
                content: 'Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Minecraft is a 3D sandbox game that has no specific goals to accomplish, allowing players a large amount of freedom in choosing how to play the game.',
                image: 'https://images.unsplash.com/photo-1611162727355-93f4fe323485?w=800&q=80',
                features: ['Creative Mode', 'Survival Challenges', 'Multiplayer Servers', 'Crafting System', 'Infinite Worlds'],
                officialLink: 'https://www.minecraft.net',
                relatedSlugs: ['roblox', 'among-us']
            },
            {
                id: 4,
                slug: 'roblox',
                title: 'Roblox',
                description: 'Create and play games with millions of others.',
                content: 'Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users. Created by David Baszucki and Erik Cassel in 2004 and released in 2006, the platform hosts user-created games of multiple genres.',
                image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4525?w=800&q=80',
                features: ['User-Generated Content', 'Roblox Studio', 'Virtual Economy', 'Cross-Platform Play', 'Avatars Customization'],
                officialLink: 'https://www.roblox.com',
                relatedSlugs: ['minecraft', 'bgmi']
            },
            {
                id: 5,
                slug: 'among-us',
                title: 'Among Us',
                description: 'A game of teamwork and betrayal in space.',
                content: 'Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game takes place in space-themed settings where players each take on one of two roles, most being Crewmates, and a predetermined number being Impostors.',
                image: 'https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?w=800&q=80',
                features: ['Social Deduction', 'Online Multiplayer', 'Custom Rules', 'Diverse Maps', 'Cross-Platform Support'],
                officialLink: 'https://www.innersloth.com',
                relatedSlugs: ['minecraft', 'free-fire']
            },
        ]
    },
    {
        id: 'software',
        title: 'Top Software',
        href: '/software',
        posts: [
            {
                id: 1,
                slug: 'adobe-photoshop',
                title: 'Adobe Photoshop',
                description: 'The industry standard for photo editing and design.',
                content: 'Adobe Photoshop is a critical tool for designers, web developers, graphic artists, photographers, and creative professionals. It is widely used for image editing, retouching, creating image compositions, website mockups, and adding affects. Digital or scanned images can be edited for use online or in-print.',
                image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
                features: ['Layer-Based Editing', 'Advanced Selection Tools', 'Raw Image Support', 'Vector Graphics', 'Extensive Plugin Library'],
                officialLink: 'https://www.adobe.com/photoshop',
                relatedSlugs: ['microsoft-office', 'google-chrome']
            },
            {
                id: 2,
                slug: 'microsoft-office',
                title: 'Microsoft Office',
                description: 'Essential productivity tools for work and study.',
                content: 'Microsoft Office is a suite of applications designed to help with productivity and completing common tasks on a computer. You can create and edit documents containing text and images, work with data in spreadsheets and databases, and create presentations and posters.',
                image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&q=80',
                features: ['Word Processing', 'Spreadsheets (Excel)', 'Presentations (PPT)', 'Cloud Sync', 'Collaboration Tools'],
                officialLink: 'https://www.office.com',
                relatedSlugs: ['adobe-photoshop', 'winrar']
            },
            {
                id: 3,
                slug: 'vlc-media-player',
                title: 'VLC Media Player',
                description: 'The most versatile media player for every format.',
                content: 'VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. It is a highly portable multimedia player for various audio and video formats.',
                image: 'https://images.unsplash.com/photo-1611162727355-93f4fe323485?w=800&q=80',
                features: ['Wide Format Support', 'Open Source', 'Cross-Platform', 'No Ads/Spying', 'Subtitle Support'],
                officialLink: 'https://www.videolan.org',
                relatedSlugs: ['winrar', 'google-chrome']
            },
            {
                id: 4,
                slug: 'winrar',
                title: 'WinRAR',
                description: 'A powerful tool to compress and extract files.',
                content: 'WinRAR is a trialware file archiver utility for Windows, developed by Eugene Roshal of win.rar GmbH. It can create and view archives in RAR or ZIP file formats, and unpack numerous archive file formats. To enable the user to test the integrity of archives, WinRAR embeds CRC32 or BLAKE2 checksums for each file in each archive.',
                image: 'https://images.unsplash.com/photo-1611162727355-93f4fe323485?w=800&q=80',
                features: ['Compression Algorithm', 'Encryption (AES)', 'Splitting Archives', 'Self-Extracting Files', 'Virus Scanning'],
                officialLink: 'https://www.win-rar.com',
                relatedSlugs: ['microsoft-office', 'vlc-media-player']
            },
            {
                id: 5,
                slug: 'google-chrome',
                title: 'Google Chrome',
                description: 'Fast, secure, and free web browser for all devices.',
                content: 'Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, built with free software components from Apple WebKit and Mozilla Firefox. It was later ported to Linux, macOS, iOS, and Android, where it is the default browser.',
                image: 'https://images.unsplash.com/photo-1611162727355-93f4fe323485?w=800&q=80',
                features: ['Safe Browsing', 'Extension Support', 'Sync Across Devices', 'Developer Tools', 'Incognito Mode'],
                officialLink: 'https://www.google.com/chrome',
                relatedSlugs: ['adobe-photoshop', 'vlc-media-player']
            },
        ]
    },
    {
        id: 'vpn',
        title: 'Best VPN Software',
        href: '/vpn',
        posts: [
            {
                id: 1,
                slug: 'shield-vpn',
                title: 'ShieldVPN',
                description: 'Secure your connection with military-grade encryption.',
                content: 'ShieldVPN provides a secure and encrypted tunnel for your online traffic. It protects your data from hackers and surveillance, ensuring that your online activities remain private and anonymous. With servers in over 60 countries, you can bypass geo-restrictions and access content from anywhere.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
                features: ['AES-256 Encryption', 'No-Logs Policy', 'Global Server Network', 'Kill Switch', 'Multi-Hop Support'],
                officialLink: 'https://www.shieldvpn.com',
                relatedSlugs: ['swift-proxy', 'privacy-guard']
            },
            {
                id: 2,
                slug: 'swift-proxy',
                title: 'SwiftProxy',
                description: 'Experience blazing fast internet speeds across the globe.',
                content: 'SwiftProxy is optimized for speed and reliability. It uses advanced protocols to ensure minimal latency, making it perfect for streaming 4K video and online gaming. Our global network of high-speed servers allows you to connect instantly to any location without compromising your performance.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
                features: ['Ultra-Fast Protocol', 'Streaming Optimized', 'Low Latency Gaming', '24/7 Support', 'Static IP Options'],
                officialLink: 'https://www.swiftproxy.net',
                relatedSlugs: ['shield-vpn', 'nitro-vpn']
            },
            {
                id: 3,
                slug: 'privacy-guard',
                title: 'PrivacyGuard',
                description: 'The ultimate tool for anonymous browsing and data protection.',
                content: 'PrivacyGuard focuses on your digital footprint. It blocks trackers, malicious websites, and intrusive ads, providing a cleaner and safer browsing experience. With a strict no-logs policy, you can be sure that your personal information is never stored or shared with third parties.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
                features: ['Ad Blocker Built-in', 'Tracker Prevention', 'Secure DNS', 'Browser Extensions', 'Double VPN'],
                officialLink: 'https://www.privacyguard.io',
                relatedSlugs: ['shield-vpn', 'zen-vpn']
            },
            {
                id: 4,
                slug: 'nitro-vpn',
                title: 'NitroVPN',
                description: 'High-performance servers for gaming and streaming.',
                content: 'NitroVPN is designed for power users who demand the best performance. Whether you are professional gamer or a movie enthusiast, NitroVPN provides the bandwidth you need. Its specialized servers are tuned for low ping and high throughput, giving you the edge in competitive environments.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
                features: ['Unlimited Bandwidth', 'Dedicated Servers', 'Port Forwarding', 'Gaming Protocols', 'Zero Buffering'],
                officialLink: 'https://www.nitrovpn.com',
                relatedSlugs: ['swift-proxy', 'zen-vpn']
            },
            {
                id: 5,
                slug: 'zen-vpn',
                title: 'ZenVPN',
                description: 'Simple, effective, and secure virtual private network.',
                content: 'ZenVPN offers a minimalist approach to online security. With a one-click connection, you can protect your device in seconds. It is the perfect choice for users who want hassle-free protection without complex settings. Enjoy a peaceful and secure internet with ZenVPN.',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
                features: ['One-Click Connect', 'Minimalist UI', 'Auto-Reconnect', 'Wi-Fi Protection', 'Lightweight App'],
                officialLink: 'https://www.zenvpn.org',
                relatedSlugs: ['privacy-guard', 'nitro-vpn']
            },
        ]
    }
];
