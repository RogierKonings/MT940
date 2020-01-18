import { Injectable } from '@angular/core';

import { FileTypes } from 'src/app/models/file-types.model';
import { MT940 } from 'src/app/models/mt940.model';

import { CSVService } from 'src/app/core/services/csv.service';
import { XMLService } from 'src/app/core/services/xml.service';
import { ValidationService } from 'src/app/core/services/validation.service';
import { FileService } from 'src/app/core/services/file.service';
/**
 * Service responsible for creating a report of a MT940 validation
 */
import { ValidationField } from 'src/app/models/validation.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private csvService: CSVService,
    private xmlService: XMLService,
    private validationService: ValidationService,
    private fileService: FileService
  ) {}

  public async createReport(file: File): Promise<Array<ValidationField>> {
    if (!this.fileService.isSupportedType(file)) {
      throw new Error('Not a supported file type');
    }
    try {
      let mt940arr: Array<MT940>;
      const fileContent = await this.fileService.readFileContent(file);
      if (file.type === FileTypes.CSV) {
        mt940arr = this.csvService.getMT940(fileContent.target.result);
      }
      if (file.type === FileTypes.XML) {
        mt940arr = this.xmlService.getMT940(fileContent.target.result);
      }
      return this.validationService.validateMT940(mt940arr);
    } catch (error) {
      throw new Error(`Cannot create the ${file.type} file`);
    }
  }
}
