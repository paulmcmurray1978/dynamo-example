import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const command = new QueryCommand({
    TableName: "pwmDynamoDwp",
    KeyConditionExpression:
      "id = :id",
    ExpressionAttributeValues: {
      ":id": event.pathParams.id,
    },
    ConsistentRead: true,
  });

  const response = await docClient.send(command);
  console.log(response);
  return response.Items[0];
};
