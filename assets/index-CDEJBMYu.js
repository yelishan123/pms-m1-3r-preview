(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();function Ke(){if(document.getElementById("pms-m1-styles"))return;const t=document.createElement("style");t.id="pms-m1-styles",t.textContent=We,document.head.appendChild(t)}const We=`
/* ============================================================
 * 0. App Shell · M1-New.3R 四栏布局
 * ============================================================ */
.pms-app-m1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--bg-0);
  overflow: hidden;
}
.pms-app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  min-height: 0;
}
/* 内容区（任务池 + 时间轴之间） */
.pms-content-area {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ============================================================
 * 1. 顶部栏 · .pms-topbar
 * ============================================================ */
.pms-topbar {
  grid-area: topbar;
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr auto;
  align-items: center;
  height: var(--topbar-h);
  background: var(--bg-1);
  border-bottom: 1px solid var(--border);
  z-index: 10;
}

/* 1.1 品牌区 · .pms-brand-bar */
.pms-brand-bar {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 0 var(--sp-4);
  height: 100%;
  border-right: 1px solid var(--border);
}
.pms-brand-bar-mark {
  width: 24px; height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.pms-brand-bar-mark svg { width: 24px; height: 24px; display: block; }
.pms-brand-bar-name {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-1);
  white-space: nowrap;
}

/* 1.2 全局搜索 · .pms-global-search */
.pms-global-search {
  justify-self: center;
  width: 100%;
  max-width: 420px;
  position: relative;
}
.pms-global-search-input {
  width: 100%;
  height: 32px;
  padding: 0 var(--sp-3) 0 32px;
  background: var(--bg-2);
  border: 1px solid transparent;
  border-radius: var(--r-2);
  font-size: var(--fs-body-sm);
  color: var(--text-1);
  outline: none;
  transition: background var(--dur-hover) var(--ease),
              border-color var(--dur-hover) var(--ease);
}
.pms-global-search-input::placeholder { color: var(--text-3); }
.pms-global-search-input:hover { background: var(--bg-3); }
.pms-global-search-input:focus {
  background: var(--bg-0);
  border-color: var(--accent);
  box-shadow: var(--focus-ring);
}
.pms-global-search-icon {
  position: absolute;
  left: var(--sp-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-3);
  pointer-events: none;
}
.pms-global-search-icon svg { width: 14px; height: 14px; display: block; }
.pms-global-search-kbd {
  position: absolute;
  right: var(--sp-2);
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-mono);
  font-size: var(--fs-meta);
  color: var(--text-3);
  background: var(--bg-1);
  border: 1px solid var(--border);
  border-radius: var(--r-1);
  padding: 1px var(--sp-1);
  pointer-events: none;
}

/* 1.3 工具按钮 · .pms-topbar-tool-button */
.pms-topbar-tools {
  display: flex;
  align-items: center;
  gap: var(--sp-1);
  padding: 0 var(--sp-3);
}
.pms-topbar-tool-button {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 0 var(--sp-3);
  height: 32px;
  border-radius: var(--r-2);
  font-size: var(--fs-body-sm);
  font-weight: 500;
  color: var(--text-2);
  transition: background var(--dur-hover) var(--ease),
              color var(--dur-hover) var(--ease);
}
.pms-topbar-tool-button:hover {
  background: var(--bg-2);
  color: var(--text-1);
}
.pms-topbar-tool-button:active {
  background: var(--bg-3);
}
.pms-topbar-tool-button svg { width: 14px; height: 14px; flex-shrink: 0; }

/* ============================================================
 * 2. 左侧导航 · .pms-sidebar
 * ============================================================ */
.pms-sidebar {
  grid-area: sidebar;
  background: var(--bg-1);
  border-right: 1px solid var(--border);
  padding: var(--sp-3) 0;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  overflow-y: auto;
}

/* 隐式分组：用 group label 间隔，不强容器 */
.pms-sidebar-nav-group {
  padding: 0 var(--sp-3);
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.pms-sidebar-group-label {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: var(--sp-2) var(--sp-3) var(--sp-1);
}

/* 左侧导航项 · .pms-sidebar-nav-item */
.pms-sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 0 var(--sp-3);
  height: var(--row-h);
  border-radius: var(--r-2);
  font-size: var(--fs-body);
  font-weight: 400;
  color: var(--text-2);
  cursor: pointer;
  user-select: none;
  transition: background var(--dur-hover) var(--ease),
              color var(--dur-hover) var(--ease);
}
.pms-sidebar-nav-item:hover {
  background: var(--bg-2);
  color: var(--text-1);
}
.pms-sidebar-nav-item.is-active {
  background: var(--accent-a12);
  color: var(--accent);
  font-weight: 600;
}
.pms-sidebar-nav-item-icon {
  width: 16px; height: 16px;
  flex-shrink: 0;
  color: var(--text-3);
  display: flex;
  align-items: center;
}
.pms-sidebar-nav-item.is-active .pms-sidebar-nav-item-icon { color: var(--accent); }
.pms-sidebar-nav-item-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pms-sidebar-nav-item-count {
  font-size: var(--fs-meta);
  color: var(--text-3);
  font-variant-numeric: tabular-nums;
  min-width: 18px;
  text-align: right;
}
/* 收件箱角标用 accent-soft；不强警告色 */
.pms-sidebar-nav-item-count.is-emphasis {
  background: var(--accent-a12);
  color: var(--accent);
  font-weight: 600;
  padding: 1px 6px;
  border-radius: var(--r-pill);
  min-width: 0;
}

/* 项目列表项 · .pms-project-list-item */
.pms-project-list-item {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: 0 var(--sp-3);
  height: var(--row-h);
  border-radius: var(--r-2);
  font-size: var(--fs-body);
  color: var(--text-2);
  cursor: pointer;
  transition: background var(--dur-hover) var(--ease);
}
.pms-project-list-item:hover {
  background: var(--bg-2);
  color: var(--text-1);
}
.pms-project-list-item-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.pms-project-list-item-name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pms-project-list-item-count {
  font-size: var(--fs-meta);
  color: var(--text-3);
  font-variant-numeric: tabular-nums;
}
.pms-sidebar-view-all {
  padding: var(--sp-1) var(--sp-3);
  font-size: var(--fs-meta);
  color: var(--text-3);
  cursor: pointer;
  height: 28px;
  display: flex;
  align-items: center;
}
.pms-sidebar-view-all:hover { color: var(--accent); }

/* KR 卡片占位 · 底部常驻 */
.pms-sidebar-kr-card {
  margin: auto var(--sp-3) var(--sp-3);
  padding: var(--sp-3);
  background: var(--bg-0);
  border: 1px solid var(--border);
  border-radius: var(--r-3);
  font-size: var(--fs-meta);
  color: var(--text-2);
}
.pms-sidebar-kr-card-title {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--sp-1);
}
.pms-sidebar-kr-card-body {
  color: var(--text-2);
  line-height: 1.5;
}

/* ============================================================
 * 3. 主内容区 · .pms-main-stage
 * ============================================================ */
.pms-main-stage {
  grid-area: stage;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  background: var(--bg-0);
}

/* 页面标题区 · .pms-stage-header */
.pms-stage-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--sp-5) var(--sp-6) var(--sp-4);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
  gap: var(--sp-4);
}
.pms-stage-header-titles { min-width: 0; }
.pms-stage-header-eyebrow {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--sp-1);
}
.pms-stage-header-title {
  font-size: var(--fs-page-title);
  font-weight: 600;
  color: var(--text-1);
  letter-spacing: -0.015em;
  line-height: 1.2;
}
.pms-stage-header-sub {
  margin-top: var(--sp-1);
  font-size: var(--fs-body-sm);
  color: var(--text-3);
}
.pms-stage-header-actions {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  flex-shrink: 0;
}
.pms-stage-progress-bar {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: var(--fs-meta);
  color: var(--text-2);
}
.pms-stage-progress-track {
  width: 90px;
  height: 4px;
  background: var(--bg-2);
  border-radius: var(--r-pill);
  overflow: hidden;
}
.pms-stage-progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: var(--r-pill);
  transition: width var(--dur-show) var(--ease);
}

/* 分段控件 · .pms-segmented-control */
.pms-segmented-control {
  display: inline-flex;
  background: var(--bg-2);
  border-radius: var(--r-2);
  padding: 2px;
  gap: 2px;
}
.pms-segmented-control-item {
  padding: 4px var(--sp-3);
  font-size: var(--fs-body-sm);
  color: var(--text-2);
  border-radius: 6px;
  cursor: pointer;
  transition: background var(--dur-hover) var(--ease),
              color var(--dur-hover) var(--ease);
}
.pms-segmented-control-item:hover { color: var(--text-1); }
.pms-segmented-control-item.is-active {
  background: var(--bg-0);
  color: var(--text-1);
  font-weight: 500;
  box-shadow: var(--elev-1);
}

/* Stage body */
.pms-stage-body {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 280px;
  min-height: 0;
  overflow: hidden;
}
/* @media (max-width: 1280px) 任务池折叠 — 搬到本文件末尾，避免被后续基础规则覆盖。 */

/* 时间轴占位 · .pms-timeline */
.pms-timeline {
  overflow-y: auto;
  padding: var(--sp-3) var(--sp-6);
  font-variant-numeric: tabular-nums;
}
.pms-timeline-row {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: var(--sp-3);
  padding: var(--sp-1) 0;
  border-top: 1px dashed transparent;
  min-height: 36px;
  align-items: start;
}
.pms-timeline-row:hover { border-top-color: var(--hairline); }
.pms-timeline-row-time {
  font-family: var(--font-mono);
  font-size: var(--fs-time);
  color: var(--text-3);
  padding-top: 2px;
}
.pms-timeline-row-slot {
  position: relative;
  min-height: 24px;
}

/* 时间块占位 · .pms-timeblock-card */
.pms-timeblock-card {
  background: var(--bg-0);
  border: 1px solid var(--hairline);
  border-left: 3px solid var(--accent);
  border-radius: var(--r-3);
  padding: var(--sp-2) var(--sp-3);
  margin-bottom: var(--sp-1);
  box-shadow: var(--elev-1);
  cursor: pointer;
  transition: box-shadow var(--dur-hover) var(--ease),
              border-color var(--dur-hover) var(--ease);
}
.pms-timeblock-card:hover {
  border-color: var(--accent);
  box-shadow: var(--elev-2);
}
.pms-timeblock-card.is-running {
  border: 1.5px solid var(--accent);
  box-shadow: 0 0 0 4px var(--accent-a08), var(--elev-1);
}
.pms-timeblock-card.is-done {
  opacity: 0.5;
  text-decoration: line-through;
}
.pms-timeblock-card.is-routine {
  background: var(--accent-a04);
  border-left-color: var(--text-3);
}
.pms-timeblock-card.is-selected {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-a24), var(--elev-1);
}
.pms-timeblock-card-title {
  font-size: var(--fs-card-title);
  font-weight: 500;
  color: var(--text-1);
  line-height: 1.35;
}
.pms-timeblock-card-time {
  font-family: var(--font-mono);
  font-size: var(--fs-meta);
  color: var(--text-3);
  margin-top: 2px;
  letter-spacing: 0.02em;
}

/* 当前时间线（now-indicator）占位 */
.pms-now-line {
  position: relative;
  height: 1.5px;
  background: var(--accent);
  margin: var(--sp-2) 0;
}
.pms-now-line::before {
  content: "";
  position: absolute;
  left: -4px; top: -3px;
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
}

/* 任务池 · .pms-stage-pool */
.pms-stage-pool {
  border-left: 1px solid var(--border);
  background: var(--bg-1);
  padding: var(--sp-4) var(--sp-4);
  overflow-y: auto;
}
.pms-stage-pool-title {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--sp-3);
}

/* ============================================================
 * 4. 右侧栏 · .pms-right-sidebar
 * ============================================================ */
.pms-right-sidebar {
  grid-area: right;
  background: var(--bg-1);
  border-left: 1px solid var(--border);
  padding: var(--sp-4);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}
.pms-right-section {
  background: var(--bg-0);
  border: 1px solid var(--border);
  border-radius: var(--r-3);
  padding: var(--sp-3) var(--sp-4);
}
.pms-right-section-title {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--sp-2);
}

/* 正在进行 · .pms-current-running-card */
.pms-current-running-card .pms-current-task-title {
  font-size: var(--fs-card-title);
  font-weight: 600;
  color: var(--text-1);
  margin-bottom: 2px;
}
.pms-current-running-card .pms-current-task-time {
  font-family: var(--font-mono);
  font-size: var(--fs-meta);
  color: var(--accent);
}
.pms-current-running-card .pms-current-task-elapsed {
  font-family: var(--font-mono);
  font-size: var(--fs-data-xl);
  font-weight: 600;
  color: var(--text-1);
  margin-top: var(--sp-2);
  letter-spacing: -0.01em;
}

/* 今日进度 · .pms-today-progress */
.pms-today-progress {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
}
.pms-today-progress-ring {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}
.pms-today-progress-text .pms-progress-ratio {
  font-family: var(--font-mono);
  font-size: var(--fs-section);
  font-weight: 600;
  color: var(--text-1);
}
.pms-today-progress-text .pms-progress-label {
  font-size: var(--fs-meta);
  color: var(--text-3);
}

/* 今日焦点 · .pms-today-focus-card */
.pms-today-focus-card-list {
  list-style: none;
}
.pms-today-focus-card-list li {
  display: flex;
  gap: var(--sp-2);
  padding: var(--sp-1) 0;
  font-size: var(--fs-body-sm);
  color: var(--text-1);
}
.pms-today-focus-card-list li::before {
  content: "·";
  color: var(--accent);
  font-weight: 700;
  flex-shrink: 0;
}

/* 高优任务列表 · .pms-priority-task-list */
.pms-priority-task-list { display: flex; flex-direction: column; gap: var(--sp-2); }

/* 快速捕捉 · .pms-quick-capture-input */
.pms-quick-capture-input {
  width: 100%;
  height: 32px;
  padding: 0 var(--sp-3);
  background: var(--bg-1);
  border: 1px solid var(--border);
  border-radius: var(--r-2);
  font-size: var(--fs-body-sm);
  color: var(--text-1);
  outline: none;
  transition: border-color var(--dur-hover) var(--ease);
}
.pms-quick-capture-input::placeholder { color: var(--text-3); }
.pms-quick-capture-input:focus {
  border-color: var(--accent);
  box-shadow: var(--focus-ring);
}

/* ============================================================
 * 5. 任务详情抽屉 · .pms-task-detail-drawer
 *    覆盖右栏；抽屉打开时 .pms-app-m1.is-detail-open
 * ============================================================ */
.pms-scrim {
  position: fixed;
  inset: 0;
  background: rgba(20, 28, 40, 0.18);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-show) var(--ease);
  z-index: 90;
}
.pms-app-m1.is-detail-open .pms-scrim {
  opacity: 1;
  pointer-events: auto;
}

.pms-task-detail-drawer {
  position: fixed;
  top: var(--topbar-h);
  right: 0;
  bottom: 0;
  width: var(--drawer-w);
  background: var(--bg-0);
  border-left: 1px solid var(--border);
  box-shadow: var(--elev-4);
  border-top-left-radius: var(--r-5);
  z-index: 100;
  transform: translateX(100%);
  transition: transform var(--dur-drawer) var(--spring);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.pms-app-m1.is-detail-open .pms-task-detail-drawer {
  transform: translateX(0);
}
/* @media (max-width: 768px) 抽屉全屏 — 搬到本文件末尾。 */

.pms-task-detail-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-3) var(--sp-4);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.pms-task-detail-drawer-title {
  font-size: var(--fs-section);
  font-weight: 600;
  color: var(--text-1);
}
.pms-task-detail-drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--sp-4);
  display: flex;
  flex-direction: column;
  gap: var(--sp-4);
}

/* M1-New.2 抽屉底部固定 footer */
.pms-task-detail-drawer-footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-3) var(--sp-4);
  border-top: 1px solid var(--border);
  background: var(--bg-1);
}
.pms-drawer-footer-spacer { flex: 1; }
.pms-task-detail-drawer-footer .pms-text-button { padding: 0 var(--sp-2); }
.pms-task-detail-field {
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
}
.pms-task-detail-field-label {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.pms-task-detail-field-value {
  font-size: var(--fs-body);
  color: var(--text-1);
}
.pms-task-detail-attr-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--sp-3);
}
.pms-task-detail-subtask {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-1) 0;
  font-size: var(--fs-body-sm);
  color: var(--text-2);
}
.pms-task-detail-subtask.is-done { color: var(--text-3); text-decoration: line-through; }
.pms-task-detail-subtask-check {
  width: 14px; height: 14px;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--r-1);
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  color: var(--bg-0);
}
.pms-task-detail-subtask.is-done .pms-task-detail-subtask-check {
  background: var(--success);
  border-color: var(--success);
}

/* ============================================================
 * 6. 按钮
 * ============================================================ */
.pms-primary-button,
.pms-secondary-button,
.pms-text-button,
.pms-danger-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-2);
  height: 32px;
  padding: 0 var(--sp-4);
  border-radius: var(--r-2);
  font-size: var(--fs-body-sm);
  font-weight: 600;
  cursor: pointer;
  transition: background var(--dur-hover) var(--ease),
              border-color var(--dur-hover) var(--ease),
              color var(--dur-hover) var(--ease);
  white-space: nowrap;
  user-select: none;
}

/* 主按钮 */
.pms-primary-button {
  background: var(--accent);
  color: var(--bg-0);
  box-shadow: var(--elev-1);
}
.pms-primary-button:hover { background: var(--accent-hover); }
.pms-primary-button:active { transform: translateY(0.5px); }
.pms-primary-button.is-disabled,
.pms-primary-button:disabled {
  background: var(--bg-3);
  color: var(--text-4);
  cursor: not-allowed;
  box-shadow: none;
}

/* 次按钮 */
.pms-secondary-button {
  background: var(--bg-0);
  color: var(--text-1);
  border: 1px solid var(--border-strong);
}
.pms-secondary-button:hover { background: var(--bg-2); }
.pms-secondary-button.is-disabled,
.pms-secondary-button:disabled {
  color: var(--text-4);
  background: var(--bg-1);
  cursor: not-allowed;
}

/* 文本按钮 */
.pms-text-button {
  background: transparent;
  color: var(--accent);
  padding: 0 var(--sp-2);
  font-weight: 500;
}
.pms-text-button:hover { background: var(--accent-a08); }

/* 图标按钮 · .pms-icon-button */
.pms-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--r-2);
  color: var(--text-2);
  cursor: pointer;
  transition: background var(--dur-hover) var(--ease),
              color var(--dur-hover) var(--ease);
}
.pms-icon-button:hover {
  background: var(--bg-2);
  color: var(--text-1);
}

/* 危险按钮 */
.pms-danger-button {
  background: var(--danger);
  color: var(--bg-0);
}
.pms-danger-button:hover { background: #c93f44; }
.pms-danger-button.is-secondary {
  background: var(--bg-0);
  color: var(--danger);
  border: 1px solid var(--danger-soft);
}
.pms-danger-button.is-secondary:hover { background: var(--danger-soft); }

/* ============================================================
 * 7. 输入
 * ============================================================ */
.pms-text-field,
.pms-search-field,
.pms-textarea {
  width: 100%;
  background: var(--bg-0);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-2);
  font-size: var(--fs-body);
  color: var(--text-1);
  outline: none;
  transition: border-color var(--dur-hover) var(--ease),
              box-shadow var(--dur-hover) var(--ease);
}
.pms-text-field {
  height: 34px;
  padding: 0 var(--sp-3);
}
.pms-search-field {
  height: 32px;
  padding: 0 var(--sp-3) 0 var(--sp-6);
  background-image: none;
  position: relative;
}
.pms-textarea {
  padding: var(--sp-3);
  min-height: 80px;
  line-height: 1.55;
  resize: vertical;
}
.pms-text-field::placeholder,
.pms-search-field::placeholder,
.pms-textarea::placeholder { color: var(--text-3); }
.pms-text-field:focus,
.pms-search-field:focus,
.pms-textarea:focus {
  border-color: var(--accent);
  box-shadow: var(--focus-ring);
}
.pms-text-field:disabled,
.pms-textarea:disabled {
  background: var(--bg-2);
  color: var(--text-4);
  cursor: not-allowed;
}

/* 日期选择占位 · .pms-date-picker */
.pms-date-picker {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  height: 32px;
  padding: 0 var(--sp-3);
  background: var(--bg-0);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-2);
  font-size: var(--fs-body-sm);
  color: var(--text-2);
  cursor: pointer;
  transition: border-color var(--dur-hover) var(--ease);
}
.pms-date-picker:hover { border-color: var(--accent); }
.pms-date-picker svg { width: 14px; height: 14px; color: var(--text-3); }

/* ============================================================
 * 8. 任务卡片
 * ============================================================ */
.pms-task-card,
.pms-task-pool-card,
.pms-priority-task-card,
.pms-inbox-task-item {
  background: var(--bg-0);
  border: 1px solid var(--border);
  border-radius: var(--r-3);
  padding: var(--sp-3);
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
  cursor: pointer;
  transition: border-color var(--dur-hover) var(--ease),
              box-shadow var(--dur-hover) var(--ease);
}
.pms-task-card:hover,
.pms-task-pool-card:hover,
.pms-priority-task-card:hover,
.pms-inbox-task-item:hover {
  border-color: var(--accent);
  box-shadow: var(--elev-1);
}

.pms-task-card-title,
.pms-task-pool-card-title,
.pms-priority-task-card-title,
.pms-inbox-task-item-title {
  font-size: var(--fs-card-title);
  font-weight: 500;
  color: var(--text-1);
  line-height: 1.35;
}
.pms-task-card-meta {
  display: flex;
  gap: var(--sp-2);
  font-size: var(--fs-meta);
  color: var(--text-3);
  align-items: center;
}

/* 项目色条（左 4px） */
.pms-task-pool-card {
  position: relative;
  padding-left: calc(var(--sp-3) + 4px);
}
.pms-task-pool-card::before {
  content: "";
  position: absolute;
  left: 0; top: var(--sp-3); bottom: var(--sp-3);
  width: 3px;
  background: var(--neutral-aux);
  border-radius: 999px;
}

/* 优先级徽标 · .pms-pri-badge */
.pms-pri-badge {
  font-size: var(--fs-caption);
  font-weight: 700;
  padding: 1px 6px;
  border-radius: var(--r-pill);
  letter-spacing: 0.04em;
}
.pms-pri-badge.is-p1 { background: var(--danger-soft); color: var(--danger); }
.pms-pri-badge.is-p2 { background: var(--warning-soft); color: var(--warning); }
.pms-pri-badge.is-p3 { background: var(--accent-a12); color: var(--accent); }
.pms-pri-badge.is-p4 { background: var(--bg-2); color: var(--text-3); }

.pms-task-card.is-completed,
.pms-inbox-task-item.is-completed { opacity: 0.5; text-decoration: line-through; }
.pms-task-card.is-overdue .pms-task-card-due { color: var(--danger); }

/* 收件箱条目（更扁的行式） */
.pms-inbox-task-item {
  flex-direction: row;
  align-items: center;
  gap: var(--sp-3);
}
.pms-inbox-task-item-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ============================================================
 * 9. AI 建议卡片 · .pms-ai-suggestion-card
 *    必须 3 段：建议 / 原因 / 操作
 * ============================================================ */
.pms-ai-suggestion-card {
  background: var(--accent-a04);
  border: 1px solid var(--accent-a16);
  border-radius: var(--r-3);
  padding: var(--sp-3) var(--sp-4);
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}
.pms-ai-suggestion-card-row {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: var(--sp-2);
  font-size: var(--fs-body-sm);
  line-height: 1.55;
}
.pms-ai-suggestion-card-label {
  color: var(--accent);
  font-weight: 600;
  font-size: var(--fs-body-sm);
}
.pms-ai-suggestion-card-value {
  color: var(--text-1);
}
.pms-ai-suggestion-card-actions {
  display: flex;
  gap: var(--sp-2);
  margin-top: var(--sp-1);
}
.pms-ai-suggestion-card.is-generating { opacity: 0.7; }
.pms-ai-suggestion-card.is-failed {
  background: var(--danger-soft);
  border-color: var(--danger-soft);
}

/* ============================================================
 * 10. 状态与反馈
 * ============================================================ */
.pms-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--sp-8) var(--sp-6);
  text-align: center;
  gap: var(--sp-2);
}
.pms-empty-state-title {
  font-size: var(--fs-body);
  color: var(--text-2);
  font-weight: 500;
}
.pms-empty-state-hint {
  font-size: var(--fs-body-sm);
  color: var(--text-3);
  line-height: 1.55;
}

/* 骨架 · .pms-skeleton */
.pms-skeleton {
  display: block;
  background: linear-gradient(90deg, var(--bg-2), var(--bg-3), var(--bg-2));
  background-size: 200% 100%;
  border-radius: var(--r-2);
  animation: pms-skeleton-pulse 1.3s linear infinite;
}
@keyframes pms-skeleton-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.pms-skeleton-line { height: 12px; margin-bottom: 8px; }
.pms-skeleton-line.is-short { width: 40%; }

/* 演示模式条幅 */
.pms-demo-notice {
  position: fixed;
  bottom: var(--sp-4);
  right: var(--sp-4);
  padding: var(--sp-2) var(--sp-3);
  background: var(--bg-1);
  border: 1px solid var(--border);
  border-radius: var(--r-2);
  font-size: var(--fs-meta);
  color: var(--text-3);
  z-index: 110;
  pointer-events: none;
}

/* ============================================================
 * 11. 设置 / 开发日志 占位中央弹窗
 * ============================================================ */
.pms-modal-scrim {
  position: fixed;
  inset: 0;
  background: rgba(20, 28, 40, 0.18);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pms-modal-card {
  background: var(--bg-0);
  border-radius: var(--r-6);
  box-shadow: var(--elev-4);
  width: min(560px, 92vw);
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.pms-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-4) var(--sp-5);
  border-bottom: 1px solid var(--border);
}
.pms-modal-title {
  font-size: var(--fs-section);
  font-weight: 600;
  color: var(--text-1);
}
.pms-modal-body {
  padding: var(--sp-5);
  overflow-y: auto;
  color: var(--text-2);
  font-size: var(--fs-body);
  line-height: 1.6;
}
.pms-modal-section { margin-bottom: var(--sp-4); }
.pms-modal-section-title {
  font-size: var(--fs-caption);
  font-weight: 600;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: var(--sp-1);
}

/* ============================================================
 * 12. 组件预览页（?demo=components） · 容器
 * ============================================================ */
.pms-preview-page {
  padding: var(--sp-6);
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--sp-6);
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
}
.pms-preview-section {
  background: var(--bg-0);
  border: 1px solid var(--border);
  border-radius: var(--r-4);
  padding: var(--sp-5);
}
.pms-preview-section-title {
  font-size: var(--fs-section);
  font-weight: 600;
  color: var(--text-1);
  margin-bottom: var(--sp-4);
}
.pms-preview-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  align-items: center;
  margin-bottom: var(--sp-3);
}
.pms-preview-row-label {
  font-size: var(--fs-meta);
  color: var(--text-3);
  width: 80px;
  flex-shrink: 0;
}
.pms-preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-4) var(--sp-6);
  border-bottom: 1px solid var(--border);
}

/* ============================================================
 * 末尾 · 全部 @media 响应式（统一放在末尾，避免被前面基础规则覆盖）
 *   阈值：1280 任务池折叠 / 1180 右栏收起 / 1024 左栏窄化 / 768 抽屉全屏
 * ============================================================ */

@media (max-width: 1280px) {
  .pms-stage-body {
    grid-template-columns: 1fr;
  }
  .pms-stage-pool { display: none; }
}

@media (max-width: 1180px) {
  .pms-app-m1 {
    grid-template-columns: var(--sidebar-w) 1fr;
    grid-template-areas:
      "topbar topbar"
      "sidebar stage";
  }
  .pms-right-sidebar { display: none; }
  .pms-topbar {
    grid-template-columns: var(--sidebar-w) 1fr auto;
  }
}

@media (max-width: 1024px) {
  .pms-app-m1 {
    grid-template-columns: 200px 1fr;
  }
  .pms-topbar {
    grid-template-columns: 200px 1fr auto;
  }
}

@media (max-width: 768px) {
  .pms-task-detail-drawer {
    width: 100vw;
    border-top-left-radius: 0;
  }
}

/* ============================================================
 * M1-New.3R 新增 CSS
 * ============================================================ */

/* ── 顶部栏 + 旧布局组件 适配新 flex 布局 ───────────────── */
.pms-topbar {
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr auto;
  align-items: center;
  height: var(--topbar-h);
  background: var(--bg-1);
  border-bottom: 1px solid var(--border);
  z-index: 10;
  flex-shrink: 0;
  grid-area: unset;
}
/* 侧栏：固定宽度，不随 flex 撑开 */
.pms-sidebar {
  width: 160px;
  flex-shrink: 0;
  grid-area: unset;
  overflow-y: auto;
}
/* 右侧信息栏：覆盖旧 grid-area，固定宽度 */
.pms-right-sidebar {
  width: 240px;
  flex-shrink: 0;
  grid-area: unset;
}

/* ── 任务池面板 ─────────────────────────────────────────── */
.pms-taskpool {
  width: 228px;
  flex-shrink: 0;
  background: var(--bg-1);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.pms-taskpool-collapsed {
  width: 32px;
  align-items: center;
  padding-top: 12px;
}
.atp-expand-btn {
  background: none; border: none; cursor: pointer;
  color: var(--text-3); padding: 6px;
  border-radius: 6px; display: flex;
}
.atp-expand-btn:hover { background: var(--bg-2); }
.atp-header {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.atp-title-row {
  display: flex; align-items: center; gap: 4px; margin-bottom: 8px;
}
.atp-title {
  font-size: 10px; font-weight: 700; color: var(--text-4);
  letter-spacing: .08em; text-transform: uppercase;
}
.atp-count { font-size: 10px; color: var(--text-4); }
.atp-collapse {
  margin-left: auto; font-size: 11px; color: var(--text-3);
  cursor: pointer; background: none; border: none; padding: 0;
}
.atp-filters { display: flex; gap: 4px; flex-wrap: wrap; }
.atp-filter {
  font-size: 11px; padding: 3px 8px; border-radius: 5px;
  color: var(--text-3); cursor: pointer; background: transparent;
  border: none;
}
.atp-filter.is-active { background: var(--bg-2); color: var(--text-1); font-weight: 600; }
.atp-list { flex: 1; overflow-y: auto; }
.atp-list::-webkit-scrollbar { width: 0; }
.atp-empty {
  padding: 24px 16px;
  text-align: center;
  font-size: 12px;
  color: var(--text-3);
}
.atp-empty-hint { font-size: 11px; color: var(--text-4); margin-top: 4px; display: block; }

/* 任务行 */
.tp-row {
  padding: 0 12px; height: 60px;
  display: flex; flex-direction: column; justify-content: center; gap: 3px;
  border-bottom: 1px solid var(--border);
  cursor: grab; position: relative; background: var(--bg-0);
  flex-shrink: 0;
}
.tp-row:hover { background: var(--bg-1); }
.tp-row.tp-dragging { opacity: .7; background: var(--bg-2); }
.tp-row.tp-row-overdue { background: rgba(217,48,37,.03); }
.tp-row-line1 { display: flex; align-items: center; gap: 6px; }
.tp-pri { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.tp-title {
  font-size: 12.5px; font-weight: 600; color: var(--text-1);
  flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0;
}
.tp-status {
  font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px;
  flex-shrink: 0; white-space: nowrap;
}
.tp-status-unscheduled { background: var(--bg-2); color: var(--text-4); }
.tp-status-partial { background: rgba(52,199,89,.12); color: #1a8a3c; }
.tp-status-scheduled { background: var(--accent-soft); color: var(--accent); }
.tp-status-done { background: var(--bg-2); color: var(--text-3); }
.tp-status-overdue { background: rgba(217,48,37,.09); color: var(--danger); }
.tp-arrange {
  font-size: 11px; color: var(--accent); cursor: pointer; flex-shrink: 0;
  padding: 2px 6px; border-radius: 5px; opacity: 0; transition: opacity .1s;
  background: none; border: none;
}
.tp-row:hover .tp-arrange { opacity: 1; }
.tp-row-line2 {
  display: flex; align-items: center; gap: 5px;
  font-size: 10.5px; color: var(--text-4);
  padding-left: 12px; /* 与标题文字左对齐 */
}
.tp-proj { font-weight: 500; }
.tp-due { color: var(--text-4); }
.tp-due-near { color: var(--warning); }
.tp-due-late { color: var(--danger); }
.tp-ai-est { display: flex; align-items: center; gap: 3px; }
.tp-ai-icon { flex-shrink: 0; }

/* ── 时间轴 ─────────────────────────────────────────────── */
.tl-container {
  display: flex; flex-direction: column;
  height: 100%; overflow: hidden; background: var(--bg-0);
}
.tl-header {
  padding: 11px 14px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0; background: var(--bg-0);
}
.tl-header-row1 {
  display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
}
.tl-date-nav { display: flex; align-items: center; gap: 4px; }
.tl-nav-btn {
  width: 24px; height: 24px; border-radius: 6px; background: var(--bg-2);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 15px; color: var(--text-2);
  border: none;
}
.tl-nav-btn:hover { background: var(--bg-3); }
.tl-today-btn {
  font-size: 12px; color: var(--text-2); padding: 4px 10px;
  border-radius: 6px; background: var(--bg-2); cursor: pointer; border: none;
}
.tl-today-btn:hover { background: var(--bg-3); }
.tl-date-label {
  font-size: 14px; font-weight: 700; color: var(--text-1);
  cursor: pointer;
}
.tl-date-label:hover { color: var(--accent); }
.tl-weekday-label { font-size: 12px; color: var(--text-3); }
.tl-today-badge {
  font-size: 10px; font-weight: 700; background: var(--accent);
  color: #fff; padding: 2px 7px; border-radius: 5px;
}
.tl-view-toggle {
  display: flex; background: var(--bg-2); border-radius: 8px; padding: 2px; gap: 1px;
}
.tl-view-btn {
  font-size: 12px; padding: 4px 11px; border-radius: 6px;
  color: var(--text-3); border: none; cursor: default; background: transparent;
}
.tl-view-btn.is-active {
  background: var(--bg-0); color: var(--text-1); font-weight: 600;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
}
.tl-view-btn.is-disabled { color: var(--text-4); cursor: not-allowed; position: relative; }
.tl-view-btn.is-disabled::after {
  content: "即将"; font-size: 8px; color: var(--text-4);
  position: absolute; top: -5px; right: 1px;
}
.tl-arrange-btn {
  display: flex; align-items: center; gap: 6px;
  font-size: 12.5px; font-weight: 700; color: #fff; background: var(--accent);
  border: none; border-radius: 8px; padding: 6px 14px; cursor: pointer;
}
.tl-arrange-btn:hover { background: #2246b8; }
.tl-arrange-icon { flex-shrink: 0; }
.tl-header-row2 { font-size: 12px; color: var(--text-3); }
.tl-add-btn {
  margin: 8px 14px; padding: 6px 12px; border-radius: 7px;
  background: none; border: 1px dashed var(--border-strong);
  color: var(--text-3); cursor: pointer; font-size: 12px;
  display: inline-block; width: calc(100% - 28px);
  text-align: left;
}
.tl-add-btn:hover { background: var(--bg-1); border-color: var(--accent); color: var(--accent); }

/* 滚动区域 */
.tl-scroll-wrap {
  flex: 1; overflow-y: auto; position: relative;
}
.tl-scroll-wrap::-webkit-scrollbar { width: 5px; }
.tl-scroll-wrap::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 3px; }
.tl-inner {
  position: relative;
  /* height 由 JS 计算设置 */
}

/* 小时刻度 */
.tl-hours { position: absolute; left: 0; right: 0; top: 0; bottom: 0; pointer-events: none; }
.tl-hour-row {
  position: absolute; left: 0; right: 0;
  border-top: 1px solid var(--border);
}
.tl-hour-label {
  position: absolute; left: 4px; top: -8px;
  font-size: 10px; color: var(--text-4); font-family: var(--mono);
  width: 38px; text-align: right;
}
.tl-half-line {
  position: absolute; left: 46px; right: 0;
  border-top: 1px dashed var(--bg-3);
}

/* 时间块列 */
.tl-col {
  position: absolute; left: 46px; right: 8px; top: 0; bottom: 0;
}

/* 当前时间线（z-index:3，在卡片后方）*/
.tl-now-line {
  position: absolute; left: -4px; right: 0;
  height: 2px; background: var(--danger); z-index: 3;
}
.tl-now-dot {
  width: 8px; height: 8px; border-radius: 50%; background: var(--danger);
  position: absolute; left: -4px; top: -3px;
}
.tl-now-label {
  position: absolute; left: 6px; top: -9px;
  font-size: 9px; font-weight: 700; color: var(--danger);
  font-family: var(--mono);
}

/* 空状态 */
.tl-empty {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  text-align: center;
}
.tl-empty-title { font-size: 14px; font-weight: 600; color: var(--text-2); margin-bottom: 6px; }
.tl-empty-hint { font-size: 12px; color: var(--text-4); }

/* ── 时间块卡片 ──────────────────────────────────────────── */
.tbl-block {
  position: absolute;
  border-radius: 7px;
  overflow: visible;
  cursor: pointer;
  z-index: 5;
  transition: box-shadow .12s;
  display: flex;
  min-height: 16px;
}
.tbl-block:hover { box-shadow: 0 3px 10px rgba(0,0,0,.12); z-index: 10; }
.tbl-planned {
  background: var(--bg-0); border: 1px solid var(--border);
}
.tbl-running {
  background: var(--accent-soft); border: 1px solid var(--accent-mid);
}
.tbl-done {
  background: var(--bg-1); border: 1px solid var(--border); opacity: .65;
}
.tbl-cd-start { border-radius: 7px 7px 0 0; border-bottom: none; }
.tbl-cd-end   { border-radius: 0 0 7px 7px; border-top: none; opacity: .7; }
.tbl-strip { width: 3px; flex-shrink: 0; border-radius: 4px 0 0 4px; }
.tbl-planned .tbl-strip { background: var(--text-4); }
.tbl-running .tbl-strip { background: var(--accent); }
.tbl-done    .tbl-strip { background: var(--success); }
.tbl-body {
  flex: 1; padding: 5px 8px; overflow: hidden; min-width: 0;
  position: relative;
}
.tbl-running-badge {
  display: inline-block; font-size: 9.5px; font-weight: 700;
  color: #fff; background: var(--accent); padding: 1px 6px;
  border-radius: 4px; margin-bottom: 2px;
}
.tbl-title {
  font-size: 12px; font-weight: 600; color: var(--text-1);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  line-height: 1.35;
}
.tbl-running .tbl-title { color: var(--accent); }
.tbl-done .tbl-title { text-decoration: line-through; color: var(--text-3); }
.tbl-single { line-height: 1.2; }
.tbl-time { font-size: 10px; color: var(--text-3); font-family: var(--mono); }
.tbl-source { font-size: 10px; color: var(--text-4); }
.tbl-cd-badge {
  font-size: 9px; font-weight: 700; color: var(--text-3);
  background: var(--bg-2); padding: 1px 5px; border-radius: 3px;
  display: inline-block; margin-top: 2px;
}

/* 卡片内联操作按钮（hover 显示）*/
.tbl-action-btn {
  position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
  font-size: 10.5px; font-weight: 700; padding: 3px 9px; border-radius: 5px;
  opacity: 0; transition: opacity .1s; cursor: pointer; border: none;
  pointer-events: none;
}
.tbl-block:hover .tbl-action-btn { opacity: 1; pointer-events: auto; }
.tbl-action-start  { background: var(--accent); color: #fff; }
.tbl-action-done   { background: var(--success); color: #fff; }
.tbl-action-review { background: var(--bg-2); color: var(--text-2); }

/* ── Popover v0.2 ───────────────────────────────────────── */
.tbp-wrap {
  background: var(--bg-0);
  border: 1px solid var(--border-strong);
  border-radius: 13px;
  box-shadow: 0 8px 28px rgba(0,0,0,.14), 0 2px 6px rgba(0,0,0,.06);
  overflow: hidden;
}
.tbp-head {
  padding: 13px 16px 0;
  display: flex; align-items: center; gap: 10px;
}
.tbp-head-title {
  font-size: 13px; font-weight: 700; color: var(--text-2); flex: 1;
}
.tbp-close {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--bg-2); display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: var(--text-3); cursor: pointer; border: none;
}
.tbp-source-row {
  padding: 8px 16px 0;
  display: flex; align-items: center; gap: 6px;
}
.tbp-source-badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 11px; color: var(--text-3);
  background: var(--bg-1); padding: 3px 8px;
  border-radius: 5px; border: 1px solid var(--border);
}
.tbp-source-link {
  font-size: 10.5px; color: var(--accent); cursor: pointer;
  background: none; border: none;
}
.tbp-body { padding: 12px 16px; }
.tbp-title-input {
  width: 100%; background: var(--bg-1); border: 1px solid var(--border);
  border-radius: 8px; padding: 9px 12px; font-size: 14px; font-weight: 600;
  color: var(--text-1); outline: none; margin-bottom: 10px;
}
.tbp-title-input:focus { border-color: var(--accent); }
.tbp-err { font-size: 11.5px; color: var(--danger); margin-bottom: 8px; }
.tbp-field-row {
  display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
}
.tbp-field-lbl {
  font-size: 9.5px; font-weight: 700; color: var(--text-3);
  letter-spacing: .07em; text-transform: uppercase; width: 40px; flex-shrink: 0;
}
.tbp-seg { display: flex; background: var(--bg-2); border-radius: 8px; padding: 2px; gap: 1px; }
.tbp-seg-btn {
  flex: 1; text-align: center; font-size: 12px; padding: 5px 4px;
  border-radius: 6px; color: var(--text-3); cursor: pointer; border: none;
  background: transparent;
}
.tbp-seg-btn.is-active {
  background: var(--bg-0); color: var(--text-1); font-weight: 600;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
}
.tbp-field-btn {
  font-size: 13px; color: var(--text-1); background: var(--bg-1);
  border: 1px solid var(--border); border-radius: 7px; padding: 6px 10px; cursor: pointer;
}
.tbp-field-btn.is-active { border-color: var(--accent); color: var(--accent); }
.tbp-field-btn.tbp-nextday { color: var(--warning); }
.tbp-time-row { display: flex; align-items: center; gap: 8px; }
.tbp-time-sep { color: var(--text-4); font-size: 13px; }
.tbp-cross-day-label {
  font-size: 11.5px; color: var(--accent); background: var(--accent-soft);
  padding: 5px 10px; border-radius: 6px; margin-bottom: 8px;
}
.tbp-endnextday-hint {
  font-size: 12px; color: var(--warning); background: var(--warning-soft);
  padding: 8px 10px; border-radius: 7px; margin-bottom: 8px;
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
}
.tbp-btn-sm {
  font-size: 11px; padding: 3px 8px; border-radius: 5px; cursor: pointer;
  background: var(--warning); color: #fff; border: none; font-weight: 700;
}
.tbp-btn-sm.is-ghost {
  background: transparent; color: var(--warning); border: 1px solid var(--warning);
}
.tbp-footer {
  padding: 10px 16px 14px; display: flex; align-items: center; gap: 6px;
  border-top: 1px solid var(--border);
}
.tbp-del-btn { font-size: 12px; color: var(--danger); background: none; border: none; cursor: pointer; }
.tbp-review-btn {
  font-size: 11.5px; color: var(--text-2); padding: 4px 10px; border-radius: 6px;
  background: var(--bg-2); cursor: pointer; border: none;
}
.tbp-ghost-btn {
  font-size: 12px; color: var(--text-3); padding: 5px 10px;
  border-radius: 6px; cursor: pointer; background: none; border: none;
}
.tbp-save-btn {
  font-size: 12.5px; font-weight: 700; color: #fff; background: var(--accent);
  padding: 6px 18px; border-radius: 8px; cursor: pointer; border: none;
}
.tbp-danger-btn {
  font-size: 12px; font-weight: 700; color: #fff; background: var(--danger);
  padding: 5px 14px; border-radius: 7px; cursor: pointer; border: none;
}
.tbp-dc-title { font-size: 14px; font-weight: 700; margin-bottom: 8px; }
.tbp-dc-desc { font-size: 13px; color: var(--text-2); margin-bottom: 16px; }
.tbp-dc-actions { display: flex; justify-content: flex-end; gap: 8px; }

/* 内联日期/时间选择器 */
.tbp-inline-dp, .tbp-inline-tp {
  background: var(--bg-1); border: 1px solid var(--border);
  border-radius: 9px; overflow: hidden; margin-bottom: 10px;
}
.dp-header {
  padding: 10px 12px; display: flex; align-items: center; gap: 6px;
  border-bottom: 1px solid var(--border);
}
.dp-nav-btn {
  width: 24px; height: 24px; border-radius: 6px; background: var(--bg-2);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 14px; color: var(--text-2); border: none;
}
.dp-title { font-size: 13px; font-weight: 700; color: var(--text-1); flex: 1; text-align: center; }
.dp-shortcuts {
  display: flex; gap: 4px; padding: 7px 10px;
  border-bottom: 1px solid var(--border); flex-wrap: wrap;
}
.dp-shortcut {
  font-size: 11px; padding: 3px 9px; border-radius: 5px;
  background: var(--bg-2); color: var(--text-2); cursor: pointer; border: none;
}
.dp-shortcut:hover, .dp-sc-active { background: var(--accent); color: #fff; }
.dp-weekdays {
  display: grid; grid-template-columns: repeat(7, 1fr);
  padding: 6px 8px 2px; gap: 2px;
}
.dp-wd { font-size: 10px; font-weight: 700; color: var(--text-4); text-align: center; padding: 4px 0; }
.dp-grid {
  display: grid; grid-template-columns: repeat(7, 1fr);
  padding: 0 8px 10px; gap: 2px;
}
.dp-cell {
  width: 100%; aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
  border-radius: 50%; font-size: 12px; color: var(--text-2); cursor: pointer;
  transition: background .1s; position: relative;
}
.dp-cell:hover { background: var(--bg-2); }
.dp-today { color: var(--accent); font-weight: 700; }
.dp-today::after {
  content: ""; display: block; width: 4px; height: 4px; border-radius: 50%;
  background: var(--accent); position: absolute; bottom: 3px;
}
.dp-selected { background: var(--accent) !important; color: #fff; font-weight: 700; }
.dp-other { color: var(--text-4); }

/* 时间轴日期标题选择器面板（挂 body 的浮层外壳） */
.tldp-panel {
  background: var(--bg-0);
  border: 1px solid var(--border-strong);
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0,0,0,.16), 0 2px 6px rgba(0,0,0,.06);
  overflow: hidden;
}
.dp-footer {
  display: flex; justify-content: flex-end; gap: 8px;
  padding: 10px 12px; border-top: 1px solid var(--border);
}
.dp-cancel-btn {
  font-size: 12px; color: var(--text-3); padding: 5px 12px;
  border-radius: 7px; background: var(--bg-2); border: none; cursor: pointer;
}
.dp-confirm-btn {
  font-size: 12px; font-weight: 700; color: #fff; background: var(--accent);
  padding: 5px 16px; border-radius: 7px; border: none; cursor: pointer;
}

/* 时间列表 */
.tp-list { max-height: 180px; overflow-y: auto; }
.tp-list::-webkit-scrollbar { width: 4px; }
.tp-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
.tp-opt {
  padding: 7px 14px; font-size: 12.5px; color: var(--text-2);
  cursor: pointer; font-family: var(--mono);
}
.tp-opt:hover { background: var(--bg-1); }
.tp-opt-selected { background: var(--accent-soft); color: var(--accent); font-weight: 700; }
.tp-opt-now { color: var(--danger); }
.tp-quicks {
  display: flex; gap: 4px; padding: 7px 10px;
  border-bottom: 1px solid var(--border); flex-wrap: wrap;
}
.tp-quick-btn {
  font-size: 11px; padding: 3px 8px; border-radius: 5px;
  background: var(--bg-2); color: var(--text-2); cursor: pointer; border: none;
  white-space: nowrap;
}
.tp-quick-btn:hover { background: var(--accent-soft); color: var(--accent); }

/* ── 复盘浮层 ──────────────────────────────────────────── */
.rf-wrap {
  background: var(--bg-0); border: 1px solid var(--border-strong);
  border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,.12);
  padding: 14px; width: 320px;
}
.rf-head {
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
}
.rf-icon {
  width: 18px; height: 18px; border-radius: 4px; background: var(--accent-soft);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.rf-title { font-size: 13.5px; font-weight: 700; color: var(--text-1); flex: 1; }
.rf-close { margin-left: auto; font-size: 12px; color: var(--text-4); cursor: pointer; border: none; background: none; }
.rf-block-name { font-size: 12.5px; font-weight: 600; color: var(--text-1); margin-bottom: 2px; }
.rf-block-time { font-size: 11px; color: var(--text-3); font-family: var(--mono); margin-bottom: 10px; }
.rf-textarea {
  width: 100%; background: var(--bg-1); border: 1px solid var(--border);
  border-radius: 8px; padding: 9px 10px; font-size: 13px; color: var(--text-1);
  resize: vertical; min-height: 72px; font-family: inherit; line-height: 1.6;
  margin-bottom: 6px; outline: none;
}
.rf-textarea:focus { border-color: var(--accent); }
.rf-textarea::placeholder { color: var(--text-4); }
.rf-ai-hint {
  font-size: 11px; color: var(--text-4); display: flex; align-items: center;
  gap: 5px; margin-bottom: 10px;
}
.rf-actions { display: flex; gap: 6px; align-items: center; }
.rf-skip { font-size: 12px; color: var(--text-3); padding: 5px 12px; cursor: pointer; border: none; background: none; }
.rf-save {
  font-size: 12.5px; font-weight: 700; color: #fff; background: var(--accent);
  padding: 6px 16px; border-radius: 7px; cursor: pointer; border: none; margin-left: auto;
}

/* ── AI 安排日程卡片 ─────────────────────────────────────── */
.ai-card-scrim {
  position: fixed; inset: 0; background: rgba(0,0,0,.45); z-index: 800;
  display: flex; align-items: center; justify-content: center;
}
.ai-card-wrap {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 480px; max-width: calc(100vw - 32px); max-height: calc(100vh - 64px);
  background: var(--bg-0); border: 1px solid var(--border);
  border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,.16);
  z-index: 801; overflow: hidden; display: flex; flex-direction: column;
}
.ai-card-top {
  padding: 16px 18px 0; display: flex; align-items: center; gap: 8px;
  flex-shrink: 0;
}
.ai-card-logo {
  width: 22px; height: 22px; background: var(--accent); border-radius: 6px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.ai-card-lbl { font-size: 12px; font-weight: 700; color: var(--text-2); flex: 1; }
.ai-prog { display: flex; gap: 4px; align-items: center; }
.ai-prog-done { width: 6px; height: 6px; border-radius: 50%; background: rgba(43,84,201,.35); }
.ai-prog-active { width: 16px; height: 6px; border-radius: 3px; background: var(--accent); }
.ai-prog-empty { width: 6px; height: 6px; border-radius: 50%; background: var(--border-strong); }
.ai-card-close {
  font-size: 13px; color: var(--text-4); cursor: pointer; background: none; border: none;
  width: 24px; height: 24px; border-radius: 50%; background: var(--bg-2);
  display: flex; align-items: center; justify-content: center;
}
.ai-card-body {
  padding: 18px 20px 14px; flex: 1; overflow-y: auto;
}
.ai-state-body { text-align: center; }
.ai-question { font-size: 17px; font-weight: 700; color: var(--text-1); margin-bottom: 16px; line-height: 1.4; }
.ai-hint-text { font-size: 12px; color: var(--text-3); margin-bottom: 10px; }
.ai-empty-hint { font-size: 13px; color: var(--text-3); padding: 12px 0; }
.ai-state-icon {
  width: 44px; height: 44px; border-radius: 12px; margin: 0 auto 14px;
  display: flex; align-items: center; justify-content: center;
}
.ai-state-icon.unconfigured { background: var(--bg-2); }
.ai-state-icon.loading { background: var(--accent-soft); }
.ai-state-icon.error { background: var(--danger-soft); }
.ai-state-icon.success { background: var(--success-soft); }
.ai-state-title { font-size: 15px; font-weight: 700; color: var(--text-1); margin-bottom: 6px; }
.ai-state-desc { font-size: 13px; color: var(--text-2); line-height: 1.65; margin-bottom: 18px; }
.ai-state-actions { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.ai-action-btn { font-size: 12.5px; padding: 7px 18px; border-radius: 8px; cursor: pointer; border: none; }
.ai-action-btn.is-primary { background: var(--accent); color: #fff; font-weight: 600; }
.ai-action-btn.is-sec { background: var(--bg-2); color: var(--text-2); }
.ai-loading-dots { display: flex; gap: 5px; justify-content: center; margin-top: 12px; }
.ai-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
  animation: aipulse 1.2s ease-in-out infinite;
}
.ai-dot:nth-child(2) { animation-delay: .2s; }
.ai-dot:nth-child(3) { animation-delay: .4s; }
@keyframes aipulse {
  0%,80%,100% { transform: scale(.7); opacity: .5; }
  40% { transform: scale(1); opacity: 1; }
}
.ai-options { display: flex; flex-direction: column; gap: 8px; }
.ai-option {
  padding: 11px 14px; border-radius: 10px; border: 1.5px solid var(--border);
  font-size: 13.5px; color: var(--text-1); cursor: pointer;
  display: flex; align-items: center; gap: 10px; background: none; text-align: left;
  transition: background .12s, border-color .12s; width: 100%;
}
.ai-option:hover { background: var(--bg-1); border-color: var(--border-strong); }
.ai-option.is-selected { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); font-weight: 600; }
.ai-opt-icon { width: 16px; height: 16px; border-radius: 4px; background: var(--bg-2); flex-shrink: 0; }
.ai-option.is-selected .ai-opt-icon { background: var(--accent-mid); }
.ai-task-list { display: flex; flex-direction: column; gap: 6px; }
.ai-task-row {
  display: flex; align-items: center; gap: 8px;
  padding: 9px 12px; border-radius: 8px;
  border: 1.5px solid var(--border); cursor: pointer;
  background: none;
}
.ai-task-row.is-selected { border-color: var(--accent); background: var(--accent-soft); }
.ai-check {
  width: 16px; height: 16px; border-radius: 4px;
  border: 1.5px solid var(--border-strong); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: #fff;
}
.ai-task-row.is-selected .ai-check { background: var(--accent); border-color: var(--accent); }
.ai-pri-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.ai-task-title { flex: 1; font-size: 12.5px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ai-task-est { font-size: 10.5px; color: var(--text-4); flex-shrink: 0; }
.ai-draft-list { display: flex; flex-direction: column; gap: 6px; }
.ai-draft-row {
  display: flex; align-items: stretch; gap: 10px; padding: 9px 12px;
  border-radius: 8px; border: 1px solid var(--border); background: var(--bg-0);
}
.ai-draft-time { font-size: 10.5px; color: var(--text-3); font-family: var(--mono); width: 80px; flex-shrink: 0; padding-top: 1px; }
.ai-draft-strip { width: 3px; background: var(--text-4); border-radius: 2px; flex-shrink: 0; }
.ai-draft-strip.task { background: var(--accent); }
.ai-draft-strip.manual { background: var(--text-3); }
.ai-draft-body { flex: 1; min-width: 0; }
.ai-draft-title { font-size: 12.5px; font-weight: 600; color: var(--text-1); margin-bottom: 2px; }
.ai-draft-reason { font-size: 10.5px; color: var(--accent); }
.ai-card-footer {
  padding: 12px 20px 16px; display: flex; align-items: center; gap: 8px;
  border-top: 1px solid var(--border); flex-shrink: 0;
}
.ai-skip-btn { font-size: 12px; color: var(--text-4); cursor: pointer; border: none; background: none; }
.ai-prev-btn {
  font-size: 12px; color: var(--text-2); padding: 6px 14px; border-radius: 7px;
  background: var(--bg-2); cursor: pointer; border: none;
}
.ai-next-btn {
  font-size: 12.5px; font-weight: 700; color: #fff; background: var(--accent);
  padding: 6px 18px; border-radius: 7px; cursor: pointer; border: none;
}

/* ── 右侧信息栏 ──────────────────────────────────────────── */
.pms-right-sidebar {
  width: 240px; flex-shrink: 0; background: var(--bg-1);
  border-left: 1px solid var(--border); display: flex; flex-direction: column;
  overflow-y: auto;
}
.pms-right-sidebar::-webkit-scrollbar { width: 0; }
.rps { border-bottom: 1px solid var(--border); padding: 12px 14px; }
.rps-title {
  font-size: 9.5px; font-weight: 700; color: var(--text-4);
  letter-spacing: .09em; text-transform: uppercase; margin-bottom: 9px;
  display: flex; justify-content: space-between; align-items: center;
}
.rps-empty { font-size: 12px; color: var(--text-4); }
.rps-link { font-size: 10px; color: var(--accent); font-weight: 500; cursor: pointer; }
.qc-wrap {
  background: var(--bg-0); border: 1px solid var(--border-strong);
  border-radius: 8px; padding: 8px 10px;
  display: flex; align-items: center; gap: 7px;
}
.qc-plus { font-size: 14px; color: var(--text-4); flex-shrink: 0; }
.qc-input {
  flex: 1; background: none; border: none; outline: none;
  font-size: 12.5px; color: var(--text-1); min-width: 0;
}
.qc-input::placeholder { color: var(--text-4); }
.qc-kbd {
  font-size: 10px; color: var(--text-4); font-family: var(--mono);
  background: var(--bg-2); padding: 2px 5px; border-radius: 3px; flex-shrink: 0;
}
.inprog-card {
  background: var(--accent-soft); border: 1px solid var(--accent-mid);
  border-radius: 8px; padding: 9px 11px;
}
.inprog-lbl {
  font-size: 9.5px; font-weight: 700; color: var(--accent);
  text-transform: uppercase; letter-spacing: .06em; margin-bottom: 3px;
}
.inprog-title { font-size: 13px; font-weight: 600; color: var(--accent); }
.inprog-time { font-size: 11px; color: var(--text-3); font-family: var(--mono); }
.pms-today-progress { display: flex; align-items: center; gap: 12px; }
.pms-today-progress-ring { width: 48px; height: 48px; flex-shrink: 0; }
.pms-today-progress-text { flex: 1; }
.pms-progress-ratio { font-size: 18px; font-weight: 700; font-variant-numeric: tabular-nums; }
.pms-progress-label { font-size: 11px; color: var(--text-3); }
.peri-placeholder { padding: 4px 0; }
.peri-placeholder-text { font-size: 11px; color: var(--text-4); }
.ai-slot {
  background: var(--bg-0); border: 1px dashed var(--border-strong);
  border-radius: 8px; padding: 11px 12px; margin-top: 4px;
}
.ai-slot-icon {
  width: 18px; height: 18px; border-radius: 4px; background: var(--accent-soft);
  display: flex; align-items: center; justify-content: center; margin-bottom: 6px;
}
.ai-slot-title { font-size: 11.5px; font-weight: 600; color: var(--text-2); margin-bottom: 3px; }
.ai-slot-sub { font-size: 11px; color: var(--text-4); line-height: 1.55; }
.ai-slot-btn {
  margin-top: 8px; font-size: 11px; color: var(--accent); font-weight: 600; cursor: pointer;
}
`,Rt="wuxianjinbu-data-v1",bt="wuxianjinbu-v1";function F(){return new Date().toISOString()}function $(t=new Date){const e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${a}-${r}`}function ue(t){return`${t}_${Math.random().toString(36).slice(2,10)}${Date.now().toString(36)}`}function ut(){const t=F(),e=$(),a=s=>{const o=new Date;return o.setDate(o.getDate()+s),$(o)},r=(s,o)=>{const n=new Date;return n.setHours(s,o,0,0),n.toISOString()};return{schemaVersion:bt,projects:[{id:"proj_main",name:"主业",colorToken:"--project-1",createdAt:t,updatedAt:t},{id:"proj_side",name:"副业",colorToken:"--project-2",createdAt:t,updatedAt:t},{id:"proj_life",name:"生活",colorToken:"--project-3",createdAt:t,updatedAt:t},{id:"proj_learn",name:"学习",colorToken:"--project-4",createdAt:t,updatedAt:t}],tasks:[{id:"t1",title:"准备 Q2 OKR 复盘材料及部门经营分析报告",projectId:"proj_main",priority:"P1",status:"todo",dueDate:a(3),scheduleStatus:"partial",aiEstimatedMinutes:120,createdAt:t,updatedAt:t,completedAt:null,description:"需要整理本季度 OKR 数据并撰写分析报告。"},{id:"t2",title:"整理 M1-New.3 验收反馈文档",projectId:"proj_main",priority:"P1",status:"todo",dueDate:e,scheduleStatus:"partial",aiEstimatedMinutes:90,createdAt:t,updatedAt:t,completedAt:null},{id:"t3",title:"副业自媒体本周选题规划",projectId:"proj_side",priority:"P2",status:"todo",dueDate:a(2),scheduleStatus:"unscheduled",aiEstimatedMinutes:45,createdAt:t,updatedAt:t,completedAt:null},{id:"t4",title:"给孩子预约暑期体检",projectId:"proj_life",priority:"P2",status:"todo",dueDate:a(4),scheduleStatus:"unscheduled",aiEstimatedMinutes:30,createdAt:t,updatedAt:t,completedAt:null},{id:"t5",title:"提交 5 月财务报销单据",projectId:"proj_main",priority:"P1",status:"todo",dueDate:a(-2),scheduleStatus:"overdue",aiEstimatedMinutes:30,createdAt:t,updatedAt:t,completedAt:null},{id:"t6",title:"读完《深度工作》第三章",projectId:"proj_learn",priority:"P3",status:"todo",dueDate:a(5),scheduleStatus:"unscheduled",aiEstimatedMinutes:60,createdAt:t,updatedAt:t,completedAt:null},{id:"t7",title:"更新团队 Wiki 文档结构",projectId:"proj_main",priority:"P3",status:"todo",scheduleStatus:"unscheduled",createdAt:t,updatedAt:t,completedAt:null},{id:"t8",title:"下周差旅订票",projectId:"proj_life",priority:"P2",status:"todo",dueDate:a(6),scheduleStatus:"unscheduled",aiEstimatedMinutes:20,createdAt:t,updatedAt:t,completedAt:null},{id:"t9",title:"厨房抽油烟机清理预约",projectId:null,priority:"P4",status:"todo",scheduleStatus:"unscheduled",createdAt:t,updatedAt:t,completedAt:null},{id:"t10",title:"上周 DFH 周报反思",projectId:"proj_main",priority:"P4",status:"todo",dueDate:a(-1),scheduleStatus:"overdue",createdAt:t,updatedAt:t,completedAt:null},{id:"t11",title:"整理项目档案 SOP",projectId:"proj_main",priority:"P4",status:"done",dueDate:a(-3),scheduleStatus:"done",createdAt:t,updatedAt:t,completedAt:t}],timeBlocks:[{id:"tb1",title:"晨间整理与复盘",taskId:null,source:"manual",start:r(7,30),end:r(8,0),status:"done",createdAt:t,updatedAt:t},{id:"tb2",title:"准备 Q2 OKR 复盘材料",taskId:"t1",source:"task",start:r(9,0),end:r(11,0),status:"done",createdAt:t,updatedAt:t},{id:"tb3",title:"午餐",taskId:null,source:"manual",start:r(12,0),end:r(13,0),status:"done",createdAt:t,updatedAt:t},{id:"tb4",title:"整理 M1-New.3 验收反馈文档",taskId:"t2",source:"task",start:r(14,0),end:r(16,30),status:"running",createdAt:t,updatedAt:t},{id:"tb5",title:"团队同步会议",taskId:null,source:"manual",start:r(16,30),end:r(17,0),status:"planned",createdAt:t,updatedAt:t},{id:"tb6",title:"副业自媒体选题",taskId:"t3",source:"task",start:r(19,0),end:r(19,45),status:"planned",createdAt:t,updatedAt:t},{id:"tb7",title:"晚间复盘与规划",taskId:null,source:"manual",start:r(21,0),end:r(22,0),status:"planned",createdAt:t,updatedAt:t}],settings:{firstDayOfWeek:"monday"},meta:{createdAt:t,updatedAt:t}}}let M=null,gt=null;function ve(){if(M)return M;try{const t=localStorage.getItem(Rt);if(!t)return M=ut(),R(),M;const e=JSON.parse(t);return sa(e)?(M=e,M):(gt="数据结构异常，已恢复为默认种子",M=ut(),M)}catch{return gt="本地数据解析失败，已恢复为默认种子",M=ut(),M}}function R(){if(M){M.meta.updatedAt=F();try{localStorage.setItem(Rt,JSON.stringify(M))}catch(t){console.warn("[wuxianjinbu] saveStore 失败",t)}}}function Ue(){return M=ut(),gt=null,R(),M}function h(){return ve()}function Ze(){return gt}const Ge=new Set(["P1","P2","P3","P4"]),Je=new Set(["todo","done"]),Xe=new Set(["planned","running","done"]),Qe=new Set(["--project-1","--project-2","--project-3","--project-4"]);function S(t){return typeof t=="string"&&t.length>0}function ta(t){if(!t||typeof t!="object")return!1;const e=t;return!(!S(e.id)||typeof e.title!="string"||e.projectId!==null&&!S(e.projectId)||typeof e.priority!="string"||!Ge.has(e.priority)||typeof e.status!="string"||!Je.has(e.status)||!S(e.createdAt)||!S(e.updatedAt)||e.dueDate!==void 0&&typeof e.dueDate!="string"||e.completedAt!==void 0&&e.completedAt!==null&&typeof e.completedAt!="string")}function ea(t){if(!t||typeof t!="object")return!1;const e=t;return!(!S(e.id)||!S(e.name)||typeof e.colorToken!="string"||!Qe.has(e.colorToken)||!S(e.createdAt)||!S(e.updatedAt))}function aa(t){if(!t||typeof t!="object")return!1;const e=t;return!(!S(e.id)||typeof e.title!="string"||e.taskId!==void 0&&e.taskId!==null&&!S(e.taskId)||!S(e.start)||!S(e.end)||typeof e.status!="string"||!Xe.has(e.status)||!S(e.createdAt)||!S(e.updatedAt))}function ra(t){if(!t||typeof t!="object")return!1;const e=t;return e.firstDayOfWeek==="monday"||e.firstDayOfWeek==="sunday"}function ia(t){if(!t||typeof t!="object")return!1;const e=t;return S(e.createdAt)&&S(e.updatedAt)}function sa(t){if(!t||typeof t!="object")return!1;const e=t;return!(e.schemaVersion!==bt||!Array.isArray(e.tasks)||!e.tasks.every(ta)||!Array.isArray(e.projects)||!e.projects.every(ea)||!Array.isArray(e.timeBlocks)||!e.timeBlocks.every(aa)||!ra(e.settings)||!ia(e.meta))}const i={brand:{name:"无限进步",tagline:"冷静智能个人指挥系统"},topbar:{searchPlaceholder:"搜索任务或命令",devLog:"开发日志",settings:"设置"},sidebar:{nav:{timeblock:"今日时间块",inbox:"收件箱",upcoming:"即将到来",allTasks:"全部任务",completed:"已完成",insight:"数据洞察",planning:"周期规划"},sectionLabel:{project:"项目",kr:"本期关键结果"},viewAll:"查看全部"},timeline:{today:"今天",prevDay:"前一天",nextDay:"后一天",arrangeBtn:"安排日程",dayView:"日",weekView:"周",monthView:"月",comingSoon:"即将支持",addBtn:"新增时间块",emptyTitle:"今天暂无时间块",emptyHint:"规划执行时段，将任务落实到时间",crossDayContinues:"延续至次日",crossDayFrom:"来自前一日",blockCountTpl:(t,e)=>`今日 ${t} 个时间块 · 已完成 ${e}`,noBlocksToday:"今天暂无时间块"},pool:{title:"任务池",collapse:"收起",expand:"展开",arrange:"安排",rearrange:"再排",filters:{today:"今日",highPri:"高优",upcoming:"到期",unscheduled:"未排",partial:"已部分",overdue:"逾期"},statusLabel:{unscheduled:"未安排",partial:"已安排部分",scheduled:"已安排",done:"已完成",overdue:"逾期"},noTasks:"暂无任务",noTasksHint:"切换筛选项或新增任务"},block:{actionStart:"开始",actionDone:"完成",actionReview:"复盘",sourcePrefixTask:"来源：任务",sourcePrefixPeriodic:"来源：周期事项",sourcePrefixAiDraft:"来源：AI 草稿",statusRunningBadge:"进行中"},popover:{titleCreate:"新增时间块",titleEdit:"编辑时间块",fieldStatus:"状态",fieldTime:"时间段",fieldDate:"日期",placeholder:"时间块名称",statusPlanned:"待办",statusRunning:"进行中",statusDone:"已完成",btnSave:"保存",btnCancel:"取消",btnDelete:"删除",btnReview:"复盘",errTitle:"请输入时间块名称",errEndEarly:"结束时间早于开始时间，是否视为次日？",confirmNextDay:"视为次日",confirmNo:"不是",deleteConfirmTitle:"确认删除此时间块？",deleteConfirmDesc:"关联任务不会受到影响。",deleteConfirmOk:"确认删除",deleteConfirmCancel:"取消"},datePicker:{today:"今天",tomorrow:"明天",thisWeekFriday:"本周五",nextMonday:"下周一",cancel:"取消",confirm:"确认",weekdays:["一","二","三","四","五","六","日"]},timePicker:{quickAdd30m:"+30分",quickAdd1h:"+1小时",quickAdd2h:"+2小时",quickToNextHour:"到整点",nowSuffix:" · 现在"},review:{title:"完成复盘",placeholder:"这次执行有什么问题？下次需要注意什么？",aiHint:"复盘内容将作为未来 AI 建议的参考上下文",skip:"跳过复盘",save:"保存复盘"},right:{sectionCapture:"快速捕捉",sectionRunning:"当前进行",sectionProgress:"今日进度",sectionPeriodic:"周期事项",sectionAi:"AI 建议",capturePlaceholder:"记录想法或任务",none:"暂无内容",aiNotConfigured:"配置 Deepseek API 后，AI 将在这里给出今日排程建议",aiConfigBtn:"去配置"},ai:{label:"建议",reason:"原因",action:"操作",accept:"采纳",ignore:"忽略",editAndAccept:"编辑后采纳",arrange:{cardTitle:"安排日程",unconfiguredTitle:"AI 排程需要先配置模型 API",unconfiguredDesc:"配置完成后，AI 将分析你的任务池并生成个性化日程草案。",loadingTitle:"正在分析任务池并生成日程草案",errorTitle:"生成失败",errorDesc:"网络错误或 API 额度不足，请重试或使用模拟建议。",mockBtn:"使用模拟建议",cancelBtn:"取消",prevBtn:"上一步",nextBtn:"下一步",applyBtn:"应用日程",regenerateBtn:"重新生成",pages:{p1Title:"你想安排哪一天的日程？",p1Today:"今天",p1Tomorrow:"明天",p1Dayafter:"后天",p1Custom:"选择具体日期",p2Title:"这一天你的可用时间范围是？",p2Default:"使用默认时间 07:00 — 23:00",p2Late:"从 08:00 开始",p2Early:"结束于 22:00",p3Title:"以下固定安排是否全部保留？",p3Hint:"取消勾选的安排不纳入 AI 排程参考",p4Title:"AI 推荐优先处理以下任务，请选择：",p4Hint:"最多选择 6 个",p5Title:"以下任务今天是否暂不安排？",p6Title:"AI 生成日程草案如下，请确认："}}},stage:{segDay:"日",segWeek:"周",segMonth:"月"},buttons:{danger:"删除"},states:{emptyTitle:"暂无内容",emptyHint:"这里还没有任何记录",loading:"加载中",loadFailed:"加载失败，请重试",inboxEmpty:"收件箱为空",inboxHint:"临时任务和灵感会先放在这里"},status:{notStarted:"待办",done:"已完成"},drawer:{close:"关闭",title:"任务详情",project:"项目",priority:"优先级",status:"状态",due:"截止",description:"描述",aiSection:"AI 建议",saveNotice:"正在保存",saved:"已保存",empty:"请选择一个任务"},preview:{title:"组件预览",backToMain:"回到主页",buttons:"按钮",inputs:"输入",cards:"卡片",ai:"AI 建议",states:"状态",btnDefault:"默认",btnHover:"悬停",btnFocus:"聚焦",btnDisabled:"禁用",inputPlaceholder:"请输入内容",searchPlaceholder:"请输入搜索关键词",textareaPlaceholder:"请输入备注",selectDate:"选择日期"}},oa='xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';function T(t,e=16){return`<svg ${oa.replace('width="16" height="16"',`width="${e}" height="${e}"`)}>${t}</svg>`}const L={search:T('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),changelog:T('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="8" y1="9" x2="10" y2="9"/>'),settings:T('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),inbox:T('<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'),calendar:T('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),clock:T('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),list:T('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'),check:T('<polyline points="20 6 9 17 4 12"/>'),checkSm:T('<polyline points="20 6 9 17 4 12"/>',12),chart:T('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'),cycle:T('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>'),arrowL:T('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',14),arrowR:T('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',14),close:T('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',14),plus:T('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'),flag:T('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>')},na=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" role="img" aria-label="无限进步">
  <path fill="#2B54C9" d="M513.313 466C526.778 455.319 540.325 444.742 553.952 434.27C560.396 429.327 569.749 421.716 576.232 417.504C605.39 398.56 637.438 389.647 672.238 393.891C703.301 397.583 731.636 413.43 751.044 437.963C761.43 451.351 769.537 468.172 774.2 484.403C774.804 487.249 775.939 491.928 776.084 494.676C777.94 504.03 778.416 524.719 775.19 533.573C770.356 562.75 751.574 591.013 727.544 608.155C699.442 627.995 664.614 635.87 630.709 630.05C576.183 620.729 553.29 585.806 511.455 558.086C495.642 569.941 480.395 583.656 464.413 595.531C456.75 601.225 448.66 608.434 440.182 612.841C433.061 616.937 420.924 622.944 413.088 624.902C410.945 625.674 407.968 626.596 405.777 627.148C370.733 635.983 339.526 633.19 308.197 615.389C280.555 599.342 260.345 573.054 251.942 542.216C244.23 513.068 248.373 482.053 263.464 455.951C280.615 426.113 306.265 405.23 339.66 396.371C368.719 388.663 410.534 393.634 436.437 408.746C443.863 412.412 450.103 417.462 456.827 422.145C475.529 435.172 494.15 454.266 513.313 466ZM345.658 587.599C375.701 575.937 391.575 562.548 416.269 542.977C429.442 532.725 442.394 522.193 455.117 511.388C444.663 502.559 433.408 493.983 422.764 485.39C397.201 464.752 380.655 450.801 349.388 439.8C309.483 480.403 307.407 545.139 345.658 587.599ZM679.402 584.494C679.707 583.674 679.548 583.9 680.106 583.219C696.427 563.292 706.672 536.181 707.081 510.316C707.395 484.414 697.428 459.444 679.365 440.877C676.108 439.662 661.872 445.683 658.626 447.132C633.212 458.471 613.216 477.409 591.547 494.471C587.948 497.305 571.988 509.268 569.957 511.383C579.502 519.657 591.354 528.152 601.269 535.963C622.329 552.554 641.983 571.163 667.105 581.451C669.731 582.527 675.406 585.033 678.234 585.136L679.402 584.494Z"/>
</svg>
`.trim();function da(){return`
    <header class="pms-topbar" role="banner">
      <div class="pms-brand-bar">
        <div class="pms-brand-bar-mark">${na}</div>
        <div class="pms-brand-bar-name">${i.brand.name}</div>
      </div>

      <div class="pms-global-search">
        <span class="pms-global-search-icon">${L.search}</span>
        <input
          id="pms-global-search-input"
          class="pms-global-search-input"
          type="text"
          placeholder="${i.topbar.searchPlaceholder}"
          autocomplete="off"
        />
        <span class="pms-global-search-kbd" aria-hidden="true">⌘K</span>
      </div>

      <div class="pms-topbar-tools">
        <button class="pms-topbar-tool-button" data-act="open-changelog" type="button">
          ${L.changelog}<span>${i.topbar.devLog}</span>
        </button>
        <button class="pms-topbar-tool-button" data-act="open-settings" type="button">
          ${L.settings}<span>${i.topbar.settings}</span>
        </button>
      </div>
    </header>
  `}function Ot(t){const[e,a,r]=t.split("-").map(Number);return new Date(e,a-1,r,0,0,0,0)}function me(t){const[e,a,r]=t.split("-").map(Number);return new Date(e,a-1,r,23,59,59,999)}function be(t,e,a){const r=new Date(t).getTime(),s=new Date(e).getTime(),o=Ot(a).getTime(),n=me(a).getTime();return r<n&&s>o}function ge(t,e){const a=new Date(t),r=Ot(e),s=a.getTime()-r.getTime(),o=Math.floor(s/6e4);return Math.max(0,Math.min(o,24*60))}function la(t,e,a){const r=ge(t,a),s=new Date(e),o=me(a),n=s.getTime()<o.getTime()?s:o,d=Math.floor((n.getTime()-Ot(a).getTime())/6e4);return Math.max(0,Math.min(d,24*60)-r)}function ca(t,e){const a=new Date(t),r=new Date(e);return a.getFullYear()!==r.getFullYear()||a.getMonth()!==r.getMonth()||a.getDate()!==r.getDate()}function pa(t,e,a){const r=te(t),s=te(e);return r===a&&s===a?"same_day":r===a?"cross_start":"cross_end"}function te(t){const e=new Date(t),a=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${a}-${r}-${s}`}function G(t){const e=new Date(t);return`${xt(e.getHours())}:${xt(e.getMinutes())}`}function Ct(){const t=new Date;return t.getHours()*60+t.getMinutes()}function at(t,e){const[a,r]=e.split(":").map(Number),[s,o,n]=t.split("-").map(Number);return new Date(s,o-1,n,a,r,0,0).toISOString()}function fe(t,e){const[a,r,s]=e.split("-").map(Number),[o,n,d]=t.split("-").map(Number),c=new Date(a,r-1,s).getTime(),p=new Date(o,n-1,d).getTime(),u=Math.round((p-c)/864e5);if(u===0)return"今天";if(u===1)return"明天";if(u===2)return"后天";if(u===-1)return"昨天";const g=new Date(o,n-1,d);return`${g.getMonth()+1}月${g.getDate()}日`}function xe(t){const[e,a,r]=t.split("-").map(Number),o=new Date(e,a-1,r).getDay(),n=o===0?5:(5-o+7)%7,d=new Date(e,a-1,r+(n===0?7:n));return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}function he(t){const[e,a,r]=t.split("-").map(Number),o=new Date(e,a-1,r).getDay(),n=o===0?1:(8-o)%7||7,d=new Date(e,a-1,r+n);return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}function tt(t,e){const[a,r,s]=t.split("-").map(Number),o=new Date(a,r-1,s+e);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}function K(t){const e=Math.floor(t/60)%24,a=t%60;return`${xt(e)}:${xt(a)}`}function rt(t){const[e,a]=t.split(":").map(Number);return(e||0)*60+(a||0)}function ua(t){if(t<60)return`${t}分钟`;const e=Math.floor(t/60),a=t%60;return a===0?`${e}小时`:`${e}小时${a}分钟`}function ft(t,e=15){return Math.round(t/e)*e}function we(t,e){const a=new Date(t,e-1,1),r=new Date(t,e,0);let s=a.getDay();s=s===0?6:s-1;const o=[];for(let d=s-1;d>=0;d--){const c=new Date(t,e-1,-d);o.push({key:Pt(c),date:c.getDate(),isCurrentMonth:!1})}for(let d=1;d<=r.getDate();d++){const c=new Date(t,e-1,d);o.push({key:Pt(c),date:d,isCurrentMonth:!0})}let n=1;for(;o.length<42;){const d=new Date(t,e,n++);o.push({key:Pt(d),date:d.getDate(),isCurrentMonth:!1})}return o}function Pt(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function xt(t){return String(t).padStart(2,"0")}function ot(){return $()}function va(t){return t.status!=="done"&&t.projectId===null}function ma(){return h().tasks.filter(va)}function ye(){return ma().length}function ba(){const t=ot();return h().tasks.filter(e=>e.status!=="done"&&!!e.dueDate&&e.dueDate>=t)}function ga(){return ba().length}function Dt(){return h().tasks.filter(t=>t.status!=="done")}function ke(){return Dt().length}function fa(){return h().tasks.filter(t=>t.status==="done")}function $e(){return fa().length}function xa(t){return h().tasks.filter(e=>e.projectId===t&&e.status!=="done").length}function nt(t){return h().timeBlocks.filter(e=>be(e.start,e.end,t))}function ha(t){return h().timeBlocks.find(e=>e.status==="running"&&be(e.start,e.end,t))??null}function De(t){const e=t??ot(),a=nt(e),r=a.filter(n=>n.status==="done").length,s=a.length,o=s===0?0:Math.round(r/s*100);return{done:r,total:s,pct:o}}function Vt(t){const e=Date.now();return h().timeBlocks.some(a=>a.taskId===t&&new Date(a.end).getTime()>e)}function ee(){const t=ot();return h().tasks.filter(e=>e.status!=="done"&&(e.dueDate===t||!!e.dueDate&&e.dueDate<t))}function wa(){return h().tasks.filter(t=>t.status!=="done"&&(t.priority==="P1"||t.priority==="P2"))}function ya(){const t=ot(),[e,a,r]=t.split("-").map(Number),s=new Date(e,a-1,r+7),o=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;return h().tasks.filter(n=>n.status!=="done"&&!!n.dueDate&&n.dueDate>=t&&n.dueDate<=o)}function Te(){return h().tasks.filter(t=>t.status!=="done"&&!Vt(t.id))}function ka(){return h().tasks.filter(t=>t.status!=="done"&&Vt(t.id))}function $a(){const t=ot();return h().tasks.filter(e=>e.status!=="done"&&!!e.dueDate&&e.dueDate<t&&!Vt(e.id))}function J(){return h()}function Ie(){const t=ye(),e=ga(),a=ke(),r=$e(),s=[{key:"timeblock",label:i.sidebar.nav.timeblock,iconKey:"clock"},{key:"inbox",label:i.sidebar.nav.inbox,iconKey:"inbox",count:t,emphasis:t>0},{key:"upcoming",label:i.sidebar.nav.upcoming,iconKey:"calendar",count:e},{key:"allTasks",label:i.sidebar.nav.allTasks,iconKey:"list",count:a},{key:"completed",label:i.sidebar.nav.completed,iconKey:"check",count:r},{key:"insight",label:i.sidebar.nav.insight,iconKey:"chart"},{key:"planning",label:i.sidebar.nav.planning,iconKey:"cycle"}],o=J().projects.slice(0,6);return`
    <aside class="pms-sidebar" role="navigation">
      <div class="pms-sidebar-nav-group">
        ${s.map(n=>Da(n,n.key==="timeblock")).join("")}
      </div>

      <div class="pms-sidebar-nav-group">
        <div class="pms-sidebar-group-label">${i.sidebar.sectionLabel.project}</div>
        ${o.map(n=>`
          <div class="pms-project-list-item" data-project="${ht(n.id)}">
            <span class="pms-project-list-item-dot" style="background:var(${n.colorToken})"></span>
            <span class="pms-project-list-item-name">${ht(n.name)}</span>
            <span class="pms-project-list-item-count">${xa(n.id)}</span>
          </div>
        `).join("")}
        ${J().projects.length>6?`<div class="pms-sidebar-view-all">${i.sidebar.viewAll}（共 ${J().projects.length} 个）</div>`:""}
      </div>

      <div class="pms-sidebar-kr-card">
        <div class="pms-sidebar-kr-card-title">${i.sidebar.sectionLabel.kr}</div>
        <div class="pms-sidebar-kr-card-body">
          本期重点：让 M1-New 骨架接入真实数据，跑通最小 CRUD。
        </div>
      </div>
    </aside>
  `}function Da(t,e){const a=t.emphasis?"pms-sidebar-nav-item-count is-emphasis":"pms-sidebar-nav-item-count";return`
    <div class="pms-sidebar-nav-item${e?" is-active":""}" data-nav="${ht(t.key)}">
      <span class="pms-sidebar-nav-item-icon">${L[t.iconKey]}</span>
      <span class="pms-sidebar-nav-item-label">${ht(t.label)}</span>
      ${typeof t.count=="number"?`<span class="${a}">${t.count}</span>`:""}
    </div>
  `}function ht(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ta(t,e={}){const a=F(),r={id:ue("task"),title:t.trim(),description:"",projectId:null,priority:"P3",status:"todo",createdAt:a,updatedAt:a,completedAt:null,scheduleStatus:"unscheduled",...e};return h().tasks.unshift(r),R(),r}function U(t,e){const r=h().tasks.find(s=>s.id===t);return r?(Object.assign(r,e),r.updatedAt=F(),R(),r):null}function Ia(t){const e=F();return U(t,{status:"done",completedAt:e,scheduleStatus:"done"})}function Sa(t){return U(t,{status:"todo",completedAt:null})}function Pa(t){const e=h(),a=e.tasks.findIndex(r=>r.id===t);return a===-1?!1:(e.tasks.splice(a,1),e.timeBlocks.forEach(r=>{r.taskId===t&&(r.taskId=null,r.source="manual",r.updatedAt=F())}),R(),!0)}function wt(t){const e=h(),a=e.tasks.find(n=>n.id===t);if(!a||a.status==="done")return;const r=Date.now(),s=e.timeBlocks.filter(n=>n.taskId===t&&new Date(n.end).getTime()>r);let o;if(!a.dueDate)o=s.length>0?"partial":"unscheduled";else{const n=$();a.dueDate<n?o=s.length>0?"partial":"overdue":o=s.length>0?"partial":"unscheduled"}a.scheduleStatus=o,a.updatedAt=F(),R()}function Se(t){return t?h().projects.find(e=>e.id===t)??null:null}function q(t){return h().tasks.find(e=>e.id===t)??null}const Ma={P1:"紧急",P2:"高",P3:"中",P4:"低"};function za(t){return Ma[t]}function Ea(t){return`is-${t.toLowerCase()}`}function Yt(t){const e=F(),a=t.source??(t.taskId?"task":"manual"),r={id:ue("tb"),title:t.title.trim(),start:t.start,end:t.end,status:t.status??"planned",taskId:t.taskId??null,source:a,createdAt:e,updatedAt:e};return h().timeBlocks.push(r),R(),t.taskId&&wt(t.taskId),r}function Kt(t,e){const r=h().timeBlocks.find(o=>o.id===t);if(!r)return null;const s=r.taskId;return Object.assign(r,e),r.updatedAt=F(),R(),s&&wt(s),e.taskId&&e.taskId!==s&&wt(e.taskId),r}function Aa(t){const e=h(),a=e.timeBlocks.findIndex(s=>s.id===t);if(a===-1)return!1;const r=e.timeBlocks[a].taskId;return e.timeBlocks.splice(a,1),R(),r&&wt(r),!0}function Pe(t){return h().timeBlocks.find(e=>e.id===t)??null}function ae(t,e){return Kt(t,{status:e})}function ja(t,e){return Kt(t,{reviewNote:e})}const Z=64;let W=$();function Wt(){return W}function Ba(t){W=t}function Ca(){W=$()}function La(){W=tt(W,1)}function Ha(){W=tt(W,-1)}function Me(){const t=W,e=$(),a=t===e,r=nt(t),s=De(t),o=new Date(t+"T12:00:00"),n=["日","一","二","三","四","五","六"],d=`${o.getFullYear()}年${o.getMonth()+1}月${o.getDate()}日`,c=`周${n[o.getDay()]}`,p=r.length>0?i.timeline.blockCountTpl(r.length,s.done):i.timeline.noBlocksToday;return`
<div class="tl-container">
  <!-- Header -->
  <div class="tl-header">
    <div class="tl-header-row1">
      <div class="tl-date-nav">
        <button class="tl-nav-btn" data-act="tl-prev-day" title="${x(i.timeline.prevDay)}" type="button">&#8249;</button>
        <button class="tl-today-btn" data-act="tl-today" type="button">${x(i.timeline.today)}</button>
        <button class="tl-nav-btn" data-act="tl-next-day" title="${x(i.timeline.nextDay)}" type="button">&#8250;</button>
      </div>
      <div class="tl-date-label"
           data-act="tl-open-date-picker"
           title="点击选择日期">${x(d)}</div>
      <div class="tl-weekday-label">${x(c)}</div>
      ${a?'<div class="tl-today-badge">今天</div>':""}
      <div style="flex:1"></div>
      <div class="tl-view-toggle">
        <button class="tl-view-btn is-active" type="button">${x(i.timeline.dayView)}</button>
        <button class="tl-view-btn is-disabled" type="button" title="${x(i.timeline.comingSoon)}">
          ${x(i.timeline.weekView)}
        </button>
        <button class="tl-view-btn is-disabled" type="button" title="${x(i.timeline.comingSoon)}">
          ${x(i.timeline.monthView)}
        </button>
      </div>
      <button class="tl-arrange-btn" data-act="open-ai-schedule" type="button">
        <svg width="14" height="14" viewBox="0 0 10 10" fill="none" class="tl-arrange-icon">
          <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
                fill="rgba(255,255,255,.85)"/>
        </svg>
        ${x(i.timeline.arrangeBtn)}
      </button>
    </div>
    <div class="tl-header-row2">${x(p)}</div>
  </div>

  <!-- Timeline body -->
  <div class="tl-scroll-wrap" id="pms-tl-scroll">
    ${_a(r,t,a)}
    <button class="tl-add-btn" data-act="add-timeblock" type="button">
      + ${x(i.timeline.addBtn)}
    </button>
  </div>
</div>`}function _a(t,e,a){const r=Array.from({length:25},(p,u)=>`
      <div class="tl-hour-row" style="top:${u*Z}px">
        <div class="tl-hour-label">${Lt(u)}:00</div>
        ${u<24?`<div class="tl-half-line" style="top:${Z/2}px"></div>`:""}
      </div>`).join(""),s=a?Ct()/60*Z:-1,o=a?`<div class="tl-now-line" id="pms-now-line" style="top:${s.toFixed(1)}px">
         <div class="tl-now-dot"></div>
         <div class="tl-now-label">${Va(Ct())}</div>
       </div>`:"",d=Fa(t,e).map(({block:p,top:u,height:g,col:f,totalCols:k})=>qa(p,u,g,f,k,e)).join("");return`
<div class="tl-inner" style="height:${24*Z}px" id="pms-tl-inner">
  <div class="tl-hours">${r}</div>
  <div class="tl-col">
    ${o}
    ${d}
    ${t.length===0?Na():""}
  </div>
</div>`}function Na(){return`
<div class="tl-empty">
  <div class="tl-empty-title">${x(i.timeline.emptyTitle)}</div>
  <div class="tl-empty-hint">${x(i.timeline.emptyHint)}</div>
</div>`}function qa(t,e,a,r,s,o){const n=pa(t.start,t.end,o),d=t.status==="running",c=t.status==="done",p=d?" tbl-running":c?" tbl-done":" tbl-planned",u=n==="cross_start"?" tbl-cd-start":n==="cross_end"?" tbl-cd-end":"",g=Ra(t),f=Oa(t),k=c?`<button class="tbl-action-btn tbl-action-review" data-act="tl-card-review" type="button">${x(i.block.actionReview)}</button>`:d?`<button class="tbl-action-btn tbl-action-done" data-act="tl-card-done" type="button">${x(i.block.actionDone)}</button>`:`<button class="tbl-action-btn tbl-action-start" data-act="tl-card-start" type="button">${x(i.block.actionStart)}</button>`,B=s>1?r/s*100:0,E=s>1?100/s-.5:100,j=n==="cross_start"?`<div class="tbl-cd-badge">${x(i.timeline.crossDayContinues)} ${x(G(t.end))}</div>`:n==="cross_end"?`<div class="tbl-cd-badge">${x(i.timeline.crossDayFrom)}</div>`:"",O=a<32;return`
<div class="tbl-block${p}${u}"
     style="top:${e.toFixed(1)}px;height:${a.toFixed(1)}px;left:${B.toFixed(1)}%;width:${E.toFixed(1)}%;"
     data-block-id="${x(t.id)}"
     title="${x(g)}">
  <div class="tbl-strip"></div>
  <div class="tbl-body">
    ${d?`<div class="tbl-running-badge">${x(i.block.statusRunningBadge)}</div>`:""}
    ${O?`<div class="tbl-title tbl-single">${x(g)}</div>`:`<div class="tbl-title">${x(g)}</div>
         <div class="tbl-time">${x(G(t.start))} — ${x(G(t.end))}</div>
         ${f&&a>=64?`<div class="tbl-source">${x(f)}</div>`:""}
         ${j}`}
    ${k}
  </div>
</div>`}function Fa(t,e){const a=[...t].sort((o,n)=>new Date(o.start).getTime()-new Date(n.start).getTime()),r=[],s=[];for(const o of a){const n=ge(o.start,e)/60*Z,d=la(o.start,o.end,e),c=Math.max(16,d/60*Z),p=n+c,u=new Set(s.filter(k=>k.end>n&&k.start<p).map(k=>k.col));let g=0;for(;u.has(g);)g++;s.push({start:n,end:p,col:g});const f=g+1;r.push({block:o,top:n,height:c,col:g,totalCols:f})}for(let o=0;o<r.length;o++){const n=r[o];for(let d=0;d<r.length;d++){const c=r[d];if(n.top<c.top+c.height&&n.top+n.height>c.top){const u=Math.max(n.totalCols,c.totalCols);r[o].totalCols=u,r[d].totalCols=u}}}return r}function Ra(t){if((t.source==="task"||!t.source)&&t.taskId){const e=q(t.taskId);if(e)return e.title}return t.title||"（无标题）"}function Oa(t){return t.source==="task"&&t.taskId?i.block.sourcePrefixTask:t.source==="periodic"?i.block.sourcePrefixPeriodic:t.source==="ai_draft"?i.block.sourcePrefixAiDraft:""}function Va(t){return`${Lt(Math.floor(t/60)%24)}:${Lt(t%60)}`}function Lt(t){return String(t).padStart(2,"0")}function x(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}let Ut="today",Ht=!1;function Ya(t){Ut=t}function Ka(){Ht=!Ht}function ze(){if(Ht)return Wa();const t=Za(),e=Te().length,a=Object.keys(i.pool.filters).map(r=>`
    <button class="atp-filter${Ut===r?" is-active":""}"
      data-act="pool-filter" data-value="${r}" type="button">
      ${I(i.pool.filters[r])}
    </button>`).join("");return`
<div class="pms-taskpool" id="pms-taskpool">
  <div class="atp-header">
    <div class="atp-title-row">
      <div class="atp-title">${I(i.pool.title)}</div>
      <div class="atp-count">· 未安排 ${e}</div>
      <button class="atp-collapse" data-act="pool-collapse" type="button">&#8249; ${I(i.pool.collapse)}</button>
    </div>
    <div class="atp-filters">${a}</div>
  </div>
  <div class="atp-list" id="pms-pool-list">
    ${t.length===0?`<div class="atp-empty">${I(i.pool.noTasks)}<br><span class="atp-empty-hint">${I(i.pool.noTasksHint)}</span></div>`:t.map(Ua).join("")}
  </div>
</div>`}function Wa(){return`
<div class="pms-taskpool pms-taskpool-collapsed" id="pms-taskpool">
  <button class="atp-expand-btn" data-act="pool-collapse" type="button"
    title="${I(i.pool.expand)}">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>
</div>`}function Ua(t){const e=Se(t.projectId),a=e?e.name:i.sidebar.nav.inbox,r=Ga(t.priority),s=Ja(t),o=Xa(t),n=t.dueDate&&t.dueDate<$(),d=t.scheduleStatus==="partial"||t.scheduleStatus==="scheduled";let c="",p="";if(t.dueDate){const g=$();t.dueDate<g?(c=`逾期 ${re(t.dueDate,g)}`,p="tp-due-late"):t.dueDate===g?(c="截止今日",p="tp-due-near"):c=`截止 ${re(t.dueDate,g)}`}const u=t.aiEstimatedMinutes?`AI 预估 ${Qa(t.aiEstimatedMinutes)}`:"";return`
<div class="tp-row${n?" tp-row-overdue":""}"
     data-task-id="${I(t.id)}"
     draggable="true"
     title="${I(t.title)}">
  <div class="tp-row-line1">
    <div class="tp-pri" style="background:${r}"></div>
    <div class="tp-title">${I(t.title)}</div>
    <div class="tp-status ${o}">${I(s)}</div>
    <button class="tp-arrange"
      data-act="${d?"pool-rearrange":"pool-arrange"}"
      data-task-id="${I(t.id)}"
      type="button">
      ${I(d?i.pool.rearrange:i.pool.arrange)}
    </button>
  </div>
  <div class="tp-row-line2">
    ${e?`<span class="tp-proj" style="color:var(${e.colorToken})">${I(a)}</span>`:`<span class="tp-proj">${I(a)}</span>`}
    ${c?`<span>·</span><span class="tp-due ${p}">${I(c)}</span>`:""}
    ${u?`<span>·</span><span class="tp-ai-est">
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" class="tp-ai-icon">
        <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
              fill="var(--accent)" opacity=".6"/>
      </svg>
      ${I(u)}</span>`:""}
  </div>
</div>`}function Ee(t){t.addEventListener("dragstart",e=>{var r;const a=e.target.closest("[data-task-id]");if(!(a!=null&&a.dataset.taskId)){e.preventDefault();return}(r=e.dataTransfer)==null||r.setData("text/plain",a.dataset.taskId),a.classList.add("tp-dragging")}),t.addEventListener("dragend",e=>{const a=e.target.closest("[data-task-id]");a==null||a.classList.remove("tp-dragging"),document.querySelectorAll(".tl-drop-indicator").forEach(r=>r.remove())})}function Za(){switch(Ut){case"today":return ee();case"highPri":return wa();case"upcoming":return ya();case"unscheduled":return Te();case"partial":return ka();case"overdue":return $a();default:return ee()}}function Ga(t){return{P1:"var(--danger)",P2:"var(--warning)",P3:"var(--text-4)",P4:"var(--text-4)"}[t]}function Ja(t){const e=i.pool.statusLabel;switch(t.scheduleStatus){case"partial":return e.partial;case"scheduled":return e.scheduled;case"done":return e.done;case"overdue":return e.overdue;default:return e.unscheduled}}function Xa(t){switch(t.scheduleStatus){case"partial":return"tp-status-partial";case"scheduled":return"tp-status-scheduled";case"done":return"tp-status-done";case"overdue":return"tp-status-overdue";default:return"tp-status-unscheduled"}}function re(t,e){const[a,r,s]=e.split("-").map(Number),[o,n,d]=t.split("-").map(Number),c=new Date(o,n-1,d).getTime()-new Date(a,r-1,s).getTime(),p=Math.round(c/864e5);return p===0?"今日":p===-1?"昨日":p===1?"明日":`${n}月${d}日`}function Qa(t){if(t<60)return`${t}分`;const e=Math.floor(t/60),a=t%60;return a===0?`${e}h`:`${e}h${a}分`}function I(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ae(){const t=Wt();return`
<aside class="pms-right-sidebar" role="complementary">
  ${tr()}
  ${er(t)}
  ${ar(t)}
  ${rr()}
  ${ir()}
</aside>`}function tr(){return`
<div class="rps">
  <div class="rps-title">${z(i.right.sectionCapture)}</div>
  <div class="qc-wrap">
    <span class="qc-plus">+</span>
    <input type="text" id="pms-quick-capture"
      class="qc-input"
      placeholder="${z(i.right.capturePlaceholder)}"
      autocomplete="off" />
    <span class="qc-kbd">&#8984;K</span>
  </div>
</div>`}function er(t){const e=ha(t);if(!e)return`<div class="rps">
      <div class="rps-title">${z(i.right.sectionRunning)}</div>
      <div class="rps-empty">${z(i.right.none)}</div>
    </div>`;const a=e.taskId?q(e.taskId):null,r=a?a.title:e.title,s=sr(e.start);return`
<div class="rps">
  <div class="rps-title">${z(i.right.sectionRunning)}</div>
  <div class="inprog-card">
    <div class="inprog-lbl">进行中</div>
    <div class="inprog-title">${z(r)}</div>
    <div class="inprog-time">${z(G(e.start))} — ${z(G(e.end))} · ${z(s)}</div>
  </div>
</div>`}function ar(t){const e=$(),a=t===e,r=De(t),s=2*Math.PI*22,o=s*(r.pct/100),n=r.total===0?"今日暂无时间块":`已完成 ${r.done} / ${r.total} 个时间块`;return`
<div class="rps">
  <div class="rps-title">${z(a?i.right.sectionProgress:"本日进度")}</div>
  <div class="pms-today-progress">
    <svg class="pms-today-progress-ring" viewBox="0 0 56 56">
      <circle cx="28" cy="28" r="22" fill="none" stroke="var(--bg-2)" stroke-width="5"/>
      <circle cx="28" cy="28" r="22" fill="none"
              stroke="var(--accent)" stroke-width="5"
              stroke-dasharray="${o.toFixed(1)} ${s.toFixed(1)}"
              transform="rotate(-90 28 28)" stroke-linecap="round"/>
    </svg>
    <div class="pms-today-progress-text">
      <div class="pms-progress-ratio pms-numeric">${r.done} / ${r.total}</div>
      <div class="pms-progress-label">${z(n)}</div>
    </div>
  </div>
</div>`}function rr(){return`
<div class="rps">
  <div class="rps-title">${z(i.right.sectionPeriodic)}</div>
  <div class="rps-empty" style="font-size:11px;color:var(--text-4)">周期事项 M1-New.3A 上线</div>
</div>`}function ir(){return`
<div class="rps">
  <div class="rps-title">${z(i.right.sectionAi)}</div>
  <div class="ai-slot">
    <div class="ai-slot-icon">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
              fill="var(--accent)" opacity=".8"/>
      </svg>
    </div>
    <div class="ai-slot-title">秘书式 AI 建议</div>
    <div class="ai-slot-sub">${z(i.right.aiNotConfigured)}</div>
    <div class="ai-slot-btn" data-act="open-ai-schedule">${z(i.right.aiConfigBtn)}</div>
  </div>
</div>`}function sr(t){const e=Math.max(0,Math.floor((Date.now()-new Date(t).getTime())/6e4));return e<60?`已用 ${e} 分钟`:`已用 ${Math.floor(e/60)} 小时 ${e%60} 分钟`}function z(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const or={id:"ai-placeholder",advice:"将当前任务拆成 3 个子任务",reason:"当前任务预计超过 90 分钟，连续作业易疲劳"};function je(t=or){return`
    <div class="pms-ai-suggestion-card" data-ai-id="${Mt(t.id)}">
      <div class="pms-ai-suggestion-card-row">
        <span class="pms-ai-suggestion-card-label">${i.ai.label}</span>
        <span class="pms-ai-suggestion-card-value">${Mt(t.advice)}</span>
      </div>
      <div class="pms-ai-suggestion-card-row">
        <span class="pms-ai-suggestion-card-label">${i.ai.reason}</span>
        <span class="pms-ai-suggestion-card-value">${Mt(t.reason)}</span>
      </div>
      <div class="pms-ai-suggestion-card-row">
        <span class="pms-ai-suggestion-card-label">${i.ai.action}</span>
        <div class="pms-ai-suggestion-card-actions">
          <button class="pms-primary-button" data-ai-act="accept" type="button">${i.ai.accept}</button>
          <button class="pms-secondary-button" data-ai-act="ignore" type="button">${i.ai.ignore}</button>
          <button class="pms-text-button" data-ai-act="edit" type="button">${i.ai.editAndAccept}</button>
        </div>
      </div>
    </div>
  `}function Mt(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}let w=null,N=!1,y=null;function nr(t){y=t}function dr(){return`
    <div class="pms-scrim" data-act="close-drawer" aria-hidden="true"></div>
    <aside class="pms-task-detail-drawer" id="pms-task-detail-drawer" role="dialog" aria-modal="false" aria-label="${i.drawer.title}">
      <div class="pms-task-detail-drawer-header">
        <div class="pms-task-detail-drawer-title" id="pms-drawer-title">${i.drawer.title}</div>
        <button class="pms-icon-button" data-act="close-drawer" type="button" title="${i.drawer.close}">
          ${L.close}
        </button>
      </div>
      <div class="pms-task-detail-drawer-body" id="pms-drawer-body">
        <div class="pms-empty-state">
          <div class="pms-empty-state-title">${i.drawer.empty}</div>
        </div>
      </div>
      <div class="pms-task-detail-drawer-footer" id="pms-drawer-footer" style="display:none">
        <button class="pms-text-button" data-act="drawer-toggle-done" type="button" id="pms-drawer-toggle-done"></button>
        <div class="pms-drawer-footer-spacer"></div>
        <button class="pms-danger-button is-secondary" data-act="drawer-delete" type="button" id="pms-drawer-delete">${i.buttons.danger}</button>
        <button class="pms-secondary-button" data-act="close-drawer" type="button">${i.drawer.close}</button>
        <button class="pms-primary-button" data-act="drawer-save" type="button">${i.drawer.saved}</button>
      </div>
    </aside>
  `}function Be(t){var o;const e=q(t);if(!e)return;w=t,N=!1;const a=document.getElementById("pms-drawer-title"),r=document.getElementById("pms-drawer-body"),s=document.getElementById("pms-drawer-footer");!a||!r||!s||(a.textContent=e.title||i.drawer.title,r.innerHTML=cr(e),s.style.display="flex",vt(e),(o=document.querySelector(".pms-app-m1"))==null||o.classList.add("is-detail-open"),pr(),lr())}let ie=!1;function lr(){ie||(ie=!0,ur())}function yt(){var e;(e=document.querySelector(".pms-app-m1"))==null||e.classList.remove("is-detail-open"),w=null,N=!1;const t=document.getElementById("pms-drawer-footer");t&&(t.style.display="none")}function cr(t){const e=Se(t.projectId),a=J().projects,r=t.status==="done"?i.status.done:i.status.notStarted;return`
    <div class="pms-task-detail-field">
      <div class="pms-task-detail-field-label">${i.drawer.title}</div>
      <input
        type="text"
        class="pms-text-field"
        id="pms-drawer-input-title"
        value="${Et(t.title)}"
        aria-label="${i.drawer.title}"
      />
    </div>

    <div class="pms-task-detail-attr-row">
      <div class="pms-task-detail-field">
        <div class="pms-task-detail-field-label">${i.drawer.project}</div>
        <select class="pms-text-field" id="pms-drawer-select-project" aria-label="${i.drawer.project}">
          <option value=""${e?"":" selected"}>无（${i.sidebar.nav.inbox}）</option>
          ${a.map(s=>`<option value="${Et(s.id)}"${(e==null?void 0:e.id)===s.id?" selected":""}>${Nt(s.name)}</option>`).join("")}
        </select>
      </div>
      <div class="pms-task-detail-field">
        <div class="pms-task-detail-field-label">${i.drawer.priority}</div>
        <select class="pms-text-field" id="pms-drawer-select-priority" aria-label="${i.drawer.priority}">
          ${["P1","P2","P3","P4"].map(s=>`<option value="${s}"${t.priority===s?" selected":""}>${s} · ${za(s)}</option>`).join("")}
        </select>
      </div>
      <div class="pms-task-detail-field">
        <div class="pms-task-detail-field-label">${i.drawer.status}</div>
        <div class="pms-task-detail-field-value">
          <span class="pms-pri-badge ${Ea(t.priority)}">${r}</span>
        </div>
      </div>
      <div class="pms-task-detail-field">
        <div class="pms-task-detail-field-label">${i.drawer.due}</div>
        <input
          type="date"
          class="pms-text-field"
          id="pms-drawer-input-due"
          value="${Et(t.dueDate??"")}"
          aria-label="${i.drawer.due}"
        />
      </div>
    </div>

    <div class="pms-task-detail-field">
      <div class="pms-task-detail-field-label">${i.drawer.description}</div>
      <textarea class="pms-textarea" id="pms-drawer-input-desc" placeholder="为这条任务补充背景或步骤…">${Nt(t.description??"")}</textarea>
    </div>

    <div class="pms-task-detail-field">
      <div class="pms-task-detail-field-label">${i.drawer.aiSection}</div>
      ${je()}
    </div>

    <div class="pms-task-detail-field" id="pms-drawer-save-status" style="display:none">
      <div class="pms-task-detail-field-value" id="pms-drawer-save-text" style="color:var(--text-3);font-size:var(--fs-meta)"></div>
    </div>
  `}function vt(t){const e=document.getElementById("pms-drawer-toggle-done"),a=document.getElementById("pms-drawer-delete");e&&(e.textContent=t.status==="done"?"取消完成":"标记完成"),a&&(a.textContent=N?"确认删除":i.buttons.danger,a.classList.toggle("is-secondary",!N))}function pr(){const t=document.getElementById("pms-drawer-input-title"),e=document.getElementById("pms-drawer-input-desc"),a=document.getElementById("pms-drawer-select-project"),r=document.getElementById("pms-drawer-select-priority"),s=document.getElementById("pms-drawer-input-due"),o=()=>_t(i.drawer.saveNotice);t==null||t.addEventListener("blur",()=>{var c;if(!w)return;const n=t.value.trim();if(!n){t.value=((c=q(w))==null?void 0:c.title)??"";return}U(w,{title:n}),o();const d=document.getElementById("pms-drawer-title");d&&(d.textContent=n),y==null||y()}),e==null||e.addEventListener("blur",()=>{w&&(U(w,{description:e.value}),o(),y==null||y())}),a==null||a.addEventListener("change",()=>{if(!w)return;const n=a.value||null;U(w,{projectId:n}),o(),y==null||y()}),r==null||r.addEventListener("change",()=>{w&&(U(w,{priority:r.value}),o(),y==null||y())}),s==null||s.addEventListener("change",()=>{w&&(U(w,{dueDate:s.value||void 0}),o(),y==null||y())})}function ur(){var t,e;(t=document.getElementById("pms-drawer-toggle-done"))==null||t.addEventListener("click",()=>{if(!w)return;const a=q(w);if(!a)return;const r=a.status==="done"?Sa(w):Ia(w);r&&(vt(r),_t(r.status==="done"?"已标记为完成":"已恢复为未完成")),y==null||y()}),(e=document.getElementById("pms-drawer-delete"))==null||e.addEventListener("click",()=>{if(w){if(!N){N=!0;const a=q(w);a&&vt(a),setTimeout(()=>{if(!N)return;N=!1;const r=w?q(w):null;r&&vt(r)},5e3);return}Pa(w),w=null,N=!1,yt(),y==null||y()}}),document.querySelectorAll('[data-act="drawer-save"]').forEach(a=>{a.addEventListener("click",()=>{var r;(r=document.activeElement)==null||r.blur(),_t(i.drawer.saved)})})}let zt=null;function _t(t){const e=document.getElementById("pms-drawer-save-status"),a=document.getElementById("pms-drawer-save-text");!e||!a||(a.textContent=t,e.style.display="block",zt&&window.clearTimeout(zt),zt=window.setTimeout(()=>{e.style.display="none"},1600))}function Nt(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Et(t){return Nt(t)}const Y="pms-tb-popover";let l=null,X=null,Zt=null;function vr(t){X=t}function At(t,e){const a=$();if(t){const r=Pe(t);if(!r)return;const s=new Date(r.start),o=new Date(r.end),[n,d]=[s.getFullYear(),s.getMonth()+1];l={blockId:t,date:$(s),startHhmm:`${V(s.getHours())}:${V(s.getMinutes())}`,endHhmm:`${V(o.getHours())}:${V(o.getMinutes())}`,title:r.title,status:r.status,taskId:r.taskId??null,isEndNextDay:ca(r.start,r.end),showDeleteConfirm:!1,showDatePicker:!1,dpViewYear:n,dpViewMonth:d,showStartTimePicker:!1,showEndTimePicker:!1,errMsg:""}}else{const r=new Date,s=r.getHours(),o=Math.ceil(r.getMinutes()/30)*30,n=o>=60?0:o,d=o>=60?s+1>=24?23:s+1:s,c=d+1>=24?23:d+1,[p,u]=[r.getFullYear(),r.getMonth()+1];l={blockId:null,date:a,startHhmm:`${V(d)}:${V(n)}`,endHhmm:`${V(c)}:${V(n)}`,title:"",status:"planned",taskId:null,isEndNextDay:!1,showDeleteConfirm:!1,showDatePicker:!1,dpViewYear:p,dpViewMonth:u,showStartTimePicker:!1,showEndTimePicker:!1,errMsg:""}}Zt=(e==null?void 0:e.getBoundingClientRect())??null,mr()}function st(){var t,e;(t=document.getElementById(Y))==null||t.remove(),(e=document.getElementById(`${Y}-scrim`))==null||e.remove(),l=null,Zt=null}function jt(){return!!document.getElementById(Y)}function mr(){var a,r;if((a=document.getElementById(Y))==null||a.remove(),(r=document.getElementById(`${Y}-scrim`))==null||r.remove(),!l)return;const t=document.createElement("div");t.id=`${Y}-scrim`,t.style.cssText="position:fixed;inset:0;z-index:499;",t.setAttribute("data-act","close-tb-popover"),document.body.appendChild(t);const e=document.createElement("div");e.id=Y,e.className="tbp-wrap",e.innerHTML=Le(l),document.body.appendChild(e),Ce(e),setTimeout(()=>{var s;(s=e.querySelector(".tbp-title-input"))==null||s.focus()},50)}function P(){if(!l)return;const t=document.getElementById(Y);t&&(t.innerHTML=Le(l),Ce(t))}function Ce(t){const a=window.innerWidth,r=window.innerHeight,s=Zt;let o,n;s?s.right+420+8<=a-8?(o=s.right+8,n=s.top):s.left-420-8>=8?(o=s.left-420-8,n=s.top):(o=Math.max(8,(a-420)/2),n=80):(o=Math.max(8,(a-420)/2),n=80);const d=t.scrollHeight||480;n+d>r-16&&(n=Math.max(16,r-d-16)),t.style.cssText=`position:fixed;left:${o}px;top:${n}px;width:420px;z-index:500;`}function Le(t){if(t.showDeleteConfirm)return br();const e=!!t.blockId,a=$();let r="";if(e&&t.taskId){const u=q(t.taskId);r=`<div class="tbp-source-row">
      <span class="tbp-source-badge">来源：任务 &middot; ${u?b(u.title):"（任务已删除）"}</span>
      ${u?`<button class="tbp-source-link" data-act="tbp-view-task" data-task-id="${b(t.taskId)}" type="button">查看</button>`:""}
    </div>`}const o=[{k:"planned",l:i.popover.statusPlanned},{k:"running",l:i.popover.statusRunning},{k:"done",l:i.popover.statusDone}].map(u=>`<button class="tbp-seg-btn${t.status===u.k?" is-active":""}"
      data-act="tbp-status" data-value="${u.k}" type="button">${b(u.l)}</button>`).join(""),n=!t.isEndNextDay&&wr(t)?`<div class="tbp-endnextday-hint">${b(i.popover.errEndEarly)}
        <button class="tbp-btn-sm" data-act="tbp-confirm-nextday" type="button">${b(i.popover.confirmNextDay)}</button>
        <button class="tbp-btn-sm is-ghost" data-act="tbp-cancel-nextday" type="button">${b(i.popover.confirmNo)}</button>
       </div>`:"",d=t.isEndNextDay?`<div class="tbp-cross-day-label">跨日 · 次日 ${b(t.endHhmm)}（共 ${b(yr(t))}）</div>`:"",c=t.errMsg?`<div class="tbp-err">${b(t.errMsg)}</div>`:"",p=fe(t.date,a);return`
<div class="tbp-head">
  <div class="tbp-head-title">${b(e?i.popover.titleEdit:i.popover.titleCreate)}</div>
  <button class="tbp-close" data-act="close-tb-popover" type="button">&#x2715;</button>
</div>
${r}
<div class="tbp-body">
  <input class="tbp-title-input" type="text"
    placeholder="${b(i.popover.placeholder)}"
    value="${b(t.title)}"
    data-act="tbp-title-input"
    autocomplete="off" />
  ${c}
  <div class="tbp-field-row">
    <span class="tbp-field-lbl">${b(i.popover.fieldStatus)}</span>
    <div class="tbp-seg">${o}</div>
  </div>
  <div class="tbp-field-row">
    <span class="tbp-field-lbl">${b(i.popover.fieldDate)}</span>
    <button class="tbp-field-btn${t.showDatePicker?" is-active":""}"
      data-act="tbp-toggle-date" type="button">${b(p)}</button>
  </div>
  ${t.showDatePicker?gr(t):""}
  <div class="tbp-field-row">
    <span class="tbp-field-lbl">${b(i.popover.fieldTime)}</span>
    <div class="tbp-time-row">
      <button class="tbp-field-btn${t.showStartTimePicker?" is-active":""}"
        data-act="tbp-toggle-start-tp" type="button">${b(t.startHhmm)}</button>
      <span class="tbp-time-sep">—</span>
      <button class="tbp-field-btn${t.showEndTimePicker?" is-active":""}${t.isEndNextDay?" tbp-nextday":""}"
        data-act="tbp-toggle-end-tp" type="button">${b(t.endHhmm)}</button>
    </div>
  </div>
  ${n}
  ${d}
  ${t.showStartTimePicker?se("start",t.startHhmm,t.startHhmm):""}
  ${t.showEndTimePicker?se("end",t.endHhmm,t.startHhmm):""}
</div>
<div class="tbp-footer">
  ${e?`<button class="tbp-del-btn" data-act="tbp-delete" type="button">${b(i.popover.btnDelete)}</button>`:""}
  ${e&&t.status==="done"?`<button class="tbp-review-btn" data-act="tbp-open-review" type="button">${b(i.popover.btnReview)}</button>`:""}
  <div style="flex:1"></div>
  <button class="tbp-ghost-btn" data-act="close-tb-popover" type="button">${b(i.popover.btnCancel)}</button>
  <button class="tbp-save-btn" data-act="tbp-save" type="button">${b(i.popover.btnSave)}</button>
</div>`}function br(){return`
<div class="tbp-body" style="padding:20px 16px;">
  <div class="tbp-dc-title">${b(i.popover.deleteConfirmTitle)}</div>
  <div class="tbp-dc-desc">${b(i.popover.deleteConfirmDesc)}</div>
  <div class="tbp-dc-actions">
    <button class="tbp-ghost-btn" data-act="tbp-cancel-delete" type="button">${b(i.popover.deleteConfirmCancel)}</button>
    <button class="tbp-danger-btn" data-act="tbp-confirm-delete" type="button">${b(i.popover.deleteConfirmOk)}</button>
  </div>
</div>`}function gr(t){const e=$(),a=we(t.dpViewYear,t.dpViewMonth),r=[{k:e,l:i.datePicker.today},{k:tt(e,1),l:i.datePicker.tomorrow},{k:xe(e),l:i.datePicker.thisWeekFriday},{k:he(e),l:i.datePicker.nextMonday}],s=a.map(({key:o,date:n,isCurrentMonth:d})=>`<div class="${["dp-cell",o===e?"dp-today":"",o===t.date?"dp-selected":"",d?"":"dp-other"].filter(Boolean).join(" ")}" data-act="tbp-pick-date" data-value="${b(o)}">${n}</div>`).join("");return`<div class="tbp-inline-dp">
    <div class="dp-header">
      <button class="dp-nav-btn" data-act="tbp-dp-prev" type="button">&#8249;</button>
      <div class="dp-title">${t.dpViewYear}年${t.dpViewMonth}月</div>
      <button class="dp-nav-btn" data-act="tbp-dp-next" type="button">&#8250;</button>
    </div>
    <div class="dp-shortcuts">
      ${r.map(o=>`<button class="dp-shortcut${o.k===t.date?" dp-sc-active":""}" data-act="tbp-pick-date" data-value="${b(o.k)}" type="button">${b(o.l)}</button>`).join("")}
    </div>
    <div class="dp-weekdays">${i.datePicker.weekdays.map(o=>`<div class="dp-wd">${b(o)}</div>`).join("")}</div>
    <div class="dp-grid">${s}</div>
  </div>`}function se(t,e,a){const r=rt(a),s=ft(Ct(),30),o=rt(e),n=Math.ceil((r+1)/60)*60,d=t==="end"?[{l:i.timePicker.quickAdd30m,m:r+30},{l:i.timePicker.quickAdd1h,m:r+60},{l:i.timePicker.quickAdd2h,m:r+120},{l:i.timePicker.quickToNextHour,m:n}]:[],c=[];for(let p=0;p<24*60;p+=30){const u=K(p),g=p===o,f=p===s,k=f?`${u}${i.timePicker.nowSuffix}`:u,B=["tp-opt",g?"tp-opt-selected":"",f&&!g?"tp-opt-now":""].filter(Boolean).join(" ");c.push(`<div class="${B}" data-act="tbp-pick-time" data-which="${t}" data-mins="${p}">${b(k)}</div>`)}return`<div class="tbp-inline-tp">
    ${d.length?`<div class="tp-quicks">
      ${d.map(p=>`<button class="tp-quick-btn" data-act="tbp-pick-time-quick" data-which="${t}" data-mins="${p.m}" type="button">${b(p.l)}</button>`).join("")}
    </div>`:""}
    <div class="tp-list" style="max-height:160px;overflow-y:auto">${c.join("")}</div>
  </div>`}function fr(t,e){if(l)switch(t){case"close-tb-popover":st();return;case"tbp-status":{const a=e.dataset.value;a&&(l.status=a,P());return}case"tbp-toggle-date":l.showDatePicker=!l.showDatePicker,l.showStartTimePicker=!1,l.showEndTimePicker=!1,P();return;case"tbp-dp-prev":l.dpViewMonth-=1,l.dpViewMonth<1&&(l.dpViewMonth=12,l.dpViewYear-=1),P();return;case"tbp-dp-next":l.dpViewMonth+=1,l.dpViewMonth>12&&(l.dpViewMonth=1,l.dpViewYear+=1),P();return;case"tbp-pick-date":{const a=e.dataset.value;a&&(l.date=a,l.showDatePicker=!1,P());return}case"tbp-toggle-start-tp":l.showStartTimePicker=!l.showStartTimePicker,l.showEndTimePicker=!1,l.showDatePicker=!1,P();return;case"tbp-toggle-end-tp":l.showEndTimePicker=!l.showEndTimePicker,l.showStartTimePicker=!1,l.showDatePicker=!1,P();return;case"tbp-pick-time":{const a=e.dataset.which,r=Number(e.dataset.mins);a==="start"?(l.startHhmm=K(r),l.showStartTimePicker=!1):(l.endHhmm=K(r),l.showEndTimePicker=!1),l.errMsg="",P();return}case"tbp-pick-time-quick":{const a=e.dataset.which,r=Number(e.dataset.mins),s=K(r>=24*60?r%(24*60):r);a==="start"?(l.startHhmm=s,l.showStartTimePicker=!1):(l.endHhmm=s,l.showEndTimePicker=!1),l.errMsg="",P();return}case"tbp-confirm-nextday":l.isEndNextDay=!0,l.errMsg="",P();return;case"tbp-cancel-nextday":l.isEndNextDay=!1,P();return;case"tbp-save":hr();return;case"tbp-delete":l.showDeleteConfirm=!0,P();return;case"tbp-cancel-delete":l.showDeleteConfirm=!1,P();return;case"tbp-confirm-delete":l.blockId&&(Aa(l.blockId),st(),X==null||X());return;case"tbp-view-task":{const a=e.dataset.taskId;a&&(st(),document.dispatchEvent(new CustomEvent("pms-open-task-drawer",{detail:{taskId:a}})));return}case"tbp-open-review":return}}function xr(t){l&&t.classList.contains("tbp-title-input")&&(l.title=t.value,l.errMsg="")}function hr(){if(!l)return;if(!l.title.trim()){l.errMsg=i.popover.errTitle,P();return}const t=at(l.date,l.startHhmm),e=l.isEndNextDay?tt(l.date,1):l.date,a=at(e,l.endHhmm);if(!l.isEndNextDay&&new Date(a).getTime()<=new Date(t).getTime()){l.errMsg=i.popover.errEndEarly,P();return}l.blockId?Kt(l.blockId,{title:l.title.trim(),start:t,end:a,status:l.status}):Yt({title:l.title.trim(),start:t,end:a,status:l.status}),st(),X==null||X()}function wr(t){return rt(t.endHhmm)<rt(t.startHhmm)}function yr(t){const e=rt(t.startHhmm),a=rt(t.endHhmm);return ua(Math.max(0,t.isEndNextDay?24*60-e+a:a-e))}function V(t){return String(t).padStart(2,"0")}function b(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}let kt=null;const Tt="pms-review-flyout";function kr(t,e){Q(),kt=t;const a=Pe(t);if(!a)return;const r=document.createElement("div");r.id=Tt,r.className="rf-wrap",r.innerHTML=$r(a.title,a.start,a.end,a.reviewNote??""),document.body.appendChild(r),Dr(r,e),setTimeout(()=>{var s;(s=r.querySelector(".rf-textarea"))==null||s.focus()},50),setTimeout(()=>{document.addEventListener("click",He,{once:!1,capture:!0})},0)}function Q(){var t;(t=document.getElementById(Tt))==null||t.remove(),document.removeEventListener("click",He,!0),kt=null}function $r(t,e,a,r){return`
<div class="rf-head">
  <div class="rf-icon">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
            fill="var(--accent)" opacity=".8"/>
    </svg>
  </div>
  <div class="rf-title">${_(i.review.title)}</div>
  <button class="rf-close" data-act="close-review" type="button">&#x2715;</button>
</div>
<div class="rf-block-name">${_(t)}</div>
<div class="rf-block-time">${_(G(e))} — ${_(G(a))}</div>
<textarea class="rf-textarea" placeholder="${_(i.review.placeholder)}"
  rows="4">${_(r)}</textarea>
<div class="rf-ai-hint">
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
          fill="var(--accent)" opacity=".5"/>
  </svg>
  ${_(i.review.aiHint)}
</div>
<div class="rf-actions">
  <button class="rf-skip" data-act="close-review" type="button">${_(i.review.skip)}</button>
  <div style="flex:1"></div>
  <button class="rf-save" data-act="save-review" type="button">${_(i.review.save)}</button>
</div>`}function Dr(t,e){const a=e.getBoundingClientRect(),r=320,s=window.innerWidth,o=window.innerHeight;let n=a.right+8;n+r>s-8&&(n=a.left-r-8),n<8&&(n=8);let d=a.top;d+300>o-8&&(d=o-308),d<8&&(d=8),t.style.cssText=`position:fixed;left:${n}px;top:${d}px;z-index:600;`}function He(t){const e=document.getElementById(Tt);if(!e){Q();return}e.contains(t.target)||Q()}function Tr(t){if(t==="close-review"){Q();return}if(t==="save-review"){const e=document.getElementById(Tt);if(!e||!kt){Q();return}const a=e.querySelector(".rf-textarea"),r=(a==null?void 0:a.value)??"";ja(kt,r),Q();return}}function _(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ir(t){const{dateKey:e,availStart:a,availEnd:r,selectedTasks:s,skipBlocks:o=[]}=t,n=$(),c=nt(e).filter(f=>!o.includes(f.id)).map(f=>{const k=new Date(f.start),B=new Date(f.end),E=new Date(e+"T00:00:00"),j=Math.floor((k.getTime()-E.getTime())/6e4),O=Math.floor((B.getTime()-E.getTime())/6e4);return[Math.max(0,j),Math.min(24*60,O)]}),p=[...s].sort((f,k)=>{const B={P1:0,P2:1,P3:2,P4:3},E=f.dueDate&&f.dueDate<n?-100:0,j=k.dueDate&&k.dueDate<n?-100:0,O=f.dueDate?new Date(f.dueDate).getTime():Number.MAX_SAFE_INTEGER,St=k.dueDate?new Date(k.dueDate).getTime():Number.MAX_SAFE_INTEGER,lt=B[f.priority]-B[k.priority];return E!==j?E-j:lt!==0?lt:O-St});let u=a;const g=[];for(const f of p){const k=f.aiEstimatedMinutes??60,B=15;let E=ft(u,B),j=E+k,O=0;for(;O<100;){const Qt=c.find(([Ve,Ye])=>Ye>E&&Ve<j);if(!Qt)break;E=ft(Qt[1]+5,B),j=E+k,O++}if(j>r)break;const St=at(e,K(E)),lt=at(e,K(j));g.push({id:`draft_${f.id}_${Date.now()}`,title:f.title,sourceType:"task",taskId:f.id,start:St,end:lt,reason:Sr(f,n)}),c.push([E,j]),u=j+5}return g}function Sr(t,e){return t.dueDate&&t.dueDate<e?`逾期任务 · ${t.priority}`:t.dueDate===e?`今日截止 · ${t.priority}`:t.priority==="P1"?"紧急优先级":t.priority==="P2"?"高优先级":t.priority}const Gt="pms-ai-schedule-card",_e="pms-ai-schedule-scrim";let m={phase:"unconfigured"},mt=null;function Pr(t){mt=t}function Mr(){Jt(),m={phase:"interview",page:1,data:{dateKey:$(),availStart:7*60,availEnd:23*60,fixedBlockIds:[],selectedTaskIds:[],skippedTaskIds:[]}},zr()}function Jt(){var t,e;(t=document.getElementById(Gt))==null||t.remove(),(e=document.getElementById(_e))==null||e.remove()}function zr(){const t=document.createElement("div");t.id=_e,t.className="ai-card-scrim",t.setAttribute("data-act","close-ai-schedule"),document.body.appendChild(t);const e=document.createElement("div");e.id=Gt,e.className="ai-card-wrap",e.innerHTML=Ne(),document.body.appendChild(e)}function C(){const t=document.getElementById(Gt);t&&(t.innerHTML=Ne())}function Ne(){switch(m.phase){case"unconfigured":return Er();case"interview":return Br(m.page,m.data);case"loading":return Ar();case"error":return jr(m.errMsg);case"draft":return Nr(m.items,m.data);case"applied":return qr()}}function H(t,e=8){const a=Array.from({length:e},(r,s)=>`<div class="${s<t-1?"ai-prog-done":s===t-1?"ai-prog-active":"ai-prog-empty"}"></div>`).join("");return`
<div class="ai-card-top">
  <div class="ai-card-logo">
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
      <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
            fill="white" opacity=".9"/>
    </svg>
  </div>
  <div class="ai-card-lbl">${v(i.ai.arrange.cardTitle)}</div>
  <div class="ai-prog">${a}</div>
  <button class="ai-card-close" data-act="close-ai-schedule" type="button">&#x2715;</button>
</div>`}function dt(t,e,a){return`
<div class="ai-card-footer">
  <button class="ai-skip-btn" data-act="close-ai-schedule" type="button">${v(i.ai.arrange.cancelBtn)}</button>
  <div style="flex:1"></div>
  ${e?`<button class="ai-prev-btn" data-act="ai-prev" type="button">${v(i.ai.arrange.prevBtn)}</button>`:""}
  <button class="ai-next-btn" data-act="ai-next" type="button">
    ${v(a??i.ai.arrange.nextBtn)} ›
  </button>
</div>`}function Er(){return`
${H(1)}
<div class="ai-card-body ai-state-body">
  <div class="ai-state-icon unconfigured">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="var(--text-3)" stroke-width="1.5"/>
      <path d="M10 6v5" stroke="var(--text-3)" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="10" cy="14" r="1" fill="var(--text-3)"/>
    </svg>
  </div>
  <div class="ai-state-title">${v(i.ai.arrange.unconfiguredTitle)}</div>
  <div class="ai-state-desc">${v(i.ai.arrange.unconfiguredDesc)}</div>
  <div class="ai-state-actions">
    <button class="ai-action-btn is-primary" data-act="ai-use-mock" type="button">
      ${v(i.ai.arrange.mockBtn)}
    </button>
    <button class="ai-action-btn is-sec" data-act="close-ai-schedule" type="button">
      ${v(i.ai.arrange.cancelBtn)}
    </button>
  </div>
</div>`}function Ar(){return`
${H(6,6)}
<div class="ai-card-body ai-state-body">
  <div class="ai-state-icon loading">
    <svg width="20" height="20" viewBox="0 0 10 10" fill="none">
      <path d="M5 1L6.2 3.9H9.5L6.8 5.9 7.7 9 5 7.2 2.3 9 3.2 5.9.5 3.9H3.8L5 1Z"
            fill="var(--accent)" opacity=".8"/>
    </svg>
  </div>
  <div class="ai-state-title">${v(i.ai.arrange.loadingTitle)}</div>
  <div class="ai-loading-dots">
    <div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div>
  </div>
</div>`}function jr(t){return`
${H(6)}
<div class="ai-card-body ai-state-body">
  <div class="ai-state-icon error">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="var(--danger)" stroke-width="1.5"/>
      <path d="M10 6v5M10 14v.5" stroke="var(--danger)" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </div>
  <div class="ai-state-title">${v(i.ai.arrange.errorTitle)}</div>
  <div class="ai-state-desc">${v(t||i.ai.arrange.errorDesc)}</div>
  <div class="ai-state-actions">
    <button class="ai-action-btn is-primary" data-act="ai-use-mock" type="button">${v(i.ai.arrange.mockBtn)}</button>
    <button class="ai-action-btn is-sec" data-act="close-ai-schedule" type="button">${v(i.ai.arrange.cancelBtn)}</button>
  </div>
</div>`}function Br(t,e){const a=$();switch(t){case 1:return oe(e,a);case 2:return Cr(e);case 3:return Lr(e);case 4:return Hr(e,a);case 5:return _r(e,a);default:return oe(e,a)}}function oe(t,e){const a=[{k:e,l:i.ai.arrange.pages.p1Today},{k:tt(e,1),l:i.ai.arrange.pages.p1Tomorrow},{k:tt(e,2),l:i.ai.arrange.pages.p1Dayafter}];return`
${H(1)}
<div class="ai-card-body">
  <div class="ai-question">${v(i.ai.arrange.pages.p1Title)}</div>
  <div class="ai-options">
    ${a.map(r=>`
      <button class="ai-option${t.dateKey===r.k?" is-selected":""}"
        data-act="ai-p1-date" data-value="${v(r.k)}" type="button">
        <div class="ai-opt-icon"></div>
        ${v(r.l)}
      </button>`).join("")}
    <button class="ai-option" data-act="ai-p1-custom" type="button">
      <div class="ai-opt-icon"></div>
      ${v(i.ai.arrange.pages.p1Custom)} →
    </button>
  </div>
</div>
${dt(1,!1)}`}function Cr(t){const e=[{start:420,end:1380,l:i.ai.arrange.pages.p2Default},{start:480,end:1380,l:i.ai.arrange.pages.p2Late},{start:420,end:1320,l:i.ai.arrange.pages.p2Early}];return`
${H(2)}
<div class="ai-card-body">
  <div class="ai-question">${v(i.ai.arrange.pages.p2Title)}</div>
  <div class="ai-options">
    ${e.map(a=>`
      <button class="ai-option${t.availStart===a.start&&t.availEnd===a.end?" is-selected":""}"
        data-act="ai-p2-avail" data-start="${a.start}" data-end="${a.end}" type="button">
        <div class="ai-opt-icon"></div>
        ${v(a.l)}
      </button>`).join("")}
  </div>
</div>
${dt(2,!0)}`}function Lr(t){const e=t.dateKey,a=nt(e);return`
${H(3)}
<div class="ai-card-body">
  <div class="ai-question">${v(i.ai.arrange.pages.p3Title)}</div>
  <div class="ai-hint-text">${v(i.ai.arrange.pages.p3Hint)}</div>
  ${a.length===0?'<div class="ai-empty-hint">今天暂无已有安排，AI 会从空白开始规划。</div>':`<div class="ai-task-list">
        ${a.map(r=>{const s=!t.fixedBlockIds.includes(r.id)||t.fixedBlockIds.length===0;return`<div class="ai-task-row${s?" is-selected":""}"
            data-act="ai-p3-toggle" data-block-id="${v(r.id)}">
            <div class="ai-check">${s?"✓":""}</div>
            <div style="flex:1;font-size:12.5px;font-weight:600">${v(r.title)}</div>
            <div style="font-size:10.5px;color:var(--text-4)">${qt(new Date(r.start).getHours()*60+new Date(r.start).getMinutes())} — ${qt(new Date(r.end).getHours()*60+new Date(r.end).getMinutes())}</div>
          </div>`}).join("")}
      </div>`}
</div>
${dt(3,!0)}`}function Hr(t,e){const a=Dt().filter(r=>r.status!=="done").sort((r,s)=>{const o={P1:0,P2:1,P3:2,P4:3},n=r.dueDate&&r.dueDate<e?-100:0,d=s.dueDate&&s.dueDate<e?-100:0;return n!==d?n-d:o[r.priority]-o[s.priority]}).slice(0,10);return`
${H(4)}
<div class="ai-card-body">
  <div class="ai-question">${v(i.ai.arrange.pages.p4Title)}</div>
  <div class="ai-hint-text">${v(i.ai.arrange.pages.p4Hint)}</div>
  <div class="ai-task-list">
    ${a.map(r=>{const s=t.selectedTaskIds.includes(r.id);return`<div class="ai-task-row${s?" is-selected":""}"
        data-act="ai-p4-toggle" data-task-id="${v(r.id)}">
        <div class="ai-check">${s?"✓":""}</div>
        <div class="ai-pri-dot" style="background:${Vr(r.priority)}"></div>
        <div class="ai-task-title">${v(r.title)}</div>
        <div class="ai-task-est">${r.aiEstimatedMinutes?Or(r.aiEstimatedMinutes):""}</div>
      </div>`}).join("")}
  </div>
</div>
${dt(4,!0)}`}function _r(t,e){const a=Dt().filter(r=>r.status!=="done"&&!t.selectedTaskIds.includes(r.id)).slice(0,8);return`
${H(5)}
<div class="ai-card-body">
  <div class="ai-question">${v(i.ai.arrange.pages.p5Title)}</div>
  ${a.length===0?'<div class="ai-empty-hint">所有任务均已选入，无需确认暂不安排。</div>':`<div class="ai-task-list">
        ${a.map(r=>{const s=t.skippedTaskIds.includes(r.id);return`<div class="ai-task-row${s?" is-selected":""}"
            data-act="ai-p5-toggle" data-task-id="${v(r.id)}">
            <div class="ai-check">${s?"✓":""}</div>
            <div class="ai-task-title">${v(r.title)}</div>
            <div class="ai-task-est">${r.dueDate&&r.dueDate<e?"逾期":r.priority}</div>
          </div>`}).join("")}
      </div>`}
</div>
${dt(5,!0,i.ai.arrange.nextBtn+" · 生成草案")}`}function Nr(t,e){const a=$(),r=fe(e.dateKey,a),s=t.map(o=>`
<div class="ai-draft-row">
  <div class="ai-draft-time">${de(o.start)} — ${de(o.end)}</div>
  <div class="ai-draft-strip ${o.sourceType}"></div>
  <div class="ai-draft-body">
    <div class="ai-draft-title">${v(o.title)}</div>
    ${o.reason?`<div class="ai-draft-reason">${v(o.reason)}</div>`:""}
  </div>
</div>`).join("");return`
${H(6)}
<div class="ai-card-body">
  <div class="ai-question">${v(i.ai.arrange.pages.p6Title)}</div>
  ${t.length===0?'<div class="ai-empty-hint">可用时间不足以安排所有任务，请尝试调整可用时间段。</div>':`<div class="ai-draft-list">${s}</div>`}
</div>
<div class="ai-card-footer">
  <button class="ai-skip-btn" data-act="close-ai-schedule" type="button">${v(i.ai.arrange.cancelBtn)}</button>
  <div style="flex:1"></div>
  <button class="ai-prev-btn" data-act="ai-regen" type="button">${v(i.ai.arrange.regenerateBtn)}</button>
  <button class="ai-next-btn" data-act="ai-apply" type="button">
    ${v(i.ai.arrange.applyBtn)} · ${v(r)} (${t.length}个)
  </button>
</div>`}function qr(){return`
${H(8)}
<div class="ai-card-body ai-state-body">
  <div class="ai-state-icon success" style="background:var(--success-soft)">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="var(--success)" stroke-width="1.5"/>
      <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="var(--success)" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </div>
  <div class="ai-state-title">日程已应用到时间轴</div>
  <div class="ai-state-desc">时间块已生成，快去查看今天的安排吧。</div>
  <div class="ai-state-actions">
    <button class="ai-action-btn is-primary" data-act="close-ai-schedule" type="button">好的</button>
  </div>
</div>`}function Fr(t,e){switch(t){case"close-ai-schedule":Jt();return;case"ai-use-mock":m={phase:"interview",page:1,data:{dateKey:$(),availStart:7*60,availEnd:23*60,fixedBlockIds:[],selectedTaskIds:[],skippedTaskIds:[]}},C();return;case"ai-prev":m.phase==="interview"&&m.page>1&&(m.page-=1,C());return;case"ai-next":m.phase==="interview"&&(m.page<5?(m.page+=1,C()):ne());return;case"ai-regen":m.phase==="draft"&&ne();return;case"ai-apply":m.phase==="draft"&&Rr(m.items);return;case"ai-p1-date":{const a=e.dataset.value;a&&m.phase==="interview"&&(m.data.dateKey=a,C());return}case"ai-p2-avail":{const a=Number(e.dataset.start),r=Number(e.dataset.end);m.phase==="interview"&&(m.data.availStart=a,m.data.availEnd=r,C());return}case"ai-p3-toggle":{const a=e.dataset.blockId;if(!a||m.phase!=="interview")return;const r=m.data.fixedBlockIds,s=r.indexOf(a);s===-1?r.push(a):r.splice(s,1),C();return}case"ai-p4-toggle":{const a=e.dataset.taskId;if(!a||m.phase!=="interview")return;const r=m.data.selectedTaskIds,s=r.indexOf(a);s===-1?r.length<6&&r.push(a):r.splice(s,1),C();return}case"ai-p5-toggle":{const a=e.dataset.taskId;if(!a||m.phase!=="interview")return;const r=m.data.skippedTaskIds,s=r.indexOf(a);s===-1?r.push(a):r.splice(s,1),C();return}}}function ne(){if(m.phase!=="interview"&&m.phase!=="draft")return;const e=(m.phase==="interview",m.data);m={phase:"loading"},C(),setTimeout(()=>{const r=Dt().filter(n=>e.selectedTaskIds.includes(n.id)),s=nt(e.dateKey).filter(n=>e.fixedBlockIds.includes(n.id)).map(n=>n.id);m={phase:"draft",items:Ir({dateKey:e.dateKey,availStart:e.availStart,availEnd:e.availEnd,selectedTasks:r,skipBlocks:s}),data:e},C()},800)}function Rr(t){for(const e of t)Yt({title:e.title,start:e.start,end:e.end,taskId:e.taskId,source:e.taskId?"task":"ai_draft"});m={phase:"applied"},C(),mt==null||mt()}function qt(t){return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function de(t){const e=new Date(t);return qt(e.getHours()*60+e.getMinutes())}function Or(t){if(t<60)return`${t}分`;const e=Math.floor(t/60),a=t%60;return a===0?`${e}h`:`${e}h${a}分`}function Vr(t){return{P1:"var(--danger)",P2:"var(--warning)",P3:"var(--text-4)",P4:"var(--text-4)"}[t]}function v(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const It="pms-tl-datepicker",qe="pms-tl-datepicker-scrim";let D=null;function le(){return!!document.getElementById(It)}function Yr(t,e,a){$t();const[r,s]=t.split("-").map(Number);D={selected:t,viewYear:r,viewMonth:s,onConfirm:a};const o=document.createElement("div");o.id=qe,o.style.cssText="position:fixed;inset:0;z-index:560;",o.setAttribute("data-act","close-tldp"),document.body.appendChild(o);const n=document.createElement("div");n.id=It,n.className="tldp-panel",n.innerHTML=Fe(D),document.body.appendChild(n),Kr(n,e)}function $t(){var t,e;(t=document.getElementById(It))==null||t.remove(),(e=document.getElementById(qe))==null||e.remove(),D=null}function Bt(){if(!D)return;const t=document.getElementById(It);t&&(t.innerHTML=Fe(D))}function Kr(t,e){const a=e.getBoundingClientRect(),r=280,s=window.innerWidth,o=window.innerHeight;let n=a.left;n+r>s-8&&(n=s-r-8),n<8&&(n=8);let d=a.bottom+6;const c=t.offsetHeight||360;d+c>o-8&&(d=Math.max(8,a.top-c-6)),t.style.cssText=`position:fixed;left:${n}px;top:${d}px;width:${r}px;z-index:561;`}function Fe(t){const e=$(),a=we(t.viewYear,t.viewMonth),r=[{k:e,l:i.datePicker.today},{k:tt(e,1),l:i.datePicker.tomorrow},{k:xe(e),l:i.datePicker.thisWeekFriday},{k:he(e),l:i.datePicker.nextMonday}],s=a.map(({key:o,date:n,isCurrentMonth:d})=>`<div class="${["dp-cell",o===e?"dp-today":"",o===t.selected?"dp-selected":"",d?"":"dp-other"].filter(Boolean).join(" ")}" data-act="tldp-pick" data-value="${et(o)}">${n}</div>`).join("");return`
<div class="dp-header">
  <button class="dp-nav-btn" data-act="tldp-prev" type="button">&#8249;</button>
  <div class="dp-title">${t.viewYear}年${t.viewMonth}月</div>
  <button class="dp-nav-btn" data-act="tldp-next" type="button">&#8250;</button>
</div>
<div class="dp-shortcuts">
  ${r.map(o=>`<button class="dp-shortcut${o.k===t.selected?" dp-sc-active":""}"
    data-act="tldp-pick" data-value="${et(o.k)}" type="button">${et(o.l)}</button>`).join("")}
</div>
<div class="dp-weekdays">${i.datePicker.weekdays.map(o=>`<div class="dp-wd">${et(o)}</div>`).join("")}</div>
<div class="dp-grid">${s}</div>
<div class="dp-footer">
  <button class="dp-cancel-btn" data-act="close-tldp" type="button">${et(i.datePicker.cancel)}</button>
  <button class="dp-confirm-btn" data-act="tldp-confirm" type="button">${et(i.datePicker.confirm)}</button>
</div>`}function Wr(t,e){if(D)switch(t){case"close-tldp":$t();return;case"tldp-prev":D.viewMonth-=1,D.viewMonth<1&&(D.viewMonth=12,D.viewYear-=1),Bt();return;case"tldp-next":D.viewMonth+=1,D.viewMonth>12&&(D.viewMonth=1,D.viewYear+=1),Bt();return;case"tldp-pick":{const a=e.dataset.value;a&&(D.selected=a,Bt());return}case"tldp-confirm":{const a=D.selected,r=D.onConfirm;$t(),r(a);return}}}function et(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Ur(){return`
    <div class="pms-preview-row">
      <div class="pms-preview-row-label">主按钮</div>
      <button class="pms-primary-button" type="button">${i.preview.btnDefault}</button>
      <button class="pms-primary-button" type="button" style="background:var(--accent-hover)">${i.preview.btnHover}</button>
      <button class="pms-primary-button" type="button" autofocus>${i.preview.btnFocus}</button>
      <button class="pms-primary-button" type="button" disabled>${i.preview.btnDisabled}</button>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">次按钮</div>
      <button class="pms-secondary-button" type="button">${i.preview.btnDefault}</button>
      <button class="pms-secondary-button" type="button" style="background:var(--bg-2)">${i.preview.btnHover}</button>
      <button class="pms-secondary-button" type="button" disabled>${i.preview.btnDisabled}</button>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">文本按钮</div>
      <button class="pms-text-button" type="button">${i.preview.btnDefault}</button>
      <button class="pms-text-button" type="button" style="background:var(--accent-a08)">${i.preview.btnHover}</button>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">图标按钮</div>
      <button class="pms-icon-button" type="button" title="搜索">${L.search}</button>
      <button class="pms-icon-button" type="button" title="设置">${L.settings}</button>
      <button class="pms-icon-button" type="button" title="日历">${L.calendar}</button>
      <button class="pms-icon-button" type="button" title="新增">${L.plus}</button>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">危险按钮</div>
      <button class="pms-danger-button" type="button">${i.buttons.danger}</button>
      <button class="pms-danger-button is-secondary" type="button">${i.buttons.danger}</button>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">分段控件</div>
      <div class="pms-segmented-control" role="group">
        <div class="pms-segmented-control-item is-active">${i.stage.segDay}</div>
        <div class="pms-segmented-control-item">${i.stage.segWeek}</div>
        <div class="pms-segmented-control-item">${i.stage.segMonth}</div>
      </div>
    </div>
  `}function Zr(){return`
    <div class="pms-preview-row">
      <div class="pms-preview-row-label">单行输入</div>
      <input class="pms-text-field" type="text" placeholder="${i.preview.inputPlaceholder}" style="max-width:320px" />
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">搜索框</div>
      <input class="pms-text-field" type="text" placeholder="${i.preview.searchPlaceholder}" style="max-width:320px" />
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">多行文本</div>
      <textarea class="pms-textarea" placeholder="${i.preview.textareaPlaceholder}" style="max-width:520px"></textarea>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">日期选择</div>
      <div class="pms-date-picker" tabindex="0">
        ${L.calendar}
        <span>${i.preview.selectDate}</span>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">禁用态</div>
      <input class="pms-text-field" type="text" value="此项不可编辑" disabled style="max-width:320px" />
    </div>
  `}function Gr(){const t=J().projects[0],e=t?`var(${t.colorToken})`:"var(--neutral-aux)",a=(t==null?void 0:t.name)??"主业";return`
    <div class="pms-preview-row">
      <div class="pms-preview-row-label">任务卡</div>
      <div class="pms-task-card" style="max-width:280px">
        <div class="pms-task-card-title">写交互设计文档</div>
        <div class="pms-task-card-meta">
          <span class="pms-pri-badge is-p1">P1</span>
          <span>${a}</span>
          <span class="pms-task-card-due">今天</span>
        </div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">任务池卡</div>
      <div class="pms-task-pool-card" style="max-width:280px;--neutral-aux:${e}">
        <div class="pms-task-pool-card-title">审查组件库小修</div>
        <div class="pms-task-card-meta">
          <span class="pms-pri-badge is-p2">P2</span>
          <span>${a}</span>
        </div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">高优任务卡</div>
      <div class="pms-priority-task-card" style="max-width:280px">
        <div class="pms-task-card-meta">
          <span class="pms-pri-badge is-p1">P1</span>
        </div>
        <div class="pms-priority-task-card-title">完成 M1-New.2 实施</div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">收件箱条目</div>
      <div class="pms-inbox-task-item" style="max-width:380px">
        <div class="pms-inbox-task-item-title">厨房抽油烟机清理预约</div>
        <span class="pms-pri-badge is-p4">P4</span>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">已完成 / 逾期</div>
      <div class="pms-task-card is-completed" style="max-width:280px">
        <div class="pms-task-card-title">整理项目档案 SOP</div>
        <div class="pms-task-card-meta">
          <span class="pms-pri-badge is-p4">P4</span>
          <span>${a}</span>
        </div>
      </div>
      <div class="pms-task-card is-overdue" style="max-width:280px">
        <div class="pms-task-card-title">上周 DFH 周报反思</div>
        <div class="pms-task-card-meta">
          <span class="pms-pri-badge is-p4">P4</span>
          <span>${a}</span>
          <span class="pms-task-card-due">昨天</span>
        </div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">项目色 token</div>
      ${J().projects.map(r=>`
        <div class="pms-task-pool-card" style="max-width:200px;--neutral-aux:var(${r.colorToken})">
          <div class="pms-task-pool-card-title">${Jr(r.name)}</div>
          <div class="pms-task-card-meta">
            <span class="pms-text-button" style="color:var(${r.colorToken});padding:0">${r.colorToken}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `}function Jr(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Xr(){return`
    <div class="pms-preview-row">
      <div class="pms-preview-row-label">空状态</div>
      <div style="width:320px;border:1px solid var(--border);border-radius:var(--r-4)">
        <div class="pms-empty-state">
          <div class="pms-empty-state-title">${i.states.emptyTitle}</div>
          <div class="pms-empty-state-hint">${i.states.emptyHint}</div>
        </div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">收件箱空</div>
      <div style="width:320px;border:1px solid var(--border);border-radius:var(--r-4)">
        <div class="pms-empty-state">
          <div class="pms-empty-state-title">${i.states.inboxEmpty}</div>
          <div class="pms-empty-state-hint">${i.states.inboxHint}</div>
        </div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">骨架加载</div>
      <div style="width:320px;padding:var(--sp-4);border:1px solid var(--border);border-radius:var(--r-4);background:var(--bg-0)">
        <div class="pms-skeleton pms-skeleton-line"></div>
        <div class="pms-skeleton pms-skeleton-line"></div>
        <div class="pms-skeleton pms-skeleton-line is-short"></div>
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">加载文字</div>
      <div style="display:flex;align-items:center;gap:var(--sp-2);color:var(--text-3);font-size:var(--fs-body-sm)">
        <div style="width:14px;height:14px;border:2px solid var(--bg-3);border-top-color:var(--accent);border-radius:50%;animation:pms-spin 0.7s linear infinite"></div>
        ${i.states.loading}
      </div>
    </div>

    <div class="pms-preview-row">
      <div class="pms-preview-row-label">加载失败</div>
      <div style="color:var(--danger);font-size:var(--fs-body-sm)">${i.states.loadFailed}</div>
    </div>
    <style>
      @keyframes pms-spin { to { transform: rotate(360deg); } }
    </style>
  `}function Qr(){const t=document.getElementById("app");if(!t)return;if(new URL(window.location.href).searchParams.get("demo")==="components"){si(t);return}ti(t),ei(t),nr(()=>A()),vr(()=>A()),Pr(()=>A()),document.addEventListener("pms-open-task-drawer",a=>{var s;const r=(s=a.detail)==null?void 0:s.taskId;r&&Be(r)})}function ti(t){t.className="pms-app-m1",t.innerHTML=`
    ${da()}
    <div class="pms-app-body">
      ${Ie()}
      ${ze()}
      <div class="pms-content-area">
        ${Me()}
      </div>
      ${Ae()}
    </div>
    ${dr()}
    ${Re()}
    ${ri()}
  `;const e=document.getElementById("pms-pool-list");e&&Ee(e),Xt(),setTimeout(()=>{const a=document.getElementById("pms-tl-scroll"),r=document.getElementById("pms-now-line");if(a&&r){const s=parseInt(r.style.top||"0",10);a.scrollTop=Math.max(0,s-a.clientHeight/3)}},100)}function A(){const t=document.getElementById("app");if(!t)return;const e=t.querySelector(".pms-sidebar"),a=t.querySelector(".pms-taskpool"),r=t.querySelector(".tl-container"),s=t.querySelector(".pms-right-sidebar");e&&(e.outerHTML=Ie()),a&&(a.outerHTML=ze()),r&&(r.outerHTML=Me()),s&&(s.outerHTML=Ae());const o=document.getElementById("pms-pool-list");o&&Ee(o),Xt()}function ei(t){document.addEventListener("click",e=>{const a=e.target,r=a.closest("[data-act^='tbp-'], [data-act='close-tb-popover']");if(r&&jt()){fr(r.dataset.act,r),e.stopPropagation();return}const s=a.closest("[data-act^='ai-'], [data-act='close-ai-schedule']");if(s){const d=s.dataset.act;Fr(d,s),e.stopPropagation();return}const o=a.closest("[data-act='close-review'], [data-act='save-review']");if(o){Tr(o.dataset.act),e.stopPropagation();return}const n=a.closest("[data-act^='tldp-'], [data-act='close-tldp']");if(n&&le()){Wr(n.dataset.act,n),e.stopPropagation();return}}),document.addEventListener("input",e=>{const a=e.target;jt()&&a.classList.contains("tbp-title-input")&&xr(a)}),t.addEventListener("click",e=>{const a=e.target,r=a.closest("[data-act]");if(r){const d=r.dataset.act;if(d==="open-changelog"){ce("pms-changelog-modal");return}if(d==="open-settings"){ce("pms-settings-modal");return}if(d==="close-modal"){if(r.classList.contains("pms-modal-scrim")&&r!==a)return;Ft();return}if(d==="close-drawer"){yt();return}if(d==="settings-reset"){ii();return}if(d==="open-ai-schedule"){Mr();return}if(d==="tl-prev-day"){Ha(),A();return}if(d==="tl-next-day"){La(),A();return}if(d==="tl-today"){Ca(),A();return}if(d==="tl-open-date-picker"){Yr(Wt(),r,c=>{Ba(c),A()});return}if(d==="pool-collapse"){Ka(),A();return}if(d==="pool-filter"){const c=r.dataset.value;c&&(Ya(c),A());return}if(d==="pool-arrange"||d==="pool-rearrange"){At(void 0,r);return}if(d==="add-timeblock"){At(void 0,r);return}if(d==="tl-card-start"||d==="tl-card-done"||d==="tl-card-review"){const c=r.closest("[data-block-id]"),p=c==null?void 0:c.dataset.blockId;if(!p)return;d==="tl-card-start"?(ae(p,"running"),A()):d==="tl-card-done"?(ae(p,"done"),A()):d==="tl-card-review"&&kr(p,r);return}return}const s=a.closest("[data-block-id]");if(s!=null&&s.dataset.blockId&&!a.closest("[data-act]")){At(s.dataset.blockId,s);return}const o=a.closest("[data-task-id]");if(o!=null&&o.dataset.taskId&&!a.closest("[data-act]")){Be(o.dataset.taskId);return}const n=a.closest("[data-nav]");n&&(t.querySelectorAll(".pms-sidebar-nav-item").forEach(d=>d.classList.remove("is-active")),n.classList.add("is-active"))}),t.addEventListener("dragover",e=>{e.target.closest("#pms-tl-inner")&&e.preventDefault()}),t.addEventListener("drop",e=>{var s;const a=e.target.closest("#pms-tl-inner");if(!a)return;e.preventDefault();const r=(s=e.dataTransfer)==null?void 0:s.getData("text/plain");r&&ai(r,e,a)}),document.addEventListener("keydown",e=>{var a;if(e.key==="Escape"){if(document.querySelector(".pms-modal-scrim[style*='flex']")){Ft();return}if(document.getElementById("pms-ai-schedule-card")){Jt();return}if(document.getElementById("pms-review-flyout")){Q();return}if(le()){$t();return}if(jt()){st();return}if((a=document.getElementById("pms-task-detail-drawer"))!=null&&a.classList.contains("is-open")){yt();return}}}),Xt()}function Xt(){const t=document.getElementById("pms-quick-capture");t&&!t.dataset.bound&&(t.dataset.bound="1",t.addEventListener("keydown",e=>{var r;if(e.key!=="Enter")return;const a=t.value.trim();a&&(Ta(a),t.value="",A(),(r=document.getElementById("pms-quick-capture"))==null||r.focus())}))}function ai(t,e,a){const r=q(t);if(!r)return;const s=a.getBoundingClientRect(),o=document.getElementById("pms-tl-scroll"),n=o?o.scrollTop:0,c=(e.clientY-s.top+n)/Z*60,p=Math.max(0,Math.min(ft(c,15),23*60)),u=r.aiEstimatedMinutes??60,g=Math.min(p+u,24*60-1),f=Wt();Yt({title:r.title,start:at(f,K(p)),end:at(f,K(g)),taskId:t,source:"task"}),A()}function Re(){const t=J(),e=Ze();return Oe("pms-settings-modal",i.topbar.settings,`<div class="pms-modal-section">
      <div class="pms-modal-section-title">本地数据状态</div>
      ${e?`<p style="color:var(--warning);font-weight:500">提示：${ct(e)}</p>`:""}
      <ul style="list-style:none;padding:0;margin:0;font-size:13px;line-height:1.9">
        <li><strong>schemaVersion：</strong>${ct(bt)}</li>
        <li><strong>存储 key：</strong><code>${ct(Rt)}</code></li>
        <li><strong>任务数：</strong>${t.tasks.length}（未完成 ${ke()} · 已完成 ${$e()} · 收件箱 ${ye()}）</li>
        <li><strong>时间块数：</strong>${t.timeBlocks.length}</li>
        <li><strong>最后更新：</strong>${oi(t.meta.updatedAt)}</li>
      </ul>
    </div>
    <div class="pms-modal-section">
      <div class="pms-modal-section-title">数据维护</div>
      <button class="pms-danger-button is-secondary" data-act="settings-reset" type="button">恢复默认种子（清空当前数据）</button>
      <p style="font-size:12px;color:var(--text-3);margin-top:8px">会清空 localStorage 中本产品的数据并恢复为初始种子，不可撤销。</p>
    </div>
    <div class="pms-modal-section">
      <div class="pms-modal-section-title">关于</div>
      <p>${i.brand.name} · ${i.brand.tagline}</p>
      <p style="color:var(--text-3);font-size:12px">M1-New.3R · data schema ${ct(bt)}</p>
    </div>`)}function ri(){return Oe("pms-changelog-modal",i.topbar.devLog,`<div class="pms-modal-section">
      <div class="pms-modal-section-title">M1-New.3R 变更</div>
      <ul style="list-style:none;padding:0;margin:0;font-size:13px;line-height:1.9;color:var(--text-2)">
        <li>· 四栏布局（左导航 + 任务池 + 时间轴 + 右侧栏）</li>
        <li>· 0–24 小时像素定位时间轴</li>
        <li>· 纵向任务池（60px 行高，6 项筛选）</li>
        <li>· 时间块卡片内联状态操作（开始/完成/复盘）</li>
        <li>· Popover v0.2（420px，碰撞检测）</li>
        <li>· 自定义日期 + 时间选择器</li>
        <li>· 跨日时间块渲染</li>
        <li>· 复盘小浮层</li>
        <li>· AI 安排日程 8 页访谈卡片（本地模拟排程）</li>
        <li>· 任务从任务池拖入时间轴</li>
      </ul>
    </div>`)}function Oe(t,e,a){return`<div class="pms-modal-scrim" id="${t}" data-act="close-modal" style="display:none">
  <div class="pms-modal-card">
    <div class="pms-modal-header">
      <div class="pms-modal-title">${e}</div>
      <button class="pms-icon-button" data-act="close-modal" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="pms-modal-body">${a}</div>
  </div>
</div>`}function ce(t){if(t==="pms-settings-modal"){const a=document.getElementById("pms-settings-modal");a&&(a.outerHTML=Re())}const e=document.getElementById(t);e&&(e.style.display="flex")}function Ft(){document.querySelectorAll(".pms-modal-scrim").forEach(t=>{t.style.display="none"})}let it=!1;function ii(){const t=document.querySelector('[data-act="settings-reset"]');if(t){if(!it){it=!0,t.textContent="再次点击确认恢复（5 秒内有效）",t.classList.remove("is-secondary"),setTimeout(()=>{it&&(it=!1,t.textContent="恢复默认种子（清空当前数据）",t.classList.add("is-secondary"))},5e3);return}Ue(),it=!1,yt(),Ft(),A()}}function si(t){t.className="",t.style.display="block",t.innerHTML=`
<div class="pms-preview-header">
  <div>
    <div class="pms-stage-header-eyebrow">${i.brand.name} · ${i.brand.tagline}</div>
    <div style="font-size:18px;font-weight:600;margin-top:4px">${i.preview.title}</div>
  </div>
  <a class="pms-text-button" href="/">${i.preview.backToMain}</a>
</div>
<div class="pms-preview-page">
  <section class="pms-preview-section">
    <div class="pms-preview-section-title">${i.preview.buttons}</div>
    ${Ur()}
  </section>
  <section class="pms-preview-section">
    <div class="pms-preview-section-title">${i.preview.inputs}</div>
    ${Zr()}
  </section>
  <section class="pms-preview-section">
    <div class="pms-preview-section-title">${i.preview.cards}</div>
    ${Gr()}
  </section>
  <section class="pms-preview-section">
    <div class="pms-preview-section-title">${i.preview.ai}</div>
    <div style="max-width:520px">${je()}</div>
  </section>
  <section class="pms-preview-section">
    <div class="pms-preview-section-title">${i.preview.states}</div>
    ${Xr()}
  </section>
</div>`}function ct(t){return(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function oi(t){try{const e=new Date(t);return`${e.getFullYear()}-${pt(e.getMonth()+1)}-${pt(e.getDate())} ${pt(e.getHours())}:${pt(e.getMinutes())}`}catch{return t}}function pt(t){return String(t).padStart(2,"0")}function pe(){Ke(),ve(),Qr(),typeof window<"u"&&console.info("%c无限进步 · M1-New.2","color:#2B54C9;font-weight:600;font-size:13px","· localStorage: wuxianjinbu-data-v1· schema v1 · 无 /api 无 SW")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe();
//# sourceMappingURL=index-CDEJBMYu.js.map
