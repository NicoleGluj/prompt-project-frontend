export const Footer = () => (
  <footer className="text-white font-light text-center p-4 mt-8 text-sm border-t border-gray-200">
    Creado por{" "}
    <a
      href="https://www.linkedin.com/in/nicole-gluj-640805210/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:text-gray-300 transition-colors duration-300"
    >
      Nicole Gluj
    </a>{" "}
    © {new Date().getFullYear()}
  </footer>
);
