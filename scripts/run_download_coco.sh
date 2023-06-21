echo "Installing AWS Cli Tools..."
sudo apt-get install unzip
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
echo "Confirming the installation: "
aws --version

echo "Downloading and Preparing COCO dataset..."
aws s3 ls --no-sign-request s3://fast-ai-coco/
aws s3 cp s3://fast-ai-coco/annotations_trainval2017.zip annotations_trainval2017.zip --no-sign-request
aws s3 cp s3://fast-ai-coco/val2017.zip val2017.zip --no-sign-request
aws s3 cp s3://fast-ai-coco/test2017.zip test2017.zip --no-sign-request
aws s3 cp s3://fast-ai-coco/train2017.zip train2017.zip --no-sign-request

unzip annotations_trainval2017.zip -d .
unzip val2017.zip -d .
unzip test2017.zip -d .
unzip train2017.zip -d .

# rm val2017.zip test2017.zip train2017.zip annotations_trainval2017.zip
cp annotations/instances_train2017.json annotations/instances_train.json
cp annotations/instances_val2017.json annotations/instances_val.json
