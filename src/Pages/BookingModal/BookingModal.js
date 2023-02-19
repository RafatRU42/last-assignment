import React from 'react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Shared/Context/Authprovider';

const BookingModal = () => {
    // const {data:booking=[], refatch,isLoading} =useQuery({
    //     queryKey:['bookings'],
    //     queryFn: async ()=>{
    //         const res = await fetch(`https://last-assignment-server3.vercel.app/iPhone?id=`)
    //     }
    // })
    const booking = useLoaderData()
    console.log('booking',booking)
    const {user} = useContext(authContext)
    return (
        <div>
           {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div> */}
            this is booking
        </div>
    );
};

export default BookingModal;