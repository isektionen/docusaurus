// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
//Fil för att ändra header och footer
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      "docusaurus-plugin-dotenv",
      { 
        systemvars: true,
      },
    ],
  ],
  title: 'Sektionen för Industriell Ekonomi',
  tagline: 'Kungliga Tekniska Högskolan',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/indeklogowhite.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'sv',
    locales: ['en', 'sv'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/koderik/docusaurus-iare/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/koderik/docusaurus-iare/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //Headerns element
      navbar: {
        title: 'I-sektionen KTH',
        logo: {
          alt: 'My Site Logo',
          src: 'img/indeklogo.svg',
          srcDark: 'img/indeklogowhite.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'dropdown',
            label: 'Sektionen',
            position: 'left',
            to: '/docs/intro',
            items: [
              { to: '/docs/board', label: 'Styrelsen'},
              { to: '/trygghet', label: 'Trygghetsfunktioner' },
              
            ],
          },

          { to: '/blog', label: 'Nyheter', position: 'left' },
          { to: '/business', label: 'Företag', position: 'left' },
          { to: '/section', label: 'Om sektionen', position: 'left' },
          
          
                  
          {
            type: 'dropdown',
            label: 'Dokument',
            position: 'right',
            items: [
              {
                href: 'https://drive.google.com/drive/u/0/folders/1FpFpRoUvu_zvAaiXydCgSrEMjJWnk',
                label: 'Dokument',
              },
              {href: 'https://drive.google.com/file/d/1w-9MTxMKx7OploFJI-0G9Wr_A832I0WW/view?usp=sharing', 
              label: 'Äskningsformulär'},
            ],
          },
          {
            type: 'dropdown',
            label: 'Plugga på I',
            position: 'left',
            items: [
              { to: '/section', label: 'Vad är en sektion?'},
              { to: '/for-sokande', label: 'För sökande'},
              { to: 'for-antagna', label: 'För antagna'},
            ],

          },
          
          { to: '/business', label: 'För företag', position: 'left' },
          {
            href: 'https://www.facebook.com/IndustriellEkonomiKTH',
            label: 'Facebook',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      //footerns element
      footer: {
        style: 'light',
        links: [
          {
            title: 'Sociala medier',
            items: [
              {
                html: `<a href="https://www.facebook.com/IndustriellEkonomiKTH">
                Sektionens Facebooksida
                </a>`,
              },

              {
                html: `<a href="https://www.instagram.com/isektionen_kth/">
                Sektionens Instagramsida
                </a>`,
              }  
              ],
            
          },
         
          {
            title: 'Github',
            items: [
              {
                html: `<a href="https://github.com/isektionen/docusaurus">
                Github
                </a>` 
              }
            ],
          },
          {
            title: 'KTH',
            items: [
              {
                html: `<a href="https://www.kth.se/">KTH</a>`,
              }
            ],
          },
          
        ],
        copyright: `Copyright © 2023 KA ansvarig utgivare, utvecklad av I-T gruppen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
