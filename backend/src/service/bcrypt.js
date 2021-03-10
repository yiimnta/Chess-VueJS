import bcrypt from 'bcrypt';
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

/**
 * @param myPlaintextPassword is the password to hash to storing in the database
 * return hash: string
 */
const hashPassword = async (myPlaintextPassword) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(myPlaintextPassword, salt);
};

/**
 * string hash is from database ,the myPlaintextPassword is passwourd need to compare
 * @param myPlaintextPassword
 * @param hash
 * return true or false
 */
const decryptPassword = async (myPlaintextPassword, hash) => {
    return bcrypt.compareSync(myPlaintextPassword, hash); // true
};

export default {
    hashPassword,
    decryptPassword
}
