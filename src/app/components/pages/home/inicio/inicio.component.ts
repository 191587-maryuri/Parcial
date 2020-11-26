import { Component, OnInit } from '@angular/core';
import {RecetasService} from "../../../../services/recetas.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass'],
  providers: [RecetasService]
})
export class InicioComponent implements OnInit {

  constructor(public recetas:RecetasService) { }

  ngOnInit(): void {
  }

}
