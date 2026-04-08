import { mountPage, renderArticle } from "../components/layout.js";
import { renderPublicationTabs, bindPublicationTabs } from "../components/publications.js";
import {
  bindNewsToggle,
  renderListSection,
  renderNewsSection,
  renderUpcomingWork,
  startTypingWords,
} from "../components/sections.js";
import {
  educations,
  honors,
  introHtml,
  invitedTalks,
  newsItems,
  teaching,
  typingWords,
  upcomingWork,
} from "../data/home.js";
import { publicationTabs } from "../data/publications.js";

const content = renderArticle(`
  ${introHtml}
  <br>
  <h1 class="typing-words">I like <span class="typing-words-span"></span></h1>
  <br/>
  ${renderNewsSection(newsItems)}
  </br>
  ${renderPublicationTabs(publicationTabs)}
  ${renderListSection("🎖 Honors and Awards", honors, "1.2em")}
  ${renderListSection("📖 Educations", educations, "1.2em")}
  ${renderListSection("💬 Invited Talks", invitedTalks, "1.15em")}
  ${renderListSection("🧑🏻‍🏫 Teaching", teaching, "1.15em")}
`);

mountPage({
  title: "Shaolun RUAN (阮劭伦) - Homepage",
  content,
});

bindPublicationTabs(document);
bindNewsToggle(document);
startTypingWords(typingWords, document);
