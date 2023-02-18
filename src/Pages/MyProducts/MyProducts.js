import React, { useContext } from 'react';
import {  useQuery } from 'react-query';
import { authContext } from '../../Shared/Context/Authprovider';
import NoProduct from '../NoProduct/NoProduct';

const MyProducts = () => {
    const {user} = useContext(authContext)

    const {data:myProducts = [], refetch } = useQuery({
        queryKey:['myProducts',user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
            const data = await res.json()
            return data;
        }

    })

    if(myProducts.length ===0){
        return <NoProduct></NoProduct>
    }
    console.log(myProducts)

    return (
        <div className='grid grid-cols-3 mr-2'>
        {
            myProducts.map(products => 
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
                </div>
            </div>
                )
        }
          
        </div>
    );
};

export default MyProducts;