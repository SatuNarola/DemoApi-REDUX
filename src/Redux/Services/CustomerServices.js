import { Constants } from '../../CommonConfig';


export default {
    GetCustomer: () => {
        console.log('---->GETCUSTOMER<------');
        if (global.isConnected) {
                return fetch('https://gorest.co.in/public/v2/users', {
                    method: 'GET',
                    // headers: {
                    //     'Content-Type': 'application/json',
                    //     'User-Agent': Constants.USER_AGENT,
                    //     'accesskey': 'nousername'
                    // },
                })
                // .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    console.log('---->DATA',data);
                    return data;
                    //return '[{"id":2852,"name":"Dr. Chaten Arora","email":"dr_chaten_arora@muller.name","gender":"female","status":"inactive"},{"id":2849,"name":"Sushma Mehrotra","email":"sushma_mehrotra@pollich-kulas.com","gender":"female","status":"active"},{"id":2848,"name":"Sen. Drona Embranthiri","email":"sen_drona_embranthiri@bernhard-keeling.net","gender":"male","status":"inactive"},{"id":2847,"name":"Rajendra Menon","email":"menon_rajendra@funk-nolan.biz","gender":"female","status":"inactive"},{"id":2846,"name":"Kin Sinha","email":"sinha_kin@waters-upton.net","gender":"male","status":"active"},{"id":2845,"name":"Amb. Ajeet Mukhopadhyay","email":"amb_mukhopadhyay_ajeet@schoen.net","gender":"female","status":"inactive"},{"id":2844,"name":"Msgr. Sudeva Khanna","email":"msgr_sudeva_khanna@wuckert.name","gender":"female","status":"active"},{"id":2840,"name":"Hiranmaya Ahluwalia","email":"hiranmaya_ahluwalia@goyette.name","gender":"male","status":"active"},{"id":2839,"name":"Deevakar Dutta","email":"deevakar_dutta@tillman-kilback.co","gender":"male","status":"inactive"},{"id":2838,"name":"Oormila Bhat JD","email":"jd_oormila_bhat@rempel.org","gender":"male","status":"inactive"},{"id":2837,"name":"Bhima Bhattathiri","email":"bhima_bhattathiri@fritsch.org","gender":"male","status":"inactive"},{"id":2836,"name":"Amb. Sunita Chopra","email":"chopra_amb_sunita@stiedemann.info","gender":"male","status":"inactive"},{"id":2835,"name":"Kamla Nayar PhD","email":"nayar_phd_kamla@oconner-bode.name","gender":"male","status":"inactive"},{"id":2834,"name":"Garud Gill","email":"garud_gill@zemlak-rice.org","gender":"male","status":"inactive"},{"id":2833,"name":"Bhaaswar Nambeesan","email":"bhaaswar_nambeesan@schuppe.net","gender":"female","status":"active"},{"id":2832,"name":"Pran Mehrotra","email":"pran_mehrotra@walter-halvorson.net","gender":"female","status":"inactive"},{"id":2831,"name":"Bhadrak Namboothiri DDS","email":"namboothiri_bhadrak_dds@romaguera.net","gender":"male","status":"active"},{"id":2830,"name":"Bhagavaan Kaul","email":"kaul_bhagavaan@frami.io","gender":"female","status":"inactive"},{"id":2829,"name":"Tanushri Varma I","email":"i_varma_tanushri@johnson-hermann.net","gender":"male","status":"inactive"},{"id":2828,"name":"Swara Chaturvedi III","email":"swara_chaturvedi_iii@hamill.net","gender":"female","status":"active"}]';
                });
        } else {
            return Promise.reject({ message: Constants.NO_INTERNET_MESSAGE });
        }
    },
};
