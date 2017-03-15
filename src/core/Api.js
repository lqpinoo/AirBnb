class Api {

  getRooms(city, callbackRooms) {
  fetch(`http://10.0.2.2:3001/api/room?city=${city}`)
    .then(res => res.json())
    .then(rooms => {
      callbackRooms(rooms)
    });
  }

  getUserAccount(id, callbackAccount) {
  fetch(`http://10.0.2.2:3001/api/user/${id}`)
    .then(res => res.json())
    .then(account => {
      callbackRoom(account)
    });
  }

}

export default new Api();
