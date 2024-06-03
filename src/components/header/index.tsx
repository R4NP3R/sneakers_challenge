import { useContext, useEffect, useState } from 'react'
import cart from '../../assets/icon-cart.svg'
import menu from '../../assets/icon-menu.svg'
import profileImage from '../../assets/image-avatar.png'
import tenis from '../../assets/image-product-1-thumbnail.jpg'
import cartdelete from '../../assets/icon-delete.svg'
import { CartContext } from '../../context/cartContext'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'


export const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [responsiveSideBar, setResponsiveSideBar] = useState(false)

  const { cartProducts, RemoveItemCart, productQuantity } = useContext(CartContext)

  useEffect(() => {}, [cartProducts, productQuantity])

  return (
    <header className="flex items-center border-gray/30 border-b h-[120px] max-[480px]:w-full">
      <div className='mx-2 mt-[6px] h-full flex items-center min-[480px]:hidden '>
        <img 
        className='w-12'
        src={menu} 
        alt=""
        onClick={()=> {setResponsiveSideBar(true)}}
        />   
        {responsiveSideBar && (
          <div className='h-full w-full fixed top-0 left-0 z-40'>
            <div className='absolute bg-white w-[70%] h-full z-40'>
            <X 
            size={32} 
            className='ml-4 mb-10 mt-10'
            onClick={()=> {setResponsiveSideBar(false)}}
            />
            <menu className="flex flex-col text-[1rem] h-full text-black">
              <li className="ml-5 font-bold border-transparent flex items-center text-2xl mb-5">
                <a href="#">
                  <p>Collections</p>
                </a>
              </li>
              <li className="ml-5 font-bold border-transparent flex items-center text-2xl mb-5">
                <a href="#">
                  <p>Men</p>
                </a>
              </li>
              <li className="ml-5 font-bold border-transparent flex items-center text-2xl mb-5">
                <a href="#">
                  <p>Women</p>
                </a>
              </li>
              <li className="ml-5 font-bold border-transparent flex items-center text-2xl mb-5">
                <a href="#">
                  <p>About</p>
                </a>
              </li>
              <li className="ml-5 font-bold border-transparent flex items-center text-2xl mb-5">
                <a href="#">
                  <p>Contact</p>
                </a>
              </li>              
              </menu>
            </div>
            <div
            onClick={()=> {setResponsiveSideBar(false)}}
            className='absolute bg-black/40 w-full h-full z-30'/>
          </div>
        )}     
      </div>
      <h1 className="text-4xl font-black m-8 mr-16 text-blackTitle max-[480px]:m-0">sneakers</h1>
      <nav className="h-full max-[480px]:hidden">
        <menu className="flex text-[1rem] h-full text-gray">
          <li className="mr-10 border-b-4 border-transparent duration-200 hover:text-blackTitle hover:border-orange flex items-center">
            <a href="#">
              <p>Collections</p>
            </a>
          </li>
          <li className="mr-10 border-b-4 border-transparent duration-500 hover:text-blackTitle hover:border-orange flex items-center">
            <a href="#">
              <p>Men</p>
            </a>
          </li>
          <li className="mr-10 border-b-4 border-transparent duration-500 hover:text-blackTitle hover:border-orange flex items-center">
            <a href="#">
              <p>Women</p>
            </a>
          </li>
          <li className="mr-10 border-b-4 border-transparent duration-500 hover:text-blackTitle hover:border-orange flex items-center">
            <a href="#">
              <p>About</p>
            </a>
          </li>
          <li className="mr-10 border-b-4 border-transparent duration-500 hover:text-blackTitle hover:border-orange flex items-center">
            <a href="#">
              <p>Contact</p>
            </a>
          </li>
        </menu>
      </nav>
      <div className='w-full flex justify-end items-center relative'>
        <div className='relative h-full flex justify-center'>
        <AnimatePresence>
        {cartProducts.length !== 0 && 
        <motion.p
        variants={{
          initial: {scale: 0.8, opacity: 0},
          open: {scale: 1, opacity: 1, transition: {duration: 0.3}},
          close: {scale: 0.9, opacity: 0}
        }}
        initial="initial"
        animate="open"
        exit="close"
        className='absolute top-[-10px] right-[25px] text-white font-black text-xs bg-orange px-[10px] rounded-full max-[480px]:right-[10px]'>{cartProducts.length}</motion.p>}
        </AnimatePresence>
        <img className='w-6 mr-8 cursor-pointer hover:black max-[480px]:mr-4' onClick={() => setCartIsOpen(!cartIsOpen)} src={cart} alt="" />
        </div>
        <AnimatePresence>
        {cartIsOpen && (
          <motion.div 
          variants={{
            initial: {x: 40, scale: 1.03 ,opacity: 0},
            open: {x: 0, scale: 1, opacity: 1, transition: {duration: .6}},
            close: {x: -60, scale: 0.97, opacity: 0, transition: {duration: .6}},
          }}
          animate="open"
          initial="initial"
          exit="close"
          className='absolute top-[70px] right-[-50px] shadow-xl w-[350px] shadow-black/15 bg-white rounded-md max-[480px]:w-[380px]  max-[480px]:right-[15px]'>
            <h2 className='font-bold text-8 p-6 pl-6 border-b border-gray/30'>Cart</h2>
            {cartProducts.length === 0 && (
            <div className='flex justify-center h-[110px] items-center'>
              <p className='text-gray text-xl'>Your cart is empty</p>
            </div>
            )}
            {cartProducts.map((product) => (
              <div key={product.name} className='flex m-6 items-center'>
                <img className='rounded w-14 mr-2' src={tenis} alt="" />
              <div className='text-gray w-full'>
                <p>{product.name}</p>
                <p>${product.price} X {product.quantity} <b className='text-black'>${product.price * product.quantity}.00</b></p>              
              </div>
                <div className='flex justify-end'>
                  <img className='w-[1rem] h-[1rem] cursor-pointer' src={cartdelete} onClick={() => RemoveItemCart()} alt="" />
                </div>
              </div>
            ))}
            <div className='w-full p-6'>
              <button className='bg-orange p-4 rounded-lg w-full font-black'>Checkout</button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
        <img className='w-14 border-2 border-transparent rounded-full transition duration-500 hover:border-orange max-[480px]:mr-[8px] max-[480px]:w-12 max-[480px]:z-10' src={profileImage} alt="" />
      </div>
    </header>
  )
}