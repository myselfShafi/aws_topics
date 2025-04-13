import { DeleteObjectCommand, GetObjectCommand, ListObjectsV2Command, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// -------------------- config.js --------------------- //
// create a user in --IAM > Users-- to get the below credentials
const client = new S3Client({
  region: "aws_region",
  credentials: {
    accessKeyId: "aws_access_key",
    secretAccessKey: "aws_secret",
  },
});

const bucketName = "aws_bucket_name";


// these options can be specific for each use-case, i.e; in getObject, putObject
let preSignOptions = {
  expiresIn: 3600, // by default 900 seconds/15mins
  hoistableHeaders: new Set[header_names], // Headers to include in the signed URL
  unhoistableHeaders: new Set[header_names], // Headers to exclude from being signed
  signableHeaders: new Set[header_names], // Headers allowed to be signed
  unsignableHeaders: new Set[header_names], // Headers you want to exclude from signing
  signingDate, // Set a specific date/time to use for signing. default: current time of request
  signingRegion, // Override the AWS region used in signing
  signingService, // Override the service used for signing (usually 's3')
};

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "aws_bucket_name",
    Key: key, // key name of the media file or object file in s3
  });

  // this generates a presignedurl for private bucket, security purposes
  return await getSignedUrl(client, command, preSignOptions);
};
// await getObjectURL('bucket.jpeg');

async function putObjectUrl(fileName, contentType) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: `uploads/media/${fileName}`, // path/location where you want to save file, in this case root folder is uploads
    ContentType: contentType
  });

  // this generates a presignedurl for private bucket, security purposes
  return await getSignedUrl(client, command, preSignOptions);
};
// await putObjectUrl(`img_${Date.now()}.jpeg`, 'image/jpeg');

async function listObjects() {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Key: `/`, // path/location 
  });

  return await client.send(command);
};

async function deleteObject() {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: `/`, // path/location 
  });

  return await client.send(command);
};