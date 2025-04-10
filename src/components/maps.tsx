'use client'

import React from 'react';
import {YMaps, Map, Placemark} from '@iminside/react-yandex-maps';
import ContactBlock from "@/components/shared/ContactBlock";


const Maps = () => {
    const defaultState = {
        center: [53.935395, 27.530947],
        zoom: 15,
    };

    return (
        <div className='flex flex-col md:relative w-full p-6 h-[300pх] '>
            <div className='flex justify-center md:absolute md:top-8 md:left-30 z-10'>
                <ContactBlock/>
            </div>
            <div>
                <YMaps query={{apikey: 'bb10823d-997a-440e-9425-0ab910d6234a'}}>
                    <Map width={'100%'} height={'300px'} defaultState={defaultState}>
                        <Placemark geometry={[53.935395, 27.530947]}/>
                    </Map>
                </YMaps>
            </div>

        </div>

    );
};

export default Maps;