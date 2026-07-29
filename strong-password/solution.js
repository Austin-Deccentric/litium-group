/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an ARRAY OF STRINGS.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */


function minimumNumber(n, password) {
    let msgs = [];

    if (n < 6) {
        msgs.push("Password must be at least 6 characters");
    }

    if (!/\d/.test(password)) {
        msgs.push("Password must contain at least one digit",);
    }

    if (!/[a-z]/.test(password)) {
        msgs.push("Password must contain at least one lowercase letter")
    }

    if (!/[A-Z]/.test(password)) {
        msgs.push("Password must contain at least one uppercase letter")
    }

    if (!/[!@#$%^&*()\-+]/.test(password)) {
        msgs.push("Password must contain at least one special character (!@#$%^&*()-+)")
    }

    return msgs;
}

module.exports = minimumNumber;
