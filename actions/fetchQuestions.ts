"use server";

export async function fetchQuestions(): Promise<string[]> {
  const QUESTIONS_URL =
    "https://script.google.com/macros/s/AKfycbx4xpAaTkeN936Hv_be921BVWeLmcMpIbLdstOF1MRdVzbfKM7bum87PQcpa-aX3exk/exec";

  try {
    const response = await fetch(QUESTIONS_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
}
