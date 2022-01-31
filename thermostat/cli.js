
const readline = require('readline');
const Thermostat = require('./thermostat');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermostat = new Thermostat();


const request_command = () => {
  rl.question(`Enter command > `, (command) => {
    execute_command(command, print_result)
  });
};

const execute_command = (command, callback) => {
  switch(command) {
    case 'up':
      {thermostat.up()};
      break;
    case 'down':
      {thermostat.down()};
      break;
    case 'psm on': {
      thermostat.setPowerSavingMode(true);
      console.log('Power Saving Mode: On')
    };
      break;
    case 'psm off': {
      thermostat.setPowerSavingMode(false);
      console.log('Power Saving Mode: Off')
    };
      break;
    case 'reset':
      {thermostat.reset()};
      break;
    default:
      console.log('Invalid - Available commands: up, down, reset, psm on, psm off')
  }
  callback(request_command);
};

const print_result = (callback) => {
  console.log(`Temperature is ${thermostat.temperature}` + maximum_message());
  callback()
};

const maximum_message = () => {
  if (thermostat.powerSavingMode && (thermostat.temperature == thermostat.powerSavingModeLimit)) {
    return ' (maximum reached)'
  } else {return ''};
};

request_command()

