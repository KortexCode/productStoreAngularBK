const dotenv = require('dotenv');
dotenv.config();

interface ConfigEnv {
  port: string;
  dbHost: string;
  dbPassword: string | undefined;
  dbName: string;
}

const config: ConfigEnv = {
  port: process.env.PORT || '3000',
  dbHost: process.env.SQHOSTNAME || 'root',
  dbPassword: process.env.SQPASSWORD,
  dbName: process.env.SQBDNAME || 'name',
};

export { config };
