import { io, Socket } from "socket.io-client";

class SocketIOService {
  socket: Socket;

  constructor() {
    this.socket = io("ws://localhost:3000");
  }
}

const singleton = new SocketIOService();
export { singleton as SocketIOService };
