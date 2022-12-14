import React, { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';
import { useEffect } from 'react';
import Review from './Review/Review';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../UseTitle/useTitle';
import LoadingSpinner from '../../components/LoadingSpinner';

const ServiceDetails = () => {
    useTitle("Details")
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { _id, serviceId, title, price, image_url, rating, details } = data
    // console.log(data)
    const [collection, setCollection] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch(`https://foodies-server.vercel.app/reviews/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setCollection(data.reviews)
                setLoader(false)
            })
    }, [serviceId])
    // const serviceReviews = collection.reviews
    console.log(collection)
    const reviewHandler = (event) => {
        event.preventDefault()
        const form = event.target

        const text = form.text.value
        const reviews = {
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
            text: text

        }
        fetch(`https://foodies-server.vercel.app/reviews/${serviceId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    const newCollecetion = [...collection, reviews]
                    setCollection(newCollecetion)
                    alert("Comment add successfully")
                    form.reset()
                }
            })
    }
    if (loader) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="my-10 card w-full bg-base-100 shadow">
            <figure>
                {/* <img src={image_url} className="w-full h-80" alt="" /> */}
                <PhotoProvider>
                    <PhotoView src={image_url}>
                        <img title='Click image for full view' src={image_url} className="w-full h-3/6" alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body mt-7">
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>
                    {details}
                </p>
                <div className='flex justify-between mt-7'>
                    <div>Price:  <span className='font-bold'>${price}</span> </div>
                    <div className='text-secondary ml-40'>
                        {
                            rating?.number ? <><FaStar className='inline pb-1 pr-1 ' /> {rating.number}</> : <p className='text-slate-300'>No rating available</p>
                        }
                    </div>
                </div>
                <div className='text-center mt-14 mb-8'>
                    <p className='text-3xl text-secondary font-bold'>See Review</p>
                </div>
                <div>
                    {
                        collection.map(review => <Review
                            key={review.email}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div>
                    <div className='text-center mt-10 mb-8'>
                        <p className='text-3xl text-secondary font-bold'>Give Review</p>
                    </div>
                    <div>
                        {
                            user?.uid ? <>
                                <div>
                                    <form onSubmit={reviewHandler} className='lg:w-2/3 w-full'>
                                        <p className='ml-2 mb-1'>Give Your Review Here: </p>
                                        <textarea name='text' className="textarea textarea-bordered w-full required" placeholder="Comments"></textarea>
                                        <button type='submit' className="btn mt-3 w-28 btn-secondary">Submit</button>
                                    </form>
                                </div></> :
                                <><p className='text-center font-bold'>For adding review,you have to <Link className='text-secondary' to='/login'>login</Link> first</p></>
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;