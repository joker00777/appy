import {
  LoginValuesType,
  SignUpValuesType,
  ResponseType,
  DebtType,
  IncomeType,
} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create();

// study useMutation and useQuery
export const SignUp = (
  credentials: SignUpValuesType
): Promise<{ session: string }> => {
  return instance
    .post<any, { data: { session: string } }>(
      "https://f359-2401-4900-1f37-d050-3bb4-f7c0-2b03-845d.ngrok-free.app/v1/session",
      credentials
    )
    .then((response) => response.data);
};

export const LoginApi = (
  credentials: LoginValuesType
): Promise<ResponseType> => {
  return instance
    .put<any, { data: ResponseType }>(
      "https://f359-2401-4900-1f37-d050-3bb4-f7c0-2b03-845d.ngrok-free.app/v1/session",
      credentials
    )
    .then((response) => response.data);
};

export const PostDebt = (debt: DebtType): Promise<ResponseType> => {
  return AsyncStorage.getItem("session")
    .then((session: string | null) =>
      instance.post<any, { data: ResponseType }>(
        "https://f359-2401-4900-1f37-d050-3bb4-f7c0-2b03-845d.ngrok-free.app/v1/debt",
        debt,
        {
          headers: {
            session,
          },
        }
      )
    )
    .then((response) => response.data);
};

export const PostIncome = (income: IncomeType): Promise<ResponseType> => {
  return AsyncStorage.getItem("session")
    .then((session: string | null) =>
      instance.post<any, { data: ResponseType }>(
        "https://f359-2401-4900-1f37-d050-3bb4-f7c0-2b03-845d.ngrok-free.app/v1/income",
        income,
        {
          headers: {
            session,
          },
        }
      )
    )
    .then((response) => response.data);
};
