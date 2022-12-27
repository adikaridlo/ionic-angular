import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  movie: any = null;
  imageBaseUrl = environment.images;
  
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.movieService.getMoviesDetails(id).subscribe(res => {
        this.movie = res;
        console.log(this.movie);
      });
    }
  }

}
