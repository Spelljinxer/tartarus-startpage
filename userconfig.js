let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Perth, Australia',
    scale: "C",
  },
  clock: {
    // format: "h:i p",
    format: 'do B Y - h:i',
    iconColor: "#ffa1ba",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "うち",
      background_url: "src/img/banners/eula.gif",
      categories: [
        {
          name: "Frequently Used",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "#ea6962",
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "AniList",
              url: "https://anilist.co/home",
              icon: "list-details",
              icon_color: "#08acfa",
            },
            {
              name: "Sauce Finder",
              url: "https://saucenao.com/",
              icon: "cherry",
              icon_color: "#ffa1ba",
            },
          ]
        },
        {
        name: "Social Media",
        links: [
          // {
          //   name: "whatsapp",
          //   url: "https://web.whatsapp.com/",
          //   icon: "brand-whatsapp",
          //   icon_color: "#a9b665",
          // },
          {
            name: "anix",
            url: "https://anix.to/",
            icon: "device-tv",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "AMQ",
            url: "https://animemusicquiz.com/",
            icon: "music",
            icon_color: "#f27e80",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          // {
          //   name: "tetris",
          //   url: "https://tetris.com/",
          //   icon: "brand-apple-arcade",
          //   icon_color: "#ea6962",
          // },
        ],
      }, 
        // {
        //   name: "Video",
        //   links: [
        //     {
        //       name: "disney+",
        //       url: "https://www.disneyplus.com/home",
        //       icon: "brand-disney",
        //       icon_color: "#7daea3",
        //     },
        //     {
        //       name: "primevideo",
        //       url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
        //       icon: "brand-amazon",
        //       icon_color: "#7daea3",
        //     },
        //   ],
        // }
    ],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pixiv",
              url: "https://www.pixiv.net/en/",
              icon: "brush",
              icon_color: "#a1b1ff",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "konachan",
              url: "https://konachan.com/",
              icon : "woman",
              icon_color: "#d3869b",
            }
          ],
        },
        {
          name: "resources",
          links: [
            // {
            //   name: "figma",
            //   url: "https://www.figma.com",
            //   icon: "brand-figma",
            //   icon_color: "#d3869b",
            // },
            // {
            //   name: "uxpro",
            //   url: "https://uxpro.cc/",
            //   icon: "components",
            //   icon_color: "#a9b665",
            // },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "colorFromIMG",
              url: "https://imagecolorpicker.com/",
              icon: "palette",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "reddit",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "Genshin",
          links: [
            {
              name: "r/genshinleaks",
              url: "https://www.reddit.com/r/Genshin_Impact_Leaks/",
              icon: "droplet",
              icon_color: "#7daea3",
            },
            {
              name: "r/genshin",
              url: "https://www.reddit.com/r/Genshin_Impact/",
              icon: "flame",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "Tech",
          links: [
            {
              name: "r/unixporn",
              url: "https://www.reddit.com/r/unixporn/",
              icon: "brand-debian",
              icon_color: "#ea6962",
            },
            {
              name: "r/MechKB",
              url: "https://www.reddit.com/r/MechanicalKeyboards/",
              icon: "keyboard",
              icon_color: "#7daea3",
            },
            {
              name: "r/nvidia",
              url: "https://www.reddit.com/r/nvidia/",
              icon: "cpu",
              icon_color: "#89b482", 
            },
          ],
        },
        {
          name: "Anime",
          links: [
            {
              name: "r/Animemes",
              url: "https://www.reddit.com/r/Animemes/",
              icon: "mood-smile-beam",
              icon_color: "#ffa1ba",
            },
            {
              name: "r/Bocchi",
              url: "https://www.reddit.com/r/BocchiTheRock/",
              icon: "music",
              icon_color: "#e78a4e",
            },
            {
              name: "r/wholesomeanimemes",
              url: "https://www.reddit.com/r/wholesomeanimemes",
              icon: "heart",
              icon_color: "#ea6962",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/frieren.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#a1b1ff",
            },
            {
              name: "portfolio",
              url: "https://spelljinxer.github.io/",
              icon: "app-window",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "- 'You will never betray what you have worked so painstakingly to build.'",
          links: [

          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
