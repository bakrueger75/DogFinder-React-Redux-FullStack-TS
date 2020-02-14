export interface FetchOptions {
    url: string,
    method?: string,
    headers?: any,
    reqParams?: any,
    reqBody?: any,
    contentType?: any
}

export class FetchService {
    private url: string;
    private method = 'GET';
    private headers = {};
    private reqParams: any;
    private reqBody: any;
    private respData: any;
    private contentType = 'application/json';

    constructor (fetchOptions: FetchOptions) {
        this.url = fetchOptions.url;
        fetchOptions.headers && (this.headers = fetchOptions.headers);
        fetchOptions.method && (this.method = fetchOptions.method);
        fetchOptions.reqBody && (this.method = 'POST');
        fetchOptions.reqBody && (this.reqBody = fetchOptions.reqBody);
        fetchOptions.reqParams && (this.reqParams = fetchOptions.reqParams);
        fetchOptions.contentType && (this.contentType = fetchOptions.contentType);
    }

    getData(): Promise<any> {
        const fetchPromise = new Promise(async (resolve, reject) => {
            const options = {
                method: this.method,
                headers: this.headers
            };
            this.respData = await fetch(this.url, options);
            if (!this.respData.ok) {
                throw new Error(
                    `${this.respData.status}: ${this.respData.statusText}`
                );
            }
            resolve(this.respData);
        });
        return fetchPromise;
    }
}