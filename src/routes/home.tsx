import React, { useEffect, useRef } from "react";
// import { ImageWithFallback } from "../components/layout/ImageWithFallback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import bgVideo from "../assets/images/agri/agri_small.mp4";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { ArrowRight, Calendar, IndianRupee } from 'lucide-react';
import arunachalP from "../assets/images/arunachalP.jpg";
import ACABC from "../assets/images/agri/ACABC1.png";
import PMFBY from "../assets/images/agri/Pradhanmantri_phasal-Preview.png";
import Sathi from "../assets/images/agri/saathi.png";
import AMI from "../assets/images/agri/ami.png";
import ENAM from "../assets/images/agri/enam-logos.png";
import NFSM from "../assets/images/agri/nfsm.png";
import PMKISAN from "../assets/images/agri/pm-kisan-yojana-logo.png";
import PMKSY from "../assets/images/agri/pmksy.png";
import { useNavigate } from "react-router-dom";
const states = [
  {
    name: "Agri Clinics and Agri Business Centres",
    image: arunachalP,
    logo: ACABC,
  },
  { name: "Pradhan Mantri Fasal Bima Yojana", image: arunachalP, logo: PMFBY },
  { name: "SATHI", image: arunachalP, logo: Sathi },
  { name: "NABARD", image: arunachalP, logo: AMI },
  { name: "National Agriculture Market", image: arunachalP, logo: ENAM },
  { name: "National Food Security Mission", image: arunachalP, logo: NFSM },
  { name: "PM Kisan Samman Nidhi", image: arunachalP, logo: PMKISAN },
  {
    name: "Pradhan Mantri Krishi Sinchayee Yojana",
    image: arunachalP,
    logo: PMKSY,
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate(); // <-- add this

  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <div className="Smv_home">
      {/* Landing Section */}
      <section className="landing mb-5">
        <div className="landing_bg relative text-white overflow-hidden">
          {/* Background Image with Overlay */}
          {/* <div className="absolute inset-0 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623211269755-569fec0536d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGZpZWxkfGVufDF8fHx8MTc3MjEwNzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Agriculture Background"
              className="w-full h-full object-cover"
            />
          </div> */}
          {/* <div className="absolute inset-0 opacity-20">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div> */}

          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={bgVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black opacity-55"></div>
          </div>

          <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
            <div className="max-w-3xl">
              {/* <div className="inline-block bg-green-600 bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            🌾 Empowering Indian Farmers
          </div> */}
              <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                Digital Agriculture Platform for Progressive Farming
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Access government schemes, market prices, weather forecasts, and
                expert advice - all in one place
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="login_btn rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg flex items-center gap-2 mt-2"
                  onClick={() => navigate("/login")} // <-- programmatic navigation
                >
                  Login
                </button>
                {/* <button className="login_btn rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg flex items-center gap-2 mt-2">
                  Login
                </button> */}
                {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
              Watch Demo
            </button> */}
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about_container py-5 bg-light">
        <div className="container text-center">
          <div className="header_container">
            <h2>About Prastuti</h2>
            <div className="btm_line"></div>
          </div>
          {/* <hr className="mx-auto w-25 mb-4" /> */}
          <p>
            Agriculture plays a vital role in India's economy. 54.6% of the
            total workforce is engaged in agriculture and allied sector
            activities (Census2011). Agriculture and Allied sector accounts
            for18.4 % of India's GVA at current prices during 2022-23. Given the
            importance of the agriculture sector, Government of India has taken
            several steps for its development in a sustainable manner. <br />
            The Department of Agriculture & Farmers Welfare (DA&FW) is one of
            the two constituent Departments of the Ministry of Agriculture &
            Farmers Welfare. This Department is headed by Agriculture & Farmers
            Welfare Minister and is assisted by two Ministers of State. The
            Secretary (A&FW)is the administrative head of the Department. The
            Secretary is assisted by five Additional Secretaries including one
            Financial Adviser, 10 Joint Secretaries, one Agriculture
            Commissioner, Horticulture Commissioner, Sr. Economic Advisor,
            Horticulture Statistics Advisor, Advisor cost and Deputy Director
            General. In addition, Chairman of Commission for Agriculture Costs
            and Prices (CACP) advises Department on pricing policies for
            selected agricultural crops.
          </p>
        </div>
      </section>

      {/* NER States Section */}
      <section className="NER_states_outer py-5">
        <div className="container text-center">
          <div className="header_container NER_content">
            <h2 className="pg_heading">Agriculture Schemes</h2>
            <div className="btm_line"></div>
          </div>
          <div className="agri_slide">
            <div className="slider-wrapper">
              <button className="prev-btn">◀</button>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={4}
                spaceBetween={40}
                loop
                centeredSlides
                grabCursor
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                className="custom-swiper"
              >
                {states.map((state, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-card">
                      <img
                        src={state.logo}
                        alt={state.name}
                        className="state-logo"
                      />
                      <h5 className="state-title">{state.name}</h5>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="next-btn">▶</button>
              {/* <button ref={nextRef} className="nav-btn">
                ▶
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
