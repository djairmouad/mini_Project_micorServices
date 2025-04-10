const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { verifyToken } = require("../Middleware/authService"); // <-- Adjust path if needed

const PROTO_PATH = path.join(__dirname, "../../protoFiles/user.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition).userPackage;

const server = new grpc.Server();

server.addService(userProto.UserService.service, {
  VerifyToken: (call, callback) => {
    const token = call.request.token;

    const result = verifyToken(token);

    if (result.isValid) {
      callback(null, { id: result.id, isValid: true });
    } else {
      callback(null, { id: "", isValid: false });
    }
  },
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  server.start();
  console.log(`🟢 gRPC Server is running on port ${port}`);
});
