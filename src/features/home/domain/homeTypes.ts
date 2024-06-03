export interface Product {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: ProductRating,
}

export interface ProductRating {
    rate: number,
    count: number,
}

export type ProductId = string;