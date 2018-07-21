// @flow

type error = (response: Response) => {};

class HttpHelper {

    timeout: number = 100;

    GETRequest(...url: string): Request {
        return this.defaultParams(url.join("/"), "get");
    }

    POSTRequest(body, ...url: string): Request {
        return this.defaultParams(url.join("/"), "post", body);
    }

    DELETERequest(...url: string): Request {
        return this.defaultParams(url.join("/"), "delete");
    }

    defaultParams(url: string, method: string, body: any = null): Request {
        let h: Headers = new Headers();
        h.append("Authorization", "Basic " + btoa("admin:password"));
        h.append("Content-Type", "application/json");

        // RequestInit
        let i = { method: method,
            headers: h,
            mode: 'cors',
            cache: 'default',
        };

        if(body) {
            i.body = JSON.stringify(body);
        }

        return new Request(url, i);
    };

    defaultErrorCallback: error = (response: Response) => {
        console.error(response)
    };

    jsonCall(request, successCallback, errorCallback) {

        errorCallback = !errorCallback ? this.defaultErrorCallback : errorCallback;

        setTimeout(() => {
            fetch(request)
                .then((response) => {
                    response.json().then((data) => {
                        if (response.ok) {
                            successCallback(data)
                        } else {
                            console.error(data, response.status, request.url);
                            errorCallback(response)
                        }
                    })
                })
                .catch((e) => {
                    console.error(e.message, request.url);
                    errorCallback(e)
                });
        }, this.timeout)
    }

    textCall(request, successCallback, errorCallback) {

        errorCallback = !errorCallback ? this.defaultErrorCallback : errorCallback;

        setTimeout(() => {
            fetch(request)
                .then((response) => {
                    response.text().then((data) => {
                        if (response.ok) {
                            successCallback(data)
                        } else {
                            console.error(data, response.status, request.url);
                            errorCallback(response)
                        }
                    })
                })
                .catch((e) => {
                    console.error(e.message, request.url);
                    errorCallback(e)
                });
        }, this.timeout)
    }

}

export const httpHelper: HttpHelper = new HttpHelper();