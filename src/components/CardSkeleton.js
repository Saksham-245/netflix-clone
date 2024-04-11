import React from 'react';

const CardSkeleton = () => {
    return (
        <div className={'px-4 py-16'}>
            <div role="status"
                 className="flex items-center justify-center border-2 border-gray-500 w-[153px] lg:w-[216px]  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                <div className={'w-[212px] h-[318px]'}></div>
            </div>
            <div className="h-2.5 mt-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
    );
};

export default CardSkeleton;
