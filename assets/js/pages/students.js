import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=zh-demo-11";
import { renderStudentCards } from "../components/sections.js";
import { students, studentsZh } from "../data/students.js?v=zh-demo-11";

const locale = getPreferredLocale();

const content = renderArticle(`
  <span style="margin-top: 50px; font-size: larger; line-height: 50px;">
    ${locale === "zh" ? "欢迎对相关研究方向感兴趣的同学与我联系，让我们一起探索有趣并富有价值的研究！" : "I'm happy to mentor anyone interested in working with me. We can truly create something enjoyable!"}
  </span>
  ${renderStudentCards(locale === "zh" ? studentsZh : students)}
`);

mountPage({
  title: locale === "zh" ? "阮劭伦 - 学生" : "Shaolun RUAN (阮劭伦) - Students",
  content,
  locale,
});
