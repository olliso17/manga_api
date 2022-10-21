import { PartialType } from '@nestjs/mapped-types';
import { CreateImagensMangaDto } from './create-imagens-manga.dto';

export class UpdateImagensMangaDto extends PartialType(CreateImagensMangaDto) {}
