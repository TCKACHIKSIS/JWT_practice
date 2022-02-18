webpackHotUpdate("app",{

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.vue */ \"./src/App.vue\");\n\n\n\nvar store = Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: {\n    accessToken: null,\n    refreshToken: null\n  },\n  mutations: {\n    updateStorage: function updateStorage(state, _ref) {\n      var access = _ref.access,\n          refresh = _ref.refresh;\n      state.accessToken = access;\n      state.refreshToken = refresh;\n    }\n  },\n  actions: {},\n  modules: {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\nvar app = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createApp\"])({\n  rootApp: _App_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\napp.use(store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHM/MDYxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgcm9vdEFwcCBmcm9tICcuLi9BcHAudnVlJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgc3RhdGU6IHtcbiAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICByZWZyZXNoVG9rZW46IG51bGwsXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHVwZGF0ZVN0b3JhZ2Uoc3RhdGUsIHsgYWNjZXNzLCByZWZyZXNoIH0pe1xuICAgICAgICBzdGF0ZS5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1xuICAgICAgICBzdGF0ZS5yZWZyZXNoVG9rZW4gPSByZWZyZXNoXG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHVzZXJMb2dpbiggY29udGV4dCApXG4gIH0sXG4gIG1vZHVsZXM6IHtcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoeyByb290QXBwIH0pXG5hcHAudXNlKHN0b3JlKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBR0E7QUFkQTtBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/index.ts\n");

/***/ })

})