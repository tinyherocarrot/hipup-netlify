(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/NavLinks.js":
/*!********************************!*\
  !*** ./components/NavLinks.js ***!
  \********************************/
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

var _jsxFileName = "/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js";



var navLinks = [{
  name: "Projects",
  path: "/projects"
}, {
  name: "Publications",
  path: "/publications"
}, {
  name: "Community",
  path: "/community"
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

    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  });

  var handleMenuToggle = function handleMenuToggle() {
    return toggleMenuOpen(!menuOpen);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2258502320" + " " + "nav-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, width > 768 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, navLinks.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-2258502320" + " " + "page-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, link.name));
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleMenuToggle,
    className: "jsx-2258502320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2258502320" + " " + "menu__bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2258502320" + " " + "menu__bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobileNavMenu, {
    menuOpen: menuOpen,
    handleClose: handleMenuToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2258502320",
    __self: this
  }, ".page-link.jsx-2258502320{color:black;padding:0.6rem;margin-left:2rem;pointer:cursor;border-bottom:2px solid transparent;-webkit-transition:border-bottom 0.5s,color 0.4s;transition:border-bottom 0.5s,color 0.4s;}.page-link.jsx-2258502320:hover{border-bottom:2px solid rgba(75,143,204,1);color:rgba(75,143,204,1);}button.jsx-2258502320{border:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:none;}.menu__bar.jsx-2258502320{height:0.2rem;width:1.2rem;background-color:black;margin:0.1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUd1QixBQVNrQyxBQUtsQyxBQU9FLFlBcEJDLEFBY0EsRUFPRixhQXBCSSxBQWNKLEFBT1UsZ0JBYkssQ0FQYixNQXNCbEIsU0FyQnVDLEtBcUJ0QyxJQWRBLDJCQU40QyxNQVlwQiw4RUFDTixNQVpsQixVQWFBIiwiZmlsZSI6Ii9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbmFtZTogXCJQcm9qZWN0c1wiLCBwYXRoOiBcIi9wcm9qZWN0c1wiIH0sXG4gIHsgbmFtZTogXCJQdWJsaWNhdGlvbnNcIiwgcGF0aDogXCIvcHVibGljYXRpb25zXCIgfSxcbiAgeyBuYW1lOiBcIkNvbW11bml0eVwiLCBwYXRoOiBcIi9jb21tdW5pdHlcIiB9XG5dXG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBbbWVudU9wZW4sIHRvZ2dsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICB9KVxuICBjb25zdCBoYW5kbGVNZW51VG9nZ2xlID0gKCkgPT4gdG9nZ2xlTWVudU9wZW4oIW1lbnVPcGVuKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgIHt3aWR0aCA+IDc2OCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNZW51VG9nZ2xlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JhclwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JhclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TW9iaWxlTmF2TWVudSBtZW51T3Blbj17bWVudU9wZW59IGhhbmRsZUNsb3NlPXtoYW5kbGVNZW51VG9nZ2xlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICBwb2ludGVyOiBjdXJzb3I7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cywgY29sb3IgMC40cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlLWxpbms6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDc1LCAxNDMsIDIwNCwgMSk7XG4gICAgICAgICAgY29sb3I6IHJnYmEoNzUsIDE0MywgMjA0LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7IFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVfX2JhciB7XG4gICAgICAgICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBtYXJnaW46IDAuMXJlbVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua3NcblxuY29uc3QgTW9iaWxlTmF2TWVudSA9ICh7IG1lbnVPcGVuLCBoYW5kbGVDbG9zZSB9KSA9PiB7XG4gIC8vIEZJWE1FOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uRXNjUHJlc3MgPSBlID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1VLREVcIiwgZSlcbiAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSBoYW5kbGVDbG9zZSgpXG4gICAgfVxuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBlID0+IG9uRXNjUHJlc3MoZSkpXG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmRvY3VtZW50Lm9ua2V5cHJlc3MpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBvbkVzY1ByZXNzKVxuICAgIH1cbiAgfSlcbiAgLy8gRklYTUU6IGxpbmsgY2xpY2tzIHNob3VsZCBjbG9zZSBtZW51IGlmIGFscmVhZHkgb24gc3BlY2lmaWVkIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgWFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5ISVBVUDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZsaW5rc1wiPlxuICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xvc2V9PntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51LWNsb3NlOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXYge1xuICAgICAgICAgICAgZGlzcGxheTogJHttZW51T3BlbiA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMnJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXZsaW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

var MobileNavMenu = function MobileNavMenu(_ref) {
  var menuOpen = _ref.menuOpen,
      handleClose = _ref.handleClose;
  // FIXME:
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var onEscPress = function onEscPress(e) {
      // console.log("CUKDE", e)
      if (e.key == "Escape") handleClose();
    };

    window.document.addEventListener("onkeypress", function (e) {
      return onEscPress(e);
    }); // console.log(window.document.onkeypress)

    return function () {
      window.document.removeEventListener("onkeypress", onEscPress);
    };
  }); // FIXME: link clicks should close menu if already on specified page

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "mobile-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleClose,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "HIPUP"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "mobile-navlinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, navLinks.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      onClick: handleClose,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, link.name));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4188232095",
    dynamic: [menuOpen ? "flex" : "none"],
    __self: this
  }, ".menu-close.__jsx-style-dynamic-selector{border:none;background-color:transparent;cursor:pointer;float:right;}.menu-close.__jsx-style-dynamic-selector:hover{opacity:0.6;}.mobile-nav.__jsx-style-dynamic-selector{display:".concat(menuOpen ? "flex" : "none", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:2rem;text-align:center;position:absolute;top:0;left:0;background-color:#737373;color:white;height:100vh;width:100vw;z-index:9000;font-size:1.5rem;}.mobile-navlinks.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEdTLEFBR3lCLEFBTUEsQUFHeUIsQUFpQnhCLFlBekJnQixBQU0vQix5QkFHd0IsSUFSUCxlQUNILFlBQ2QsTUF1QndCLHlDQWhCSCxxQ0FpQnJCLHdEQWhCeUIsbUdBQ2QsU0FDUyxrQkFDQSxrQkFDWixNQUNDLE9BQ2tCLHlCQUNiLFlBQ0MsYUFDRCxZQUNDLGFBQ0ksaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbmFtZTogXCJQcm9qZWN0c1wiLCBwYXRoOiBcIi9wcm9qZWN0c1wiIH0sXG4gIHsgbmFtZTogXCJQdWJsaWNhdGlvbnNcIiwgcGF0aDogXCIvcHVibGljYXRpb25zXCIgfSxcbiAgeyBuYW1lOiBcIkNvbW11bml0eVwiLCBwYXRoOiBcIi9jb21tdW5pdHlcIiB9XG5dXG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBbbWVudU9wZW4sIHRvZ2dsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICB9KVxuICBjb25zdCBoYW5kbGVNZW51VG9nZ2xlID0gKCkgPT4gdG9nZ2xlTWVudU9wZW4oIW1lbnVPcGVuKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgIHt3aWR0aCA+IDc2OCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNZW51VG9nZ2xlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JhclwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JhclwiLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TW9iaWxlTmF2TWVudSBtZW51T3Blbj17bWVudU9wZW59IGhhbmRsZUNsb3NlPXtoYW5kbGVNZW51VG9nZ2xlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICBwb2ludGVyOiBjdXJzb3I7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cywgY29sb3IgMC40cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlLWxpbms6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDc1LCAxNDMsIDIwNCwgMSk7XG4gICAgICAgICAgY29sb3I6IHJnYmEoNzUsIDE0MywgMjA0LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7IFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnVfX2JhciB7XG4gICAgICAgICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBtYXJnaW46IDAuMXJlbVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua3NcblxuY29uc3QgTW9iaWxlTmF2TWVudSA9ICh7IG1lbnVPcGVuLCBoYW5kbGVDbG9zZSB9KSA9PiB7XG4gIC8vIEZJWE1FOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uRXNjUHJlc3MgPSBlID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1VLREVcIiwgZSlcbiAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSBoYW5kbGVDbG9zZSgpXG4gICAgfVxuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBlID0+IG9uRXNjUHJlc3MoZSkpXG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmRvY3VtZW50Lm9ua2V5cHJlc3MpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBvbkVzY1ByZXNzKVxuICAgIH1cbiAgfSlcbiAgLy8gRklYTUU6IGxpbmsgY2xpY2tzIHNob3VsZCBjbG9zZSBtZW51IGlmIGFscmVhZHkgb24gc3BlY2lmaWVkIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgWFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5ISVBVUDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZsaW5rc1wiPlxuICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xvc2V9PntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51LWNsb3NlOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXYge1xuICAgICAgICAgICAgZGlzcGxheTogJHttZW51T3BlbiA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMnJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXZsaW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js */")));
};

/***/ })

}]);
//# sourceMappingURL=0.js.map