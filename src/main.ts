import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('VoidPlus API')
    .setDescription(`API desenvolvida no decorrer do módulo 4 do curso de 
    certifucação de desenvolvedores da Blue Edtech, especialidade Fullstack. 
    Este é o primeiro projeto avaliativo do módulo desenvolvido para o backend.`)
    .setVersion('1.0.0')
    .addTag('Users')
    .addTag('Movies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
