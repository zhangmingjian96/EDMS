        const  jsonFormat=(req,res,next)=>{
            res.header("content-type","application/json;charset=utf8");
            next();
        };

        const documentList=(req,res,next)=>{
           
            res.render("docList",{status:res.status,data:JSON.stringify(res.documentList),count:res.count});
        }
        const addedDocumentList=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.documentList)});
        }
        const deleteDocumentList=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.documentList)});
        }
        const editeDocumentList=(req,res,next)=>{
            console.log(123);
            console.log(456)
            console.log(res.status);
            res.render("document",{status:res.status,data:JSON.stringify(res.documentList)});
        }
        const updateDocumentList=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.documentList)});
        }
        const register=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.newUser)});
        }
        const login=(req,res,next)=>{
            res.render("document",{status:res.status,data:JSON.stringify(res.oldUser)});
        }
        module.exports={
            jsonFormat,
            documentList,
            addedDocumentList,
            deleteDocumentList,
            editeDocumentList,
            updateDocumentList,
            register,
            login,
        }