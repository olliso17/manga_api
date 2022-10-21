import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YModule } from './y/y.module';
import { ModelModule } from './user/model/model.module';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { PostModule } from './post/post.module';
import { ImagensMangaModule } from './imagens-manga/imagens-manga.module';

@Module({
  imports: [YModule, ModelModule, UserModule, MangaModule, PostModule, ImagensMangaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
