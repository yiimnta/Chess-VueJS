const {DataSource} = require('apollo-datasource');
const Room = require('./enities/Room');
const User = require('./enities/User');
const neode = require('../database/NeodeConfiguration')

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

    if (!friendId) throw new Error("Friend id not null");
    const currentUser = await User.first(this.context.user)
    const friendUser = await User.first({ id : friendId })

    if (!currentUser) throw new Error("User not exists");
    if (!friendUser) throw new Error("Friend not exists");

    //check Room already exists?
    const checkedRoom = await Room.getRoomUF(currentUser.id, friendId)
    if(checkedRoom) throw new Error("Room already created") //found

    const room = new Room({users: [currentUser, friendUser]})
    await room.save()

    return room;
  }
}
module.exports = { RoomsDataSource }
