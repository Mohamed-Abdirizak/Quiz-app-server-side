// import mongoose from "mongoose";

// export default async function connect(){
//   await mongoose.connect(process.env.ATLAS_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     writeConcern: {
//         w: 'majority'
//     })
//   console.log("Database connected...");
// }

import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority'
    }
  });
  console.log("Database connected...");
}