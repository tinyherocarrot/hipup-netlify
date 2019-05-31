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
  maskedPath: "/projects"
}, {
  name: "Publications",
  maskedPath: "/publications"
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
    className: "jsx-647709546" + " " + "nav-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, width > 768 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, navLinks.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: link.maskedPath,
      href: "".concat(link.path, "?title=").concat(link.name),
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-647709546",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, link.name));
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleMenuToggle,
    className: "jsx-647709546",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "MENU"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobileNavMenu, {
    menuOpen: menuOpen,
    handleClose: handleMenuToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "647709546",
    __self: this
  }, "a.jsx-647709546{color:black;padding:0.6rem;margin-left:2rem;pointer:cursor;border-bottom:2px solid transparent;-webkit-transition:border-bottom 0.5s;transition:border-bottom 0.5s;}a.jsx-647709546:hover{border-bottom:2px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUt1QixBQVNrQixZQVJmLGVBQ0UsR0FRbkIsY0FQaUIsZUFDcUIsb0NBQ04sb0VBQ2hDIiwiZmlsZSI6Ii9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbmFtZTogXCJQcm9qZWN0c1wiLCBtYXNrZWRQYXRoOiBcIi9wcm9qZWN0c1wiIH0sXG4gIHsgbmFtZTogXCJQdWJsaWNhdGlvbnNcIiwgbWFza2VkUGF0aDogXCIvcHVibGljYXRpb25zXCIgfVxuXVxuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgW21lbnVPcGVuLCB0b2dnbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuICAgIH1cbiAgfSlcbiAgY29uc3QgaGFuZGxlTWVudVRvZ2dsZSA9ICgpID0+IHRvZ2dsZU1lbnVPcGVuKCFtZW51T3BlbilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICB7d2lkdGggPiA3NjggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge25hdkxpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgIDxMaW5rIGFzPXtsaW5rLm1hc2tlZFBhdGh9IGhyZWY9e2Ake2xpbmsucGF0aH0/dGl0bGU9JHtsaW5rLm5hbWV9YH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICA8YT57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTWVudVRvZ2dsZX0+TUVOVTwvYnV0dG9uPlxuICAgICAgICAgIDxNb2JpbGVOYXZNZW51IG1lbnVPcGVuPXttZW51T3Blbn0gaGFuZGxlQ2xvc2U9e2hhbmRsZU1lbnVUb2dnbGV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICBwb2ludGVyOiBjdXJzb3I7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cztcbiAgICAgICAgfSBcblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rc1xuXG5jb25zdCBNb2JpbGVOYXZNZW51ID0gKHsgbWVudU9wZW4sIGhhbmRsZUNsb3NlIH0pID0+IHtcbiAgLy8gRklYTUU6XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25Fc2NQcmVzcyA9IGUgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDVUtERVwiLCBlKVxuICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIGhhbmRsZUNsb3NlKClcbiAgICB9XG4gICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmtleXByZXNzXCIsIGUgPT4gb25Fc2NQcmVzcyhlKSlcbiAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuZG9jdW1lbnQub25rZXlwcmVzcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmtleXByZXNzXCIsIG9uRXNjUHJlc3MpXG4gICAgfVxuICB9KVxuICAvLyBGSVhNRTogbGluayBjbGlja3Mgc2hvdWxkIGNsb3NlIG1lbnUgaWYgYWxyZWFkeSBvbiBzcGVjaWZpZWQgcGFnZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdlwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LWNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICBYXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhJUFVQPC9hPlxuICAgICAgICA8L0xpbms+ICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2bGlua3NcIj5cbiAgICAgICAge25hdkxpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtsaW5rLnBhdGh9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgIDxhPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHRcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUtY2xvc2U6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLW5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke21lbnVPcGVuID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgei1pbmRleDogOTAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLW5hdmxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js */"));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3123264388", [menuOpen ? "flex" : "none"]]]) + " " + "mobile-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleClose,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3123264388", [menuOpen ? "flex" : "none"]]]) + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3123264388", [menuOpen ? "flex" : "none"]]]) + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3123264388", [menuOpen ? "flex" : "none"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "HIPUP"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3123264388", [menuOpen ? "flex" : "none"]]]) + " " + "mobile-navlinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, navLinks.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.path,
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3123264388", [menuOpen ? "flex" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, link.name));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3123264388",
    dynamic: [menuOpen ? "flex" : "none"],
    __self: this
  }, ".menu-close.__jsx-style-dynamic-selector{border:none;background-color:transparent;cursor:pointer;float:right;}.menu-close.__jsx-style-dynamic-selector:hover{opacity:0.6;}.mobile-nav.__jsx-style-dynamic-selector{display:".concat(menuOpen ? "flex" : "none", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:2rem;text-align:center;position:absolute;top:0;left:0;background-color:#737373;color:white;height:100vh;width:100vw;z-index:9000;font-size:1.5rem;}.mobile-navlinks.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZTLEFBR3lCLEFBTUEsQUFHeUIsQUFpQnhCLFlBekJnQixBQU0vQix5QkFHd0IsSUFSUCxlQUVsQixZQUFDLE1BdUJ3Qix5Q0FoQkgscUNBaUJyQix3REFoQnlCLG1HQUNkLFNBQ1Msa0JBQ0Esa0JBQ1osTUFDQyxPQUNrQix5QkFDYixZQUNDLGFBQ0QsWUFDQyxhQUNJLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvdGlueWhlcm9jYXJyb3QvcHJvamVjdHMvaGlwdXAtbmV0bGlmeS9jb21wb25lbnRzL05hdkxpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IG5hdkxpbmtzID0gW1xuICB7IG5hbWU6IFwiUHJvamVjdHNcIiwgbWFza2VkUGF0aDogXCIvcHJvamVjdHNcIiB9LFxuICB7IG5hbWU6IFwiUHVibGljYXRpb25zXCIsIG1hc2tlZFBhdGg6IFwiL3B1YmxpY2F0aW9uc1wiIH1cbl1cblxuY29uc3QgTmF2TGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IFttZW51T3BlbiwgdG9nZ2xlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGgpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4gc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGhhbmRsZU1lbnVUb2dnbGUgPSAoKSA9PiB0b2dnbGVNZW51T3BlbighbWVudU9wZW4pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAge3dpZHRoID4gNzY4ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtuYXZMaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgICA8TGluayBhcz17bGluay5tYXNrZWRQYXRofSBocmVmPXtgJHtsaW5rLnBhdGh9P3RpdGxlPSR7bGluay5uYW1lfWB9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgICAgPGE+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU1lbnVUb2dnbGV9Pk1FTlU8L2J1dHRvbj5cbiAgICAgICAgICA8TW9iaWxlTmF2TWVudSBtZW51T3Blbj17bWVudU9wZW59IGhhbmRsZUNsb3NlPXtoYW5kbGVNZW51VG9nZ2xlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgICAgcG9pbnRlcjogY3Vyc29yO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuNXM7XG4gICAgICAgIH0gXG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua3NcblxuY29uc3QgTW9iaWxlTmF2TWVudSA9ICh7IG1lbnVPcGVuLCBoYW5kbGVDbG9zZSB9KSA9PiB7XG4gIC8vIEZJWE1FOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uRXNjUHJlc3MgPSBlID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1VLREVcIiwgZSlcbiAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSBoYW5kbGVDbG9zZSgpXG4gICAgfVxuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBlID0+IG9uRXNjUHJlc3MoZSkpXG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmRvY3VtZW50Lm9ua2V5cHJlc3MpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBvbkVzY1ByZXNzKVxuICAgIH1cbiAgfSlcbiAgLy8gRklYTUU6IGxpbmsgY2xpY2tzIHNob3VsZCBjbG9zZSBtZW51IGlmIGFscmVhZHkgb24gc3BlY2lmaWVkIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgWFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5ISVBVUDwvYT5cbiAgICAgICAgPC9MaW5rPiAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdmxpbmtzXCI+XG4gICAgICAgIHtuYXZMaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICA8YT57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tZW51LWNsb3NlIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51LWNsb3NlOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXYge1xuICAgICAgICAgICAgZGlzcGxheTogJHttZW51T3BlbiA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMnJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM3MzczO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIHotaW5kZXg6IDkwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1uYXZsaW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js */")));
};

/***/ })

}]);
//# sourceMappingURL=0.js.map