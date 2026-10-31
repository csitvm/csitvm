/* Editable content lists: membership forms, newsletters, events, awards.
   To add an item, copy an existing line/object and edit it. Files go in assets/docs or assets/img.
   Source: csitvm.org (archive.org snapshots 2024-04-29 and 2025-03-30) unless noted. */
window.CSI_CONTENT = {
  forms: [
    { title: "Application Form for Individual Life Membership", file: "assets/docs/form-individual-life-membership.pdf" },
    { title: "Application for Renewal of Individual Membership", file: "assets/docs/form-renewal-individual-membership.pdf" },
    { title: "Application for Non Academic Institutional Membership", file: "assets/docs/form-non-academic-institutional-membership.pdf" },
    { title: "Application for Individual Student Membership", file: "assets/docs/form-individual-student-membership.pdf" }
  ],
  /* Newest first */
  newsletters: [
    { title: "Jun 2023 – May 2024", file: "assets/docs/newsletter-2024.pdf" },
    { title: "May – Jul 2021", file: "assets/docs/newsletter-2021-may-jul.pdf" },
    { title: "Jan – Mar 2021", file: "assets/docs/newsletter-2021-jan-mar.pdf" },
    { title: "Oct – Dec 2020", file: "assets/docs/newsletter-2020-oct-dec.pdf" }
  ],
  /* Event series named on the old site's menu. The old site had no entries under them. */
  eventSeries: [
    { title: "Weekly Talks", items: [] },
    { title: "Webinars", items: [] },
    { title: "Conferences", items: [] }
  ],
  /* Past events with posters recovered from the old site. Newest first. */
  events: [
    {
      title: "Let CSI Power Your IT Dreams, Christ Nagar College",
      date: "16 October 2026, 9:00 AM, Chavara Chamber, Christ Nagar College, Maranalloor",
      tags: ["In person", "College talk"],
      text: "A session for students at Christ Nagar College, organised by the PG Department of Computer Science in association with IQAC. The resource person was Mr. Rajesh P., Vice Chairman of the CSI Trivandrum Chapter. Coordinator: Dr. Arathi Chandran R. I.",
      image: "assets/img/christ-1.jpeg",
      alt: "Flyer for the session 'Let CSI Power Your IT Dreams' at Christ Nagar College on 16 October 2026, with Mr. Rajesh P., Vice Chairman, CSI Trivandrum Chapter, as resource person.",
    },
    {
      title: "CSI Orientation Class, John Cox Memorial CSI Institute of Technology",
      date: "26 September 2026, 11:30 AM to 12:30 PM, College Seminar Hall, Kannammoola",
      tags: ["In person", "Orientation"],
      text: "An orientation class introducing CSI to students of John Cox Memorial CSI Institute of Technology, Kannammoola, to meet the team and explore opportunities. The speakers were Mr. Rajesh P., Vice Chairman, and Mr. Basanth Kumar B.S., Secretary, of the CSI Trivandrum Chapter.",
      image: "assets/img/john-1.jpeg",
      alt: "Flyer for the Computer Society of India orientation class at John Cox Memorial CSI Institute of Technology on Saturday, 26 September, 11:30 AM to 12:30 PM, with Rajesh P and Basanth Kumar B S as speakers.",
    },
    {
      title: "Future Forward, Episode 03: Agentic AI",
      date: "22 August 2026, 7:00 PM to 8:00 PM, Online (Google Meet)",
      tags: ["Online", "Student talks"],
      text: "The Student Activity Council of the CSI Trivandrum Chapter presented Future Forward, a student-led technical talk series that connects emerging technologies with practical development. Episode 03 explored Agentic AI and how autonomous AI agents are changing the way we build, automate and interact with intelligent systems. Resource person: Ms. Dharshana Senthilkumar, Student, Department of Computer Science and Engineering, Amrita School of Computing, Amrita Vishwa Vidyapeetham, Nagercoil.",
      image: "assets/img/amrita-1.jpeg",
      alt: "Poster for Future Forward Episode 03: Agentic AI, presented by CSI Trivandrum Chapter on 22 August 2026, 7 to 8 PM, online on Google Meet, with Ms. Dharshana Senthilkumar as resource person."
    },
    {
      title: "National Student Tech Talk Series, Session 06",
      date: "6 May 2021, Thursday, 6 PM IST",
      tags: ["Online", "Student talks"],
      text: "Four crisp talks in 60 minutes, in the Padmabhushan F.C. Kohli Commemorative series. University partner: Kerala Technological University. Chair: Dr. Rajesh M.V., State Student Coordinator, CSI.",
      image: "assets/img/student-tech-talk-session-06.jpeg",
      alt: "Poster for National Student Tech Talk Series Session 06 on 6 May 2021, listing four student speakers and the chair."
    },
    {
      title: "SAC Student Council 2021-2022 Kick Off Ceremony",
      date: "6 May 2021, Thursday, 5:45 PM IST",
      tags: ["Online", "Student Council"],
      text: "Kick-off of the CSI Trivandrum Chapter student council. Chief guest: Shri. Mohammed Y. Safirulla IAS. Welcome by Dr. Elizabeth Sherly, Chairman, and vote of thanks by Ms. Lekshmy Money, Secretary, as named on the poster.",
      image: "assets/img/student-council-kickoff-2021.jpeg",
      alt: "Poster for the SAC Student Council 2021-2022 Kick Off Ceremony, with the chief guest, agenda and student chairs."
    }
  ],
  /* CSI student chapters in colleges. To add a tile, copy a line and edit it. href must be https:// */
  studentChapters: [
    { college: "Government Engineering College, Barton Hill", href: "https://csigecbh.in" },
    { college: "Mar Baselios College of Engineering and Technology", href: "https://csi-sb-mbcet.vercel.app" },
    { college: "Amrita Vishwa Vidyapeetham, Nagercoil Campus", href: "https://www.amrita.edu/campus/nagercoil/professional-society-student-clubs/csi-student-chapter/", note: "CSI Student Chapter page on the Amrita website" },
    { college: "College of Engineering, Perumon", href: "https://www.perumonec.ac.in/pages/facilities/professional-bodies.php", note: "Professional bodies page on the college website" }
  ],
  awards: [
    { title: "CSI-InApp Award", text: "An award programme linked from the old chapter website.", href: "https://csiawards.inapp.in/" }
  ]
};
