import { Component } from '@angular/core';
import { NoxiusComponent } from './noxius/noxius.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NoxiusComponent],
  template: `
    <p>
      characters works!
    </p>
  `,
  styles: ``
})
export class CharactersComponent {

}
