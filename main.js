const url="https://github.com/topics"
const cheerio = require("cheerio");
const request=require("request");
const   withintopic=require("./withintopic")
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
       extract(html);
    }
}
function extract(html){
   let $= cheerio.load(html);
  let nikhil= $(".no-underline.d-flex.flex-column.flex-justify-center");
  for(let i =0;i<nikhil.length;i++){
    let m=$(nikhil[i]).attr("href");
   let topic= m.split("/").pop();
   console.log(topic);
    let url="https://github.com"+m;

    withintopic(url,topic)
}
}

