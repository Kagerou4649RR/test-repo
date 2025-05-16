import { APIGatewayProxyResult } from "aws-lambda";

export const handler = async (): Promise<APIGatewayProxyResult> => {
  const now = new Date().toISOString();
  return {
    statusCode: 200,
    body: JSON.stringify({ time: now }),
  };
};