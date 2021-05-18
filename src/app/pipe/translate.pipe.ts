import { Pipe, PipeTransform } from '@angular/core';
//todo

import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private translate: TranslateService
  ) { }

  transform(value: any, args?: any): any {
    return this.translate.getTranslate(value) ? this.translate.getTranslate(value) : '';
  }

}
