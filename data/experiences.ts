export interface Experience {
  id: number;

  periodId: string;
  periodEn: string;

  titleId: string;
  titleEn: string;

  companyId: string;
  companyEn: string;

  locationId?: string;
  locationEn?: string;

  descriptionId: string;
  descriptionEn: string;

  responsibilitiesId: string[];
  responsibilitiesEn: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,

    periodId: "Desember 2025 — Juni 2026",
    periodEn: "December 2025 — June 2026",

    titleId: "Staf IT",
    titleEn: "IT Staff",

    companyId: "Program Magang HUB Kemenaker Batch 3 — PKBI Lampung",
    companyEn: "HUB Internship Program Batch 3 — PKBI Lampung",

    locationId: "Bandar Lampung",
    locationEn: "Bandar Lampung",

    descriptionId:
      "Bertanggung jawab dalam pengelolaan website, CMS, keamanan, monitoring, backup, optimasi, serta dukungan teknis untuk kebutuhan organisasi.",

    descriptionEn:
      "Responsible for website management, CMS, security, monitoring, backups, optimization, and technical support for organizational needs.",

    responsibilitiesId: [
      "Mengelola Content Management System (CMS), melakukan pembaruan konten, serta menangani error dan keamanan website.",
      "Melakukan monitoring server dan website untuk memastikan uptime dan kestabilan sistem.",
      "Menjalankan backup secara rutin serta menjaga keamanan website melalui firewall, anti-spam, deteksi malware, dan pembaruan sistem.",
      "Melakukan optimasi website untuk meningkatkan kecepatan, performa, dan kemudahan akses pengguna.",
      "Memberikan dukungan teknis kepada tim redaksi dalam proses unggah dan pengelolaan konten website.",
      "Menambahkan dan menyesuaikan fitur website sesuai kebutuhan organisasi.",
      "Mengelola struktur konten seperti kategori, rubrik, dan media agar lebih tertata.",
      "Melakukan analisis sederhana terhadap trafik website dan perilaku pengguna.",
      "Menyusun laporan kegiatan dan kondisi website secara ringkas dan terstruktur.",
      "Menunjukkan sikap disiplin, responsif, dan bertanggung jawab dalam menyelesaikan pekerjaan.",
    ],

    responsibilitiesEn: [
      "Managed the Content Management System (CMS), updated content, and handled website errors and security issues.",
      "Monitored servers and websites to maintain system uptime and stability.",
      "Performed regular backups and maintained website security through firewalls, anti-spam protection, malware detection, and system updates.",
      "Optimized the website to improve loading speed, performance, and user accessibility.",
      "Provided technical support to the editorial team for website content publishing and management.",
      "Added and customized website features according to organizational needs.",
      "Managed content structures such as categories, sections, and media to keep them organized.",
      "Performed basic analysis of website traffic and user behavior.",
      "Prepared concise and structured reports regarding activities and website conditions.",
      "Demonstrated discipline, responsiveness, and responsibility in completing tasks.",
    ],
  },

  {
    id: 2,

    periodId: "Mei 2025",
    periodEn: "May 2025",

    titleId: "Petugas Pengawas Tempat Pemungutan Suara (PTPS)",
    titleEn: "Polling Station Supervisor (PTPS)",

    companyId: "Bawaslu Kabupaten Pesawaran",
    companyEn: "Pesawaran Regency Election Supervisory Agency",

    locationId: "Pesawaran, Lampung",
    locationEn: "Pesawaran, Lampung",

    descriptionId:
      "Melaksanakan pengawasan proses pemungutan dan penghitungan suara di TPS serta melakukan dokumentasi dan pelaporan hasil pengawasan.",

    descriptionEn:
      "Supervised the voting and vote-counting process at the polling station and prepared documentation and supervision reports.",

    responsibilitiesId: [
      "Mengawasi tahapan pemungutan dan penghitungan suara di TPS sesuai peraturan yang berlaku.",
      "Memastikan proses pemungutan dan penghitungan suara berjalan sesuai prosedur.",
      "Mengawasi pelaksanaan tugas KPPS serta mencatat kejadian yang berpotensi menjadi pelanggaran.",
      "Menyusun dan menyampaikan laporan hasil pengawasan kepada Pengawas Kelurahan/Desa (PKD).",
      "Berkoordinasi dengan KPPS, PKD, dan pihak terkait.",
      "Mendokumentasikan kegiatan sebagai bagian dari administrasi dan pelaporan.",
      "Menjaga integritas, netralitas, dan profesionalisme selama menjalankan tugas.",
      "Mengembangkan kemampuan komunikasi, ketelitian, tanggung jawab, dan pengambilan keputusan.",
    ],

    responsibilitiesEn: [
      "Supervised the voting and vote-counting stages at the polling station in accordance with applicable regulations.",
      "Ensured that the voting and vote-counting processes followed established procedures.",
      "Monitored the duties of the Polling Station Working Committee (KPPS) and recorded potential violations.",
      "Prepared and submitted supervision reports to the Village/Subdistrict Election Supervisor (PKD).",
      "Coordinated with KPPS, PKD, and relevant parties.",
      "Documented activities as part of administrative and reporting requirements.",
      "Maintained integrity, neutrality, and professionalism while performing duties.",
      "Developed communication, attention to detail, responsibility, and decision-making skills.",
    ],
  },

  {
    id: 3,

    periodId: "Februari 2024 — Juni 2024",
    periodEn: "February 2024 — June 2024",

    titleId: "Peserta Program Kampus Mengajar Angkatan 7",
    titleEn: "Kampus Mengajar Program Participant — Batch 7",

    companyId:
      "Program MBKM — Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",

    companyEn:
      "MBKM Program — Ministry of Education, Culture, Research, and Technology",

    locationId: "SDN 4 Way Laga, Panjang, Lampung",
    locationEn: "SDN 4 Way Laga, Panjang, Lampung",

    descriptionId:
      "Berpartisipasi dalam program Kampus Mengajar dengan membantu proses pembelajaran, administrasi sekolah, literasi, numerasi, serta pemanfaatan teknologi dalam pembelajaran.",

    descriptionEn:
      "Participated in the Kampus Mengajar program by supporting learning activities, school administration, literacy, numeracy, and the use of technology in education.",

    responsibilitiesId: [
      "Berpartisipasi sebagai asisten pengajar dalam Program Merdeka Belajar Kampus Merdeka (MBKM).",
      "Membantu guru dalam proses pembelajaran literasi dan numerasi.",
      "Memberikan pelatihan penggunaan Wordwall sebagai media pembelajaran interaktif.",
      "Memberikan pelatihan dasar pemanfaatan Artificial Intelligence (AI) untuk mendukung pembelajaran.",
      "Mendokumentasikan kegiatan sekolah dalam bentuk foto dan video untuk publikasi.",
      "Menyusun dokumentasi kegiatan sebagai bahan laporan dan publikasi sekolah.",
      "Membantu administrasi sekolah, termasuk rekap laporan, input nilai siswa, dan pelaksanaan PPDB.",
      "Mengembangkan kemampuan komunikasi, kepemimpinan, dan kolaborasi.",
    ],

    responsibilitiesEn: [
      "Participated as a teaching assistant in the Merdeka Belajar Kampus Merdeka (MBKM) Program.",
      "Assisted teachers in literacy and numeracy learning activities.",
      "Provided training on using Wordwall as an interactive learning medium.",
      "Provided basic training on the use of Artificial Intelligence (AI) to support learning.",
      "Documented school activities through photos and videos for publication.",
      "Prepared activity documentation for school reports and publications.",
      "Assisted with school administration, including report recaps, student grade input, and PPDB activities.",
      "Developed communication, leadership, and collaboration skills.",
    ],
  },
];
