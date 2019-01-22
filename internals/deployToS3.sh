set x

# Get AWS PROFILE and Bucket from environment variables
echo Profile: $AWS_PROFILE
echo S3_Bucket: $S3_BUCKET_NAME

 if [ -z "$AWS_PROFILE" ]; then
    echo AWS_PROFILE not found
    exit
  fi
if [ -z "$S3_BUCKET_NAME" ]; then
  echo S3_BUCKET not found
  exit
fi

export AWS_PROFILE=$AWS_PROFILE
echo Deleting Bucket Contents: $S3_BUCKET_NAME...
aws s3 rm --recursive s3://$S3_BUCKET_NAME

echo Synching Build Folder: $S3_BUCKET_NAME...
aws s3 sync build/ s3://$S3_BUCKET_NAME
