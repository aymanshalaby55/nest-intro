import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) { // come after parsing the decorator();
    console.log('ValidateCreateUserPipe', value , metadata);
    return value;
  }

}
