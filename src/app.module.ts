import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { ProductsModule } from './products/products.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 51759,
      username: 'httt_admin',
      password: '12345678',
      database: 'CompanyX',
      entities: [join(__dirname, '**', '*.entities.{js,ts}')],
      extra: {
        trustServerCertificate: true,
      },
      autoLoadEntities: true,
      
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasources: DataSource) {}
}
