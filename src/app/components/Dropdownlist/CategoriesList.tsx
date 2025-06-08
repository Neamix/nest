"use client"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CategorySchema } from "@/schema/CategorySchema";
import Image from "next/image";
import { useState } from "react";

export function CategoryList () {
    let [selectedCategory,setSelectedCategory] = useState("all");
    const categoriesData: CategorySchema[] = [
      { value: "all", label: "Browse All Categories" },
      { value: "dairy&milk", label: "Dairy & Milk" },
      { value: "groceries", label: "Groceries" },
      { value: "healtyfood", label: "Healthy Food" },
      { value: "homegoods", label: "Home Goods" },
    ];

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
                            {categoriesData.find((item) => item.value === selectedCategory)?.label}
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
                    {
                        categoriesData.map((item,index) => {
                            return (
                                <DropdownMenuItem key={index} onClick={() => setSelectedCategory(item.value)}>
                                    {item.label}
                                </DropdownMenuItem>
                            );
                        })
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}