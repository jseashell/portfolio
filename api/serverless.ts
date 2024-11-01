import type { AWS } from '@serverless/typescript';

import contact from '@functions/contact';

const serverlessConfiguration: AWS = {
  service: 'portfolio-api',
  frameworkVersion: '3',
  plugins: ['serverless-bundle'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { contact },
  package: { individually: true },
};

module.exports = serverlessConfiguration;
