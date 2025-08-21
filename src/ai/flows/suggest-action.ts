
'use server';

/**
 * @fileOverview Sugere uma ação prática com base na mensagem diária.
 *
 * - suggestAction - Uma função que sugere uma ação relacionada à mensagem diária.
 * - SuggestActionInput - O tipo de entrada para a função suggestAction.
 * - SuggestActionOutput - O tipo de retorno para a função suggestAction.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestActionInputSchema = z.object({
  message: z.string().describe('A mensagem de fé diária.'),
  date: z.string().describe('A data atual.'),
});
export type SuggestActionInput = z.infer<typeof SuggestActionInputSchema>;

const SuggestActionOutputSchema = z.object({
  actionSuggested: z.boolean().describe('Se uma ação é sugerida ou não.'),
  action: z.string().describe('A ação sugerida relacionada à mensagem.'),
});
export type SuggestActionOutput = z.infer<typeof SuggestActionOutputSchema>;

export async function suggestAction(input: SuggestActionInput): Promise<SuggestActionOutput> {
  return suggestActionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestActionPrompt',
  input: {schema: SuggestActionInputSchema},
  output: {schema: SuggestActionOutputSchema},
  prompt: `Dada a seguinte mensagem de fé diária e a data, sugira uma ação prática que o usuário pode tomar relacionada à mensagem. A ação deve ser algo que o usuário possa fazer em sua vida diária para aplicar a mensagem. Se nenhuma ação for apropriada, defina actionSuggested como false e forneça uma string vazia para a ação. Responda em português.

Mensagem: {{{message}}}
Data: {{{date}}}

Considere o bem-estar do usuário e respeite sua autonomia. Não sugira ações prejudiciais, ilegais ou antiéticas. Se não houver ação a ser sugerida com base na mensagem, indique que você não consegue pensar em uma.
`,
});

const suggestActionFlow = ai.defineFlow(
  {
    name: 'suggestActionFlow',
    inputSchema: SuggestActionInputSchema,
    outputSchema: SuggestActionOutputSchema,
  },
  async input => {
    try {
        const {output} = await prompt(input);
        if (!output) {
          return { actionSuggested: false, action: '' };
        }
        return output;
    } catch (error) {
        console.error('Erro em suggestActionFlow:', error);
        // Retorna um valor padrão em caso de qualquer erro do prompt da IA
        return { actionSuggested: false, action: '' };
    }
  }
);
