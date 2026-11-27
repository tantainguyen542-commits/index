<!DOCTYPE html>
<html lang="vi" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#6366f1" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <title>StudyFlow — Không gian học tập thông minh & Gamification</title>

  <!-- Google Fonts: Be Vietnam Pro -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />

  <style>
    /* ==========================================================================
1. DESIGN TOKENS & THEME VARIABLES (LIGHT / DARK MODE)
       ========================================================================== */
    :root {
      --font-sans: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

      /* Brand & Gamification Palette */
      --indigo: #6366f1;
      --indigo-hover: #4f46e5;
      --indigo-soft: rgba(99, 102, 241, 0.12);
      --emerald: #10b981;
      --emerald-hover: #059669;
      --emerald-soft: rgba(16, 185, 129, 0.14);
      --amber: #f59e0b;
      --amber-hover: #d97706;
      --amber-soft: rgba(245, 158, 11, 0.15);
      --rose: #ef4444;
      --rose-soft: rgba(239, 68, 68, 0.14);

      /* Light Theme Surfaces */
      --bg-app: #f3f5f9;
      --bg-surface: #ffffff;
      --bg-surface-2: #f8fafc;
      --bg-glass: rgba(255, 255, 255, 0.88);
      --border-color: #e2e8f0;
      --border-strong: #cbd5e1;

      /* Light Theme Typography */
      --text-primary: #0f172a;
      --text-secondary: #475569;
      --text-muted: #64748b;

      /* Elevation & Radius */
      --radius-bento: 16px;
      --radius-md: 12px;
      --radius-sm: 8px;
      --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
      --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.06);
      --shadow-lg: 0 16px 36px rgba(99, 102, 241, 0.14);

      /* Layout Dimensions & Safe Areas */
      --sidebar-width: 260px;
      --topbar-height: 72px;
      --bottom-nav-height: 68px;
      --safe-bottom: env(safe-area-inset-bottom, 0px);
      --safe-left: env(safe-area-inset-left, 0px);
      --safe-right: env(safe-area-inset-right, 0px);
      --transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    }

    [data-theme="dark"] {
      --bg-app: #0b1120;
      --bg-surface: #131c31;
      --bg-surface-2: #1a253e;
      --bg-glass: rgba(19, 28, 49, 0.88);
      --border-color: #24324d;
      --border-strong: #334569;

      --text-primary: #f1f5f9;
      --text-secondary: #cbd5e1;
      --text-muted: #94a3b8;

      --indigo-soft: rgba(99, 102, 241, 0.2);
      --emerald-soft: rgba(16, 185, 129, 0.2);
      --amber-soft: rgba(245, 158, 11, 0.2);
      --rose-soft: rgba(239, 68, 68, 0.2);

      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.25);
      --shadow-md: 0 10px 28px rgba(0, 0, 0, 0.35);
      --shadow-lg: 0 16px 36px rgba(99, 102, 241, 0.22);
    }

    /* ==========================================================================
2. RESET & BASE STYLES
       ========================================================================== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      height: 100%;
      overflow-x: hidden;
    }

    body {
      min-height: 100%;
      min-height: 100dvh;
      font-family: var(--font-sans);
      background-color: var(--bg-app);
      color: var(--text-primary);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    body.modal-open {
      overflow: hidden;
    }

    button, input, textarea, select {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
    }

    button, a, [role="button"] {
      touch-action: manipulation;
    }

    button {
      cursor: pointer;
      border: none;
      background: none;
    }

    img, video, iframe, svg {
      max-width: 100%;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--border-strong);
      border-radius: 99px;
    }

    /* ==========================================================================
3. APP SHELL (SIDEBAR + TOP GAMIFICATION BAR + MAIN)
       ========================================================================== */
    .app-shell {
      display: flex;
      min-height: 100vh;
      min-height: 100dvh;
      width: 100%;
    }

    /* Desktop Sidebar */
    .sidebar {
      width: var(--sidebar-width);
      background: var(--bg-surface);
      border-right: 1px solid var(--border-color);
      padding: 22px 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 40;
      transition: var(--transition);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 4px 10px 22px;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 18px;
    }

    .brand-logo {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--indigo), #8b5cf6);
      display: grid;
      place-items: center;
      color: #fff;
      box-shadow: 0 6px 16px rgba(99, 102, 241, 0.35);
      flex-shrink: 0;
    }

    .brand-title {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, var(--indigo), var(--emerald));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-sub {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    .nav-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      border-radius: var(--radius-md);
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 0.92rem;
      transition: var(--transition);
      text-align: left;
      width: 100%;
    }

    .nav-item:hover {
      background: var(--bg-surface-2);
      color: var(--text-primary);
    }

    .nav-item.active {
      background: var(--indigo-soft);
      color: var(--indigo);
    }

    .nav-item svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .sidebar-footer-card {
      background: linear-gradient(135deg, var(--indigo-soft), var(--emerald-soft));
      border: 1px solid var(--border-color);
      border-radius: var(--radius-bento);
      padding: 14px;
    }

    .sidebar-footer-card h4 {
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .sidebar-footer-card p {
      font-size: 0.76rem;
      color: var(--text-secondary);
      margin-bottom: 10px;
    }

    /* Main Content Area */
    .main-wrapper {
      flex: 1;
      margin-left: var(--sidebar-width);
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    /* Persistent Gamification Topbar */
    .topbar {
      position: sticky;
      top: 0;
      z-index: 30;
      min-height: var(--topbar-height);
      background: var(--bg-glass);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      padding: 10px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .mobile-brand {
      display: none;
      align-items: center;
      gap: 8px;
      font-weight: 800;
      font-size: 1.05rem;
      color: var(--indigo);
    }

    .gamification-bar {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      flex: 1;
      min-width: 0;
    }

    .level-pill {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      padding: 6px 12px;
      border-radius: 99px;
      box-shadow: var(--shadow-sm);
    }

    .level-badge {
      background: linear-gradient(135deg, var(--indigo), #8b5cf6);
      color: #fff;
      font-weight: 800;
      font-size: 0.78rem;
      padding: 3px 9px;
      border-radius: 99px;
      white-space: nowrap;
    }

    .xp-progress-wrap {
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 110px;
    }

    .xp-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-secondary);
      gap: 8px;
    }

    .xp-track {
      width: 100%;
      height: 6px;
      background: var(--bg-surface-2);
      border-radius: 99px;
      overflow: hidden;
      border: 1px solid var(--border-color);
    }

    .xp-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--amber), #fbbf24);
      border-radius: 99px;
      transition: width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
      width: 0%;
    }

    .stat-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      border-radius: 99px;
      font-size: 0.8rem;
      font-weight: 700;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      white-space: nowrap;
    }

    .stat-chip.streak {
      color: var(--amber);
      border-color: rgba(245, 158, 11, 0.35);
      background: var(--amber-soft);
    }

    .stat-chip.minutes {
      color: var(--emerald);
      border-color: rgba(16, 185, 129, 0.35);
      background: var(--emerald-soft);
    }

    .theme-toggle {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      display: grid;
      place-items: center;
      color: var(--text-primary);
      transition: var(--transition);
      flex-shrink: 0;
    }

    .theme-toggle:hover {
      border-color: var(--indigo);
      color: var(--indigo);
      transform: translateY(-1px);
    }

    /* Main View Container */
    .content-container {
      padding: 24px;
      max-width: 1320px;
      width: 100%;
      margin: 0 auto;
      flex: 1;
    }

    .view-section {
      display: none;
      animation: fadeSlideIn 0.28s ease forwards;
    }

    .view-section.active {
      display: block;
    }

    @keyframes fadeSlideIn {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ==========================================================================
4. BENTO GRID & REUSABLE UI COMPONENTS
       ========================================================================== */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 18px;
    }

    .bento-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-bento);
      padding: 20px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      min-width: 0;
    }

    .bento-card:hover {
      box-shadow: var(--shadow-md);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .card-title {
      font-size: 1.05rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .card-subtitle {
      font-size: 0.83rem;
      color: var(--text-secondary);
    }

    /* Grid Spans */
    .col-12 { grid-column: span 12; }
    .col-8 { grid-column: span 8; }
    .col-7 { grid-column: span 7; }
    .col-6 { grid-column: span 6; }
    .col-5 { grid-column: span 5; }
    .col-4 { grid-column: span 4; }
    .col-3 { grid-column: span 3; }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 42px;
      padding: 10px 18px;
      border-radius: var(--radius-md);
      font-weight: 600;
      font-size: 0.9rem;
      transition: var(--transition);
      white-space: nowrap;
    }

    .btn:active {
      transform: scale(0.97);
    }

    .btn-primary {
      background: var(--indigo);
      color: #fff;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.28);
    }
    .btn-primary:hover {
      background: var(--indigo-hover);
      transform: translateY(-1px);
    }

    .btn-emerald {
      background: var(--emerald);
      color: #fff;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.28);
    }
    .btn-emerald:hover {
      background: var(--emerald-hover);
      transform: translateY(-1px);
    }

    .btn-amber {
      background: var(--amber);
      color: #fff;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.28);
    }
    .btn-amber:hover {
      background: var(--amber-hover);
    }

    .btn-outline {
      background: var(--bg-surface-2);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
    }
    .btn-outline:hover {
      border-color: var(--indigo);
      color: var(--indigo);
    }

    .btn-danger-soft {
      background: var(--rose-soft);
      color: var(--rose);
    }
    .btn-danger-soft:hover {
      background: var(--rose);
      color: #fff;
    }

    .btn-sm {
      min-height: 36px;
      padding: 7px 12px;
      font-size: 0.82rem;
      border-radius: 10px;
    }

    /* Form Controls */
    .input, .textarea, .select {
      width: 100%;
      background: var(--bg-surface-2);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 10px 14px;
      color: var(--text-primary);
      transition: var(--transition);
      outline: none;
    }

    .input:focus, .textarea:focus, .select:focus {
      border-color: var(--indigo);
      box-shadow: 0 0 0 3px var(--indigo-soft);
      background: var(--bg-surface);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 99px;
      font-size: 0.75rem;
      font-weight: 700;
    }
    .badge-indigo { background: var(--indigo-soft); color: var(--indigo); }
    .badge-emerald { background: var(--emerald-soft); color: var(--emerald); }
    .badge-amber { background: var(--amber-soft); color: var(--amber); }

    /* ==========================================================================
5. VIEW 1: DASHBOARD STYLES
       ========================================================================== */
    .hero-banner {
      background: linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #10b981 100%);
      color: #ffffff;
      border: none;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      padding: 26px 28px;
    }

    .hero-banner::after {
      content: '';
      position: absolute;
      right: -40px;
      top: -40px;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }

    .hero-banner h1 {
      font-size: 1.55rem;
      font-weight: 800;
      margin-bottom: 6px;
      letter-spacing: -0.02em;
    }

    .hero-banner p {
      font-size: 0.94rem;
      opacity: 0.92;
      max-width: 600px;
    }

    .hero-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      z-index: 1;
    }

    .btn-hero-white {
      background: #ffffff;
      color: #4f46e5;
      font-weight: 700;
    }
    .btn-hero-white:hover {
      background: #f8fafc;
      transform: translateY(-2px);
    }

    .btn-hero-glass {
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .btn-hero-glass:hover {
      background: rgba(255, 255, 255, 0.28);
    }

    /* Quick Stat Cards */
    .kpi-card {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .kpi-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      flex-shrink: 0;
    }

    .kpi-value {
      font-size: 1.45rem;
      font-weight: 800;
      line-height: 1.2;
    }

    .kpi-label {
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    /* 7-Day Weekly Bar Chart */
    .chart-wrapper {
      width: 100%;
      padding-top: 12px;
    }

    .weekly-chart {
      display: grid;
      grid-template-columns: repeat(7,
    
