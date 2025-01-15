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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
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
            items: [
              { to: '/docs/board', label: 'Styrelsen'},
              { to: '/trygghet', label: 'Trygghetsfunktioner' },
              { to: '/docs/intro', label: 'Översikt'},
              
            ],
          },

          { to: '/blog', label: 'Aktuellt', position: 'left' },
          { to: '/section', label: 'Om Sektionen', position: 'left' },
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
          
          { to: '/business', label: 'För Företag', position: 'left' },
          {
            type: 'dropdown',
            label: 'Länkar',
            position: 'right',
            items: [
              {
                href: 'https://drive.google.com/drive/folders/1v3UvdSYbOsk1f2zUqJ3VmoEz9vevuJKe?usp=drive_link',
                label: 'Dokument',
              },
              {
                href: 'https://www.google.com/url?q=https://docs.google.com/forms/d/e/1FAIpQLSfS3XMwR6yHKLAoA1AJXhIQmEgEZ0cQF0e13fJZgDFdOPHmyQ/viewform&sa=D&source=docs&ust=1730890495001202&usg=AOvVaw1Jpa0NcJc6CRtQEDwQfZDQ',
                label: 'Äskningsformulär'
              },
              {
                href: 'https://www.facebook.com/IndustriellEkonomiKTH',
                label: 'Facebook'
              },
              {
                href: 'https://sangbok.iare.se/',
                label: 'Sångbok'
              },

            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
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
                html: `<a href="https://www.facebook.com/IndustriellEkonomiKTH"><img src="/img/facebook.svg" style="margin-right: 5px" width ="31" alt=""/></a>
                <a href="https://www.instagram.com/isektionen_kth/"><img src="/img/instagram.svg" style="margin-right: 4px" width ="31" alt=""/></a>
                <a href="https://calendar.google.com/calendar/u/0/embed?src=iare.nu_pre97odp8btuq3u2a9i6u3fnbc@group.calendar.google.com&ctz=Europe/Stockholm"><img src="/img/googlecal.svg" width ="31" alt=""/></a>`,
              },

              ],
            
          },

          {
            title: 'Github',
            items: [
              {
                html: `<a href="https://github.com/isektionen/docusaurus">
                <img src="/img/github.svg" id="github_logo" alt=""/>
                </a>`,
              }
            ],
          },
          {
            title: 'KTH',
            items: [
              {
                html: `<a href="https://www.kth.se/"><img src="/img/kth.svg" id="kth_logo" width ="28" alt=""></a>`,
              }
            ],
          },
          
        ],
        copyright: `Copyright © 2023 KA ansvarig utgivare,  av I-T gruppen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }

    ),
};

module.exports = config;
