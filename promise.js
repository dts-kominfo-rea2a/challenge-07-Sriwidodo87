const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//const promiseOutput = null;
const promiseOutput = async(emosi)=>{
  let x = await promiseTheaterIXX();
  let y = await promiseTheaterVGC();



 let hasilData =[];
hasilData.push(x);
hasilData.push(y);

if(emosi==='marah'){
  let xcounter = hasilData[0].filter((a)=>a.hasil == 'marah')
  let ycounter = hasilData[1].filter((a)=> a.hasil == 'marah') 
  return xcounter.length + ycounter.length
}
else {
  let xcounter = hasilData[0].filter((a)=>a.hasil == 'tidak marah')
  let ycounter = hasilData[1].filter((a)=> a.hasil == 'tidak marah') 
  return xcounter.length + ycounter.length
}

  
  
 

};
 
 







module.exports = {
  promiseOutput,
};
