// data/links.js
// ========================================
// DASHKEY LINKS CONFIGURATION - ELITE
// ========================================

const DASHKEY_LINKS = {
    categories: [
        // ========================================
        // AI
        // ========================================
        {
            name: "AI",
            collapsible: true,
            collapsed: false,
            mobileCollapsed: true,
            maxVisible: 4,
            items: [
                {
                    name: "ChatGPT",
                    url: "https://chatgpt.com/",
                    icon: "auto",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["openai", "gpt", "chat", "assistant"]
                },
                {
                    name: "Claude",
                    url: "https://claude.ai/",
                    icon: "auto",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["anthropic", "ai", "assistant", "writing"]
                },
                {
                    name: "Perplexity",
                    url: "https://www.perplexity.ai/",
                    icon: "auto",
                    iconmode: "black",
                    pinned: true,
                    keywords: ["search", "research", "answer", "ai"]
                },
                {
                    name: "Gemini",
                    url: "https://gemini.google.com/",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["google", "ai", "chat", "assistant"]
                }
            ]
        },

        // ========================================
        // Social
        // ========================================
        {
            name: "Social",
            collapsible: true,
            collapsed: false,
            mobileCollapsed: true,
            maxVisible: 5,
            items: [
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/",
                    icon: "simpleicons-instagram",
                    iconmode: "color",
                    pinned: true,
                    keywords: ["social", "photos", "reels", "meta"]
                },
                {
                    name: "X",
                    url: "https://x.com/",
                    icon: "simpleicons-x",
                    iconmode: "black",
                    pinned: true,
                    keywords: ["twitter", "x", "social", "news"]
                },
                {
                    name: "YouTube",
                    url: "https://www.youtube.com/",
                    icon: "simpleicons-youtube",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["video", "learning", "streaming"]
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/",
                    icon: "simpleicons-linkedin",
                    iconmode: "color",
                    keywords: ["career", "jobs", "network", "professional"]
                },
                {
                    name: "Telegram",
                    url: "https://web.telegram.org/",
                    icon: "simpleicons-telegram",
                    iconmode: "color",
                    keywords: ["chat", "messaging", "channels"]
                }
            ]
        },

        // ========================================
        // Development
        // ========================================
        {
            name: "Development",
            collapsible: true,
            collapsed: true,
            mobileCollapsed: true,
            maxVisible: 4,
            items: [
                {
                    name: "GitHub",
                    url: "https://github.com/",
                    icon: "simpleicons-github",
                    iconmode: "black",
                    pinned: true,
                    keywords: ["git", "code", "repository", "open-source"]
                },
                {
                    name: "Vercel",
                    url: "https://vercel.com/",
                    icon: "auto",
                    iconmode: "black",
                    pinned: true,
                    keywords: ["deployment", "hosting", "frontend", "nextjs"]
                },
                {
                    name: "Stack Overflow",
                    url: "https://stackoverflow.com/",
                    icon: "simpleicons-stackoverflow",
                    iconmode: "color",
                    pinned: true,
                    keywords: ["questions", "debugging", "coding", "developer"]
                },
                {
                    name: "Netlify",
                    url: "https://www.netlify.com/",
                    icon: "simpleicons-netlify",
                    iconmode: "color",
                    keywords: ["hosting", "deployment", "static", "frontend"]
                }
            ]
        },

        // ========================================
        // Design
        // ========================================
        {
            name: "Design",
            collapsible: true,
            collapsed: true,
            mobileCollapsed: true,
            maxVisible: 3,
            items: [
                {
                    name: "Figma",
                    url: "https://figma.com/",
                    icon: "auto",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["design", "ui", "ux", "prototype"]
                },
                {
                    name: "Canva",
                    url: "https://www.canva.com/",
                    icon: "simpleicons-canva",
                    iconmode: "color",
                    keywords: ["design", "graphics", "templates", "social"]
                }
            ]
        },

        // ========================================
        // Productivity
        // ========================================
        {
            name: "Productivity",
            collapsible: true,
            collapsed: true,
            mobileCollapsed: true,
            maxVisible: 4,
            items: [
                {
                    name: "Notion",
                    url: "https://notion.so/",
                    icon: "auto",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["notes", "workspace", "docs", "productivity"]
                },
                {
                    name: "Gmail",
                    url: "https://mail.google.com/",
                    icon: "simpleicons-gmail",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["email", "google", "mail"]
                },
                {
                    name: "Google Drive",
                    url: "https://drive.google.com/",
                    icon: "simpleicons-googledrive",
                    iconmode: "mono",
                    pinned: true,
                    keywords: ["cloud", "storage", "files"]
                },
                {
                    name: "Google Calendar",
                    url: "https://calendar.google.com/",
                    icon: "simpleicons-googlecalendar",
                    iconmode: "mono",
                    keywords: ["calendar", "schedule", "events", "planning"]
                },
                {
                    name: "Fast Speed Test",
                    url: "https://fast.com/",
                    icon: "auto",
                    iconmode: "black",
                    keywords: ["internet", "speed", "network", "test"]
                }
            ]
        }
    ]
};

window.DASHKEY_LINKS = DASHKEY_LINKS;
