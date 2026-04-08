import { footer, navItems, profile } from "../data/site.js";

function normalizePath(path) {
  if (!path) return "/";
  if (path === "/index.html") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function isActivePath(href) {
  return normalizePath(window.location.pathname) === normalizePath(href);
}

export function renderNav() {
  const items = navItems
    .map((item, index) => {
      const classes = ["masthead__menu-item"];
      if (index === 0) classes.push("masthead__menu-item--lg", "masthead__menu-home-item");
      const current = isActivePath(item.href) ? ' aria-current="page"' : "";
      return `<li class="${classes.join(" ")}"><a href="${item.href}"${current}>${item.label}</a></li>`;
    })
    .join("");

  return `
    <div class="masthead">
      <div class="masthead__inner-wrap">
        <div class="masthead__menu">
          <nav id="site-nav" class="greedy-nav">
            <ul class="visible-links">${items}</ul>
            <ul class="hidden-links hidden"></ul>
          </nav>
        </div>
      </div>
    </div>
  `;
}

export function renderSidebar() {
  const links = profile.links
    .map((link) => {
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
          <p class="author__bio">${profile.bio}</p>
        </div>
        <div class="author__urls-wrapper">
          <ul class="author__urls social-icons">
            <li><div style="white-space: normal; margin-bottom: 1em;">${profile.description}</div></li>
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

export function renderFooter() {
  return `
    <div id="footer_container">
      <footer>
        <a id="right_reserved">${footer.text}</a>
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

export function mountPage({ title, content, showSidebar = true, mainRole = "main", mainClass = "" }) {
  document.title = title;

  const app = document.getElementById("app");
  const sidebar = showSidebar ? renderSidebar() : "";

  app.innerHTML = `
    ${renderNav()}
    <div id="main" role="${mainRole}" class="${mainClass}">
      ${sidebar}
      ${content}
    </div>
    ${renderFooter()}
  `;

  enhanceExternalLinks(app);
  mountFooterCounter();
}
