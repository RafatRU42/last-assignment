import React from 'react';
import {  useQuery } from 'react-query';

const MyProducts = () => {

    const {data:myProducts = [], refetch } = useQuery({
        queryKey:['myProducts'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/myProducts')
            const data = await res.json()
            return data;
        }

    })
    console.log(myProducts)

    return (
        <div className='grid grid-cols-3 mr-2'>
        {
            myProducts.map(products => 
                <div className=" card bg-base-100 shadow-xl m-2">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">{products.userName}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
                )
        }
          
        </div>
    );
};

export default MyProducts;