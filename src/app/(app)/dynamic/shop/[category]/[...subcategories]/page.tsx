import Link from 'next/link'
type Props = {
  params: Promise<{
    subcategories: string[],
    category: string
  }>
}

export default async function Page({params}: Props) {
  const {category, subcategories} = await params
  console.log("[subcategories]",subcategories)
  console.log("[subcategories] params", await params)
  console.log("[subcategories] category", category)
  return (
    <div>
      My SUB Categories :
      <ul>
        {subcategories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <Link href={`/dynamic/shop/${category}`}>back</Link>
    </div>
  )
}
