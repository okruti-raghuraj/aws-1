import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from '@aws-cdk/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cdk from '@aws-cdk/core';

export class FirstAwsCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const apiGateway = new apigateway.RestApi(this , 'APIGW' {});
    apiGateway.root.addMethod('GET');

    const userResource = apiGateway.root.addResource('users');
    userResource.addMethod('GET');
    // example resource
    // const queue = new sqs.Queue(this, 'FirstAwsCdkAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
