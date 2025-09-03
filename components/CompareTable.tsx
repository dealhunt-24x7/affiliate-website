import { Product } from "@/lib/types"

export function CompareTable({ products }: { products: Product[] }) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border p-2">{product.name}</td>
            <td className="border p-2">${product.price}</td>
            <td className="border p-2">{product.rating ?? "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
