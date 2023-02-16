import React from 'react';
import { useQuery } from 'react-query';

const Vivo = () => {
    const {data:VIVO =[],refetch} = useQuery({
        queryKey:['VIVO'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/VIVO')
            const data1 = await res.json()
            return data1
        }
    })
    return (
        <div className='grid grid-cols-3 mr-2'>
        {
            VIVO.map(products => 
                <div className=" card bg-base-100 shadow-xl m-2">
                <figure><img src={products.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {products.productName}
                        <div className="badge badge-secondary">${products.price}</div>
                    </h2>
                    <p>{products.description.slice(0,100)}...</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{products.location}</div>
                        <div className="badge badge-outline">{products.condition}</div>
                        
                    </div>
<button className="btn btn-success text-white">Book Now</button>

                </div>
            </div>
            
                )
                
        }

          
        </div>
    );
};

export default Vivo;