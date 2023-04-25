import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 3 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 3 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Broth', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 200,
        favorite: false,
        origins: ['italy'],
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Sushi',
        price: 120,
        cookTime: '20-30',
        favorite: true,
        origins: ['japan'],
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 70,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'French Fries',
        price: 40,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Pozole',
        price: 80,
        cookTime: '5-10',
        favorite: false,
        origins: ['mexico'],
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Broth'],
      },
      {
        id: 6,
        name: 'Kebab',
        price: 130,
        cookTime: '30-40',
        favorite: false,
        origins: ['middle-east'],
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
    ];
  }
}
