import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=lang-ui-6";
import { renderPublicationTabs, bindPublicationTabs } from "../components/publications.js?v=lang-ui-6";
import {
  bindNewsToggle,
  renderListSection,
  renderNewsSection,
  startTypingWords,
} from "../components/sections.js?v=lang-ui-6";
import { publicationTabs } from "../data/publications.js?v=lang-ui-6";
import * as english from "../data/home.js?v=lang-ui-6";
import * as german from "../data/home.de.js?v=lang-ui-6";
import * as chinese from "../data/home.zh.js?v=lang-ui-6";

const locale = getPreferredLocale();
const data = locale === "zh" ? chinese : locale === "de" ? german : english;
const labels = locale === "zh"
  ? chinese.labels
  : locale === "de"
    ? german.labels
  : {
      like: "I like",
      news: "News",
      showMore: "Show more...",
      showLess: "Show less...",
      featuredPublications: "Featured Publications",
      allPublications: "Access all publications...",
      publicationTabs: publicationTabs.map((tab) => tab.label),
      honors: "🎖 Honors and Awards",
      experience: "📖 Experience",
      invitedTalks: "💬 Invited Talks",
      teaching: "🧑🏻‍🏫 Teaching",
    };

const localizedPublicationTabs = publicationTabs.map((tab, index) => ({
  ...tab,
  label: labels.publicationTabs[index] || tab.label,
}));

const content = renderArticle(`
  ${data.introHtml}
  <br>
  <h1 class="typing-words">${labels.like} <span class="typing-words-span"></span></h1>
  <br/>
  ${renderNewsSection(data.newsItems, labels)}
  </br>
  ${renderPublicationTabs(localizedPublicationTabs, { title: labels.featuredPublications, all: labels.allPublications }, locale)}
  ${renderListSection(labels.honors, data.honors, "1.2em")}
  ${renderListSection(labels.experience, data.educations, "1.2em")}
  ${renderListSection(labels.invitedTalks, data.invitedTalks, "1.15em")}
  ${renderListSection(labels.teaching, data.teaching, "1.15em")}
`);

mountPage({
  title: locale === "zh"
    ? "Shaolun RUAN (阮劭伦) - 个人主页"
    : locale === "de"
      ? "Shaolun RUAN (阮劭伦) – Startseite"
      : "Shaolun RUAN (阮劭伦) - Homepage",
  content,
  locale,
  showLanguageToggle: true,
});

bindPublicationTabs(document);
bindNewsToggle(document);
startTypingWords(data.typingWords, document);
