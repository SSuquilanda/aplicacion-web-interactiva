import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    const cursosGuardados = localStorage.getItem('cursos');
    this.cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
  }

  agregarCurso(curso: any) {
    this.cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }

  eliminarCurso(index: number) {
    this.cursos.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }
  curso = {
    nombre: '',
    instructor: '',
    fecha: '',
    duracion: null,
    descripcion: ''
  };


  // Método para gestionar el evento de envío del formulario
  onSubmit(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Aquí puedes manejar la lógica para agregar el curso
    console.log('Curso agregado:', this.curso);

    // Resetear el formulario si es necesario
    this.curso = {
      nombre: '',
      instructor: '',
      fecha: '',
      duracion: null,
      descripcion: ''
    };
}
}
