// reference: https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd#:~:text=Javascript%20is%20a%20single%20threaded,before%20moving%20onto%20the%20next.&text=The%20call%20stack%20recognizes%20functions,be%20handled%20by%20the%20browser.

/*
Javascript is a single threaded language. 
This means it has one call stack and one memory heap. 
As expected, it executes code 
in order and must finish executing a piece code before moving onto the next. 


It's synchronous, but at times that can be harmful. 
For example, if a function takes awhile to execute or has to wait on something, 
it freezes everything up in the meanwhile.

A good example of this happening is the window alert function. 
alert("Hello World")
You can't interact with the webpage at all 
until you hit OK and dismiss the alert. 
You're stuck.


Well, we can thank the Javascript engine 
(V8, Spidermonkey, JavaScriptCore, etc...) 
for that, which has **Web API** that handle these tasks in the background. 
**The call stack** recognizes functions of the **Web API** and hands them off to be handled by the browser.
Once those tasks are finished by the browser, 
they return and are pushed onto the stack as a callback.

Open your console and type window then press enter. 
You'll see most everything the Web API has to offer.

***This includes things like***
- ajax calls, 
- event listeners, 
- the fetch API, 
- and setTimeout.


Javascript uses low level programming languages like C++ to perform these behind the scenes.
*/

console.log("first");
setTimeout(() => {
  console.log("second");
}, 1000);
console.log("third");

// first
// third
// undefined
// second

/*
Feels odd, right? Well, let's break this down line by line:

console.log("first") is on the stack first, so it gets printed.
 Next, the engine notices **setTimeout**, 
 which isn't handled by Javascript!! and pushes it!!! off to **the WebAPI** to be done asynchronously. 
 The call stack moves on without caring about the code handed off to the Web APIs 
 and console.log("three") is printed.


Next, the Javascript engine's event loop kicks in
like a little kid asking "Are we there yet?" on a road trip.
It starts firing, waiting for events to be pushed into it.

Since the **setTimeout** isn't finished, 
it returns undefined,
as the default, well because it hasn't been given the value yet. 

Once the callback finally does hits we get console.log("second") printed.


Reference: http://latentflip.com/loupe



*/
