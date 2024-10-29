var frts=['Apple','Banana','orange'];  //"Apple,Banana,orange"\
f=frts.join()
console.log('"',f, '"')


var nu=[1,2,3,4,5]
console.log(nu.join("-"))


var cha=['H', 'e', 'l',  'l',  'o']  //
// cc=cha.join()
// console.log('"' cc '"')
console.log(cha.join(""))


var text ='javascript is nawesome';
//o/p javscript
console.log(text.slice(0,10)) 


var sentence= 'i love learning javascript';
//o/p "learnig"
console.log(sentence.slice(7,15))


var t2= 'fronted development';
//(negative index)o/p development
console.log(t2.slice(-11,))

var date= '2021-10-21';
//o/p:["2024","10","21"]
console.log(date.split())


var ty='i love javascript programming';
//o/p["i","love"]
console.log(ty.split(" ",2))


var url='https://www.example.com/path/page.html';
console.log(url.split("/"))