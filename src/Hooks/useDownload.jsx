import React from 'react'

export const useDownload = async()=>{
  // Store the current value after using
  let currentValue = $('#buttons__btn-downloadcv').val();

    $('#buttons__btn-downloadcv').val('DOWNLOADING...');

    const response = await fetch('https://igvdeveloper-ws-com.onrender.com/download/rnd_n8GiDBzS6xnXLrk11SEbQ7l85hrw', {
        method: 'GET',
        mode: 'cors',
    });

    if (!response.ok) {
        if (response.status === 401) throw new Error(`No autorized service`);
        if (response.status === 404) throw new Error(`No found request path service`);
    }

    $('#buttons__btn-downloadcv').val(currentValue);

    return response.blob();

}
