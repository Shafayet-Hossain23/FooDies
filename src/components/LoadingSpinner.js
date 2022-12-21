import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center mt-14'>
            <div>
                <Oval
                    height={80}
                    width={80}
                    color="#CB1C8D"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#CB1C8D"
                    strokeWidth={4}
                    strokeWidthSecondary={4}

                />
            </div>
        </div>
    );
};

export default LoadingSpinner;