"use client"

import { shortcutText } from "@/lib/shortcutText";
import { CategorySchema } from "@/schema/CategorySchema";

import Image from "next/image";
import { MegaMenu } from "./MegaMenu";

import { useEffect, useRef, useState } from "react";

export function MainMenu({categoriesList}:{categoriesList: CategorySchema[]}) {
    const menuRef = useRef<HTMLDivElement>(null);
    const [scrollableLeft,setScrollableLeft] = useState<boolean>(false);
    const [scrollableRight,setScrollableRight] = useState<boolean>(true);
    let [megeMenuIndex, setMegaMenuIndex] = useState<number | null>(4);
    const [prevMenuIndex, setPrevMenuIndex] = useState<number>(0);
    const [directionToView, setDirectionToView] = useState<'left' | 'right'>('right');

    useEffect(() => {
        handlePushArrowVisiablitiy();
    },[])

    let handlePushArrowVisiablitiy = () => {
        if (!menuRef.current) return;

        // If scrolled all the way to the left
        if (menuRef.current.scrollLeft <= 0) {
            setScrollableLeft(false);
            setScrollableRight(true);
            return;
        }

        // If scrolled all the way to the right
        if (menuRef.current.scrollLeft + menuRef.current.clientWidth >= menuRef.current.scrollWidth - 10) {
            setScrollableRight(false);
            setScrollableLeft(true);
            return;
        }

        // In the middle
        setScrollableLeft(true);
        setScrollableRight(true);
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
        <div className="relative h-full">
            <div className="overflow-scroll  no-scrollbar h-full" ref={menuRef}>                
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
                <ul 
                    className="flex items-center flex-nowrap 4xl:gap-[3.3rem] gap-[1.9rem] animate-scroll h-full"
                >
                {
                    categoriesList.map((category, index) => {
                        return (
                            <li
                                className="text-nowrap 4xl:text-[1rem] text-[0.90rem] font-[700] flex-shrink-0 h-full flex items-center"
                                onMouseOver={() => {
                                    setDirectionToView(prevMenuIndex > index ? 'right' : 'left')
                                    setPrevMenuIndex(index)                                        
                                    setMegaMenuIndex(index);
                                }}
                                onMouseOut={() => setMegaMenuIndex(null)}
                                key={index}
                            >
                                <span>{shortcutText(category.label, 15, 12)}</span>
                                {megeMenuIndex === index && category.sections?.length && (
                                    <div
                                        className="fixed left-0 right-0 w-screen bg-[#0004] mt-[29px] megamenu z-50"
                                    >
                                        <div>
                                            <MegaMenu directionToView={directionToView ??'right'}>
                                               <div className="grid grid-cols-3 pt-4">
                                                   {
                                                        category.sections.map((section) => {
                                                            return(
                                                               <div className="section">
                                                                     <p>{section.label}</p>
                                                                    <ul>
                                                                       {
                                                                            section.categories?.splice(0,5).map((category,index) => {
                                                                                return (<p>{category.label}</p>)
                                                                            })
                                                                       }
                                                                    </ul>
                                                               </div>
                                                            )
                                                        })
                                                   }
                                               </div>
                                            </MegaMenu>
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })
                }
                </ul>
            </div>
       </div>
    )
}