import { mountPage, renderArticle } from "../components/layout.js";

const content = renderArticle(`
  <iframe src="/assets/Shaolun_resume.pdf" width="100%" height="900px" title="Shaolun Ruan CV"></iframe>
`);

mountPage({
  title: "Shaolun RUAN (阮劭伦) - CV",
  content,
});
