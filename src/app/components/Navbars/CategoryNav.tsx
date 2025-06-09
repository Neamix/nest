"use client"
import Link from "next/link"

import { CategorySchema } from "@/schema/CategorySchema"
import { getAllCategoryData } from "@/lib/categoryUtils"
import { MainMenu } from "../Menus/MainMenu"
import { useEffect, useState } from "react";


// -> View Main category -> sections -> sub
export function CategoryNav() {
  const [categoriesList,setCategoriesList] = useState<CategorySchema[]>([]);

  useEffect(() => {
    setCategoriesList(getAllCategoryData().splice(0, 20));
  },[])

  return (
    <div className="relative 4xl:px-[3.9rem] px-[2.9rem] overflow-auto">
      <MainMenu categoriesList={categoriesList}></MainMenu>
    </div>
  )
}
