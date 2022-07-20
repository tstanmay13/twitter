"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    secret: process.env.JWT_SECRET,\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session , token  }) {\n            session.user.tag = session.user.name.split(\" \").join(\"\").toLocaleLowerCase();\n            session.user.uid = token.sub;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDZjtBQUV4QyxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0lBRTlCQyxTQUFTLEVBQUUsQ0FBQztRQUNWTixpRUFBYyxDQUFDLENBQUM7WUFDZE8sUUFBUSxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksZ0JBQWdCO1lBQ3RDQyxZQUFZLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxvQkFBb0I7UUFDaEQsQ0FBQztJQUVILENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7Y0FDSkMsT0FBTyxFQUFDLENBQUMsQ0FBQ0EsT0FBTyxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakNELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLEdBQUdILE9BQU8sQ0FBQ0UsSUFBSSxDQUFDRSxJQUFJLENBQ2pDQyxLQUFLLENBQUMsQ0FBRyxJQUNUQyxJQUFJLENBQUMsQ0FBRSxHQUNQQyxpQkFBaUI7WUFFcEJQLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDTSxHQUFHLEdBQUdQLEtBQUssQ0FBQ1EsR0FBRztZQUM1QixNQUFNLENBQUNULE9BQU87UUFDaEIsQ0FBQztJQUNILENBQUM7QUFHSCxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIudGFnID0gc2Vzc2lvbi51c2VyLm5hbWVcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgc2Vzc2lvbi51c2VyLnVpZCA9IHRva2VuLnN1YjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gXG4gXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiZ2V0VG9rZW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInByb3ZpZGVycyIsImNsaWVudElkIiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInRhZyIsIm5hbWUiLCJzcGxpdCIsImpvaW4iLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInVpZCIsInN1YiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();