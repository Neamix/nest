import Image from "next/image";

export function ProfileLink() {
    return (
        <button className="p-2 relative cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all rounded-full">
            <Image 
                src="/icons/person.svg" 
                alt="Cart" 
                width={15} 
                height={15} 
            />
        </button>
    );
}