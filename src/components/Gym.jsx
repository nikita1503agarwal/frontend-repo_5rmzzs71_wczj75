import { useEffect, useState } from 'react'

const BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gym(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [profile, setProfile] = useState(null)
  const [membership, setMembership] = useState(null)
  const [plan, setPlan] = useState('monthly')
  const [amount, setAmount] = useState(499)

  useEffect(()=>{
    if(token && email){
      fetch(`${BASE}/api/profile?email=${encodeURIComponent(email)}`).then(r=>r.json()).then(setProfile)
    }
  },[token, email])

  const register = async (e)=>{
    e.preventDefault()
    const r = await fetch(`${BASE}/api/auth/register`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name, email, password})})
    const data = await r.json()
    if(r.ok){
      setToken(data.token)
      localStorage.setItem('token', data.token)
      alert('Registered successfully')
    } else {
      alert(data.detail || 'Registration failed')
    }
  }

  const login = async (e)=>{
    e.preventDefault()
    const r = await fetch(`${BASE}/api/auth/login`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, password})})
    const data = await r.json()
    if(r.ok){
      setToken(data.token)
      localStorage.setItem('token', data.token)
    } else {
      alert(data.detail || 'Login failed')
    }
  }

  const createMembership = async ()=>{
    const r = await fetch(`${BASE}/api/gym/membership`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, plan})})
    const data = await r.json()
    if(r.ok){ setMembership(data); }
  }

  const pay = async ()=>{
    const r = await fetch(`${BASE}/api/payments/create`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, amount, purpose:'gym_membership', method:'upi'})})
    const data = await r.json()
    if(r.ok){ setMembership(data.membership); alert('Payment success'); }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">GBU Flex Gym</h1>
      {!token && (
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <form onSubmit={register} className="bg-white p-6 rounded-lg shadow space-y-3">
            <h2 className="text-xl font-semibold">New User - Register</h2>
            <input className="w-full border rounded p-2" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required />
            <input className="w-full border rounded p-2" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <input className="w-full border rounded p-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
            <button className="w-full bg-blue-600 text-white rounded p-2">Register</button>
          </form>
          <form onSubmit={login} className="bg-white p-6 rounded-lg shadow space-y-3">
            <h2 className="text-xl font-semibold">Existing User - Login</h2>
            <input className="w-full border rounded p-2" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <input className="w-full border rounded p-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
            <button className="w-full bg-gray-900 text-white rounded p-2">Login</button>
          </form>
        </div>
      )}

      {token && (
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Membership</h2>
            <div className="mt-3 flex items-center gap-3">
              <select className="border rounded p-2" value={plan} onChange={e=>{setPlan(e.target.value); setAmount(e.target.value==='monthly'?499:e.target.value==='quarterly'?1299:4499)}}>
                <option value="monthly">Monthly - ₹499</option>
                <option value="quarterly">Quarterly - ₹1299</option>
                <option value="yearly">Yearly - ₹4499</option>
              </select>
              <button onClick={createMembership} className="px-4 py-2 bg-blue-600 text-white rounded">Create</button>
            </div>
            {membership && (
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>Status: <span className="font-semibold">{membership.status}</span></p>
                {membership.start_date && <p>Start: {new Date(membership.start_date).toLocaleString()}</p>}
                {membership.end_date && <p>End: {new Date(membership.end_date).toLocaleString()}</p>}
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Payment</h2>
            <p className="mt-2">Amount: <span className="font-semibold">₹{amount}</span></p>
            <button onClick={pay} className="mt-3 px-4 py-2 bg-emerald-600 text-white rounded">Pay by UPI</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gym
