export type Product = {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    category: string,
    stock: number,
    rating: {
        rate: number,
        count: number
    },
}

export type ProdutCartSchema = {
    slug: string,
    imageUrl: string,
    name: string,
    price: number,
    count: number
}

export type ProductSearchSchema = {
    id: string,
    imageUrl: string,
    name: string,
    price: number,
    description: string,
    category: string,
}

export type ProductSearchBoxSchema = {
    id: string; 
    name: string; 
    description: string; 
    price: number; 
    imageUrl: string;
}