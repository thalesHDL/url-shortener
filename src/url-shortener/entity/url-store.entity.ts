import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: "URL_STORE_TABLE"})
export class UrlStoreEntity {
    @PrimaryColumn("varchar", { name: "CODE", length: 10, unique: true})
    code: string;
    @Column("varchar", { name: "URL", length: 255, nullable: false })
    url: string;

    public static of(code: string, url: string): UrlStoreEntity {
        return new UrlStoreEntity(code, url);
    }

    constructor(code: string, url: string) {
        this.code = code;
        this.url = url;
    }
}
