import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const ChildChild = ({ collc, serv, deleteHandler }) => {
    const { user } = useContext(AuthContext)
    const { _id, serviceId, title, price, image_url, rating, details } = serv
    const { name, image, email, text } = collc
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
                                    <button className="btn btn-active btn-link">Edit</button>
                                    <button onClick={() => deleteHandler(serviceId, email)} className="btn btn-active btn-link">Delete</button>
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