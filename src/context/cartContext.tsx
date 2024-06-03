import { createContext, useState } from "react"

interface Product {
  name: string,
  price: number,
  quantity: number
}

interface CartContextProducts {
  cartProducts: Product[],
  AddToCart: (product: Product, productQuantity:number) => void,
  RemoveItemCart: () => void
  UpdateProductQuantity: (type: "increase" | "decrease") => void,
  productQuantity: number,
}


export const CartContext = createContext<CartContextProducts>({} as CartContextProducts)

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  const [productQuantity, setProductQuantity] = useState(1)

  function AddToCart (product: Product, productQuantity: number) {
    if (productQuantity === 0) {
      setCartProducts([{
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      }])
    }
    setCartProducts([{
      name: product.name,
      price: product.price,
      quantity: productQuantity,
    }])
  }

  function UpdateProductQuantity(type: "increase" | "decrease") {
    if (type === "increase") {
      setProductQuantity(productQuantity + 1)
    }

    if (type === "decrease") {
      if (productQuantity >= 2) {
        setProductQuantity(productQuantity - 1)
      }
    }
  }

  function RemoveItemCart () {
    setCartProducts([])
  }

  const value = {
    cartProducts, 
    AddToCart,
    RemoveItemCart,
    UpdateProductQuantity,
    productQuantity
  }
    
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}