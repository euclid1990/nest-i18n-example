import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as i18n from 'i18n';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());
  
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.use(i18n.init);

  i18n.configure({
    defaultLocale: 'zh',
    directory: join(__dirname, '..', 'i18n'),
  });

  await app.listen(3000);
}
bootstrap();
