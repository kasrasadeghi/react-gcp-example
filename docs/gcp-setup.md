# Putting the App on GCP

I
used
[this website](https://medium.com/google-cloud/how-to-deploy-a-static-react-site-to-google-cloud-platform-55ff0bd0f509) for
setup.

- Go to Google Cloud Storage.
- Make a new bucket, call it something. I'll call it [bucket-name].
- In the React App, run "npm run build." There should be a folder
  called build/.
- Then go to the bucket, and upload the build/ folder to the
  bucket. (There should be a button that says 'Upload Folder').
```bash
#!/bin/bash

touch app.yaml
[editor] app.yaml # I use emacs
```

- Copy paste this into app.yaml:
```yaml
runtime: python27
api_version: 1
threadsafe: true
handlers:
- url: /
  static_files: build/index.html
  upload: build/index.html
- url: /
  static_dir: build
```
- Upload this file as well. There should be build/ and app.yaml on
  your GCP Bucket.
- Open Google Cloud Shell (button looks like [>_])
```bash
#!/bin/bash
# on gcloud shell
mkdir test-app
gsutil rsync -r gs://[bucket-name] ./test-app
cd test-app
gcloud app deploy
```
- You should now have a link to a running website.
