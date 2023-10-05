const cheerio = require("cheerio");
const request=require("request");
const getissuehtml=require("./getissuehtml");
const { response } = require("express");
function withintopic (url,topic){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);

        } 
        else{
            getrepolink(html,topic)
       
        }
    }
}
function getrepolink(html,topic){
  let $=  cheerio.load(html);
 let m= $(".f3.color-fg-muted.text-normal.lh-condensed");
 console.log(topic);
for(let i=0;i<8;i++){

    let nik =$(m[i]).find("a");
    let link=$(nik[1]).attr("href");
    let unlink="https://github.com"+link+"/issues";
    let reponame=link.split("/").pop();
    
    console.log(reponame);
    console.log(unlink);
   getissuehtml(unlink,topic,reponame);

   

}
}
module.exports=withintopic;

