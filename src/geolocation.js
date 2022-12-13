async function getGeolocation() {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const geolocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            resolve(geolocation);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject('Geolocation is not available in this browser.');
      }
    });
  }
  