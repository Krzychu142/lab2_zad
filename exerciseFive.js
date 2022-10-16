const _ = require('lodash');

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];


const re = new RegExp("(.*\@.*\.[a-z])", "g");
const result = _.filter(collections, (o) => typeof(o) === 'string')
result.sort()
result.map( (r) => {if(r.match(re)) console.log(r.match(re))})
