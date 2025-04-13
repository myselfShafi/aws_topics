import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// create a user in --IAM > Users-- to get the below credentials
const client = new S3Client({
  region: "aws_region",
  credentials: {
    accessKeyId: "aws_access_key",
    secretAccessKey: "aws_secret",
  },
});

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "aws_bucket_name",
    Key: key,
  });

  let options = {
    expiresIn: 3600, // by default 900 seconds
    hoistableHeaders: new Set[header_names], // Headers to include in the signed URL
    unhoistableHeaders: new Set[header_names], // Headers to exclude from being signed
    signableHeaders: new Set[header_names], // Headers allowed to be signed
    unsignableHeaders: new Set[header_names], // Headers you want to exclude from signing
    signingDate, // Set a specific date/time to use for signing. default: current time of request
    signingRegion, // Override the AWS region used in signing
    signingService, // Override the service used for signing (usually 's3')
  };

  // this generates a presignedurl for private bucket, security purposes
  const url = await getSignedUrl(client, command, options);
  return url;
};
