import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  constructor(private router: Router) { }
  dataMovies(id:any){
    // jika pakai id :
    // this.router.navigate(['movies', id]);

    // jika tidak pakai id :
    this.router.navigate(['movies']);
  }
  ngOnInit() {
  }

}
