const os = require("os")
console.log("ram free:",os.freemem()/1024/1024/1024)
console.log("ram free:",os.totalmem()/1024/1024/1024)
console.log("ram free:",os.version())
console.log("ram free:",os.cpus())