"use client"

import { shortcutText } from "@/lib/shortcutText";
import { CategorySchema } from "@/schema/CategorySchema";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function MainMenu({categoriesList}:{categoriesList: CategorySchema[]}) {
    const menuRef = useRef<HTMLDivElement>(null);
    const [scrollableLeft,setScrollableLeft] = useState<boolean>(false);
    const [scrollableRight,setScrollableRight] = useState<boolean>(true);

    useEffect(() => {
        handlePushArrowVisiablitiy();
    },[])

    let handlePushArrowVisiablitiy = () => {
        if (!menuRef.current) return;

        if (menuRef.current.scrollLeft - 100 <= 0) setScrollableLeft(false);
        else setScrollableLeft(true)

        console.log(menuRef.current.scrollLeft - 100 , menuRef.current.clientWidth)
        if (menuRef.current.scrollLeft - 100 >= menuRef.current.clientWidth) setScrollableRight(false);
        else setScrollableRight(true)
    } 

    function pushMenu (direction:string) {
        if (!menuRef.current) return;

        if (direction == 'right') {
            menuRef.current.scroll({
                left: menuRef.current.scrollLeft + 200,
                behavior: 'smooth'
            });
        } else if (direction == 'left') {
            menuRef.current.scroll({
                left: menuRef.current.scrollLeft - 200,
                behavior: 'smooth'
            });
        }

        // I am using timeout here as scroll take some time to end the action 
        // and it's not a promise so i cant use await, and i dont want to make it 
        // inside a promise container
        setTimeout(() => {
            handlePushArrowVisiablitiy()
        },200);
    }

    return (
        <div className="overflow-scroll no-scrollbar" ref={menuRef}>                
            {
                scrollableLeft && <div 
                    className="absolute flex items-center px-[10px] cursor-pointer left-0 bottom-0 bg-gradient-to-r from-white to-transparent w-[200px] h-full select-none"
                    onClick={() => pushMenu('left')}
                >
                    <Image 
                        src="/icons/chevron-down.svg" 
                        alt="Nest Mart & Grocery Logo" 
                        className="rotate-90"
                        width={15} 
                        height={15}
                    />
                </div>
            }
            
           {
                scrollableRight &&  <div 
                    className="absolute flex items-center justify-end px-[10px] cursor-pointer right-0 bottom-0 bg-gradient-to-r from-transparent to-white w-[200px] h-full select-none"
                    onClick={() => pushMenu('right')}
                >
                    <Image 
                        src="/icons/chevron-down.svg" 
                        alt="Nest Mart & Grocery Logo" 
                        className="rotate-270"
                        width={15} 
                        height={15}
                    />
                </div>
           }

            <ul className="flex flex-nowrap 4xl:gap-[3.3rem] gap-[1.9rem] animate-scroll">
            {
                categoriesList.map((category,index) => {
                    return (
                        <li className="text-nowrap 4xl:text-[1rem] text-[0.90rem] font-[700] flex-shrink-0" key={index}>
                            <span>{shortcutText(category.label,15,12)}</span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}