import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar]
})
export class NavbarComponent {}
