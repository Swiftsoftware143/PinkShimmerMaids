import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Accessibility,
  X,
  Type,
  ZoomIn,
  Contrast,
  Eye,
  Link2,
  MousePointer2,
  Pause,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import '../styles/AccessibilityWidget.css';

const STORAGE_KEY = 'psm_a11y_prefs';

const DEFAULT_PREFS = {
  fontScale: 1,        // 1, 1.15, 1.3, 1.5
  contrast: 'normal',  // normal | high | inverted
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  bigCursor: false,
  pauseAnimations: false,
};

const FONT_STEPS = [1, 1.15, 1.3, 1.5];

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  // Load saved prefs once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setPrefs({ ...DEFAULT_PREFS, ...parsed });
      }
    } catch {
      // Corrupted JSON — ignore and use defaults
    }
  }, []);

  // Apply prefs to <html> element + persist
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--a11y-font-scale', prefs.fontScale);
    root.dataset.a11yContrast = prefs.contrast;
    root.dataset.a11yGrayscale = prefs.grayscale ? 'on' : 'off';
    root.dataset.a11yHighlightLinks = prefs.highlightLinks ? 'on' : 'off';
    root.dataset.a11yReadableFont = prefs.readableFont ? 'on' : 'off';
    root.dataset.a11yBigCursor = prefs.bigCursor ? 'on' : 'off';
    root.dataset.a11yPauseAnimations = prefs.pauseAnimations ? 'on' : 'off';

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Storage full or blocked — silently skip persistence
    }
  }, [prefs]);

  // Close on Escape; focus trap-lite
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const update = useCallback((patch) => {
    setPrefs((p) => ({ ...p, ...patch }));
  }, []);

  const cycleFontScale = () => {
    const idx = FONT_STEPS.indexOf(prefs.fontScale);
    const next = FONT_STEPS[(idx + 1) % FONT_STEPS.length];
    update({ fontScale: next });
  };

  const cycleContrast = () => {
    const order = ['normal', 'high', 'inverted'];
    const idx = order.indexOf(prefs.contrast);
    update({ contrast: order[(idx + 1) % order.length] });
  };

  const resetAll = () => setPrefs(DEFAULT_PREFS);

  const fontPercent = Math.round(prefs.fontScale * 100);

  const options = [
    {
      key: 'font',
      icon: <Type size={20} />,
      label: 'Text Size',
      sub: `${fontPercent}%`,
      active: prefs.fontScale !== 1,
      onClick: cycleFontScale,
      testid: 'a11y-text-size',
    },
    {
      key: 'contrast',
      icon: <Contrast size={20} />,
      label: 'Contrast',
      sub: prefs.contrast === 'normal' ? 'Normal' : prefs.contrast === 'high' ? 'High' : 'Inverted',
      active: prefs.contrast !== 'normal',
      onClick: cycleContrast,
      testid: 'a11y-contrast',
    },
    {
      key: 'grayscale',
      icon: <Eye size={20} />,
      label: 'Grayscale',
      sub: prefs.grayscale ? 'On' : 'Off',
      active: prefs.grayscale,
      onClick: () => update({ grayscale: !prefs.grayscale }),
      testid: 'a11y-grayscale',
    },
    {
      key: 'links',
      icon: <Link2 size={20} />,
      label: 'Highlight Links',
      sub: prefs.highlightLinks ? 'On' : 'Off',
      active: prefs.highlightLinks,
      onClick: () => update({ highlightLinks: !prefs.highlightLinks }),
      testid: 'a11y-highlight-links',
    },
    {
      key: 'font-readable',
      icon: <BookOpen size={20} />,
      label: 'Readable Font',
      sub: prefs.readableFont ? 'On' : 'Off',
      active: prefs.readableFont,
      onClick: () => update({ readableFont: !prefs.readableFont }),
      testid: 'a11y-readable-font',
    },
    {
      key: 'cursor',
      icon: <MousePointer2 size={20} />,
      label: 'Big Cursor',
      sub: prefs.bigCursor ? 'On' : 'Off',
      active: prefs.bigCursor,
      onClick: () => update({ bigCursor: !prefs.bigCursor }),
      testid: 'a11y-big-cursor',
    },
    {
      key: 'motion',
      icon: <Pause size={20} />,
      label: 'Pause Animations',
      sub: prefs.pauseAnimations ? 'On' : 'Off',
      active: prefs.pauseAnimations,
      onClick: () => update({ pauseAnimations: !prefs.pauseAnimations }),
      testid: 'a11y-pause-animations',
    },
    {
      key: 'zoom',
      icon: <ZoomIn size={20} />,
      label: 'Increase Text',
      sub: 'Quick +',
      active: false,
      onClick: () => {
        const idx = FONT_STEPS.indexOf(prefs.fontScale);
        const next = FONT_STEPS[Math.min(idx + 1, FONT_STEPS.length - 1)];
        update({ fontScale: next });
      },
      testid: 'a11y-zoom-in',
    },
  ];

  return createPortal(
    <>
      <button
        ref={toggleRef}
        type="button"
        className="a11y-toggle"
        aria-label={open ? 'Close accessibility menu' : 'Open accessibility menu'}
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((o) => !o)}
        data-testid="a11y-toggle-btn"
      >
        <Accessibility size={28} strokeWidth={2.25} />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          className="a11y-panel"
          role="dialog"
          aria-label="Accessibility settings"
          data-testid="a11y-panel"
        >
          <div className="a11y-header">
            <div>
              <h3 className="a11y-title">Accessibility</h3>
              <p className="a11y-subtitle">Customize your experience</p>
            </div>
            <button
              type="button"
              className="a11y-close"
              aria-label="Close accessibility menu"
              onClick={() => setOpen(false)}
              data-testid="a11y-close-btn"
            >
              <X size={18} />
            </button>
          </div>

          <div className="a11y-grid">
            {options.map((opt) => (
              <button
                key={opt.key}
                type="button"
                className={`a11y-option ${opt.active ? 'is-active' : ''}`}
                onClick={opt.onClick}
                aria-pressed={opt.active}
                data-testid={opt.testid}
              >
                <span className="a11y-option-icon">{opt.icon}</span>
                <span className="a11y-option-label">{opt.label}</span>
                <span className="a11y-option-sub">{opt.sub}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="a11y-reset"
            onClick={resetAll}
            data-testid="a11y-reset-btn"
          >
            <RotateCcw size={16} />
            Reset All
          </button>

          <p className="a11y-footnote">
            Preferences saved on this device. WCAG 2.1 / ADA-friendly controls.
          </p>
        </div>
      )}
    </>,
    document.body
  );
};

export default AccessibilityWidget;
