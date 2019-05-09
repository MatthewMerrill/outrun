# outrun
use as a background for streams, websites, or whatever

## Add to OBS
Get a plugin for adding a website as a component.
I don't keep up with the recommended plugins or versions, so do this research on your own.
Once you have such a plugin, just point it at `https://outrun.mattmerr.com`!

## Add to a Website
Add the following html to your page:

```html
<iframe id="outrun" src="https://outrun.mattmerr.com"></iframe>
```

You likely want to use CSS to fix its position and set the zIndex way in the back. Something like:

```css
iframe#outrun {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
  margin: 0;
  padding: 0;
}
```

## Configuring color
Add the color to the hash location parameter! Any of these URLs will work:

 - https://outrun.mattmerr.com/
 - https://outrun.mattmerr.com/#red
 - https://outrun.mattmerr.com/#green
 - https://outrun.mattmerr.com/#rgb(128,64,32)
 - https://outrun.mattmerr.com/##333
 - https://outrun.mattmerr.com/##DEADBEEF
