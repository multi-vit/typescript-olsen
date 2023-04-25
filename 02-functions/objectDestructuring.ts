// You can destructure properties in an object
// Extract properties directly into named variables
// You can then use the named variables directly
// Avoids drilling in to the object using notation or assigning to variables such as
// let longitude = location.longitude;
// You MUST use the same names when destructuring so it knows which property to assign

type Coordinates = {
  longitude: number;
  latitude: number;
  population?: number;
};

function displayLocationWithDestructuring({
  longitude,
  latitude,
  population,
}: Coordinates) {
  console.log(`Longitude: ${longitude}`);
  console.log(`Latitude: ${latitude}`);
  if (population !== undefined) {
    console.log(`Population: ${population}`);
  }
}

displayLocationWithDestructuring({
  longitude: -3.94,
  latitude: 51.62,
  population: 275_000,
});
