"use client"

import { useState } from "react"

export default function Header() {
  const [name, setName] = useState("")
  return (
    <div>
      <h1>Probando client components</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {name ? <p>{name}</p> : null}
    </div>
  )
}