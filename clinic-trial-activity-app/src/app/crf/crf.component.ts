import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'crf-component',
  templateUrl: 'crf.component.html',
  styleUrls: ['./crf.component.css']
})
export class CRFComponent {
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    dataHeaders = [];
    separatorKeysCodes = [ENTER, COMMA];

    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;
        console.log(value);
        if ((value || '').trim()) {
          this.dataHeaders.push(value.trim());
        }
        if (input) {
          input.value = '';
        }
      }
    
      remove(header: any): void {
        let index = this.dataHeaders.indexOf(header);
        if (index >= 0) {
          this.dataHeaders.splice(index, 1);
        }
      }
}
