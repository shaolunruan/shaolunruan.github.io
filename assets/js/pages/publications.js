import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=lang-ui-6";
import { renderPublicationCards } from "../components/publications.js?v=lang-ui-6";
import { allPublicationIds } from "../data/publications.js?v=lang-ui-6";

const locale = getPreferredLocale();
const heading = locale === "zh" ? "期刊与会议论文" : locale === "de" ? "Zeitschriften- und Konferenzbeiträge" : "Journals and Conferences";
const title = locale === "zh" ? "阮劭伦 - 学术论文" : locale === "de" ? "Shaolun RUAN (阮劭伦) – Publikationen" : "Shaolun RUAN (阮劭伦) - Publications";

const content = renderArticle(`
  <span style="margin-top: 50px; font-size: larger; border-bottom: 1px solid #f2f3f3; line-height: 50px;">${heading}</span>
  <div class="all-publication">
    ${renderPublicationCards(allPublicationIds, locale)}
  </div>
`);

mountPage({
  title,
  content,
  locale,
});
