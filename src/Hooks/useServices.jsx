import React from 'react'
import { useDownload } from './useDownload';

export const useServices = async( service )=>{
    
    const services = {

        'download':useDownload()

    }

    const response = services[ service ];

    return response;

}
