import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-valoracion-add',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './valoracion-add.component.html',
  styleUrls: ['./valoracion-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValoracionAddComponent { }
