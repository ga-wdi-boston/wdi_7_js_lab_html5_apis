# HTML5 API Demo

In most cases you'll need to run a local HTTP server due to security restrictions: try `python -m SimpleHTTPServer` in the directory you want to serve.

## [Geolocation](https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation) + [Local Storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage)

Create a web page with a "Check In" button. Each time the button is clicked, the page should record the user's current latitude and longitude, the accuracy of that measurement, and the timestamp at which it was taken. The recorded check-ins should be displayed in a list which can be cleared with a "Clear" button.

Once you have that working, enhance the web page with local storage. When the user navigates away to another page, or closes the browser and returns later, all of their recorded check-ins should still be present. Make sure the "Clear" button is still respected across visits.

## [Canvas](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial)

Create a web page with a text input field and a "Load" button. When the user enters an image URL in the field and clicks the button, the image should be loaded into a canvas with a fixed size (so if the image is bigger than the canvas, it should be scaled down). Once loaded, the user should be able to click and drag on the image to draw on it with a virtual marker. There should also be a "Clear" button that resets the image to a pristine state.

## [History](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history)

Create a web page with a text input field and a "Go" button. When the user enters a number in the field and clicks the button, the page should load the image for the XKCD comic with that number, using the [Unofficial XKCD API](https://github.com/tibbon/xkcd_api_unofficial). Each time a new image is loaded this way, a new history entry should be created in the browser &ndash; so after loading several images, I should be able to click my browser's Back button and be taken back through each one (and then the Forward button should take me forward again). Make sure this also updates the input field with the correct number. Ideally going Back/Forward should not make additional API requests.

## [Drag and Drop](https://developer.mozilla.org/en-US/docs/DragDrop/Drag_and_Drop)

Create a web page that is a mockup of a "todo" app: It should have a list of to-do items, a list of done items, and a trash bin. All of these can be hard-coded, we don't need add new items or save them anywhere.

Using the drag-and-drop APIs, allow items to be dragged and dropped from the to-do list to the done list and vice-versa. You should also be able to drag items from either list into the trash bin to delete them. When an item is being dragged and it is over a valid drop target, the target should be highlighted.

## [Web Workers](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers)

Create a web page with a text input field and a "Calculate" button. When the user enters a number N in the field and clicks the button, it should execute a JavaScript function that generates N random numbers, gets the average of them all (don't ask why), and displays it. If you set the number very high, like over 9000000, you'll find that your browser locks up while the function is executing. This is because all JavaScript in the browser runs on a single thread by default.

Use a web worker to generate the random numbers in a separate thread. You'll need to pass the value from the input field to the worker, and your worker should report progress back to the main script, which should display it on the page (maybe show a dot for every 10000 numbers generated or something). You'll also need to pass back the final average for display.
