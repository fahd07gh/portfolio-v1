import LanguageButton from "@/components/languageButton";
import { ThemsToggle } from "@/components/ThemsToggle";
import Link from "next/link";

export const metadata = {
  title: "project",
  description: "Fahad Abdullah's project",
  image: "/logo.svg",
};

export default function Layout({ children }) {
  const navLinks = {
    en: ["Home", "About", "Project", "Contact"],
    ar: ["الرئيسية", "عني", "مشروع", "تواصل"],
  };
  let lang = "en";
  return (
    <>
      <header className="flex items-center justify-center gap-6 fixed top-5 left-0 w-full z-50">
        {/* gap-5  pe-5*/}

        <nav className="max-w-[400px] w-full h-10 bg-secondary flex items-center justify-between pe-3  rounded-full relative">
          <div className="w-full flex flex-nowrap justify-start items-center text-xl h-full">
            {navLinks[lang].map((link, index) => (
              <Link
                key={link + "-" + index}
                href={`
            ${link === "Home" ? "/" : `/#${link.toLowerCase()}`}`}
                className="text-color border-e px-2 h-full flex items-center justify-center"
              >
                {link}
              </Link>
            ))}
          </div>
          <Link
            href="/#project"
            className="absolute -translate-x-1/2 left-1/2 -z-10"
          >
            <svg
              width="80"
              height="72"
              viewBox="0 0 80 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.6708 71.9091C39.58 71.891 39.489 71.8612 39.3993 71.8187L0.720825 53.499C0.2827 53.2915 -2.2163e-08 52.8259 0 52.3118L6.06756e-07 38.2377L25.3456 26.233L21.0314 24.1896L21.0314 26.6537C21.0314 27.1679 20.7487 27.6335 20.3105 27.841L13.7792 30.9334V20.7547L11.3662 19.6118C10.5672 19.2334 9.66962 19.8615 9.66962 20.799V32.0339C9.66962 32.5481 9.38689 33.0137 8.94874 33.2212L6.40322e-07 37.4591L2.25524e-06 1.29909C2.25524e-06 0.361574 0.897625 -0.266561 1.69658 0.11185L40.0733 18.2887L78.3034 0.181296C79.1024 -0.197115 80 0.43102 80 1.36854V37.5285L71.0513 33.2907C70.6131 33.0832 70.3304 32.6175 70.3304 32.1034V20.8685C70.3304 19.931 69.4328 19.3028 68.6338 19.6812L66.2208 20.8241V31.0028L59.6895 27.9105C59.2514 27.703 58.9686 27.2373 58.9686 26.7231V24.2591L54.6544 26.3024L80 38.3071V52.3812C80 52.8953 79.7173 53.3609 79.2792 53.5684L40.6007 71.8881C40.2857 72.0373 39.9554 72.0301 39.6708 71.9091ZM39.921 34.2092L31.0959 38.0875V53.3077L40.079 57.2555L48.9041 53.3772L48.9041 38.157L39.921 34.2092ZM13.7792 45.6976L21.5069 49.0937V42.3016L13.7792 45.6976ZM66.2208 45.7671L58.4932 49.1631V42.371L66.2208 45.7671Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className="flex gap-2">
            {/* <LanguageButton /> */}
            <ThemsToggle />
          </div>
        </nav>
      </header>

      {children}
    </>
  );
}
