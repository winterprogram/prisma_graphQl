import twilio from 'twilio';
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
);

export const sendSms = async (
  phoneNumber: string,
  msg?: string,
): Promise<void> => {
  await client.messages.create({
    body: msg,
    to: `+91${phoneNumber}`,
    from: process.env.PHONE_NUM!,
  });
};
