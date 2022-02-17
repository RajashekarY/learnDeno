import {
    json,
    serve,
    validateRequest,
  } from "https://deno.land/x/sift@0.4.3/mod.ts";
//   import sift from '';

  // AWS has an official SDK that works with browsers. As most Deno Deploy's
  // APIs are similar to browser's, the same SDK works with Deno Deploy.
  // So we import the SDK along with some classes required to insert and
  // retrieve data.
  import {
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
  } from "https://cdn.skypack.dev/@aws-sdk/client-dynamodb?dts";
  
  // Create a client instance by providing your region information.
  // The credentials are obtained from environment variables which
  // we set during our project creation step on Deno Deploy.
  const client = new DynamoDBClient({
    region: "ap-south-1",
    credentials: {
      accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID"),
      secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY"),
    },
  });
