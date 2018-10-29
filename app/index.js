import SuperPerson from './person';

const BillyBoy = new SuperPerson('BillyBoy', 'Run like the wind');
const Sarah = new SuperPerson ('Sarah', "eating with chopsticks");
BillyBoy.greet();
Sarah.greet();

BillyBoy.saySuperpower();

Sarah.saySuperpower();