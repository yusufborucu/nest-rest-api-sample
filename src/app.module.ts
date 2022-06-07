import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "12345678",
    "database": "nest_rest_api_sample_db",
    "synchronize": false,
    "logging": true,
    "entities": ["dist/**/*.entity.js"]
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
