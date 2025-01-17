import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BodyComponent } from "../body/body.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NavComponent, BodyComponent, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
