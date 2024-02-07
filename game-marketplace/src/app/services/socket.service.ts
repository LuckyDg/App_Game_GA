import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;
  private readonly uri: string = "http://localhost:7000"; // Asegúrate de que la URI corresponda a tu servidor
  public isConnected: boolean = false;

  constructor() {
    this.socket = io(this.uri);
    this.socket.on('connect', () => {
      this.isConnected = true;
      console.log('Conectado al servidor de WebSocket');
    });
    this.socket.on('disconnect', () => {
      this.isConnected = false;
      console.log('Desconectado del servidor de WebSocket');
    });
  }

  connect(): void {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor de sockets');
    });

    // Escuchar eventos específicos
    this.socket.on('videojuegoCreado', (data) => {
      console.log(data);
      // Aquí puedes manejar los datos recibidos del evento
    });

    this.socket.on('valoracionAñadida', (data) => {
      console.log(data);
      // Manejar datos del evento
    });
  }

  // Método para emitir eventos, si es necesario
  emitEvent(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  // Método para desconectar el socket
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
  
  // Método para escuchar eventos específicos
  listen(eventName: string, callback: (data: any) => void): void {
    this.socket.on(eventName, callback);
  }

}
