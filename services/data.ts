export interface ProfileProps {
  name: string;
  email: string;
  photo: string;
  username: string;
  role: "Frontend Developer" | "Backend Developer" | "Fullstack Developer";
}

export const data: ProfileProps[] = [];

// Generate random names
const RandomNames = [
  "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry",
  "Ivy", "Jack", "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn",
  "Rose", "Sam", "Tina", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane",
  "Abigail", "Benjamin", "Chloe", "Daniel", "Emily", "Fiona", "George",
  "Hannah", "Isaac", "Julia", "Kevin", "Lily", "Mason", "Nora", "Oscar",
  "Penelope", "Quentin", "Rachel", "Simon", "Tiffany", "Ulysses", "Violet",
  "William", "Xavier", "Yasmine", "Zoey", "Stephen", "Gerrard", "Adewale",
];

// Generate 50 sample profiles
for (let i = 0; i < RandomNames.length; i++) {
  const name = RandomNames[i];
  if (name) {
    const profile: ProfileProps = {
      name,
      role:
        i % 3 === 0
          ? "Backend Developer"
          : i % 2 === 0
          ? "Frontend Developer"
          : "Fullstack Developer",
      email: `${name.toLowerCase()}@example.com`,
      username: `user${name.toLowerCase()}_username`,
      photo: `https://source.unsplash.com/random/200x200?sig=${i}`,
    };
    data.push(profile);
  } else {
    console.warn(`Skipped generating profile for index ${i}`);
  }
}
