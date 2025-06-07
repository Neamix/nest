import { ProdutCartSchema } from "@/schema/ProductSchema";

import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { IoMdTrash } from "react-icons/io";
import { useAppDispatch } from "@/stores/hooks";
import { updateCartItemCount, removeCartItem } from "@/stores/productSlice";

export function ProductCartBox({slug, name, price, imageUrl, count}: ProdutCartSchema) {
    const dispatch = useAppDispatch();

    const handleCountChange = (newCount: number) => {
        if (newCount === 0) {
            dispatch(removeCartItem(slug));
        } else {
            dispatch(updateCartItemCount({ slug, count: newCount }));
        }
    };

    const handleRemove = () => {
        dispatch(removeCartItem(slug));
    };

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
                    value={count}
                    onValueChange={handleCountChange}
                    min={0}
                    max={10}
                    size="sm"
                    variant="outline"
                />
                
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleRemove}
                    className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                    <IoMdTrash size={16} />
                </Button>
            </div>
        </div>
    );
}