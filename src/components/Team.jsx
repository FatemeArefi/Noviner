import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      image:
        "https://noviner.io/assets/static/team-behrouz-zarei.CYWrY3vB.webp",
      name: "بهروز زارعی",
      role: "CTO",
    },
    {
      image: "	https://noviner.io/assets/static/team-ramin.DCC2MYmG.webp",
      name: "رامین براتی",
      role: "CMO",
    },
    {
      image:
        "https://noviner.io/assets/static/team-kimia-sardari.Belaojh2.webp",
      name: "کیمیا سرداری",
      role: "Project Manager",
    },
    {
      image: "https://noviner.io/assets/static/team-fateme.XdDeORkm.webp",
      name: "فاطمه جلیلیان",
      role: "Web Developer",
    },
    {
      image:
        "https://noviner.io/assets/static/team-maryam-roshan.GzaNHro4.webp",
      name: "مریم روشن",
      role: "Web Developer",
    },
    {
      image:
        "https://noviner.io/assets/static/team-sahar-rezaeian.0kYw2xrT.webp",
      name: "سحر رضاییان",
      role: "Web Developer",
    },
    {
      image: "https://noviner.io/assets/static/team-rozbeh.BfhQuMDV.webp",
      name: "روزبه زارعی",
      role: "Mobilr Designer",
    },
    {
      image: "https://noviner.io/assets/static/team-ahoora.BYugN7xH.webp",
      name: "اهورا فخاریان",
      role: "UI/UX Designer",
    },
    {
      image: "	https://noviner.io/assets/static/team-fariba.VVMphCGo.webp",
      name: "فریبا احسانی",
      role: "Digital Marketing",
    },
    {
      image: "	https://noviner.io/assets/static/team-hadis.CcsTdyUN.webp",
      name: "حدیث بازوند",
      role: "Content Marker",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-text">
        <h2>
          تیم <span>نوینر</span> بهترین های تکنولوژی
        </h2>
        <div className="team-btn-container">
          <a className="team-btn">درباره ی مجموعه</a>
        </div>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h2 className="team-name">{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
