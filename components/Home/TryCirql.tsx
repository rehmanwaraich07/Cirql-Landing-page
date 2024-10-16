"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { tryCirqlFormSchema } from "@/schemas/tryCirqlSchema";
import toast, { Toaster } from "react-hot-toast";
import { BookCopy, PencilIcon, RefreshCcw } from "lucide-react";

const coldEmailContent = `Hey John,

Hope this email finds you well. I'm Elon, and I've got a groundbreaking opportunity that could change the way your business works forever.

We've just launched HyperEfficiency 3000—a revolutionary AI-driven productivity tool that boosts output by 110%. I think it could be a game-changer for your company.

If you're interested, I'd love to schedule a quick 15-minute chat to discuss how this could benefit you.

Let me know what time works for you.

Best,
Elon`;

export default function TryCirql() {
  const form = useForm<z.infer<typeof tryCirqlFormSchema>>({
    resolver: zodResolver(tryCirqlFormSchema),
    defaultValues: {
      senderEmail: "",
      coldEmail: coldEmailContent,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isResponseReceived, setIsResponseReceived] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [useEmailTemplate, setUseEmailTemplate] = useState(false);

  const onSubmit = async (
    values: z.infer<typeof tryCirqlFormSchema>,
    event: React.FormEvent
  ) => {
    event.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setIsResponseReceived(false);

    const { coldEmail, senderEmail } = values;

    toast
      .promise(
        fetch("/api/process-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ coldEmail, senderEmail }),
        }).then(async (res) => {
          const data = await res.json();
          if (data.success) {
            form.setValue("coldEmail", data.response);
            setIsResponseReceived(true);
            return data;
          } else {
            throw new Error(
              data.error || "An error occurred. Please try again."
            );
          }
        }),
        {
          loading: "Cirql is watching your cold email",
          success: "Cirql responded successfully",
          error: (err) => err.message,
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const tryCiqlAgain = (event: React.FormEvent) => {
    event.preventDefault();
    setIsResponseReceived(false);
    setIsEditable(false);
    setUseEmailTemplate(false);
    form.setValue("coldEmail", coldEmailContent);
  };

  const useCirqlTemplate = (event: React.FormEvent) => {
    event.preventDefault();
    form.setValue("coldEmail", coldEmailContent);
  };

  const toggleEdit = (event: React.FormEvent) => {
    event.preventDefault();
    toast.success(`${isEditable ? "Edited" : "You can now edit the template"}`);
    setIsEditable(!isEditable);
    if (isEditable) {
      setUseEmailTemplate(true);
    }
  };

  return (
    <div
      className=" rounded-3xl max-w-5xl mx-auto w-full border-x-0 border-[8px] md:border-[10px] border-dark shadow-sm
     bg-[#F9FAFB] overflow-hidden  "
    >
      <Toaster position="top-center" />
      <div className=" mt-3 bg-primary/10 border-2 w-fit mx-auto border-primary rounded-full flex items-center justify-center py-1 px-4 sm:px-8">
        <Image
          src="/images/logo.png"
          alt="Cirql AI"
          width={80}
          height={80}
          className="h-auto max-sm:w-14 "
          priority
        />
      </div>

      <div className="w-full px-4 py-6 sm:px-8 sm:py-12 flex flex-col items-start justify-start">
        <div className="relative space-y-1 w-full">
          <h2 className="h2-bold try-criql-text-gradient">
            Try Cirql for Free
          </h2>
          <p className="text-base sm:text-lg">
            Send a cold email and see how Cirql handles that cold email.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values, event) =>
              onSubmit(values, event as React.FormEvent)
            )}
            className="space-y-5 sm:space-y-8 mt-16 w-full"
          >
            <FormField
              control={form.control}
              name="coldEmail"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Fragment>
                      <div
                        className={`relative ${isEditable ? "edit-mode" : ""}`}
                      >
                        <Textarea
                          className={`relative no-focus w-full h-[350px] rounded-xl border px-4 sm:px-6 py-6 sm:py-8 bg-white shadow-sm transition-all duration-300 ease-in-out
                            ${
                              isEditable
                                ? "border-primary border-2 bg-primary/5"
                                : "border-primary/30"
                            }
                                ${
                                  isResponseReceived &&
                                  "border-[#079455] bg-[#f0fcf4] "
                                }
                          `}
                          {...field}
                          id="coldEmail"
                          placeholder="Cold Email to test the Cirql"
                          readOnly={!isEditable && !isResponseReceived}
                        />
                        {isEditable && (
                          <div className="absolute inset-0 pointer-events-none border-2 border-primary rounded-xl"></div>
                        )}
                      </div>
                      {/* Buttons */}
                      <div className="absolute top-2 right-4 ">
                        <div className="flex items-center gap-2">
                          {isResponseReceived ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-[13px] sm:text-sm flex items-center gap-1 font-medium"
                              type="button"
                              onClick={tryCiqlAgain}
                            >
                              <RefreshCcw className="h-[14px] w-[14px] sm:h-4 sm:w-4" />
                              Try one more time
                            </Button>
                          ) : (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className={`text-[13px] sm:text-sm flex items-center gap-1 font-medium ${
                                  isEditable
                                    ? "bg-primary text-white hover:bg-primary/90"
                                    : ""
                                }`}
                                onClick={toggleEdit}
                              >
                                <PencilIcon className="h-[14px] w-[14px] sm:h-4 sm:w-4" />
                                {isEditable ? "Done" : "Edit"}
                              </Button>

                              {useEmailTemplate && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-[13px] sm:text-sm flex items-center gap-1 font-medium"
                                  onClick={useCirqlTemplate}
                                >
                                  <BookCopy className="h-[14px] w-[14px] sm:h-4 sm:w-4" />
                                  Use Template
                                </Button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </Fragment>
                  </FormControl>
                  <FormDescription className="text-[#7B8ECA] text-xs sm:text-sm">
                    {isResponseReceived
                      ? "This is the response from Cirql. You cannot edit this content."
                      : isEditable
                      ? "You can now edit the cold email content. Click 'Done' when finished."
                      : "Click the 'Edit' button to modify the cold email content."}
                  </FormDescription>
                  <FormMessage />

                  <div
                    className={`absolute rounded-t-md border border-b-0 ${
                      isResponseReceived
                        ? "bg-[#DCFAE6] border-[#079455]"
                        : "bg-primary/10 border-primary"
                    }  py-1 px-4 -top-9 left-4 sm:left-12`}
                  >
                    <p
                      className={`font-medium ${
                        isResponseReceived ? "text-[#079455]" : "text-primary"
                      }  text-sm`}
                    >
                      {isResponseReceived ? "Cirql Response" : "Cold Email"}
                    </p>
                  </div>
                </FormItem>
              )}
            />
            <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-10 items-start justify-start">
              <div className="flex-grow">
                <FormField
                  control={form.control}
                  name="senderEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="no-focus w-full h-12 rounded-md border border-primary/30 px-4 sm:px-6  bg-white shadow-sm"
                          {...field}
                          type="email"
                          id="senderEmail"
                          placeholder="Your Email"
                        />
                      </FormControl>
                      <FormDescription className="text-[#7B8ECA] text-xs sm:text-sm">
                        Your email will be used to send the response of the cold
                        email to your Inbox.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="shadow-sm h-12 max-sm:w-full font-medium text-base sm:text-lg flex items-center justify-center gap-2"
                disabled={isLoading || isResponseReceived}
              >
                {isLoading
                  ? "Processing..."
                  : isResponseReceived
                  ? "Response Received"
                  : "Send Cold Email"}
                <Image
                  src="/icons/send.svg"
                  alt="send icon"
                  width={20}
                  height={20}
                  className="max-sm:h-4 max-sm:w-5"
                />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
