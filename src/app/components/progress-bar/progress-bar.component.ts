import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() prop: string='';

  @Input() fuerza: number;
  @Input() destreza: number;
  @Input() vida: number;

  constructor() {

  }
  ngOnInit(): void {
    console.log('prop');
    console.log(this.fuerza);
  }
}
