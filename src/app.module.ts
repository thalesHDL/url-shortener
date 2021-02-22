import { Module } from '@nestjs/common';
import { AppController } from './app.contoller';
import { DatabaseModule } from './database.module';

import { UrlShortenerModule } from './url-shortener/url-shortener.module';


@Module({
    controllers: [AppController],
    imports: [
        UrlShortenerModule,
        DatabaseModule
    ]
})
export class AppModule {}
