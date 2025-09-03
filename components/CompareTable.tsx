import { Product } from "@/lib/types";

type Props = { products: Product[] };

export function CompareTable({ products }: Props) {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">Product</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border p-2">{product.name}</td>
            <td className="border p-2">${product.price}</td>
            <td className="border p-2">{product.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
