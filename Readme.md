s3 - simple storage service - multimedia asset storage cloud disk
        - can have multiple(100/account) buckets - each bucket can have multiple objects/folders and subobjects/subfolders
        - on s3, we can also static host our websites(put html/css files in bucket), and connect it to our custom website using cloudfront
        - bucket names should be unique globally, irrespective of users or account.
        - buckets - public, private
        - private bucket requires a token and signature appended to url(as query params), calling it a presigned url
        - presigned urls - we can acheive getObject, putObject

        - event notifications - just like mongo-changestream, we can write lambda func to trigger after selected event like add, update, delete