import React, { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../UseTitle/useTitle';
import Banner from '../Home/Banner/Banner';

const AddServices = () => {
    useTitle("Add services")
    const [count, setCount] = useState(0)
    useEffect(() => {
        const url = `http://localhost:5000/services/count`;
        // console.log(page, size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCount(data.count);

            })
    }, [])
    // console.log(count)
    const addServiceHandler = (event) => {

        event.preventDefault()
        const form = event.target
        const title = form.serviceName.value
        const image_url = form.img.value
        const details = form.details.value
        const price = form.price.value
        const addService = {
            serviceId: `${count + 1}`,
            title,
            image_url,
            details,
            price,

        }
        // console.log(JSON.stringify(addService))
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert("Service item added Successfully in home page. ")
                    form.reset();
                    const reviewItem = {
                        serviceId: `${count + 1}`,
                        title,
                        reviews: [
                            {
                                "name": "Hafizur Hossain",
                                "image": "https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp-1024x1024.jpg?is-pending-load=1",
                                "email": "mdshafayethossain683dfa45870@gmail.com",
                                "text": "Chicken carry delicious"
                            },
                            {
                                "name": "Shafayet Hossain",
                                "image": "https://helostatus.com/wp-content/uploads/2021/08/profile-pictures-for-WhatsApp-1024x1024.jpg?is-pending-load=1",
                                "email": "mdshafayethosss7854ain6830@gmail.com",
                                "text": "Mutton carry delicious"
                            }
                        ]

                    }
                    fetch('http://localhost:5000/reviews', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(reviewItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })

                }
            })

    }
    return (
        <div className='mt-12'>
            <div>
                <p className='font-bold text-3xl text-center mb-7'>Add Service</p>
            </div>
            <div>
                <form onSubmit={addServiceHandler}>
                    <input name='serviceName' type="text" placeholder="Service Name" className="input input-bordered w-full required my-3" />
                    <input name='img' type="text" placeholder="Service Image url" className="input input-bordered w-full required mb-3" />
                    <input name='price' type="text" placeholder="Price $" className="input input-bordered w-full required" />
                    <textarea name='details' className="textarea textarea-bordered w-full my-3 required" placeholder="Add Details"></textarea>
                    <button type='submit' className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;