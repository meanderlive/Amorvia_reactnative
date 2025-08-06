const fs = require('fs');
const path = require('path');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif'];

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    // Skip node_modules and .git
    if (fullPath.includes('node_modules') || fullPath.includes('.git')) return;

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else if (
      fullPath.endsWith('.ts') ||
      fullPath.endsWith('.tsx') ||
      fullPath.endsWith('.js') ||
      fullPath.endsWith('.jsx')
    ) {
      callback(fullPath);
    }
  });
}

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  const regex = /import\s+(\w+)\s+from\s+['"](.+\.(png|jpe?g|gif))['"];?/g;

  const newContent = content.replace(regex, (_, varName, imgPath) => {
    changed = true;
    return `const ${varName} = require('${imgPath}');`;
  });

  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Fixed: ${filePath}`);
  }
}

walk(process.cwd(), fixImports);
