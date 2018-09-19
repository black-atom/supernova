$(aws ecr get-login --no-include-email --region us-east-2)
docker build -t respo-test .
docker tag respo-test:latest 014347929281.dkr.ecr.us-east-2.amazonaws.com/respo-test:latest

docker push 014347929281.dkr.ecr.us-east-2.amazonaws.com/respo-test:latest

