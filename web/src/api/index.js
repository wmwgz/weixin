import axios from 'axios'

//配置
//django api
//axios.defaults.baseURL = 'http://localhost:8000'
//flask api
axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
  login(name, password) {
    return axios.post('/login', {
      name: name,
      password: password
    }).then(res => res.data)
  },
  reg(name, password) {
    return axios.post('/reg', {
        name: name,
        password: password
      }
    ).then(res => res.data)
  },
  addFriend(userId, friendId) {
    return axios.post('/addFriend', {
        userId: userId,
        friendId: friendId
      }
    ).then(res => res.data)
  },
  getFriends(userId) {
    return axios.post('/getFriends', {
        userId: userId
      }
    ).then(res => res.data)
  }
}
