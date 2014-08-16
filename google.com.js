/*
 * Thanks, Google.
 */

var adsDiv = $('div#taw');

// Removes ads on page load
adsDiv.remove();

// Removes ads on Search button click
$('button#gbqfb').click(function() {
  adsDiv.remove();
});
