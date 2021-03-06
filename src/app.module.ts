import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PanierModule } from './panier/panier.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'), AuthModule, PanierModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
