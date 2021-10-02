(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\wamp64\\www\\atelierDesign\\src\\js\\main.js":[function(require,module,exports){
'use strict';

var _nav = require('./modules/nav');

var NavI = new _nav.Nav();
NavI.start();

},{"./modules/nav":"C:\\wamp64\\www\\atelierDesign\\src\\js\\modules\\nav.js"}],"C:\\wamp64\\www\\atelierDesign\\src\\js\\modules\\nav.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
  function Nav() {
    _classCallCheck(this, Nav);

    this.menu = document.getElementById('js-navigation-menu');
    this.menuToggle = document.getElementById('js-mobile-menu');
    // this.menuLink = document.querySelectorAll('nav a');
  }

  _createClass(Nav, [{
    key: 'start',
    value: function start() {
      this.menu.classList.remove("show");
      this.menuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        document.getElementById('js-navigation-menu').classList.toggle("show");
      });

      var ArrLinks = document.querySelectorAll('nav a');

      for (var i = ArrLinks.length - 1; i >= 0; i--) {
        ArrLinks[i].addEventListener("click", function (e) {
          e.preventDefault();
          document.getElementById('js-navigation-menu').classList.toggle("show");
          document.getElementById('js-mobile-menu').classList.toggle("active");
        });
      }
    }
  }]);

  return Nav;
}();

exports.Nav = Nav;

},{}]},{},["C:\\wamp64\\www\\atelierDesign\\src\\js\\main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQSxJQUFJLE9BQU8sY0FBWDtBQUNBLEtBQUssS0FBTDs7Ozs7Ozs7Ozs7OztJQ0ZNLEc7QUFDSixpQkFBYTtBQUFBOztBQUNYLFNBQUssSUFBTCxHQUFhLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsQ0FBYjtBQUNBLFNBQUssVUFBTCxHQUFrQixTQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWxCO0FBQ0E7QUFDRDs7Ozs0QkFDTTtBQUNILFdBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsTUFBM0I7QUFDQSxXQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVMsQ0FBVCxFQUFXO0FBQ25ELFVBQUUsY0FBRjtBQUNBLGFBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsUUFBdEI7QUFDQSxpQkFBUyxjQUFULENBQXdCLG9CQUF4QixFQUE4QyxTQUE5QyxDQUF3RCxNQUF4RCxDQUErRCxNQUEvRDtBQUNELE9BSkQ7O0FBTUMsVUFBSSxXQUFXLFNBQVMsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBZjs7QUFFQyxXQUFLLElBQUksSUFBSSxTQUFTLE1BQVQsR0FBa0IsQ0FBL0IsRUFBa0MsS0FBSyxDQUF2QyxFQUEwQyxHQUExQyxFQUErQztBQUM5QyxpQkFBUyxDQUFULEVBQVksZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBUyxDQUFULEVBQVc7QUFDbEQsWUFBRSxjQUFGO0FBQ0csbUJBQVMsY0FBVCxDQUF3QixvQkFBeEIsRUFBOEMsU0FBOUMsQ0FBd0QsTUFBeEQsQ0FBK0QsTUFBL0Q7QUFDSCxtQkFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxTQUExQyxDQUFvRCxNQUFwRCxDQUEyRCxRQUEzRDtBQUVFLFNBTEQ7QUFNQTtBQUNOOzs7Ozs7UUFJTSxHLEdBQUEsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBOYXYgfSAgZnJvbSAnLi9tb2R1bGVzL25hdic7XHJcbnZhciBOYXZJID0gbmV3IE5hdigpO1xyXG5OYXZJLnN0YXJ0KCk7XHJcbiIsImNsYXNzIE5hdntcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5tZW51ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1uYXZpZ2F0aW9uLW1lbnUnKTtcclxuICAgIHRoaXMubWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1tb2JpbGUtbWVudScpO1xyXG4gICAgLy8gdGhpcy5tZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBhJyk7XHJcbiAgfVxyXG4gIHN0YXJ0KCl7XHJcbiAgICAgIHRoaXMubWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgdGhpcy5tZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1uYXZpZ2F0aW9uLW1lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgfSk7IFxyXG5cclxuICAgICAgIGxldCBBcnJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBhJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSBBcnJMaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICBBcnJMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1uYXZpZ2F0aW9uLW1lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbW9iaWxlLW1lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IE5hdiB9XHJcblxyXG4iXX0=
