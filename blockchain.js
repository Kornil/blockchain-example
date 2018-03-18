class Blockchain {
  constructor() {
    this.chain = new Set();
    this.currentTransactions = new Set();
  }

  newBlock = (proof, previousHash) => {
    const block = {
      index: this.chain.length + 1,
      timestamp: new Date(),
      transactions: this.current_transactions,
      proof: proof,
      previous_hash: previousHash
    };
    this.current_transactions = new Set();
    this.chain.add(block);
    return block;
  };

  newTransaction = (sender, recipient, amount) => {
    this.current_transactions.push({
      sender: sender,
      recipient: recipient,
      amount: amount
    });
    return this.chain.size + 1;
  };

  hash = block => {
    const blockString = JSON.stringify(block);
    const hash = crypto
      .createHmac(process.env.HASH_TYPE, process.env.CRYPTO_SECRET)
      .update(blockString)
      .digest("hex");

    return hash;
  };

  lastBlock = () => {
    return [...this.chain].pop();
  };
}

module.exports = Blockchain;
