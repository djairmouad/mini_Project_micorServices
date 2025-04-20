const path = require("path");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Load proto file
const PROTO_PATH = path.join(__dirname, "../../protoFiles/user.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition).userPackage;

// ✅ Fixed: removed space after colon
const client = new userProto.UserService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);
//"localhost"
//"userService"
module.exports = client;

