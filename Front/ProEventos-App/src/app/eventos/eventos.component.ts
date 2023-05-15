import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public Eventos: any = [];
  widthImg = 50;
  marginImg = 2;
  showImg = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetEventos();
  }

  alterarImg() {
    this.showImg = !this.showImg;
  }
  public GetEventos(): void{

    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => this.Eventos = response,
      error => console.log(error)
    );
}
}
