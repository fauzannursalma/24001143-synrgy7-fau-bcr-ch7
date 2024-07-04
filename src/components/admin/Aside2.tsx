import React from "react";

interface Aside2Props {
  visible: boolean;
  activePage: string;
}

const Aside2: React.FC<Aside2Props> = ({ visible, activePage }) => {
  if (!visible) return null;

  return (
    <aside
      id="aside2"
      className="hidden md:flex w-56 md:flex-col items-center overflow-auto h-screen shadow-md"
    >
      <div className="flex h-16 w-full px-5 py-5">
        <div className="h-[34px] w-[100px] bg-[#CFD4ED]"></div>
      </div>
      {activePage === "dashboard" && (
        <div className="mt-4 flex h-16 w-full flex-col justify-center">
          <p className="mx-5 text-neutral-03 font-bold">Dashboard</p>
        </div>
      )}
      {activePage === "cars" && (
        <div className="mt-4 flex h-16 w-full flex-col justify-center">
          <p className="mx-5 text-neutral-03 font-bold">Cars</p>
        </div>
      )}
      <a
        href="/dashboard"
        className={`mt-4 flex h-16 w-full flex-col justify-center rounded ${
          activePage === "dashboard" ? "bg-[#CFD4ED]" : "hover:bg-[#CFD4ED]"
        }`}
      >
        <p
          className={`mx-5 font-bold ${activePage === "dashboard" ? "text-black" : "text-[#151515]"}`}
        >
          Dashboard
        </p>
      </a>
      <a
        href="/admin/cars"
        className={`mt-4 flex h-16 w-full flex-col justify-center rounded ${
          activePage === "cars" ? "bg-[#CFD4ED]" : "hover:bg-[#CFD4ED]"
        }`}
      >
        <p
          className={`mx-5 font-bold ${activePage === "cars" ? "text-black" : "text-[#151515]"}`}
        >
          Cars
        </p>
      </a>
    </aside>
  );
};

export default Aside2;
