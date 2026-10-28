export const site = {
  email: 'mcarreradev12@gmail.com',
  linkedin: { url: 'https://www.linkedin.com/in/matias-carrera/', label: '/in/matias-carrera' },
  github: { url: 'https://github.com/maticarrera12/', label: 'github.com/maticarrera12' },
  instagram: { url: 'https://www.instagram.com/estudiocounterpoint/', label: '@estudiocounterpoint' },
  cv: '/cv/Matias_Carrera_CV_Desarrollador.pdf',
  // International format without "+" or spaces. Argentine mobiles use 54 + 9 + area code + number.
  whatsapp: '5491154793056',
} as const;

export const whatsappLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
