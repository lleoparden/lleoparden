import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)))
const workflow = readFileSync(new URL('../../.github/workflows/deploy.yml', import.meta.url), 'utf8')
const viteConfig = readFileSync(new URL('../vite.config.ts', import.meta.url), 'utf8')

test('the build uses a cross-platform file copy', () => {
  assert.doesNotMatch(packageJson.scripts.build, /(?:^|\s)cp\s/)
  assert.match(packageJson.scripts.build, /node/)
})

test('CI validates before granting deploy write access', () => {
  assert.match(workflow, /permissions:\s+contents: read/)
  assert.match(workflow, /deploy:[\s\S]*needs: validate/)
  assert.match(workflow, /validate:[\s\S]*npm run lint[\s\S]*npm test[\s\S]*npm run build/)
  assert.match(workflow, /deploy:[\s\S]*permissions:\s+contents: write/)
})

test('removed integrations are absent from configuration', () => {
  for (const dependency of [
    'date-fns',
    '@mdx-js/rollup',
    '@tailwindcss/postcss',
    '@types/react-router-dom',
  ]) {
    assert.equal(packageJson.dependencies?.[dependency], undefined)
    assert.equal(packageJson.devDependencies?.[dependency], undefined)
  }

  assert.doesNotMatch(viteConfig, /mdx/i)
})
