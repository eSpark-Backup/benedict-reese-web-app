let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.toLocaleString('default', { month: 'long' });
let year = currentDate.getFullYear();

let formattedDate = `${day}th ${month} ${year}`;

export const getDate = () =>{
    return formattedDate;
}