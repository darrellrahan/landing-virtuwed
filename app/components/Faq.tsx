import { CaretDown, ChatCircle } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { lora } from "../fonts";

function Faq() {
  const QUESTIONS = [
    {
      question: "What is Virtuwed?",
      answer:
        "Main features include digital invitations, souvenir delivery, virtual welcome, wedding photo gallery, video calls, and live wedding streaming.",
    },
    {
      question: "What are the main features of virtuwed?",
      answer:
        "Main features include digital invitations, souvenir delivery, virtual welcome, wedding photo gallery, video calls, and live wedding streaming.",
    },
    {
      question: "What packages does Virtuwed provide?",
      answer:
        "Main features include digital invitations, souvenir delivery, virtual welcome, wedding photo gallery, video calls, and live wedding streaming.",
    },
    {
      question:
        "Are there any additional charges for adding guests to Virtuwed Premium?",
      answer:
        "Main features include digital invitations, souvenir delivery, virtual welcome, wedding photo gallery, video calls, and live wedding streaming.",
    },
    {
      question: "Why virtuwed is an option for weddings?",
      answer:
        "Main features include digital invitations, souvenir delivery, virtual welcome, wedding photo gallery, video calls, and live wedding streaming.",
    },
  ];

  return (
    <section id="faq" className="px-6 lg:px-28 py-32">
      <h1
        className={`text-4xl font-semibold text-center mb-16 ${lora.className}`}
      >
        <span className="flex items-center justify-center gap-4 leading-relaxed">
          <span>You Got</span> <ChatCircle size={40} />{" "}
        </span>{" "}
        Questions?
      </h1>
      {QUESTIONS.map((data, index) => (
        <div
          key={data.question}
          className="border-b-2 border-black py-6 lg:py-8 flex items-center gap-8 text-xl font-semibold"
        >
          <span className="basis-[10%]">0{index + 1}</span>
          <span className="basis-[80%]">{data.question}</span>
          <button className="basis-[10%] flex justify-end">
            <CaretDown size={32} />
          </button>
        </div>
      ))}
    </section>
  );
}

export default Faq;
