import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { SwimlaneModule } from './swimlane/swimlane.module';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Board } from './board/entities/board.entity';
import { Swimlane } from './swimlane/entities/swimlane.entity';
import { Item } from './item/entities/item.entity';

@Module({
  imports: [UserModule, BoardModule, SwimlaneModule, ItemModule,
    TypeOrmModule.forRoot({
      'type':'mysql',
      'host':'localhost',
      'port':3306,
      'username':'root',
      'password':'',
      'database':'trelle',
      entities:[
        User,Board,Item,Swimlane
      ],
      synchronize:process.env.ENV !== 'prodduction',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver],
})
export class AppModule {}
