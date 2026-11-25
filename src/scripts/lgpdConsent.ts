export interface LgpdConsentState {
  readonly essential: true;
  readonly analytics: boolean;
  readonly decidedAt: string;
}

const CONSENT_STORAGE_KEY = 'pampulha_lgpd_consent';

function readStoredConsent(): LgpdConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LgpdConsentState>;
    if (typeof parsed.analytics !== 'boolean') return null;
    return {
      essential: true,
      analytics: parsed.analytics,
      decidedAt: String(parsed.decidedAt || new Date().toISOString())
    };
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean): void {
  const state: LgpdConsentState = {
    essential: true,
    analytics,
    decidedAt: new Date().toISOString()
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Armazenamento indisponível em navegação restrita
  }
}

function setBannerVisibility(banner: HTMLElement, visible: boolean): void {
  banner.hidden = !visible;
  if (visible) {
    banner.removeAttribute('hidden');
  }
}

/** Controla opt-in granular LGPD garantindo zero rastreamento antes do consentimento. */
export function initLgpdConsent(): void {
  const banner = document.getElementById('cookie-banner');
  const openPrefsBtn = document.getElementById('btn-preferencias-cookies');
  const extrasPanel = document.getElementById('cookie-opcoes-extras');
  const analyticsSwitch = document.getElementById('switch-analytics');
  if (!banner) return;

  let analyticsChecked = false;
  const existing = readStoredConsent();

  if (existing) {
    analyticsChecked = existing.analytics;
    setBannerVisibility(banner, false);
  } else {
    setBannerVisibility(banner, true);
  }

  const syncSwitchUi = () => {
    if (!analyticsSwitch) return;
    analyticsSwitch.setAttribute('aria-checked', analyticsChecked ? 'true' : 'false');
    analyticsSwitch.textContent = analyticsChecked ? 'Ativo' : 'Inativo';
  };
  syncSwitchUi();

  analyticsSwitch?.addEventListener('click', () => {
    analyticsChecked = !analyticsChecked;
    syncSwitchUi();
  });

  banner.querySelectorAll<HTMLButtonElement>('[data-consent-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.consentAction;
      if (action === 'customize' && extrasPanel) {
        const opening = extrasPanel.hidden;
        extrasPanel.hidden = !opening;
        btn.setAttribute('aria-expanded', opening ? 'true' : 'false');
        return;
      }
      if (action === 'accept') {
        analyticsChecked = true;
        saveConsent(true);
        syncSwitchUi();
        setBannerVisibility(banner, false);
        return;
      }
      if (action === 'essential') {
        analyticsChecked = false;
        saveConsent(false);
        syncSwitchUi();
        setBannerVisibility(banner, false);
      }
    });
  });

  openPrefsBtn?.addEventListener('click', () => {
    setBannerVisibility(banner, true);
    if (extrasPanel) {
      extrasPanel.hidden = false;
    }
  });
}
