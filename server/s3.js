const {S3} = require("@aws-sdk/client-s3"); 
const { Readable } = require("node:stream");
require("dotenv").config();

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey}
});

async function getImageStream(imageKey){

  try {
  const data = await s3.getObject({Bucket: bucketName, Key: imageKey});

  return new Promise(async (resolve, reject) => {
    const body = data.Body;
    console.log("body", body);
    console.log("data", data);
    if (body instanceof Readable) {
      // const writeStream = createWriteStream(body);
      body
        .pipe()
        // .pipe(writeStream)
        .on("error", (err) => reject(err))
        .on("close", () => resolve(null));
    }
  })

  // // Set the content type of the response
  // const contentType = data.ContentType;

  // // Convert to base64 string
  // const streamToString = await data.Body?.transformToString("base64");

  // // Return the object data in the response
  // return {
  //     statusCode: 200,
  //     headers: {
  //         "Content-Type": contentType
  //     },
  //     body: streamToString,
  //     isBase64Encoded: true
  // };
} catch (error) {           
  return {
      statusCode: 500,
      body: "An error occurred: " + error.message
  };
}




  // const command = new GetObjectCommand({Bucket: bucketName, Key: imageKey});
  // return data = await  s3.getObject({Bucket: bucketName, Key: imageKey});
  // return data = await  s3.getObject({Bucket: bucketName, Key: imageKey});

  // const data = s3Client.send(command)
// 
  // return readableStream = data.Body.transformToWebStream()






  // return s3.getObject({Bucket: bucketName, Key: imageKey})

}

function deleteImage(imageKey){
  return s3.deleteObject({Bucket: bucketName, Key: imageKey}).promise()
}

module.exports = {s3, getImageStream, deleteImage}