import { ProdutCartSchema } from "@/schema/ProductSchema";

import { IoMdTrash } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useState } from "react";

export function ProductCartBox({slug,name,price,imageUrl}: ProdutCartSchema) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex justify-between items-center p-2 border-b border-gray-100 last:border-b-0">
            <Link 
                className="flex items-center gap-3 flex-1"
                href={`product/${slug}`}>
                <Image 
                    src={imageUrl}
                    width={40}
                    height={40}
                    alt={name}
                    className="object-cover rounded"
                />

                <div className="product-info flex-1">
                    <p className="text-[13.4px] font-bold mb-1 line-clamp-1">{name}</p>
                    <span className="text-primary-green text-[13px] font-semibold">${price}</span>
                </div>
            </Link>
            
            <div className="flex items-center gap-2">
                <AnimatedCounter
                    value={quantity}
                    onValueChange={setQuantity}
                    min={0}
                    max={10}
                    size="sm"
                    variant="outline"
                />
            </div>
        </div>
    );
}