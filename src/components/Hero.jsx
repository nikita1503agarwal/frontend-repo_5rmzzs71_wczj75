function Hero({ banners = [] }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Gautam Buddha University Sports Portal
            </h1>
            <p className="mt-4 text-gray-600">
              Explore sports facilities, join the gym, track live cricket scores, and book indoor courts.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/gym" className="px-5 py-2.5 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Join Gym</a>
              <a href="/cricket" className="px-5 py-2.5 bg-gray-900 text-white rounded-md shadow hover:bg-black">Live Matches</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(banners.length ? banners : ['/banner1.jpg','/banner3.jpg']).map((src, i)=> (
              <img key={i} src={src} alt="banner" className="w-full h-40 md:h-56 object-cover rounded-lg shadow" onError={(e)=>{e.currentTarget.style.display='none'}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
