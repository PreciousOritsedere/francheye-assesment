import Logo from "../assets/FRANCHEYE-Logo.svg";
import Photo from "../assets/nav-profile-photo.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0  w-full flex items-center justify-between py-[26px] px-[99px] border-b border-[#F6F6F6] bg-[#]">
      <div className="w-[128px] h-[96px]">
        <img src={Logo} alt="hamburger menu" className="w-full h-full" />
      </div>

      <div className="flex items-center gap-[29px]">
        <button className="bg-[#111111] py-4 px-[30px] rounded-lg text-white text-sm">
          Share Profile
        </button>
        <div className="w-[68px] h-[68px] rounded-[68px]">
          <img src={Photo} alt="user photo" className="w-full h-full" />
        </div>
      </div>
    </nav>
  );
}
