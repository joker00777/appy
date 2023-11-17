export type LoginValuesType = {
  email: string;
  password: string;
};

export type SignUpValuesType = {
  name: string;
  email: string;
  password: string;
};

export type DebtListItemType = {
  id: number;
  name: string;
  present_value: number;
};

export type ResponseType = {
  ok: boolean;
  message: string;
  session: string;
};

export type DebtType = {
  name: string;
  principal: number;
  interest: number;
  duration: number;
  type: string;
};

export type IncomeType = {
  name: string;
  amount: number;
  duration: "monthly" | "annually";
  type: string;
};

export type ResponseType = {
  id: number;
};
