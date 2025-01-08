import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Film } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-8 h-98">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between ">
        <div className="text-center md:text-left gap-6">
          <p className="text-2xl font-bold flex items-center justify-center gap-2">
            <Film /> Movie Z
          </p>
          <p className="text-sm">&copy; 2024 Movie Z. All rights reserved.</p>
          <div className="flex place-content-between">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mt-4  ">
                <FaEnvelope />
                <span>
                  Email:
                  <a
                    href="mailto:support@movieZ.com"
                    className="mt-2 text-sm hover:underline"
                  >
                    {" "}
                    <p> support@movieZ.com</p>
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <FaPhone />
                <span>
                  Phone:
                  <a
                    href="tel:+976 8066-7880"
                    className="mt-2 text-sm hover:underline"
                  >
                    <p>+976 8066-7880</p>
                  </a>
                </span>
              </div>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0 flex-col p-2  sm:80 gap-5 ">
              <a href="#" className="text-white hover:text-gray-500 transition">
                Follow us
              </a>
              <a
                href="https://www.facebook.com/search/top?q=pinecone%20academy"
                className="text-white hover:text-gray-500 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/pineconemongolia/"
                className="text-white hover:text-gray-500 transition"
              >
                Instagram
              </a>
              <a
                href="https://x.com/"
                className="text-white hover:text-gray-500 transition"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/results?search_query=pinecone"
                className="text-white hover:text-gray-500 transition"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
