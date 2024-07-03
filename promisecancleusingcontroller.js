function cancellablePromise() {
    const controller = new AbortController();
    const signal = controller.signal;

    const promise = new Promise((resolve, reject) => {
        signal.addEventListener('abort', () => {
            reject('Promise cancelled');
        });

        setTimeout(() => {
            if (!signal.aborted) {
                resolve('Promise resolved');
            }
        }, 5000);
    });

    return {
        promise,
        cancel: () => controller.abort()
    };
}

const { promise, cancel } = cancellablePromise();

promise.then(console.log).catch(console.error);

// To cancel:
setTimeout(() => {
    cancel();
}, 2000);