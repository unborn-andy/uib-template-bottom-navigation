## Node-Red Uibuilder vue-bottom-navigation

This is an external template for **node-red-contrib-uibuilder**.<br>

![image](https://user-images.githubusercontent.com/93290787/152658931-e7fa3823-db9d-425b-8e12-74c0144c663a.png)


Each page is a seperate .vue component file (Single File Component) that loads in the parent **App.vue**<br>. We use a SFC for each page to seperate and make the design cleaner with its own code and functionality.<br>

Because we are using .vue files and modern javascript syntax in our application, we'll need a bundler to build/translate that code into plain javascript so the browser can understand. In this project we use **Parcel**.

You dont have to worry about installing or configuring anything with parcel, it gets installed when you run `npm install` as it is in `package.json` devDependencies, along with two script commands `npm run build` to build your app and `npm run watch` to build and continue watching for any file changes, which makes re-building much faster during development.

Enough with the intro .. lets get coding.

## How to install

1. Configure a uibuilder node on your Node-Red flow with the URL set to e.g. : `test` 
2. In Template Settings, select `Load an external template using Degit` and load the template from<br> `unborn-andy/uib-template-BottomNavigation`
3. In Advanced settings, set it to serve files from the `/dist` folder.
4. From `~/.node-red/uibuilder/test` run `npm install` to install all the dependencies of the app based on the package.json file.
5. Run `npm run build` so parcel will build the app into the `/dist` folder.
6. Browse to `http://<nodered-ip>:1880/test`

## Configuration

1. In `index.html` change the IP of to match your Node-red server's IP<br> `<script src="http://192.168.0.7:1880/uibuilder/vendor/socket.io/socket.io.js"></script>`
2. During the installation steps I used as an example the uibuilder url `navbar`.<br>
If you used something else more appropriate for your project, then you have to make two changes for the navigation to work.<br> 
in `index.js` change `uibuilder.start('/test', '/uibuilder/vendor/socket.io')`  
3. After any change, rebuild the app using `npm run build`
