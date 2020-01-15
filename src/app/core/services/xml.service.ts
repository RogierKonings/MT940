import { Injectable } from '@angular/core';

import { MT940, IMT940Creator } from 'src/app/models/mt940.model';

@Injectable({
  providedIn: 'root'
})
export class XMLService implements IMT940Creator {

  public getMT940(data: string | ArrayBuffer): Array<MT940> {
    return null;
  }

  createMT940ObjectArray(records: string[], headerLength: number) {
    return null;
  }

  createMT940Object(records: Array<string>): MT940 {
    return null;
  }
}
