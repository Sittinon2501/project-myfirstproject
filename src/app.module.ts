import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HouseModule } from './house/house.module';
import * as path from 'path';
import { House } from './house/entities/house.entity';

@Module({
  imports: [
    // ใช้ ConfigModule เพื่อโหลดไฟล์ .env
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '..', '.env'), // กำหนดไฟล์ .env
      isGlobal: true, // ทำให้ environment variables สามารถใช้ได้ทั่วทั้งแอป
    }),

    // ตั้งค่า TypeOrmModule ด้วย environment variables
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost', // ค่า default หากไม่มีการตั้งค่า
      port: parseInt(process.env.DB_PORT || '3306', 10), // ค่า default หากไม่มีการตั้งค่า
      username: process.env.DB_USERNAME || 'root', // ค่า default หากไม่มีการตั้งค่า
      password: process.env.DB_PASSWORD || 'root', // ค่า default หากไม่มีการตั้งค่า
      database: process.env.DB_DATABASE || 'house', // ค่า default หากไม่มีการตั้งค่า
      entities: [
        House, // เพิ่ม House entity ที่นี่
        // กำหนดให้ TypeORM ใช้ .ts ในโหมด development และ .js ในโหมด production
        process.env.NODE_ENV === 'production'
          ? path.join(__dirname, '**/*.entity.js') // ใช้ .js สำหรับ production
          : path.join(__dirname, '**/*.entity.ts'), // ใช้ .ts สำหรับ development
      ],
      synchronize: true, // ควรตั้งเป็น false ใน production เพื่อป้องกันการลบข้อมูล
      logging: process.env.NODE_ENV === 'development', // เปิด log เฉพาะในโหมด development
    }),

    HouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
