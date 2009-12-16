// HTML5 autofocus plugin
// Copyright (c) 2009, Mike Taylor, http://miketaylr.com
// MIT Licensed: http://www.opensource.org/licenses/mit-license.php

// NOTE: As per the spec, only one element is permitted to have the
// autofocus attribute, hence no .each()
// http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#autofocusing-a-form-control

// USAGE: $('[autofocus=""]').autofocus();, assuming a boolean attribute like:
// <input type="text" autofocus />

(function($) {
  $.fn.autofocus = function() {
    //Test to see if autofocus is natively supported before proceeding
    return this[0] ? ((this[0].autofocus!==true) ? this.focus() : this) : this;
  };
})(jQuery);