import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController } from '@ionic/angular';

import { error } from 'console';
@Component({
  selector: 'app-web-opd',
  templateUrl: './web-opd.page.html',
  styleUrls: ['./web-opd.page.scss'],
})
export class WebOpdPage implements OnInit {
  data_opd: any[] = [];
  currentPage = 1;
  responseData: any[] = [];

  constructor(private webOpd:MovieService, private loadingCtrl:LoadingController) { 
    // this.responseData = history.state.response;
    // console.log(this.responseData);
    // console.log('Response Data:', JSON.stringify(this.responseData));
  }

  ngOnInit() {
    this.loadDataOpd();
  }

  // Proses
  async loadDataOpd(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.webOpd.getDaftarOpd().subscribe((res: any) => {
      loading.dismiss();
      this.data_opd.push(...res);
      console.log(res);
      event?.target.complete();
      if(event){
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadDataOpd(event);
  }

  getFirst100Words(text: string): string {
    // Memotong teks menjadi 100 kata pertama
    const words = text.split(' ');
    const first100Words = words.slice(0, 100).join(' ')+' ...';
    return first100Words;
  }
}
