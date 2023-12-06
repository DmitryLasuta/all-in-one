export default async function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {params.id}</p>
    </div>
  )
}
