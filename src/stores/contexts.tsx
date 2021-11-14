import { SWRResponse } from 'swr';
import { useStaticSWR } from '~/stores/use-static-swr';

export const useQuestionSet = (initialData?: { 'index': number, 'id':string, 'q': string}[]): SWRResponse<{ 'index':number, 'id':string, 'q': string}[], Error> => {
  return useStaticSWR('questionSet', initialData);
};


