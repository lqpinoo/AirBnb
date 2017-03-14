class Api {

  getRooms(city, callbackRooms) {
  fetch(`http://10.0.2.2:3001/api/room?city=${city}`)
    .then(res => res.json())
    .then(rooms => {
      callbackRooms(rooms)
    });
  }

}

export default new Api();
