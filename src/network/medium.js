// src/network/medium.js

export const fetchMediumPosts = async () => {
  try {
    const response = await fetch(
      "https://d66tavnhn5bjyqikin3bwqglre0xxtin.lambda-url.ap-south-1.on.aws/"
    );
    console.log(response)

    if (!response.ok) {
      throw new Error("Failed to fetch Medium posts");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
};
