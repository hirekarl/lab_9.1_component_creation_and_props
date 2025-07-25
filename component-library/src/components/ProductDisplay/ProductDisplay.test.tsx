import { type Product } from "../../types"
import ProductDisplay from "./ProductDisplay"

export default function ProductDisplayTest() {
  const randomProduct: Product = {
    id: "27d1661f-65cb-453a-ae9a-88cb93df151f",
    name: "Fidget Spinner",
    price: 17.99,
    description: "A normal, non-haunted fidget spinner. Your children can safely play with it without summoning the Dark Lord.",
    inStock: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Fidget_spinner_red%2C_cropped.jpg",
  }

  function handleAddToCart(id: string) {
    alert(`Add to Cart button clicked for product with ID ${id}`)
  }

  return (
    <ProductDisplay
      product={randomProduct}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={handleAddToCart}>
      <p className="text-warning"><i className ="bi bi-exclamation-triangle-fill"></i> Hurry! These are going fast!</p>
    </ProductDisplay>
  )
}
