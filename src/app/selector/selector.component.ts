import { DateService } from './../shared/date.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(private dateService: DateService) { }

  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
