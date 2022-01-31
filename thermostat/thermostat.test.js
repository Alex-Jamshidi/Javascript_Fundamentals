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

  it('should return a temp of 21 when down method is run', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('should return a temp of 25 when PSM on and attempting to increase past 25', () => {
    thermostat.setPowerSavingMode(true)
    expect(thermostat.getTemperature()).toBe(21);
    for (let i = 0 ; i < 10 ; i++) {
    thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('should return a temp of 26 when up method is run with PSM off', () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it('should return a temp of 20 when reset method is run', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('should return a temp limit of 30 when attempting to increase beyond that', () => {
    for (let i = 0 ; i < 35 ; i++) {
      thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe(30);
  });

  it('should return a temp limit of 0 when attempting to decrease beyond that', () => {
    for (let i = 0 ; i < 35 ; i++) {
      thermostat.down();
      }
      expect(thermostat.getTemperature()).toBe(0);
  });
});