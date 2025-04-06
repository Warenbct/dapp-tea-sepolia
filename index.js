const connectWalletBtn = document.getElementById('connectWallet');
const nativeConnectWalletBtn = document.getElementById('nativeConnectWallet');
const stakeUnstakeSection = document.getElementById('stakeUnstake');

const stakeButton = document.getElementById('stakeButton');
const unstakeButton = document.getElementById('unstakeButton');
const stakeSection = document.getElementById('stakeSection');
const unstakeSection = document.getElementById('unstakeSection');

stakeButton.addEventListener('click', () => {
    unstakeSection.classList.add('hidden');
    stakeSection.classList.toggle('hidden');
});

unstakeButton.addEventListener('click', () => {
    stakeSection.classList.add('hidden');
    unstakeSection.classList.toggle('hidden');
});

const nativeStakingContract = '0x665Bd0eAdbE5689B97d21b49C9a3eDCe76bFd3d0';
const nativeContractABI = [
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newRewardRate",
				"type": "uint256"
			}
		],
		"name": "setRewardRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Staked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Unstaked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "unstakePartial",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "calculateReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getPendingReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getStakedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getTotalReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalStaking",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalUniqueStakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasStaked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SCALE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastClaimTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalReward",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pendingReward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStaking",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUniqueStakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let nativeContract;
let accounts = [];

async function switchOrAddChain(chainId) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId,
                        chainName: 'TEA-Sepolia',
                        nativeCurrency: {
                            name: 'TEA',
                            symbol: 'TEA',
                            decimals: 18
                        },
                        rpcUrls: ['https://tea-sepolia.g.alchemy.com/public'],
                        blockExplorerUrls: []
                    }],
                });
            } catch (addError) {
                console.error('Failed to add TEA-Sepolia network:', addError);
                showNotification('Failed to add TEA-Sepolia network', 'error');
                throw addError;
            }
        } else {
            console.error('Failed to switch to TEA-Sepolia network:', switchError);
            showNotification('Failed to switch to TEA-Sepolia network', 'error');
            throw switchError;
        }
    }
}

function showNotification(message, type = 'info') {
    const colors = {
        info: 'blue',
        success: 'green',
        error: 'red',
        warning: 'yellow'
    };

    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white bg-${colors[type]}-500 animate-fade-in`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('animate-fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        try {
            const chainId = await ethereum.request({ method: 'eth_chainId' });
            const TEA_SEPOLIA_CHAIN_ID = '0x27ea';

            if (chainId !== TEA_SEPOLIA_CHAIN_ID) {
                await switchOrAddChain(TEA_SEPOLIA_CHAIN_ID);
            }

            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length === 0) {
                throw new Error('No accounts found');
            }

            nativeConnectWalletBtn.classList.add('hidden');
            connectWalletBtn.classList.remove('hidden');
            stakeUnstakeSection.classList.remove('hidden');
            document.getElementById("tvlnative").classList.remove('hidden');
            document.getElementById("uniqueNative").classList.remove('hidden');

            await initializeWeb3();

            await updateConnectButton(accounts[0]);
            await updateAllData();

            showNotification('Wallet connected successfully!', 'success');

        } catch (error) {
            console.error('Initialization failed:', error);
            showNotification('Failed to connect wallet', 'error');
        }
    } else {
        console.error('MetaMask is not installed!');
        showNotification('MetaMask is not installed!', 'error');
    }
}

async function updateAllData() {
    try {
        await Promise.all([
            initializeWeb3(),
            updateAccountBalance(),
            updateStakedAmount(),
            updateRewardAmount(),
            updateTotalStaking(),
            updateUniqueStakersDisplay()
        ]);
    } catch (error) {
        console.error('Failed to update some data:', error);
    }
}

function updateConnectButton(account) {
    connectWalletBtn.textContent = `${account.substring(0, 5)}...${account.substring(account.length - 4)}`;
}

async function initializeWeb3() {
    web3 = new Web3(window.ethereum);
    nativeContract = new web3.eth.Contract(nativeContractABI, nativeStakingContract);
}

async function updateAccountBalance() {
    const balanceElement = document.getElementById('balance');
    const ethBalance = await web3.eth.getBalance(accounts[0]);
    const formattedEthBalance = (ethBalance / 10 ** 18).toFixed(2);
    balanceElement.textContent = formattedEthBalance;
}

function setMaxStakeAmount() {
    const balance = document.getElementById('balance').textContent;
    document.getElementById('stakeAmount').value = balance;
}

function setMaxUnstakeAmount() {
    const stakedAmount = document.getElementById('stakedAmount').textContent;
    document.getElementById('unstakeAmount').value = stakedAmount;
}

async function stake() {
    const amount = document.getElementById('stakeAmount').value;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        showNotification('Invalid stake amount', 'error');
        return;
    }

    const confirmStake = confirm(`You are about to stake ${amount} TEA. Confirm?`);
    if (!confirmStake) return;

    try {
        const stakedAmount = web3.utils.toWei(amount, 'ether');
        showNotification('Processing stake... Please confirm in MetaMask', 'info');

        const receipt = await nativeContract.methods.stake()
            .send({ from: accounts[0], value: stakedAmount });

        showNotification('Stake Successful!', 'success');
        console.log('Stake Successful!', {
            amount: amount,
            transactionHash: receipt.transactionHash,
            explorerLink: `https://sepolia.tea.xyz/tx/${receipt.transactionHash}`
        });

        await Promise.all([
            updateAccountBalance(),
            updateStakedAmount(),
            updateRewardAmount(),
            updateTotalStaking(),
            updateUniqueStakersDisplay()
        ]);

        stakeSection.classList.add('hidden');
        stakeClicked = false;

    } catch (error) {
        const errorMsg = error.message.includes('User denied')
            ? 'Transaction canceled by user'
            : 'Stake failed';

        showNotification(errorMsg, 'error');
        console.error('Transaction Failed:', error.message);
    }
}

async function unstakePartial() {
    const amount = document.getElementById('unstakeAmount').value;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        showNotification('Invalid unstake amount', 'error');
        return;
    }

    try {
        const stakedBalanceWei = await nativeContract.methods.getStakedAmount(accounts[0]).call();
        const stakedBalance = web3.utils.fromWei(stakedBalanceWei);

        if (Number(amount) > Number(stakedBalance)) {
            showNotification('Insufficient staked balance', 'error');
            return;
        }

        const confirmUnstake = confirm(`Confirm Unstake:\n\nYou will unstake: ${amount} TEA\nFrom total Staked: ${stakedBalance} TEA`);
        if (!confirmUnstake) return;

        showNotification('Processing unstake... Please confirm in MetaMask', 'info');

        const unstakedAmount = web3.utils.toWei(amount);
        const unstakeTx = await nativeContract.methods
            .unstakePartial(unstakedAmount)
            .send({ from: accounts[0] });

        showNotification('Unstake Successful!', 'success');
        console.log('Unstake Successful!', {
            unstakedAmount: amount,
            remainingBalance: (stakedBalance - amount).toFixed(2),
            transactionHash: unstakeTx.transactionHash,
            explorerLink: `https://sepolia.tea.xyz/tx/${unstakeTx.transactionHash}`
        });

        await updateUnstakeData();
        unstakeSection.classList.add('hidden');
        unstakeClicked = false;

    } catch (error) {
        let errorMessage = 'Failed to unstake';

        if (error.message.includes('User denied')) {
            errorMessage = 'Transaction canceled';
        } else if (error.message.includes('exceeds staked amount')) {
            errorMessage = 'Unstake amount exceeds balance';
        }

        showNotification(errorMessage, 'error');
        console.error(errorMessage, error);
    }
}

async function updateUnstakeData() {
    await Promise.all([
        updateAccountBalance(),
        updateStakedAmount(),
        updateRewardAmount(),
        updateTotalStaking()
    ]);
}

async function claimReward() {
    try {
        const pendingRewardWei = await nativeContract.methods.getPendingReward(accounts[0]).call();
        const pendingReward = web3.utils.fromWei(pendingRewardWei);

        if (Number(pendingReward) <= 0) {
            showNotification('No rewards available', 'info');
            return;
        }

        const confirmClaim = confirm(`Confirm Claim Reward:\n\nYou will claim: ${Number(pendingReward).toFixed(4)} TEA`);
        if (!confirmClaim) return;

        showNotification('Processing claim... Please confirm in MetaMask', 'info');

        const claimTx = await nativeContract.methods
            .claimReward()
            .send({ from: accounts[0] });

        showNotification('Reward Claimed Successfully!', 'success');
        console.log('Claim Reward Successful!', {
            amount: Number(pendingReward).toFixed(4),
            transactionHash: claimTx.transactionHash,
            explorerLink: `https://sepolia.tea.xyz/tx/${claimTx.transactionHash}`
        });

        await Promise.all([
            updateAccountBalance(),
            updateRewardAmount()
        ]);

    } catch (error) {
        let errorMessage = 'Failed to claim reward';

        if (error.message.includes('User denied')) {
            errorMessage = 'Transaction canceled';
        } else if (error.message.includes('No reward to claim')) {
            errorMessage = 'No rewards available';
        }

        showNotification(errorMessage, 'error');
        console.error(errorMessage, error);
    }
}

async function updateStakedAmount() {
    const stakedAmountElement = document.getElementById('stakedAmount');
    const stakedAmount = await nativeContract.methods.getStakedAmount(accounts[0]).call();
    const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(2);
    stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateRewardAmount() {
    const rewardAmountElement = document.getElementById('rewardAmount');
    const rewardAmount = await nativeContract.methods.getPendingReward(accounts[0]).call();
    const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
    rewardAmountElement.textContent = formattedRewardAmount;
}

setInterval(updateRewardAmount, 1000);

async function updateTotalStaking() {
    const totalStaking = await nativeContract.methods.getTotalStaking().call();
    const totalStakingInEth = web3.utils.fromWei(totalStaking, 'ether').toString();
    const totalStakingRounded = parseFloat(totalStakingInEth).toFixed(0);
    document.getElementById('totalStaking').textContent = totalStakingRounded;
}

async function updateUniqueStakersDisplay() {
    try {
        const uniqueStakersCount = await nativeContract.methods.getTotalUniqueStakers().call();
        
        const formattedCount = Number(uniqueStakersCount).toLocaleString();
        
        const uniqueStakersElement = document.getElementById('uniqueStakers');
        if (uniqueStakersElement) {
            uniqueStakersElement.textContent = formattedCount;
        }
        
        const container = document.getElementById('uniqueNative');
        if (container) {
            container.classList.remove('hidden');
        }
        
        console.log('Updated unique stakers count:', formattedCount);
    } catch (error) {
        console.error('Failed to update unique stakers:', error);
    }
}

setInterval(updateUniqueStakersDisplay, 3000);

window.addEventListener('load', async () => {
    if (window.ethereum) {
        ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });

        ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            if (accounts.length > 0) {
                updateConnectButton(accounts[0]);
                updateAllData();
            } else {
                window.location.reload();
            }
        });

        try {
            await init();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
});