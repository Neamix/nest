"use client";

import React from 'react';
import { ProductSearchBox } from '../Product/ProductSearchBox';

import { ProductSearchSchema } from '@/schema/ProductSchema';

import { AnimatePresence, motion } from "framer-motion"

export function SearchResults({ results }: { results: ProductSearchSchema[] }) {  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }} 
        className="border rounded-[4px] mt-4">
        {results.length && results.map((result) => (
          <li className='flex items-center gap-3 hover:bg-gray-50 cursor-pointer px-5 p-2 ' key={result.id}>
              <ProductSearchBox
                id={result.id}
                name={result.name}
                description={result.description}
                price={result.price}
                imageUrl={result.imageUrl}
              />
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
