"use client"
import Link from "next/link"

import { CategorySchema } from "@/schema/CategorySchema"
import { getAllCategoryData } from "@/lib/categoryUtils"
import { MainMenu } from "../Menus/MainMenu"
import { useEffect, useState } from "react";
import { MegaMenu } from "../Menus/MegaMenu"


// -> View Main category -> sections -> sub
export function CategoryNav() {
  const [categoriesList,setCategoriesList] = useState<CategorySchema[]>([]);

  useEffect(() => {
    setCategoriesList(getAllCategoryData().splice(0, 20));
  },[])

  return (
    <div className="4xl:pl-[3.9rem] pl-[2.9rem]  flex-1 relative overflow-visible overflow-x-hidden h-full ">
      <MainMenu categoriesList={categoriesList}></MainMenu>
    </div>
  )
}
