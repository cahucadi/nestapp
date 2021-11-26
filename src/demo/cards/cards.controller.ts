import { Controller, Req } from '@nestjs/common';

@Controller('cards')
export class CardsController {

    getIndex(@Req() request):string{

        return "This are my cards!";
    }

}
