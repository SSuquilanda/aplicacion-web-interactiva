import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../services/curso.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule, HttpClientModule],
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
    this.cursoService.obtenerImagenCurso(curso.nombre).subscribe((response: any) => {
      curso.imagen = response.urls.small; // Usamos la imagen de tamaño pequeño
      this.cursos.push(curso);
      localStorage.setItem('cursos', JSON.stringify(this.cursos));
    });
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
