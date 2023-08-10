import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarosselComponent } from '../carossel/carossel.component';
import { AppModule } from '../app.module';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CarosselComponent],
})
export class HomeComponent{

}
