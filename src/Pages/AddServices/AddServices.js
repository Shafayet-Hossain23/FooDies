import React, { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Home/Banner/Banner';

const AddServices = () => {
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
                console.log(data)
                if (data.acknowledged) {
                    alert("Service item added Successfully in home page. ")
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
                    <textarea name='details' className="textarea textarea-bordered w-full my-3" placeholder="Add Details"></textarea>
                    <button type='submit' className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;