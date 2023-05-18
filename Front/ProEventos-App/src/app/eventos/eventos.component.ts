import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public Eventos: any = [];
  public EventosFiltrados: any = [];

  widthImg = 50;
  marginImg = 2;
  showImg = true;
  private _filtrarLista: string = '';

  public get filtroLista() {
    return this._filtrarLista;
  }

  public set filtroLista(value: string) {
    this._filtrarLista = value;
    this.EventosFiltrados = this.filtroLista ? this.filterEvents(this.filtroLista) : this.Eventos;
  }

  filterEvents(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.Eventos.filter((ev: any) => ev.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                                            ev.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1)
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetEventos();
  }

  alterarImg() {
    this.showImg = !this.showImg;
  }
  public GetEventos(): void{

    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => {
        this.Eventos = response;
        this.EventosFiltrados = this.Eventos;
      },
      error => console.log(error)
    );
}
}
