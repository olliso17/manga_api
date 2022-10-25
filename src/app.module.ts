import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { PostModule } from './post/post.module';
import { ImagensMangaModule } from './imagens-manga/imagens-manga.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [UserModule, MangaModule, PostModule, ImagensMangaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }, 
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
  // {
  //   provide: APP_GUARD,
  //   useClass: JwtAuthGuard,
  // }
],

})
export class AppModule {}
