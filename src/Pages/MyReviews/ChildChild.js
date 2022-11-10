import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const ChildChild = ({ collc, serv, deleteHandler }) => {
    const { user } = useContext(AuthContext)
    const { _id, serviceId, title, price, image_url, rating, details } = serv
    const { name, image, email, text } = collc
    const editHandler = (event, serviceId) => {
        event.preventDefault()
        const text = event.target.text.value
        console.log(text)
        /* fetch(`http://localhost:5000/edit/${serviceId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    
                }
                // console.log(data)
            }) */
    }
    return (
        <div>
            <div>
                {
                    user.email === email
                        ?
                        <div className='border mt-3 p-3 rounded flex justify-between'>
                            <div>
                                <div>

                                    {
                                        image ? <img className='rounded-full inline w-7 h-7' src={image} alt="" /> : <FaUserCircle className='rounded-full inline w-7 h-7'></FaUserCircle>
                                    }
                                    <p className='inline ml-2  font-bold'>{name}</p>
                                </div>
                                <div className='ml-7 mt-2'>
                                    {text}
                                </div>

                            </div>
                            <div>
                                <p className='pt-2'>{title}</p>
                                <div className=''>
                                    <label htmlFor="my-modal" className="btn btn-active btn-link">Edit</label>
                                    {/* <button className="btn btn-active btn-link">Edit</button> */}
                                    <button onClick={() => deleteHandler(serviceId, email)} className="btn btn-active btn-link">Delete</button>

                                    {/* .... */}
                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <form onSubmit={editHandler} className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hey {user.email}</h3>
                                            <input name='text' type="text" className="input input-bordered w-full mt-5" defaultValue={text} />
                                            <button className="btn mt-5">Submit</button>
                                            <div className="modal-action">
                                                <label type="submit" htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        :
                        <div>

                        </div>
                }
            </div>

        </div>
    );
};

export default ChildChild;