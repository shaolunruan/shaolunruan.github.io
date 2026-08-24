import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=zh-demo-11";

const locale = getPreferredLocale();

const content = renderArticle(`
  <iframe src="/assets/Shaolun_resume.pdf" width="100%" height="900px" title="${locale === "zh" ? "阮劭伦个人简历" : "Shaolun Ruan CV"}"></iframe>
`);

mountPage({
  title: locale === "zh" ? "阮劭伦 - 个人简历" : "Shaolun RUAN (阮劭伦) - CV",
  content,
  locale,
});
