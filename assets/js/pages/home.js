import { mountPage, renderArticle } from "../components/layout.js?v=zh-demo-11";
import { renderPublicationTabs, bindPublicationTabs } from "../components/publications.js?v=zh-demo-11";
import {
  bindNewsToggle,
  renderListSection,
  renderNewsSection,
  startTypingWords,
} from "../components/sections.js?v=zh-demo-11";
import { publicationTabs } from "../data/publications.js";
import * as english from "../data/home.js?v=zh-demo-11";
import * as chinese from "../data/home.zh.js?v=zh-demo-13";

const locale = window.sessionStorage.getItem("homepage-language") === "zh" ? "zh" : "en";
const data = locale === "zh" ? chinese : english;
const labels = locale === "zh"
  ? chinese.labels
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
  title: locale === "zh" ? "Shaolun RUAN (阮劭伦) - 个人主页" : "Shaolun RUAN (阮劭伦) - Homepage",
  content,
  locale,
  showLanguageToggle: true,
});

bindPublicationTabs(document);
bindNewsToggle(document);
startTypingWords(english.typingWords, document);
