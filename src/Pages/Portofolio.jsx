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
// GOOGLE DRIVE PROJECT LINK
// ===============================
const PROJECT_DRIVE_LINK =
  "https://drive.google.com/drive/folders/1j-T1WXMvh2O332af3Kx0nLJ9KLfinqqm?usp=drive_link";

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
    // Jika klik tab Projects
    if (newValue === 0) {
      window.open(PROJECT_DRIVE_LINK, "_blank");
      return;
    }
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
            <div className="text-center text-slate-400">
              Redirecting to Google Drive...
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
