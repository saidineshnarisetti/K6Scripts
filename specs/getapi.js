import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    scenarios: {
        contacts_test: {
            executor: 'shared-iterations',
            vus: 10,
            iterations: 200,
            maxDuration: '30s'
        }
    }
};

export default function(){

    http.get('https://k6.io');
    sleep(1);
}
