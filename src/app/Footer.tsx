import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-8 h-80">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left gap-6">
          <p className="text-2xl font-bold">Movie Z</p>
          <p className="text-sm">&copy; 2024 Movie Z. All rights reserved.</p>
          <FaEnvelope className="flex-row-reverse" />
          <span>
            Email:
            <a
              href="mailto:support@movieZ.com"
              className="mt-2 text-sm hover:underline"
            >
              {" "}
              support@movieZ.com
            </a>
          </span>
          <FaPhone className="" />
          <span>
            Phone:
            <a
              href="tel:+976 8066-7880"
              className="mt-1 text-sm hover:underline"
            >
              {" "}
              +976 8066-7880
            </a>
          </span>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0 flex-col gap-5">
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
    </footer>
  );
};
export default Footer;
