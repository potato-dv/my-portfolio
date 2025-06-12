import {
  MapPin,
  Calendar,
  Coffee,
  BookOpen,
  Download,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import resumeImage from "../assets/images/resume.png";

export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/files/Lauris-Jay_T._Lorenzo_Resume.pdf";
    link.download = "Lauris-Jay_T._Lorenzo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-black/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
        >
          {/* Content Section */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-3xl font-bold mb-6 text-white"
                variants={itemVariants}
              >
                Crafting Digital
                <span className="text-white ml-2">Excellence</span>
              </motion.h3>
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed text-lg"
                variants={itemVariants}
              >
                I'm a passionate full-stack developer with over 3 years of
                experience creating digital solutions that make a real impact. I
                specialize in transforming complex challenges into elegant,
                user-friendly experiences.
              </motion.p>
              <motion.p
                className="text-gray-300 mb-8 leading-relaxed text-lg"
                variants={itemVariants}
              >
                My approach combines cutting-edge technology with creative
                problem-solving, ensuring every project delivers exceptional
                value and performance.
              </motion.p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin size={18} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-gray-400">Montalban, Rizal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar size={18} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-white">Status</p>
                    <p className="text-sm text-gray-400">Available</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Coffee size={18} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-white">Fuel</p>
                    <p className="text-sm text-gray-400">Coffee Lover</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen size={18} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-white">Mindset</p>
                    <p className="text-sm text-gray-400">Always Learning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-teal-600"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="flex items-center space-x-2"
                initial={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Download size={20} />
                </motion.div>
                <span>Download Resume</span>
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Visual Section */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Main Profile Card */}
            <motion.div
              className="bg-gray-900 rounded-3xl p-8 border border-gray-700"
              variants={cardVariants}
              whileHover={{
                borderColor: "rgb(16, 185, 129)",
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-80 bg-gray-800 rounded-2xl p-6 relative overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Resume Image */}
                <motion.img
                  src={resumeImage}
                  alt="Lauris-Jay T. Lorenzo Resume"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                />
                {/* Overlay for better text visibility on badges */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </motion.div>

              {/* Achievement Badges */}
              <motion.div
                className="absolute -top-6 -right-6 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1, type: "spring" }}
                  >
                    3+
                  </motion.div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-teal-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-2xl font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
                  >
                    50+
                  </motion.div>
                  <div className="text-xs">Projects Completed</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg"
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="flex items-center space-x-1">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Star size={16} className="fill-current" />
                  </motion.div>
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
