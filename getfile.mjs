
import { Endpoint } from "@ndn/endpoint";
import { Interest } from "@ndn/packet";
import { TcpTransport, UdpTransport, UnixTransport } from "@ndn/node-transport";

// This node connects to the UCLA Testbed node
// and sends a ping message to the Arizona node

// Create a face
const uplink = await UdpTransport.createFace({}, "suns.cs.ucla.edu");

// Construct an Endpoint on the default Forwarder instance.
const endpoint = new Endpoint();

// We can now send Interests and retrieve Data.
const interest = new Interest(`/ndn/edu/ucla/python-repo/decentar/test/client/shakespeare001`);
console.log(`<I ${interest.name}`);
try {
   const data = await endpoint.consume(interest);
   console.log(data.content);
} catch (err) {
   console.warn(err);
}

uplink.close();
