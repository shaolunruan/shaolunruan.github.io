import { footer, profile, siteTranslations } from "../data/site.js?v=lang-ui-6";

const localeFlags = { en: "🇬🇧", de: "🇩🇪", zh: "🇨🇳" };

function normalizePath(path) {
  if (!path) return "/";
  if (path === "/index.html") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function isActivePath(href) {
  return normalizePath(window.location.pathname) === normalizePath(href);
}

export function renderNav(locale = "en", showLanguageToggle = true) {
  const translations = siteTranslations[locale] || siteTranslations.en;
  const items = translations.navItems
    .map((item, index) => {
      const classes = ["masthead__menu-item"];
      if (index === 0) classes.push("masthead__menu-item--lg", "masthead__menu-home-item");
      const current = isActivePath(item.href) ? ' aria-current="page"' : "";
      const versionedHref = `${item.href}?v=lang-ui-6`;
      return `<li class="${classes.join(" ")}"><a href="${versionedHref}"${current}>${item.label}</a></li>`;
    })
    .join("");

  return `
    <div class="masthead">
      <div class="masthead__inner-wrap">
        <div class="masthead__menu">
          <nav id="site-nav" class="greedy-nav">
            <ul class="visible-links">
              ${items}
              ${showLanguageToggle ? `<li class="masthead__menu-item masthead__language-item">
                <div class="language-selector">
                  <span class="language-selector__label">Language:</span>
                  <div class="language-menu-wrap">
                    <button id="language-menu-trigger" class="language-menu-trigger" type="button" aria-label="Choose language" aria-haspopup="true" aria-expanded="false">
                      <span aria-hidden="true">${localeFlags[locale] || localeFlags.en}</span>
                      <i class="fas fa-caret-down language-menu-caret" aria-hidden="true"></i>
                    </button>
                    <div id="language-menu" class="language-menu" role="menu" hidden>
                      <button type="button" role="menuitem" data-locale="en"${locale === "en" ? ' aria-current="true"' : ""}>English</button>
                      <button type="button" role="menuitem" data-locale="de"${locale === "de" ? ' aria-current="true"' : ""}>Deutsch</button>
                      <button type="button" role="menuitem" data-locale="zh"${locale === "zh" ? ' aria-current="true"' : ""}>中文</button>
                    </div>
                  </div>
                </div>
              </li>` : ""}
            </ul>
            <ul class="hidden-links hidden"></ul>
          </nav>
        </div>
      </div>
    </div>
  `;
}

export function renderSidebar(locale = "en") {
  const translations = siteTranslations[locale] || siteTranslations.en;
  const links = profile.links
    .map((link) => {
      if (!link.href && link.html.includes("map-marker")) return `<li>${translations.locationHtml}</li>`;
      if (!link.href) return `<li>${link.html}</li>`;
      return `<li><a href="${link.href}">${link.html}</a></li>`;
    })
    .join("");

  return `
    <div class="sidebar sticky">
      <div itemscope itemtype="http://schema.org/Person" class="profile_box">
        <div class="author__avatar">
          <img src="${profile.avatar}" class="author__avatar" alt="${profile.name}">
        </div>
        <div class="author__content">
          <h3 class="author__name">${profile.name}</h3>
          <p class="author__bio">${translations.profileBio}</p>
        </div>
        <div class="author__urls-wrapper">
          <ul class="author__urls social-icons">
            <li><div style="white-space: normal; margin-bottom: 1em;">${translations.profileDescription}</div></li>
            ${links}
          </ul>
        </div>
      </div>
    </div>
  `;
}

export function renderArticle(content) {
  return `
    <article class="page" itemscope itemtype="http://schema.org/CreativeWork">
      <meta itemprop="headline" content="">
      <div class="page__inner-wrap">
        <section class="page__content" itemprop="text">
          ${content}
        </section>
      </div>
    </article>
  `;
}

export function renderFooter(locale = "en") {
  const translations = siteTranslations[locale] || siteTranslations.en;
  return `
    <div id="footer_container">
      <footer>
        <a id="right_reserved">${translations.footerText}</a>
        <div style="float: right; right: 1em;" id="footer-counter"></div>
        <noscript>
          <a href="https://www.freecounterstat.com" title="website counters">
            <img src="${footer.counterImage}" title="website counters" alt="website counters">
          </a>
        </noscript>
      </footer>
    </div>
  `;
}

function enhanceExternalLinks(root) {
  root.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

function mountFooterCounter() {
  const mountPoint = document.getElementById("footer-counter");
  if (!mountPoint || document.querySelector('script[data-counter="footer"]')) return;

  const script = document.createElement("script");
  script.src = footer.counterScript;
  script.async = true;
  script.dataset.counter = "footer";
  mountPoint.after(script);
}

export function mountPage({ title, content, showSidebar = true, mainRole = "main", mainClass = "", locale = "en", showLanguageToggle = true }) {
  document.title = title;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;

  const app = document.getElementById("app");
  const sidebar = showSidebar ? renderSidebar(locale) : "";

  app.innerHTML = `
    ${renderNav(locale, showLanguageToggle)}
    <div id="main" role="${mainRole}" class="${mainClass}">
      ${sidebar}
      ${content}
    </div>
    ${renderFooter(locale)}
  `;

  enhanceExternalLinks(app);
  mountFooterCounter();

  const languageTrigger = app.querySelector("#language-menu-trigger");
  const languageMenu = app.querySelector("#language-menu");

  languageTrigger?.addEventListener("click", () => {
    const shouldOpen = languageMenu.hidden;
    languageMenu.hidden = !shouldOpen;
    languageTrigger.setAttribute("aria-expanded", String(shouldOpen));
  });

  languageMenu?.querySelectorAll("[data-locale]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLocale = button.dataset.locale;
      if (!siteTranslations[nextLocale] || nextLocale === locale) {
        languageMenu.hidden = true;
        languageTrigger.setAttribute("aria-expanded", "false");
        return;
      }
      window.sessionStorage.setItem("homepage-language", nextLocale);
      window.location.reload();
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageMenu || languageMenu.hidden || event.target.closest(".language-menu-wrap")) return;
    languageMenu.hidden = true;
    languageTrigger?.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !languageMenu || languageMenu.hidden) return;
    languageMenu.hidden = true;
    languageTrigger?.setAttribute("aria-expanded", "false");
    languageTrigger?.focus();
  });
}

export function getPreferredLocale() {
  const locale = window.sessionStorage.getItem("homepage-language");
  return ["en", "de", "zh"].includes(locale) ? locale : "en";
}
