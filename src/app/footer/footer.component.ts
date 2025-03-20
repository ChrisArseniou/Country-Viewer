import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  onGithub(){
    let link=document.createElement('a');
    link.href='https://github.com/ChrisArseniou';
    link.click();
  }

}
