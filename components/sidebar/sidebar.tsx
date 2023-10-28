"use client";
import Image from "next/image";
import logo from "@/public/phantomLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

//react icons components
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { TbAB2 } from "react-icons/tb";
import { GiExitDoor } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
const Sidebar = () => {
  //to be able to manipulate the path
  const pathname = usePathname();
  return (
    <nav className="bg-white w-1/6 w-full py-6">
      <header className="flex justify-center mb-8">
        <Image
          src={logo}
          quality={100}
          // fill
          // sizes={"100vw"}
          // placeholder="blur"
          alt="logo DevPhantom"
          style={{ objectFit: "cover" }}
        />
      </header>
      <ul className="flex flex-col">
        <li>
          <Link
            href={"/"}
            className={
              pathname === "/"
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]   flex items-centerflex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <LuLayoutDashboard />
            Tableau de bord
          </Link>
        </li>

        <li>
          <Link
            href={"/campagnes"}
            className={
              pathname.startsWith("/campagnes")
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]  flex items-center flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <HiOutlineSpeakerphone />
            Campagnes
          </Link>
        </li>
        <li>
          <Link
            href={"/todos"}
            className={
              pathname.startsWith("/todos")
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]  flex items-center flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <PiUsersThree />
            influenceurs
          </Link>
        </li>

        <li>
          <Link
            href={"/activites"}
            className={
              pathname.startsWith("/activites")
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]  flex items-center flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <CiViewList />
            Activites
          </Link>
        </li>

        <li className="mb-[75px]">
          <Link
            href={"/conversion"}
            className={
              pathname.startsWith("/conversion")
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]  flex items-center flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <TbAB2 />
            Conversion
          </Link>
        </li>

        <li>
          <Link
            href={"/parametres"}
            className={
              pathname.startsWith("/parametres")
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]  flex items-center flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <FiSettings />
            Parametres
          </Link>
        </li>
        <li>
          <Link
            href={"/deconnexion"}
            className={
              pathname.startsWith("/deconnexion")
                ? "bg-[#F1FFFA] text-[#15A36E] flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
                : "text-[#818181]  flex items-center flex items-center  gap-2 pl-[30px] font-[500] pl-6 h-[60px]"
            }
          >
            <GiExitDoor />
            Déconnexion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
