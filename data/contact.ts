export interface ContactItem {
  name: string;
  username: string;
  href: string;
  descriptionId: string;
  descriptionEn: string;
}

export const contacts: ContactItem[] = [
  {
    name: "WhatsApp",
    username: "+62 887-4760-7844",
    href: "https://wa.me/6288747607844",
    descriptionId: "Hubungi saya melalui WhatsApp",
    descriptionEn: "Contact me through WhatsApp",
  },

  {
    name: "Email",
    username: "romzazikrianmuhammad@gmail.com",
    href: "mailto:romzazikrianmuhammad@gmail.com",
    descriptionId: "Kirim email untuk kebutuhan profesional",
    descriptionEn: "Send an email for professional inquiries",
  },

  {
    name: "Instagram",
    username: "@mhmmdromza",
    href: "https://instagram.com/mhmmdromza",
    descriptionId: "Lihat aktivitas dan dokumentasi",
    descriptionEn: "View my activities and documentation",
  },

  {
    name: "GitHub",
    username: "@romzazikrian",
    href: "https://github.com/romzazikrian",
    descriptionId: "Lihat project dan source code",
    descriptionEn: "View my projects and source code",
  },

  {
    name: "LinkedIn",
    username: "mromzazikrian",
    href: "https://linkedin.com/in/mromzazikrian",
    descriptionId: "Terhubung secara profesional",
    descriptionEn: "Connect with me professionally",
  },
];
