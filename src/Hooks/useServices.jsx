import React from 'react'
import { useDownload } from './useDownload';
import useValidationForm from './useValidationForm';

export const useServices = async( service )=>{
    
    const services = {

        'download':useDownload(),
        'validateForm':useValidationForm()

    }

    const response = services[ service ];

    return response;

}
