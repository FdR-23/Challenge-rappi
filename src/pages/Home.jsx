import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

import MenuFilters from '../components/MenuFilter/MenuFilters'
import ListProducts from '../components/Products/ListProducts'

function Home() {

    const { products } = useSelector(state => state.products)

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className='flex flex-col w-full h-full'>
            {/* Navbar vemos despues */}
            <section className='border-b-4 bg-sky-800 border-x-2 border-b-slate-900 border-x-slate-900 rounded-b-2xl'>
                <Navbar />
            </section>


            {/* Productos aca vamos a poner los filtros  */}


            {/* <section className='p-2'>
                <div className={`${open ? 'absolute bg-amber-900/50  rounded-md items-center flex-col ' : 'none'} flex `}>
                    <MenuFilters
                        toggleopen={open} />
                    <button
                        className={`${open ? 'bg-amber-900  sm:bg-orange-700 m-2 p-2 h-8 rounded-md flex justify-center items-center' :
                            'bg-white/40 sm:bg-orange-700 m-2 p-2 h-8 rounded-md flex justify-center items-center sm:relative sm:-top-14'}`}
                        onClick={() => handleToggle()}>{open ? 
                        <p className='font-bold text-white '>CLOSE</p> :
                        <p className='font-bold text-white '>MENU</p>}
                    </button>
                </div>
                <div className='rounded-md bg-orange-500/80'>
                    <ListProducts
                        products={products} />
                </div>
            </section> */}
            
            <section className='flex flex-row flex-1 mx-2 mt-2'>
               
                <div className='w-[125px] md:w-[250px]  flex flex-col '>
                    <MenuFilters
                        toggleopen={open} />


                    {/* <button
                        className={`${open ? 'bg-amber-900  sm:bg-orange-700 m-2 p-2 h-8 rounded-md flex justify-center items-center' :
                            'bg-white/40 sm:bg-orange-700 m-2 p-2 h-8 rounded-md flex justify-center items-center sm:relative sm:-top-14'}`}
                        onClick={() => handleToggle()}>{open ? 
                        <p className='font-bold text-white '>CLOSE</p> :
                        <p className='font-bold text-white '>MENU</p>}
                    </button> */}

                </div>
                <div className='flex-1'>
                    <ListProducts
                        products={products} />
                </div>
            </section>


        </div>
    )
}

export default Home