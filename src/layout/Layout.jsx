import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({ children }) => (
  <div
    className="min-h-screen flex flex-col bg-white text-gray-800
    bg-[linear-gradient(153deg,rgba(14,119,194,0.77)_28%,rgba(250,162,75,0.84)_64%)]
    bg-cover bg-fixed bg-no-repeat"
  >
    <Header />
    <main className="flex-1 w-full sm:px-6 px-4 py-4 sm:py-4">
      {children}
    </main>
    <Footer />
  </div>
);
