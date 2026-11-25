import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';
import { BRAND } from '../src/data/brand';
import { BENTO_CATEGORIES } from '../src/data/catalog';
import { MENU_BLOCKS } from '../src/data/menuCatalog';
import { LINKBIO_CARDS, LINKBIO_SHOWCASE } from '../src/data/linkbioData';
import { FAQ_ITEMS, TESTIMONIALS } from '../src/data/socialProof';

const FORBIDDEN_INFRA_WORDS =
  /\b(?:cloudflare|astro|react|lenis|gsap|vite|vps|hetzner|upward|upw-confete|servidor)\b/i;

describe('catalog and brand integrity', () => {
  it('mantém dados oficiais consistentes da Confeitaria Pampulha', () => {
    expect(BRAND.name).toBe('Confeitaria Pampulha');
    expect(BRAND.whatsappPrimary).toBe('553136537001');
    expect(BRAND.address.postalCode).toBe('31710-320');
    expect(BRAND.rating.count).toBe(53);
    expect(BENTO_CATEGORIES.length).toBe(4);
    expect(MENU_BLOCKS.length).toBe(3);
    expect(TESTIMONIALS.length).toBe(3);
    expect(FAQ_ITEMS.length).toBe(6);
    expect(LINKBIO_CARDS.length).toBe(7);
    expect(LINKBIO_SHOWCASE.length).toBe(4);
  });

  it('garante ausência de menções de infraestrutura nos textos públicos e llms', () => {
    const publicTextSources = [
      JSON.stringify(BENTO_CATEGORIES),
      JSON.stringify(MENU_BLOCKS),
      JSON.stringify(TESTIMONIALS),
      JSON.stringify(FAQ_ITEMS),
      JSON.stringify(LINKBIO_CARDS),
      fs.readFileSync(path.resolve('public/llms.txt'), 'utf8'),
      fs.readFileSync(path.resolve('public/llms-full.txt'), 'utf8')
    ];

    for (const block of publicTextSources) {
      expect(block).not.toMatch(FORBIDDEN_INFRA_WORDS);
    }
  });
});
