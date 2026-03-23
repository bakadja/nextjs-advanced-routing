import React from 'react'
{
  /* 
  🐶 Ajoute les 2 props supplémentaires necessaires pour 
  faire fonctionner nos routes parrallèles  
  */
}
//const getRole = () => Math.random() > 0.5 ? 'admin' : 'editor'

export default async function Layout({children, admin , editor}: {children: React.ReactNode, admin: React.ReactNode, editor: React.ReactNode}) {
  return (
    <>
      <h2>Gestion Admin / Editor Layout</h2>
      <div className="m-6 flex flex-col">
        {children}
        {/* 🐶 affiche la route éditor  */}
        {editor}
        {/* 🐶 affiche la route admin  */}
        {admin}
        {/* 🐶 pense à bonus-1. 🚀 rendu conditionel  */}
        {/* 🐶 pense à bonus-2. 🚀 Loading  */}
      </div>
    </>
  )
}
