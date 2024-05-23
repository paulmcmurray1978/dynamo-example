import * as AWS from 'aws-sdk'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
export const handler =    async (event) => {
  const command = new PutCommand({
    TableName: "pwmDynamoDwp",
    Item: {
      id: event.pathParams.id.toString(),
      name:"joh"
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};
