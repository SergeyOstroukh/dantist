'use client'

import React from 'react';

const Maps = () => {
    const minskLat = 53.902334;
    const minskLng = 27.561879;
    
    const apiKey = 'bb10823d-997a-440e-9425-0ab910d6234a';
    
    const mapUrl = `https://static-maps.yandex.ru/v1?ll=${minskLng},${minskLat}&lang=ru_RU&size=600,450&z=13&pt=${minskLng},${minskLat},pmwtm1&apikey=${apiKey}`;
    
    return (
        <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative'>
            <img 
                src={mapUrl} 
                alt="Map of Minsk"
                className='w-full h-full object-cover'
            />
        </div>
    );
};

export default Maps;