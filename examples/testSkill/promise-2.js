/*------------------------------------------------------*/
/* promise basic example

function job() {
    return 'hello world';
}
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve(job), 2000);
});

promise.then(func => console.log(func()));

function job() {
    return 'hello world';
}

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(job), 2000);
});

promise.then(func => console.log(func()));

function job(resolve, reject) {
    return setTimeout(() => resolve('hello world'), 2000);
}

const message = new Promise(job);
message.then(msg => console.log(msg));

function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('hello world'), 2000);
    })
}
job.then(msg => console.log(msg));

function job() {
    const data = 'hello world';
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(data);
    }, 2000)})
    .then(msg => msg);
}
*/
/*------------------------------------------------------*/
/* promise example
function job(data) {
    return new Promise((resolve, reject) => {
        if(isNaN(data))
            reject('error');
        else if(data % 2 !== 0)
            setTimeout(() => {
                resolve('odd')
            }, 1000);
        else if(data % 2 === 0)
            setTimeout(() => {
            reject('even')
            }, 2000);
        })
        .then(message => message)
        .catch(message => message)
}

job(4).then(msg => console.log(msg))
.catch(msg => console.log(msg));
*/

/*------------------------------------------------------*/
/* chaining promises

var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';
})

.then(function(data3) {
    console.log('data3', data3);
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}
*/
/*------------------------------------------------------*/