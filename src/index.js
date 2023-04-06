import app from './app.js'
import colors from 'colors'

const main = async () => {
    const port = app.get('port');
    app.listen(port, () => {
        console.log(`Server Ok -> Port: ${port}`.blue);
    });
};

main();