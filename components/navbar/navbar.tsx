import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <section className="bg-white min-h-[70px] px-[25px] flex justify-end items-center gap-2  ">
      Jean David
      <Avatar>
        <AvatarImage src="/user_profil.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </section>
  );
};

export default Navbar;
