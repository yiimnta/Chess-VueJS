import Vue from 'vue'

class Chess {
  constructor (data) {
    Object.assign(this, data)
  }

  /*
        hàm này sẽ lấy danh sách vị trí CÓ THỂ ĐI ĐƯỢC của con Pawn
        @param pos: vị trí cờ vd: a1,b2,..
        @param board: [String] trạng thái bàn cờ hiện tại
        @return [String]: danh sách vị trí đi được vd: ['a1', 'a2']
    */
  getMovesPawn (pos, board) {
    // TODO
    console.log('calling get moves of Pawn!')
    return []
  }

  /*
        Lấy danh sách vị trí CÓ THỂ ĐI ĐƯỢC của con Queen
        @param pos: vị trí cờ vd: a1,b2,..
        @param board: [String] trạng thái bàn cờ hiện tại
        @return [String]: danh sách vị trí mà con Pawn có thể đi được vd: ['a1', 'a2']
    */
  getMovesQueen (pos, board) {
    // TODO
    console.log('calling get moves of Queen!')
    return []
  }

  /*
        Lấy danh sách vị trí CÓ THỂ ĐI ĐƯỢC của con Knight
        @param pos: vị trí cờ vd: a1,b2,..
        @param board: [String] trạng thái bàn cờ hiện tại
        @return [String]: danh sách vị trí đi được vd: ['a1', 'a2']
    */
  getMovesKnight (pos, board) {
    // TODO
    console.log('calling get moves of Knight!')
    return []
  }

  /*
         Lấy danh sách vị trí CÓ THỂ ĐI ĐƯỢC của con King
        @param pos: vị trí cờ vd: a1,b2,..
        @param board: [String] trạng thái bàn cờ hiện tại
        @return [String]: danh sách vị trí có thể đi được vd: ['a1', 'a2']
    */
  getMovesKing (pos, board) {
    // TODO
    console.log('calling get moves of King!')
    return []
  }

  /*
        Lấy danh sách vị trí CÓ THỂ ĐI ĐƯỢC của con Bishop
        @param pos: vị trí cờ vd: a1,b2,..
        @param board: [String] trạng thái bàn cờ hiện tại
        @return [String]: danh sách vị trí có thể đi được vd: ['a1', 'a2']
    */
  getMovesBishop (pos, board) {
    // TODO
    console.log('calling get moves of Bishop!')
    return []
  }
}

const VueChess = (app, options) => {
  app.prototype.$chess = new Chess()
}

Vue.use(VueChess)
