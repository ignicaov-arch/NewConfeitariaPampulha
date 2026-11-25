import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function WhatsAppFloat() {
  const built = sanitizeUrl(buildWhatsAppUrl());
  const href = built === '/' ? 'https://wa.me/553136537001' : built;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '22px',
        right: '22px',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Confeitaria Pampulha no WhatsApp"
        className="text-white cursor-pointer"
        style={{
          position: 'relative',
          display: 'flex',
          width: '60px',
          height: '60px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '999px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          textDecoration: 'none',
          boxShadow: '0 14px 32px -10px rgba(0, 0, 0, 0.45)',
          transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <svg
          width={30}
          height={30}
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ display: 'inline-block', maxWidth: '100%', height: 'auto', fill: '#FFFFFF' }}
          vectorEffect="non-scaling-stroke"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.463 3.486C18.212 1.233 15.215 0 12.032 0 5.449 0 .093 5.355.093 11.938c0 2.103.55 4.157 1.595 5.967L0 24l6.257-1.642c1.745.952 3.712 1.455 5.77 1.456h.005c6.58 0 11.937-5.356 11.938-11.94 0-3.186-1.238-6.182-3.507-8.388zM12.033 21.8c-1.785 0-3.535-.48-5.06-1.386l-.363-.215-3.762.987 1.004-3.668-.236-.376c-.996-1.585-1.522-3.415-1.522-5.204 0-5.474 4.454-9.927 9.933-9.927 2.65 0 5.143 1.033 7.018 2.91 1.875 1.877 2.907 4.37 2.907 7.025 0 5.474-4.454 9.93-9.932 9.93zm5.446-7.44c-.298-.15-1.764-.87-2.037-.97-.274-.1-.473-.15-.672.15-.2.298-.77 1.97-.945 1.168-.174.198-.348.223-.646.074-.298-.15-1.26-.464-2.4-1.48-.887-.79-1.486-1.768-1.66-2.067-.174-.298-.018-.46.13-.608.134-.134.298-.348.448-.522.149-.174.199-.298.298-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.217-.243-.584-.49-.505-.673-.514-.174-.01-.373-.01-.572-.01-.199 0-.522.075-.796.373s-1.044 1.02-1.044 2.487c0 1.467 1.069 2.884 1.218 3.083.149.199 2.103 3.21 5.094 4.502.712.308 1.268.492 1.701.63.715.228 1.365.196 1.88.119.573-.086 1.764-.721 2.013-1.417.248-.696.248-1.293.174-1.417-.075-.124-.274-.199-.572-.348z"
          />
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppFloat;
