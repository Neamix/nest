"use client"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getCategoryList } from "@/lib/categoryUtils";
import { shortcutText } from "@/lib/shortcutText";
import { SectionSchema } from "@/schema/CategorySchema";
import Image from "next/image";
import { useState } from "react";

export function CategoryList () {
    let [selectedCategory,setSelectedCategory] = useState("all");
    const categoryData: SectionSchema[] = getCategoryList();


    /*** Handle the selected category **/

    // This Handler is mean to set the value of browsing category
    let handleSelectedSection = ():string => {
        let category:SectionSchema | undefined = categoryData.find((category) => category.label === selectedCategory);

        if (category) return category.label;
        else return "Browse All Sections";
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="btn-primary btn-ddl hover:!bg-primary-green hover:!text-white text-left flex justify-between !px-[20px]">
                        <div className="flex gap-[7px]">
                            <Image 
                                src="/icons/categories.svg" 
                                alt="Nest Mart & Grocery Logo" 
                                width={16} 
                                height={16}
                            />
                            <span>
                                {shortcutText(handleSelectedSection(),21,12)}
                            </span>
                        </div>
                        <Image 
                            src="/icons/chevron-down-white.svg" 
                            alt="Nest Mart & Grocery Logo" 
                            width={10} 
                            height={10}
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 max-h-[300px]" align="start">
                    <DropdownMenuItem onClick={() => setSelectedCategory("")}>
                        Browse All Sections
                    </DropdownMenuItem>
                    {
                        categoryData.map((category,index) => {
                            return (
                                <DropdownMenuItem key={index} onClick={() => setSelectedCategory(category.label)}>
                                    {category.label}
                                </DropdownMenuItem>
                            );
                        })
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}