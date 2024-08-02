import SectionTitle from "@/components/SectionTitle";
import SocialMedia from "@/components/SocialMedia";
import React from "react";

export default function Contact({ lang }) {
  let title = lang === "en" ? "CONTACT" : "تواصل";
  let Name = lang === "en" ? "Name" : "الاسم";
  let Email = lang === "en" ? "Email" : "البريد الالكتروني";
  let Message = lang === "en" ? "Message" : "الرسالة";
  let Send = lang === "en" ? "Send" : "ارسال";
  let Or = lang === "en" ? "OR" : "او";
  return (
    <section className="mb-10">
      <SectionTitle title={title} />
      <div className="p-3">
        <form action="" className="bg-accent w-full rounded-xl px-3">
          <Field name={Name} />
          <Field name={Email} />
          <Field name={Message} />
          <button className="bg-button hover:bg-button/70 mt-3 text-2xl font-black rounded-xl h-10 w-full px-3 mb-2">
            {Send}
          </button>
        </form>
      </div>
      <div>
        <div className="w-full h-px my-4 bg-color relative">
          <span className="opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {Or}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-center items-stretch">
        <SocialMedia />
      </div>
    </section>
  );
}
const Field = ({ name }) => {
  return (
    <div className="flex flex-col  mb-2">
      <label htmlFor={name} className="text-2xl px-3">
        {name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="h-10 bg-secondary rounded-lg px-2 text-lg focus:bg-none "
      />
    </div>
  );
};
