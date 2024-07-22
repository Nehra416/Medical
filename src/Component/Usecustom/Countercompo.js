import React from 'react';
import Usecustomhook from './Usecustomhook';

const Countercompo = () => {
    const { count, increment, decrement, reset } = Usecustomhook(12);

    return (
        <div className='flex flex-col items-center m-auto p-4 border border-gray-300 rounded shadow-md'>
            <h1 className='text-2xl font-bold mb-4'>Count: {count}</h1>
            <div className='flex gap-4'>
                <button 
                    onClick={increment} 
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200'
                >
                    Increment
                </button>
                <button 
                    onClick={decrement} 
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200'
                >
                    Decrement
                </button>
                <button 
                    onClick={reset} 
                    className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200'
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Countercompo;
