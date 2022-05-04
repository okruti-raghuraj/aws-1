import * as cdk from 'aws-cdk-lib';
//import * as cdk from '@aws-cdk/core';
import { Construct } from 'constructs';
import { CodePipeline ,  CodePipelineSource , ShellStep } from 'aws-cdk-lib/pipelines';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const pipeline = new CodePipeline(this , 'Pipeline' ,{
      pipelineName: 'TestPipeline',
      crossAccountKeys: false,
      synth: new ShellStep('synth' , {
        input: CodePipelineSource.gitHub('RaghurajSingh/SMS','aws-pipeline'),
        commands:['npm ci' ,
                  'npm run build',
                  'npx cdk synth']
      }),
    });
    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkPipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
