// It's common to pass objects into functions
// The function can specify the object's property names/types
// TypeScript checks that you pass in a compatible object

function displayLocation(location: { longitude: number; latitude: number }) {
  console.log(`Longitude: ${location.longitude}`);
  console.log(`Latitude: ${location.latitude}`);
}

// You have to pass in the stated object with ALL of the declared properties
displayLocation({ longitude: -3.94, latitude: 51.62 });

// This won't work:
// displayLocation({longitude: -4})

// There also cannot be any surprise properties so this won't work:
// displayLocation({longitude: -3.94, latitude: 51.62, population: 275_000})

// For flexibility, you can specify some optional object properties (just like optional parameters):
// - Append ? after a property name
// - As with optional parameters, you must check if the property isn't undefined in the function

function displayLocationWithOptionals(location: {
  longitude: number;
  latitude: number;
  population?: number;
}) {
  console.log(`Longitude: ${location.longitude}`);
  console.log(`Latitude: ${location.latitude}`);
  if (location.population !== undefined) {
    console.log(`Population: ${location.population}`);
  }
}

// This now works!
displayLocationWithOptionals({
  longitude: -3.94,
  latitude: 51.62,
  population: 275_000,
});
