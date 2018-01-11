var mongoose = require('mongoose');
var resp = require('./../../methods/response.js');
var setupResponse = resp.setupResponse;
var config = require('../../config/env/default');


const Solutions = require('../../models/solutions');


/***
 * 
 * s => solutions
 * 
 * 
 * ***/

const GET = 'get';
const PUT = 'put';
const POST = 'post';
const DELETE = 'delete';

const constants = {
    'API': 'api',
    'version': 'v0'
}



const ops = {
    [GET]: 'get',
    [POST]: 'post',
    [PUT]: 'put',
    [DELETE]: 'delete'
}

const whatShouldHappen = '';// functions

const apiVersion = constants.API + '/' + constants.version + '/';

const getUrl = ( url ) => ( apiVersion + url );

module.exports = function(app) {
    
    const api = (x, y) => {
        
        const kToN = {
            'solution': 's',
            'requirement': 'r' 
        }
        
        // url is generic for an api
        
        // endpoints can also be defined separately
        
        // pass the implementation as a function callback
        app[x]( getUrl ('s'), (req, res) => {
            query.exec(function(err, item) {
                if (err) {
                    return []
                } else {
                    return item
                }
            });
        })
    }
    
    api(GET, 's');
    api(PUT, 's');
    api(POST, 's');
    api(DELETE, 's');

    
    // place the code to actually think and work 

};
