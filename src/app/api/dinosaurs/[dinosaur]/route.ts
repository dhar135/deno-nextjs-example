// Importing the JSON data from a file with the type specified as JSON
import data from "../data.json" with {type: "json"};
// Importing the NextRequest type from the next/server module
import { NextRequest } from "next/server";

// Defining a type for the route parameters, which includes a dinosaur name
type RouteParams = {
  params: {
    dinosaur: string;
  };
};

// Exporting a GET function that handles incoming requests
export const GET = (request: NextRequest, context: RouteParams) => {
    // Checking if the dinosaur parameter is provided in the context
    if(!context?.params?.dinosaur) {
        // If not, return a JSON response indicating no dinosaur name was provided
        return Response.json("No dinosaur name provided");
    }

    // Finding the dinosaur in the data that matches the provided name (case insensitive)
    const dinosaur = data.find((item) =>
        item.name.toLowerCase() === context.params.dinosaur.toLowerCase()
    );

    // Returning a JSON response with the found dinosaur or a message indicating no dinosaur was found
    return Response.json(dinosaur ? dinosaur : "No dinosaur found");
}