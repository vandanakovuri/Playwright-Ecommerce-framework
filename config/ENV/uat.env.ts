/*export default {
    baseURL: 'https://www.demoblaze.com/',
    
    username: 'vishnu',
    
    password: 'Anju41day$'
};*/

import { EnvironmentConfig } from '../Types/env.types';
const uatEnv: EnvironmentConfig = {
   baseUrl: 'https://www.demoblaze.com/',
     username: 'vishnu',
    password: 'Anju41day$',
    timeout: 30000,
    //apiUrl: 'https://api-uat.demo.com'
};
export default uatEnv;