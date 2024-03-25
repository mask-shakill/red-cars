import Image from "next/image";
import React from "react";
import brandLogo from "../../../../public/assets/images/brand.png";
const Navbar = () => {
  return (
    <div className="mx-6 md:mx-14 lg:mx-16">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center gap-x-2">
          <Image
            height={50}
            width={50}
            src={brandLogo}
            alt="brand-logo"
          ></Image>

          <h1 className="font-bold text-xl">Red Cars</h1>
        </div>
        <button>Sing In</button>
      </nav>
    </div>
  );
};

export default Navbar;
