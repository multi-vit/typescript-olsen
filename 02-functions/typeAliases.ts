// You can define a type alias to represent any type
// Improves code readability, consistency and maintainability
// Also allows reusability
// Use a capital letter for type alias names
// Also see interfaces in 04-inheritance-and-interfaces/interfaceProperties.ts
// Almost the same but type aliases CANNOT be extended once they are initialised (whereas Interfaces can)

// Using Loc as location is already defined in TypeScript node_modules
type Loc = { longitude: number; latitude: number; population?: number };

function displayLocationWithTypeAlias(location: Loc) {
  console.log(`Longitude: ${location.longitude}`);
  console.log(`Latitude: ${location.latitude}`);
  if (location.population !== undefined) {
    console.log(`Population: ${location.population}`);
  }
}

displayLocationWithTypeAlias({
  longitude: -3.94,
  latitude: 51.62,
  population: 275_000,
});
