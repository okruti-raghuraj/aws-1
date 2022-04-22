import * as cdk from 'aws-cdk-lib';
//import * as cdk from '@aws-cdk/core';
import { Construct } from 'constructs';
import { CodePipeline ,  CodePipelineSource , ShellStep } from 'aws-cdk-lib/pipelines';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new CodePipeline(this , 'Pipeline' ,{
      pipelineName: 'TestPipeline',
      synth: new ShellStep('synth' , {
        input: CodePipelineSource.gitHub('Raghuraj Singh Solanki/SMS','aws-pipeline'),
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
