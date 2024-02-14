// Define the interfaces with brand property
interface MajorCredits {
  credits: number;
  _majorBrand: 'MajorCredits'; // Brand property
}

interface MinorCredits {
  credits: number;
  _minorBrand: 'MinorCredits'; // Brand property
}

// Functions to sum major and minor credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'MajorCredits' // Assigning the brand
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'MinorCredits' // Assigning the brand
  };
}

// Test
const major1: MajorCredits = { credits: 3, _majorBrand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, _majorBrand: 'MajorCredits' };

const minor1: MinorCredits = { credits: 2, _minorBrand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 1, _minorBrand: 'MinorCredits' };

const resultMajor = sumMajorCredits(major1, major2);
console.log('Sum of major credits:', resultMajor);

const resultMinor = sumMinorCredits(minor1, minor2);
console.log('Sum of minor credits:', resultMinor);
