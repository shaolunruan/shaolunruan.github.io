import { publications } from "../data/publications.js";

const publicationMap = new Map(publications.map((publication) => [publication.id, publication]));

function renderLinks(links = []) {
  if (!links.length) return "";

  return links
    .map((link) => {
      if (link.html) return `<a href="${link.href}">${link.html}</a>`;
      return `<a href="${link.href}"><strong>${link.label}</strong></a>`;
    })
    .join(" | ");
}

export function renderPublicationCard(publication) {
  const imageAttributes = [
    `src="${publication.image}"`,
    `alt="${publication.title}"`,
  ];

  if (publication.imageWidth) imageAttributes.push(`width="${publication.imageWidth}"`);
  if (publication.imageHeight) imageAttributes.push(`height="${publication.imageHeight}"`);

  const venueHtml = publication.venue
    ? `<p style="font-style: italic; font-size: 0.9em;">${publication.venue}${publication.venueNote ? `<br><font style="color: rgb(193, 19, 19);">${publication.venueNote}</font>` : ""}</p>`
    : "";

  const statusHtml = publication.statusText ? `<p>${publication.statusText}</p>` : "";
  const linksHtml = renderLinks(publication.links);

  return `
    <div class="paper-box">
      <div class="paper-box-image">
        <div>
          ${publication.badge ? `<div class="badge">${publication.badge}</div>` : ""}
          <img ${imageAttributes.join(" ")} />
        </div>
      </div>
      <div class="paper-box-text">
        ${publication.iconHtml || ""}<span class="a-style">${publication.title}</span><br />
        <p style="font-size: 0.9em;">${publication.authors || ""}</p>
        ${venueHtml}
        ${statusHtml}
        ${linksHtml ? `<p>${linksHtml}</p>` : ""}
      </div>
    </div>
  `;
}

export function renderPublicationCards(ids) {
  return ids
    .map((id) => publicationMap.get(id))
    .filter(Boolean)
    .map(renderPublicationCard)
    .join("");
}

export function renderPublicationTabs(tabs) {
  const buttons = tabs
    .map(
      (tab, index) =>
        `<button class="tab-button${index === 0 ? " active" : ""}" data-tab="${tab.id}">${tab.label}</button>`,
    )
    .join("");

  const contents = tabs
    .map(
      (tab, index) =>
        `<div id="${tab.id}" class="tab-content${index === 0 ? " active" : ""}">${renderPublicationCards(tab.publicationIds)}</div>`,
    )
    .join("");

  return `
    <div class="publications-container">
      <h1 id="-publications" style="margin-top: 30px;">📝 Featured Publications</h1>
      <div class="tab-navigation">${buttons}</div>
      ${contents}
      <div><p><a style="text-decoration: none;" href="/publication/">Access all publications...</a></p></div>
    </div>
  `;
}

export function bindPublicationTabs(root = document) {
  const buttons = root.querySelectorAll("[data-tab]");
  const contents = root.querySelectorAll(".tab-content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;

      buttons.forEach((item) => item.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      root.getElementById(targetId)?.classList.add("active");
    });
  });
}
