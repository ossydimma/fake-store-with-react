import { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((d) => {
            setData(d)
        })
},[])
  return (
    <>
        <div  className='products'>
        
            <div className='productTitle'>
                <h2>Popular Products</h2>
                <button>See all</button>  
            </div>

            <div className='items'>
                {data.map((item) => {
                    return (
                        <div key={item.id} id='list__holder'>
                            <img src= {item.image} alt="product image" />
                            <div className='itemText'>
                                <p>{item.title}</p> 
                                <h4>${item.price}</h4>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Products