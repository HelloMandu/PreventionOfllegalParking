// const geolib = require('geolib')

// function getLocation() {
//   if (navigator.geolocation) { // GPS를 지원하면
//     navigator.geolocation.getCurrentPosition(function(position) {
//       alert(position.coords.latitude + ' ' + position.coords.longitude);
//     }, function(error) {
//       console.error(error);
//     }, {
//       enableHighAccuracy: false,
//       maximumAge: 0,
//       timeout: Infinity
//     });
//   } else {
//     alert('GPS를 지원하지 않습니다');
//   }
// }
// getLocation();
// const test = {
//   Location: () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           let latlong = { latitude: position.coords.latitude, longitude: position.coords.longitude }
//           return latlong
//         },
//         (err) => {
//           console.error(err)
//         }
//       )
//     } else {
//       console.error('GPS를 지원하지 않음')
//     }
//   },
//   Distance: (cur, spot) => {
//     return geolib.getDistance(cur, spot)
//   },
// }