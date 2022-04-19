// import { Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk';
import { Construct } from 'constructs';
import * as apigateway from '@aws-cdk/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FirstAwsCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new apigateway.RestApi(this , 'APIGW' ,{});
    // example resource
    // const queue = new sqs.Queue(this, 'FirstAwsCdkAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
