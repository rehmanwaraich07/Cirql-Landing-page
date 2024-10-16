import { z } from "zod";

const MAX_EMAIL_LENGTH = 254; // Maximum allowed length for an email address
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const tryCirqlFormSchema = z.object({
  senderEmail: z
    .string({ required_error: "Your Email is required" })
    .min(1, { message: "Your Email is required" })
    .max(MAX_EMAIL_LENGTH, {
      message: `Email must not exceed ${MAX_EMAIL_LENGTH} characters`,
    })
    .email({ message: "Invalid email address" })
    .refine((email) => EMAIL_REGEX.test(email), {
      message: "Invalid email format",
    })
    .refine((email) => !email.endsWith("."), {
      message: "Email cannot end with a period",
    })
    .refine((email) => email.split("@")[0].length <= 64, {
      message: "Local part of email cannot exceed 64 characters",
    })
    .refine(
      (email) =>
        email
          .split("@")[1]
          ?.split(".")
          .every((part) => part.length <= 63),
      {
        message: "Each part of the domain cannot exceed 63 characters",
      }
    )
    .transform((email) => email.toLowerCase().trim()),
  coldEmail: z
    .string({ required_error: "Cold Email is required to try Cirql" })
    .min(50, { message: "Cold Email should be at least 50 characters" })
    .max(5000, { message: "Cold Email should not exceed 5000 characters" })
    .trim(),
});
