import { Button } from "@/components/ui/button";
import { CategoryNav } from "./CategoryNav";
import { CategoryList } from "../Dropdownlist/CategoriesList";

export function LowerNav () {
    return (
        <div className="lower-nav flex items-center my-container border-b border-[#ECECEC] 4xl:h-[4.56rem] h-[4.1rem]">
            <CategoryList></CategoryList>
            <CategoryNav></CategoryNav>
        </div>
    );
}