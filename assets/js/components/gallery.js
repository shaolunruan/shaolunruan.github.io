export function renderGalleryGroup(items) {
  const content = items
    .map(
      (item) => `
        <div class="item">
          <a href="${item.image}">
            <img src="${item.image}" alt="${item.caption}">
            <div class="overlay"><p>${item.caption}</p></div>
          </a>
        </div>
      `,
    )
    .join("");

  return `<div class="grid">${content}</div>`;
}
