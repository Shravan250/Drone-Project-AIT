import { Client } from '../models/user.model';
import errResponse from '../utils/errResponse';
import sucResponse from '../utils/sucResponse';

export const signup = async (req: any, res: any, next: any) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new errResponse('Kindly Provide all arguments', 400);
    }

    const clientExist = await Client.findOne({ username: username });

    if (clientExist) {
      throw new errResponse('Username already exists', 400);
    }

    const client = await Client.create({
      username,
      password,
      email,
    });

    await client.save();
    return res.json(
      new sucResponse(true, 200, 'Account Created Successfully', client),
    );
  } catch (error) {
    next(error);
  }
};

export const signin = async (req: any, res: any, next: any) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new errResponse('Please Provide all fields', 400);
    }

    const client = await Client.findOne({ email }).select('+password');

    if (!client) {
      throw new errResponse('User doesnt exist', 400);
    }

    const isMatch = await client.isPasswordValid(password);

    if (!isMatch) {
      throw new errResponse('Incorrect Password', 400);
    }

    const token = await client.generateToken();

    const options = {
      sameSite: 'None',
      secure: true,
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    return res
      .cookie('token', token, options)
      .json(new sucResponse(true, 200, 'Login Success', { token }));
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: any, res: any, next: any) => {
  try {
    res
      .clearCookie('token')
      .json(new sucResponse(true, 200, 'Logout successfully'));
  } catch (error) {
    next(error);
  }
};

export const IAM = async (req: any, res: any, next: any) => {
  try {
    const client = req.user;
    return res.json(new sucResponse(true, 200, 'User fetched Sucess', client));
  } catch (error) {
    next(error);
  }
};
