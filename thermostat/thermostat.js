class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
    this.powerSavingModeLimit = 25;
    this.minimum_temperature = 0;
    this.maximum_temperature = 30;
  };

  getTemperature = () => {
    return this.temperature;
  }; 

  up = () => {
    if (!(this.powerSavingMode && this.temperature >= this.powerSavingModeLimit) && this.temperature != this.maximum_temperature) {
      this.temperature += 1;
    };
  };

  down = () => {
    if (this.temperature != this.minimum_temperature) {
      this.temperature -= 1;
    };
  };

  reset = () => {
      this.temperature = 20;
  };

  setPowerSavingMode = (boolean) => {
    if (boolean) {
      this.powerSavingMode = true;
      if (this.temperature > this.powerSavingModeLimit) {
        this.temperature = this.powerSavingModeLimit;
      };
    } else if (!boolean) {
      this.powerSavingMode = false;
    };
  };
};

module.exports = Thermostat;