import Store from 'react-native-simple-store';
import Config from '../../Config';
import {Actions} from 'react-native-router-flux';

class Api {

  logIn(user = {}, callback) {
    console.log('Api.login salut');
    fetch(`${Config.host}/api/user/log_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(user => {
        console.log('Api.login bye', user);
        if (!user.error) {
          this.authenticate(user);
        }
        callback(user);
      });
  }

  authenticate(user) {
    console.log('authenticate user: salut', user);
    Store.save('user', {
        email: user.email,
        password: user.password
      })
      .then(() => {
        console.log('Utilisateur sauvegardé !');
        Actions.rooms();
      });
  }

  isAuthenticated() { // savoir en booleen si user connected
  if (this.user._id) {
    return true;
  }
  return false;
}


  // Fetch sur les rooms
  getRooms(city, callbackRooms) {
  fetch(`${Config.host}/api/room?city=${city}`)
    .then(res => res.json())
    .then(rooms => {
      callbackRooms(rooms)
    });
  }

  // Fetch d'infos sur l'user
  getUserAccount(id, callbackAccount) {
  fetch(`${Config.host}/api/user/${id}`)
    .then(res => res.json())
    .then(account => {
      callbackAccount(account)
    });
  }

}

export default new Api();
