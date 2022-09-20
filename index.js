class Breakfast{
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}

class Lunch{
  constructor(salad, soup, drink){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner{
  #dessert;
  constructor(salad, soup, entree, dessert){
    this.soup = soup;
    this.salad = salad;
    this.entree = entree;
    this.#dessert = dessert
  }
}

const newdinner = new Dinner("balsamic salad","consomme","filet mignon","cheesecake")