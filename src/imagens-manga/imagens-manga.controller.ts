import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagensMangaService } from './imagens-manga.service';
import { CreateImagensMangaDto } from './dto/create-imagens-manga.dto';
import { UpdateImagensMangaDto } from './dto/update-imagens-manga.dto';

@Controller('imagens-manga')
export class ImagensMangaController {
  constructor(private readonly imagensMangaService: ImagensMangaService) {}

  @Post()
  create(@Body() createImagensMangaDto: CreateImagensMangaDto) {
    return this.imagensMangaService.create(createImagensMangaDto);
  }

  @Get()
  findAll() {
    return this.imagensMangaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagensMangaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagensMangaDto: UpdateImagensMangaDto) {
    return this.imagensMangaService.update(+id, updateImagensMangaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagensMangaService.remove(+id);
  }
}
