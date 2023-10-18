import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './constants/api.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('VoidPlus API')
    .setDescription(
      `API desenvolvida no decorrer do módulo 4 do curso de 
    certifucação de desenvolvedores da Blue Edtech, especialidade Fullstack. 
    Este é o primeiro projeto avaliativo do módulo desenvolvido para o backend.`
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('Users')
    .addTag('Movies')
    .addTag('Auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(environment.PORT);
}
bootstrap();
