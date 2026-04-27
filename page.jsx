
'use client'
import {useState} from 'react'
export default function Dashboard(){
const [brief,setBrief]=useState('Kem dưỡng trắng da 299k')
const [out,setOut]=useState('')
async function run(){
 const r=await fetch('/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({brief})})
 const d=await r.json(); setOut(d.text)
}
return <main style={{padding:40}}>
<h1>Dashboard</h1>
<textarea value={brief} onChange={e=>setBrief(e.target.value)} style={{width:'100%',height:120}} />
<br/><button onClick={run}>Generate</button>
<pre>{out}</pre>
</main>}
