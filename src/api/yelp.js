import axios from 'axios';

export default axios.create({
       baseURL: 'https://api.yelp.com/v3/businesses',
       headers: {
           Authorization: 'Bearer LBWnfs58erY_zYLiOMy2hwi2Jv6XjIWCc9brNCiaB6DwZLN4drVndPCa-cauwQHYSCKncYD4uCIT3w2tve6IAm_dxit1aKVGy430vgVgiHaLNetCRKrvp5qjJ3StXXYx '
       }
});


