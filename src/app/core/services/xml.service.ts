import { Injectable } from '@angular/core';

import { MT940 } from 'src/app/core/models/mt940.model';

@Injectable({
  providedIn: 'root'
})
export class XMLService {

  public getXMLData(data: string | ArrayBuffer): MT940 {

    return null;
  }
}
