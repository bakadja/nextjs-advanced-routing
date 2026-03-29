import Link from 'next/link'
const ranStr = () => {
  return (Math.random() + 1).toString(36).slice(7)
}
export default async function Page(props: {
  params: Promise<{category: string}>
}) {
  const params = await props.params
  const linkA = ranStr()
  const linkB = ranStr()
  const linkC = ranStr()

  return (
    <div>
      <h1>My category: {params.category}</h1>
      <p>
        <Link href={`/final/dynamic/shop/${params.category}/${linkA}`}>
          /dynamic/shop/{params.category}/{linkA}
        </Link>
      </p>
      <p>
        <Link href={`/final/dynamic/shop/${params.category}/${linkB}}`}>
          /dynamic/shop/{params.category}/{linkB}
        </Link>
      </p>
      <p>
        <Link href={`/final/dynamic/shop/${params.category}/${linkC}}`}>
          /dynamic/shop/{params.category}/{linkC}
        </Link>
      </p>
    </div>
  )
}
