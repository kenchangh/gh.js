/*
 * Love you GitHub <3
 */

// Removes 'Clone in Desktop' option
// (( nobody ever uses GitHub Windows ))
var system = navigator.platform;

if (system.indexOf('Win') === -1) {
  $( $('.only-with-full-nav').children()[4] ).remove();
}
