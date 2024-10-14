import React from "react";

export default function SectionWrapper(props) {
  const { title, header, children, id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col items-center gap-6">
      <div className="p-8 w-full bg-slate-800 flex flex-col items-center gap-4">
        <p className="uppercase text-xs sm:text-sm md:text-">{title}</p>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
          {header[0]} <span className="text-blue-400">{header[1]}</span>
          {header[2]}
        </h1>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
}
