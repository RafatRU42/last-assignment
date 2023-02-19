import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Samsung = () => {

    const [modalProduct, setModalProduct] = useState(null);

    const handleBookNow = (productId) => {
        fetch(`https://last-assignment-server3.vercel.app/Samsung/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setModalProduct(data)
                console.log('da', data)
            });

    };

    const { data: Samsung = [], refetch, isLoading } = useQuery({
        queryKey: ['Samsung'],
        queryFn: async () => {
            const res = await fetch('https://last-assignment-server3.vercel.app/Samsung')
            const data1 = await res.json()
            return data1
        }
    })
    if (isLoading) {
        return <div className='flex justify-center  items-center'>

            <div
                className="flex  w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400">

            </div>
        </div>
    }

    return (



        <div>
            <div className='grid grid-cols-3 mr-2'>
                {
                    Samsung.map(products =>
                        <div className=" card bg-base-100 shadow-xl m-2">
                            <figure><img src={products.image} alt="product" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {products.productName}
                                    <div className="badge badge-secondary">${products.price}</div>
                                </h2>
                                <p>{products.description.slice(0, 100)}...</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{products.location}</div>
                                    <div className="badge badge-outline">{products.condition}</div>

                                </div>


                                <label className="btn btn-success text-white" htmlFor="my-modal">Book Now</label>
                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <figure><img className='w-full' src={products.image} alt="product" /></figure>

                                        <h3 className="font-bold text-lg">{products.productName}</h3>
                                        <h3 className="font-bold text-lg"> Seller Name:  {products.userName}</h3>
                                        <h3 className="font-bold text-lg"> Price:  ${products.price}</h3>
                                        <h3 className="font-bold text-lg"> Mobile Number:  {products.number}</h3>
                                        <p className="py-4">{products.description}</p>
                                        <div className="modal-action">
                                            <label htmlFor="my-modal" className="btn">Book</label>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    )

                }
            </div>

        </div>





    );
};

export default Samsung;