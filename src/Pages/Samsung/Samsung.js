import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Samsung = () => {

    const {data:Samsung =[],refetch} = useQuery({
        queryKey:['Samsung'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/Samsung')
            const data1 = await res.json()
            return data1
        }
    })
    console.log(Samsung)
    return (
        <div className='grid grid-cols-3 mr-2'>
        {
            Samsung.map(products => 
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
                    {/* <BookingModal></BookingModal> */}
                    {/* <Link to={'/dashboard/bookingNow'}></Link> */}
                    <button  className="btn btn-success text-white">Book Now</button>

{/* <label className="btn">open modal</label> */}


                </div>
            </div>
            
                )
                
        }

          
        </div>
    );
};

export default Samsung;