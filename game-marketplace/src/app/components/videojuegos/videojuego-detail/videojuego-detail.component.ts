import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/models/videojuego.interface';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-videojuego-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './videojuego-detail.component.html',
  styleUrls: ['./videojuego-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideojuegoDetailComponent { 
  videojuego: Videojuego | null = null;

  constructor(
    private videojuegoService: VideojuegoService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.videojuegoService.getVideojuegoById(id).subscribe((videojuego) => {
        this.videojuego = videojuego;
        this.cd.markForCheck();
      });
    }
  }
}
