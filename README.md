# Ethers.js by Example

Learn how to use ethers.js from these examples
The series include 9 contracts and more are to
These are crash course for ethers.js , include major code which is used in making dapps.

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ npm install
```

## Ethers.js scripts

### 1_account.js - Reads balance of ether of wallet address , Transaction count

- Input your infura project ID

```
$ node examples/1_account.js
```

### 2_contractreads.js - Reads the balance of Dai wallet address from the Dai contract

- Input your infura project ID

```
$ node examples/2_contractreadsjs
```

### 3_wallet.js - Transfers 0.025 ether from account1 to account2

- Input your infura project ID
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key

```
$ node examples/3_wallet.js
```

### 4_contractwrite.js - sends LINK token from acc1 to acc2

- Input your infura project ID
- Input your account1 public key
- Input your account2 public key
- Input your account1 private key

```
$ node examples/4_contractwrite.js
```

### 5_events.js - queris the events logged for the contract

- Input your infura project ID
- Input your account1 private key

```
$ node examples/5_events.js
```

### 6_Block.js - Queries a block for transfer events

- Input your infura project ID

```
$ node examples/6_Block.js
```

### 7_ens.js - checks ens address and other ENS variable

- Input your infura project ID
- Input you ens address

```
$ node examples/7_ens.js
```

### 8_provider.js - queries Block , Gas , Fee Data, Transaction data

- Input your infura project ID
- Input transaction hash

```
$ node examples/8_provider.js
```

### 9_deploy.js - delploys a contract with abi , bytecode and signerm

- Input your infura project ID
- Input ABI , bytecode

```
$ node examples/9_deploy.js
```

### 10_utils.js - various utils functions for fromatting and hashing

```
$ node examples/10_utils.js
```
