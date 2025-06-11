import React from "react";
import { motion } from "framer-motion";
import { User, Github, Linkedin, MapPin, Coffee } from "lucide-react";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-theme-gradient pt-20 md:pt-5"
    >
      <motion.div
        className="absolute inset-0 bg-theme-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Starfield Effect */}
      <div className="star-container">
        {/* Large twinkling stars */}
        <motion.div
          className="star star-medium star-emerald"
          style={{ top: "15%", left: "10%" }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.div
          className="star star-small star-green"
          style={{ top: "25%", right: "15%" }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="star star-large star-teal"
          style={{ top: "35%", left: "75%" }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="star star-small star-emerald"
          style={{ top: "60%", left: "20%" }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="star star-medium star-green"
          style={{ top: "70%", right: "25%" }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="star star-small star-teal"
          style={{ top: "45%", right: "60%" }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.6, 0.5],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.div
          className="star star-medium star-emerald"
          style={{ top: "80%", left: "40%" }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2,
          }}
        />
        <motion.div
          className="star star-small star-green"
          style={{ top: "20%", left: "50%" }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="star star-large star-teal"
          style={{ top: "55%", right: "80%" }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.4, 1.1, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />
        <motion.div
          className="star star-small star-emerald"
          style={{ top: "10%", right: "40%" }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />

        {/* Subtle floating particles */}
        <motion.div
          className="star-particle"
          style={{ top: "30%", left: "85%" }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="star-particle"
          style={{ top: "75%", right: "10%" }}
          animate={{
            y: [15, -15, 15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.div
                className="space-y-3 sm:space-y-4"
                variants={itemVariants}
              >
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 text-theme-primary text-sm font-medium"
                  variants={itemVariants}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <MapPin size={16} />
                  </motion.div>
                  <span>Based in Philippines</span>
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  variants={itemVariants}
                >
                  <motion.span
                    className="text-white block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Hello, I'm
                  </motion.span>
                  <motion.span
                    className="gradient-text block"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Lauris Lorenzo
                  </motion.span>
                </motion.h1>

                <motion.div
                  className="space-y-2 sm:space-y-3"
                  variants={itemVariants}
                >
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    Full-Stack Developer
                  </motion.div>
                  <motion.div
                    className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    Passionate about creating innovative digital experiences and
                    building scalable web solutions that make a difference.
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <motion.div
                      animate={{ rotate: [0, 12, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <Coffee size={16} />
                    </motion.div>
                  </span>
                </motion.button>

                <motion.button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-theme rounded-xl font-semibold hover:bg-emerald-500/10 hover-border-theme transition-all duration-300 text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 justify-center lg:justify-start pt-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="https://github.com/potato-dv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                  variants={socialVariants}
                  whileHover="hover"
                >
                  <Github
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/lauris-jay-t-lorenzo-59354436a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 bg-emerald-600/20 backdrop-blur-sm rounded-xl hover:bg-emerald-600/30 transition-all duration-300 border border-theme hover-border-theme"
                  variants={socialVariants}
                  whileHover="hover"
                >
                  <Linkedin
                    size={20}
                    className="text-theme-primary group-hover:scale-110 transition-transform"
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center mb-4 sm:mb-0"
            variants={profileVariants}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-green-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1.3, 1, 1.3],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Main Profile Container - No Circle */}
              <div className="relative w-full h-full">
                {/* Simple Profile Image Container */}
                <motion.div
                  className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-900/40 to-emerald-900/20 backdrop-blur-sm overflow-hidden shadow-2xl border border-theme"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/src/assets/images/profile.png"
                    alt="Lauris-Jay Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback User Icons */}
                  <div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900/60 to-emerald-900/30"
                    style={{ display: "none" }}
                  >
                    <User size={60} className="sm:hidden text-theme-primary" />
                    <User
                      size={80}
                      className="hidden sm:block lg:hidden text-theme-primary"
                    />
                    <User
                      size={100}
                      className="hidden lg:block text-theme-primary"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
