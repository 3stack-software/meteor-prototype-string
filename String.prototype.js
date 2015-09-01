String.prototype.ucwords = function() {
  var str;
  str = this.toLowerCase();
  return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
    return $1.toUpperCase();
  });
};

String.prototype.pad = function(width, z) {
  var n;
  if (z == null) {
    z = '0';
  }
  n = this + '';
  if (n.length >= width) {
    return n;
  } else {
    return new Array(width - n.length + 1).join(z) + n;
  }
};

String.prototype.ucfirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// String to hex colour
// https://www.designedbyaturtle.co.uk/2014/convert-string-to-hexidecimal-colour-with-javascript-vanilla/
String.prototype.toHexColour = function() {
    return intToARGB(hashCode(this));
}

function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToARGB(i) {
    var hex = ((i>>24)&0xFF).toString(16) +
            ((i>>16)&0xFF).toString(16) +
            ((i>>8)&0xFF).toString(16) +
            (i&0xFF).toString(16);
    hex += '000000';
    return hex.substring(0, 6);
}
