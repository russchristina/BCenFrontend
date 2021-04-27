// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  findAllEvents: 'http://localhost:8000/event/hosted-events',
  saveEvent: 'http://localhost:8000/event/new-event',
  findAllResponsibilities: 'http://localhost:8000/responsibility/existing-responsibilities',
  findAllUsers: 'http://localhost:8000/user/registered-users',
  saveUser: 'http://localhost:8000/user/registration',
  findUser: 'http://localhost:8000/user/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
