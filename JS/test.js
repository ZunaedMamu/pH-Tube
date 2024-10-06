// const isVerified ="";
// /*
// if(isVerified === true){
//     console.log("Verified")
// }
// else{
//     console.log("Not Verified")
// }
// */
// console.log(`${isVerified === true ?"Verified":"Not Verified"}`);

function getTime(time){
    const hour = parseInt(time /3600);
    const remainingSec = parseInt(time % 3600);
    const min = parseInt(remainingSec / 60);
    const sec = parseInt(remainingSec % 60)

    return `${hour}:${min}:${sec}`;
}
console.log(getTime(14800))