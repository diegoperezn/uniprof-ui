ng build --prod --aot 
aws s3 cp ./dist s3://uniprof-app --recursive