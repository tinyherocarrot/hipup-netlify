(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/NavLinks.jsx":
/*!*********************************!*\
  !*** ./components/NavLinks.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.jsx";


 // TODO: move this into a config file

var navLinks = [{
  name: 'Projects',
  path: '/projects'
}, {
  name: 'Publications',
  path: '/publications'
}, {
  name: 'Community',
  path: '/community'
}];

var NavLinks = function NavLinks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      menuOpen = _useState2[0],
      toggleMenuOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(window.innerWidth),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var handleResize = function handleResize() {
      return setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  });

  var handleMenuToggle = function handleMenuToggle() {
    return toggleMenuOpen(!menuOpen);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2258502320" + " " + "nav-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, width > 768 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, navLinks.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-2258502320" + " " + "page-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, link.name));
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleMenuToggle,
    className: "jsx-2258502320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2258502320" + " " + "menu__bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2258502320" + " " + "menu__bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobileNavMenu, {
    menuOpen: menuOpen,
    handleClose: handleMenuToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2258502320",
    __self: this
  }, ".page-link.jsx-2258502320{color:black;padding:0.6rem;margin-left:2rem;pointer:cursor;border-bottom:2px solid transparent;-webkit-transition:border-bottom 0.5s,color 0.4s;transition:border-bottom 0.5s,color 0.4s;}.page-link.jsx-2258502320:hover{border-bottom:2px solid rgba(75,143,204,1);color:rgba(75,143,204,1);}button.jsx-2258502320{border:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:none;}.menu__bar.jsx-2258502320{height:0.2rem;width:1.2rem;background-color:black;margin:0.1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDUyxBQUd1QixBQVNrQyxBQUtsQyxBQU9FLFlBcEJDLEFBY0EsRUFPRixhQXBCSSxBQWNKLEFBT1UsZ0JBYkssQ0FQYixNQXNCbEIsU0FyQnVDLEtBcUJ0QyxJQWRBLDJCQU40QyxNQVlwQiw4RUFDTixNQVpsQixVQWFBIiwiZmlsZSI6Ii9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vLyBUT0RPOiBtb3ZlIHRoaXMgaW50byBhIGNvbmZpZyBmaWxlXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgeyBuYW1lOiAnUHJvamVjdHMnLCBwYXRoOiAnL3Byb2plY3RzJyB9LFxuICB7IG5hbWU6ICdQdWJsaWNhdGlvbnMnLCBwYXRoOiAnL3B1YmxpY2F0aW9ucycgfSxcbiAgeyBuYW1lOiAnQ29tbXVuaXR5JywgcGF0aDogJy9jb21tdW5pdHknIH0sXG5dO1xuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgW21lbnVPcGVuLCB0b2dnbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgaGFuZGxlTWVudVRvZ2dsZSA9ICgpID0+IHRvZ2dsZU1lbnVPcGVuKCFtZW51T3Blbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAge3dpZHRoID4gNzY4ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNZW51VG9nZ2xlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYmFyXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYmFyXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TW9iaWxlTmF2TWVudSBtZW51T3Blbj17bWVudU9wZW59IGhhbmRsZUNsb3NlPXtoYW5kbGVNZW51VG9nZ2xlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgICAgcG9pbnRlcjogY3Vyc29yO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuNXMsIGNvbG9yIDAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZS1saW5rOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSg3NSwgMTQzLCAyMDQsIDEpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDc1LCAxNDMsIDIwNCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24geyBcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51X19iYXIge1xuICAgICAgICAgIGhlaWdodDogMC4ycmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWFyZ2luOiAwLjFyZW1cbiAgICAgICAgfVxuICAgICAgYH1cblxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbmtzO1xuXG5jb25zdCBNb2JpbGVOYXZNZW51ID0gKHsgbWVudU9wZW4sIGhhbmRsZUNsb3NlIH0pID0+IHtcbiAgLy8gRklYTUU6XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25Fc2NQcmVzcyA9IChlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkNVS0RFXCIsIGUpXG4gICAgICBpZiAoZS5rZXkgPT0gJ0VzY2FwZScpIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb25rZXlwcmVzcycsIChlKSA9PiBvbkVzY1ByZXNzKGUpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuZG9jdW1lbnQub25rZXlwcmVzcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ua2V5cHJlc3MnLCBvbkVzY1ByZXNzKTtcbiAgICB9O1xuICB9KTtcbiAgLy8gRklYTUU6IGxpbmsgY2xpY2tzIHNob3VsZCBjbG9zZSBtZW51IGlmIGFscmVhZHkgb24gc3BlY2lmaWVkIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgWFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5ISVBVUDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZsaW5rc1wiPlxuICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWVudS1jbG9zZSB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudS1jbG9zZTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7bWVudU9wZW4gPyAnZmxleCcgOiAnbm9uZSd9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMnJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXZsaW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

var MobileNavMenu = function MobileNavMenu(_ref) {
  var menuOpen = _ref.menuOpen,
      handleClose = _ref.handleClose; // FIXME:

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var onEscPress = function onEscPress(e) {
      // console.log("CUKDE", e)
      if (e.key == 'Escape') handleClose();
    };

    window.document.addEventListener('onkeypress', function (e) {
      return onEscPress(e);
    }); // console.log(window.document.onkeypress)

    return function () {
      window.document.removeEventListener('onkeypress', onEscPress);
    };
  }); // FIXME: link clicks should close menu if already on specified page

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1098750377", [menuOpen ? 'flex' : 'none']]]) + " " + "mobile-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleClose,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1098750377", [menuOpen ? 'flex' : 'none']]]) + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1098750377", [menuOpen ? 'flex' : 'none']]]) + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1098750377", [menuOpen ? 'flex' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "HIPUP"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1098750377", [menuOpen ? 'flex' : 'none']]]) + " " + "mobile-navlinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, navLinks.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      onClick: handleClose,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1098750377", [menuOpen ? 'flex' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, link.name));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1098750377",
    dynamic: [menuOpen ? 'flex' : 'none'],
    __self: this
  }, ".menu-close.__jsx-style-dynamic-selector{border:none;background-color:transparent;cursor:pointer;float:right;font-size:1.2rem;}.menu-close.__jsx-style-dynamic-selector:hover{opacity:0.6;}.mobile-nav.__jsx-style-dynamic-selector{display:".concat(menuOpen ? 'flex' : 'none', ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:2rem;text-align:center;position:absolute;top:0;left:0;background-color:#737373;color:white;height:100vh;width:100vw;z-index:9000;font-size:1.5rem;}.mobile-navlinks.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIUyxBQUd5QixBQU9BLEFBR3lCLEFBaUJ4QixZQTFCZ0IsQUFPL0IseUJBR3dCLElBVFAsZUFDSCxZQUNLLE1Bd0JLLFdBdkJ4Qiw4QkFPcUIscUNBaUJyQix3REFoQnlCLG1HQUNkLFNBQ1Msa0JBQ0Esa0JBQ1osTUFDQyxPQUNrQix5QkFDYixZQUNDLGFBQ0QsWUFDQyxhQUNJLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvdGlueWhlcm9jYXJyb3QvcHJvamVjdHMvaGlwdXAtbmV0bGlmeS9jb21wb25lbnRzL05hdkxpbmtzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gVE9ETzogbW92ZSB0aGlzIGludG8gYSBjb25maWcgZmlsZVxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbmFtZTogJ1Byb2plY3RzJywgcGF0aDogJy9wcm9qZWN0cycgfSxcbiAgeyBuYW1lOiAnUHVibGljYXRpb25zJywgcGF0aDogJy9wdWJsaWNhdGlvbnMnIH0sXG4gIHsgbmFtZTogJ0NvbW11bml0eScsIHBhdGg6ICcvY29tbXVuaXR5JyB9LFxuXTtcblxuY29uc3QgTmF2TGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51T3BlbiwgdG9nZ2xlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZU1lbnVUb2dnbGUgPSAoKSA9PiB0b2dnbGVNZW51T3BlbighbWVudU9wZW4pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgIHt3aWR0aCA+IDc2OCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLnBhdGh9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTWVudVRvZ2dsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JhclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JhclwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPE1vYmlsZU5hdk1lbnUgbWVudU9wZW49e21lbnVPcGVufSBoYW5kbGVDbG9zZT17aGFuZGxlTWVudVRvZ2dsZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgcGFkZGluZzogMC42cmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICAgIHBvaW50ZXI6IGN1cnNvcjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjVzLCBjb2xvciAwLjRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhZ2UtbGluazpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzUsIDE0MywgMjA0LCAxKTtcbiAgICAgICAgICBjb2xvcjogcmdiYSg3NSwgMTQzLCAyMDQsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHsgXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9fYmFyIHtcbiAgICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcbiAgICAgICAgICB3aWR0aDogMS4ycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIG1hcmdpbjogMC4xcmVtXG4gICAgICAgIH1cbiAgICAgIGB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rcztcblxuY29uc3QgTW9iaWxlTmF2TWVudSA9ICh7IG1lbnVPcGVuLCBoYW5kbGVDbG9zZSB9KSA9PiB7XG4gIC8vIEZJWE1FOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uRXNjUHJlc3MgPSAoZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDVUtERVwiLCBlKVxuICAgICAgaWYgKGUua2V5ID09ICdFc2NhcGUnKSBoYW5kbGVDbG9zZSgpO1xuICAgIH07XG4gICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29ua2V5cHJlc3MnLCAoZSkgPT4gb25Fc2NQcmVzcyhlKSk7XG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmRvY3VtZW50Lm9ua2V5cHJlc3MpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmtleXByZXNzJywgb25Fc2NQcmVzcyk7XG4gICAgfTtcbiAgfSk7XG4gIC8vIEZJWE1FOiBsaW5rIGNsaWNrcyBzaG91bGQgY2xvc2UgbWVudSBpZiBhbHJlYWR5IG9uIHNwZWNpZmllZCBwYWdlXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lbnUtY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIFhcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SElQVVA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2bGlua3NcIj5cbiAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xvc2V9PntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUtY2xvc2U6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLW5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke21lbnVPcGVuID8gJ2ZsZXgnIDogJ25vbmUnfTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtbmF2bGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.jsx */")));
};

/***/ })

}]);
//# sourceMappingURL=0.js.map