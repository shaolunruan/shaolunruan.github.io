import { mountPage, renderArticle } from "../components/layout.js";
import { renderPublicationCards } from "../components/publications.js";
import { allPublicationIds } from "../data/publications.js";

const content = renderArticle(`
  <span style="margin-top: 50px; font-size: larger; border-bottom: 1px solid #f2f3f3; line-height: 50px;">Journals and Conferences</span>
  <div class="all-publication">
    ${renderPublicationCards(allPublicationIds)}
  </div>
`);

mountPage({
  title: "Shaolun RUAN (阮劭伦) - Publications",
  content,
});
