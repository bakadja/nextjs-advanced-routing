import React from 'react'
{
  /* 
  🐶 Ajoute les 2 props supplémentaires necessaires pour 
  faire fonctionner nos routes parrallèles  
  */
}
const getRole = () => Math.random() > 0.5 ? 'admin' : 'editor'

export default async function Layout({children, admin , editor}: {children: React.ReactNode, admin: React.ReactNode, editor: React.ReactNode}) {
  const role = getRole()
  return (
    <>
      <h2>Gestion Admin / Editor Layout</h2>
      <div className="m-6 flex flex-col">
        {children}
        {/* 🐶 pense à bonus-1. 🚀 rendu conditionel  */}
        {role === 'admin' && admin}
        {/* 🐶 pense à bonus-2. 🚀 Loading  */}
      </div>
    </>
  )
}
