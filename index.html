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
      grid-template-columns: repeat(7, 1fr);
      gap: 8px;
      align-items: end;
      height: 210px;
      padding: 20px 4px 8px;
      border-bottom: 1px solid var(--border-color);
      position: relative;
    }

    .chart-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: flex-end;
      gap: 8px;
      position: relative;
      min-width: 0;
    }

    .chart-bar-bg {
      width: 100%;
      max-width: 42px;
      height: 155px;
      background: var(--bg-surface-2);
      border-radius: 10px;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
      position: relative;
    }

    .chart-bar-fill {
      width: 100%;
      background: linear-gradient(180deg, var(--indigo), #818cf8);
      border-radius: 10px;
      transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      min-height: 6px;
    }

    .chart-col.today .chart-bar-fill {
      background: linear-gradient(180deg, var(--emerald), #34d399);
    }

    .chart-mins {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-secondary);
      white-space: nowrap;
    }

    .chart-day {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-secondary);
      margin-top: 8px;
      text-align: center;
      white-space: nowrap;
    }

    .chart-col.today .chart-day {
      color: var(--emerald);
    }

    /* To-Do List */
    .todo-form {
      display: flex;
      gap: 8px;
      margin-bottom: 14px;
    }

    .todo-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-height: 270px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding-right: 4px;
    }

    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 12px;
      background: var(--bg-surface-2);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      transition: var(--transition);
    }

    .todo-item.completed {
      opacity: 0.68;
    }

    .todo-left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .todo-checkbox {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: 2px solid var(--indigo);
      display: grid;
      place-items: center;
      flex-shrink: 0;
      transition: var(--transition);
      color: #fff;
    }

    .todo-item.completed .todo-checkbox {
      background: var(--emerald);
      border-color: var(--emerald);
    }

    .todo-text {
      font-size: 0.9rem;
      font-weight: 500;
      word-break: break-word;
    }

    .todo-item.completed .todo-text {
      text-decoration: line-through;
      color: var(--text-muted);
    }

    /* ==========================================================================
6. VIEW 2: FOCUS SPACE (POMODORO + AMBIENT SOUND MIXER + QUICK NOTES)
       ========================================================================== */
    .pomo-modes {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 20px;
    }

    .mode-btn {
      min-height: 38px;
      padding: 8px 14px;
      border-radius: 99px;
      font-size: 0.84rem;
      font-weight: 600;
      background: var(--bg-surface-2);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      transition: var(--transition);
    }

    .mode-btn.active {
      background: var(--indigo);
      color: #fff;
      border-color: var(--indigo);
    }

    .timer-ring-container {
      position: relative;
      width: 230px;
      height: 230px;
      margin: 0 auto 20px;
      display: grid;
      place-items: center;
    }

    .timer-svg {
      transform: rotate(-90deg);
      width: 230px;
      height: 230px;
    }

    .timer-track {
      fill: none;
      stroke: var(--bg-surface-2);
      stroke-width: 12;
    }

    .timer-progress {
      fill: none;
      stroke: var(--indigo);
      stroke-width: 12;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.5s linear, stroke 0.3s ease;
    }

    .timer-center {
      position: absolute;
      text-align: center;
    }

    .timer-display {
      font-size: 2.75rem;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .timer-status {
      font-size: 0.82rem;
      color: var(--text-secondary);
      font-weight: 600;
      margin-top: 6px;
    }

    .custom-mins-row {
      display: none;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .custom-mins-row.visible {
      display: flex;
    }

    .pomo-controls {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    /* Ambient Sound Channels */
    .sound-channel {
      background: var(--bg-surface-2);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 14px;
      margin-bottom: 12px;
      transition: var(--transition);
    }

    .sound-channel.playing {
      border-color: var(--indigo);
      background: var(--indigo-soft);
    }

    .sound-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      gap: 8px;
    }

    .sound-info {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 0.92rem;
    }

    .sound-vol-val {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--indigo);
      min-width: 38px;
      text-align: right;
    }

    .range-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 8px;
      border-radius: 99px;
      background: var(--border-strong);
      outline: none;
      touch-action: none;
    }

    .range-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--indigo);
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);
    }

    .range-slider::-moz-range-thumb {
      width: 22px;
      height: 22px;
      border: none;
      border-radius: 50%;
      background: var(--indigo);
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);
    }

    /* ==========================================================================
7. VIEW 3: 3D FLASHCARDS
       ========================================================================== */
    .deck-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }

    .deck-pills {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .deck-pill {
      min-height: 38px;
      padding: 8px 14px;
      border-radius: 12px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      font-weight: 600;
      font-size: 0.86rem;
      color: var(--text-secondary);
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .deck-pill.active {
      background: var(--indigo);
      color: #fff;
      border-color: var(--indigo);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
    }

    /* 3D Card Stage */
    .flashcard-stage {
      perspective: 1200px;
      -webkit-perspective: 1200px;
      width: 100%;
      max-width: 680px;
      height: 320px;
      margin: 12px auto 20px;
      cursor: pointer;
    }

    .flashcard-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.34, 1.36, 0.64, 1);
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
    }

    .flashcard-inner.flipped {
      transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
    }

    .flashcard-face {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      background: var(--bg-surface);
      border: 2px solid var(--border-color);
      border-radius: 22px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      box-shadow: var(--shadow-md);
    }

    .flashcard-face.back {
      transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      background: linear-gradient(145deg, var(--bg-surface), var(--indigo-soft));
      border-color: var(--indigo);
    }

    .fc-top-meta {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .fc-content {
      font-size: 1.32rem;
      font-weight: 700;
      line-height: 1.45;
      max-height: 185px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 0 8px;
      white-space: pre-line;
      word-break: break-word;
    }

    .flashcard-face.back .fc-content {
      font-size: 1.12rem;
      font-weight: 600;
    }

    .fc-hint {
      font-size: 0.78rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .fc-controls-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }

    .fc-mastery-row {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    /* ==========================================================================
8. VIEW 4: SPEED QUIZ ARENA
       ========================================================================== */
    .quiz-box {
      max-width: 760px;
      margin: 0 auto;
    }

    .quiz-hud {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }

    .combo-badge {
      padding: 6px 14px;
      border-radius: 99px;
      font-weight: 800;
      font-size: 0.85rem;
      background: var(--amber-soft);
      color: var(--amber);
      border: 1px solid rgba(245, 158, 11, 0.35);
      transition: transform 0.2s ease;
    }

    .combo-badge.hot {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      color: #fff;
      transform: scale(1.04);
    }

    .quiz-timer-bar {
      width: 100%;
      height: 8px;
      background: var(--bg-surface-2);
      border-radius: 99px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    .quiz-timer-fill {
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, var(--emerald), var(--amber));
      transition: width 0.1s linear;
    }

    .quiz-question-card {
      background: var(--bg-surface-2);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-bento);
      padding: 20px;
      margin-bottom: 16px;
      font-size: 1.15rem;
      font-weight: 700;
      text-align: center;
      word-break: break-word;
    }

    .quiz-options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .quiz-option {
      min-height: 54px;
      padding: 14px 16px;
      border-radius: var(--radius-md);
      background: var(--bg-surface);
      border: 2px solid var(--border-color);
      text-align: left;
      font-weight: 600;
      font-size: 0.94rem;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      transition: var(--transition);
      word-break: break-word;
    }

    .quiz-option:hover:not(:disabled) {
      border-color: var(--indigo);
      background: var(--indigo-soft);
      transform: translateY(-2px);
    }

    .quiz-option.correct {
      border-color: var(--emerald) !important;
      background: var(--emerald-soft) !important;
      color: var(--emerald);
    }

    .quiz-option.wrong {
      border-color: var(--rose) !important;
      background: var(--rose-soft) !important;
      color: var(--rose);
    }

    .opt-letter {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: var(--bg-surface-2);
      display: grid;
      place-items: center;
      font-weight: 800;
      font-size: 0.82rem;
      flex-shrink: 0;
    }

    /* ==========================================================================
9. VIEW 5: AI STUDY BUDDY
       ========================================================================== */
    .chat-window {
      height: 340px;
      min-height: 240px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background: var(--bg-surface-2);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 12px;
    }

    .chat-msg {
      max-width: 88%;
      padding: 12px 15px;
      border-radius: 14px;
      font-size: 0.9rem;
      line-height: 1.55;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .chat-msg.ai {
      align-self: flex-start;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-bottom-left-radius: 4px;
    }

    .chat-msg.user {
      align-self: flex-end;
      background: var(--indigo);
      color: #fff;
      border-bottom-right-radius: 4px;
    }

    .prompt-chips {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .prompt-chip {
      min-height: 34px;
      font-size: 0.78rem;
      padding: 6px 11px;
      border-radius: 99px;
      background: var(--indigo-soft);
      color: var(--indigo);
      font-weight: 600;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
    }
    .prompt-chip:hover {
      background: var(--indigo);
      color: #fff;
    }

    /* ==========================================================================
10. MODALS, TOASTS & MOBILE BOTTOM NAV
       ========================================================================== */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.58);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 60;
      display: none;
      place-items: center;
      padding: max(16px, env(safe-area-inset-top)) max(16px, var(--safe-right)) max(16px, var(--safe-bottom)) max(16px, var(--safe-left));
    }

    .modal-backdrop.open {
      display: grid;
    }

    .modal-dialog {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      width: 100%;
      max-width: 560px;
      max-height: 88dvh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 22px;
      box-shadow: var(--shadow-lg);
      animation: fadeSlideIn 0.22s ease;
    }

    .card-pair-row {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 8px;
      margin-bottom: 10px;
      align-items: center;
    }

    /* Toast Notifications */
    .toast-container {
      position: fixed;
      bottom: calc(20px + var(--safe-bottom));
      right: max(20px, var(--safe-right));
      z-index: 80;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    }

    .toast {
      background: var(--bg-surface);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--indigo);
      padding: 12px 16px;
      border-radius: 12px;
      box-shadow: var(--shadow-lg);
      font-size: 0.88rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      animation: toastIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: auto;
    }

    .toast.xp { border-left-color: var(--amber); }
    .toast.success { border-left-color: var(--emerald); }

    @keyframes toastIn {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Mobile Bottom Navigation */
    .bottom-nav {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(var(--bottom-nav-height) + var(--safe-bottom));
      padding: 4px calc(4px + var(--safe-right)) calc(4px + var(--safe-bottom)) calc(4px + var(--safe-left));
      background: var(--bg-glass);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-top: 1px solid var(--border-color);
      z-index: 45;
      grid-template-columns: repeat(5, 1fr);
    }

    .bottom-nav-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      min-height: 44px;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--text-secondary);
      border-radius: 10px;
      padding: 4px 2px;
    }

    .bottom-nav-btn.active {
      color: var(--indigo);
      background: var(--indigo-soft);
    }

    .bottom-nav-btn svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    /* Spinner */
    .spinner {
      width: 18px;
      height: 18px;
      border: 2.5px solid rgba(255, 255, 255, 0.35);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      display: inline-block;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* ==========================================================================
11. RESPONSIVE BREAKPOINTS & MOBILE OS POLISH
       ========================================================================== */
    @media (max-width: 1024px) {
      .col-8, .col-7, .col-6, .col-5, .col-4 {
        grid-column: span 12;
      }
      .col-3 {
        grid-column: span 6;
      }
    }

    @media (max-width: 768px) {
      /* Ngăn iOS Safari tự phóng to khi focus vào input/select/textarea */
      input, textarea, select {
        font-size: 16px;
      }

      .sidebar {
        display: none;
      }
      .main-wrapper {
        margin-left: 0;
        padding-bottom: calc(var(--bottom-nav-height) + var(--safe-bottom) + 16px);
      }
      .bottom-nav {
        display: grid;
      }
      .mobile-brand {
        display: flex;
      }
      .topbar {
        padding: 10px max(12px, var(--safe-right)) 10px max(12px, var(--safe-left));
      }
      .xp-progress-wrap {
        min-width: 86px;
      }
      .stat-chip {
        padding: 6px 10px;
        font-size: 0.75rem;
      }
      .content-container {
        padding: 14px max(12px, var(--safe-right)) 16px max(12px, var(--safe-left));
      }
      .bento-card {
        padding: 16px;
      }
      .hero-banner {
        padding: 20px 18px;
      }
      .hero-banner h1 {
        font-size: 1.25rem;
      }
      .kpi-value {
        font-size: 1.2rem;
      }
      .col-3 {
        grid-column: span 6;
      }
      .quiz-options-grid {
        grid-template-columns: 1fr;
      }
      .flashcard-stage {
        height: 270px;
      }
      .fc-content {
        font-size: 1.12rem;
      }
      .timer-ring-container,
      .timer-svg {
        width: 200px;
        height: 200px;
      }
      .timer-display {
        font-size: 2.35rem;
      }
      .chat-window {
        height: 280px;
      }
      .toast-container {
        bottom: calc(var(--bottom-nav-height) + var(--safe-bottom) + 10px);
        right: max(12px, var(--safe-right));
        left: max(12px, var(--safe-left));
      }
      .card-pair-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 400px) {
      .col-3 {
        grid-column: span 12;
      }
      .chart-day {
        font-size: 0.72rem;
      }
      .chart-mins {
        font-size: 0.66rem;
      }
    }
  </style>
</head>
<body>
  <div class="app-shell">
    <!-- ======================================================================
         DESKTOP SIDEBAR NAVIGATION
         ====================================================================== -->
    <aside class="sidebar" aria-label="Điều hướng chính">
      <div>
        <div class="brand">
          <div class="brand-logo" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <div class="brand-title">StudyFlow</div>
            <div class="brand-sub">Học tập thông minh & XP</div>
          </div>
        </div>

        <nav class="nav-list">
          <button class="nav-item active" data-view="dashboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
            Tổng quan
          </button>
          <button class="nav-item" data-view="focus">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Góc Tập Trung
          </button>
          <button class="nav-item" data-view="flashcards">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M7 15h10"/><path d="M7 9h6"/></svg>
            Thẻ Ghi Nhớ 3D
          </button>
          <button class="nav-item" data-view="quiz">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Đấu Trường Quiz
          </button>
          <button class="nav-item" data-view="ai">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/></svg>
            Trợ Lý AI
          </button>
        </nav>
      </div>

      <div class="sidebar-footer-card">
        <h4 id="sidebar-rank-title">Học giả Tập sự</h4>
        <p id="sidebar-rank-desc">Tích lũy thêm XP từ Pomodoro, Flashcard & Quiz để thăng hạng!</p>
        <button class="btn btn-primary btn-sm" style="width:100%" onclick="switchView('focus')">
          +50 XP Phiên học ngay
        </button>
      </div>
    </aside>

    <!-- ======================================================================
         MAIN CONTENT WRAPPER
         ====================================================================== -->
    <div class="main-wrapper">
      <!-- TOP PERSISTENT GAMIFICATION BAR -->
      <header class="topbar">
        <div class="mobile-brand">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          StudyFlow
        </div>

        <div class="gamification-bar">
          <!-- Level & XP Progress -->
          <div class="level-pill" title="Cấp độ và điểm kinh nghiệm">
            <span class="level-badge" id="top-level-badge">Cấp 1</span>
            <div class="xp-progress-wrap">
              <div class="xp-meta">
                <span id="top-xp-text">0 / 100 XP</span>
                <span style="color: var(--amber)" id="top-total-xp">Tổng: 0 XP</span>
              </div>
              <div class="xp-track">
                <div class="xp-fill" id="top-xp-bar"></div>
              </div>
            </div>
          </div>

          <!-- Streak -->
          <div class="stat-chip streak" title="Chuỗi ngày học liên tiếp">
            <span>🔥</span>
            <span id="top-streak">1 ngày</span>
          </div>

          <!-- Study Minutes Today -->
          <div class="stat-chip minutes" title="Tổng thời gian tập trung hôm nay">
            <span>⏱️</span>
            <span id="top-minutes">0 phút hôm nay</span>
          </div>
        </div>

        <!-- Light / Dark Theme Switcher -->
        <button class="theme-toggle" id="theme-toggle-btn" title="Chuyển đổi giao diện Sáng / Tối" aria-label="Chuyển đổi giao diện Sáng / Tối">
          <svg id="theme-icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg id="theme-icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </header>

      <main class="content-container">
        <!-- ==================================================================
             VIEW 1: TỔNG QUAN (DASHBOARD)
             ================================================================== -->
        <section id="view-dashboard" class="view-section active">
          <div class="bento-grid">
            <!-- Hero Motivational Banner -->
            <div class="bento-card hero-banner col-12">
              <div>
                <h1 id="dash-greeting">Chào buổi tối, Nhà chinh phục tri thức! ✨</h1>
                <p id="dash-quote">"Kỷ luật là cầu nối giữa mục tiêu và thành tựu. Hãy hoàn thành từng phiên học nhỏ hôm nay!"</p>
              </div>
              <div class="hero-actions">
                <button class="btn btn-hero-white" onclick="switchView('focus')">
                  ⏱️ Bắt đầu Pomodoro
                </button>
                <button class="btn btn-hero-glass" onclick="switchView('flashcards')">
                  🗂️ Ôn Flashcard 3D
                </button>
              </div>
            </div>

            <!-- KPI 1: Study Time -->
            <div class="bento-card kpi-card col-3">
              <div class="kpi-icon" style="background: var(--indigo-soft); color: var(--indigo);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div class="kpi-value" id="kpi-minutes">0 phút</div>
                <div class="kpi-label">Thời gian học hôm nay</div>
              </div>
            </div>

            <!-- KPI 2: Mastered Flashcards -->
            <div class="bento-card kpi-card col-3">
              <div class="kpi-icon" style="background: var(--emerald-soft); color: var(--emerald);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div class="kpi-value" id="kpi-mastered">0 / 18</div>
                <div class="kpi-label">Số thẻ đã thuộc</div>
              </div>
            </div>

            <!-- KPI 3: Total XP -->
            <div class="bento-card kpi-card col-3">
              <div class="kpi-icon" style="background: var(--amber-soft); color: var(--amber);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div>
                <div class="kpi-value" id="kpi-xp" style="color: var(--amber)">0 XP</div>
                <div class="kpi-label">Điểm kinh nghiệm</div>
              </div>
            </div>

            <!-- KPI 4: Streak -->
            <div class="bento-card kpi-card col-3">
              <div class="kpi-icon" style="background: var(--rose-soft); color: var(--rose);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <div>
                <div class="kpi-value" id="kpi-streak">1 ngày</div>
                <div class="kpi-label">Chuỗi ngày Streak</div>
              </div>
            </div>

            <!-- 7-Day Study Chart -->
            <div class="bento-card col-7">
              <div class="card-header">
                <div>
                  <div class="card-title">📊 Thống kê thời gian học 7 ngày</div>
                  <div class="card-subtitle">Tổng hợp số phút tập trung mỗi ngày trong tuần</div>
                </div>
                <span class="badge badge-emerald" id="weekly-total-badge">Tuần này: 0 phút</span>
              </div>
              <div class="chart-wrapper">
                <div class="weekly-chart" id="weekly-chart-container">
                  <!-- Rendered dynamically via JS -->
                </div>
              </div>
            </div>

            <!-- Today's To-Do List -->
            <div class="bento-card col-5">
              <div class="card-header">
                <div>
                  <div class="card-title">✅ Mục tiêu hôm nay</div>
                  <div class="card-subtitle">Hoàn thành mỗi việc nhận ngay <strong style="color:var(--amber)">+20 XP</strong></div>
                </div>
                <span class="badge badge-indigo" id="todo-count-badge">0/0</span>
              </div>

              <form class="todo-form" id="todo-form">
                <input type="text" id="todo-input" class="input" placeholder="Nhập mục tiêu học tập mới..." required />
                <button type="submit" class="btn btn-primary">Thêm</button>
              </form>

              <div class="todo-list" id="todo-list">
                <!-- Rendered dynamically via JS -->
              </div>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW 2: GÓC TẬP TRUNG (POMODORO + SOUND MIXER + QUICK NOTES)
             ================================================================== -->
        <section id="view-focus" class="view-section">
          <div class="bento-grid">
            <!-- Pomodoro Timer Card -->
            <div class="bento-card col-6" style="text-align: center;">
              <div class="card-header">
                <div class="card-title">⏱️ Đồng hồ Pomodoro</div>
                <span class="badge badge-amber">Hoàn thành phiên: +50 XP</span>
              </div>

              <div class="pomo-modes" id="pomo-modes">
                <button class="mode-btn active" data-mode="focus" data-mins="25">Học tập (25p)</button>
                <button class="mode-btn" data-mode="short" data-mins="5">Nghỉ ngắn (5p)</button>
                <button class="mode-btn" data-mode="long" data-mins="15">Nghỉ dài (15p)</button>
                <button class="mode-btn" data-mode="custom" data-mins="45">Tùy chỉnh</button>
              </div>

              <div class="custom-mins-row" id="custom-mins-row">
                <label for="custom-mins-input" style="font-size:0.85rem;font-weight:600;">Số phút:</label>
                <input type="number" id="custom-mins-input" class="input" style="width:90px;text-align:center;" min="1" max="180" value="45" />
                <button class="btn btn-outline btn-sm" id="apply-custom-mins">Áp dụng</button>
              </div>

              <div class="timer-ring-container">
                <svg class="timer-svg" viewBox="0 0 240 240">
                  <circle class="timer-track" cx="120" cy="120" r="104"></circle>
                  <circle class="timer-progress" id="timer-progress-circle" cx="120" cy="120" r="104" stroke-dasharray="653.45" stroke-dashoffset="0"></circle>
                </svg>
                <div class="timer-center">
                  <div class="timer-display" id="timer-display">25:00</div>
                  <div class="timer-status" id="timer-status-text">Sẵn sàng tập trung</div>
                </div>
              </div>

              <div class="pomo-controls">
                <button class="btn btn-primary" id="pomo-start-btn">▶ Bắt đầu</button>
                <button class="btn btn-outline" id="pomo-reset-btn">↺ Đặt lại</button>
                <button class="btn btn-emerald btn-sm" id="pomo-complete-now-btn" title="Hoàn thành nhanh để nhận thưởng & ghi nhận phút học">✓ Hoàn thành phiên</button>
              </div>
            </div>

            <!-- Web Audio API Ambient Sound Mixer + Quick Notes -->
            <div class="col-6" style="display:flex; flex-direction:column; gap:18px;">
              <!-- Sound Mixer -->
              <div class="bento-card">
                <div class="card-header">
                  <div>
                    <div class="card-title">🎧 Trình trộn âm thanh nền</div>
                    <div class="card-subtitle">Kéo thanh trượt để bật âm thanh tổng hợp trực tiếp (Web Audio API)</div>
                  </div>
                  <button class="btn btn-outline btn-sm" id="mute-all-sounds-btn">Tắt tất cả</button>
                </div>

                <!-- Channel 1: Rain -->
                <div class="sound-channel" id="channel-rain">
                  <div class="sound-header">
                    <div class="sound-info"><span>🌧️</span> Tiếng mưa rơi (Rain Noise)</div>
                    <span class="sound-vol-val" id="vol-label-rain">0%</span>
                  </div>
                  <input type="range" class="range-slider" id="vol-rain" min="0" max="100" value="0" aria-label="Âm lượng tiếng mưa rơi" />
                </div>

                <!-- Channel 2: Pink Noise Waves -->
                <div class="sound-channel" id="channel-waves">
                  <div class="sound-header">
                    <div class="sound-info"><span>🌊</span> Gió & Sóng nhẹ (Pink Noise)</div>
                    <span class="sound-vol-val" id="vol-label-waves">0%</span>
                  </div>
                  <input type="range" class="range-slider" id="vol-waves" min="0" max="100" value="0" aria-label="Âm lượng gió và sóng nhẹ" />
                </div>

                <!-- Channel 3: Lo-fi Ambient Drone -->
                <div class="sound-channel" id="channel-lofi" style="margin-bottom:0">
                  <div class="sound-header">
                    <div class="sound-info"><span>🎹</span> Hợp âm Lo-fi thư giãn (Ambient Drone)</div>
                    <span class="sound-vol-val" id="vol-label-lofi">0%</span>
                  </div>
                  <input type="range" class="range-slider" id="vol-lofi" min="0" max="100" value="0" aria-label="Âm lượng hợp âm Lo-fi" />
                </div>
              </div>

              <!-- Quick Notes -->
              <div class="bento-card" style="flex:1; display:flex; flex-direction:column;">
                <div class="card-header">
                  <div class="card-title">📝 Sổ ghi chú nhanh</div>
                  <span class="badge badge-emerald" id="notes-save-status">Đã tự động lưu</span>
                </div>
                <textarea id="quick-notes-area" class="textarea" rows="5" style="flex:1; resize:vertical;" placeholder="Ghi lại ý tưởng, công thức hoặc tóm tắt bài học tại đây... (Tự động lưu vào trình duyệt)"></textarea>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; gap:8px; flex-wrap:wrap;">
                  <span style="font-size:0.78rem; color:var(--text-muted);" id="notes-char-count">0 ký tự</span>
                  <button class="btn btn-outline btn-sm" onclick="sendNotesToAI()">✨ Tạo Flashcard từ ghi chú này</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW 3: THẺ GHI NHỚ 3D (FLASHCARDS)
             ================================================================== -->
        <section id="view-flashcards" class="view-section">
          <div class="deck-toolbar">
            <div class="deck-pills" id="deck-pills-container">
              <!-- Rendered dynamically -->
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn btn-outline btn-sm" id="open-add-card-modal-btn">+ Thêm thẻ vào bộ</button>
              <button class="btn btn-primary btn-sm" id="open-create-deck-modal-btn">+ Tạo bộ thẻ mới</button>
            </div>
          </div>

          <div class="bento-card">
            <div class="card-header">
              <div>
                <div class="card-title" id="active-deck-title">Toán - Lượng giác & Đạo hàm</div>
                <div class="card-subtitle" id="active-deck-progress">Đã thuộc: 0 / 6 thẻ • Nhấn vào thẻ hoặc phím Space để lật</div>
              </div>
              <div style="display:flex; gap:8px; align-items:center;">
                <span class="badge badge-indigo" id="fc-counter-badge">Thẻ 1 / 6</span>
                <button class="btn btn-danger-soft btn-sm" id="delete-deck-btn" title="Xóa bộ thẻ hiện tại" style="display:none;">Xóa bộ</button>
              </div>
            </div>

            <!-- 3D Flip Card -->
            <div class="flashcard-stage" id="flashcard-stage" tabindex="0" role="button" aria-label="Nhấn để lật thẻ ghi nhớ">
              <div class="flashcard-inner" id="flashcard-inner">
                <div class="flashcard-face front">
                  <div class="fc-top-meta">
                    <span>MẶT TRƯỚC • CÂU HỎI / KHÁI NIỆM</span>
                    <span id="fc-status-tag" class="badge badge-amber">Đang học</span>
                  </div>
                  <div class="fc-content" id="fc-front-text">Đang tải...</div>
                  <div class="fc-hint">🔄 Nhấn vào thẻ hoặc phím <strong>Space</strong> để xem đáp án</div>
                </div>

                <div class="flashcard-face back">
                  <div class="fc-top-meta">
                    <span style="color:var(--indigo)">MẶT SAU • ĐÁP ÁN / GIẢI THÍCH</span>
                    <span id="fc-status-tag-back" class="badge badge-amber">Đang học</span>
                  </div>
                  <div class="fc-content" id="fc-back-text">Đang tải...</div>
                  <div class="fc-hint">✅ Đánh dấu mức độ ghi nhớ bên dưới</div>
                </div>
              </div>
            </div>

            <!-- Navigation Controls -->
            <div class="fc-controls-row">
              <button class="btn btn-outline btn-sm" id="fc-prev-btn">← Thẻ trước</button>
              <button class="btn btn-outline btn-sm" id="fc-flip-btn">🔄 Lật thẻ (Space)</button>
              <button class="btn btn-outline btn-sm" id="fc-shuffle-btn">🔀 Xáo trộn</button>
              <button class="btn btn-outline btn-sm" id="fc-next-btn">Thẻ tiếp →</button>
            </div>

            <!-- Mastery Classification -->
            <div class="fc-mastery-row">
              <button class="btn btn-outline" id="fc-need-review-btn" style="border-color: var(--amber); color: var(--amber);">
                🔁 Cần ôn lại
              </button>
              <button class="btn btn-emerald" id="fc-mastered-btn">
                ✓ Đã thuộc (+10 XP)
              </button>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW 4: ĐẤU TRƯỜNG TRẮC NGHIỆM (SPEED QUIZ)
             ================================================================== -->
        <section id="view-quiz" class="view-section">
          <div class="quiz-box">
            <!-- Step 1: Quiz Setup -->
            <div class="bento-card" id="quiz-setup-panel">
              <div class="card-header">
                <div>
                  <div class="card-title">⚡ Đấu Trường Trắc Nghiệm (Speed Quiz)</div>
                  <div class="card-subtitle">Trả lời nhanh trong 15 giây mỗi câu để kích hoạt chuỗi Combo x2, x3 XP!</div>
                </div>
              </div>

              <div style="display:grid; gap:14px; margin-top:10px;">
                <div>
                  <label style="display:block; font-weight:700; font-size:0.88rem; margin-bottom:6px;">Chọn chủ đề / Bộ thẻ luyện tập:</label>
                  <select id="quiz-deck-select" class="select">
                    <!-- Populated via JS -->
                  </select>
                </div>

                <div>
                  <label style="display:block; font-weight:700; font-size:0.88rem; margin-bottom:6px;">Số lượng câu hỏi:</label>
                  <select id="quiz-count-select" class="select">
                    <option value="5">5 câu hỏi (Khởi động nhanh)</option>
                    <option value="8" selected>8 câu hỏi (Tiêu chuẩn)</option>
                    <option value="12">12 câu hỏi (Thử thách cao độ)</option>
                  </select>
                </div>

                <button class="btn btn-primary" id="start-quiz-btn" style="width:100%; padding:14px; font-size:1rem;">
                  🚀 Bắt đầu thi đấu ngay
                </button>
              </div>
            </div>

            <!-- Step 2: Active Quiz Arena -->
            <div class="bento-card" id="quiz-play-panel" style="display:none;">
              <div class="quiz-hud">
                <span class="badge badge-indigo" id="quiz-progress-label">Câu 1 / 8</span>
                <span class="combo-badge" id="quiz-combo-badge">🔥 Combo x1</span>
                <span class="badge badge-emerald" id="quiz-score-label">Điểm: 0</span>
                <span class="badge badge-amber" id="quiz-time-label">⏳ 15.0s</span>
              </div>

              <div class="quiz-timer-bar">
                <div class="quiz-timer-fill" id="quiz-timer-fill"></div>
              </div>

              <div class="quiz-question-card" id="quiz-question-text">
                Nội dung câu hỏi sẽ hiển thị ở đây
              </div>

              <div class="quiz-options-grid" id="quiz-options-grid">
                <!-- 4 Options rendered dynamically -->
              </div>
            </div>

            <!-- Step 3: Quiz Result Summary -->
            <div class="bento-card" id="quiz-result-panel" style="display:none; text-align:center;">
              <div style="font-size:3rem; margin-bottom:8px;">🏆</div>
              <h2 style="font-size:1.5rem; font-weight:800; margin-bottom:6px;">Hoàn thành Đấu Trường!</h2>
              <p class="card-subtitle" id="quiz-result-subtitle">Tuyệt vời! Bạn đã tích lũy thêm điểm kinh nghiệm.</p>

              <div class="bento-grid" style="margin: 20px 0; text-align:center;">
                <div class="bento-card col-3" style="padding:14px;">
                  <div class="kpi-value" id="res-score" style="color:var(--indigo)">0</div>
                  <div class="kpi-label">Tổng điểm</div>
                </div>
                <div class="bento-card col-3" style="padding:14px;">
                  <div class="kpi-value" id="res-xp" style="color:var(--amber)">+0 XP</div>
                  <div class="kpi-label">XP nhận được</div>
                </div>
                <div class="bento-card col-3" style="padding:14px;">
                  <div class="kpi-value" id="res-accuracy" style="color:var(--emerald)">0%</div>
                  <div class="kpi-label">Độ chính xác</div>
                </div>
                <div class="bento-card col-3" style="padding:14px;">
                  <div class="kpi-value" id="res-max-combo">x1</div>
                  <div class="kpi-label">Combo cao nhất</div>
                </div>
              </div>

              <div id="quiz-review-list" style="text-align:left; margin-bottom:20px; display:flex; flex-direction:column; gap:8px;"></div>

              <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
                <button class="btn btn-primary" id="quiz-retry-btn">🔄 Chơi lại bộ này</button>
                <button class="btn btn-outline" id="quiz-back-setup-btn">Chọn chủ đề khác</button>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================================================================
             VIEW 5: TRỢ LÝ AI HỌC TẬP (AI STUDY BUDDY - GEMINI API)
             ================================================================== -->
        <section id="view-ai" class="view-section">
          <div class="bento-grid">
            <!-- Left Panel: Auto Flashcard Generator from Notes -->
            <div class="bento-card col-5">
              <div class="card-header">
                <div>
                  <div class="card-title">✨ Tạo Flashcard tự động từ bài học</div>
                  <div class="card-subtitle">Dán đoạn văn bản hoặc ghi chú, AI sẽ trích xuất thành bộ thẻ học ngay (+30 XP)</div>
                </div>
              </div>

              <div style="display:flex; flex-direction:column; gap:12px;">
                <div>
                  <label style="display:block; font-size:0.84rem; font-weight:700; margin-bottom:5px;">Tên bộ thẻ (tùy chọn):</label>
                  <input type="text" id="ai-deck-title-input" class="input" placeholder="VD: Sinh học - Quá trình quang hợp" />
                </div>

                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                    <label style="font-size:0.84rem; font-weight:700;">Nội dung bài giảng / Ghi chú:</label>
                    <button type="button" class="prompt-chip" id="ai-fill-sample-btn">Dán bài mẫu</button>
                  </div>
                  <textarea id="ai-source-text" class="textarea" rows="8" placeholder="Dán đoạn văn bản kiến thức, định nghĩa, công thức hoặc tóm tắt bài học vào đây..."></textarea>
                </div>

                <button class="btn btn-emerald" id="ai-generate-cards-btn" style="width:100%;">
                  🪄 Tạo bộ Flashcard bằng AI
                </button>

                <div id="ai-gen-result-box" style="display:none; background:var(--emerald-soft); border:1px solid var(--emerald); border-radius:12px; padding:14px;">
                  <div style="font-weight:700; color:var(--emerald); margin-bottom:6px;" id="ai-gen-summary">Đã tạo thành công bộ thẻ!</div>
                  <button class="btn btn-primary btn-sm" id="ai-jump-to-deck-btn" style="width:100%;">Học bộ thẻ vừa tạo ngay →</button>
                </div>
              </div>
            </div>

            <!-- Right Panel: AI Tutor Chat -->
            <div class="bento-card col-7" style="display:flex; flex-direction:column;">
              <div class="card-header">
                <div>
                  <div class="card-title">🤖 Gia sư AI (StudyBot)</div>
                  <div class="card-subtitle">Giải thích khái niệm khó, tóm tắt bài học và gợi ý phương pháp giải</div>
                </div>
                <button class="btn btn-outline btn-sm" id="ai-clear-chat-btn">Xóa lịch sử</button>
              </div>

              <div class="chat-window" id="ai-chat-window">
                <!-- Messages rendered dynamically -->
              </div>

              <div class="prompt-chips">
                <button type="button" class="prompt-chip" data-prompt="Hãy giải thích khái niệm Đạo hàm một cách trực quan, dễ hiểu nhất kèm ví dụ thực tế.">💡 Giải thích Đạo hàm dễ hiểu</button>
                <button type="button" class="prompt-chip" data-prompt="Hãy tóm tắt nội dung trong Sổ ghi chú nhanh của tôi thành 3 ý chính dễ nhớ.">📝 Tóm tắt Sổ ghi chú của tôi</button>
                <button type="button" class="prompt-chip" data-prompt="Gợi ý cho tôi phương pháp ghi nhớ từ vựng tiếng Anh lâu quên (Spaced Repetition).">🧠 Mẹo học từ vựng</button>
              </div>

              <form id="ai-chat-form" style="display:flex; gap:8px;">
                <input type="text" id="ai-chat-input" class="input" placeholder="Đặt câu hỏi cho Gia sư AI..." required />
                <button type="submit" class="btn btn-primary" id="ai-chat-send-btn">Gửi</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>

    <!-- ======================================================================
         MOBILE BOTTOM NAVIGATION
         ====================================================================== -->
    <nav class="bottom-nav" aria-label="Điều hướng di động">
      <button class="bottom-nav-btn active" data-view="dashboard">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
        Tổng quan
      </button>
      <button class="bottom-nav-btn" data-view="focus">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Tập trung
      </button>
      <button class="bottom-nav-btn" data-view="flashcards">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M7 15h10"/><path d="M7 9h6"/></svg>
        Flashcard
      </button>
      <button class="bottom-nav-btn" data-view="quiz">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        Quiz
      </button>
      <button class="bottom-nav-btn" data-view="ai">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z"/></svg>
        Trợ lý AI
      </button>
    </nav>
  </div>

  <!-- ========================================================================
       MODAL: TẠO BỘ THẺ MỚI (CREATE DECK MODAL)
       ======================================================================== -->
  <div class="modal-backdrop" id="modal-create-deck">
    <div class="modal-dialog">
      <div class="card-header">
        <div class="card-title">🗂️ Tạo bộ thẻ ghi nhớ mới</div>
        <button class="btn btn-outline btn-sm" onclick="closeModal('modal-create-deck')">✕</button>
      </div>
      <form id="create-deck-form">
        <div style="margin-bottom:14px;">
          <label style="display:block; font-weight:700; font-size:0.86rem; margin-bottom:6px;">Tên bộ thẻ *</label>
          <input type="text" id="new-deck-name" class="input" placeholder="VD: Lịch sử Việt Nam - Giai đoạn 1945-1975" required />
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <label style="font-weight:700; font-size:0.86rem;">Danh sách thẻ (Mặt trước / Mặt sau)</label>
          <button type="button" class="btn btn-outline btn-sm" id="add-pair-row-btn">+ Thêm dòng</button>
        </div>

        <div id="new-deck-pairs-container">
          <!-- Dynamic card pair inputs -->
        </div>

        <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:18px;">
          <button type="button" class="btn btn-outline" onclick="closeModal('modal-create-deck')">Hủy</button>
          <button type="submit" class="btn btn-primary">Lưu bộ thẻ</button>
        </div>
      </form>
    </div>
  </div>

  <!-- ========================================================================
       MODAL: THÊM THẺ VÀO BỘ HIỆN TẠI
       ======================================================================== -->
  <div class="modal-backdrop" id="modal-add-card">
    <div class="modal-dialog" style="max-width:460px;">
      <div class="card-header">
        <div class="card-title">➕ Thêm thẻ mới vào bộ hiện tại</div>
        <button class="btn btn-outline btn-sm" onclick="closeModal('modal-add-card')">✕</button>
      </div>
      <form id="add-single-card-form">
        <div style="margin-bottom:12px;">
          <label style="display:block; font-weight:700; font-size:0.86rem; margin-bottom:6px;">Mặt trước (Câu hỏi / Thuật ngữ) *</label>
          <textarea id="single-card-front" class="textarea" rows="3" placeholder="Nhập nội dung mặt trước..." required></textarea>
        </div>
        <div style="margin-bottom:16px;">
          <label style="display:block; font-weight:700; font-size:0.86rem; margin-bottom:6px;">Mặt sau (Đáp án / Giải thích) *</label>
          <textarea id="single-card-back" class="textarea" rows="3" placeholder="Nhập nội dung mặt sau..." required></textarea>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:10px;">
          <button type="button" class="btn btn-outline" onclick="closeModal('modal-add-card')">Hủy</button>
          <button type="submit" class="btn btn-emerald">Thêm thẻ</button>
        </div>
      </form>
    </div>
  </div>

  <!-- TOAST NOTIFICATION CONTAINER -->
  <div class="toast-container" id="toast-container" aria-live="polite"></div>

  <script>
    /* ==========================================================================
1. INITIAL DATA & LOCALSTORAGE STATE MANAGEMENT
       ========================================================================== */
    const STORAGE_KEY = 'studyflow_app_state_v1';
    const apiKey = ""; // Gemini API Key (được môi trường runtime tự động cung cấp)

    function getTodayDateKey() {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      const d = String(now.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    function getDayIndexMonToSun() {
      // 0 = T2, 1 = T3, ..., 6 = CN
      const jsDay = new Date().getDay();
      return jsDay === 0 ? 6 : jsDay - 1;
    }

    const DEFAULT_DECKS = [
      {
        id: 'deck-math',
        title: 'Toán - Lượng giác & Đạo hàm',
        isDefault: true,
        cards: [
          { id: 'm1', front: 'Hệ thức lượng giác cơ bản nhất giữa sin(x) và cos(x)?', back: 'sin²(x) + cos²(x) = 1\nTừ đó suy ra: 1 + tan²(x) = 1/cos²(x)', mastered: false },
          { id: 'm2', front: 'Công thức nhân đôi của sin(2x) và cos(2x)?', back: 'sin(2x) = 2·sin(x)·cos(x)\ncos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)', mastered: false },
          { id: 'm3', front: 'Đạo hàm của các hàm lượng giác cơ bản: (sin x)\', (cos x)\', (tan x)\'?', back: '(sin x)\' = cos x\n(cos x)\' = -sin x\n(tan x)\' = 1 / cos²(x)', mastered: false },
          { id: 'm4', front: 'Quy tắc đạo hàm hàm hợp y = f(u(x)) là gì?', back: 'y\'_x = y\'_u · u\'_x\nVí dụ: (sin u)\' = u\' · cos u', mastered: false },
          { id: 'm5', front: 'Đạo hàm của hàm mũ (eˣ)\', (aˣ)\' và logarit (ln x)\'?', back: '(eˣ)\' = eˣ\n(aˣ)\' = aˣ · ln(a)\n(ln x)\' = 1/x (với x > 0)', mastered: false },
          { id: 'm6', front: 'Điều kiện để hàm số y = f(x) đạt cực trị tại x₀?', back: 'f\'(x₀) = 0 (hoặc không xác định) và f\'(x) đổi dấu khi đi qua điểm x₀.', mastered: false }
        ]
      },
      {
        id: 'deck-english',
        title: 'Tiếng Anh - Từ vựng & Thành ngữ',
        isDefault: true,
        cards: [
          { id: 'e1', front: 'Break the ice (Idiom)', back: 'Phá vỡ sự ngại ngùng ban đầu, bắt chuyện để bầu không khí thoải mái hơn.\nVD: He told a joke to break the ice.', mastered: false },
          { id: 'e2', front: 'Ubiquitous /juːˈbɪk.wɪ.təs/ (Adj)', back: 'Có mặt ở khắp mọi nơi, phổ biến rộng rãi.\nVD: Smartphones have become ubiquitous in modern life.', mastered: false },
          { id: 'e3', front: 'Procrastinate /prəˈkræs.tɪ.neɪt/ (Verb)', back: 'Trì hoãn, chần chừ không chịu làm việc cần làm.\nVD: Stop procrastinating and start studying!', mastered: false },
          { id: 'e4', front: 'Bite the bullet (Idiom)', back: 'Cắn răng chịu đựng, dũng cảm đối mặt với tình huống khó khăn.\nVD: I decided to bite the bullet and take the exam.', mastered: false },
          { id: 'e5', front: 'Resilient /rɪˈzɪl.jənt/ (Adj)', back: 'Kiên cường, có khả năng phục hồi nhanh sau khó khăn.\nVD: She is remarkably resilient in the face of adversity.', mastered: false },
          { id: 'e6', front: 'Hit the nail on the head (Idiom)', back: 'Nói trúng phóc vấn đề, nhận định hoàn toàn chính xác.\nVD: Your analysis really hit the nail on the head.', mastered: false }
        ]
      },
      {
        id: 'deck-cpp',
        title: 'Tin học - Lập trình C++ cơ bản',
        isDefault: true,
        cards: [
          { id: 'c1', front: 'Con trỏ (Pointer) trong C++ là gì?', back: 'Là biến đặc biệt dùng để lưu trữ địa chỉ bộ nhớ của một biến khác.\nKhai báo: int* ptr = &x;', mastered: false },
          { id: 'c2', front: 'Sự khác biệt chính giữa Tham trị (Pass by Value) và Tham chiếu (Pass by Reference)?', back: 'Tham trị tạo bản sao nên không làm đổi biến gốc. Tham chiếu (int& a) truyền trực tiếp địa chỉ biến gốc, giúp tiết kiệm bộ nhớ và thay đổi được giá trị gốc.', mastered: false },
          { id: 'c3', front: 'Độ phức tạp thời gian của thuật toán Tìm kiếm nhị phân (Binary Search)?', back: 'O(log₂ n) — Yêu cầu mảng dữ liệu đầu vào phải được sắp xếp trước.', mastered: false },
          { id: 'c4', front: 'Container std::vector trong C++ STL có ưu điểm gì so với mảng tĩnh?', back: 'Có khả năng tự động thay đổi kích thước động (push_back, pop_back), quản lý bộ nhớ an toàn và tích hợp sẵn hàm .size().', mastered: false },
          { id: 'c5', front: '4 tính chất cốt lõi của Lập trình hướng đối tượng (OOP) trong C++?', back: '1. Tính đóng gói (Encapsulation)\n2. Tính kế thừa (Inheritance)\n3. Tính đa hình (Polymorphism)\n4. Tính trừu tượng (Abstraction)', mastered: false },
          { id: 'c6', front: 'Đệ quy (Recursion) cần có 2 thành phần bắt buộc nào?', back: '1. Điều kiện dừng (Base case) để tránh lặp vô tận.\n2. Bước gọi đệ quy (Recursive step) thu nhỏ bài toán.', mastered: false }
        ]
      }
    ];

    const DEFAULT_STATE = {
      theme: 'light',
      xp: 40,
      streak: 3,
      lastActiveDate: getTodayDateKey(),
      weeklyMinutes: [35, 50, 25, 60, 40, 20, 0],
      todos: [
        { id: 't1', text: 'Hoàn thành 1 phiên Pomodoro 25 phút', completed: false },
        { id: 't2', text: 'Ôn thuộc 5 thẻ ghi nhớ môn Toán hoặc Tiếng Anh', completed: false },
        { id: 't3', text: 'Thử sức Đấu trường Speed Quiz đạt Combo x3', completed: false }
      ],
      quickNotes: 'Công thức cần nhớ:\n- Tập trung sâu 25 phút, nghỉ 5 phút giúp não bộ ghi nhớ hiệu quả hơn.\n- Ôn tập ngắt quãng (Spaced Repetition) giúp chuyển kiến thức vào trí nhớ dài hạn.',
      decks: DEFAULT_DECKS,
      activeDeckId: 'deck-math',
      chatHistory: [
        {
          role: 'ai',
          text: 'Xin chào! Mình là StudyBot — Gia sư AI của bạn trên StudyFlow 🌟\nBạn cần mình giải thích khái niệm khó, tóm tắt bài giảng hay gợi ý mẹo ôn thi nào hôm nay?'
        }
      ]
    };

    let state = loadState();

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          const fresh = JSON.parse(JSON.stringify(DEFAULT_STATE));
          saveState(fresh);
          return fresh;
        }
        const parsed = JSON.parse(raw);
        const merged = {
          ...DEFAULT_STATE,
          ...parsed,
          decks: Array.isArray(parsed.decks) && parsed.decks.length > 0 ? parsed.decks : DEFAULT_DECKS,
          weeklyMinutes: Array.isArray(parsed.weeklyMinutes) && parsed.weeklyMinutes.length === 7 ? parsed.weeklyMinutes : [0, 0, 0, 0, 0, 0, 0],
          todos: Array.isArray(parsed.todos) ? parsed.todos : [],
          chatHistory: Array.isArray(parsed.chatHistory) && parsed.chatHistory.length > 0 ? parsed.chatHistory : DEFAULT_STATE.chatHistory
        };

        const today = getTodayDateKey();
        if (merged.lastActiveDate !== today) {
          const last = new Date(merged.lastActiveDate + 'T00:00:00');
          const now = new Date(today + 'T00:00:00');
          const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            merged.streak += 1;
          } else if (diffDays > 1) {
            merged.streak = 1;
          }
          const todayIdx = getDayIndexMonToSun();
          if (todayIdx === 0 && diffDays >= 1) {
            merged.weeklyMinutes = [0, 0, 0, 0, 0, 0, 0];
          }
          merged.lastActiveDate = today;
          saveState(merged);
        }
        return merged;
      } catch (err) {
        return JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
    }

    function saveState(customState = state) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customState));
      } catch (e) {}
    }

    /* ==========================================================================
2. GAMIFICATION ENGINE (XP, LEVEL, TOASTS & SOUND CHIME)
       ========================================================================== */
    const RANK_TITLES = [
      'Tân binh Tri thức',
      'Học giả Tập sự',
      'Chiến binh Tập trung',
      'Nhà Chinh phục Đỉnh cao',
      'Bậc thầy Trí nhớ',
      'Huyền thoại StudyFlow'
    ];

    function addXP(amount, reason = '') {
      if (!amount || amount <= 0) return;
      const oldLevel = Math.floor(state.xp / 100) + 1;
      state.xp += amount;
      const newLevel = Math.floor(state.xp / 100) + 1;

      saveState();
      updateGamificationUI();
      playRewardChime(newLevel > oldLevel);

      showToast(`+${amount} XP ${reason ? '• ' + reason : ''}`, 'xp');
      if (newLevel > oldLevel) {
        setTimeout(() => {
          showToast(`🎉 Chúc mừng! Bạn đã thăng lên Cấp ${newLevel}!`, 'success');
        }, 450);
      }
    }

    function addStudyMinutes(mins) {
      if (!mins || mins <= 0) return;
      const todayIdx = getDayIndexMonToSun();
      state.weeklyMinutes[todayIdx] = (state.weeklyMinutes[todayIdx] || 0) + mins;
      saveState();
      updateGamificationUI();
      renderWeeklyChart();
    }

    function updateGamificationUI() {
      const level = Math.floor(state.xp / 100) + 1;
      const currentLevelXP = state.xp % 100;
      const todayIdx = getDayIndexMonToSun();
      const todayMins = state.weeklyMinutes[todayIdx] || 0;

      document.getElementById('top-level-badge').textContent = `Cấp ${level}`;
      document.getElementById('top-xp-text').textContent = `${currentLevelXP} / 100 XP`;
      document.getElementById('top-total-xp').textContent = `Tổng: ${state.xp} XP`;
      document.getElementById('top-xp-bar').style.width = `${currentLevelXP}%`;
      document.getElementById('top-streak').textContent = `${state.streak} ngày`;
      document.getElementById('top-minutes').textContent = `${todayMins} phút hôm nay`;

      const rankIndex = Math.min(level - 1, RANK_TITLES.length - 1);
      document.getElementById('sidebar-rank-title').textContent = `🏅 ${RANK_TITLES[rankIndex]}`;

      document.getElementById('kpi-minutes').textContent = `${todayMins} phút`;
      document.getElementById('kpi-xp').textContent = `${state.xp} XP`;
      document.getElementById('kpi-streak').textContent = `${state.streak} ngày`;

      let totalCards = 0;
      let masteredCards = 0;
      state.decks.forEach(d => {
        totalCards += d.cards.length;
        masteredCards += d.cards.filter(c => c.mastered).length;
      });
      document.getElementById('kpi-mastered').textContent = `${masteredCards} / ${totalCards}`;
    }

    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      const icon = type === 'xp' ? '⭐' : type === 'success' ? '🎉' : '💡';
      toast.innerHTML = `<span>${icon}</span><span>${escapeHTML(message)}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(16px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 260);
      }, 3200);
    }

    function escapeHTML(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    /* ==========================================================================
3. THEME SWITCHER & VIEW NAVIGATION
       ========================================================================== */
    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      const sunIcon = document.getElementById('theme-icon-sun');
      const moonIcon = document.getElementById('theme-icon-moon');
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        if (metaTheme) metaTheme.setAttribute('content', '#131c31');
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        if (metaTheme) metaTheme.setAttribute('content', '#6366f1');
      }
    }

    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      saveState();
      applyTheme(state.theme);
    });

    function switchView(viewName) {
      document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === `view-${viewName}`);
      });

      document.querySelectorAll('[data-view]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (viewName === 'dashboard') {
        renderWeeklyChart();
        updateGamificationUI();
      } else if (viewName === 'flashcards') {
        renderFlashcardView();
      } else if (viewName === 'quiz') {
        populateQuizDeckSelect();
      }
    }

    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        switchView(btn.getAttribute('data-view'));
      });
    });

    /* ==========================================================================
4. VIEW 1: DASHBOARD (GREETING, 7-DAY CHART, TO-DO LIST)
       ========================================================================== */
    function updateGreeting() {
      const hour = new Date().getHours();
      let greet = 'Chào buổi tối';
      if (hour >= 5 && hour < 12) greet = 'Chào buổi sáng';
      else if (hour >= 12 && hour < 18) greet = 'Chào buổi chiều';
      document.getElementById('dash-greeting').textContent = `${greet}, Nhà chinh phục tri thức! ✨`;
    }

    function renderWeeklyChart() {
      const container = document.getElementById('weekly-chart-container');
      const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
      const todayIdx = getDayIndexMonToSun();
      const maxMins = Math.max(60, ...state.weeklyMinutes);
      const totalWeek = state.weeklyMinutes.reduce((a, b) => a + b, 0);

      document.getElementById('weekly-total-badge').textContent = `Tuần này: ${totalWeek} phút`;

      container.innerHTML = days.map((day, idx) => {
        const mins = state.weeklyMinutes[idx] || 0;
        const pct = Math.min(100, Math.round((mins / maxMins) * 100));
        const isToday = idx === todayIdx;
        return `
          <div class="chart-col ${isToday ? 'today' : ''}">
            <span class="chart-mins">${mins}p</span>
            <div class="chart-bar-bg" title="${day}: ${mins} phút">
              <div class="chart-bar-fill" style="height: ${pct}%"></div>
            </div>
            <span class="chart-day">${isToday ? day + ' •' : day}</span>
          </div>
        `;
      }).join('');
    }

    function renderTodoList() {
      const listEl = document.getElementById('todo-list');
      const doneCount = state.todos.filter(t => t.completed).length;
      document.getElementById('todo-count-badge').textContent = `${doneCount}/${state.todos.length}`;

      if (state.todos.length === 0) {
        listEl.innerHTML = `<div style="text-align:center; padding:24px; color:var(--text-muted); font-size:0.88rem;">Chưa có mục tiêu nào. Hãy thêm việc cần làm ở trên nhé!</div>`;
        return;
      }

      listEl.innerHTML = state.todos.map(todo => `
        <div class="todo-item ${todo.completed ? 'completed' : ''}">
          <div class="todo-left">
            <button type="button" class="todo-checkbox" onclick="toggleTodo('${todo.id}')" aria-label="Đánh dấu hoàn thành">
              ${todo.completed ? '✓' : ''}
            </button>
            <span class="todo-text">${escapeHTML(todo.text)}</span>
          </div>
          <button type="button" class="btn btn-danger-soft btn-sm" onclick="deleteTodo('${todo.id}')" title="Xóa mục tiêu">✕</button>
        </div>
      `).join('');
    }

    document.getElementById('todo-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('todo-input');
      const text = input.value.trim();
      if (!text) return;
      state.todos.unshift({
        id: 'todo-' + Date.now(),
        text,
        completed: false,
        rewarded: false
      });
      input.value = '';
      saveState();
      renderTodoList();
    });

    function toggleTodo(id) {
      const item = state.todos.find(t => t.id === id);
      if (!item) return;
      item.completed = !item.completed;
      if (item.completed && !item.rewarded) {
        item.rewarded = true;
        addXP(20, 'Hoàn thành mục tiêu');
      }
      saveState();
      renderTodoList();
    }

    function deleteTodo(id) {
      state.todos = state.todos.filter(t => t.id !== id);
      saveState();
      renderTodoList();
    }

    /* ==========================================================================
5. VIEW 2: POMODORO TIMER, WEB AUDIO SOUND MIXER & QUICK NOTES
       ========================================================================== */
    let pomoMode = 'focus';
    let pomoTotalSeconds = 25 * 60;
    let pomoRemainingSeconds = 25 * 60;
    let pomoInterval = null;
    let pomoRunning = false;
    const RING_CIRCUMFERENCE = 2 * Math.PI * 104;

    function updateTimerDisplay() {
      const mins = Math.floor(pomoRemainingSeconds / 60);
      const secs = pomoRemainingSeconds % 60;
      document.getElementById('timer-display').textContent =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      const ratio = pomoTotalSeconds > 0 ? pomoRemainingSeconds / pomoTotalSeconds : 0;
      const offset = RING_CIRCUMFERENCE * (1 - ratio);
      const circle = document.getElementById('timer-progress-circle');
      circle.style.strokeDashoffset = offset;
      circle.style.stroke = pomoMode === 'focus' ? 'var(--indigo)' : 'var(--emerald)';
    }

    function setPomoMode(mode, mins) {
      pausePomodoro();
      pomoMode = mode;
      pomoTotalSeconds = mins * 60;
      pomoRemainingSeconds = pomoTotalSeconds;

      document.querySelectorAll('#pomo-modes .mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
      });

      const customRow = document.getElementById('custom-mins-row');
      customRow.classList.toggle('visible', mode === 'custom');

      document.getElementById('timer-status-text').textContent =
        mode === 'focus' ? 'Sẵn sàng tập trung' : 'Sẵn sàng thư giãn';
      updateTimerDisplay();
    }

    document.querySelectorAll('#pomo-modes .mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        const mins = mode === 'custom'
          ? Math.max(1, parseInt(document.getElementById('custom-mins-input').value, 10) || 45)
          : parseInt(btn.dataset.mins, 10);
        setPomoMode(mode, mins);
      });
    });

    document.getElementById('apply-custom-mins').addEventListener('click', () => {
      const mins = Math.min(180, Math.max(1, parseInt(document.getElementById('custom-mins-input').value, 10) || 45));
      document.getElementById('custom-mins-input').value = mins;
      setPomoMode('custom', mins);
      showToast(`Đã đặt đồng hồ tùy chỉnh ${mins} phút`, 'info');
    });

    function startPomodoro() {
      if (pomoRunning) return;
      ensureAudioContext();
      pomoRunning = true;
      document.getElementById('pomo-start-btn').innerHTML = '⏸ Tạm dừng';
      document.getElementById('timer-status-text').textContent =
        pomoMode === 'focus' ? 'Đang tập trung cao độ...' : 'Đang nghỉ ngơi tái tạo năng lượng...';

      pomoInterval = setInterval(() => {
        if (pomoRemainingSeconds > 0) {
          pomoRemainingSeconds--;
          updateTimerDisplay();
        } else {
          finishPomodoroSession();
        }
      }, 1000);
    }

    function pausePomodoro() {
      pomoRunning = false;
      clearInterval(pomoInterval);
      document.getElementById('pomo-start-btn').innerHTML = '▶ Bắt đầu';
    }

    function finishPomodoroSession() {
      pausePomodoro();
      const studiedMins = Math.max(1, Math.round(pomoTotalSeconds / 60));
      if (pomoMode === 'focus' || pomoMode === 'custom') {
        addStudyMinutes(studiedMins);
        addXP(50, `Hoàn thành phiên học ${studiedMins} phút`);
      } else {
        playRewardChime(false);
        showToast('Hết giờ nghỉ! Sẵn sàng quay lại bàn học nhé 💪', 'info');
      }
      pomoRemainingSeconds = pomoTotalSeconds;
      document.getElementById('timer-status-text').textContent = 'Phiên hoàn tất!';
      updateTimerDisplay();
    }

    document.getElementById('pomo-start-btn').addEventListener('click', () => {
      if (pomoRunning) pausePomodoro();
      else startPomodoro();
    });

    document.getElementById('pomo-reset-btn').addEventListener('click', () => {
      pausePomodoro();
      pomoRemainingSeconds = pomoTotalSeconds;
      document.getElementById('timer-status-text').textContent = 'Đã đặt lại đồng hồ';
      updateTimerDisplay();
    });

    document.getElementById('pomo-complete-now-btn').addEventListener('click', () => {
      finishPomodoroSession();
    });

    /* --- Web Audio API Procedural Sound Engine --- */
    let audioCtx = null;
    const soundChannels = {
      rain: { gain: null, initialized: false },
      waves: { gain: null, initialized: false },
      lofi: { gain: null, initialized: false }
    };

    function ensureAudioContext() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }
    }

    function playRewardChime(isLevelUp = false) {
      try {
        ensureAudioContext();
        if (!audioCtx) return;
        const now = audioCtx.currentTime;
        const notes = isLevelUp ? [523.25, 659.25, 783.99, 1046.5] : [587.33, 880];
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.09);
          gain.gain.setValueAtTime(0.001, now + i * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.12, now + i * 0.09 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.09 + 0.45);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + i * 0.09);
          osc.stop(now + i * 0.09 + 0.48);
        });
      } catch (e) {}
    }

    function initAmbientChannel(type) {
      ensureAudioContext();
      if (!audioCtx || soundChannels[type].initialized) return;

      const bufferSize = audioCtx.sampleRate * 3;
      const masterGain = audioCtx.createGain();
      masterGain.gain.value = 0;
      masterGain.connect(audioCtx.destination);

      if (type === 'rain') {
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1100;

        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();
      } else if (type === 'waves') {
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
          b6 = white * 0.115926;
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 420;

        const lfo = audioCtx.createOscillator();
        lfo.frequency.value = 0.13;
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 260;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();
        lfo.start();
      } else if (type === 'lofi') {
        const freqs = [174.61, 220.0, 261.63, 329.63];
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 650;
        filter.connect(masterGain);

        freqs.forEach((f, idx) => {
          const osc = audioCtx.createOscillator();
          osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
          osc.frequency.value = f;
          osc.detune.value = (idx - 1.5) * 6;

          const subGain = audioCtx.createGain();
          subGain.gain.value = 0.16;
          osc.connect(subGain);
          subGain.connect(filter);
          osc.start();
        });
      }

      soundChannels[type].gain = masterGain;
      soundChannels[type].initialized = true;
    }

    ['rain', 'waves', 'lofi'].forEach(type => {
      const slider = document.getElementById(`vol-${type}`);
      const label = document.getElementById(`vol-label-${type}`);
      const card = document.getElementById(`channel-${type}`);

      slider.addEventListener('input', () => {
        const val = parseInt(slider.value, 10);
        label.textContent = `${val}%`;
        card.classList.toggle('playing', val > 0);

        if (val > 0) {
          initAmbientChannel(type);
          if (audioCtx && soundChannels[type].gain) {
            const targetGain = (val / 100) * (type === 'lofi' ? 0.35 : 0.45);
            soundChannels[type].gain.gain.setTargetAtTime(targetGain, audioCtx.currentTime, 0.08);
          }
        } else if (soundChannels[type].initialized && audioCtx && soundChannels[type].gain) {
          soundChannels[type].gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.08);
        }
      });
    });

    document.getElementById('mute-all-sounds-btn').addEventListener('click', () => {
      ['rain', 'waves', 'lofi'].forEach(type => {
        const slider = document.getElementById(`vol-${type}`);
        slider.value = 0;
        slider.dispatchEvent(new Event('input'));
      });
    });

    /* --- Quick Notes Auto-Save --- */
    const notesArea = document.getElementById('quick-notes-area');
    const notesCharCount = document.getElementById('notes-char-count');
    const notesSaveStatus = document.getElementById('notes-save-status');

    notesArea.value = state.quickNotes || '';
    notesCharCount.textContent = `${notesArea.value.length} ký tự`;

    let notesSaveTimeout = null;
    notesArea.addEventListener('input', () => {
      state.quickNotes = notesArea.value;
      notesCharCount.textContent = `${notesArea.value.length} ký tự`;
      notesSaveStatus.textContent = 'Đang lưu...';
      clearTimeout(notesSaveTimeout);
      notesSaveTimeout = setTimeout(() => {
        saveState();
        notesSaveStatus.textContent = 'Đã tự động lưu';
      }, 300);
    });

    function sendNotesToAI() {
      const text = notesArea.value.trim();
      if (!text) {
        showToast('Sổ ghi chú đang trống, hãy viết vài ý trước nhé!', 'info');
        return;
      }
      document.getElementById('ai-source-text').value = text;
      switchView('ai');
      showToast('Đã chuyển ghi chú sang Trợ lý AI!', 'success');
    }

    /* ==========================================================================
6. VIEW 3: 3D FLASHCARDS ENGINE & DECK MODALS
       ========================================================================== */
    let currentCardIndex = 0;
    let isCardFlipped = false;

    function getActiveDeck() {
      let deck = state.decks.find(d => d.id === state.activeDeckId);
      if (!deck) {
        deck = state.decks[0];
        state.activeDeckId = deck.id;
      }
      return deck;
    }

    function renderFlashcardView() {
      const deck = getActiveDeck();
      const pillsContainer = document.getElementById('deck-pills-container');

      pillsContainer.innerHTML = state.decks.map(d => {
        const mastered = d.cards.filter(c => c.mastered).length;
        return `
          <button type="button" class="deck-pill ${d.id === deck.id ? 'active' : ''}" onclick="selectDeck('${d.id}')">
            <span>${escapeHTML(d.title)}</span>
            <span style="opacity:0.8; font-size:0.76rem;">(${mastered}/${d.cards.length})</span>
          </button>
        `;
      }).join('');

      document.getElementById('active-deck-title').textContent = deck.title;
      const masteredCount = deck.cards.filter(c => c.mastered).length;
      document.getElementById('active-deck-progress').textContent =
        `Đã thuộc: ${masteredCount} / ${deck.cards.length} thẻ • Chạm vào thẻ hoặc nhấn Space để lật`;

      document.getElementById('delete-deck-btn').style.display = deck.isDefault ? 'none' : 'inline-flex';

      if (deck.cards.length === 0) {
        document.getElementById('fc-counter-badge').textContent = '0 / 0';
        document.getElementById('fc-front-text').textContent = 'Bộ thẻ này chưa có thẻ nào.';
        document.getElementById('fc-back-text').textContent = 'Hãy bấm "+ Thêm thẻ vào bộ" ở góc trên để tạo thẻ mới!';
        return;
      }

      if (currentCardIndex >= deck.cards.length) currentCardIndex = 0;
      if (currentCardIndex < 0) currentCardIndex = deck.cards.length - 1;

      const card = deck.cards[currentCardIndex];
      document.getElementById('fc-counter-badge').textContent = `Thẻ ${currentCardIndex + 1} / ${deck.cards.length}`;
      document.getElementById('fc-front-text').textContent = card.front;
      document.getElementById('fc-back-text').textContent = card.back;

      const tagFront = document.getElementById('fc-status-tag');
      const tagBack = document.getElementById('fc-status-tag-back');
      if (card.mastered) {
        tagFront.className = tagBack.className = 'badge badge-emerald';
        tagFront.textContent = tagBack.textContent = '✓ Đã thuộc';
      } else {
        tagFront.className = tagBack.className = 'badge badge-amber';
        tagFront.textContent = tagBack.textContent = 'Đang học';
      }

      document.getElementById('flashcard-inner').classList.toggle('flipped', isCardFlipped);
    }

    function selectDeck(deckId) {
      state.activeDeckId = deckId;
      currentCardIndex = 0;
      isCardFlipped = false;
      saveState();
      renderFlashcardView();
    }

    function flipFlashcard() {
      isCardFlipped = !isCardFlipped;
      document.getElementById('flashcard-inner').classList.toggle('flipped', isCardFlipped);
    }

    function nextFlashcard() {
      const deck = getActiveDeck();
      if (!deck.cards.length) return;
      isCardFlipped = false;
      currentCardIndex = (currentCardIndex + 1) % deck.cards.length;
      renderFlashcardView();
    }

    function prevFlashcard() {
      const deck = getActiveDeck();
      if (!deck.cards.length) return;
      isCardFlipped = false;
      currentCardIndex = (currentCardIndex - 1 + deck.cards.length) % deck.cards.length;
      renderFlashcardView();
    }

    document.getElementById('flashcard-stage').addEventListener('click', flipFlashcard);
    document.getElementById('fc-flip-btn').addEventListener('click', flipFlashcard);
    document.getElementById('fc-next-btn').addEventListener('click', nextFlashcard);
    document.getElementById('fc-prev-btn').addEventListener('click', prevFlashcard);

    document.getElementById('fc-shuffle-btn').addEventListener('click', () => {
      const deck = getActiveDeck();
      for (let i = deck.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
      }
      currentCardIndex = 0;
      isCardFlipped = false;
      saveState();
      renderFlashcardView();
      showToast('🔀 Đã xáo trộn thứ tự các thẻ!', 'info');
    });

    document.getElementById('fc-need-review-btn').addEventListener('click', () => {
      const deck = getActiveDeck();
      if (!deck.cards.length) return;
      deck.cards[currentCardIndex].mastered = false;
      saveState();
      updateGamificationUI();
      showToast('Đã đánh dấu cần ôn lại thẻ này', 'info');
      nextFlashcard();
    });

    document.getElementById('fc-mastered-btn').addEventListener('click', () => {
      const deck = getActiveDeck();
      if (!deck.cards.length) return;
      const card = deck.cards[currentCardIndex];
      if (!card.mastered) {
        card.mastered = true;
        addXP(10, 'Thuộc thẻ ghi nhớ');
      } else {
        showToast('Thẻ này đã thuộc! Chuyển sang thẻ tiếp theo.', 'success');
      }
      saveState();
      updateGamificationUI();
      nextFlashcard();
    });

    document.getElementById('delete-deck-btn').addEventListener('click', () => {
      const deck = getActiveDeck();
      if (deck.isDefault) return;
      state.decks = state.decks.filter(d => d.id !== deck.id);
      state.activeDeckId = state.decks[0].id;
      currentCardIndex = 0;
      saveState();
      renderFlashcardView();
      updateGamificationUI();
      showToast(`Đã xóa bộ thẻ "${deck.title}"`, 'info');
    });

    document.addEventListener('keydown', (e) => {
      const activeEl = document.activeElement;
      const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT');
      if (isTyping) return;

      if (e.code === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(m => closeModal(m.id));
        return;
      }

      const fcViewActive = document.getElementById('view-flashcards').classList.contains('active');
      if (!fcViewActive) return;

      if (e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.code === 'ArrowRight') {
        nextFlashcard();
      } else if (e.code === 'ArrowLeft') {
        prevFlashcard();
      }
    });

    /* --- Modal Handlers for Creating Decks & Adding Cards --- */
    function syncModalScrollLock() {
      const hasOpen = document.querySelector('.modal-backdrop.open');
      document.body.classList.toggle('modal-open', Boolean(hasOpen));
    }

    function openModal(id) {
      document.getElementById(id).classList.add('open');
      syncModalScrollLock();
    }

    function closeModal(id) {
      document.getElementById(id).classList.remove('open');
      syncModalScrollLock();
    }

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          closeModal(backdrop.id);
        }
      });
    });

    function addCardPairInputRow(frontVal = '', backVal = '') {
      const container = document.getElementById('new-deck-pairs-container');
      const row = document.createElement('div');
      row.className = 'card-pair-row';
      row.innerHTML = `
        <input type="text" class="input pair-front" placeholder="Mặt trước (Câu hỏi)" value="${escapeHTML(frontVal)}" required />
        <input type="text" class="input pair-back" placeholder="Mặt sau (Đáp án)" value="${escapeHTML(backVal)}" required />
        <button type="button" class="btn btn-danger-soft btn-sm" onclick="this.parentElement.remove()" title="Xóa dòng">✕</button>
      `;
      container.appendChild(row);
    }

    document.getElementById('open-create-deck-modal-btn').addEventListener('click', () => {
      document.getElementById('new-deck-name').value = '';
      const container = document.getElementById('new-deck-pairs-container');
      container.innerHTML = '';
      addCardPairInputRow();
      addCardPairInputRow();
      openModal('modal-create-deck');
    });

    document.getElementById('add-pair-row-btn').addEventListener('click', () => {
      addCardPairInputRow();
    });

    document.getElementById('create-deck-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('new-deck-name').value.trim();
      const fronts = document.querySelectorAll('#new-deck-pairs-container .pair-front');
      const backs = document.querySelectorAll('#new-deck-pairs-container .pair-back');
      const cards = [];

      fronts.forEach((fInput, idx) => {
        const f = fInput.value.trim();
        const b = backs[idx].value.trim();
        if (f && b) {
          cards.push({ id: 'c-' + Date.now() + '-' + idx, front: f, back: b, mastered: false });
        }
      });

      if (!title || cards.length === 0) {
        showToast('Vui lòng nhập tên bộ thẻ và ít nhất 1 cặp thẻ!', 'info');
        return;
      }

      const newDeck = {
        id: 'deck-' + Date.now(),
        title,
        isDefault: false,
        cards
      };
      state.decks.push(newDeck);
      state.activeDeckId = newDeck.id;
      currentCardIndex = 0;
      isCardFlipped = false;
      saveState();
      closeModal('modal-create-deck');
      renderFlashcardView();
      updateGamificationUI();
      addXP(15, 'Tạo bộ thẻ mới');
    });

    document.getElementById('open-add-card-modal-btn').addEventListener('click', () => {
      document.getElementById('single-card-front').value = '';
      document.getElementById('single-card-back').value = '';
      openModal('modal-add-card');
    });

    document.getElementById('add-single-card-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const front = document.getElementById('single-card-front').value.trim();
      const back = document.getElementById('single-card-back').value.trim();
      if (!front || !back) return;

      const deck = getActiveDeck();
      deck.cards.push({
        id: 'card-' + Date.now(),
        front,
        back,
        mastered: false
      });
      currentCardIndex = deck.cards.length - 1;
      isCardFlipped = false;
      saveState();
      closeModal('modal-add-card');
      renderFlashcardView();
      updateGamificationUI();
      showToast('Đã thêm thẻ mới vào bộ!', 'success');
    });

    /* ==========================================================================
7. VIEW 4: SPEED QUIZ ARENA (15s TIMER + COMBO MULTIPLIER)
       ========================================================================== */
    let quizQuestions = [];
    let quizIndex = 0;
    let quizScore = 0;
    let quizCorrectCount = 0;
    let quizCombo = 0;
    let quizMaxCombo = 1;
    let quizEarnedXP = 0;
    let quizMissedItems = [];
    let quizTimerInterval = null;
    let quizTimeLeft = 15.0;

    function populateQuizDeckSelect() {
      const sel = document.getElementById('quiz-deck-select');
      const allCardsCount = state.decks.reduce((acc, d) => acc + d.cards.length, 0);
      sel.innerHTML = `<option value="all">🌟 Tổng hợp tất cả các môn (${allCardsCount} thẻ)</option>` +
        state.decks.map(d => `<option value="${d.id}">${escapeHTML(d.title)} (${d.cards.length} thẻ)</option>`).join('');
    }

    function buildQuizQuestions(deckId, requestedCount) {
      const allCards = state.decks.flatMap(d => d.cards);
      const sourceCards = deckId === 'all'
        ? [...allCards]
        : [...(state.decks.find(d => d.id === deckId)?.cards || allCards)];

      for (let i = sourceCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sourceCards[i], sourceCards[j]] = [sourceCards[j], sourceCards[i]];
      }

      const selected = sourceCards.slice(0, Math.min(requestedCount, sourceCards.length));
      const fallbackDistractors = [
        'Không có phương án nào chính xác trong các lựa chọn trên.',
        'Định luật bảo toàn năng lượng và động lượng.',
        'Độ phức tạp thuật toán tuyến tính O(n).',
        'Cấu trúc câu điều kiện loại 3 trong tiếng Anh.'
      ];

      return selected.map(card => {
        const correctAnswer = card.back.split('\n')[0];
        const pool = allCards
          .filter(c => c.id !== card.id)
          .map(c => c.back.split('\n')[0])
          .filter(txt => txt !== correctAnswer);

        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        const distractors = [];
        for (const item of pool) {
          if (!distractors.includes(item) && distractors.length < 3) {
            distractors.push(item);
          }
        }
        for (const fb of fallbackDistractors) {
          if (!distractors.includes(fb) && fb !== correctAnswer && distractors.length < 3) {
            distractors.push(fb);
          }
        }

        const options = [correctAnswer, ...distractors];
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }

        return {
          question: card.front,
          correctAnswer,
          options
        };
      });
    }

    function startQuiz() {
      const deckId = document.getElementById('quiz-deck-select').value;
      const count = parseInt(document.getElementById('quiz-count-select').value, 10) || 8;
      quizQuestions = buildQuizQuestions(deckId, count);

      if (quizQuestions.length === 0) {
        showToast('Chưa có câu hỏi nào trong bộ thẻ này!', 'info');
        return;
      }

      quizIndex = 0;
      quizScore = 0;
      quizCorrectCount = 0;
      quizCombo = 0;
      quizMaxCombo = 1;
      quizEarnedXP = 0;
      quizMissedItems = [];

      document.getElementById('quiz-setup-panel').style.display = 'none';
      document.getElementById('quiz-result-panel').style.display = 'none';
      document.getElementById('quiz-play-panel').style.display = 'block';

      renderQuizQuestion();
    }

    function renderQuizQuestion() {
      clearInterval(quizTimerInterval);
      const q = quizQuestions[quizIndex];
      const multiplier = quizCombo >= 4 ? 3 : quizCombo >= 2 ? 2 : 1;

      document.getElementById('quiz-progress-label').textContent = `Câu ${quizIndex + 1} / ${quizQuestions.length}`;
      document.getElementById('quiz-score-label').textContent = `Điểm: ${quizScore}`;

      const comboBadge = document.getElementById('quiz-combo-badge');
      comboBadge.textContent = `🔥 Combo x${multiplier} (${quizCombo} đúng liên tiếp)`;
      comboBadge.classList.toggle('hot', multiplier > 1);

      document.getElementById('quiz-question-text').textContent = q.question;

      const letters = ['A', 'B', 'C', 'D'];
      const grid = document.getElementById('quiz-options-grid');
      grid.innerHTML = q.options.map((opt, idx) => `
        <button type="button" class="quiz-option" data-opt-idx="${idx}">
          <span class="opt-letter">${letters[idx]}</span>
          <span>${escapeHTML(opt)}</span>
        </button>
      `).join('');

      grid.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleQuizAnswer(parseInt(btn.dataset.optIdx, 10)));
      });

      quizTimeLeft = 15.0;
      updateQuizTimerBar();
      quizTimerInterval = setInterval(() => {
        quizTimeLeft -= 0.1;
        if (quizTimeLeft <= 0) {
          quizTimeLeft = 0;
          updateQuizTimerBar();
          handleQuizAnswer(-1);
        } else {
          updateQuizTimerBar();
        }
      }, 100);
    }

    function updateQuizTimerBar() {
      document.getElementById('quiz-time-label').textContent = `⏳ ${quizTimeLeft.toFixed(1)}s`;
      const pct = Math.max(0, (quizTimeLeft / 15.0) * 100);
      document.getElementById('quiz-timer-fill').style.width = `${pct}%`;
    }

    function handleQuizAnswer(selectedIdx) {
      clearInterval(quizTimerInterval);
      const q = quizQuestions[quizIndex];
      const optionBtns = document.querySelectorAll('#quiz-options-grid .quiz-option');
      optionBtns.forEach(b => (b.disabled = true));

      const selectedText = selectedIdx >= 0 ? q.options[selectedIdx] : null;
      const isCorrect = selectedText === q.correctAnswer;

      optionBtns.forEach((btn, idx) => {
        if (q.options[idx] === q.correctAnswer) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx && !isCorrect) {
          btn.classList.add('wrong');
        }
      });

      if (isCorrect) {
        quizCorrectCount++;
        quizCombo++;
        const multiplier = quizCombo >= 4 ? 3 : quizCombo >= 2 ? 2 : 1;
        if (multiplier > quizMaxCombo) quizMaxCombo = multiplier;

        const timeBonus = Math.round(quizTimeLeft * 5);
        const gainedScore = (100 + timeBonus) * multiplier;
        const gainedXP = 10 * multiplier;

        quizScore += gainedScore;
        quizEarnedXP += gainedXP;
        playRewardChime(false);
      } else {
        quizCombo = 0;
        quizMissedItems.push({
          question: q.question,
          correctAnswer: q.correctAnswer
        });
      }

      setTimeout(() => {
        quizIndex++;
        if (quizIndex < quizQuestions.length) {
          renderQuizQuestion();
        } else {
          showQuizSummary();
        }
      }, 1150);
    }

    function showQuizSummary() {
      document.getElementById('quiz-play-panel').style.display = 'none';
      document.getElementById('quiz-result-panel').style.display = 'block';

      const accuracy = Math.round((quizCorrectCount / quizQuestions.length) * 100);
      document.getElementById('res-score').textContent = quizScore;
      document.getElementById('res-xp').textContent = `+${quizEarnedXP} XP`;
      document.getElementById('res-accuracy').textContent = `${accuracy}%`;
      document.getElementById('res-max-combo').textContent = `x${quizMaxCombo}`;

      if (quizEarnedXP > 0) {
        addXP(quizEarnedXP, `Đấu trường Quiz (${accuracy}% chính xác)`);
      }

      const reviewList = document.getElementById('quiz-review-list');
      if (quizMissedItems.length === 0) {
        reviewList.innerHTML = `<div style="padding:14px; background:var(--emerald-soft); color:var(--emerald); border-radius:12px; font-weight:700; text-align:center;">🎉 Xuất sắc! Bạn trả lời đúng 100% tất cả các câu hỏi!</div>`;
      } else {
        reviewList.innerHTML = `<div style="font-weight:700; font-size:0.9rem; margin-bottom:4px;">📌 Các câu cần ghi nhớ thêm:</div>` +
          quizMissedItems.map(item => `
            <div style="padding:10px 14px; background:var(--bg-surface-2); border:1px solid var(--border-color); border-radius:10px; font-size:0.86rem;">
              <div style="font-weight:700; margin-bottom:3px;">${escapeHTML(item.question)}</div>
              <div style="color:var(--emerald); font-weight:600;">✓ Đáp án đúng: ${escapeHTML(item.correctAnswer)}</div>
            </div>
          `).join('');
      }
    }

    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('quiz-retry-btn').addEventListener('click', startQuiz);
    document.getElementById('quiz-back-setup-btn').addEventListener('click', () => {
      document.getElementById('quiz-result-panel').style.display = 'none';
      document.getElementById('quiz-setup-panel').style.display = 'block';
    });

    /* ==========================================================================
8. VIEW 5: AI STUDY BUDDY (GEMINI API WITH EXPONENTIAL BACKOFF)
       ========================================================================== */
    async function callGeminiWithBackoff(payload, retries = 4) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      let delay = 1000;

      for (let attempt = 0; attempt <= retries; attempt++) {
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          return await response.json();
        } catch (err) {
          if (attempt === retries) {
            throw err;
          }
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    }

    /* --- Feature A: Auto-generate Flashcards from Lesson Text --- */
    let lastGeneratedDeckId = null;

    document.getElementById('ai-fill-sample-btn').addEventListener('click', () => {
      document.getElementById('ai-deck-title-input').value = 'Sinh học - Quang hợp ở thực vật';
      document.getElementById('ai-source-text').value =
        'Quang hợp là quá trình thực vật sử dụng năng lượng ánh sáng mặt trời (được hấp thụ bởi diệp lục lục lạp) để tổng hợp chất hữu cơ (glucôzơ C6H12O6) và giải phóng khí ôxi (O2) từ khí cacbonic (CO2) và nước (H2O).\n' +
        'Phương trình tổng quát: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O.\n' +
        'Quang hợp gồm 2 pha: Pha sáng diễn ra tại màng tilacôit cần ánh sáng để tạo ATP, NADPH và giải phóng O2; Pha tối (chu trình Calvin) diễn ra ở chất nền strôma không cần ánh sáng trực tiếp, sử dụng ATP và NADPH để khử CO2 thành đường glucôzơ.';
    });

    document.getElementById('ai-generate-cards-btn').addEventListener('click', async () => {
      const sourceText = document.getElementById('ai-source-text').value.trim();
      const customTitle = document.getElementById('ai-deck-title-input').value.trim();

      if (sourceText.length < 20) {
        showToast('Vui lòng nhập đoạn văn bản bài học dài hơn một chút để AI phân tích!', 'info');
        return;
      }

      const btn = document.getElementById('ai-generate-cards-btn');
      const originalHTML = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner"></span> AI đang phân tích & tạo thẻ...`;

      try {
        const payload = {
          contents: [{
            parts: [{
              text: `Hãy trích xuất các kiến thức trọng tâm từ đoạn bài học tiếng Việt sau đây và tạo thành 4 đến 6 thẻ ghi nhớ (Flashcards) chất lượng cao, ngắn gọn, súc tích bằng tiếng Việt.\n\nNội dung bài học:\n${sourceText}`
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                deckTitle: { type: "STRING" },
                cards: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      front: { type: "STRING" },
                      back: { type: "STRING" }
                    },
                    required: ["front", "back"]
                  }
                }
              },
              required: ["deckTitle", "cards"]
            }
          }
        };

        const result = await callGeminiWithBackoff(payload);
        const rawJson = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawJson) throw new Error('Không nhận được dữ liệu thẻ từ AI');

        const parsed = JSON.parse(rawJson);
        const finalTitle = customTitle || parsed.deckTitle || 'Bộ thẻ AI tạo tự động';
        const formattedCards = (parsed.cards || []).map((c, idx) => ({
          id: `ai-card-${Date.now()}-${idx}`,
          front: c.front,
          back: c.back,
          mastered: false
        }));

        if (formattedCards.length === 0) throw new Error('Danh sách thẻ rỗng');

        const newDeck = {
          id: `deck-ai-${Date.now()}`,
          title: `✨ ${finalTitle}`,
          isDefault: false,
          cards: formattedCards
        };

        state.decks.push(newDeck);
        lastGeneratedDeckId = newDeck.id;
        saveState();
        updateGamificationUI();

        document.getElementById('ai-gen-summary').textContent =
          `🎉 Đã tạo bộ "${newDeck.title}" gồm ${formattedCards.length} thẻ ghi nhớ!`;
        document.getElementById('ai-gen-result-box').style.display = 'block';
        addXP(30, 'Tạo bộ thẻ bằng AI');
      } catch (error) {
        showToast('Không thể kết nối AI lúc này. Vui lòng thử lại sau giây lát!', 'info');
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
      }
    });

    document.getElementById('ai-jump-to-deck-btn').addEventListener('click', () => {
      if (lastGeneratedDeckId) {
        selectDeck(lastGeneratedDeckId);
        switchView('flashcards');
      }
    });

    /* --- Feature B: AI Tutor Chat --- */
    function renderChatHistory() {
      const win = document.getElementById('ai-chat-window');
      win.innerHTML = state.chatHistory.map(msg => `
        <div class="chat-msg ${msg.role === 'user' ? 'user' : 'ai'}">${escapeHTML(msg.text)}</div>
      `).join('');
      win.scrollTop = win.scrollHeight;
    }

    async function sendChatMessage(userText) {
      const text = userText.trim();
      if (!text) return;

      state.chatHistory.push({ role: 'user', text });
      saveState();
      renderChatHistory();

      const sendBtn = document.getElementById('ai-chat-send-btn');
      sendBtn.disabled = true;

      const win = document.getElementById('ai-chat-window');
      const typingDiv = document.createElement('div');
      typingDiv.className = 'chat-msg ai';
      typingDiv.textContent = 'StudyBot đang suy nghĩ... ✍️';
      win.appendChild(typingDiv);
      win.scrollTop = win.scrollHeight;

      try {
        const recentHistory = state.chatHistory.slice(-6).map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        }));

        const systemPrompt =
          'Bạn là StudyBot, một gia sư AI thân thiện, truyền cảm hứng và thông minh dành cho học sinh, sinh viên Việt Nam trên ứng dụng StudyFlow. ' +
          'Hãy trả lời bằng tiếng Việt rõ ràng, mạch lạc, chia ý dễ đọc, giải thích từng bước khi gặp bài tập hoặc khái niệm khó. ' +
          `Nếu người dùng hỏi về ghi chú của họ, đây là nội dung Sổ ghi chú nhanh hiện tại của người dùng:\n"""${state.quickNotes || '(Trống)'}"""`;

        const payload = {
          contents: recentHistory,
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          }
        };

        const result = await callGeminiWithBackoff(payload);
        const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text ||
          'Xin lỗi, mình chưa thể xử lý câu hỏi này. Bạn thử diễn đạt lại nhé!';

        typingDiv.remove();
        state.chatHistory.push({ role: 'ai', text: reply });
        saveState();
        renderChatHistory();
      } catch (err) {
        typingDiv.remove();
        state.chatHistory.push({
          role: 'ai',
          text: '⚠️ Hiện tại kết nối tới máy chủ AI đang bận. Bạn hãy thử gửi lại câu hỏi sau ít giây nhé!'
        });
        saveState();
        renderChatHistory();
      } finally {
        sendBtn.disabled = false;
      }
    }

    document.getElementById('ai-chat-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('ai-chat-input');
      const text = input.value;
      input.value = '';
      sendChatMessage(text);
    });

    document.querySelectorAll('.prompt-chips .prompt-chip[data-prompt]').forEach(chip => {
      chip.addEventListener('click', () => {
        sendChatMessage(chip.dataset.prompt);
      });
    });

    document.getElementById('ai-clear-chat-btn').addEventListener('click', () => {
      state.chatHistory = [
        {
          role: 'ai',
          text: 'Đã làm mới cuộc trò chuyện! Bạn muốn tìm hiểu chủ đề học tập nào tiếp theo? 🚀'
        }
      ];
      saveState();
      renderChatHistory();
    });

    /* ==========================================================================
9. APP INITIALIZATION ON WINDOW LOAD
       ========================================================================== */
    window.addEventListener('DOMContentLoaded', () => {
      applyTheme(state.theme);
      updateGreeting();
      updateGamificationUI();
      renderWeeklyChart();
      renderTodoList();
      updateTimerDisplay();
      renderFlashcardView();
      populateQuizDeckSelect();
      renderChatHistory();
    });
  </script>
</body>
</html>
