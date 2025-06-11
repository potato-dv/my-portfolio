import React from "react";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900/95 backdrop-blur-strong py-8 px-6 border-t border-theme">
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold gradient-text">
            Lauris-Jay T. Lorenzo
          </h3>
          <p className="text-gray-400">Full-Stack Developer</p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/potato-dv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 group"
            aria-label="GitHub Profile"
          >
            <Github
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lauris-jay-t-lorenzo-59354436a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-600/20 backdrop-blur-sm rounded-lg hover:bg-emerald-600/30 transition-all duration-300 border border-theme hover-border-theme group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin
              size={20}
              className="text-theme-primary group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.facebook.com/lauris.ngango"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-600/20 backdrop-blur-sm rounded-lg hover:bg-emerald-600/30 transition-all duration-300 border border-theme hover-border-theme group"
            aria-label="Facebook Profile"
          >
            <Facebook
              size={20}
              className="text-theme-primary group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="mailto:laurisjay@gmail.com"
            className="p-2 bg-emerald-600/20 backdrop-blur-sm rounded-lg hover:bg-emerald-600/30 transition-all duration-300 border border-theme hover-border-theme group"
            aria-label="Send Email"
          >
            <Mail
              size={20}
              className="text-theme-primary group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-theme mt-6 pt-6 text-center text-gray-400">
        <p>&copy; 2025 Lauris Lorenzo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
