import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public Eventos: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetEventos();
  }
  public GetEventos(): void{

    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => this.Eventos = response,
      error => console.log(error)
    );
}
}
