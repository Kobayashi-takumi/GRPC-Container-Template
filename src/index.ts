import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js"
import { GreeterService } from "./gen/helloworld_grpc_pb"
import { HelloReply, HelloRequest } from "./gen/helloworld_pb"

function sayHello(
  call: ServerUnaryCall<HelloRequest, HelloReply>,
  callback: sendUnaryData<HelloReply>
) {
  const greeter = new HelloReply()
  const name = call.request.getName()
  const message = `Hello ${name}`

  greeter.setMessage(message)
  callback(null, greeter)
}

function startServer() {
  const server = new Server()
  server.addService(GreeterService as any, { sayHello })
  server.bindAsync(
    `0.0.0.0:4000`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error)
      }

      server.start()
      console.log(`server start listing on port ${port}`)
    }
  )
}

startServer()
