import { mountPage, renderArticle } from "../components/layout.js";
import { renderStudentCards } from "../components/sections.js";
import { students } from "../data/students.js";

const content = renderArticle(`
  <span style="margin-top: 50px; font-size: larger; line-height: 50px;">
    I'm happy to mentor anyone interested in working with me. We can truly create something enjoyable!
  </span>
  ${renderStudentCards(students)}
`);

mountPage({
  title: "Shaolun RUAN (阮劭伦) - Students",
  content,
});
