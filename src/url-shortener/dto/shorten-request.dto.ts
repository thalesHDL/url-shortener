import { ApiProperty } from "@nestjs/swagger";

export class ShortenRequestDto {
    @ApiProperty({description: "The url that will be shortened", example: "http://www.google.com"})
    public url: string;
    constructor(url: string) {
        this.url = url;
    }
}
