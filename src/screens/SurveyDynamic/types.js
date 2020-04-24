//@flow
type QuestionOptions = Array<{ value: string, title: string }>;

type Question = {
  id: string,
  options?: QuestionOptions,
  title: string,
  type: string,
};
export type QuestionList = Array<Question>;

export type SurveyDynamicProps = {
  questionList: QuestionList,
};
