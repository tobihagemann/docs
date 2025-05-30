import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  desktopSidebar: [
    'desktop/setup',
    'desktop/getting-started',
    'desktop/adding-vaults',
    'desktop/accessing-vaults',
    'desktop/vault-management',
    'desktop/password-and-recovery-key',
    'desktop/volume-type',
    'desktop/error-handling',
    'desktop/sync-conflicts',
    'desktop/advanced-settings',
    'desktop/network',
  ],

  androidSidebar: [
    'android/setup',
    'android/vault-management',
    'android/cloud-management',
    'android/access-vault',
    'android/settings',
  ],

  iosSidebar: [
    'ios/setup',
    'ios/vault-management',
    'ios/cloud-management',
    'ios/access-vault',
    'ios/settings',
    'ios/shortcuts-guide',
  ],

  hubSidebar: [
    'hub/introduction',
    'hub/deployment',
    'hub/vault-management',
    'hub/access-vault',
    'hub/admin',
    'hub/user-group-management',
    'hub/vault-recovery',
    'hub/your-account',
  ],

  securitySidebar: [
    'security/security-target',
    'security/architecture',
    'security/vault',
    'security/best-practices',
    'security/hub',
  ],

  helpSidebar: [
    'help/manual-migration',
  ],

  miscSidebar: [
    'misc/contribute',
    'misc/supported-cloud-services',
    'misc/vault-format-history',
  ],
};

export default sidebars;
