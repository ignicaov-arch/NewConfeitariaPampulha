import { getBakeryOpenStatus } from '../domain/schedule';
import { initLgpdConsent } from './lgpdConsent';

function setupHeaderNavigation(): void {
  const header = document.getElementById('topo');
  const toggleBtn = document.getElementById('abrir');
  const menu = document.getElementById('menu');
  if (!header) return;

  const updateScrollState = () => {
    const threshold = Math.max(220, window.innerHeight * 0.56);
    header.classList.toggle('is-rolou', window.scrollY > threshold);
  };

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  const closeMenu = () => {
    header.classList.remove('is-aberto');
    toggleBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn?.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-aberto');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!header.classList.contains('is-aberto')) return;
    if (!header.contains(event.target as Node)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('is-aberto')) {
      closeMenu();
    }
  });
}

function setupLiveBakeryStatus(): void {
  const status = getBakeryOpenStatus(new Date());
  const shortNodes = document.querySelectorAll<HTMLElement>('[data-open-status]');
  shortNodes.forEach((node) => {
    node.textContent = status.shortLabel;
  });

  const detailNodes = document.querySelectorAll<HTMLElement>('[data-open-detail]');
  detailNodes.forEach((node) => {
    node.textContent = status.detailLabel;
  });

  const dotNodes = document.querySelectorAll<HTMLElement>('[data-open-dot]');
  dotNodes.forEach((dot) => {
    dot.classList.toggle('is-fechado', !status.isOpen);
  });
}

function setupFaqAccordionFallback(): void {
  if ('name' in HTMLDetailsElement.prototype) return;

  document.addEventListener(
    'toggle',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLDetailsElement) || !target.open || !target.hasAttribute('name')) {
        return;
      }
      const groupName = target.getAttribute('name') || '';
      document.querySelectorAll<HTMLDetailsElement>(`details[name="${groupName}"]`).forEach((el) => {
        if (el !== target) el.open = false;
      });
    },
    { capture: true }
  );
}

setupHeaderNavigation();
setupLiveBakeryStatus();
setupFaqAccordionFallback();
initLgpdConsent();
