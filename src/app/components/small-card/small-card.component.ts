import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  photoCover: string =
    'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png';
  @Input()
  cardTitle: string = 'Texto Padrão';
  @Input()
  Id: string = '0';
}
