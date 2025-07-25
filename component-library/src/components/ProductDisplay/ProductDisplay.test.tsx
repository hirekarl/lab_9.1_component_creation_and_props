import { type Product } from "../../types"
import ProductDisplay from "./ProductDisplay"

export default function ProductDisplayTest() {
  const fidgetSpinner: Product = {
    id: "27d1661f-65cb-453a-ae9a-88cb93df151f",
    name: "Fidget Spinner",
    price: 17.99,
    description:
      "A normal, non-haunted fidget spinner. Your children can safely play with it—the Dark Lord won't appear in your home even once.",
    inStock: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Fidget_spinner_red%2C_cropped.jpg",
  }

  function handleAddToCart(id: string): void {
    alert(`You clicked the "Add to Cart" button for product with ID ${id}.`)
  }

  return (
    <div className="row">
      <ProductDisplay
        product={fidgetSpinner}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={handleAddToCart}>
        <p className="text-warning">
          <i className="bi bi-exclamation-triangle-fill"></i> Hurry! These are
          going fast!
        </p>
      </ProductDisplay>
      <ProductDisplay
        product={fidgetSpinner}
        showDescription={true}
        showStockStatus={false}
        onAddToCart={handleAddToCart}>
        <p className="text-muted">
          A Product Display without showing stock status.
        </p>
      </ProductDisplay>
      <ProductDisplay
        product={fidgetSpinner}
        showDescription={false}
        showStockStatus={true}
        onAddToCart={handleAddToCart}>
        <p className="text-muted">
          A Product Display without showing description.
        </p>
      </ProductDisplay>
    </div>
  )
}
