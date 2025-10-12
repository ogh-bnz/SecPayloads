const wellKnownPaths = [
  // Standard .well-known files
  '/.well-known/security.txt',
  '/.well-known/assetlinks.json',
  '/.well-known/apple-app-site-association',
  '/.well-known/openid-configuration',
  '/.well-known/oauth-authorization-server',
  '/.well-known/jwks.json',
  '/.well-known/change-password',
  '/.well-known/dnt-policy.txt',
  '/.well-known/privacy-policy.txt',
  '/.well-known/terms-of-service.txt',
  '/.well-known/gpc.json',
  '/.well-known/webfinger',
  '/.well-known/ai-plugin.json',
  '/.well-known/csaf/provider-metadata.json',
  '/.well-known/nodeinfo',
  '/.well-known/trust.txt',
  '/.well-known/recovery',
  '/.well-known/host-meta',
  '/.well-known/apple-developer-merchantid-domain-association',
  '/.well-known/microsoft-identity-association.json',
  '/.well-known/pay',
  '/.well-known/acme-challenge',
  '/.well-known/smart-app-banner',
  // Common metadata & index files
  '/robots.txt',
  '/humans.txt',
  '/sitemap.xml',
  '/manifest.json',
  '/ads.txt',
  '/app-ads.txt',
  '/crossdomain.xml',
  '/security.txt',
  '/server-status',
  '/.git/config',
  '/.svn/entries',

  // Cloud / app config
  '/service-worker.js',
  '/browserconfig.xml',
  '/client-access-policy.xml',
  '/cloudfoundryapplication.json',
  '/.env',
  '/env',
  '/config.json',
  '/api/config',
  '/api/info',
  '/version.json',
  // Vulnerability & bug bounty hints
  '/bugbounty',
  '/.well-known/bugbounty',
  '/security',
  '/.well-known/humans.txt',
  // Miscellaneous
  '/favicon.ico',
  '/readme.md',
  '/license',
  '/package.json',
  '/yarn.lock',
  '/composer.lock',
  '/.dockerignore',
  '/.npmrc',
  '/.htaccess',
  '/.DS_Store'
];

(async () => {
  console.log('%c[+] Starting Well-Known Discovery Scan...', 'color:#00ffff;font-weight:bold;');
  
  const results = await Promise.allSettled(
    wellKnownPaths.map(async (path) => {
      const res = await fetch(path);
      if (res.ok) {
        console.log(`%cFOUND ➜ ${path} [${res.status}]`, 'color: #00ff00');
      } else {
        console.warn(`EXISTS (non-200) ➜ ${path} [${res.status}]`);
      }
    })
  );

  console.log('%c[✓] Scan complete — keep learning, keep securing ⚡', 'color:#00ffff;font-weight:bold;');
})();
