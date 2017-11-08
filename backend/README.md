# Quick Start
Just a quick idea of how the Serverless framework works.

### Pre-requisites
- Node.js v6.5.0 or later.
- Serverless CLI v1.9.0 or later. You can run `npm install -g` serverless to install it.
- Set-up your Provider Credentials.
### Deploy the Service
Use this when you have made changes to your Functions, Events or Resources in serverless.yml or you simply want to deploy all changes within your Service at the same time.
```
serverless deploy -v
```
### Deploy the Function
Use this to quickly upload and overwrite your function code, allowing you to develop faster.
```
serverless deploy function -f hello
```
### Invoke the Function
Invokes a Function and returns logs.
```
serverless invoke -f hello -l
```
### Fetch the Function Logs
Open up a separate tab in your console and stream all logs for a specific Function using this command.
```
serverless logs -f hello -t
```
### Cleanup
If at any point, you no longer need your service, you can run the following command to remove the Functions, Events and Resources that were created, and ensure that you don't incur any unexpected charges.
```
serverless remove
```
