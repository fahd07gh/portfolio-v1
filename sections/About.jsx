import SectionTitle from "@/components/SectionTitle";
import AboutSection from "@/components/AboutSection";
import SocialMedia from "@/components/SocialMedia";
import { getAbout } from "@/sanity/lib/querys";

export default async function About({ lang }) {
  const about = await getAbout();
  let title = lang === "en" ? "ABOUT" : "عني";
  let education = lang === "en" ? "Education" : "التعليم";
  let skills = lang === "en" ? "Skills" : "المهارات";
  let socialMedia = lang === "en" ? "Social Media" : "التواصل الاجتماعي";
  return (
    <section className="">
      <SectionTitle title={title} />
      <div className="px-2">
        <p className="font-semibold text-xl">{about.header}</p>
        <AboutSection title={education} data={about.education} />
        <AboutSection title={skills} data={about.skills} />
      </div>
      <div className="my-5">
        <h2 className="px-2 bg-accent text-2xl font-bold w-fit rounded-md mb-3">
          {socialMedia}
        </h2>
        <div className="flex flex-row flex-wrap gap-2 px-2">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
