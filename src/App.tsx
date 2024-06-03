import { ProductPage } from "./components/ProductPage"
import { Header } from "./components/header"
import { CartProvider } from "./context/cartContext"


const App = () =>  {

  return (
    <div className="container mx-auto">
      <CartProvider>
        <Header/>
        <ProductPage/>
      </CartProvider>
    </div>
  )
}

export default App
