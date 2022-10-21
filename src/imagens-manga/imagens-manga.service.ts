import { Injectable } from '@nestjs/common';
import { CreateImagensMangaDto } from './dto/create-imagens-manga.dto';
import { UpdateImagensMangaDto } from './dto/update-imagens-manga.dto';

@Injectable()
export class ImagensMangaService {
  create(createImagensMangaDto: CreateImagensMangaDto) {
    return 'This action adds a new imagensManga';
  }

  findAll() {
    return `This action returns all imagensManga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagensManga`;
  }

  update(id: number, updateImagensMangaDto: UpdateImagensMangaDto) {
    return `This action updates a #${id} imagensManga`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagensManga`;
  }
}
