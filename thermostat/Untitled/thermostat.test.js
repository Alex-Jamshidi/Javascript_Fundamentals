const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();

  it('should return an initial temp of 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('should return a temp of 22 when up method is run twice', () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });
});




// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22

// thermostat.down();
// thermostat.getTemperature(); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20