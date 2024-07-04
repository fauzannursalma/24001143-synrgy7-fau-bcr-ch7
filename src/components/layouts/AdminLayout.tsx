import React, { useCallback, useState, useEffect } from "react";
import feather from "feather-icons";
import MobileAside from "./../admin/MobileAside";
import Navbar from "./../admin/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  aside1Content: React.ReactNode;
  aside2Content: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({
  children,
  aside1Content,
  aside2Content,
}) => {
  const [asideMenuVisible, setAsideMenuVisible] = useState(false);
  const [aside2Visible, setAside2Visible] = useState(true); // Ubah ke true jika ingin aside2 muncul secara default

  const toggleAsideMenu = useCallback(() => {
    setAsideMenuVisible(!asideMenuVisible);
  }, [asideMenuVisible]);

  const handleMenuButtonClick = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setAside2Visible(!aside2Visible);
    } else {
      setAsideMenuVisible(true);
    }
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <div>{aside1Content}</div> 
      {aside2Visible && <div>{aside2Content}</div>}{" "}
      <MobileAside visible={asideMenuVisible} toggleMenu={toggleAsideMenu} />
      <div className="flex flex-col flex-grow">
        <Navbar onMenuButtonClick={handleMenuButtonClick} />
        <main className="flex-grow md:p-6 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
