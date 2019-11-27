import UserModel from '../models/user.model';
import bcrypt from "bcrypt";

export const getAllUsers = (req, res) => {
  UserModel.find({}, (err, users) => {
    if (err) res.status(500).send(err.message = 'Internal server error');
    res.send(users)
  })
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  UserModel.findById(id, (err, user) => {
    if (err) res.status(500).send(err.message = 'External server error');
    if (!user) res.status(404).send('No user found');
    res.send(user);
  })
};

export const createUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const newUser = new UserModel({email, hash, salt});
    await newUser.save();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateUser = (req, res) => {
  const user = req.body;
  const { id } = req.params;
  UserModel.findOneAndUpdate({ _id: id }, user, { new: true }, err => {
    if (err) res.send(500, err);
    res.send('Successful');
  })
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  UserModel.findByIdAndDelete(id, err => {
    if (err) res.send(500, err);
    res.send('Deleted!')
  })
};
