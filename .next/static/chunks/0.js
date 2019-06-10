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
    className: "jsx-642088756" + " " + "nav-links",
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
      className: "jsx-642088756",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, link.name));
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleMenuToggle,
    className: "jsx-642088756",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "MENU"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobileNavMenu, {
    menuOpen: menuOpen,
    handleClose: handleMenuToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "642088756",
    __self: this
  }, "a.jsx-642088756{color:black;padding:0.6rem;margin-left:2rem;pointer:cursor;border-bottom:2px solid transparent;-webkit-transition:border-bottom 0.5s,color 0.4s;transition:border-bottom 0.5s,color 0.4s;}a.jsx-642088756:hover{border-bottom:2px solid rgba(75,143,204,1);color:rgba(75,143,204,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUd1QixBQVNrQyxZQVIvQixlQUNFLGdCQVFXLENBUGIsZUFDcUIsU0FPdEMsMkJBTjRDLDBGQUM1QyIsImZpbGUiOiIvVXNlcnMvdGlueWhlcm9jYXJyb3QvcHJvamVjdHMvaGlwdXAtbmV0bGlmeS9jb21wb25lbnRzL05hdkxpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IG5hdkxpbmtzID0gW1xuICB7IG5hbWU6IFwiUHJvamVjdHNcIiwgcGF0aDogXCIvcHJvamVjdHNcIiB9LFxuICB7IG5hbWU6IFwiUHVibGljYXRpb25zXCIsIHBhdGg6IFwiL3B1YmxpY2F0aW9uc1wiIH0sXG4gIHsgbmFtZTogXCJDb21tdW5pdHlcIiwgcGF0aDogXCIvY29tbXVuaXR5XCIgfVxuXVxuXG5jb25zdCBOYXZMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgW21lbnVPcGVuLCB0b2dnbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKVxuICAgIH1cbiAgfSlcbiAgY29uc3QgaGFuZGxlTWVudVRvZ2dsZSA9ICgpID0+IHRvZ2dsZU1lbnVPcGVuKCFtZW51T3BlbilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICB7d2lkdGggPiA3NjggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAge25hdkxpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICA8YT57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTWVudVRvZ2dsZX0+TUVOVTwvYnV0dG9uPlxuICAgICAgICAgIDxNb2JpbGVOYXZNZW51IG1lbnVPcGVuPXttZW51T3Blbn0gaGFuZGxlQ2xvc2U9e2hhbmRsZU1lbnVUb2dnbGV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgcGFkZGluZzogMC42cmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgICAgIHBvaW50ZXI6IGN1cnNvcjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjVzLCBjb2xvciAwLjRzO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzUsIDE0MywgMjA0LCAxKTtcbiAgICAgICAgICBjb2xvcjogcmdiYSg3NSwgMTQzLCAyMDQsIDEpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua3NcblxuY29uc3QgTW9iaWxlTmF2TWVudSA9ICh7IG1lbnVPcGVuLCBoYW5kbGVDbG9zZSB9KSA9PiB7XG4gIC8vIEZJWE1FOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9uRXNjUHJlc3MgPSBlID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1VLREVcIiwgZSlcbiAgICAgIGlmIChlLmtleSA9PSBcIkVzY2FwZVwiKSBoYW5kbGVDbG9zZSgpXG4gICAgfVxuICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBlID0+IG9uRXNjUHJlc3MoZSkpXG4gICAgLy8gY29uc29sZS5sb2cod2luZG93LmRvY3VtZW50Lm9ua2V5cHJlc3MpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwib25rZXlwcmVzc1wiLCBvbkVzY1ByZXNzKVxuICAgIH1cbiAgfSlcbiAgLy8gRklYTUU6IGxpbmsgY2xpY2tzIHNob3VsZCBjbG9zZSBtZW51IGlmIGFscmVhZHkgb24gc3BlY2lmaWVkIHBhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgWFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5ISVBVUDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXZsaW5rc1wiPlxuICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucGF0aH0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgPGE+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWVudS1jbG9zZSB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUtY2xvc2U6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLW5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke21lbnVPcGVuID8gXCJmbGV4XCIgOiBcIm5vbmVcIn07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgei1pbmRleDogOTAwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLW5hdmxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js */"));
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
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: handleClose,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "logo",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "HIPUP"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]) + " " + "mobile-navlinks",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4188232095", [menuOpen ? "flex" : "none"]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, link.name));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4188232095",
    dynamic: [menuOpen ? "flex" : "none"],
    __self: this
  }, ".menu-close.__jsx-style-dynamic-selector{border:none;background-color:transparent;cursor:pointer;float:right;}.menu-close.__jsx-style-dynamic-selector:hover{opacity:0.6;}.mobile-nav.__jsx-style-dynamic-selector{display:".concat(menuOpen ? "flex" : "none", ";-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:2rem;text-align:center;position:absolute;top:0;left:0;background-color:#737373;color:white;height:100vh;width:100vw;z-index:9000;font-size:1.5rem;}.mobile-navlinks.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZTLEFBR3lCLEFBTUEsQUFHeUIsQUFpQnhCLFlBekJnQixBQU0vQix5QkFHd0IsSUFSUCxlQUNILFlBQ2QsTUF1QndCLHlDQWhCSCxxQ0FpQnJCLHdEQWhCeUIsbUdBQ2QsU0FDUyxrQkFDQSxrQkFDWixNQUNDLE9BQ2tCLHlCQUNiLFlBQ0MsYUFDRCxZQUNDLGFBQ0ksaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90aW55aGVyb2NhcnJvdC9wcm9qZWN0cy9oaXB1cC1uZXRsaWZ5L2NvbXBvbmVudHMvTmF2TGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbmFtZTogXCJQcm9qZWN0c1wiLCBwYXRoOiBcIi9wcm9qZWN0c1wiIH0sXG4gIHsgbmFtZTogXCJQdWJsaWNhdGlvbnNcIiwgcGF0aDogXCIvcHVibGljYXRpb25zXCIgfSxcbiAgeyBuYW1lOiBcIkNvbW11bml0eVwiLCBwYXRoOiBcIi9jb21tdW5pdHlcIiB9XG5dXG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBbbWVudU9wZW4sIHRvZ2dsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpXG4gICAgfVxuICB9KVxuICBjb25zdCBoYW5kbGVNZW51VG9nZ2xlID0gKCkgPT4gdG9nZ2xlTWVudU9wZW4oIW1lbnVPcGVuKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgIHt3aWR0aCA+IDc2OCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICAgIDxhPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNZW51VG9nZ2xlfT5NRU5VPC9idXR0b24+XG4gICAgICAgICAgPE1vYmlsZU5hdk1lbnUgbWVudU9wZW49e21lbnVPcGVufSBoYW5kbGVDbG9zZT17aGFuZGxlTWVudVRvZ2dsZX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgICAgcG9pbnRlcjogY3Vyc29yO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuNXMsIGNvbG9yIDAuNHM7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSg3NSwgMTQzLCAyMDQsIDEpO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDc1LCAxNDMsIDIwNCwgMSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rc1xuXG5jb25zdCBNb2JpbGVOYXZNZW51ID0gKHsgbWVudU9wZW4sIGhhbmRsZUNsb3NlIH0pID0+IHtcbiAgLy8gRklYTUU6XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25Fc2NQcmVzcyA9IGUgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDVUtERVwiLCBlKVxuICAgICAgaWYgKGUua2V5ID09IFwiRXNjYXBlXCIpIGhhbmRsZUNsb3NlKClcbiAgICB9XG4gICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmtleXByZXNzXCIsIGUgPT4gb25Fc2NQcmVzcyhlKSlcbiAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuZG9jdW1lbnQub25rZXlwcmVzcylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmtleXByZXNzXCIsIG9uRXNjUHJlc3MpXG4gICAgfVxuICB9KVxuICAvLyBGSVhNRTogbGluayBjbGlja3Mgc2hvdWxkIGNsb3NlIG1lbnUgaWYgYWxyZWFkeSBvbiBzcGVjaWZpZWQgcGFnZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdlwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LWNsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICBYXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhJUFVQPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdmxpbmtzXCI+XG4gICAgICAgIHtuYXZMaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICA8YT57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tZW51LWNsb3NlIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudS1jbG9zZTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7bWVudU9wZW4gPyBcImZsZXhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB6LWluZGV4OiA5MDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtbmF2bGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/tinyherocarrot/projects/hipup-netlify/components/NavLinks.js */")));
};

/***/ })

}]);
//# sourceMappingURL=0.js.map