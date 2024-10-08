import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  experience = [
    {
      company: 'Ayesa',
      role: 'Analista programadora Java',
      duration: 'Abril 2023 - Presente',
      tasks: [
        'Gestión y resolución eficiente de incidencias críticas.',
        'Desarrollo de soluciones personalizadas para clientes.',
        'Mejoras técnicas que aumentaron la eficiencia operativa en un 15%.',
      ],
    },
    {
      company: 'Serbatic',
      role: 'Java Full-stack Developer',
      duration: 'Septiembre 2018 - Marzo 2023',
      tasks: [
        'Desarrollo de aplicaciones y portales utilizando Liferay 6.2/7.x.',
        'Migración de aplicaciones y portales a la plataforma Liferay 7.x.',
        'Optimización de procesos que redujo tiempos de carga en un 30%.',
      ],
    },
    {
      company: 'Seidor Opentrends',
      role: 'Junior Java Full-stack Developer',
      duration: 'Octubre 2017 - Agosto 2018',
      tasks: [
        'Mantenimiento y soporte del portal Liferay 6.2.',
        'Participación en la implementación de mejoras en el portal.',
      ],
    },
    // Agrega más experiencias si lo deseas
  ];
}
