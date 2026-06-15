/*import st from '../env/st.env';
import sit from '../env/sit.env';
import uat from '../env/uat.env';

const environments ={
    st,
    sit,
    uat
};


const selectedEnv =
(process.env.TEST_ENV || 'st') as keyof typeof environments;

const currentEnv = environments[selectedEnv];

console.log(`Running in ${selectedEnv.toUpperCase()} environment`);

export default currentEnv; */

import stEnv from '../ENV/st.env';
import sitEnv from '../ENV/sit.env';
import uatEnv from '../ENV/uat.env';
import { ENV } from '../constant/environment';
import { EnvironmentConfig } from '../Types/env.types';
export class EnvironmentManager{
    private static environment=process.env.TEST_ENV || ENV.UAT;
    public static getConfig():EnvironmentConfig{
        console.log(`Running in ${this.environment.toLowerCase()} environment`);
      switch(this.environment.toLowerCase().trim()){
            case ENV.ST:
                return stEnv;
            case ENV.SIT:
                return sitEnv;
            case ENV.UAT:
                return uatEnv;
            default:
                throw new Error(`Invalid environment: ${this.environment}`);
        }
    }
}


