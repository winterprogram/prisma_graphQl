import { createTransport } from 'nodemailer';
import { Communication } from '../types/enums';
import { IMail } from '../types/interfaces';

export const mailSender = async (
  email: string,
  type: Communication,
  otp?: number,
  link?: string,
): Promise<void> => {
  try {
    const transporter = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER_NAME,
          pass: process.env.PASSWORD,
        },
      }),
      emailTemp = textHelper(type, otp, link),
      { body, subject } = emailTemp;
    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject,
      text: body,
      //   html: '<b>Hello world?</b>', // html body
    });
  } catch (err) {
    console.error(err);
  }
};

function textHelper(type: Communication, otp?: number, link?: string): IMail {
  let res: IMail;
  switch (type) {
    case Communication.OTP:
      res = { body: `Your OTP is ${otp}`, subject: 'OTP' };
      break;
    case Communication.RESET:
      res = { body: `Your reset link is ${link}`, subject: 'Reset Link' };
      break;
  }
  return res;
}
