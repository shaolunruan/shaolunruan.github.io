import { renderGalleryGroup } from "../components/gallery.js?v=lang-ui-6";
import { getPreferredLocale, mountPage } from "../components/layout.js?v=lang-ui-6";
import { galleryGroups, galleryGroupsDe, galleryGroupsZh, galleryQuote, galleryQuoteDe, galleryQuoteZh } from "../data/gallery.js?v=lang-ui-6";

const locale = getPreferredLocale();

const content = `
  <div class="life-page">
    <div id="gallery-title">
      <p style="font-size: 1.6em"><em>${locale === "zh" ? galleryQuoteZh : locale === "de" ? galleryQuoteDe : galleryQuote}</em></p>
    </div>
    ${(locale === "zh" ? galleryGroupsZh : locale === "de" ? galleryGroupsDe : galleryGroups).map(renderGalleryGroup).join("<br/><br/><br/>")}
  </div>
`;

mountPage({
  title: locale === "zh" ? "阮劭伦 - 生活" : locale === "de" ? "Shaolun RUAN (阮劭伦) – Privates" : "Shaolun RUAN (阮劭伦) - Life",
  content,
  showSidebar: false,
  locale,
});
