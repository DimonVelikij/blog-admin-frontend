import {InjectionToken} from "@angular/core";
import {environment} from "../environments/environment";

export const API_URL: string = environment.apiUrl;
export const API_URL_TOKEN: InjectionToken<string> = new InjectionToken(API_URL);
