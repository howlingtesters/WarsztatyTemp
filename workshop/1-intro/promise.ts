// You don't need to take a look at this file - it is just Promise declaration for example purposes.

const myExecutor = (resolve: any, reject: any) => {
    if (Math.random() > 0.5) {
        resolve('Sure thing!');
    } else {
        reject('No way!'); 
    }
}
  
export const proposeToHer = () => {
    return new Promise(myExecutor);
}