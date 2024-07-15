import http from 'k6/http'
import {sleep} from 'k6'
export const options = {
    stages: [
        {
            duration: '2h',
            target: 20000   // just slowly ramp-up to a HUGE load
        }
    ]
}
export default function(){
  http.get('https://test.k6.io')
  sleep(1);
}