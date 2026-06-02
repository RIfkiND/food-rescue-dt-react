const fs = require('fs');
const search = 'className="flex-1 lg:ml-64 flex flex-col min-h-screen"';
const replace = 'className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0"';
const files = [
  'src/pages/dashboard/profile/settings.tsx',
  'src/pages/dashboard/profile/orders.tsx',
  'src/pages/dashboard/profile/index.tsx',
  'src/pages/dashboard/profile/addresses.tsx',
  'src/pages/dashboard/mitra/inventory.tsx',
  'src/pages/dashboard/mitra/index.tsx',
  'src/pages/dashboard/mitra/history.tsx',
  'src/pages/dashboard/mitra/analytics.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(search)) {
    content = content.replace(search, replace);
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
