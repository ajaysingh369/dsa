const jsonfile  = require('jsonfile');
const moment  = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';



const makeCommit = (n) => {
    if(n === 0) return simpleGit().push();
    const x = random.int(0, 54);
    const y = random.int(0, 6);

    const d = moment().subtract(1,'y')
            .add(x, 'w').add(y, 'd').format();
    const data = {date: d };

    //console.log(d);
    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(d, {'--date': d}, makeCommit.bind(this, --n));
    });
}


makeCommit(500);




