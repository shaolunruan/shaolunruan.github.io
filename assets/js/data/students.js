export const students = [
  {
    name: "Tram LE",
    university: "Kent State University",
    degree: "Ph.D. Student in Computer Science",
    email: "hle12@kent.edu",
    image: "/assets/photo-gallery/tram-le.jpeg",
  },
  {
    name: "Xingyu QU",
    university: "University of Technology Sydney",
    degree: "School of Computer Science",
    email: "quxingyu761@gmail.com",
    image: "/assets/photo-gallery/xingyu-qu-final.png",
  },
  {
    name: "Qipeng WANG",
    university: "Sichuan University",
    degree: "Master student in Computer Science",
    email: "wangqipengscu@stu.scu.edu.cn",
    image: "/assets/photo-gallery/qipeng.png",
  },
  {
    name: "Rohan RAMAKRISHNA",
    university: "Nanyang Technological University",
    degree: "Master student in Computer Engineering & Business Analytics",
    email: "roha0012@e.ntu.edu.sg",
    image: "/assets/photo-gallery/rohan.png",
  },
  {
    name: "Ribo YUAN",
    university: "University of California, Los Angeles",
    degree: "Master student in Artificial Intelligence",
    email: "riboyuann@g.ucla.edu",
    image: "/assets/photo-gallery/ribo.png",
  },
];

export const studentsZh = students.map((student, index) => ({
  ...student,
  university: ["肯特州立大学", "悉尼科技大学", "四川大学", "南洋理工大学", "加州大学洛杉矶分校"][index],
  degree: ["计算机科学博士生", "计算机科学学院", "计算机科学硕士研究生", "计算机工程与商业分析硕士研究生", "人工智能硕士研究生"][index],
}));

export const studentsDe = students.map((student, index) => ({
  ...student,
  university: ["Kent State University", "University of Technology Sydney", "Sichuan University", "Nanyang Technological University", "University of California, Los Angeles"][index],
  degree: ["Doktorandin der Informatik", "Fakultät für Informatik", "Masterstudent der Informatik", "Masterstudent in Computer Engineering und Business Analytics", "Masterstudent der Künstlichen Intelligenz"][index],
}));
