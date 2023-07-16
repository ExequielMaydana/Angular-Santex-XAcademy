import { Component } from '@angular/core';

interface NamesAndCosts {
  name: string;
  cost: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercism_angular';

  // Declaración del arreglo de items
  items: NamesAndCosts[] = [
    { name: 'Exequiel', cost: '1' },
    { name: 'Santex', cost: '2' },
    { name: 'XAcademy', cost: '3' },
  ];

  viewList: boolean = true;

  listHidden() {
    this.viewList ? (this.viewList = false) : (this.viewList = true);
  }
}
