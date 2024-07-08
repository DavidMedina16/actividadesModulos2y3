import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importamos el componente que usaremos en este componente principal
import { NavegacionComponent } from './components/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Aca especifica las importaciones que va a usar
  imports: [RouterOutlet, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Componente principal
export class AppComponent {

  // Aca ba la logica general de su proyecto

}
