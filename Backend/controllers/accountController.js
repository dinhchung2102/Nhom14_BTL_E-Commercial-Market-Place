const Account = require('../models/accountModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createAccount = async (req, res) => {
    const { username, password, user } = req.body;

    const existingAccount = await Account.findOne({ username });
    if (existingAccount) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAccount = new Account({
            username,
            password: hashedPassword,
            role:'user',
            user
        });

        await newAccount.save();
        res.status(201).json({ message: 'Account created successfully', account: newAccount });
    } catch (error) {
        res.status(500).json({ message: 'Error creating account', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const account = await Account.findOne({ username });
        if (!account) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, account.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { accountId: account._id, role: account.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

exports.getAccountById = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id).populate('user');
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching account', error: error.message });
    }
};

exports.updateAccount = async (req, res) => {
    const { username, password, role, user } = req.body;

    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        account.username = username || account.username;
        account.role = role || account.role;
        account.user = user || account.user;

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            account.password = hashedPassword;
        }

        await account.save();
        res.status(200).json({ message: 'Account updated successfully', account });
    } catch (error) {
        res.status(500).json({ message: 'Error updating account', error: error.message });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        await account.remove();
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting account', error: error.message });
    }
};
