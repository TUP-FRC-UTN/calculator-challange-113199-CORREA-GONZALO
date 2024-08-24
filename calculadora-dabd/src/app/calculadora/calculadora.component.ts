import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionesComponent } from "../operaciones/operaciones.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, OperacionesComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  primerValor : number = 0;
  segundoValor : number = 0;
  resultado : number | string = "";
  operacionSeleccionada : string = "";

  seleccionarOperacion(operacion : string){
    this.operacionSeleccionada = operacion;
  }

  obtenerResultado(resultado: number | string){
    this.resultado = resultado;
  }
}
