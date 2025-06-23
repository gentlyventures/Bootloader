#!/usr/bin/env bash
set -e

echo "🔧 Checking Node.js and npm versions…"
node -v
npm -v

# 1. Patch out the broken placeholder in portia-adapter
ADAPTER_PKG="packages/portia-adapter/package.json"
if [ -f "$ADAPTER_PKG" ]; then
  echo "🔄 Stripping placeholder from portia-sdk-python in $ADAPTER_PKG"
  node -e "const fs=require('fs');
  const p=JSON.parse(fs.readFileSync('$ADAPTER_PKG'));
  if (p.dependencies && p.dependencies['portia-sdk-python']) {
    delete p.dependencies['portia-sdk-python'];
    fs.writeFileSync('$ADAPTER_PKG', JSON.stringify(p, null, 2));
    console.log('✔️  Removed portia-sdk-python');
  }"
fi

# 2. Detect package manager & choose install command
if command -v yarn >/dev/null; then
  echo "🔧 Detected Yarn"
  INSTALL_CMD="yarn install --immutable || yarn install"
elif command -v npm >/dev/null; then
  echo "🔧 Falling back to npm"
  INSTALL_CMD="npm ci"
else
  echo "❌ Neither yarn nor npm found – aborting."
  exit 1
fi

# 3. Install all workspace dependencies
echo "📦 Installing dependencies with: $INSTALL_CMD"
eval "$INSTALL_CMD"

# 4. Generate tsconfig for core if missing
if [ ! -f packages/core/tsconfig.json ]; then
  echo "⚙️  Generating TS config in packages/core…"
  npx tsc --workspace packages/core --init
fi

# 5. Create ESLint and Prettier configs if missing
if [ ! -f .eslintrc.json ]; then
  echo "⚙️  Creating ESLint config…"
  cat > .eslintrc.json << 'EOL'
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "ecmaVersion": 2020, "sourceType": "module" },
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {}
}
EOL
fi

if [ ! -f .prettierrc ]; then
  echo "⚙️  Creating Prettier config…"
  echo '{}' > .prettierrc
fi

# 6. Run lint & type-check (non-blocking)
echo "🔍 Running ESLint across all JS/TS files…"
set +e
npx eslint "**/*.{js,ts}" --max-warnings=0

echo "🔍 Running TypeScript check for core…"
npx tsc --workspace packages/core --noEmit
set -e

# 7. Inject npm token for publishing
if [ -n "$NPM_TOKEN" ]; then
  echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
  echo "✅ Injected npm auth token"
fi

echo "✅ Setup complete!"
