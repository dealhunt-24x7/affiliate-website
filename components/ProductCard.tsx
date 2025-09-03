import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
}

export default function ProductCard({ name, description, image, rating }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mb-2 truncate">{description}</p>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Compare
        </button>
      </div>
    </div>
  );
}
