import { renderGalleryGroup } from "../components/gallery.js";
import { getPreferredLocale, mountPage } from "../components/layout.js?v=zh-demo-11";
import { galleryGroups, galleryGroupsZh, galleryQuote, galleryQuoteZh } from "../data/gallery.js?v=zh-demo-11";

const locale = getPreferredLocale();

const content = `
  <div class="life-page">
    <div id="gallery-title">
      <p style="font-size: 1.6em"><em>${locale === "zh" ? galleryQuoteZh : galleryQuote}</em></p>
    </div>
    ${(locale === "zh" ? galleryGroupsZh : galleryGroups).map(renderGalleryGroup).join("<br/><br/><br/>")}
  </div>
`;

mountPage({
  title: locale === "zh" ? "阮劭伦 - 生活" : "Shaolun RUAN (阮劭伦) - Life",
  content,
  showSidebar: false,
  locale,
});
