/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/accordion/accordion.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/accordion/accordion.js ***!
  \******************************************************/
/***/ (function() {

var accordion = document.querySelector(".accordion"),
  accordionHeading = document.querySelectorAll(".accordion__heading"),
  accordionIcon = document.querySelectorAll(".accordion__icon"),
  accordionContent = document.querySelectorAll(".accordion__content");
if (accordion) {
  accordionForEach();
  window.addEventListener("resize", function () {
    return resizeContent();
  });
}
function accordionForEach() {
  accordionHeading.forEach(function (header, i) {
    header.addEventListener("click", function () {
      accordionBasic(i, accordionHeading, accordionIcon, accordionContent, "accordion__heading--active", "accordion__icon--active", "accordion__content--active");
    });
  });
}
function accordionSetTimeot(item, value) {
  setTimeout(function () {
    item.style.display = value;
  }, 1000);
}
function accordionBasic(i, heading, icon, content, headingActive, iconActive, contentActive) {
  if (!heading[i].classList.contains(headingActive)) {
    content.forEach(function (item) {
      item.classList.remove(contentActive);
      item.style.maxHeight = "";
      accordionSetTimeot(item, "");
    });
    content.forEach(function (item) {
      item.classList.remove(contentActive);
      item.style.maxHeight = "";
    });
    icon.forEach(function (item) {
      item.classList.remove(iconActive);
    });
    heading.forEach(function (item) {
      item.classList.remove(headingActive);
    });
    heading[i].classList.add(headingActive);
    icon[i].classList.add(iconActive);
    content[i].classList.add(contentActive);
    accordionSetTimeot(content[i], "block");
    content[i].style.display = "block";
    content[i].style.maxHeight = "".concat(content[i].scrollHeight, "px");
  } else {
    icon[i].classList.remove(iconActive);
    content[i].style.maxHeight = "";
    accordionSetTimeot(content[i], "");
    content[i].classList.remove(contentActive);
    heading[i].classList.remove(headingActive);
  }
}
function resizeContent() {
  var accordionContentActive = document.querySelector(".accordion__content--active");
  if (accordionContentActive && parseInt(accordionContentActive.style.maxHeight) !== accordionContentActive.scrollHeight) {
    accordionContentActive.style.maxHeight = "".concat(accordionContentActive.scrollHeight, "px");
  }
}

/***/ }),

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function() {

var burger = document.querySelector(".burger"),
  headerMenu = document.querySelector(".header-menu"),
  burgerInner = burger.querySelector(".burger__inner"),
  menuItem = document.querySelectorAll(".header-menu__item");
// dropDown = document.querySelector(".dropdown"),
// dropItems = document.querySelector(".dropdown__items"),
// dropItem = document.querySelectorAll(".dropdown__item");

function overflowMenu() {
  if (burgerInner.classList.contains("burger__inner--active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}
function removeMenuActive() {
  burgerInner.classList.remove("burger__inner--active");
  headerMenu.classList.remove("header-menu--active");
  overflowMenu();
}
burger.addEventListener("click", function () {
  headerMenu.classList.toggle("header-menu--active");
  burgerInner.classList.toggle("burger__inner--active");
  // dropDown.classList.add("dropdown-burger");
  overflowMenu();
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Escape" && burgerInner.classList.contains("burger__inner--active")) {
    removeMenuActive();
  }
});
menuItem.forEach(function (item, i) {
  item.addEventListener("click", function () {
    if (!menuItem[i].querySelector(".dropdown")) {
      removeMenuActive();
    }
  });
});

// function dropdownInBurger(dropdownItem, dropDownItems) {
//     dropdownItem.forEach((item) => {
//         item.addEventListener("click", () => {
//             removeMenuActive();
//             dropDownItems.style.display = "none";
//         });
//     });
// }
//
// dropdownInBurger(dropItem, dropItems);

/***/ }),

/***/ "./src/blocks/components/img/img.js":
/*!******************************************!*\
  !*** ./src/blocks/components/img/img.js ***!
  \******************************************/
/***/ (function() {

var imageObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.target.dataset.src !== undefined) {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.alt = entry.target.dataset.alt;
        imageObserver.unobserve(entry.target);
      }
    }
  });
});
var images = document.querySelectorAll("img").forEach(function (image) {
  return imageObserver.observe(image);
});

/***/ }),

/***/ "./src/blocks/components/slider/slider.js":
/*!************************************************!*\
  !*** ./src/blocks/components/slider/slider.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var sliderOrdinary = document.querySelector(".slider");
var sliderWithScrollbar = document.querySelector(".slide-beyond");
if (sliderOrdinary !== undefined || sliderWithScrollbar !== undefined) {
  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay],
    pagination: {
      el: ".slider-pagination.swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".slider-button-next.swiper-button-next",
      prevEl: ".slider-button-prev.swiper-button-prev"
    }
    // mousewheel: {
    //     invert: true,
    // },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //         slidesPerView: 4,
    //         spaceBetween: 40
    //     }
    // }
  });

  var slideBeyond = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slide-beyond.swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    // Disable preloading of all images
    preloadImages: false,
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar],
    scrollbar: {
      el: ".slide-beyond-scrollbar.swiper-scrollbar",
      // hide: true,
      draggable: true
    },
    breakpoints: {
      250: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1300: {
        slidesPerView: 4
      }
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/action-btns/action-btns.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/action-btns/action-btns.js ***!
  \*******************************************************/
/***/ (function() {

var btnUp = document.querySelector(".action-btns-up");
if (btnUp) {
  btnUpOffset();
}
function btnUpOffset() {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 400) {
      btnUp.style.display = "block";
      btnUp.style.opacity = "1";
    } else {
      btnUp.style.opacity = "";
      btnUp.style.display = "";
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 10) {
    header.style.background = "#fff";
  } else {
    header.style.background = "";
  }
});

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/photos/photos.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/photos/photos.js ***!
  \*********************************************/
/***/ (function() {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var infinitePhotos = document.querySelector(".photos");
if (infinitePhotos) {
  var container = document.querySelector(".photos");
  var nextPage = 2;
  var infiniteObserver = new IntersectionObserver(function (_ref, observer) {
    var _ref2 = _slicedToArray(_ref, 1),
      entry = _ref2[0];
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      loadPosts(nextPage++);
    }
  }, {
    threshold: 0
  });
  var loadPosts = function loadPosts() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    fetch("https://my-json-server.typicode.com/koniduniRepo/horses/horses?_limit=4&_page=".concat(page)).then(function (res) {
      return res.json();
    }).then(function (posts) {
      posts.forEach(function (post) {
        var card = document.createElement("div");
        card.className = "photos-card";
        card.innerHTML = "\n                    <img src=\"".concat(post.url, "\" alt=\"").concat(post.alt, "\">\n                    <p>").concat(post.title, "</p>\n                ");
        container.append(card);
      });

      // TODO observer logic
      var lastCard = document.querySelector(".photos-card:last-child");
      if (lastCard) {
        infiniteObserver.observe(lastCard);
      }
    }).catch(console.error);
  };
  loadPosts();
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/img/img */ "./src/blocks/components/img/img.js");
/* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_img_img__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/slider/slider */ "./src/blocks/components/slider/slider.js");
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/accordion/accordion */ "./src/blocks/components/accordion/accordion.js");
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__);
//! Basic




//! Other




/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_photos_photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/photos/photos */ "./src/blocks/modules/photos/photos.js");
/* harmony import */ var _modules_photos_photos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_photos_photos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/action-btns/action-btns */ "./src/blocks/modules/action-btns/action-btns.js");
/* harmony import */ var _modules_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map