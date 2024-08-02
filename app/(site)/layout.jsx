import { Inter } from "next/font/google";
import "../globals.css";
// import Navbar from "@/components/navbar";
import { cookies } from "next/headers";
import { getSetting } from "@/sanity/lib/querys";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const setting = await getSetting();
  const title = setting?.title;
  const description = setting?.description;

  return {
    // metadataBase: new URL("http://localhost:3000"),
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    icons: "/logo.svg",
    images: "/og.png",
    description: description,

    openGraph: {
      title: {
        template: `%s | ${title}`,
        default: title,
      },
      description: description,
      images: "/og.png",
    },
    twitter: {
      title: {
        template: `%s | ${title}`,
        default: title,
      },
      description: description,
      images: "/og.png",
    },
  };

  // title: {
  //   template: `%s | ${title}`,
  //   default: title,
  // },
  // description: description,
  // icons: "/logo.svg",
  // // openGraph: {
  // //   images: "/logo.svg",
  // // },
  // };
}

// export const metadata = {
//   title: "Fahad Abdullah",
//   description: "Fahad Abdullah's personal website and portfolio",
//   image: "/logo.svg",
//   icons: "/logo.svg",
// };

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`flex justify-center items-center ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[800px] w-full min-h-screen ">
            {/* <Navbar lang={lang} /> */}
            {children}
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
