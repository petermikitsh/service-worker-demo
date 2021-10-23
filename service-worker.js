console.log('hello world234');

self.addEventListener('fetch', (event) => {
  debugger;

  if (new URL(event.request.url).pathname === '/Export.do') {

    const body = "Foo,Bar\r\n1,2";
    event.respondWith(new Response(body, {
      headers: {
        'Content-Disposition': 'attachment; filename="export.csv"'
      }
    }));
  }
  else {
    event.respondWith(fetch(event.request));
  }
});
