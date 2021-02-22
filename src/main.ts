import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Configuration } from './config/configuration';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';


async function bootstrap() {
    const fastifyAdapter = new FastifyAdapter();
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

    const config = new DocumentBuilder()
        .setTitle(Configuration['swagger']['title'])
        .setDescription(Configuration['swagger']['description'])
        .setVersion(Configuration['swagger']['version'])
        .build();
    const document = SwaggerModule.createDocument(app, config, {include: [UrlShortenerModule],});
    SwaggerModule.setup(Configuration['swagger']['key'], app, document);

    await app.listen(Configuration['server']['port'], Configuration['server']['host']);
}
bootstrap();
