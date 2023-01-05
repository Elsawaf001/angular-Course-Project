import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'A test Recipe',
      'https://www.tasteofhome.com/wp-content/uploads/2020/01/Easy-Pad-Thai_EXPS_FT20_249632_F_0109_1.jpg?resize=768,768'
    ),
    new Recipe(
      'a test recipe',
      'A test Recipe',
      'https://www.tasteofhome.com/wp-content/uploads/2020/01/Easy-Pad-Thai_EXPS_FT20_249632_F_0109_1.jpg?resize=768,768'
    ),
    new Recipe(
      'a test recipe',
      'A test Recipe',
      'https://www.tasteofhome.com/wp-content/uploads/2020/01/Easy-Pad-Thai_EXPS_FT20_249632_F_0109_1.jpg?resize=768,768'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
