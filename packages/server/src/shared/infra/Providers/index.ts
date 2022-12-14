import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';
import { ValidatorOptions } from '@nestjs/common/interfaces/external/validator-options.interface';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}
