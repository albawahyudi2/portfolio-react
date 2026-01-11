import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes } from "lucide-react";
import TranskripPDF from "../assets/transkrip.pdf";


// ===============================
// TAB PANEL
// ===============================
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// ===============================
// TECH STACK DATA
// ===============================
const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "java.jpeg", language: "Java" },
  { icon: "python.jpeg", language: "Python" },
  { icon: "php.jpeg", language: "PHP" },
  { icon: "laravel.jpeg", language: "Laravel" },
];

const projects = [
  {
    type: "laravel",
    title: "Web Perawatan Kendaraan",
    desc: "Sistem manajemen perawatan kendaraan berbasis Laravel",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    live: "https://alba-autocare.rf.gd/",
    repo: "https://github.com/albawahyudi2/alba-autocare",
  },

  {
    type: "Typescript",
    title: "Web Toko Baju",
    desc: "Sistem manajemen catalog dan penjualan baju",
    tech: ["Typescript", "MySQL", "Supabase", "JavaScript", "HTML", "CSS"],
    live: "https://web-toko-baju.vercel.app/",
    repo: "https://github.com/albawahyudi2/toko-baju",
  },
  {
    type: "JavaScript",
    title: "Portofolio Website",
    desc: "Website portofolio pribadi untuk menampilkan proyek, informasi akademik, dengan tampilan modern dan responsif",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    live: "https://portfolio-react-rqlm.vercel.app/",
    repo: "https://github.com/albawahyudi2/portfolio-react",
  },
    {
    type: "laravel",
    title: "Web Manajemen Perpustakaan Digital",
    desc: "Deskripsi proyek web manajemen perpustakaan digital berbasis Laravel",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    live: "http://alba-perpustakaan.lovestoblog.com/login",
    repo: "https://github.com/albawahyudi2/manajemen-perpustakaan-digital",
  },
  {
    type: "HTML",
    title: "Website Berita Token Koin",
    desc: "Website untuk menampilkan berita koin blockchain",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://token-rust-alpha.vercel.app/", // Placeholder, ganti jika ada link baru
    repo: "https://github.com/albawahyudi2/token", // Placeholder, ganti jika ada repo baru
  },
  {
    type: "figma",
    title: "UI&UX Dating App",
    desc: "Desain UI aplikasi online dating",
    tech: ["Figma"],
    figma: "https://www.figma.com/design/cZIrSQu6DHTZ6KNfebOzhE/Untitled?t=eNk9xJ66qxVmAnbU-1",
  },
  {
    type: "figma",
    title: "UI&UX Website Pemesanan",
    desc: "Desain UI Website Pemesanan Restoran",
    tech: ["Figma"],
    figma: "https://www.figma.com/design/td1naG1zxPdjtIOpOKOWU1/Untitled?node-id=0-1&t=0I312zArwMfmFGjT-1", // Placeholder, ganti jika ada link baru
  },
  {
    type: "figma",
    title: "UI&UX Website UMKM",
    desc: "Desain UI Website UMKM",
    tech: ["Figma", "Adobe XD"],
    figma: "https://www.figma.com/design/H0dEz3TvjlyjmMbHgKRMym/Untitled?t=r5iup9YLDeJZaUA4-1", // Placeholder, ganti jika ada link baru
  },
  {
    type: "pdf",
    title: "Achievements - me | Microsoft Learn",
    desc: "Microsoft Azure Ai Fundamentals",
    file: "/pdf/Achievements - me _ Microsoft Learn.pdf",
  },
  {
    type: "pdf",
    title: "Sertifikat LTO HIMA",
    desc: "Leadership Training Organization",
    file: "/pdf/Sertifikat LTO.pdf", // Placeholder, ganti jika ada file baru
  },
  {
    type: "pdf",
    title: "Jurnal",
    desc: "ARTICLE 'Pengaruh Emosi dan Kontrol Diri terhadap Keputusan Trading pada Trader Ritel di Indonesia'",
    file: "/pdf/jurnal.pdf", // Placeholder, ganti jika ada file baru
  },
];


// ===============================
// MAIN COMPONENT
// ===============================
export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(1); // default ke Transkrip Nilai

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  // ===============================
  // HANDLE TAB CHANGE
  // ===============================
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="md:px-[10%] px-[5%] w-full mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      {/* ================= HEADER ================= */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Academic records, technical expertise, and documented projects.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* ================= TABS ================= */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              "& .MuiTab-root": {
                fontWeight: 600,
                color: "#94a3b8",
                textTransform: "none",
                minHeight: "70px",
                transition: "0.3s",
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,.2), rgba(59,130,246,.2))",
                },
              },
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              icon={<Code className="mb-2" size={18} />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2" size={18} />}
              label="Transkrip Nilai"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2" size={18} />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        {/* ================= CONTENT ================= */}
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* ================= PROJECTS (REDIRECT ONLY) ================= */}
          <TabPanel value={value} index={0}>
  {/* NOTE */}
  <div className="mb-6 bg-red-600/20 border border-red-500/50 rounded-lg p-4">
    <p className="text-red-400 text-sm md:text-base text-center font-medium">
      ⚠️ Note: Jika website tidak terbuka gunakanlah Cloudflare / VPN
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition"
      >
        <h3 className="text-white font-bold text-lg">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mt-2">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech?.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {(project.type === "laravel" || project.type === "Typescript" || project.type === "JavaScript" || project.type === "HTML") && project.live && project.repo && (
            <>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white"
                >
                  Tampilan Website
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-lg border border-white/20 text-white"
                >
                  Source Code
                </a>
              )}
            </>
          )}

          {project.type === "figma" && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 text-sm rounded-lg bg-pink-600 text-white"
            >
              View Figma
            </a>
          )}

          {project.type === "pdf" && (
            <a
              href={project.file}
              target="_blank"
              className="px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white"
            >
              View PDF
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</TabPanel>


          {/* ================= TRANSKRIP NILAI ================= */}
<TabPanel value={value} index={1}>
  <div className="container mx-auto max-w-5xl">

    {/* HEADER */}
    <div className="text-center mb-6">
      <h3 className="text-2xl md:text-3xl font-bold text-white">
        Transkrip Akademik
      </h3>
      <p className="text-slate-400 mt-2">
        Program Studi Sistem Informasi – Universitas Teknologi Digital Indonesia
      </p>
    </div>

    {/* CARD */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-8 backdrop-blur-xl">

      {/* GAMBAR TRANSKRIP */}
      <div className="flex justify-center mb-6">
        <iframe
        src={TranskripPDF}
        title="Transkrip Nilai PDF"
        className="
          w-full
          h-[900px]
          rounded-xl
          border border-white/10
          bg-white
        "
      />
      </div>

      {/* INFO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Nama</p>
          <p className="text-white font-semibold">Alba Wahyudi</p>
        </div>

        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-slate-400 text-sm">NIM</p>
          <p className="text-white font-semibold">235610030</p>
        </div>

        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-slate-400 text-sm">IPK</p>
          <p className="text-green-400 font-bold text-xl">3.42</p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-6">
<a
  href={TranskripPDF}
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-6 py-3
    rounded-xl
    bg-gradient-to-r from-[#6366f1] to-[#a855f7]
    text-white font-semibold
    hover:scale-105 transition
  "
>
  Lihat Transkrip Full
</a>

      </div>
    </div>
  </div>
</TabPanel>

          {/* ================= TECH STACK ================= */}
          <TabPanel value={value} index={2}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center">
              {techStacks.map((stack, index) => (
                <TechStackIcon
                  key={index}
                  TechStackIcon={stack.icon}
                  Language={stack.language}
                />
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
