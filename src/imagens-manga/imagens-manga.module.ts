import { Module } from '@nestjs/common';
import { ImagensMangaService } from './imagens-manga.service';
import { ImagensMangaController } from './imagens-manga.controller';

@Module({
  controllers: [ImagensMangaController],
  providers: [ImagensMangaService]
})
export class ImagensMangaModule {}
