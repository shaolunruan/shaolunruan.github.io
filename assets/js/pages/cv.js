import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=lang-ui-6";

const locale = getPreferredLocale();
const resumeSrc = locale === "zh"
  ? "/assets/Shaolun_resume_中文版.pdf"
  : "/assets/Shaolun_resume.pdf";

const content = renderArticle(`
  <iframe src="${resumeSrc}" width="100%" height="900px" title="${locale === "zh" ? "阮劭伦个人简历" : "Shaolun Ruan CV"}"></iframe>
`);

mountPage({
  title: locale === "zh" ? "阮劭伦 - 个人简历" : locale === "de" ? "Shaolun RUAN (阮劭伦) – Lebenslauf" : "Shaolun RUAN (阮劭伦) - CV",
  content,
  locale,
});
