import { useEffect, useState } from 'react'

const BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function MatchCard({m}){
  return (
    <div className="p-4 rounded-lg border bg-white">
      <div className="text-sm text-gray-500">{m.sport?.toUpperCase()} • {m.status?.toUpperCase()}</div>
      <div className="mt-2 font-semibold">{m.team_a} vs {m.team_b}</div>
      <div className="text-sm text-gray-600">{m.venue}</div>
      <div className="text-sm text-gray-600">{new Date(m.start_time).toLocaleString()}</div>
      {(m.score_a || m.score_b) && (
        <div className="mt-2 text-lg font-bold text-blue-700">{m.score_a || '-'} : {m.score_b || '-'}</div>
      )}
      {m.details && <p className="text-sm text-gray-700 mt-1">{m.details}</p>}
    </div>
  )
}

function Cricket(){
  const [live, setLive] = useState([])
  const [upcoming, setUpcoming] = useState([])

  const load = async ()=>{
    const r1 = await fetch(`${BASE}/api/matches?sport=cricket&status=live`)
    const r2 = await fetch(`${BASE}/api/matches?sport=cricket&status=upcoming`)
    setLive(await r1.json())
    setUpcoming(await r2.json())
  }

  useEffect(()=>{ load() },[])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">GBU Cricket Ground</h1>
      <p className="text-gray-600 mt-2">Live scores and upcoming fixtures.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Live Matches</h2>
          <div className="space-y-3">
            {live.length ? live.map(m=> <MatchCard key={m.id} m={m} />) : <p className="text-gray-500">No live matches</p>}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Upcoming</h2>
          <div className="space-y-3">
            {upcoming.length ? upcoming.map(m=> <MatchCard key={m.id} m={m} />) : <p className="text-gray-500">No upcoming fixtures</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cricket
