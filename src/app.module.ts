import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { KnexModule } from '@nestjsplus/knex';
import { ConfigModule } from './config/config.module';
import { MassiveModule } from '@nestjsplus/massive';

@Module({
  imports: [
    ConfigModule,
    KnexModule.registerAsync({
      useExisting: ConfigService,
    }),
    MassiveModule.registerAsync(
      {
        useExisting: ConfigService,
      },
      {
        useExisting: ConfigService,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
