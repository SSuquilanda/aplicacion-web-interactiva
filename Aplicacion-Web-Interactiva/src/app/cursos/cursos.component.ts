import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../services/curso.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    const cursosGuardados = localStorage.getItem('cursos');
    this.cursos = cursosGuardados ? JSON.parse(cursosGuardados) : [];
  }

  agregarCurso(curso: any) {
    // Agregar la imagen del curso usando el servicio
    curso.imagen = this.cursoService.obtenerImagenCurso(curso.nombre);
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
    descripcion: '',
    imagen: ''
  };


  // Método para gestionar el evento de envío del formulario
  onSubmit(event: Event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    this.agregarCurso(this.curso); // Llamar a agregarCurso con la nueva estructura

    // Resetear el formulario si es necesario
    this.curso = {
      nombre: '',
      instructor: '',
      fecha: '',
      duracion: null,
      descripcion: '',
      imagen: ''
};
  }
}
