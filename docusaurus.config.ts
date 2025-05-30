import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Cryptomator Documentation',
  tagline: 'Put a Lock on Your Cloud',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.cryptomator.org',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'cryptomator',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/cryptomator/docs/tree/develop/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/hub/setup/requirements',
            to: '/hub/deployment#hardware-requirements',
          },
          {
            from: '/hub/setup/billing',
            to: '/hub/admin#license',
          },
          {
            from: '/hub/setup/keycloak-administration',
            to: '/hub/user-group-management',
          },
          {
            from: '/hub/setup',
            to: '/hub/deployment',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/4.-vault-unlocked',
            to: '/hub/access-vault#vault-unlocked',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/3.-add-device',
            to: '/hub/access-vault#register-device',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/2.-authenticate',
            to: '/hub/access-vault#authenticate',
          },
          {
            from: '/hub/access-vault/unlocking-a-vault/1.-click-unlock',
            to: '/hub/access-vault#click-unlock',
          },
          {
            from: '/hub/license',
            to: '/hub/admin#license',
          },
          {
            from: '/desktop/vault-mounting',
            to: '/desktop/volume-type',
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    navbar: {
      title: 'CRYPTOMATOR',
      logo: {
        alt: 'Cryptomator Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'desktopSidebar',
          position: 'left',
          label: 'Desktop',
        },
        {
          type: 'docSidebar',
          sidebarId: 'androidSidebar',
          position: 'left',
          label: 'Android',
        },
        {
          type: 'docSidebar',
          sidebarId: 'iosSidebar',
          position: 'left',
          label: 'iOS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'hubSidebar',
          position: 'left',
          label: 'Hub',
        },
        {
          type: 'docSidebar',
          sidebarId: 'securitySidebar',
          position: 'left',
          label: 'Security',
        },
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help',
        },
        {
          type: 'docSidebar',
          sidebarId: 'miscSidebar',
          position: 'left',
          label: 'Misc',
        },
        {
          href: 'https://github.com/cryptomator',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Cryptomator',
          items: [
            {
              label: 'Website',
              href: 'https://cryptomator.org/',
            },
            {
              label: 'Community',
              href: 'https://community.cryptomator.org/',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cryptomator',
            },
            {
              label: 'Donate',
              href: 'https://cryptomator.org/donate/',
            },
            {
              label: 'Translate',
              href: 'https://translate.cryptomator.org/',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              label: 'Blog',
              href: 'https://cryptomator.org/blog/',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.online/@cryptomator',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/skymatic',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Impressum',
              href: 'https://cryptomator.org/impressum/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://cryptomator.org/privacy/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cryptomator.org. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
