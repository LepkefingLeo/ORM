import { PartialType } from '@nestjs/mapped-types';
import { CreateMyserverDto } from './create-myserver.dto';

export class UpdateMyserverDto extends PartialType(CreateMyserverDto) {}
