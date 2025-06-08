import Link from 'next/link';
import { LocalizationList } from '@/app/components/Dropdownlist/LocalizationList';
import { CurrencyList } from '@/app/components/Dropdownlist/CurrencyList';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosMenu } from "react-icons/io";

export function Toolbarnav() {
    let toolbarLeft = [
        {name: 'About Us', href: '/about'},
        {name: 'My Account', href: '/account'},
        {name: 'Wishlist', href: '/wishlist'},
        {name: 'Order Tracking', href: '/tracking'}
    ];
    
    return (
        <div className="toolbar flex justify-between items-center w-full  h-[37px] my-container border-b border-[#ECECEC]">
            <div className="toolbar-left">
                <ul className="toolbar-menu hidden lg:flex">
                    {
                        toolbarLeft.map((item,index) => {
                            return (
                                <li key={index} >
                                    <Link 
                                        href={item.href} 
                                        className={`flex items-center toolbar-link font-lato font-[500] text-primary-gray text-[13px] leading-[13px]`}
                                    >
                                        {index != 0 && <span className="block w-[1px] h-[10px] bg-[#DEDFE2] ml-[10px] mr-[8.3px]"></span>}
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className='toolbar-menu-mobile lg:hidden flex items-center'> 
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <IoIosMenu className='text-primary-gray text-[20px]' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {
                                toolbarLeft.map((item, index) => {
                                    return (
                                        <DropdownMenuItem key={index} className='mb-2'>
                                            <Link 
                                                href={item.href} 
                                                className={`font-lato font-[500] text-primary-gray text-[12px] leading-[13px]`}
                                            >
                                                {item.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    );
                                })
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
            <p className='font-lato font-[600] text-[14px] leading-[14px] text-[#7E7E7E] hidden xl:block'>100% Secure delivery without contacting the courier</p>
            <div className="toolbar-right flex items-center">
                <div className="toolbar-call hidden items-center sm:flex">
                    <div className='call'>
                        <span className="font-lato font-[600] text-primary-gray text-[13px] leading-[13px]">Need help? Call Us:</span>
                        <a href="tel:+1234567890" className="font-lato font-[600]  text-[13px] leading-[13px] text-primary-green">+ 1800 900</a>
                    </div>
                    <span className="block w-[1px] h-[10px] bg-[#DEDFE2] ml-[10px] mr-[8.3px]"></span>
                </div>
                <ul className="toolbar-social flex">
                    <li className='localization flex items-center'>
                        <LocalizationList />
                    </li>
                    <li className='localization flex justify-end items-center w-auto'>
                        <span className="block w-[1px] h-[10px] bg-[#DEDFE2] ml-[10px] mr-[8.3px]"></span>
                        <CurrencyList />
                    </li>
                </ul>
            </div>
        </div>
    );
}