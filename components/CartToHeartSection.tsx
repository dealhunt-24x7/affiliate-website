export default function CartToHeartSection() {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-100 via-orange-50 to-pink-50 rounded-2xl shadow-md my-8 p-6 md:p-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        ❤️ Cart to Heart Program
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Join our unique program to donate, support, or get crowd funding for
        education, health, and more. Benefit from exclusive rewards and make an
        impact while shopping.
      </p>
      <button
        onClick={() => (window.location.href = "/cart-to-heart-coming-soon")}
        className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition"
      >
        Coming Soon
      </button>
    </section>
  );
}
