"use client";

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  name: z.string().optional(),
  answer: z.string().min(2, { message: "Answer is required" }),
});

const FormFull = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      answer: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (data.name === "") {
      data.name = "Anonymous";
    }

    const submissionData = {
      name: data.name,
      answer: data.answer,
      date: new Date().toLocaleDateString("en-US"), // Formato MM/DD/YYYY
    };

    setIsSubmitting(true);

    try {
      const webhookUrl =
        "https://script.google.com/macros/s/AKfycbx_TgkgRnVkC5UQd-5J5g0ob_z8Goa_k-gmGYMqIfdwdTKOwaQkXD6bfa5doDLxjcrVMw/exec"; // Reemplaza con tu URL del webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        console.log("Data sent successfully to Google Sheets");
        resetForm();
      } else {
        console.error("Failed to send data to Google Sheets");
      }
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    setIsAnonymous(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div className="flex flex-col justify-center items-center md:flex-row gap-5 px-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="!text-3xl font-steelFish text-center text-white rounded-none 
                    placeholder:font-steelFish placeholder:text-3xl pb-8 pt-8 disabled:bg-white disabled:placeholder:text-black disabled:opacity-100"
                    placeholder={isAnonymous ? "Anonymous" : "Your Name"}
                    disabled={isAnonymous}
                    required={!isAnonymous}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className={`border-e-slate-200 border-2 h-14 w-40 rounded-none transition-colors duration-300  hover:transition-all pb-8 pt-8 ${
              isAnonymous
                ? "invert opacity-100"
                : "hover:invert disabled:opacity-100"
            }`}
            id="anonymusbutton"
            onClick={() => setIsAnonymous(!isAnonymous)}
            type="button"
          >
            <Image
              className="w-auto h-auto "
              src="/images/wanonymous.png"
              alt="anonymous"
              id="anonymousimg"
              width={40}
              height={40}
            />
          </Button>

          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your Answer"
                    className="!text-3xl font-steelFish text-center text-white rounded-none 
                    placeholder:font-steelFish placeholder:text-3xl pb-8 pt-8"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`border-e-slate-200 border-2 h-14 w-40 rounded-none font-steelFish text-3xl p-6 font-medium hover:bg-slate-200 hover:text-black pb-8 pt-8 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormFull;
