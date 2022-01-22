import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { RespuestaService } from 'src/app/services/respuestaService';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  respuestas: Respuesta[] = [];
  constructor(private respuestaService: RespuestaService) { }

  ngOnInit(): void {
    this.respuestaService.getRespuestas()
    .subscribe(response => this.respuestas = response);
    //.subscribe(response => console.log(response));
  }

}
