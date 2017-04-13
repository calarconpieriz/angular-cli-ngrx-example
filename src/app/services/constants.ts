import { environment } from '../../environments/environment';

export const MOBILE = (typeof window !== 'undefined') ? (window.screen.availWidth < 800) : true;
// export const API_BASE_URL: string = `http://${HOST}:${PORT}`;
export const API_BASE_URL: string = `http://${environment.host}:${environment.port}`;
