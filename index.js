const express= require('express');
const app= express();
app.set('view engine','ejs');

const PORT=process.env.PORT || 2000;
app.use('/',require('./routes/index'));

app.listen(PORT,console.log(`Server is running on port http://localhost/${PORT}`));