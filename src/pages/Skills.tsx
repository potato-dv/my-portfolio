import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface TechData {
  id: number;
  name: string;
  description: string;
  image: string;
  bgColor: string;
  docsUrl: string;
}

const TechCarousel3D: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const technologies: TechData[] = [
    {
      id: 1,
      name: "React",
      description: "JavaScript Library",
      image: "src/assets/images/react.png",
      bgColor: "from-blue-400 to-cyan-500",
      docsUrl: "https://react.dev/learn",
    },
    {
      id: 2,
      name: "TypeScript",
      description: "Typed Superset of JavaScript",
      image: "src/assets/images/typescript.png",
      bgColor: "from-blue-600 to-blue-400",
      docsUrl: "https://www.typescriptlang.org/docs/",
    },
    {
      id: 3,
      name: "Figma",
      description: "Design & Prototyping",
      image: "src/assets/images/figma.png",
      bgColor: "from-purple-400 to-pink-500",
      docsUrl: "https://help.figma.com/",
    },
    {
      id: 4,
      name: "HTML",
      description: "Markup Language",
      image: "src/assets/images/html.png",
      bgColor: "from-orange-400 to-red-500",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 5,
      name: "PHP",
      description: "Server-side Language",
      image: "src/assets/images/php.png",
      bgColor: "from-indigo-400 to-purple-600",
      docsUrl: "https://www.php.net/docs.php",
    },
    {
      id: 6,
      name: "Laravel",
      description: "PHP Framework",
      image: "src/assets/images/laravel.png",
      bgColor: "from-red-400 to-orange-500",
      docsUrl: "https://laravel.com/docs",
    },
    {
      id: 7,
      name: "JavaScript",
      description: "Programming Language",
      image: "src/assets/images/javascript.png",
      bgColor: "from-yellow-400 to-orange-500",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 8,
      name: "Tailwind CSS",
      description: "Utility-first CSS",
      image: "src/assets/images/tailwind.png",
      bgColor: "from-teal-400 to-blue-500",
      docsUrl: "https://tailwindcss.com/docs",
    },
  ];

  const handleTechClick = (docsUrl: string) => {
    window.open(docsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="skills"
      className="min-h-[80vh] bg-black/80 flex items-center justify-center py-8"
    >
      <div className="w-full max-w-6xl">
        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="mySwiper"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.id} className="!w-80 !h-80">
                <div
                  className={`bg-gradient-to-br ${tech.bgColor} w-full h-full rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white relative overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-3xl`}
                  onClick={() => handleTechClick(tech.docsUrl)}
                >
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>

                  {/* Color-matched gradient overlays for side fading effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-100 transition-opacity duration-500 slide-shadow-overlay`}></div>

                  {/* Content */}
                  <div className="relative z-10 text-center p-8 flex flex-col items-center">
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-yellow-200 transition-colors duration-300">
                      {tech.name}
                    </h3>

                    {/* Tech Logo */}
                    <div className="w-24 h-24 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-contain filter drop-shadow-lg"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = "none";
                          const nextElement =
                            target.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = "block";
                          }
                        }}
                      />
                      <div
                        className="hidden text-4xl font-bold text-white/80"
                        style={{ display: "none" }}
                      >
                        {tech.name.charAt(0)}
                      </div>
                    </div>

                    <p className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.description}
                    </p>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 -right-2 w-6 h-6 bg-white/15 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-white/25 rounded-full animate-ping"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .mySwiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 30px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: 300px;
          transition: transform 0.3s ease;
        }

        .swiper-slide-active {
          transform: scale(1.1) !important;
          z-index: 10;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
        }

        /* Active slide - remove shadow overlay */
        .swiper-slide-active .slide-shadow-overlay {
          opacity: 0 !important;
        }

        /* Non-active slides - enhance shadow overlay with background color fade */
        .swiper-slide:not(.swiper-slide-active) .slide-shadow-overlay {
          opacity: 1;
        }

        /* Individual background color fades for each technology */
        .swiper-slide:not(.swiper-slide-active):nth-child(1) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(59, 130, 246, 0.9) 0%,
            rgba(59, 130, 246, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(59, 130, 246, 0.5) 80%,
            rgba(59, 130, 246, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(2) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(37, 99, 235, 0.9) 0%,
            rgba(37, 99, 235, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(37, 99, 235, 0.5) 80%,
            rgba(37, 99, 235, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(3) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(168, 85, 247, 0.9) 0%,
            rgba(168, 85, 247, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(168, 85, 247, 0.5) 80%,
            rgba(168, 85, 247, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(4) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(251, 146, 60, 0.9) 0%,
            rgba(251, 146, 60, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(251, 146, 60, 0.5) 80%,
            rgba(251, 146, 60, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(5) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(129, 140, 248, 0.9) 0%,
            rgba(129, 140, 248, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(129, 140, 248, 0.5) 80%,
            rgba(129, 140, 248, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(6) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(248, 113, 113, 0.9) 0%,
            rgba(248, 113, 113, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(248, 113, 113, 0.5) 80%,
            rgba(248, 113, 113, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(7) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(251, 191, 36, 0.9) 0%,
            rgba(251, 191, 36, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(251, 191, 36, 0.5) 80%,
            rgba(251, 191, 36, 0.9) 100%
          );
        }

        .swiper-slide:not(.swiper-slide-active):nth-child(8) .slide-shadow-overlay {
          background: linear-gradient(
            to right,
            rgba(45, 212, 191, 0.9) 0%,
            rgba(45, 212, 191, 0.5) 20%,
            transparent 40%,
            transparent 60%,
            rgba(45, 212, 191, 0.5) 80%,
            rgba(45, 212, 191, 0.9) 100%
          );
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .swiper-slide {
            width: 250px;
            height: 250px;
          }
        }
      `,
        }}
      />
    </section>
  );
};

export default TechCarousel3D;