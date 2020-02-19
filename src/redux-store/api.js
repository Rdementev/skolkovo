import * as axios from "axios";

const instance = axios.create({
});


export const mediaApi = {
    getMedia(){debugger
        return instance.get('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY')
    }
};




