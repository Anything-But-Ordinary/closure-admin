import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  isLogin: Scalars['Boolean'];
  jwt?: Maybe<Scalars['String']>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  isLogout: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type MeQueryResponse = {
  __typename?: 'MeQueryResponse';
  email: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResponse;
  logout: LogoutResponse;
  register: RegisterResponse;
  updatePassword: UpdatePasswordResponse;
  updateUserInfo: UserInfoResponse;
  user: WhoResponse;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateUserInfoArgs = {
  input: UserInfoInput;
};

export type Query = {
  __typename?: 'Query';
  foo: Scalars['String'];
  me: MeQueryResponse;
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  password_confirm: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  isRegister: Scalars['Boolean'];
};

export type UpdatePasswordInput = {
  password: Scalars['String'];
  password_confirm: Scalars['String'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  message: Scalars['String'];
  updated: Scalars['Boolean'];
};

export type UserInfoInput = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserInfoResponse = {
  __typename?: 'UserInfoResponse';
  message?: Maybe<Scalars['String']>;
  updated: Scalars['Boolean'];
};

export type WhoResponse = {
  __typename?: 'WhoResponse';
  isAuthed: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', isLogin: boolean, jwt?: string | null } };

export type RegisterMutationVariables = Exact<{
  password: Scalars['String'];
  password_confirm: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', isRegister: boolean } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', me: { __typename?: 'MeQueryResponse', email: string, username: string } };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    isLogin
    jwt
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables>>) {
  return VueApolloComposable.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($password: String!, $password_confirm: String!, $email: String!, $username: String!) {
  register(
    input: {password: $password, password_confirm: $password_confirm, email: $email, username: $username}
  ) {
    isRegister
  }
}
    `;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRegisterMutation({
 *   variables: {
 *     password: // value for 'password'
 *     password_confirm: // value for 'password_confirm'
 *     email: // value for 'email'
 *     username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(options: VueApolloComposable.UseMutationOptions<RegisterMutation, RegisterMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RegisterMutation, RegisterMutationVariables>>) {
  return VueApolloComposable.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
}
export type RegisterMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RegisterMutation, RegisterMutationVariables>;
export const Document = gql`
    {
  me {
    email
    username
  }
}
    `;