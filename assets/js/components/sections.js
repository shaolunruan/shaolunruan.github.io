export function renderNewsSection(newsItems) {
  const items = newsItems
    .map(
      (item) =>
        `<li class="${item.hidden ? "hidden-news" : ""}"><em>${item.date}</em>: ${item.text}</li>`,
    )
    .join("");

  return `
    <h1 id="-news" style="margin-top: 30px;">🔥 News</h1>
    <ul id="newsList">${items}</ul>
    <p id="expandNewsLink" style="cursor: pointer; color: #214B8C;">Show more...</p>
  `;
}

export function bindNewsToggle(root = document) {
  const toggle = root.getElementById("expandNewsLink");
  const hiddenItems = [...root.querySelectorAll(".hidden-news")];

  if (!toggle || !hiddenItems.length) return;

  toggle.addEventListener("click", () => {
    const expanded = hiddenItems[0].style.display === "list-item";

    hiddenItems.forEach((item) => {
      item.style.display = expanded ? "none" : "list-item";
    });

    toggle.textContent = expanded ? "Show more..." : "Show less...";
  });
}

export function startTypingWords(words, root = document) {
  const dynamicText = root.querySelector(".typing-words-span");
  if (!dynamicText) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    dynamicText.textContent = currentWord.substring(0, charIndex);
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex += 1;
      window.setTimeout(typeEffect, 100);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(typeEffect, 30);
      return;
    }

    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    window.setTimeout(typeEffect, 1400);
  };

  typeEffect();
}

export function renderListSection(title, items, fontSize = "1.15em") {
  const listItems = items
    .map((item) => `<li style="font-size: ${fontSize};">${item}</li>`)
    .join("");

  return `
    <br/>
    <h1 style="margin-top: 30px;">${title}</h1>
    <ul>${listItems}</ul>
  `;
}

export function renderUpcomingWork(items) {
  const cards = items
    .map(
      (item) => `
        <li class="clients-item">
          <a href="#">
            <img src="${item.image}" ${item.style ? `style="${item.style}"` : ""}>
            <p>${item.label}</p>
          </a>
        </li>
      `,
    )
    .join("");

  return `
    <br/>
    <h1 style="margin-top: 30px;">⭐️🌈 Upcoming Work</h1>
    <ul class="clients-list has-scrollbar">${cards}</ul>
  `;
}

export function renderStudentCards(students) {
  const cards = students
    .map(
      (student) => `
        <li class="custom-item">
          <div class="custom-image">
            <img src="${student.image}" alt="${student.name}">
          </div>
          <div class="custom-text">
            <p class="name">${student.name}</p>
            <p class="university">${student.university}</p>
            <p class="degree">${student.degree}</p>
            </br>
            <a href="mailto:${student.email}" class="email">${student.email}</a>
          </div>
        </li>
      `,
    )
    .join("");

  return `<ul class="custom-list">${cards}</ul>`;
}
