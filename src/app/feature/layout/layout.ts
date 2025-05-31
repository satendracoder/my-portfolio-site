import { Component } from '@angular/core';
import { MenuCard } from "../../pages/home/menu-card/menu-card";
import { FooterCard } from "../../pages/home/footer-card/footer-card";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MenuCard, FooterCard, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
