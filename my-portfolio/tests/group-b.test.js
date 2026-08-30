import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const read = (path) => readFileSync(new URL(path, root), 'utf8')

test('homepage leads with the four strongest proof points', () => {
  const home = read('src/components/pages/Home.jsx')

  for (const proofPoint of ['TrustFlow', 'Orange Business', 'Local RAG System', 'ECPC']) {
    assert.match(home, new RegExp(proofPoint))
  }
  assert.match(home, /data-home-proof/)
})

test('projects have explicit flagship, active, and planned hierarchy', () => {
  const projects = read('src/components/pages/Projects.jsx')

  assert.match(projects, /Flagship Work/)
  assert.match(projects, /Active Work/)
  assert.match(projects, /Planned/)
  assert.ok(projects.indexOf('Flagship Work') < projects.indexOf('Active Work'))
  assert.ok(projects.indexOf('Active Work') < projects.indexOf('Planned'))
})

test('cards and project details share the reusable fixed-ratio header', () => {
  const headerPath = new URL('src/components/ui/ProjectCardHeader.jsx', root)
  assert.equal(existsSync(headerPath), true)

  const header = read('src/components/ui/ProjectCardHeader.jsx')
  const card = read('src/components/ui/ProjectCard.jsx')
  const detail = read('src/components/pages/ProjectDetail.jsx')

  assert.match(header, /aspect-\[16\/9\]/)
  assert.match(header, /data-project-header/)
  assert.match(card, /ProjectCardHeader/)
  assert.match(detail, /ProjectCardHeader/)
})

test('route metadata produces route-specific canonical and sharing data', async () => {
  const seoPath = new URL('src/utils/seo.js', root)
  assert.equal(existsSync(seoPath), true)

  const { getRouteMetadata } = await import(seoPath)
  const about = getRouteMetadata('/about')
  const rag = getRouteMetadata('/projects/local-rag-system')

  assert.equal(about.title, 'About | Mostafa Eid')
  assert.equal(about.canonical, 'https://lleoparden.github.io/lleoparden/about')
  assert.match(rag.title, /Local RAG System/)
  assert.equal(rag.canonical, 'https://lleoparden.github.io/lleoparden/projects/local-rag-system')
  assert.ok(about.description.length >= 50)
})

test('static crawler and identity metadata are present', () => {
  const index = read('index.html')
  const publicFiles = ['public/favicon.svg', 'public/robots.txt', 'public/sitemap.xml']

  for (const file of publicFiles) assert.equal(existsSync(new URL(file, root)), true)
  assert.match(index, /rel="canonical"/)
  assert.match(index, /property="og:title"/)
  assert.match(index, /name="twitter:card"/)
  assert.match(index, /application\/ld\+json/)

  const sitemap = read('public/sitemap.xml')
  assert.match(sitemap, /\/lleoparden\/projects\/local-rag-system/)
  assert.match(sitemap, /\/lleoparden\/experience/)
})
