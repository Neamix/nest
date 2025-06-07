import Image from "next/image";
import { GlobalSearch } from "../Search/GlobalSearch";
import { CartPopover } from "../Popovers/CartPopver";

export function MiddleNav() {
    return (
        <div className="my-container h-[122.5px] flex items-center justify-between">

            
            <div className="hero-logo pr-[70px]">
              <Image src="/logo/logo.png" alt="Nest Mart & Grocery Logo" width={150} height={50} />
            </div>

            <div className="hero-search w-full  flex-1">
              <GlobalSearch />
            </div>

            <div className="pl-[47px]">
              <CartPopover></CartPopover>
            </div>

        </div>
    );
}