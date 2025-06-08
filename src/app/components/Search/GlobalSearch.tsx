"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";

import { IoIosSearch } from "react-icons/io";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CategorySchema } from "@/schema/CategorySchema";
import { SearchResults } from "./SearchResults";

import { ProductSearchSchema } from "@/schema/ProductSchema";
import { useDebounce } from "@/lib/useDebounce"; // Import useDebounce
import { useClickOutside } from "@/hooks/useClickOutSide";

const categoriesData: CategorySchema[] = [
  { value: "all", label: "All Categories" },
  { value: "dairy&milk", label: "Dairy & Milk" },
  { value: "groceries", label: "Groceries" },
  { value: "healtyfood", label: "Healthy Food" },
  { value: "homegoods", label: "Home Goods" },
];

export function GlobalSearch() {
  let [selectedCategory, setSelectedCategory] = useState<string>(categoriesData[0].value);
  let [searchTerm, setSearchTerm] = useState<string>("");
  let [searchResults, setSearchResults] = useState<ProductSearchSchema[]>([
    {
      id: "1",
      name: `Product 1`,
      price: 9.99,
      description: "Description for result 1",
      category: selectedCategory,
      imageUrl: "https://media.istockphoto.com/id/183424709/photo/bag-of-groceries.jpg?s=612x612&w=0&k=20&c=KtirSlaNwcrzEc1K3s9WOUpv_eH6DNheaVWbTnsEKSE=",
    },
    {
      id: "2",
      name: `Product 2`,
      price: 19.99,
      description: "Description for result 2",
      category: selectedCategory,
      imageUrl: "https://media.istockphoto.com/id/183424709/photo/bag-of-groceries.jpg?s=612x612&w=0&k=20&c=KtirSlaNwcrzEc1K3s9WOUpv_eH6DNheaVWbTnsEKSE=",
    },
  ]);
  let [isLoading, setLoading] = useState<boolean>(false);
  let [isTyping, setIsTyping] = useState<boolean>(false);
  let debouncedSearchTerm = useDebounce(searchTerm, 500);
  let [isOpen,setOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Search on products
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      // setSearchResults([]);
      setLoading(false);
      setIsTyping(false);
      return;
    }

    handleSearchSubmit(debouncedSearchTerm);
    setIsTyping(false);
    setLoading(false);
  }, [debouncedSearchTerm, selectedCategory]);

  const handleSearchSubmit = async (search: string) => {
   
  };

  /*** Handle searchbox open and close actions ***/

  // When the user click out side the component close 
  // search box if it is open
  useClickOutside({
    ref: searchRef,
    onClickOutSide: () => {
      handleOnClickOutSide();
    }
  });
  const handleOnClickOutSide = () => {
    setOpen(false);
  }

  const handleOpenSearch = () => {
    if (!searchResults.length) return false;
    setOpen(true);
  }


  /*** Handle typing and search action **/

  // On change in search term i need you to go to database and get 
  // the result for me and during typing and loading the data activate
  // the loadder
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (!e.target.value.length) {
      setOpen(false);
      return;
    }

    setIsTyping(true);
    setLoading(true);
    setOpen(true);
  };

  return (
    <div className="relative flex items-center border border-[#CACACA] rounded-[4px] h-[50px] small-cursor-pointer-parent">
      
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="!h-full w-[155px] border-0 rounded-none shadow-none font-bold">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categoriesData.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <span className="h-[20px] w-[1px] bg-[#CACACA]"></span>

      <div className="searchbar relative w-[95%] d-flex items-center" ref={searchRef}>
        <Input 
          type="text"
          placeholder="Search for items..."
          value={searchTerm}
          onChange={handleInputChange} 
          onClick={handleOpenSearch}
          className="flex-1 border-0 shadow-none outline-none text-[14px] font placeholder:text-[#838383] font-lato font-weight-400 ouline-none focus:!outline-none focus:!ring-0 "
        />

        {!isLoading && <IoIosSearch
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
          size={20}
        />}

        {(isTyping || isLoading) && <div className="search-loader"></div>}

        <div className="absolute top-full left-0 w-full z-10">
          {(!isTyping && !isLoading && isOpen) && <SearchResults results={searchResults} />}
        </div>
      </div>

     
    </div>
  );
}