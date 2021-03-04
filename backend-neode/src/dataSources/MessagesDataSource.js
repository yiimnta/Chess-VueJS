const {DataSource} = require('apollo-datasource');
const Message = require('./Enities/Message');
const Room = require('./Enities/Room');
const User = require('./Enities/User');

class MessagesDataSource extends DataSource {
  
  constructor() {
    super();
  }

  initialize({context}) {
    this.context = context;
  }

  async allMessages() {
    return await Message.all()
  }

  async createMessage(roomId, content) {
    if (!roomId) throw new Error("Room id not null");
    const currentUser = await User.first(this.context.user)
    const room = await Room.first({ id : roomId })

    if (!currentUser) throw new Error("User not exists");
    if (!room) throw new Error("Room not exists");

    const message = new Message({author: currentUser, room, content})
    await message.save()

    return this;
  }
}

module.exports = { MessagesDataSource }
