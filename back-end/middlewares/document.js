        const  jsonFormat=(req,res,next)=>{
            res.header("content-type","application/json;charset=utf8");
            next();
        };

        const documentList=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.documentList)});
        }
        const addedDocumentList=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.documentList)});
        }

        module.exports={
            jsonFormat,
            documentList,
            addedDocumentList,
        }