import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Filmy API')
    .addServer(`http://localhost:${process.env.PORT || 3001}`)
    .setVersion('1.0.0')
    .build();

  return SwaggerModule.createDocument(app, options);
};

export default swagger;
