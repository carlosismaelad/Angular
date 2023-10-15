import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = []

  animalDetails = ''

  constructor(private listService: ListService){
    this.getAnimals()
  }

  showAge(animal: Animal){
    if(animal.age > 1){
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`
    } else {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano.`
    }
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => this.animals = animals)
  }

}
