# directional-hover-buttons


[screen-capture.webm](https://github.com/pouyamer/directional-hover-buttons/assets/20505286/a46c3e55-1184-4a2f-87d4-4b980fee1437)

## How to use
Copy `js` and `css` Folder to your project directory and link them in Your Project's html file
### in your app
Here's an example, also check out `demo.js` file.
```
createDirectionalButton(
  {
    active: {
      bgColor: "hsl(180, 85%, 35%)",
      textColor: "black"
    },
    inactive: {
      bgColor: "hsl(180, 85%, 90%)",
      textColor: "black"
    },
    toDirection: "left",
    width: 200,
    height: 60,
    textContent: "Left"
  },
  document.body
)
```

## Configurations
You can edit the `btn-config` file for default btn config, also check out the `demo.js` file for how to use it
