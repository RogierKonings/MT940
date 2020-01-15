import { Injectable } from '@angular/core';

import { FileTypes } from 'src/app/models/file-types.model';
import { MT940 } from 'src/app/models/mt940.model';

import { CSVService } from 'src/app/core/services/csv.service';
import { XMLService } from 'src/app/core/services/xml.service';
import { ValidationService } from 'src/app/core/services/validation.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private csvService: CSVService,
    private xmlService: XMLService,
    private validationService: ValidationService
  ) {}

  private isSupportedType(file: File): boolean {
    return file.type === FileTypes.CSV || file.type === FileTypes.XML;
  }

  public async readFile(file: File): Promise<Array<MT940>> {
    if (!this.isSupportedType(file)) {
      throw new Error('Not a supported file type');
    }
    try {
      let mt940arr: Array<MT940>;
      const fileContent = await this.retrieveFileContent(file);
      if (file.type === FileTypes.CSV) {
        mt940arr = this.csvService.getMT940(fileContent.target.result);
      }
      if (file.type === FileTypes.XML) {
        mt940arr = this.xmlService.getMT940(fileContent.target.result);
      }
      this.validationService.validateMT940(mt940arr);
    } catch (error) {
      throw new Error(`Cannot create the ${file.type} file`);
    }
  }

  private async retrieveFileContent(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = resolve;
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
}
