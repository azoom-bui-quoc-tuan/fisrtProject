import bcrypt from 'bcrypt';
export const encodeHash = (pass: string): string => {
  return bcrypt.hashSync(pass, 10);
};

export const compassHash = (plainPass: string, hashPass: string): boolean => {
  try {
    return bcrypt.compareSync(plainPass, hashPass);
  } catch (error) {
    throw error;
  }
};
