import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // heroes = HEROES;
  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  // ở đây ì selectedHero gán bằng hero nên khi thay đổi selectedHero thì this.hero khai báo ở đầu class cũng change
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.heroes);
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
