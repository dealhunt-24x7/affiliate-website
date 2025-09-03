export function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className="flex space-x-2">
      {images.map((image, index) => (
        <div key={index} className="w-1/4">
          <img src={image} alt={`Product ${index + 1}`} className="rounded-md" />
        </div>
      ))}
    </div>
  );
}
