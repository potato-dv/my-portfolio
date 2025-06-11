import {
  User,
  MapPin,
  Calendar,
  Coffee,
  BookOpen,
  Download,
  Star
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black/80">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Crafting Digital 
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent ml-2">Excellence</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I'm a passionate full-stack developer with over 3 years of
                experience creating digital solutions that make a real impact. I specialize in 
                transforming complex challenges into elegant, user-friendly experiences.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                My approach combines cutting-edge technology with creative problem-solving, 
                ensuring every project delivers exceptional value and performance.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-gray-400">Montalban, Rizal</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Calendar size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Status</p>
                    <p className="text-sm text-gray-400">Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <Coffee size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Fuel</p>
                    <p className="text-sm text-gray-400">Coffee Lover</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-4 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mindset</p>
                    <p className="text-sm text-gray-40">Always Learning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 hover:from-emerald-600 hover:to-teal-600">
              <div className="flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </div>
            </button>
          </div>

          {/* Visual Section */}
          <div className="relative">
            {/* Main Profile Card */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
              <div className="w-full h-80 bg-gray-800 rounded-2xl p-6 relative">
                {/* Profile Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <User size={64} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="absolute -top-6 -right-6 bg-emerald-500 text-white px-6 py-3 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white px-6 py-3 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs">Projects Completed</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-green-500 text-white px-4 py-3 rounded-xl">
                <div className="flex items-center space-x-1">
                  <Star size={16} className="fill-current" />
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}