import * as apigateway from '@aws-cdk/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as path from 'path';
import { Table } from '@aws-cdk/aws-dynamodb';

export class FirstAwsCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const apiGateway = new apigateway.RestApi(this , 'APIGW' , {});
    apiGateway.root.addMethod('GET');
    apiGateway.root.addMethod('POST');

    const userResource = apiGateway.root.addResource('users');

    const tableUsers = new dynamodb.Table(this , 'Users' , {
      partitionKey:{ name: 'id', 
                      type: dynamodb.AttributeType.STRING 
                    },
      sortKey :{ name :'task_id', 
                  type : dynamodb.AttributeType.STRING
                },
    });
    
    const lambdaListUsers = new lambda.Function(this , 'lambdalistusers' , {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname,'lambda-handler')),
      environment:{
        Table_Name_User : tableUsers.tableName,
      }
    });

    userResource.addMethod('GET' , new apigateway.LambdaIntegration(lambdaListUsers));
    userResource.addMethod('PUT');

    tableUsers.grantReadData(lambdaListUsers);
    // example resource
    // const queue = new sqs.Queue(this, 'FirstAwsCdkAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
