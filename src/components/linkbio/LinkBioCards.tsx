import { LINKBIO_CARDS, type LinkBioCardItem } from '../../data/linkbioData';
import { sanitizeUrl } from '../../domain/whatsapp';

function CardGlyph({ icon }: { readonly icon: LinkBioCardItem['icon'] }) {
  if (icon === 'whatsapp') {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
  if (icon === 'corporate') {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <rect x="3" y="8" width="18" height="12" rx="2" vectorEffect="non-scaling-stroke" />
        <path d="M12 8v12M3 12h18M7.5 8a2.5 2.5 0 1 1 4.5-1.5V8M16.5 8a2.5 2.5 0 1 0-4.5-1.5V8" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (icon === 'calculator') {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" vectorEffect="non-scaling-stroke" />
        <path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (icon === 'menu') {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (icon === 'map') {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" vectorEffect="non-scaling-stroke" />
        <circle cx="12" cy="10" r="3" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (icon === 'star') {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" vectorEffect="non-scaling-stroke" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" vectorEffect="non-scaling-stroke" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function LinkBioCards() {
  return (
    <nav className="linkbio-cards" aria-label="Links principais da Confeitaria Pampulha">
      {LINKBIO_CARDS.map((card) => {
        const href = sanitizeUrl(card.href);
        const isHighlight = Boolean(card.highlight);
        return (
          <a
            key={card.id}
            href={href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            className={`linkbio-card revela${isHighlight ? ' linkbio-card--highlight text-white' : ' text-current'}`}
            style={{ color: isHighlight ? '#FFFDFB' : '#2B1712', textDecoration: 'none' }}
          >
            <span className="linkbio-card__icon" aria-hidden="true">
              <CardGlyph icon={card.icon} />
            </span>

            <span className="linkbio-card__body">
              <span className="linkbio-card__head">
                <span className="linkbio-card__title">{card.title}</span>
                {card.badge ? <span className="linkbio-card__badge">{card.badge}</span> : null}
              </span>
              <span className="linkbio-card__sub">{card.subtitle}</span>
            </span>

            <span className="linkbio-card__arrow" aria-hidden="true">
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              >
                <path d="M5 12h14M13 6l6 6-6 6" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default LinkBioCards;
