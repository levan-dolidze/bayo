import { animate, style, transition, trigger } from '@angular/animations';

export let fade =  trigger('fade', [
   
    transition('void => *', [
      style({backgroundColor:'yellow',opacity:0}),
      animate(500)
    ])
    

  ])
