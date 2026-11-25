import { describe, it, expect } from 'vitest';
import { buildSiteSchemaGraph } from '../src/domain/seoSchema';

describe('seoSchema domain', () => {
  it('gera JSON-LD @graph válido com FAQPage na home e sem tags < cruas', () => {
    const raw = buildSiteSchemaGraph('home');
    expect(raw).not.toContain('<');
    const parsed = JSON.parse(raw) as { '@graph': Array<Record<string, unknown>> };
    const types = parsed['@graph'].map((node) => node['@type']);
    expect(types.some((t) => Array.isArray(t) && t.includes('Bakery'))).toBe(true);
    expect(types).toContain('WebSite');
    expect(types).toContain('WebPage');
    expect(types).toContain('BreadcrumbList');
    expect(types).toContain('FAQPage');

    const business = parsed['@graph'].find((n) => Array.isArray(n['@type'])) as Record<
      string,
      unknown
    >;
    expect(business.name).toBe('Confeitaria Pampulha');
    expect((business.aggregateRating as Record<string, unknown>).ratingValue).toBe('5.0');
    expect((business.aggregateRating as Record<string, unknown>).ratingCount).toBe(53);
  });

  it('gera BreadcrumbList específico para /linkbio e /politica-de-privacidade sem FAQPage', () => {
    const linkbio = JSON.parse(buildSiteSchemaGraph('linkbio')) as {
      '@graph': Array<Record<string, unknown>>;
    };
    expect(linkbio['@graph'].some((n) => n['@type'] === 'FAQPage')).toBe(false);
    const linkbioPage = linkbio['@graph'].find((n) => n['@type'] === 'WebPage');
    expect(linkbioPage?.url).toBe('https://newconfeitariapampulha.pages.dev/linkbio');

    const privacy = JSON.parse(buildSiteSchemaGraph('privacy')) as {
      '@graph': Array<Record<string, unknown>>;
    };
    const privacyPage = privacy['@graph'].find((n) => n['@type'] === 'WebPage');
    expect(privacyPage?.url).toBe(
      'https://newconfeitariapampulha.pages.dev/politica-de-privacidade'
    );
  });
});
