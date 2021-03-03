const {DataSource} = require('apollo-datasource');
const User = require('./Enities/User');

class UsersDataSource extends DataSource {
  
  constructor() {
    super();
  }

  initialize({context}) {
    this.context = context;
  }

  async signup(name, email, password) {
    const user = new User({ name, email, password})
    await user.save()
    return this.createJWT(user)
  }

  async login(email, password) {
    let user = await User.first({ email: email })
    if(user && user.comparePassword(password)) return this.createJWT(user)
    return null;
  }

  async addFriend(friendId) {
    const friend = await User.first({ id: friendId })
    const currentUser = await User.first(this.context.user)
    return await currentUser.addFriend(friend)
  }

  async allUsers() {
    return await User.all()
  }

  createJWT(user) {
    return this.context.jwtSign( { user : { id: user.id } });
  }
}

module.exports = { UsersDataSource }
