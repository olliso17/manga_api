import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { PostModule } from './post/post.module';
import { ImagensMangaModule } from './imagens-manga/imagens-manga.module';
import { PrismaService } from './db.prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MangaModule, PostModule, ImagensMangaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],

})
export class AppModule {}
