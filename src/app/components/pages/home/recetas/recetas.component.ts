import { Component, OnInit } from '@angular/core';
import {RecetasService} from "../../../../services/recetas.service";

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.sass'],
  providers: [RecetasService]
})
export class RecetasComponent implements OnInit {

  constructor(public receta:RecetasService) { }

  ngOnInit(): void {
  }

}
