import { SWRResponse } from 'swr';
import { useStaticSWR } from '~/stores/use-static-swr';

export const useQuestionSet = (initialData?: string): SWRResponse<string, Error> => {
  return useStaticSWR('questionSet', initialData);
};


