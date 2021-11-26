import { Controller, Req } from '@nestjs/common';

@Controller('cards')
export class CardsController {

    getIndex(@Req() request: Request):string{

        return "This are my cards!";
    }

}
