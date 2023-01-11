import { io, Socket } from "socket.io-client";

class SocketIOService {
  socket: Socket;

  constructor() {
    this.socket = io(process.env.NEXT_WS_URL!);
  }
}

const singleton = new SocketIOService();
export { singleton as SocketIOService };
