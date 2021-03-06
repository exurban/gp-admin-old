import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";

class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, "MyFirstBucket", {
      versioned: true,
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      cors: [
        {
          allowedHeaders: ["*"],
          //  @ts-ignore
          allowedMethods: ["POST"], // eslint-ignore-line
          allowedOrigins: ["*"]
        }
      ]
    });
  }
}

export default HelloCdkStack;
