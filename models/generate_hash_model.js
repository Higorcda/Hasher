
const crypto = require('crypto');

function generate_hash(content, hash_type) 
{

    try 
    {

        const hashed_content = crypto.createHash(hash_type).update(content).digest('hex');

        return { status: true, error: null, hashed_content: hashed_content };

    } catch (error) 
    {

        return { status: false, error: `Content Hashing Failure - Error Message => ${error}`, hashed_content: null };

    }

}

module.exports = generate_hash;