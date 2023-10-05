const request=require("request");
const cheerio = require("cheerio");
const fs=require("fs");
const path=require("path");
function getissuehtml (url,topic,reponame){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);

        } 
        else{
           getissue(html,topic,reponame);
       
        }
    }


function getissue(html,topic,reponame){
let $=cheerio.load(html)
let issue=$(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title")
let arr=[];
for(let i=0;i<issue.length;i++){
    let link=$(issue[i]).attr("href");
    arr.push(link);
}
let folderpath=path.join(__dirname,topic);
dirCreater(folderpath);
let filepath=path.join(folderpath,reponame+".json");
fs.writeFileSync(filepath,JSON.stringify(arr))
}


}
module.exports=getissuehtml
function dirCreater(folderpath){
    if(fs.existsSync(folderpath)==false){
        fs.mkdirSync(folderpath)

    }

}