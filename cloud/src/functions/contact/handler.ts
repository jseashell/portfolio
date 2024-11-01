import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';
import validator from 'validator';
import schema from './schema';

const contact: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const name = validator.escape(event.body.name);
  const message = validator.escape(event.body.message);
  const email = event.body.email;
  if (!validator.isEmail(email)) {
    return {
      statusCode: 500,
      body: 'Invalid email address.',
    };
  }

  const topicMessage = {
    name: name,
    email: email,
    message: message,
  };

  const client = new SNSClient();
  const res = await client.send(
    new PublishCommand({
      Message: JSON.stringify(topicMessage),
      TopicArn: 'arn:aws:sns:us-east-1:008908697155:johnschellinger-contact',
    }),
  );

  return formatJSONResponse({
    data: res,
  });
};

export const main = middyfy(contact);
