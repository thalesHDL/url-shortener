import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UrlShortenerController } from "./controller/url-shortener.controller";
import { UrlStoreEntity } from "./entity/url-store.entity";
import { IEncoderService, RandomEncoderService } from "./service/encoder.service";
import { IUrlShortenerService, UrlShortenerService } from "./service/url-shortener.service";

@Module({
    imports: [TypeOrmModule.forFeature([UrlStoreEntity])],
    controllers: [UrlShortenerController],
    providers: [
        {provide: IEncoderService, useClass: RandomEncoderService},
        {provide: IUrlShortenerService, useClass: UrlShortenerService}
    ],
    exports: [IUrlShortenerService]
})
export class UrlShortenerModule {}
