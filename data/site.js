/* Site-wide settings. Edit here; header, footer and contact blocks update on every page.
   Sources: csitvm.org home page (archive 2025-03-30) and its contact_us.pdf. */
window.CSI_SITE = {
  name: "Computer Society of India, Trivandrum Chapter",
  short: "CSI Trivandrum",
  logo: "assets/img/csi-trivandrum-logo.png",
  /* Main navigation. href is relative to the site root. */
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Membership", href: "membership.html" },
    { label: "Office Bearers", href: "office-bearers.html" },
    { label: "Events", href: "events.html" },
    { label: "Student Chapters", href: "student-chapters.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Awards", href: "awards.html" }
  ],
  contact: {
    addressLines: ["Symphony, T.C. 82/5426, 1st Floor", "Cherian's Square, Ambujavilasam Road", "Pulimood, Thiruvananthapuram", "Kerala, PIN 695 001"],
    phone: "9400796741",
    email: "csitvm@gmail.com",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cherian%27s+Square+Ambujavilasam+Road+Thiruvananthapuram+695001"
  },
  /* Social profiles as listed on the old site's contact sheet. TO CONFIRM that they are still active. */
  social: [
    { label: "Facebook", href: "https://facebook.com/csitvm" },
    { label: "X (Twitter)", href: "https://twitter.com/csitvm" },
    { label: "LinkedIn", href: "https://linkedin.com/in/csitvm" },
    { label: "YouTube", href: "https://youtube.com/csitvm" },
    { label: "GitHub", href: "https://github.com/csitvm" }
  ],
  /* Related sites that were linked from the old site's menu */
  related: [
    { label: "CSI Trivandrum Student Council", href: "https://student.csitvm.in/" },
    { label: "Deep.Learn (2021)", href: "https://deeplearning.csitvm.in/" },
    { label: "CSI-InApp Award", href: "https://csiawards.inapp.in/" },
    { label: "Computer Society of India (national)", href: "https://www.csi-india.org" }
  ]
};
