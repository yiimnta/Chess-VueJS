const {DataSource} = require('apollo-datasource');
const Room = require('./enities/Room');
const User = require('./enities/User');

class RoomsDataSource extends DataSource {
  
  constructor() {
    super();
  }

  initialize({context}) {
    this.context = context;
  }

  async allRooms() {
    return await Room.all()
  }

  async createRoom(friendId) {

    if (!friendId) return new Error("Friend id not null");
    const currentUser = await User.first(this.context.user)
    const friendUser = await User.first({ id : friendId })

    if (!currentUser) return new Error("User not exists");
    if (!friendUser) return new Error("Friend not exists");

    const room = new Room({users: [currentUser, friendUser]})
    await room.save()
    return room;  
  }
}
module.exports = { RoomsDataSource }
