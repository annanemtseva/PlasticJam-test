// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCkuKpmDoeIWsDfo8gUvvek_WICO8OBxhc',
    authDomain: 'plasticjamtest.firebaseapp.com',
    databaseURL: 'https://plasticjamtest.firebaseio.com',
    projectId: 'plasticjamtest',
    storageBucket: 'plasticjamtest.appspot.com',
    messagingSenderId: '500696883140',
    appId: '1:500696883140:web:36c8d61253e51033838e91',
    measurementId: 'G-SJMS5K6MDT'
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
