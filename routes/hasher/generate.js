
const generate_hash = require('./../../models/generate_hash_model.js');

global.router.post('/hasher/generate', (request, response) => 
{

    const { content, hash_type } = request.body;

    let errors = [];

    if (!content)                 { errors.push('Empty Content Field'); }

    if (hash_type == 'hash_type') {    errors.push('Select Hash Type'); }

    if (errors.length > 0) 
    {

        response.render('index', { errors: errors }); return;

    }

    const { status, error, hashed_content } = generate_hash(content, hash_type);

    if ((status == false) && (error != null) && (hashed_content == null)) 
    {

        request.flash('failure', error); response.redirect('/'); return;

    }

    response.render('index', { hashed_content: hashed_content });

});