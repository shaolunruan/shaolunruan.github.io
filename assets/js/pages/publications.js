import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=zh-demo-11";
import { renderPublicationCards } from "../components/publications.js?v=zh-demo-11";
import { allPublicationIds } from "../data/publications.js?v=zh-demo-11";

const content = renderArticle(`
  <span style="margin-top: 50px; font-size: larger; border-bottom: 1px solid #f2f3f3; line-height: 50px;">${getPreferredLocale() === "zh" ? "期刊与会议论文" : "Journals and Conferences"}</span>
  <div class="all-publication">
    ${renderPublicationCards(allPublicationIds, getPreferredLocale())}
  </div>
`);

mountPage({
  title: getPreferredLocale() === "zh" ? "阮劭伦 - 学术论文" : "Shaolun RUAN (阮劭伦) - Publications",
  content,
  locale: getPreferredLocale(),
});
