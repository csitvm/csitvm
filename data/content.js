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
  awards: [
    { title: "CSI-InApp Award", text: "An award programme linked from the old chapter website.", href: "https://csiawards.inapp.in/" }
  ]
};
