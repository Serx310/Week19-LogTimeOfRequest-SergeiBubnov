const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'logs.json');

module.exports = class Log {
    constructor(log){
        this.description = log;
    }

    saveLog(){
        fs.readFile(filePath, (error, fileContent) =>{
            let logs = [];

            if(!error){
                logs = JSON.parse(fileContent);
            }
            else{
                console.log(error)
            }

            logs.push(this);

            fs.writeFile(filePath, JSON.stringify(logs), (error) => {
                if(!error){
                    console.log('Time saved to logs.');
                }
            });
        });
    }

    static fetchLogs(callBack){
        fs.readFile(filePath, (error, fileContent) =>{
            if(error){
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

    static deleteWish(wishToDelete){
        fs.readFile(filePath, (error, fileContent)=>{
            let wishes = [];
            if(!error){
                wishes = JSON.parse(fileContent);
            }

            for(let i = 0; i < wishes.length; i++){
                if(wishes[i].description === wishToDelete){
                    wishes.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(filePath, JSON.stringify(wishes), (error)=>{
                if(!error){
                    console.log('Item successfully deleted.');
                }
            });
        });
    }
}

