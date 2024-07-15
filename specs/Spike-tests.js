import http from 'k6/http'
import {sleep} from 'k6'
export const options = {
    stages: [
        {
            duration: '2m',
            target: 10000   // fast ramp-up to a high point
        },
        {
            duration: '10s',
            target: 0       // quick ramp-down to 0 users
        }
    ]
}
export default function(){
  http.get('https://test.k6.io')
  sleep(1);
}