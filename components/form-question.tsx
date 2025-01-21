"use client";

import React, { useEffect, useState } from "react";
import { fetchQuestions } from "@/actions/fetchQuestions";
import { Input } from "@/components/ui/input";

const FormQuestion = () => {
  const [question, setQuestion] = useState<string | null>(null);
  const [showVideoUpload, setShowVideoUpload] = useState<boolean>(false);

  useEffect(() => {
    const loadQuestion = async () => {
      const questions = await fetchQuestions();
      const today = new Date();
      const startDate = new Date("2025-01-01");
      const dayIndex = Math.floor(
        (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (dayIndex >= 0 && dayIndex < questions.length) {
        setQuestion(questions[dayIndex]);

        // Muestra el formulario de carga de video en el último día
        if (dayIndex === questions.length - 1) {
          setShowVideoUpload(true);
        }
      } else {
        setQuestion("No question available for today.");
      }
    };

    loadQuestion();
  }, []);

  return (
    <div className="text-center my-4">
      <h1 className="text-white text-5xl font-steelFish font-thin px-4">
        {question || "Loading..."}
      </h1>

      {showVideoUpload && (
        <form className="mt-4">
          <Input
            type="file"
            accept="video/*"
            className="block text-white bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 w-1/2 mx-auto"
          />
        </form>
      )}
    </div>
  );
};

export default FormQuestion;
