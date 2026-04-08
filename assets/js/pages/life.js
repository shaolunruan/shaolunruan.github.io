import { renderGalleryGroup } from "../components/gallery.js";
import { mountPage } from "../components/layout.js";
import { galleryGroups, galleryQuote } from "../data/gallery.js";

const content = `
  <div class="life-page">
    <div id="gallery-title">
      <p style="font-size: 1.6em"><em>${galleryQuote}</em></p>
    </div>
    ${galleryGroups.map(renderGalleryGroup).join("<br/><br/><br/>")}
  </div>
`;

mountPage({
  title: "Shaolun RUAN (阮劭伦) - Life",
  content,
  showSidebar: false,
});
