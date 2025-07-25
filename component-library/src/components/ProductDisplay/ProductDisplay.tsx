/**
 * Component: ProductDisplay
 *
 * Props (ProductDisplayProps):
 * - product: Product                       The Product to
 *                                          display.
 *
 * - showDescription?: boolean              Indicates wheth-
 *                                          er to show pro-
 *                                          duct description.
 *
 * - showStockStatus?: boolean              Indicates wheth-
 *                                          er to show pro-
 *                                          duct stock status.
 * 
 * - onAddToCart?: (productId: string) =>   Code to run when
 *     void                                 "Add to Cart" but-
 *                                          ton clicked.
 *
 * - children? React.ReactNode              Any children passed
 *                                          from the parent
 *                                          Component.
 * 
 * Usage:
 * - To render, invoke `UserProfileCard` with at least prop
 *   `product` (of type Product).
 * 
 * - `showDescription` indicates whether to display product's
 *   description.
 * 
 * - `showStockStatus` indicates whether to display product's
 *   "in stock" or "out of stock" status.
 * 
 * - `onAddToCart` runs code when the "Add to Cart" button
 *   is clicked.
 * 
 * - Pass `children` from parent Component to add more detail.
 * 
 * - Component must be rendered under a <div class="row"> in
 *   the parent component to display correctly.
 * 
 * - See ./UserProfileCard.test.tsx for demo implementation.
 */

import { type Product } from "../../types"
import { type ProductDisplayProps } from "../../types"

export default function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  const { id, name, price, description, inStock, imageUrl }: Product = product

  let addToCartButton: React.ReactNode
  if (onAddToCart) {
    addToCartButton = (
      <button
        data-id={id}
        type="button"
        className="btn btn-primary w-100"
        onClick={() => onAddToCart(id)}>
        Add to Cart
      </button>
    )
  } else {
    addToCartButton = (
      <button data-id={id} type="button" className="btn btn-primary w-100">
        Add to Cart
      </button>
    )
  }

  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-3">
      <div className="card text-center">
        <img
          className="card-img-top"
          src={imageUrl}
          alt={`Preview image of ${name}.`}
        />
        <div className="card-body">
          <h3 className="card-title fs-5">{name}</h3>
          <p className="text-primary fw-bold">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          {showDescription && <p>{description}</p>}
          {showStockStatus &&
            (inStock ? (
              <p className="text-success">In Stock</p>
            ) : (
              <p className="text-danger">Out of Stock</p>
            ))}
          {children}
          {addToCartButton}
        </div>
      </div>
    </div>
  )
}
