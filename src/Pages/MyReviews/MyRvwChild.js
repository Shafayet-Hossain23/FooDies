import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ChildChild from './ChildChild';

const MyRvwChild = ({ serv }) => {
    const { user } = useContext(AuthContext)
    const { _id, serviceId, title, price, image_url, rating, details } = serv
    // console.log(serv)
    // const [data,setData]=useState([])
    const [collection, setCollection] = useState([])
    useEffect(() => {
        fetch(`https://foodies-server.vercel.app/reviews/${serviceId}`)
            .then(res => res.json())
            .then(data => setCollection(data.reviews))
    }, [serviceId])
    const deleteHandler = (serviceId, email) => {
        const confirm = window.confirm("Are you sure to delete this item from order")
        if (confirm) {
            fetch(`https://foodies-server.vercel.app/delete/${serviceId}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert("Order deleted successfully")
                        const remaining = collection.filter(rvw => rvw.email !== email)
                        // console.log(remainingOrders)
                        setCollection(remaining)
                    }
                    // console.log(data)
                })
        }
    }
    return (
        <div>
            {
                collection.map(collc => <ChildChild
                    // key={_id}
                    collc={collc}
                    serv={serv}
                    deleteHandler={deleteHandler}
                >

                </ChildChild>)
            }
        </div>
    );
};

export default MyRvwChild;