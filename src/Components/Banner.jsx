export default function Banner() {
  return (
    <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 opacity-10 rounded-l-full blur-3xl transform translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/30">
            New Summer Collection 2024
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Elevate Your Style <br />
            <span className="text-blue-400">Define Your Look.</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
            Discover the latest trends in fashion and electronics. Premium
            quality, unbeatable prices, and style that speaks to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
              Shop Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
