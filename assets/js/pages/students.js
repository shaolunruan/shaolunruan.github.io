import { getPreferredLocale, mountPage, renderArticle } from "../components/layout.js?v=lang-ui-6";
import { renderStudentCards } from "../components/sections.js?v=student-xingyu-1";
import { students, studentsDe, studentsZh } from "../data/students.js?v=student-xingyu-1";

const locale = getPreferredLocale();

const content = renderArticle(`
  <span style="margin-top: 50px; font-size: larger; line-height: 50px;">
    ${locale === "zh" ? "欢迎对相关研究方向感兴趣的同学与我联系，让我们一起探索有趣并富有价值的研究！" : locale === "de" ? "Ich freue mich über Anfragen von Studierenden, die an einer Zusammenarbeit interessiert sind. Gemeinsam können wir spannende und wertvolle Forschung gestalten!" : "I'm happy to mentor anyone interested in working with me. We can truly create something enjoyable!"}
  </span>
  ${renderStudentCards(locale === "zh" ? studentsZh : locale === "de" ? studentsDe : students)}
`);

mountPage({
  title: locale === "zh" ? "阮劭伦 - 学生" : locale === "de" ? "Shaolun RUAN (阮劭伦) – Studierende" : "Shaolun RUAN (阮劭伦) - Students",
  content,
  locale,
});
