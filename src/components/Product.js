import React, { useState } from "react"

const Product = ({ skus, product }) => {
  const stripe = window.Stripe("pk_test_G9xjvnRw2ZpokJ0f3qAW4pMD00fIoUdT4Q")
  const [sku, setSku] = useState(skus[0].node.id)
  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }
  return (
    <div>
      <article>
        <h3>{product.name}</h3>
        <select defaultValue={sku} onChange={e => setSku(e.target.value)}>
          {skus.map(edge => (
            <option key={edge.node.id} value={edge.node.id}>
              {edge.node.attributes.name}
            </option>
          ))}
        </select>
        <button onClick={placeOrder}>Buy Now</button>
      </article>
    </div>
  )
}

export default Product
