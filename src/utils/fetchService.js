"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FetchService {
    constructor(fetchOptions) {
        this.method = 'GET';
        this.headers = {};
        this.contentType = 'application/json';
        this.url = fetchOptions.url;
        fetchOptions.headers && (this.headers = fetchOptions.headers);
        fetchOptions.method && (this.method = fetchOptions.method);
        fetchOptions.reqBody && (this.method = 'POST');
        fetchOptions.reqBody && (this.reqBody = fetchOptions.reqBody);
        fetchOptions.reqParams && (this.reqParams = fetchOptions.reqParams);
        fetchOptions.contentType && (this.contentType = fetchOptions.contentType);
    }
    getData() {
        const fetchPromise = new Promise(async (resolve, reject) => {
            const options = {
                method: this.method,
                headers: this.headers
            };
            this.respData = await fetch(this.url, options);
            if (!this.respData.ok) {
                throw new Error(`${this.respData.status}: ${this.respData.statusText}`);
            }
            resolve(this.respData);
        });
        return fetchPromise;
    }
}
exports.FetchService = FetchService;
//# sourceMappingURL=fetchService.js.map