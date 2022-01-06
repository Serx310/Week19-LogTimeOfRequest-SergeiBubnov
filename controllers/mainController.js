const date = require('../getDate.js');
const Log = require('../models/log')

exports.getMainPage = (request, response)=>{
    
    
    Log.fetchLogs(logs => {
        console.log(logs);
        let today = date.getDate();

        let newLog = new Log(today)
        
        response.render('index', {dateToRender: today, myLogs: logs});
        newLog.saveLog();
    });

    

};

