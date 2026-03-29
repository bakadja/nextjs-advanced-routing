export default async function Page({ params }: {
  params: Promise<{category: string}>
}) {
  const {category} = await params
  return (
    <div>
      <h1>My category: {category}</h1>
    
    </div>
  )
}
