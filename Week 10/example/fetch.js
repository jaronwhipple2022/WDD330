//Uploading JSON data
//Use fetch() to POST JSON-encoded data.

const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

//Uploading a file
//Files can be uploaded using an HTML <input type="file" /> input element, FormData() and fetch().

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

//Uploading multiple files
//Files can be uploaded using an HTML <input type="file" multiple /> input element, FormData() and fetch().

const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

//Processing a text file line by line
//The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, not strings. 
//If you want to fetch a text file and process it line by line, it is up to you to handle these complications. 
//The following example shows one way to do this by creating a line iterator (for simplicity, it assumes the text is UTF-8, 
//and doesn't handle fetch errors).

async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8');
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '';

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}
run();

//Checking that the fetch was successful

fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

//Headers
//The Headers interface allows you to create your own headers object via the Headers() constructor. 
//A headers object is a simple multi-map of names to values:

const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

//Copy to Clipboard
//The same can be achieved by passing an array of arrays or an object literal to the constructor:

const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});

// response onjects

const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});

// body
const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});