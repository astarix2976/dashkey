// data/links.js
// ========================================
// DASHKEY LINKS CONFIGURATION
// ========================================

/* 
EXAMPLE FOR ITEMS:
{
    name: "GitHub",
    url: "https://github.com",
    icon: "simpleicons-github",  // simpleicons-name, lucide-name, auto, or direct URL
    iconmode: "mono",            // optional - mono, black, invert, color (default)
    keywords: ["git", "code", "repository"]
}

EXAMPLE FOR CATEGORIES:
{
    name: "Category Name",
    collapsible: true,           // optional - allows collapsing (default: false)
    collapsed: false,            // optional - initial state (default: false)
    items: [ ... ]
}
*/

const DASHKEY_LINKS = {
    categories: [
        // ========================================
        // Artificial Intelligence
        // ========================================
        {
            name: "AI",
            collapsible: true,
            collapsed: false,
            mobileCollapsed: true,
            items: [
                {
                    name: "ChatGPT",
                    url: "https://chatgpt.com/",
                    icon: "auto",
                    keywords: ["openai", "gpt", "chat"]
                },
                {
                    name: "Gemini",
                    url: "https://gemini.google.com/",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["google", "ai", "bard"]
                },
                {
                    name: "Perplexity",
                    url: "https://www.perplexity.ai/",
                    icon: "auto",
                    iconmode: "black",
                    keywords: ["search", "ai", "research"]
                },
                {
                    name: "DeepSeek",
                    url: "https://chat.deepseek.com/",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["deepseek", "chat", "ai"]
                },
                {
                    name: "Grok",
                    url: "https://grok.com/",
                    icon: "auto",
                    iconmode: "black",
                    keywords: ["xai", "elon", "musk", "ai"]
                },
                {
                    name: "DigenAI",
                    url: "https://digen.ai/en",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["ai", "generation", "creative"]
                },
                {
                    name: "Arthub",
                    url: "https://arthub.ai",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["ai", "art", "images"]
                },
                {
                    name: "FlowLab",
                    url: "https://labs.google/fx/tools/flow",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["google", "ai", "flow", "creative"]
                },
                {
                    name: "Vheer",
                    url: "https://vheer.com",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["ai", "design", "creative"]
                },
                {
                    name: "FreeModel AI",
                    url: "https://freemodel.dev/dashboard/usage",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["ai", "models", "developer"]
                }
            ]
        },

        // ========================================
        // Finance
        // ========================================
        {
            name: "Finance",
            collapsible: true,
            collapsed: true,
            mobileCollapsed: false,
            items: [
                {
                    name: "App Sobrou",
                    url: "https://appsobrou.com.br/",
                    icon: "https://appsobrou.com.br/images/favicon.ico",
                    iconmode: "mono",
                    keywords: ["stocks", "finance", "investing"]
                }
            ]
        },

        // ========================================
        // Useful Tools
        // ========================================
        {
            name: "Tools",
            collapsible: true,
            collapsed: true,
            items: [
                {
                    name: "Gmail",
                    url: "https://mail.google.com/",
                    icon: "simpleicons-gmail",
                    iconmode: "mono",
                    keywords: ["email", "google", "mail"]
                },
                {
                    name: "Google Drive",
                    url: "https://drive.google.com/",
                    icon: "simpleicons-googledrive",
                    iconmode: "mono",
                    keywords: ["cloud", "storage", "files"]
                },
                {
                    name: "Google Docs",
                    url: "https://docs.google.com/document/",
                    icon: "simpleicons-googledocs",
                    iconmode: "mono",
                    keywords: ["documents", "writing", "google"]
                },
                {
                    name: "PDF Tools",
                    url: "https://tools.pdf24.org/",
                    icon: "lucide-file-text",
                    keywords: ["pdf", "editor", "convert"]
                },
                {
                    name: "Fast Speed Test",
                    url: "https://fast.com/",
                    icon: "auto",
                    iconmode: "black",
                    keywords: ["internet", "speed", "netflix"]
                },
                {
                    name: "Notion",
                    url: "https://notion.so",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["notes", "workspace", "docs", "productivity"]
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
            items: [
                {
                    name: "Figma",
                    url: "https://figma.com",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["design", "ui", "ux", "prototype"]
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
            items: [
                {
                    name: "Vercel",
                    url: "https://vercel.com",
                    icon: "auto",
                    iconmode: "black",
                    keywords: ["deployment", "hosting", "frontend", "dev"]
                }
            ]
        },

        // ========================================
        // Example Sites
        // ========================================
        {
            name: "Examples",
            collapsible: false,
            items: [
                {
                    name: "GitHub",
                    url: "https://github.com",
                    icon: "simpleicons-github",
                    iconmode: "black",
                    keywords: ["git", "code", "repository"]
                },
                {
                    name: "YouTube",
                    url: "https://youtube.com",
                    icon: "simpleicons-youtube",
                    iconmode: "mono",
                    keywords: ["video", "streaming", "watch"]
                },
                {
                    name: "Reddit",
                    url: "https://reddit.com",
                    icon: "auto",
                    iconmode: "mono",
                    keywords: ["forum", "community", "discussion"]
                },
                {
                    name: "Secret Example",
                    url: "https://secret.example",
                    icon: "lock",
                    secret: true,
                    keywords: ["hidden", "private", "secret"]
                }
            ]
        }
    ]
};

// Make it globally available
window.DASHKEY_LINKS = DASHKEY_LINKS;
