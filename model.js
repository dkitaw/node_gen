// inverter
// id:	String,	true
// inverterType:	String,	true
// maximumOutputCurrent:	Number,	true
// maximumOutputPower:	Number,	true
// cec:	Number,	true
// maximumDcVoltage:	Number,	true
// nominalOutputPower:	Number,	true
// startUpVoltage:	Number,	true"
let modelName = "";
let variableType = "";
let variableName = "";
let variableNameFirstCapital = "";
lineOfCode1 = "// inverter	";
lineOfCode2 = "// id:	String,	true ";
modelName = lineOfCode1.split(" ")[1];
variableType = lineOfCode2.split(":")[0].split("//")[1];
variableName = lineOfCode2.split(":")[1].split(",").map(a=>a.trim().replace('\t',''));
console.log("modelName: ",modelName);
console.log("variableType: ",variableType);
console.log("variableName: ",variableName);
