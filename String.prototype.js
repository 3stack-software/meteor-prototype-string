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
