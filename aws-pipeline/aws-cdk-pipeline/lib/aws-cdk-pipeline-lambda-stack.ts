// import * as cdk from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import { Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';


// export class LambdaStack extends cdk.Stack{
//     constructor(scope: Construct , id: string , props?: cdk.StackProps){
//         super(scope , id , props);

//         new Function(this, 'lambdafunction' ,{
//             runtime: Runtime.NODEJS_12_X,
//             handler: 'index.handler',
//             code: new InlineCode('exports.handler = _ => "Hello, CDK";')
//         });
//     }
// }