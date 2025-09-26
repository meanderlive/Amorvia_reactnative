
//Base url

export const BASE_URL: string = 'https://datingapi.meander.software/';


//Get Image url
export const getImageUrl = (path: string): string => {
    if (!path || typeof path !== 'string') {
        console.warn('getImageUrl: Invalid path provided:', path);
        return '';
    }
    return `${BASE_URL}/assets/images/${path}`;
};
 
