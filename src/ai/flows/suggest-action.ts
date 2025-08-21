'use server';

/**
 * @fileOverview Suggests a practical action based on the daily message.
 *
 * - suggestAction - A function that suggests an action related to the daily message.
 * - SuggestActionInput - The input type for the suggestAction function.
 * - SuggestActionOutput - The return type for the suggestAction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestActionInputSchema = z.object({
  message: z.string().describe('The daily faith message.'),
  date: z.string().describe('The current date.'),
});
export type SuggestActionInput = z.infer<typeof SuggestActionInputSchema>;

const SuggestActionOutputSchema = z.object({
  actionSuggested: z.boolean().describe('Whether an action is suggested or not.'),
  action: z.string().describe('The suggested action related to the message.'),
});
export type SuggestActionOutput = z.infer<typeof SuggestActionOutputSchema>;

export async function suggestAction(input: SuggestActionInput): Promise<SuggestActionOutput> {
  return suggestActionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestActionPrompt',
  input: {schema: SuggestActionInputSchema},
  output: {schema: SuggestActionOutputSchema},
  prompt: `Given the following daily faith message and date, suggest a practical action the user can take related to the message.  The action should be something that the user can do in their daily life to apply the message. If no action is appropriate, set actionSuggested to false.

Message: {{{message}}}
Date: {{{date}}}

Consider the user's wellbeing and respect the user's autonomy. Do not suggest any actions that are harmful, illegal, or unethical. If there is no action to suggest based on the message, indicate that you cannot come up with one.

Respond with the following:
Is action suggested: (true or false)
Suggested action: (a practical action that the user can take in their daily life to apply the message)`,
});

const suggestActionFlow = ai.defineFlow(
  {
    name: 'suggestActionFlow',
    inputSchema: SuggestActionInputSchema,
    outputSchema: SuggestActionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
