import { ProductSearchBoxSchema } from "@/schema/ProductSchema";
import Image from "next/image";

export function ProductSearchBox({id, name, description, price, imageUrl}: {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}) {
  return (
    <div className="product-item flex gap-2 items-center">
        <Image
            src={imageUrl} 
            alt={name} 
            width={50} 
            height={50} 
            className="rounded-md object-cover !w-[30px]"
        />
        <div className='product-item pt-2'>
            <h3 className="font-bold text-[13px] pb-0 mb-0">{name}</h3>
            <span className="text-gray-500 text-[12px]">${price.toFixed(2)}</span>
        </div>
    </div>
  );
}