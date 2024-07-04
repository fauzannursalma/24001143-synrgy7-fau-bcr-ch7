import React from "react";

const MobileAside: React.FC<{ visible: boolean; toggleMenu: () => void }> = ({
  visible,
  toggleMenu,
}) => {
  if (!visible) return null;

  return (
    <aside id="asideMenu" className={`fixed inset-0 z-50 h-full w-full`}>
      <div className="absolute inset-y-0 right-0 w-2/5 bg-black text-white opacity-25"></div>
      <div className="absolute inset-y-0 left-0 w-3/5 flex flex-row">
        <div className="flex w-32 flex-col items-center overflow-auto bg-[#0D28A6] pb-4">
          <div className="flex h-16 w-full items-center justify-center">
            <div className="h-8 w-8 bg-[#CFD4ED]"></div>
          </div>
          <a
            href="/"
            className="mt-4 flex h-16 w-full flex-col items-center justify-center rounded hover:bg-[#CFD4ED]"
          >
            <i data-feather="home" className="text-white"></i>
            <p className="text-white text-xs font-bold">Dashboard</p>
          </a>
          <a
            href="./cars"
            className="mt-4 flex h-16 w-full flex-col items-center justify-center rounded hover:bg-[#CFD4ED]"
          >
            <i data-feather="truck" className="text-white"></i>
            <p className="text-white text-xs font-bold">Cars</p>
          </a>
        </div>
        <div className="flex w-72 flex-col items-center overflow-auto bg-white">
          <div className="flex h-16 w-full px-5 py-5">
            <div className="h-[34px] w-[100px] bg-[#CFD4ED]"></div>
            <button
              onClick={toggleMenu}
              type="button"
              className="block md:hidden ml-5"
            >
              <i data-feather="x" className="text-lg font-bold"></i>
            </button>
          </div>
          <div className="mt-4 flex h-16 w-full flex-col justify-center">
            <p className="mx-5 text-[#8A8A8A] font-bold">DASHBOARD</p>
          </div>
          <a
            href="/"
            className="mt-4 flex h-16 w-full flex-col justify-center rounded hover:bg-[#CFD4ED]"
          >
            <p className="mx-5 font-bold text-[#151515]">Dashboard</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default MobileAside;
