import { Pipe, PipeTransform } from '@angular/core';
import { Razas } from '../interfaces/razas.interface';


@Pipe({
  name: 'Imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(raza: Razas): string  {

    console.log('Pipe imagen se proceso');

    if(raza.alt_img===''){
      return 'assets/razas/no-image.png';
  }else if(!raza.raza && !raza.alt_img ){         
      return 'assets/razas/no-image.png';
  }else if( raza.alt_img){
      return raza.alt_img;
  }else{           
      console.log(raza);
      return  `assets/razas/${raza.raza}.jpg`;
  }
 
}

 
}
 





