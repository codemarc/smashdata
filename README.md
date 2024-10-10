
# smashdata

A simple utility for encrypting and decrypting files. It provides a preshared key solution to encrypt secrets at rest, allowing them to be safely checked into source control systems like Git. This ensures sensitive data remains secure even if the repository is accessed by unauthorized individuals.

## Command Line Usage

To use the utility, run it with the following command:

```bash
smash [options] <file>
```

### Available Options:

- `-k <key>`: Specify the key to use for encryption/decryption. If not provided, the value of the SMASH_KEY environment variable is used as the key.
- `-n`: Output to console and do not write or delete files.
- `-v`: Enable verbose mode, which prints messages indicating whether the file is being encrypted or decrypted.
- `-h or --help`: Display the usage information.

### Examples

#### Encrypting a File
To encrypt the file `example.txt` with the key `mysecretkey`, run:

```bash
smash -k mysecretkey example.txt
```

This will create an encrypted file `example.txt.bin` and delete the original `example.txt` file.

#### Decrypting a File
To decrypt the `example.txt.bin` file, run:

```bash
smash -k mysecretkey example.txt
```

This will create the decrypted `example.txt` file and delete the `example.txt.bin` file.

### Install Globally

You can install this utility globally by running:

```bash
npm install -g @codemarc/smashdata
```

## Programmatic Usage

You can call this utility from your code as well:

### Installation

install in your project
```bash
npm install @codemarc/smashdata
```


### Example Code

```js
import { encrypt, decrypt } from "@codemarc/smashdata";
const seed = "my_secret_seed"; // Replace with your secret seed

// Encrypt a string
const encryptedString = encrypt(seed, "Hello, world!");
console.log(encryptedString);

// Decrypt the string
const decryptedString = decrypt(seed, encryptedString);
console.log(decryptedString);
```

## Secret Use Case

You can also use this utility in a script to handle secrets:

```bash
export SECRET=$(./smash -n secret.txt)
echo $SECRET
```

This will print the contents of `secret.txt` as a secret.
