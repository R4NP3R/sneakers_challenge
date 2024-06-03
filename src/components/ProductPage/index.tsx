import tenistb from '../../assets/image-product-1.jpg'
import tenis from '../../assets/image-product-1.jpg'

import tenistb2 from '../../assets/image-product-2.jpg'
import tenis2 from '../../assets/image-product-2.jpg'

import tenistb3 from '../../assets/image-product-3.jpg'
import tenis3 from '../../assets/image-product-3.jpg'

import tenistb4 from '../../assets/image-product-4.jpg'
import tenis4 from '../../assets/image-product-4.jpg'

import cart from '../../assets/icon-cart-black.svg'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const productImages = [
  {
    id: 0,
    imageThumbnail: tenistb,
    productImage: tenis
  },
  {
    id: 1,
    imageThumbnail: tenistb2,
    productImage: tenis2
  },
  {
    id: 2,
    imageThumbnail: tenistb3,
    productImage: tenis3
  },
  {
    id: 3,
    imageThumbnail: tenistb4,
    productImage: tenis4
  },
]

export const ProductPage = () => {
  const {AddToCart, UpdateProductQuantity, productQuantity} = useContext(CartContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number>(0)

  
  function selectImage() {
    return productImages[selectedImage].productImage
  }

  useEffect(() => {

  }, [selectedImage])

  function openModal () {
    setModalIsOpen(true)
  }

  function closeModal () {
    setModalIsOpen(false)
  }

  function previousImage () {
    if (selectedImage >= 1) {
      setSelectedImage(selectedImage - 1)
    }
  }

  function nextImage () {
    if (selectedImage <= 2) {
      setSelectedImage(selectedImage + 1)
    }
  }

  



  return (
    <section className='p-20 px-16 flex max-[480px]:w-[100%] max-[480px]:flex-col max-[480px]:p-0'>
      <div className='mr-16 max-[480px]:mr-0'>        
        <div className='flex items-center'>
        <ChevronLeft
        onClick={previousImage}
        size={42} 
        className='absolute bg-white rounded-full left-4 min-[480px]:hidden'/>
        <img 
        onClick={openModal}
        className='w-[480px] rounded-xl mb-12 max-[480px]:w-full max-[480px]:rounded-none'
        src={productImages[selectedImage].imageThumbnail}
        alt="" />
        <ChevronRight
        onClick={nextImage}
        size={42} 
        className='absolute bg-white rounded-full right-4 min-[480px]:hidden'/>
        </div>
        <div className='flex justify-between w-[480px] max-[480px]:hidden'>
          {productImages.map((image) => (
          <div
          key={image.id} 
          className='relative'          
          >
            <img             
            className={twMerge('w-24 rounded-lg')} 
            src={image.imageThumbnail} alt="" />
            <div 
            onClick={() => setSelectedImage(image.id)}
            className={twMerge('hover:bg-white/50 w-full h-full absolute top-0 cursor-pointer', selectedImage === image.id && 'bg-white/50 w-full h-full absolute top-0 border-2 border-orange rounded-lg')} />
            {modalIsOpen && 
            (
              <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
                <div className='relative z-20 flex items-center'>
                  <X 
                  onClick={closeModal}
                  size={32} 
                  className='absolute right-0 top-[-40px] text-white hover:text-orange cursor-pointer'
                  />
                  <div 
                  onClick={previousImage}
                  className="rounded-full absolute left-[-35px] cursor-pointer p-4 text-black hover:text-orange bg-white">
                  <ChevronLeft size={40}/>
                  </div>
                  <img 
                  className='w-[600px] 
                  rounded-2xl' src={selectImage()} 
                  alt="" 
                  />
                  <div 
                  onClick={nextImage}
                  className="rounded-full absolute right-[-35px] cursor-pointer p-4 text-black hover:text-orange bg-white">
                  <ChevronRight size={40}/>
                  </div>
                  <div className='flex flex-row w-full h-full absolute items-center bottom-[-360px] justify-center '>
                  {productImages.map((image) => (     
                    <div key={image.id}
                    className='relative w-[96px] h-[96px] mr-6'
                    >
                      <img             
                      className={twMerge('w-24 rounded-lg absolute')} 
                      src={image.imageThumbnail} alt="" />
                      <div 
                      onClick={() => setSelectedImage(image.id)}
                      className={twMerge('hover:bg-white/50 w-full h-full absolute top-0 cursor-pointer rounded-lg', selectedImage === image.id && 'bg-white/50 w-full h-full absolute top-0 border-2 border-orange rounded-lg')}
                      />
                      
                    </div>
                  ))}
                  </div>
                </div>
                <div onClick={closeModal} className='fixed z-10 top-0 left-0 w-full h-full bg-black/20' />
            </div>
            )}
          </div>          
          ))}
        </div>
      </div>
      <div className='w-[620px] p-16 flex flex-col max-[480px]:p-0 max-[480px]:w-[90%] mx-auto'>
        <p className='text-gray font-black tracking-[0.125rem]'>SNEAKER COMPANY</p>
        <h1 className='text-blackTitle text-[40px] tracking-wide font-black mb-8 max-[480px]:text-[28px]'>Fall Limited Edition Sneakers</h1>
        <p className='text-[#919295] text-xl mb-4 font-normal max-[480px]:text-lg'>These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything 
          the weather can offer.
        </p>
        <div className='flex items-center mb-2 justify-between'>
          <div className='flex items-center'>
          <p className='mr-4 font-black text-blackTitle text-3xl'>$125.00</p>
          <p className='py-[2px] px-[12px] rounded-lg font-bold bg-blackTitle text-white'>50%</p>
          </div>
          <p className='ml-4 font-black text-gray text-lg line-through'>$250.00</p>
        </div>
      <div className='flex mt-12 max-[480px]:flex-col'>
        <div className='bg-[#F7F8FD] w-[200px] mr-4 flex justify-between items-center font-black text-2xl py-[4px] rounded-lg max-[480px]:w-full max-[480px]:h-[60px] max-[480px]:mb-4'>
          <button className='text-orange px-4 pb-[4px] max-[480px]:px-6' onClick={() => UpdateProductQuantity("decrease")}>
          <span className='max-[480px]:text-4xl'>-</span>
          </button>
          <span className='text-lg max-[480px]:text-2xl'>{productQuantity}</span>
          <button className='text-orange px-4 max-[480px]:px-6 ' onClick={() => UpdateProductQuantity("increase")}>
            <span className='max-[480px]:text-4xl'>+</span>
          </button>
        </div>
        <button
        onClick={() => AddToCart({
          name: 'Fall Limited Edition Sneakers',
          price: 125,
          quantity: 1,
        }, productQuantity)}
        className='flex bg-orange items-center w-full justify-center rounded-lg py-4 duration-500 transition hover:bg-orange/70 max-[480px]:mb-12'>
          <img className='w-4 mr-4' src={cart} alt="" />
          <p className='font-black text-lg'>Add to Cart</p>
          </button>
      </div>
      </div>

    </section>
  )
}