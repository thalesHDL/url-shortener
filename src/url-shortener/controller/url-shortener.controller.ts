import { Body, Controller, Get, Logger, NotFoundException, Param, Post, Res, UseFilters } from "@nestjs/common";
import { ShortenRequestDto } from "../dto/shorten-request.dto";
import { ShortenResponseDto } from "../dto/shorten-response.dto";
import { EntityNotFoundFilter } from "../exception-filter/not-found-exception.filter";
import { IUrlShortenerService } from "../service/url-shortener.service";

@Controller()
export class UrlShortenerController {
    private readonly logger = new Logger(UrlShortenerController.name);

    constructor(private service: IUrlShortenerService){}

    @Post('/encurtador')
    async shorten(@Body() request: ShortenRequestDto): Promise<ShortenResponseDto> {
        this.logger.log("Request to shorten the url: " + request.url)
        const newUrl = await this.service.shorten(request.url);
        return new ShortenResponseDto(newUrl);
    }

    @Get('/:code')
    @UseFilters(EntityNotFoundFilter)
    async redirect(@Res() res: any, @Param('code') code: string): Promise<void> {
        this.logger.log("Request to redirect url with code: " + code)
        await this.service.getRedirecUrl(code)
            .then((redirectUrl: string) => res.redirect(302, redirectUrl));
    }
}