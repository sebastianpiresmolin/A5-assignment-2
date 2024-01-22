import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use('/static', express.static('./static'));

app.get('/', (response, page) => {
  response.prependListener(page);
});

app.listen(5080);
