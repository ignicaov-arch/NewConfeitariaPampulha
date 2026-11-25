import { BRAND } from '../data/brand';
import { FAQ_ITEMS } from '../data/socialProof';

export type SchemaPageKind = 'home' | 'linkbio' | 'privacy';

/** Gera grafo estruturado JSON-LD unificado para buscadores e motores generativos. */
export function buildSiteSchemaGraph(pageKind: SchemaPageKind): string {
  const canonicalUrl =
    pageKind === 'home'
      ? `${BRAND.siteUrl}/`
      : pageKind === 'linkbio'
        ? `${BRAND.siteUrl}/linkbio`
        : `${BRAND.siteUrl}/politica-de-privacidade`;

  const pageName =
    pageKind === 'home'
      ? 'Confeitaria Pampulha | Palha Italiana, Brownies e Bolos em BH'
      : pageKind === 'linkbio'
        ? 'Confeitaria Pampulha | Links Oficiais, WhatsApp e Cardápio'
        : 'Política de Privacidade e LGPD | Confeitaria Pampulha';

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: `${BRAND.siteUrl}/`
    }
  ];

  if (pageKind !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: pageKind === 'linkbio' ? 'Links Oficiais' : 'Política de Privacidade',
      item: canonicalUrl
    });
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': ['Bakery', 'LocalBusiness'],
      '@id': `${BRAND.siteUrl}/#business`,
      name: BRAND.name,
      legalName: BRAND.legalName,
      url: `${BRAND.siteUrl}/`,
      logo: `${BRAND.siteUrl}/img/logo-pampulha.webp`,
      image: [
        `${BRAND.siteUrl}/img/hero.webp`,
        `${BRAND.siteUrl}/img/palha-italiana.webp`,
        `${BRAND.siteUrl}/img/brownies-pote.webp`
      ],
      description:
        'Confeitaria artesanal no bairro Itapoã, Pampulha em Belo Horizonte. Especializada em palha italiana, brownie recheado, bolo de pote, tortas, bolos de festa, brigadeiros gourmet e brindes corporativos.',
      telephone: `+${BRAND.whatsappPrimary}`,
      priceRange: '$$',
      servesCuisine: 'Confeitaria Artesanal Brasileira',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${BRAND.address.street} - ${BRAND.address.complex}`,
        addressLocality: BRAND.address.city,
        addressRegion: BRAND.address.state,
        postalCode: BRAND.address.postalCode,
        addressCountry: BRAND.address.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BRAND.geo.latitude,
        longitude: BRAND.geo.longitude
      },
      hasMap: BRAND.googleMapsUrl,
      sameAs: [BRAND.instagramUrl, BRAND.googleMapsUrl],
      founder: { '@id': `${BRAND.siteUrl}/#founders` },
      areaServed: [
        { '@type': 'City', name: 'Belo Horizonte', sameAs: 'https://www.wikidata.org/wiki/Q42800' },
        { '@type': 'Place', name: 'Região da Pampulha e Bairro Itapoã, Belo Horizonte' }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BRAND.rating.value,
        bestRating: BRAND.rating.best,
        worstRating: '1',
        ratingCount: BRAND.rating.count,
        reviewCount: BRAND.rating.count
      },
      openingHoursSpecification: BRAND.schedule.map((rule) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: rule.daysOfWeek,
        opens: rule.opens,
        closes: rule.closes
      })),
      about: [
        { '@type': 'Thing', name: 'Confeitaria', sameAs: 'https://www.wikidata.org/wiki/Q5159627' },
        { '@type': 'Thing', name: 'Palha italiana', sameAs: 'https://pt.wikipedia.org/wiki/Palha_italiana' },
        { '@type': 'Thing', name: 'Brigadeiro', sameAs: 'https://www.wikidata.org/wiki/Q915842' }
      ]
    },
    {
      '@type': 'Person',
      '@id': `${BRAND.siteUrl}/#founders`,
      name: BRAND.founders,
      jobTitle: BRAND.foundersRole,
      worksFor: { '@id': `${BRAND.siteUrl}/#business` },
      sameAs: [BRAND.instagramUrl]
    },
    {
      '@type': 'WebSite',
      '@id': `${BRAND.siteUrl}/#website`,
      url: `${BRAND.siteUrl}/`,
      name: BRAND.name,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${BRAND.siteUrl}/#business` }
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageName,
      inLanguage: 'pt-BR',
      datePublished: BRAND.publishedIso,
      dateModified: BRAND.updatedIso,
      isPartOf: { '@id': `${BRAND.siteUrl}/#website` },
      about: { '@id': `${BRAND.siteUrl}/#business` },
      author: { '@id': `${BRAND.siteUrl}/#founders` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.hero__lead', '.answer-first']
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems
    }
  ];

  if (pageKind === 'home') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BRAND.siteUrl}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /</g,
    '\\u003c'
  );
}
