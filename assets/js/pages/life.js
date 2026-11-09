import { renderGalleryGroup } from "../components/gallery.js?v=lang-ui-6";
import { getPreferredLocale, mountPage } from "../components/layout.js?v=lang-ui-6";
import { galleryGroups, galleryGroupsDe, galleryGroupsZh, galleryQuote, galleryQuoteDe, galleryQuoteZh } from "../data/gallery.js?v=lang-ui-6";

const locale = getPreferredLocale();

const carouselCopy = {
  en: {
    label: "Memory music carousel", previous: "Previous memory", next: "Next memory", play: "Play this memory", pause: "Pause this memory",
    tracks: [
      { title: "水平線", meta: "back number · 2021", color: "blue" },
      { title: "seeds", meta: "NIKIIE · 2016", color: "horizon" },
      { title: "The last rain", meta: "Uru · 2016", color: "deepblue" },
      { title: "クリスマスソング (Christmas Song)", meta: "back number · 2015", color: "christmas" },
    ],
  },
  de: {
    label: "Musikkarussell der Erinnerungen", previous: "Vorherige Erinnerung", next: "Nächste Erinnerung", play: "Diese Erinnerung abspielen", pause: "Diese Erinnerung pausieren",
    tracks: [
      { title: "水平線", meta: "back number · 2021", color: "blue" },
      { title: "seeds", meta: "NIKIIE · 2016", color: "horizon" },
      { title: "The last rain", meta: "Uru · 2016", color: "deepblue" },
      { title: "クリスマスソング (Christmas Song)", meta: "back number · 2015", color: "christmas" },
    ],
  },
  zh: {
    label: "回忆音乐轮播", previous: "上一段回忆", next: "下一段回忆", play: "播放这段回忆", pause: "暂停这段回忆",
    tracks: [
      { title: "水平線", meta: "back number · 2021", color: "blue" },
      { title: "seeds", meta: "NIKIIE · 2016", color: "horizon" },
      { title: "The last rain", meta: "Uru · 2016", color: "deepblue" },
      { title: "クリスマスソング (Christmas Song)", meta: "back number · 2015", color: "christmas" },
    ],
  },
};

const copy = carouselCopy[locale] || carouselCopy.en;
const memoryPhotoCopy = locale === "zh"
  ? { open: "打开回忆照片", close: "收起回忆照片", memory: "回忆" }
  : locale === "de"
    ? { open: "Erinnerungsfoto öffnen", close: "Erinnerungsfoto schließen", memory: "Erinnerung" }
    : { open: "Open memory photo", close: "Close memory photo", memory: "Memory" };
const memoryPhotos = [
  { src: "/assets/memories/suiheisen-dinner.JPG", position: "center 54%" },
  { src: "/assets/memories/harvest-liuyizhe.jpg", position: "center 66%" },
  { src: "/assets/memories/seeds-new-year.JPG", position: "center 52%" },
  null,
];
const audioSources = [
  "/assets/music/back-number-suiheisen.mp3",
  "/assets/music/nikiiie-seeds.mp3",
  "/assets/music/uru-the-last-rain.mp3",
  "/assets/music/back-number-christmas-song.mp3",
];

const players = copy.tracks.map((track, index) => {
  const memoryPhoto = memoryPhotos[index];
  const memoryCaption = `${track.title} · ${memoryPhotoCopy.memory} ${String(index + 1).padStart(2, "0")}`;
  return `
  <article class="cartoon-player cartoon-player--${track.color}${memoryPhoto ? " has-memory-photo" : ""}" data-player-index="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
    ${track.color === "christmas" ? '<div class="cartoon-player__snow" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>' : ""}
    <div class="cartoon-player__header">
      <span>${String(index + 1).padStart(2, "0")} / ${String(copy.tracks.length).padStart(2, "0")}</span>
    </div>
    <div class="cartoon-player__body">
      <div class="cartoon-turntable">
        <div class="cartoon-turntable__lid">
        </div>
        ${memoryPhoto ? `<button class="cartoon-memory-photo" type="button" aria-label="${memoryPhotoCopy.open}: ${track.title}" data-memory-photo="${memoryPhoto.src}" style="--memory-position: ${memoryPhoto.position}"><span class="cartoon-memory-photo__tape" aria-hidden="true"></span><img src="${memoryPhoto.src}" alt="${memoryCaption}"><small>${memoryPhotoCopy.memory} ${String(index + 1).padStart(2, "0")}</small></button>` : ""}
        <div class="cartoon-turntable__deck" aria-hidden="true">
          <div class="cartoon-record"><span class="cartoon-record__ring"></span><span class="cartoon-record__label"></span></div>
          <div class="cartoon-tonearm"><span></span></div>
          <span class="cartoon-knob cartoon-knob--one"></span><span class="cartoon-knob cartoon-knob--two"></span>
        </div>
        <div class="cartoon-player__notes" aria-hidden="true">
          ${track.color === "christmas"
            ? '<span class="christmas-cane"></span><span class="christmas-star"></span><span class="christmas-stocking"></span>'
            : '<span>♪</span><span>♫</span><span>♪</span>'}
        </div>
      </div>
      <div class="cartoon-player__info">
        <p>${track.meta}</p><div class="cartoon-player__title-window"><h2>${track.title}</h2></div>
        <div class="cartoon-player__time">
          <span class="cartoon-player__current">0:00</span>
          <input class="cartoon-player__progress" type="range" min="0" max="100" value="0" aria-label="Playback progress">
          <span class="cartoon-player__duration">0:00</span>
        </div>
        <button class="cartoon-player__play" type="button" aria-label="${copy.play}"><i class="fa-solid fa-play" aria-hidden="true"></i></button>
      </div>
    </div>
  </article>
`;
}).join("");

const content = `
  <div class="life-page">
    <div class="memory-scroll-stage">
      <div class="memory-player-shell memory-carousel-shell">
        <section class="memory-carousel" aria-label="${copy.label}">
          <button class="memory-carousel__arrow memory-carousel__arrow--prev" type="button" aria-label="${copy.previous}"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
          <div class="memory-carousel__viewport">${players}</div>
          <button class="memory-carousel__arrow memory-carousel__arrow--next" type="button" aria-label="${copy.next}"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
          <div class="memory-carousel__dots" aria-label="Memory selection">
            ${copy.tracks.map((track, index) => `<button type="button" data-dot-index="${index}" aria-label="${track.title}" class="${index === 0 ? "is-active" : ""}"></button>`).join("")}
          </div>
          <audio class="memory-carousel__audio" preload="metadata" src="${audioSources[0]}"></audio>
        </section>
      </div>
      <p class="life-gallery__quote">${locale === "zh" ? galleryQuoteZh : locale === "de" ? galleryQuoteDe : galleryQuote}</p>
    </div>
    <button class="memory-photo-preview" type="button" aria-label="${memoryPhotoCopy.close}" aria-hidden="true">
      <span class="memory-photo-preview__frame">
        <img src="${memoryPhotos[0].src}" alt="">
        <i class="memory-photo-preview__zoom fa-solid fa-magnifying-glass-minus" aria-hidden="true"></i>
      </span>
    </button>
    <div class="life-gallery">
      ${(locale === "zh" ? galleryGroupsZh : locale === "de" ? galleryGroupsDe : galleryGroups).map(renderGalleryGroup).join("<br/><br/><br/>")}
    </div>
  </div>`;

mountPage({ title: locale === "zh" ? "阮劭伦 - 生活" : locale === "de" ? "Shaolun RUAN (阮劭伦) – Privates" : "Shaolun RUAN (阮劭伦) - Life", content, showSidebar: false, locale });

const carousel = document.querySelector(".memory-carousel");
const cards = [...document.querySelectorAll(".cartoon-player")];
const dots = [...document.querySelectorAll("[data-dot-index]")];
const audio = carousel?.querySelector(".memory-carousel__audio");
const memoryPhotoPreview = document.querySelector(".memory-photo-preview");
let activeIndex = 0;

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "0:00";
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
};
const activeCard = () => cards[activeIndex];

const updateCarousel = () => {
  cards.forEach((card, index) => {
    const forward = (index - activeIndex + cards.length) % cards.length;
    const backward = (activeIndex - index + cards.length) % cards.length;
    const position = forward === 0 ? "active" : forward === 1 ? "next" : backward === 1 ? "previous" : "hidden";
    card.dataset.position = position;
    card.setAttribute("aria-hidden", position === "active" ? "false" : "true");
    card.querySelector(".cartoon-player__play").tabIndex = position === "active" ? 0 : -1;
  });
  dots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
};

const updateTitleMarquees = () => {
  cards.forEach((card) => {
    const windowElement = card.querySelector(".cartoon-player__title-window");
    const title = windowElement.querySelector("h2");
    title.classList.remove("is-overflowing");
    title.style.removeProperty("--title-shift");
    const overflow = Math.max(0, title.scrollWidth - windowElement.clientWidth);
    if (overflow > 2) {
      title.style.setProperty("--title-shift", `${overflow}px`);
      title.classList.add("is-overflowing");
    }
  });
};

const resetPlayback = () => {
  if (!audio) return;
  audio.pause(); audio.currentTime = 0;
  cards.forEach((card) => {
    card.classList.remove("is-playing");
    card.querySelector(".cartoon-player__play i").className = "fa-solid fa-play";
    card.querySelector(".cartoon-player__progress").value = "0";
    card.querySelector(".cartoon-player__current").textContent = "0:00";
  });
};

const selectTrack = (index) => {
  const shouldResumePlayback = Boolean(audio && !audio.paused);
  closeMemoryPhoto();
  resetPlayback();
  activeIndex = (index + cards.length) % cards.length;
  audio.src = audioSources[activeIndex];
  audio.load();
  updateCarousel();
  if (shouldResumePlayback) {
    audio.play().catch(() => {
      activeCard().classList.remove("is-playing");
    });
  }
};

carousel?.querySelector(".memory-carousel__arrow--prev")?.addEventListener("click", () => selectTrack(activeIndex - 1));
carousel?.querySelector(".memory-carousel__arrow--next")?.addEventListener("click", () => selectTrack(activeIndex + 1));
dots.forEach((dot) => dot.addEventListener("click", () => selectTrack(Number(dot.dataset.dotIndex))));

document.querySelectorAll(".cartoon-memory-photo").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    if (!memoryPhotoPreview) return;
    const previewImage = memoryPhotoPreview.querySelector("img");
    previewImage.src = thumbnail.dataset.memoryPhoto;
    previewImage.alt = thumbnail.querySelector("img")?.alt || memoryPhotoCopy.memory;
    memoryPhotoPreview.classList.add("is-open");
    memoryPhotoPreview.setAttribute("aria-hidden", "false");
  });
});

const closeMemoryPhoto = () => {
  if (!memoryPhotoPreview) return;
  memoryPhotoPreview.classList.remove("is-open");
  memoryPhotoPreview.setAttribute("aria-hidden", "true");
};

memoryPhotoPreview?.addEventListener("click", closeMemoryPhoto);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMemoryPhoto();
});

cards.forEach((card, index) => {
  const playButton = card.querySelector(".cartoon-player__play");
  const progress = card.querySelector(".cartoon-player__progress");
  playButton.addEventListener("click", async () => {
    if (index !== activeIndex || !audio) return;
    if (audio.paused) await audio.play(); else audio.pause();
  });
  progress.addEventListener("input", () => {
    if (index === activeIndex && audio?.duration) audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  });
});

audio?.addEventListener("loadedmetadata", () => { activeCard().querySelector(".cartoon-player__duration").textContent = formatTime(audio.duration); });
audio?.addEventListener("timeupdate", () => {
  const card = activeCard();
  card.querySelector(".cartoon-player__current").textContent = formatTime(audio.currentTime);
  card.querySelector(".cartoon-player__progress").value = audio.duration ? String((audio.currentTime / audio.duration) * 100) : "0";
});
audio?.addEventListener("play", () => {
  const card = activeCard(); card.classList.add("is-playing");
  card.querySelector(".cartoon-player__play i").className = "fa-solid fa-pause";
  card.querySelector(".cartoon-player__play").setAttribute("aria-label", copy.pause);
});
audio?.addEventListener("pause", () => {
  const card = activeCard(); card.classList.remove("is-playing");
  card.querySelector(".cartoon-player__play i").className = "fa-solid fa-play";
  card.querySelector(".cartoon-player__play").setAttribute("aria-label", copy.play);
});

updateCarousel();
requestAnimationFrame(updateTitleMarquees);
window.addEventListener("resize", updateTitleMarquees);
