function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} GBU Sports Portal</p>
        <a className="text-blue-600" href="https://www.gbu.ac.in/" target="_blank" rel="noreferrer">Visit University Website</a>
      </div>
    </footer>
  )
}
export default Footer
