import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "Guest";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}!` }),
  };
};