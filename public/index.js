/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/AudioPlayer.ts":
/*!****************************!*\
  !*** ./app/AudioPlayer.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst PlayControl_1 = __webpack_require__(/*! ./PlayControl */ \"./app/PlayControl.ts\");\r\nconst VolumeControl_1 = __webpack_require__(/*! ./VolumeControl */ \"./app/VolumeControl.ts\");\r\nconst Playlist_1 = __webpack_require__(/*! ./Playlist */ \"./app/Playlist.ts\");\r\nconst FavoriteBtn_1 = __webpack_require__(/*! ./FavoriteBtn */ \"./app/FavoriteBtn.ts\");\r\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./app/constants.ts\");\r\nclass AudioPlayer {\r\n    constructor($root) {\r\n        this.$root = $root;\r\n        this.$elem = document.createElement('div');\r\n        this.$nextBtn = document.createElement('i');\r\n        this.$previousBtn = document.createElement('i');\r\n        this.$audio = document.createElement('audio');\r\n        this.$trackName = document.createElement('div');\r\n        this.$elem.classList.add('audio-player');\r\n        let logo = document.createElement('div');\r\n        logo.classList.add('player-logo');\r\n        this.$elem.appendChild(logo);\r\n        let panel = document.createElement('div');\r\n        panel.classList.add('logo-panel');\r\n        logo.appendChild(panel);\r\n        this.$trackName.classList.add('track-name');\r\n        this.$elem.appendChild(this.$trackName);\r\n        this.$nextBtn.classList.add('icon', 'next-btn', 'fas', 'fa-fast-forward');\r\n        this.$previousBtn.classList.add('icon', 'previous-btn', 'fas', 'fa-fast-backward');\r\n        // Play Prev Next\r\n        let songControls = document.createElement('span');\r\n        songControls.classList.add('song-controls');\r\n        this.playControlBtn = new PlayControl_1.PlayControl(songControls, this.togglePlay.bind(this));\r\n        songControls.appendChild(this.$previousBtn);\r\n        songControls.appendChild(this.$nextBtn);\r\n        let allControls = document.createElement('div');\r\n        allControls.classList.add('audio-controls');\r\n        this.favoriteBtn = new FavoriteBtn_1.Favorite(allControls);\r\n        allControls.appendChild(songControls);\r\n        this.volumeControl = new VolumeControl_1.VolumeControl(allControls, this.handleVolumeChange.bind(this));\r\n        this.$elem.appendChild(allControls);\r\n        this.playlist = new Playlist_1.Playlist();\r\n        this.$audio.volume = constants_1.INITIAL_VOLUME_VALUE;\r\n        this.$audio.src = this.playlist.currentTrack.src;\r\n        this.$trackName.innerHTML = this.playlist.currentTrack.title;\r\n        this.$root.appendChild(this.$audio);\r\n        this.$root.appendChild(this.$elem);\r\n        this.$audio.addEventListener('ended', this.playNext.bind(this));\r\n        this.$nextBtn.addEventListener('click', this.playNext.bind(this));\r\n        this.$previousBtn.addEventListener('click', this.playPrevious.bind(this));\r\n    }\r\n    reloadTrack() {\r\n        this.$audio.load();\r\n        this.$audio.play();\r\n        this.playControlBtn.toggleControlIcon(this.$audio.paused);\r\n    }\r\n    playPrevious() {\r\n        const prevTrack = this.playlist.prevTrack;\r\n        this.setAudioSrc(prevTrack.src);\r\n        this.setTrackTitle(prevTrack.title);\r\n        this.reloadTrack();\r\n    }\r\n    playNext() {\r\n        const nextTrack = this.playlist.nextTrack;\r\n        this.setAudioSrc(nextTrack.src);\r\n        this.setTrackTitle(nextTrack.title);\r\n        this.reloadTrack();\r\n    }\r\n    togglePlay() {\r\n        this.$audio.paused ? this.$audio.play() : this.$audio.pause();\r\n        this.playControlBtn.toggleControlIcon(this.$audio.paused);\r\n    }\r\n    setTrackTitle(title) {\r\n        this.$trackName.innerHTML = title;\r\n    }\r\n    setAudioSrc(src) {\r\n        this.$audio.src = src;\r\n    }\r\n    handleVolumeChange(volumeValue) {\r\n        this.$audio.volume = parseFloat(volumeValue);\r\n    }\r\n}\r\nexports.AudioPlayer = AudioPlayer;\r\n\n\n//# sourceURL=webpack:///./app/AudioPlayer.ts?");

/***/ }),

/***/ "./app/FavoriteBtn.ts":
/*!****************************!*\
  !*** ./app/FavoriteBtn.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Tooltip_1 = __webpack_require__(/*! ./Tooltip */ \"./app/Tooltip.ts\");\r\nclass Favorite {\r\n    constructor($root) {\r\n        this.$root = $root;\r\n        this.$elem = document.createElement('span');\r\n        this.$icon = document.createElement('i');\r\n        this.$elem.classList.add('favorite-wrapper');\r\n        this.$icon.classList.add('icon', 'fas', 'fa-heart');\r\n        this.tooltip = new Tooltip_1.Tooltip(this.$elem, 'Favorited');\r\n        this.$elem.appendChild(this.$icon);\r\n        this.$root.appendChild(this.$elem);\r\n    }\r\n}\r\nexports.Favorite = Favorite;\r\n\n\n//# sourceURL=webpack:///./app/FavoriteBtn.ts?");

/***/ }),

/***/ "./app/PlayControl.ts":
/*!****************************!*\
  !*** ./app/PlayControl.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst playClassName = 'fa-play';\r\nconst pauseClassName = 'fa-pause';\r\nclass PlayControl {\r\n    constructor($root, onTogglePlayCallback) {\r\n        this.$root = $root;\r\n        this.$icon = document.createElement('i');\r\n        this.$icon.classList.add('play-control', 'icon', 'fas', playClassName);\r\n        this.$root.appendChild(this.$icon);\r\n        this.$icon.addEventListener('click', () => {\r\n            onTogglePlayCallback();\r\n        });\r\n    }\r\n    toggleControlIcon(isPaused) {\r\n        isPaused ? this.setPlayIcon() : this.setPauseIcon();\r\n    }\r\n    setPauseIcon() {\r\n        this.$icon.classList.remove(playClassName);\r\n        this.$icon.classList.add(pauseClassName);\r\n    }\r\n    setPlayIcon() {\r\n        this.$icon.classList.remove(pauseClassName);\r\n        this.$icon.classList.add(playClassName);\r\n    }\r\n}\r\nexports.PlayControl = PlayControl;\r\n\n\n//# sourceURL=webpack:///./app/PlayControl.ts?");

/***/ }),

/***/ "./app/Playlist.ts":
/*!*************************!*\
  !*** ./app/Playlist.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Playlist {\r\n    constructor() {\r\n        this.playlist = [\r\n            {\r\n                src: 'assets/audio/the_beatles_come_together_cover.mp3',\r\n                title: 'The Beatles - Come Together',\r\n            },\r\n            {\r\n                src: 'assets/audio/pink_floyd_learning_to_fly.mp3',\r\n                title: 'Pink Floyd - Learning To Fly',\r\n            },\r\n            {\r\n                src: 'assets/audio/the_beatles_love_me_do_cover.mp3',\r\n                title: 'The Beatles - Love Me Do',\r\n            },\r\n        ];\r\n        this.currentTrackIndex = 0;\r\n    }\r\n    get currentTrack() {\r\n        return this.playlist[this.currentTrackIndex];\r\n    }\r\n    get nextTrack() {\r\n        this.currentTrackIndex = ++this.currentTrackIndex % this.playlist.length;\r\n        return this.currentTrack;\r\n    }\r\n    get prevTrack() {\r\n        this.currentTrackIndex = this.currentTrackIndex === 0\r\n            ? this.playlist.length - 1\r\n            : --this.currentTrackIndex % this.playlist.length;\r\n        return this.currentTrack;\r\n    }\r\n}\r\nexports.Playlist = Playlist;\r\n\n\n//# sourceURL=webpack:///./app/Playlist.ts?");

/***/ }),

/***/ "./app/Tooltip.ts":
/*!************************!*\
  !*** ./app/Tooltip.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Tooltip {\r\n    constructor($root, initialText) {\r\n        this.$root = $root;\r\n        this.$tooltip = document.createElement('div');\r\n        this.$tooltip.classList.add('tooltip');\r\n        this.$tooltip.innerHTML = initialText || '87%';\r\n        this.$root.appendChild(this.$tooltip);\r\n    }\r\n    changeLabelText(labelText) {\r\n        this.$tooltip.innerHTML = labelText;\r\n    }\r\n}\r\nexports.Tooltip = Tooltip;\r\n\n\n//# sourceURL=webpack:///./app/Tooltip.ts?");

/***/ }),

/***/ "./app/VolumeControl.ts":
/*!******************************!*\
  !*** ./app/VolumeControl.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./app/constants.ts\");\r\nconst Tooltip_1 = __webpack_require__(/*! ./Tooltip */ \"./app/Tooltip.ts\");\r\n// additional code\r\nconst convertTooltipText = (value) => {\r\n    return `${Math.round(value * 100)}%`;\r\n};\r\nclass VolumeControl {\r\n    constructor($root, onVolumeChange) {\r\n        this.$root = $root;\r\n        this.$elem = document.createElement('span');\r\n        this.$icon = document.createElement('i');\r\n        this.$volumeControl = document.createElement('input');\r\n        this.$elem.classList.add('volume-control-wrapper');\r\n        this.$icon.classList.add('icon', 'fas', 'fa-volume-off');\r\n        this.tooltip = new Tooltip_1.Tooltip(this.$elem, convertTooltipText(constants_1.INITIAL_VOLUME_VALUE));\r\n        this.$volumeControl.type = 'range';\r\n        this.$volumeControl.min = '0';\r\n        this.$volumeControl.max = '1';\r\n        this.$volumeControl.step = '0.01';\r\n        this.$volumeControl.value = `${constants_1.INITIAL_VOLUME_VALUE}`;\r\n        this.$volumeControl.classList.add('volume-control');\r\n        this.$volumeControl.classList.add('hidden');\r\n        this.$elem.appendChild(this.$icon);\r\n        this.$elem.appendChild(this.$volumeControl);\r\n        this.$root.appendChild(this.$elem);\r\n        this.$volumeControl.addEventListener('change', (e) => {\r\n            const volumeValue = e.target.value;\r\n            onVolumeChange(volumeValue);\r\n            this.tooltip.changeLabelText(convertTooltipText(parseFloat(volumeValue)));\r\n        });\r\n        this.$icon.addEventListener('click', (e) => {\r\n            e.stopPropagation();\r\n            this.$volumeControl.classList.toggle('hidden');\r\n        });\r\n        document.body.addEventListener('click', (e) => {\r\n            const eventTarget = e.target;\r\n            if (!eventTarget.classList.contains('volume-control')) {\r\n                this.$volumeControl.classList.add('hidden');\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.VolumeControl = VolumeControl;\r\n\n\n//# sourceURL=webpack:///./app/VolumeControl.ts?");

/***/ }),

/***/ "./app/constants.ts":
/*!**************************!*\
  !*** ./app/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.INITIAL_VOLUME_VALUE = 0.2;\r\n\n\n//# sourceURL=webpack:///./app/constants.ts?");

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst AudioPlayer_1 = __webpack_require__(/*! ./AudioPlayer */ \"./app/AudioPlayer.ts\");\r\n__webpack_require__(/*! ../assets/css/app.styl */ \"./assets/css/app.styl\");\r\nnew AudioPlayer_1.AudioPlayer(document.body);\r\nconst awesome = document.createElement('link');\r\nawesome.rel = 'stylesheet';\r\nawesome.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css';\r\ndocument.body.appendChild(awesome);\r\n\n\n//# sourceURL=webpack:///./app/index.ts?");

/***/ }),

/***/ "./assets/css/app.styl":
/*!*****************************!*\
  !*** ./assets/css/app.styl ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/stylus-loader!./app.styl */ \"./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./assets/css/app.styl\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./assets/css/app.styl?");

/***/ }),

/***/ "./assets/img/background.png":
/*!***********************************!*\
  !*** ./assets/img/background.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9b193471fdf697e32f2cb38776875bcd.png\";\n\n//# sourceURL=webpack:///./assets/img/background.png?");

/***/ }),

/***/ "./assets/img/controls-background.png":
/*!********************************************!*\
  !*** ./assets/img/controls-background.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"00d0709f624953c0b68ab48788800c96.png\";\n\n//# sourceURL=webpack:///./assets/img/controls-background.png?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/stylus-loader/index.js!./assets/css/app.styl":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/stylus-loader!./assets/css/app.styl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".audio-player {\\n  height: 300px;\\n  width: 673px;\\n  background: url(\" + escape(__webpack_require__(/*! ../img/background.png */ \"./assets/img/background.png\")) + \");\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n}\\n.icon {\\n  color: #d0d0d0;\\n  cursor: pointer;\\n  font-size: 16px;\\n}\\n.player-logo {\\n  position: absolute;\\n  top: calc(50% - 75px);\\n  left: calc(50% - 75px);\\n  overflow: hidden;\\n  height: 150px;\\n  width: 150px;\\n  border-radius: 50%;\\n  background: url(\" + escape(__webpack_require__(/*! ../img/controls-background.png */ \"./assets/img/controls-background.png\")) + \") 50% 50% no-repeat;\\n  display: flex;\\n  align-items: center;\\n}\\n.logo-panel {\\n  height: 36px;\\n  width: 100%;\\n  box-shadow: 0 2px 2px 0 #000;\\n  background-image: linear-gradient(to bottom, rgba(42,42,42,0.95), rgba(4,4,4,0.95));\\n}\\n.track-name {\\n  color: #d0d0d0;\\n  position: absolute;\\n  bottom: 0;\\n  font-family: Arial;\\n  font-size: 13px;\\n  width: 100%;\\n  padding-bottom: 32px;\\n  display: flex;\\n  justify-content: center;\\n}\\n.audio-controls {\\n  position: relative;\\n  display: flex;\\n  justify-content: space-between;\\n  width: 295px;\\n  align-items: center;\\n}\\n.song-controls {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100px;\\n}\\n.volume-control-wrapper {\\n  position: relative;\\n}\\n.volume-control-wrapper .icon {\\n  font-size: 20px;\\n}\\n.volume-control-wrapper .volume-control {\\n  position: absolute;\\n  transform: rotate(-90deg);\\n  width: 100px;\\n  left: -5px;\\n  bottom: -2px;\\n}\\n.volume-control-wrapper .volume-control.hidden {\\n  display: none;\\n}\\n.tooltip {\\n  position: absolute;\\n  padding: 4px 10px;\\n  background-image: linear-gradient(to bottom, rgba(234,234,234,0.95), rgba(189,189,189,0.95));\\n  font-size: 12px;\\n  color: #3b3b3b;\\n  border-radius: 3px;\\n  font-family: Arial, sans-serif;\\n  text-shadow: 0 1px 0 #f2f2f2;\\n  border-top: 1px solid #fff;\\n  top: -28px;\\n  left: -162%;\\n}\\n.tooltip::after {\\n  content: '';\\n  position: absolute;\\n  left: calc(50% - 4px);\\n  bottom: -6px;\\n  border: 3px solid transparent;\\n  border-top: 3px solid #bbb;\\n}\\n.favorite-wrapper {\\n  position: relative;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./assets/css/app.styl?./node_modules/css-loader!./node_modules/stylus-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ })

/******/ });