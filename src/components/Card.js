import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Card = ({path, title}) => {
    return (
        <div>
            <div className={'border-2 border-gray-500 w-[153px] lg:h-[318px] lg:w-[213px]'}>
                <Image src={`https://image.tmdb.org/t/p/original${path}`}
                       className={'w-full object-cover'}
                       width={100}
                       height={100}
                       alt={title}
                />
            </div>
            <div className={'mt-3 font-sans text-white'}>{title}</div>
        </div>
    );
};

Card.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
}

export default Card;
