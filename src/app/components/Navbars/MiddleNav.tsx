import Image from "next/image";
import { GlobalSearch } from "../Search/GlobalSearch";
import { CartPopover } from "../Popovers/CartPopver";
import { ProfileLink } from "../Account/ProfileLink";

export function MiddleNav() {
    return (
        <div className="my-container h-[122.5px] flex items-center justify-between border-b border-[#ECECEC]">

            
            <div className="hero-logo pr-[70px]">
              <Image 
              src="/logo/logo.png" 
              alt="Nest Mart & Grocery Logo" 
              width={150} 
              height={50}
              className=" w-[120px] sm:w-[100px] md:w-[150px]"
              />
            </div>

            <div className="hero-search w-full flex-1 hidden sm:block">
              <GlobalSearch />
            </div>

            <div className="pl-[47px] flex gap-4">
              <CartPopover></CartPopover>
              <ProfileLink></ProfileLink>
            </div>

        </div>
    );
}