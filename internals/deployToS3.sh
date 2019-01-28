set x

# Get AWS PROFILE and Bucket from environment variables
echo Profile: $AWS_PROFILE
echo S3_Bucket: $S3_BUCKET_NAME
echo CloudFront Distribution: $CLOUDFRONT_ID

if [ -z "$AWS_PROFILE" ]; then
  echo AWS_PROFILE not found
  exit
fi
if [ -z "$S3_BUCKET_NAME" ]; then
  echo S3_BUCKET not found
  exit
fi

export AWS_PROFILE=$AWS_PROFILE

echo Synching Build Folder: $S3_BUCKET_NAME...
aws s3 sync build/ s3://$S3_BUCKET_NAME --delete --cache-control max-age=31536000,public

echo Adjusting cache...
aws s3 cp s3://$S3_BUCKET_NAME/sw.js s3://$S3_BUCKET_NAME/sw.js --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type application/javascript --acl public-read
aws s3 cp s3://$S3_BUCKET_NAME/index.html s3://$S3_BUCKET_NAME/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read

if [ ! -z "$CLOUDFRONT_ID" ]; then
    echo Invalidating cloudfront cache
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*"
fi
