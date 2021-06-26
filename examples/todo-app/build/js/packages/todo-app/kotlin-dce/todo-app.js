(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-styled-js-legacy', 'kotlin-css', 'kotlin-wrappers-kotlin-react-dom-js-legacy', 'kotlin-wrappers-kotlin-react-js-legacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-styled-js-legacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-react-dom-js-legacy'), require('kotlin-wrappers-kotlin-react-js-legacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'todo-app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'todo-app'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'todo-app'. Its dependency 'kotlin-wrappers-kotlin-styled-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-js-legacy' is loaded prior to 'todo-app'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'todo-app'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'todo-app'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'todo-app'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-legacy' is loaded prior to 'todo-app'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'todo-app'. Its dependency 'kotlin-wrappers-kotlin-react-js-legacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-legacy' is loaded prior to 'todo-app'.");
    }root['todo-app'] = factory(typeof this['todo-app'] === 'undefined' ? {} : this['todo-app'], kotlin, this['kotlin-wrappers-kotlin-styled-js-legacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-react-dom-js-legacy'], this['kotlin-wrappers-kotlin-react-js-legacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_styled_js_legacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_react_dom_js_legacy, $module$kotlin_wrappers_kotlin_react_js_legacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_js_legacy.styled.StyleSheet;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getKClass = Kotlin.getKClass;
  var render = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent_init_8bz2yq$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_js_legacy.react.RComponent;
  var html = $module$kotlin_wrappers_kotlin_styled_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder = $module$kotlin_wrappers_kotlin_styled_js_legacy.styled.StyledDOMBuilder;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_js_legacy.react.dom.RDOMBuilder;
  HeaderBar.prototype = Object.create(RComponent.prototype);
  HeaderBar.prototype.constructor = HeaderBar;
  HeaderBarStyles.prototype = Object.create(StyleSheet.prototype);
  HeaderBarStyles.prototype.constructor = HeaderBarStyles;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  var WelcomeStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  var WelcomeStyles$textInput_metadata = new PropertyMetadata('textInput');
  var WelcomeStyles_instance = null;
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Kotlin/JS';
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.attrs_slhiwc$(main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(Welcome), main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function HeaderBarState(name) {
    this.name = name;
  }
  HeaderBarState.$metadata$ = {kind: Kind_CLASS, simpleName: 'HeaderBarState', interfaces: []};
  HeaderBarState.prototype.component1 = function () {
    return this.name;
  };
  HeaderBarState.prototype.copy_61zpoe$ = function (name) {
    return new HeaderBarState(name === void 0 ? this.name : name);
  };
  HeaderBarState.prototype.toString = function () {
    return 'HeaderBarState(name=' + Kotlin.toString(this.name) + ')';
  };
  HeaderBarState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  HeaderBarState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function HeaderBar(props) {
    RComponent_init(props, this);
    this.state = new HeaderBarState(props.name);
  }
  HeaderBar.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    $receiver_0.css.unaryPlus_ocqyl0$(HeaderBarStyles_getInstance().textContainer);
    $receiver_0.unaryPlus_pdl1vz$('Todo Kotlin App');
    $receiver.child_52psg1$($receiver_0.create());
  };
  HeaderBar.$metadata$ = {kind: Kind_CLASS, simpleName: 'HeaderBar', interfaces: [RComponent]};
  function HeaderBarStyles() {
    HeaderBarStyles_instance = this;
    StyleSheet.call(this, 'HeaderBarStyles', true);
    this.textContainer_waqyx8$_0 = this.css_wopuc9$([], HeaderBarStyles$textContainer$lambda).provideDelegate_n5byny$(this, HeaderBarStyles$textContainer_metadata);
  }
  var HeaderBarStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  Object.defineProperty(HeaderBarStyles.prototype, 'textContainer', {configurable: true, get: function () {
    return this.textContainer_waqyx8$_0.getValue_lrcp0p$(this, HeaderBarStyles$textContainer_metadata);
  }});
  function HeaderBarStyles$textContainer$lambda($receiver) {
    padding($receiver, get_px(20));
    set_backgroundColor($receiver, rgb(8, 97, 22));
    set_color($receiver, rgb(56, 246, 137));
    return Unit;
  }
  HeaderBarStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'HeaderBarStyles', interfaces: [StyleSheet]};
  var HeaderBarStyles_instance = null;
  function HeaderBarStyles_getInstance() {
    if (HeaderBarStyles_instance === null) {
      new HeaderBarStyles();
    }return HeaderBarStyles_instance;
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf('class', closure$classes), it);
    };
  }
  function WelcomeState(name) {
    this.name = name;
  }
  WelcomeState.$metadata$ = {kind: Kind_CLASS, simpleName: 'WelcomeState', interfaces: []};
  WelcomeState.prototype.component1 = function () {
    return this.name;
  };
  WelcomeState.prototype.copy_61zpoe$ = function (name) {
    return new WelcomeState(name === void 0 ? this.name : name);
  };
  WelcomeState.prototype.toString = function () {
    return 'WelcomeState(name=' + Kotlin.toString(this.name) + ')';
  };
  WelcomeState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  WelcomeState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Welcome(props) {
    RComponent_init(props, this);
    this.state = new WelcomeState(props.name);
  }
  function Welcome$headerBar$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  Welcome.prototype.headerBar_0 = function ($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(HeaderBar), Welcome$headerBar$lambda(handler));
  };
  function Welcome$render$lambda$lambda($receiver) {
    return Unit;
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    this.headerBar_0($receiver_0, Welcome$render$lambda$lambda);
    $receiver.child_52psg1$($receiver_0.create());
  };
  Welcome.$metadata$ = {kind: Kind_CLASS, simpleName: 'Welcome', interfaces: [RComponent]};
  _.main = main;
  var package$components = _.components || (_.components = {});
  var package$headerbar = package$components.headerbar || (package$components.headerbar = {});
  package$headerbar.HeaderBarState = HeaderBarState;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-js-legacy'] = $module$kotlin_wrappers_kotlin_styled_js_legacy;
  package$headerbar.HeaderBar = HeaderBar;
  Object.defineProperty(package$headerbar, 'HeaderBarStyles', {get: HeaderBarStyles_getInstance});
  _.WelcomeState = WelcomeState;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-js-legacy'] = $module$kotlin_wrappers_kotlin_react_dom_js_legacy;
  _.Welcome = Welcome;
  main();
  return _;
}));

//# sourceMappingURL=todo-app.js.map
