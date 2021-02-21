import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UrlStoreEntity } from "../entity/url-store.entity";
import { IEncoderService } from "./encoder.service";

@Injectable()
export abstract class IUrlShortenerService {
    public abstract shorten(url: string): Promise<string>;
    public abstract getRedirecUrl(code: string): Promise<string>;
}

@Injectable()
export class UrlShortenerService implements IUrlShortenerService {
    constructor(@InjectRepository(UrlStoreEntity) private readonly repository: Repository<UrlStoreEntity>,
                private readonly encoderService: IEncoderService) {}

    public async shorten(url: string): Promise<string> {
        const code: string = this.encoderService.encode(url);
        await this.repository.save(UrlStoreEntity.of(code, url));
        return code;
    }

    public async getRedirecUrl(code: string): Promise<string> {
        return await this.repository.findOneOrFail(code)
            .then((entity: UrlStoreEntity) => {return entity.url});
    }
}
