export type CertificateCategory = "Akademik" | "Non Akademik" | "Seminar";

export interface Certificate {
  id: number;

  titleId: string;
  titleEn: string;

  issuerId: string;
  issuerEn: string;

  year: string;

  category: CertificateCategory;

  images: string[];
}

export const certificates: Certificate[] = [
  {
    id: 1,
    titleId: "Assistant Web Developer",
    titleEn: "Assistant Web Developer",

    issuerId: "BNSP / LSP BBPVP Bekasi",
    issuerEn: "BNSP / LSP BBPVP Bekasi",

    year: "2026",
    category: "Akademik",

    images: [
      "/images/certificates/bnsp/bnsp-Assistant-web-developer-1.png",
      "/images/certificates/bnsp/bnsp-Assistant-web-developer-2.png",
    ],
  },

  {
    id: 2,
    titleId: "Program Magang HUB Kemenaker Batch 3",
    titleEn: "HUB Ministry of Manpower Internship Program Batch 3",

    issuerId: "PKBI Lampung",
    issuerEn: "PKBI Lampung",

    year: "2026",
    category: "Akademik",

    images: [
      "/images/certificates/magang/magang-pkbi-1.png",
      "/images/certificates/magang/magang-pkbi-2.png",
    ],
  },

  {
    id: 3,
    titleId: "Kampus Mengajar Angkatan 7",
    titleEn: "Teaching Campus Program Batch 7",

    issuerId: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    issuerEn: "Ministry of Education, Culture, Research, and Technology",

    year: "2024",
    category: "Akademik",

    images: [
      "/images/certificates/km7/kampus-mengajar-1.jpg",
      "/images/certificates/km7/kampus-mengajar-2.jpg",
    ],
  },

  {
    id: 4,
    titleId: "Sertifikat Pelatihan MikroTik",
    titleEn: "MikroTik Training Certificate",

    issuerId: "LEMBAGA PENDIDIKAN BISNIS & MANAJEMEN TEKNOKRAT",
    issuerEn: "Teknokrat Business & Management Education Institution",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/lpbmn/mikrotik.jpg"],
  },

  {
    id: 5,
    titleId: "Sertifikat Pelatihan Microsoft Office",
    titleEn: "Microsoft Office Training Certificate",

    issuerId: "LEMBAGA PENDIDIKAN BISNIS & MANAJEMEN TEKNOKRAT",
    issuerEn: "Teknokrat Business & Management Education Institution",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/lpbmn/office.jpg"],
  },

  {
    id: 6,
    titleId: "Sertifikat Kompetensi Desain Grafis",
    titleEn: "Graphic Design Competency Certificate",

    issuerId: "LEMBAGA PENDIDIKAN BISNIS & MANAJEMEN TEKNOKRAT",
    issuerEn: "Teknokrat Business & Management Education Institution",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/lpbmn/dg.jpg"],
  },

  {
    id: 7,
    titleId: "Sertifikat Kompetensi Jaringan Komputer dan Troubleshooting",
    titleEn: "Computer Networking and Troubleshooting Competency Certificate",

    issuerId: "LEMBAGA PENDIDIKAN BISNIS & MANAJEMEN TEKNOKRAT",
    issuerEn: "Teknokrat Business & Management Education Institution",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/lpbmn/jarkom.jpg"],
  },

  {
    id: 8,
    titleId: "Sertifikat Kompetensi Pemrogram Aplikasi Web Junior",
    titleEn: "Junior Web Application Programmer Competency Certificate",

    issuerId: "Universitas Teknokrat Indonesia",
    issuerEn: "Universitas Teknokrat Indonesia",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/matkul/web.jpg"],
  },

  {
    id: 9,
    titleId: "Sertifikat Kompetensi Metodologi Penelitian Dasar",
    titleEn: "Basic Research Methodology Competency Certificate",

    issuerId: "Universitas Teknokrat Indonesia",
    issuerEn: "Universitas Teknokrat Indonesia",

    year: "2024",
    category: "Akademik",

    images: [
      "/images/certificates/matkul/metopen-1.jpg",
      "/images/certificates/matkul/metopen-2.jpg",
    ],
  },

  {
    id: 10,
    titleId: "ANGGOTA DIVISI HUBUNGAN MASYARAKAT",
    titleEn: "PUBLIC RELATIONS DIVISION MEMBER",

    issuerId:
      "Himpunan Mahasiswa Informatika Fakultas Teknik dan Ilmu Komputer Universitas Teknokrat Indonesia",
    issuerEn:
      "Informatics Student Association, Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",

    year: "2024/2025",
    category: "Non Akademik",

    images: [
      "/images/certificates/organisasi/hima.jpg",
      "/images/certificates/organisasi/hima-2.jpg",
    ],
  },

  {
    id: 11,
    titleId: "DUTA FAVORITE PUTRA",
    titleEn: "MALE FAVORITE AMBASSADOR",

    issuerId: "PEMILIHAN DUTA TEKNOKRAT Universitas Teknokrat Indonesia",
    issuerEn: "Teknokrat Ambassador Selection, Universitas Teknokrat Indonesia",

    year: "2022",
    category: "Non Akademik",

    images: ["/images/certificates/organisasi/duta.jpg"],
  },

  {
    id: 12,
    titleId: "Panitia",
    titleEn: "Committee Member",

    issuerId: "PEMILIHAN DUTA TEKNOKRAT Universitas Teknokrat Indonesia",
    issuerEn: "Teknokrat Ambassador Selection, Universitas Teknokrat Indonesia",

    year: "2023",
    category: "Non Akademik",

    images: ["/images/certificates/organisasi/duta1.jpg"],
  },

  {
    id: 13,
    titleId:
      "Sertifikat Pelatihan Pengenalan Metaverse: Workshop Metaverse 102 Thematic Academy",
    titleEn:
      "Introduction to Metaverse Training Certificate: Metaverse 102 Thematic Academy Workshop",

    issuerId: "Thematic Academy",
    issuerEn: "Thematic Academy",

    year: "2023",
    category: "Seminar",

    images: [
      "/images/certificates/seminar/meta-1.jpg",
      "/images/certificates/seminar/meta-2.jpg",
    ],
  },

  {
    id: 14,
    titleId: "Sertifikat Academic Expo 2023",
    titleEn: "Academic Expo 2023 Certificate",

    issuerId: "Universitas Teknokrat Indonesia / Teknokrat Academic Expo 2023",
    issuerEn: "Universitas Teknokrat Indonesia / Teknokrat Academic Expo 2023",

    year: "2023",
    category: "Akademik",

    images: ["/images/certificates/expo/mobile.jpg"],
  },

  {
    id: 15,
    titleId: "Sertifikat Academic Expo 2024",
    titleEn: "Academic Expo 2024 Certificate",

    issuerId: "Universitas Teknokrat Indonesia / Teknokrat Academic Expo 2024",
    issuerEn: "Universitas Teknokrat Indonesia / Teknokrat Academic Expo 2024",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/expo/mobile2.jpeg"],
  },

  {
    id: 16,
    titleId: "Sertifikat Academic Expo 2024",
    titleEn: "Academic Expo 2024 Certificate",

    issuerId: "Universitas Teknokrat Indonesia / Teknokrat Academic Expo 2024",
    issuerEn: "Universitas Teknokrat Indonesia / Teknokrat Academic Expo 2024",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/expo/web2.jpg"],
  },

  {
    id: 17,
    titleId: "Sertifikat Seminar",
    titleEn: "Seminar Certificate",

    issuerId:
      "Himpunan Mahasiswa Informatika Fakultas Teknik dan Ilmu Komputer Universitas Teknokrat Indonesia",
    issuerEn:
      "Informatics Student Association, Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",

    year: "2022",
    category: "Seminar",

    images: ["/images/certificates/seminar/seminar1.jpg"],
  },

  {
    id: 18,
    titleId: "Sertifikat Seminar",
    titleEn: "Seminar Certificate",

    issuerId:
      "Himpunan Mahasiswa Informatika Fakultas Teknik dan Ilmu Komputer Universitas Teknokrat Indonesia",
    issuerEn:
      "Informatics Student Association, Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",

    year: "2023",
    category: "Seminar",

    images: ["/images/certificates/seminar/seminar2.jpg"],
  },

  {
    id: 19,
    titleId: "Sertifikat Seminar",
    titleEn: "Seminar Certificate",

    issuerId:
      "Himpunan Mahasiswa Informatika Fakultas Teknik dan Ilmu Komputer Universitas Teknokrat Indonesia",
    issuerEn:
      "Informatics Student Association, Faculty of Engineering and Computer Science, Universitas Teknokrat Indonesia",

    year: "2023",
    category: "Seminar",

    images: ["/images/certificates/seminar/seminar3.jpg"],
  },

  {
    id: 20,
    titleId: "Sertifikat Panitia Jalan Sehat",
    titleEn: "Healthy Walk Committee Certificate",

    issuerId: "Universitas Teknokrat Indonesia",
    issuerEn: "Universitas Teknokrat Indonesia",

    year: "2024",
    category: "Non Akademik",

    images: ["/images/certificates/panitia/panitia.jpg"],
  },

  {
    id: 21,
    titleId: "Sertifikat Kemenkeu Goes To Campus",
    titleEn: "Kemenkeu Goes To Campus Certificate",

    issuerId: "Kementerian Keuangan Republik Indonesia",
    issuerEn: "Ministry of Finance of the Republic of Indonesia",

    year: "2022",
    category: "Seminar",

    images: ["/images/certificates/seminar/kemenkeu.jpg"],
  },

  {
    id: 22,
    titleId: "Sertifikat DQLab",
    titleEn: "DQLab Certificate",

    issuerId: "DQLab",
    issuerEn: "DQLab",

    year: "2024",
    category: "Akademik",

    images: ["/images/certificates/dqlab/dqlab.jpg"],
  },

  {
    id: 23,
    titleId: "Sertifikat DJP",
    titleEn: "DJP Certificate",

    issuerId: "Pelayanan Pajak Bandar Lampung",
    issuerEn: "Bandar Lampung Tax Service Office",

    year: "2022",
    category: "Seminar",

    images: ["/images/certificates/seminar/pajak.jpg"],
  },
];
