/**
 *   -__________________
 *    initial setup
 *   --_____________________
 * 1.visit:console.firebase.google.com
 * 2.create project (skip google analytic)
 * 3.Register app (create a config)
 * 4.install firebase:npm install firebase
 * 5.add config file to my project
 * 6.DANGER:Do not publish or make  firebase config to public by pushing those to github
 *       --_______________
 *       Integration
 *       --_____________-
 * 7.visit:Go to Docs > Build > Authentication > web > Get started
 * 8.export  app form the firebase.config.js file: export default app
 * 9.Login.jsx: import getAuth form the firebase/auth
 * 10.Create const auth(app)
 *         --______________
 *         Provider setup
 *         --___________
 * 11.import google provider  and create new provider
 * 12.use  signInWithPopup and pass auth and provider
 * 13.activate signIn method (google,facebook,github,etc)
 * 14.[vite]:change 127.0.0.1 to localhost
 * __________
 * more auth provider
 * ___________-
 * 15.active the auth provider (create app, provide redirect url, client id, client secret)
 */