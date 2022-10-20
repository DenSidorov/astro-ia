import { IProducts } from "../types"
import { useState } from 'preact/hooks'

interface ProductCardProps {
    product: IProducts
}

export default function ProductCard({ product }: ProductCardProps) {
    const [details, setDetails] = useState(false)
    const toggle = () => setDetails((prev) => !prev)

    return (
    <div className="m-auto border rounded mb-2 p-3 max-w-[960px]">
        <h2 className="text-lg">{product.title}</h2>
        <p className="font-bold">$: {product.price}</p>

        <a className="border py-2 px-4 bg-green-300 text-white" href={`/product/${product.id}`}>Open product</a>

        <button onClick={toggle} className="border py-2 px-4 bg-green-300 text-white">Toggle Description</button>

        {details && <p>{product.description}</p>}
    </div>)
}