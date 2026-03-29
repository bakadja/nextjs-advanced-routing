import users from '@/db/user'
import Image from 'next/image'
import {notFound} from 'next/navigation'

// 🐶 recupère le props 'params' et extrait l'id'
// doc : https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#example
// 🤖 {params}: {params: {id: string}}
export default async function Page({params}: {params: Promise<{id: string}>}) {
  // 🐶 utilise l'id  en props pour recuperer le user de la bd
  //const avatarID = '1'
  const {id: avatarID} = await params
  console.log('avatarID [id]', avatarID)
  const currentUser = users.find(
    (user) => user.id === Number.parseInt(avatarID)
  )

  if (!currentUser) notFound()
  return (
    <div className="flex flex-col items-center">
      <p className="text-center">{currentUser?.name}</p>
      <Image
        className="overflow-hidden rounded-full"
        src={currentUser?.avatar ?? ''}
        alt="Avatar"
        width="100"
        height="100"
      ></Image>
    </div>
  )
}
