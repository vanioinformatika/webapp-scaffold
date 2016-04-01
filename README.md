# webapp-scaffold
Spring-Boot, Angular2.js, Bootstrap/Bootswatch, Sass, Webpack alap/keret webalkalmazás

Additional information:

Packages:

[OPTIONAL]concurrently - a utility to run multiple npm commands concurrently on OS/X, Windows, and Linux operating systems.

typescript - the TypeScript language server including the tsc TypeScript compiler.

typings - a manager for TypeScript definition files.

es6-promise - Angular applications require ES2015 promise support. Although some browsers provide a native implementation of ES2015 promises many do not. We still need this library even for the browsers that do support promises in order to integrate with the current version of zone.js (see below). This integration dependency goes away in the next version of zone.js The need for es6-promise should disappear entirely once promises are implemented by all supported ever-green browsers.

es6-shim - monkey patches the global context (window) with essential features of ES2016 (ES6). Developers may substitute an alternative polyfill that provides the same core APIs. This dependency should go away once these APIs are implemented by all supported ever-green browsers.

reflect-metadata - a dependency shared between Angular and the TypeScript compiler. Developers should be able to update a TypeScript package without upgrading Angular, which is why this is a dependency of the application and not a dependency of Angular.

rxjs - a polyfill for the Observables specification currently before the TC39 committee that determines standards for the JavaScript language. Developers should be able to pick a preferred version of rxjs (within a compatible version range) without waiting for Angular updates.

zone.js - a polyfill for the Zone specification currently before the TC39 committee that determines standards for the JavaScript language. Developers should be able to pick a preferred version of zone.js to use (within a compatible version range) without waiting for Angular updates.
