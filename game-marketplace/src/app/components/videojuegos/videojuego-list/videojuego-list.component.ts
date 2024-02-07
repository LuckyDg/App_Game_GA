import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuego.interface';
import { SocketService } from 'src/app/services/socket.service';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-videojuego-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videojuego-list.component.html',
  styleUrls: ['./videojuego-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideojuegoListComponent implements OnInit {
  videojuegos: Videojuego[] = [];

  constructor(
    private socketService: SocketService,
    private videojuegoService: VideojuegoService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarVideojuegos();
    this.configurarEventosSocket();
  }

  private cargarVideojuegos(): void {
    this.videojuegoService.getVideojuegos().subscribe({
      next: (videojuegos) => {
        this.videojuegos = videojuegos;
        this.cd.markForCheck();
      },
      error: (error) => this.manejarError(error),
    });
  }

  private configurarEventosSocket(): void {
    const eventos = ['videojuegoCreado', 'videojuegoEliminado'];

    eventos.forEach((evento) =>
      this.socketService.listen(evento, () => this.cargarVideojuegos())
    );
  }

  private manejarError(error: any): void {
    console.error('Error al cargar videojuegos:', error);
    // Aquí podrías implementar estrategias adicionales de manejo de errores
  }
}
