export const galleryQuote = '"No great future is worth missing the beauty of all four seasons."';

export const galleryGroups = [
  [
    { image: "/assets/photo-gallery/img5.JPG", caption: "Lanzhou, China, 2025" },
    { image: "/assets/photo-gallery/img2.JPG", caption: "Venice, Italy, 2025" },
    { image: "/assets/photo-gallery/img6.JPG", caption: "Tokyo, Japan, 2024" },
    { image: "/assets/photo-gallery/img4.png", caption: "Melbourne, Australia, 2025" },
    { image: "/assets/photo-gallery/img7.png", caption: "Mount Fuji, Japan, 2024" },
  ],
  [
    { image: "/assets/photo-gallery/IMG_0327.png", caption: "Eiffel Tower, Paris, 2023" },
    { image: "/assets/photo-gallery/9914deddb05966aac620d15b4a7d89b6.JPG", caption: "Brighton Beach, Melbourne, 2017" },
    { image: "/assets/photo-gallery/IMG_0108.JPG", caption: "Leipzig Square, Germany, 2023" },
    { image: "/assets/photo-gallery/1235.png", caption: "First Day of PhD, Singapore, 2022" },
    { image: "/assets/photo-gallery/431.png", caption: "Edinburgh Winter, 2022" },
  ],
  [
    { image: "/assets/photo-gallery/IMG_3948.JPG", caption: "HKUST Reunion, Melbourne, 2023" },
    { image: "/assets/photo-gallery/IMG_4764.PNG", caption: "Graduated from UESTC, China, 2019" },
    { image: "/assets/photo-gallery/62401be900d87dfbd3b84ff6976d4c89.JPG", caption: "Dawn in Auckland, 2017" },
    { image: "/assets/photo-gallery/IMG_4425.png", caption: "Christmas Eve in London, 2022" },
    { image: "/assets/photo-gallery/IMG_4722.PNG", caption: "Bintan, Indonesia, 2022" },
  ],
];

export const galleryQuoteZh = "“再美好的未来，也不值得错过四季的风景。”";

const galleryCaptionsZh = [
  "中国兰州，2025", "意大利威尼斯，2025", "日本东京，2024", "澳大利亚墨尔本，2025", "日本富士山，2024",
  "巴黎埃菲尔铁塔，2023", "墨尔本布莱顿海滩，2017", "德国莱比锡广场，2023", "博士生涯第一天，新加坡，2022", "爱丁堡之冬，2022",
  "香港科技大学校友重聚，墨尔本，2023", "毕业于 UESTC，中国，2019", "奥克兰黎明，2017", "伦敦平安夜，2022", "印度尼西亚民丹岛，2022",
];

export const galleryGroupsZh = galleryGroups.map((group, groupIndex) =>
  group.map((item, itemIndex) => ({
    ...item,
    caption: galleryCaptionsZh[groupIndex * 5 + itemIndex],
  })),
);
