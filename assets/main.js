
const hash_type_select = document.getElementById('hash_type_id');

const hash_types = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5'];

hash_types.forEach( (hash_type) => 
{

    hash_type_select.options.add(new Option(hash_type.toUpperCase(), hash_type));

});