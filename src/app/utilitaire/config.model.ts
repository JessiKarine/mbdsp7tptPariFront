import { config } from './configuration';
export class Config {
    static getBaseUrl():String { 
        const envDefault = config.envDefault;
        return config.baseApi[envDefault];
    }
    static getLocalStorageKey(item ){
        return config.localStorage[item];
    } 
}
