import { Controller, Get, Req } from '@nestjs/common';

@Controller('cards')
export class CardsController {

    @Get()
    getIndex(@Req() request):string{

        return "This are my cards!";
    }

}
