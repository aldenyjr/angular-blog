import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://community.revelo.com.br/content/images/2023/04/-----BLOG-COMMUNITY-BR---React-vs.-Angular_-qual-escolher_.png';
  contentTitle: string = 'React vs. Angular, Qual escolher?';
  contentDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt sem sed odio rutrum luctus. Cras sed mattis nisl. Nullam condimentum mi quis sagittis auctor. Aenean nec ante ac libero scelerisque rutrum. Curabitur non enim sodales, varius lorem sed, interdum ante. Nulla posuere urna quis viverra dictum. Vivamus nec nisi quis neque ornare accumsan eu id diam.';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.photoCover = result.photo;
    this.contentDescription = result.description;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
