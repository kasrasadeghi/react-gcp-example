#!/bin/bash

- run these commands to get going
```bash
cd ~
rm -rf test-app
gsutil rsync -r gs://[bucket-name] ./test-app
cd test-app; gcloud app deploy; gcloud app browse; cd ..
```
