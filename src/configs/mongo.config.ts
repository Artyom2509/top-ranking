import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';
import { getConfigFromEnv } from '../helpers';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => ({
  uri: getMongoString(configService),
  ...getMongoOptions(),
});

const getMongoString = (configService: ConfigService) => {
  const { login, pass, host, port, authDB } = getConfigFromEnv(
    {
      login: 'MONGO_LOGIN',
      pass: 'MONGO_PASSWORD',
      host: 'MONGO_HOST',
      port: 'MONGO_PORT',
      authDB: 'MONGO_AUTHDATABASE',
    },
    configService,
  );

  return `mongodb://${login + ':' + pass}@${host + ':' + port}/${authDB}`;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
