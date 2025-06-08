"use client"

import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ProdutCartSchema } from '@/schema/ProductSchema';
import { ProductCartBox } from '../Product/ProductCartBox';
import { Button } from '@/components/ui/button';
import { AnimatedBadge } from '@/app/components/Counter/animated-counter';

import Link from "next/link";
import { useAppSelector } from '@/stores/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';

export function CartPopover() {
    const productsCart = useSelector((state: RootState) => state.product.myCart);
    return (
        <Popover>        
            <PopoverTrigger asChild>
                <button className="p-2 relative cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all rounded-full">
                    <AnimatedBadge 
                        count={productsCart.length}
                        className="bg-primary-green"
                    />
                    <Image 
                        src="/icons/cart.svg" 
                        alt="Cart" 
                        width={15} 
                        height={15} 
                    />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="leading-none font-semibold mb-0">Your Nest cart </h4>
                    </div>

                    {!productsCart.length &&  <div className="grid gap-2">
                        <p className="text-[13px] text-gray-500 text-center">Your cart is empty</p>
                    </div>}
                    {productsCart.length > 0 && productsCart.map((product) => {
                        return (
                            <ProductCartBox
                                key={product.slug}
                                slug={product.slug}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                count={product.count}
                            />
                        )
                    })}


                    <Button className='btn-primary'>
                        <Link href={'/checout'}>
                            Check out
                        </Link>
                    </Button>

                </div>
            </PopoverContent>
        </Popover>
    )
}
