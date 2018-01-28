#!/usr/bin/env node

console.log('Az.')
require('ts-node').register({
    getFile: function(path) {
        console.log(path);

        return require('path').resolve(__dirname, '../src/main.ts');
    }
});