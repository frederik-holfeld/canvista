# Canvista

This little experiment uses JavaScript and a canvas to draw some simple images. You can right click the canvas and save the current image as a file (as with any canvas in a web browser) and use the image as a desktop background, for example. Also one can fullscreen the web page and use it as a screensaver.

## To-dos

The code is rather basic at the moment. It could use some work, which may be:

- Better configuration:

  - Add some GUI to the page that can be hidden and which you can control the image generation with. Change the speed, size, density, color, shape and so on via sliders and buttons. Currently changing these options requires commenting out or changing variables in the code.

  - More diversity. Currently there are only circles, maybe add other shapes and particle effects.

- Sound effects. I tested sounds playing whenever a new circle spawns, but took it out as it was kind of annoying and I don't own the sounds. I'm pretty sure something can be done here with the Web Audio API, which I need to look into more. But if that's not a workable solution, maybe there's a way to connect it to a SuperCollider server and get some sound going that way.

- Maybe WebGL? :P
