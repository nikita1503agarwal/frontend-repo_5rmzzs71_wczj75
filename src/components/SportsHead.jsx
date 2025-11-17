function InfoRow({label, value}){
  return (
    <div className="flex gap-2"><span className="font-semibold text-gray-700 min-w-24">{label}:</span><span className="text-gray-800">{value}</span></div>
  )
}

function SportsHead({ photo = '/660667778934a_Nagendra-Singh-pic.jpg' }) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[220px,1fr] gap-6 items-start">
        <img src={photo} alt="Sports Head" className="w-56 h-56 object-cover rounded-lg shadow" onError={(e)=>{e.currentTarget.style.display='none'}} />
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Chairperson, GBU Sports Council</h2>
          <p className="text-xl font-semibold mt-2">Dr. Nagendra Singh</p>
          <div className="mt-4 space-y-2">
            <InfoRow label="Designation" value="Assistant Professor, Dept. of Biotechnology" />
            <InfoRow label="Email" value={<a className="text-blue-600" href="mailto:nagendra@gbu.ac.in">nagendra@gbu.ac.in</a>} />
            <InfoRow label="Mobile" value={<a className="text-blue-600" href="tel:+919899914727">9899914727</a>} />
            <InfoRow label="Education" value="PhD (Structural Biology), AIIMS New Delhi" />
            <InfoRow label="About" value="Distinguished researcher in Molecular Structural Biology, X-ray Crystallography, and Drug Design; 25+ years research, 15+ years teaching." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SportsHead
