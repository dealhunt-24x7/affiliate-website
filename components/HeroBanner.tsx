export default function HeroBanner() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] bg-gray-200 flex items-center justify-center">
      <img
        src="/images/banners/hero.jpg"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center text-white bg-black/40 p-6 rounded-xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Luxury Deals at Your Fingertips
        </h1>
        <p className="text-lg sm:text-xl mb-6">Shop exclusive watches, jewelry, and more</p>
        <a
          href="/products"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
