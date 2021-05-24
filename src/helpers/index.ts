import { ConfigService } from '@nestjs/config';

interface ConfigFromEnv {
  [key: string]: string | undefined;
}

export const getConfigFromEnv = (
  obj: ConfigFromEnv,
  configService: ConfigService,
) =>
  Object.entries(obj).reduce(
    (acc: ConfigFromEnv, [key, value]) => (
      (acc[key] = configService.get(value!)), acc
    ),
    {},
  );
