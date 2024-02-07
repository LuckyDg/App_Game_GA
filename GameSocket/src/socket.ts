// socket.ts

import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

let io: Server;

export const initializeSocket = (server: HttpServer): void => {
    io = new Server(server, {
      cors: {
        origin: ['http://localhost:4200', 'http://localhost:12000' ],
        methods: ["GET", "POST"],
        credentials: true,
      }
    });
  
    io.on("connection", (socket: Socket) => {
      console.log("Un cliente se ha conectado");
      // Definir más manejadores de eventos para este socket
    });
  };

export const getIo = (): Server => {
  if (!io) {
    throw new Error("Socket.io no ha sido inicializado.");
  }
  return io;
};
