import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Configuration } from "./config/configuration";
import { UrlStoreEntity } from "./url-shortener/entity/url-store.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres", 
            host: Configuration['datasource']['host'],
            port: Configuration['datasource']['port'],
            username: Configuration['datasource']['username'],
            password: Configuration['datasource']['password'],
            database: Configuration['datasource']['database'],
            synchronize: Configuration['datasource']['synchronize'],
            entities: [UrlStoreEntity]
        })
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {}
