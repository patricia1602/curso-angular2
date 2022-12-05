import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;

  urlImagem = 'https://static.vecteezy.com/ti/fotos-gratis/t2/6357882-longa-exposicao-exotica-bela-tropical-deep-rainforest-cachoeira-fresco-turquesa-cachoeiras-na-floresta-profunda-de-huay-mae-khamin-cachoeira-no-parque-nacional-bela-paisagem-cachoeiras-gratis-foto.jpg'

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
