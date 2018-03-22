import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, RequestMethod, Response, ResponseOptions } from '@angular/http';

export function fakeBackendFactory(
    backend: MockBackend,
    options: BaseRequestOptions
) {
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoi0JDQu9C10LrRgdCw0L3QtNGAIiwiYWRtaW4iOnRydWV9.AwjLMkDDTwkNclB3bAgK0upDQbgJQich9mOl_wZXypk';

    backend.connections.subscribe((connection: MockConnection) => {
      setTimeout(() => {
        if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
          const body = JSON.parse(connection.request.getBody());

          if (body.email === 'admin@gmail.com' && body.password === '1111') {
            connection.mockRespond(new Response(
              new ResponseOptions({
                status: 200,
                body: { token: token }
              })));
          } else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200})
            ));
          }
        }
    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};

