import {CorsOptions} from 'cors';

export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        return callback(null, true); 
        // This is a very simple example that allows all origins
    }
}
