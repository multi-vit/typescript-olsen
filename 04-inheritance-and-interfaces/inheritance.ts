// Inheritance is a key part of OOP

// A class can extend another class
// The subclass uses the extends keyword

// The class that has been extended is called the superclass
// The subclass can override superclass methods
// The subclass can invoke superclass methods and constructors, via the super keyword

// A good example is having a superclass of Animal and a subclass of Dog that extends it.
// The Animal class will have a move method which will be overridden to be specific to Dog

// N.B. Under the covers, TypeScript inehritance is transpiled into prototypical inheritance in JavaScript

// Additional techniques in the superclass:
// Can be abstract (cannot instantiate) - useful for classes that are too non-specific (e.g. Animal)
// Can have abstract methods (must be overridden) - e.g. Animal having an abstract method called makeNoise(), that must be overridden for each animal
// Can have protected members (accessible to subclasses)

// Additional techniques in client code:
// Type-checks via instanceof
// Type-casts via as and <type>

// See below example relating to Film Reviews - which can be brief or critical
// N.B. This would usually be separated across a few files

// Superclass
abstract class Review {
  constructor(protected _score: number) {}

  public get score() {
    return this._score;
  }
  // Convenience method to convert score to string for you
  toString() {
    return `Score: ${this._score}`;
  }
}

// Subclass
class BriefReview extends Review {
  constructor(score: number, private comment: string) {
    // Has to call the constructor of the superclass as _score has to be overridden
    super(score);
  }

  toString() {
    // Calls the super.toString() method to get the score as this was inherited (not in the class itself)
    return `Brief review: ${super.toString()}, comment: ${this.comment}`;
  }
}

class CriticalReview extends Review {
  private observations: string[];

  constructor(
    score: number,
    private mediaOutlet: string,
    ...observations: string[]
  ) {
    super(score);
    this.observations = observations;
  }

  get numObservations() {
    return this.observations.length;
  }

  toString() {
    return `Critical review: ${super.toString()}, media outlet: ${
      this.mediaOutlet
    }, observations: ${this.observations.join(",")}`;
  }
}

class Film {
  // Way to seed a unique ID - see line 89 which is incrementing ID each time
  private static nextId: number = 0;

  private id: number;
  private genres: string[] = [];
  private reviews: Review[] = []; // Can hold BriefReview and CriticalReview objects as both extend Review. It's a polymorphic collection.

  constructor(
    private title: string,
    private blurb: string,
    private price: number
  ) {
    this.id = Film.nextId++;
  }
  // Variadic rest parameter
  addGenres(...genres: string[]) {
    for (let genre of genres) {
      this.genres.push(genre);
    }
  }

  review(review: Review) {
    this.reviews.push(review);
  }

  get genresAsString() {
    return this.genres.join(" ");
  }
  // Iterates through reviews and separates them on to their own line
  // calling toString() on BriefReview and CriticalReview will return different things
  get reviewsAsString() {
    let str: string = "";
    for (let review of this.reviews) {
      str += review.toString() + "\n";
    }
    return str;
  }

  get averageScore() {
    let total: number = 0;
    for (let review of this.reviews) {
      total += review.score;
    }
    return total / this.reviews.length;
  }

  toString() {
    return `[${this.id}] ${this.title}, ${this.blurb}, £${this.price}, [genres ${this.genresAsString}], [ratings ${this.reviewsAsString}], average score ${this.averageScore}`;
  }
}

// Client code.
let film: Film = new Film(
  "Spectre",
  "Bond is back in a frantic battle against his classic foe and his white cat",
  8.99
);

film.review(new BriefReview(5, "Great film"));
film.review(
  new CriticalReview(
    4,
    "Daily Mail",
    "Great action sequences",
    "Daniel Craig looking a bit old now"
  )
);
film.review(new CriticalReview(5, "The Sun", "Nice cat", "Great scenery"));
film.review(new BriefReview(3, "I prefer Bourne"));
console.log(film.reviewsAsString);

processReview(new BriefReview(5, "Great film"));
processReview(new CriticalReview(5, "The Sun", "Nice cat", "Great scenery"));

function processReview(review: Review) {
  if (review instanceof CriticalReview) {
    let criticalReviewA = review as CriticalReview;
    console.log(
      `Critical review, ${criticalReviewA.numObservations} observations`
    );
    // Alternate way or writing the above 4 lines:
    let criticalReviewB = <CriticalReview>review;
    console.log(
      `Critical review, ${criticalReviewB.numObservations} observations`
    );
  } else {
    console.log("Brief review, no observations");
  }
}
