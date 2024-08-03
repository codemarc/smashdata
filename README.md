# smashdata

a simple utility for encrypting and decrypting files.

It provides a simple preshared key solution to encrypt secrets at rest (so you can check them into source control). This means that the utility allows users to encrypt sensitive information so that it can be safely stored, even in source control systems like Git. By encrypting these secrets, users can ensure that sensitive data remains secure even if the source code repository is accessed by unauthorized individuals.

To use the utility, you can run it with the following command:

```code
smash [options] <file>

The available options are:

-k <key>:     Specify the key to use for encryption/decryption.
              If not provided, the file path is used as the key.

-n:           output to console and do not write or delete.

-v:           Enable verbose mode, which prints messages indicating
              whether the file is being encrypted or decrypted.

-h or --help: Display the usage information. For example,
              to encrypt the file example.txt with the
              key mysecretkey, you would run:

smash -k mysecretkey example.txt

This will create an encrypted file example.txt.bin and delete the original example.txt file.

To decrypt the example.txt.bin file, you would run:

smash -k mysecretkey example.txt


This will create the decrypted example.txt file and delete the example.txt.bin file.

You can install this local version globally by
npm install -g ./smashdata
```


you can call this from your code as well:

npm i smashdata

```js
import { encrypt,decrypt } from "smashdata"
const seed = "my_secret_seed"; // Replace with your secret seed

// Encrypt a string
const encryptedString = encrypt(seed, "Hello, world!");
console.log(encryptedString)

const decryptedString = decrypt(seed, encryptedString);
console.log(decryptedString)
```

