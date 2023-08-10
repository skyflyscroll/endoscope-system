import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export const fetchDataPatient = () => {
    return request({
        url: './patient.json',
        method: 'get'
    });
};