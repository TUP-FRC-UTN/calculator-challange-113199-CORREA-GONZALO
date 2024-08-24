import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  @Input() primerValor : number = 0;
  @Input() segundoValor : number = 0;
  @Input() operacion : string = "";
  @Output() resultado = new EventEmitter<number | string>();

  ngOnChanges() {
    let res: number | string = '';

    switch(this.operacion) {
      case 'suma':
        res = this.primerValor + this.segundoValor;
        break;
      case 'resta':
        res = this.primerValor - this.segundoValor;
        break;
      case 'multiplicacion':
        res = this.primerValor * this.segundoValor;
        break;
      case 'division':
        res = this.segundoValor !== 0 ? this.primerValor / this.segundoValor : 'Error: División por 0';
        break;
      case 'potencia':
        res = Math.pow(this.primerValor, this.segundoValor);
        break;
      case 'raiz':
        res = this.primerValor >= 0 ? Math.sqrt(this.primerValor) : 'Error: Raíz de un número negativo';
        break;
      default:
        res = 'Operación no válida';
    }

    this.resultado.emit(res);
  }
}
