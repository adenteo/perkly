// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { PerklysubscriptionTypes } from './sources/perklysubscription/types';
import type { ChainlinkTypes } from './sources/chainlink/types';
import * as importedModule$0 from "./sources/chainlink/introspectionSchema";
import * as importedModule$1 from "./sources/perklysubscription/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Query = {
  merchantRegistered?: Maybe<MerchantRegistered>;
  merchantRegistereds: Array<MerchantRegistered>;
  merchant?: Maybe<Merchant>;
  merchants: Array<Merchant>;
  subscriber?: Maybe<Subscriber>;
  subscribers: Array<Subscriber>;
  merchantSubscriber?: Maybe<MerchantSubscriber>;
  merchantSubscribers: Array<MerchantSubscriber>;
  rewardTierReached?: Maybe<RewardTierReached>;
  rewardTierReacheds: Array<RewardTierReached>;
  spendingTracked?: Maybe<SpendingTracked>;
  spendingTrackeds: Array<SpendingTracked>;
  spendingTrackedData?: Maybe<SpendingTrackedData>;
  spendingTrackedDatas: Array<SpendingTrackedData>;
  tierUpdated?: Maybe<TierUpdated>;
  tierUpdateds: Array<TierUpdated>;
  userSubscribed?: Maybe<UserSubscribed>;
  userSubscribeds: Array<UserSubscribed>;
  /** Collection of aggregated `TotalSpendingStats` values */
  totalSpendingStats_collection: Array<TotalSpendingStats>;
  merchantSearch: Array<Merchant>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ownershipTransferRequested?: Maybe<OwnershipTransferRequested>;
  ownershipTransferRequesteds: Array<OwnershipTransferRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  requestFulfilled?: Maybe<RequestFulfilled>;
  requestFulfilleds: Array<RequestFulfilled>;
  requestSent?: Maybe<RequestSent>;
  requestSents: Array<RequestSent>;
  response?: Maybe<Response>;
  responses: Array<Response>;
  rewardPurchaseFailed?: Maybe<RewardPurchaseFailed>;
  rewardPurchaseFaileds: Array<RewardPurchaseFailed>;
  transactionRecorded?: Maybe<TransactionRecorded>;
  transactionRecordeds: Array<TransactionRecorded>;
};


export type QuerymerchantRegisteredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymerchantRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MerchantRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MerchantRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymerchantArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymerchantsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Merchant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Merchant_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriberArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscribersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Subscriber_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Subscriber_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymerchantSubscriberArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymerchantSubscribersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MerchantSubscriber_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MerchantSubscriber_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTierReachedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTierReachedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardTierReached_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardTierReached_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryspendingTrackedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryspendingTrackedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpendingTracked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpendingTracked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryspendingTrackedDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryspendingTrackedDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpendingTrackedData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpendingTrackedData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytierUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytierUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TierUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TierUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserSubscribedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserSubscribedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserSubscribed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserSubscribed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytotalSpendingStats_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interval: Aggregation_interval;
  where?: InputMaybe<TotalSpendingStats_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymerchantSearchArgs = {
  text: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<Merchant_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryownershipTransferRequestedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferRequestedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferRequested_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferRequested_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestFulfilledArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestFulfilledsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestFulfilled_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestFulfilled_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestSentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrequestSentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestSent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestSent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresponseArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresponsesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Response_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Response_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardPurchaseFailedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardPurchaseFailedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardPurchaseFailed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardPurchaseFailed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionRecordedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionRecordedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionRecorded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransactionRecorded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription = {
  merchantRegistered?: Maybe<MerchantRegistered>;
  merchantRegistereds: Array<MerchantRegistered>;
  merchant?: Maybe<Merchant>;
  merchants: Array<Merchant>;
  subscriber?: Maybe<Subscriber>;
  subscribers: Array<Subscriber>;
  merchantSubscriber?: Maybe<MerchantSubscriber>;
  merchantSubscribers: Array<MerchantSubscriber>;
  rewardTierReached?: Maybe<RewardTierReached>;
  rewardTierReacheds: Array<RewardTierReached>;
  spendingTracked?: Maybe<SpendingTracked>;
  spendingTrackeds: Array<SpendingTracked>;
  spendingTrackedData?: Maybe<SpendingTrackedData>;
  spendingTrackedDatas: Array<SpendingTrackedData>;
  tierUpdated?: Maybe<TierUpdated>;
  tierUpdateds: Array<TierUpdated>;
  userSubscribed?: Maybe<UserSubscribed>;
  userSubscribeds: Array<UserSubscribed>;
  /** Collection of aggregated `TotalSpendingStats` values */
  totalSpendingStats_collection: Array<TotalSpendingStats>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ownershipTransferRequested?: Maybe<OwnershipTransferRequested>;
  ownershipTransferRequesteds: Array<OwnershipTransferRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  requestFulfilled?: Maybe<RequestFulfilled>;
  requestFulfilleds: Array<RequestFulfilled>;
  requestSent?: Maybe<RequestSent>;
  requestSents: Array<RequestSent>;
  response?: Maybe<Response>;
  responses: Array<Response>;
  rewardPurchaseFailed?: Maybe<RewardPurchaseFailed>;
  rewardPurchaseFaileds: Array<RewardPurchaseFailed>;
  transactionRecorded?: Maybe<TransactionRecorded>;
  transactionRecordeds: Array<TransactionRecorded>;
};


export type SubscriptionmerchantRegisteredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmerchantRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MerchantRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MerchantRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmerchantArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmerchantsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Merchant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Merchant_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriberArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscribersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Subscriber_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Subscriber_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmerchantSubscriberArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmerchantSubscribersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MerchantSubscriber_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MerchantSubscriber_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTierReachedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTierReachedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardTierReached_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardTierReached_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionspendingTrackedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionspendingTrackedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpendingTracked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpendingTracked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionspendingTrackedDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionspendingTrackedDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpendingTrackedData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpendingTrackedData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontierUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontierUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TierUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TierUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserSubscribedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserSubscribedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserSubscribed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserSubscribed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontotalSpendingStats_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interval: Aggregation_interval;
  where?: InputMaybe<TotalSpendingStats_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionownershipTransferRequestedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferRequestedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferRequested_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferRequested_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionownershipTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestFulfilledArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestFulfilledsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestFulfilled_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestFulfilled_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestSentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrequestSentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RequestSent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RequestSent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresponseArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresponsesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Response_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Response_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardPurchaseFailedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardPurchaseFailedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardPurchaseFailed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardPurchaseFailed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionRecordedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionRecordedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionRecorded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransactionRecorded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Merchant = {
  id: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  subscribers: Array<MerchantSubscriber>;
};


export type MerchantsubscribersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MerchantSubscriber_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MerchantSubscriber_filter>;
};

export type MerchantRegistered = {
  id: Scalars['Bytes']['output'];
  merchant: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MerchantRegistered_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MerchantRegistered_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MerchantRegistered_filter>>>;
};

export type MerchantRegistered_orderBy =
  | 'id'
  | 'merchant'
  | 'name'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MerchantSubscriber = {
  id: Scalars['Bytes']['output'];
  merchant: Merchant;
  subscriber: Subscriber;
};

export type MerchantSubscriber_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant?: InputMaybe<Scalars['String']['input']>;
  merchant_not?: InputMaybe<Scalars['String']['input']>;
  merchant_gt?: InputMaybe<Scalars['String']['input']>;
  merchant_lt?: InputMaybe<Scalars['String']['input']>;
  merchant_gte?: InputMaybe<Scalars['String']['input']>;
  merchant_lte?: InputMaybe<Scalars['String']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['String']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  merchant_contains?: InputMaybe<Scalars['String']['input']>;
  merchant_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['String']['input']>;
  merchant_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_starts_with?: InputMaybe<Scalars['String']['input']>;
  merchant_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  merchant_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_ends_with?: InputMaybe<Scalars['String']['input']>;
  merchant_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  merchant_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_?: InputMaybe<Merchant_filter>;
  subscriber?: InputMaybe<Scalars['String']['input']>;
  subscriber_not?: InputMaybe<Scalars['String']['input']>;
  subscriber_gt?: InputMaybe<Scalars['String']['input']>;
  subscriber_lt?: InputMaybe<Scalars['String']['input']>;
  subscriber_gte?: InputMaybe<Scalars['String']['input']>;
  subscriber_lte?: InputMaybe<Scalars['String']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['String']['input']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscriber_?: InputMaybe<Subscriber_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MerchantSubscriber_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MerchantSubscriber_filter>>>;
};

export type MerchantSubscriber_orderBy =
  | 'id'
  | 'merchant'
  | 'merchant__id'
  | 'merchant__name'
  | 'subscriber'
  | 'subscriber__id';

export type Merchant_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscribers_?: InputMaybe<MerchantSubscriber_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Merchant_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Merchant_filter>>>;
};

export type Merchant_orderBy =
  | 'id'
  | 'name'
  | 'subscribers';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type RewardTierReached = {
  id: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
  merchant: Scalars['Bytes']['output'];
  tier: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RewardTierReached_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tier?: InputMaybe<Scalars['Int']['input']>;
  tier_not?: InputMaybe<Scalars['Int']['input']>;
  tier_gt?: InputMaybe<Scalars['Int']['input']>;
  tier_lt?: InputMaybe<Scalars['Int']['input']>;
  tier_gte?: InputMaybe<Scalars['Int']['input']>;
  tier_lte?: InputMaybe<Scalars['Int']['input']>;
  tier_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tier_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardTierReached_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardTierReached_filter>>>;
};

export type RewardTierReached_orderBy =
  | 'id'
  | 'user'
  | 'merchant'
  | 'tier'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type SpendingTracked = {
  id: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
  merchant: Scalars['Bytes']['output'];
  amountSpent: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SpendingTrackedData = {
  id: Scalars['Int8']['output'];
  timestamp: Scalars['Timestamp']['output'];
  merchant: Merchant;
  amount: Scalars['BigInt']['output'];
};

export type SpendingTrackedData_filter = {
  id?: InputMaybe<Scalars['Int8']['input']>;
  id_not?: InputMaybe<Scalars['Int8']['input']>;
  id_gt?: InputMaybe<Scalars['Int8']['input']>;
  id_lt?: InputMaybe<Scalars['Int8']['input']>;
  id_gte?: InputMaybe<Scalars['Int8']['input']>;
  id_lte?: InputMaybe<Scalars['Int8']['input']>;
  id_in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  timestamp?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_not?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  merchant?: InputMaybe<Scalars['String']['input']>;
  merchant_not?: InputMaybe<Scalars['String']['input']>;
  merchant_gt?: InputMaybe<Scalars['String']['input']>;
  merchant_lt?: InputMaybe<Scalars['String']['input']>;
  merchant_gte?: InputMaybe<Scalars['String']['input']>;
  merchant_lte?: InputMaybe<Scalars['String']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['String']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  merchant_contains?: InputMaybe<Scalars['String']['input']>;
  merchant_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['String']['input']>;
  merchant_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_starts_with?: InputMaybe<Scalars['String']['input']>;
  merchant_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  merchant_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_ends_with?: InputMaybe<Scalars['String']['input']>;
  merchant_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  merchant_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  merchant_?: InputMaybe<Merchant_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SpendingTrackedData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SpendingTrackedData_filter>>>;
};

export type SpendingTrackedData_orderBy =
  | 'id'
  | 'timestamp'
  | 'merchant'
  | 'merchant__id'
  | 'merchant__name'
  | 'amount';

export type SpendingTracked_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amountSpent?: InputMaybe<Scalars['BigInt']['input']>;
  amountSpent_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountSpent_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountSpent_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountSpent_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountSpent_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountSpent_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountSpent_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SpendingTracked_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SpendingTracked_filter>>>;
};

export type SpendingTracked_orderBy =
  | 'id'
  | 'user'
  | 'merchant'
  | 'amountSpent'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscriber = {
  id: Scalars['Bytes']['output'];
  merchants: Array<MerchantSubscriber>;
};


export type SubscribermerchantsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MerchantSubscriber_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MerchantSubscriber_filter>;
};

export type Subscriber_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchants_?: InputMaybe<MerchantSubscriber_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Subscriber_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Subscriber_filter>>>;
};

export type Subscriber_orderBy =
  | 'id'
  | 'merchants';

export type TierUpdated = {
  id: Scalars['Bytes']['output'];
  merchant: Scalars['Bytes']['output'];
  tierIndex: Scalars['Int']['output'];
  spendingThreshold: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TierUpdated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tierIndex?: InputMaybe<Scalars['Int']['input']>;
  tierIndex_not?: InputMaybe<Scalars['Int']['input']>;
  tierIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  tierIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  tierIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  tierIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  tierIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tierIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  spendingThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  spendingThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  spendingThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  spendingThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  spendingThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  spendingThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  spendingThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  spendingThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TierUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TierUpdated_filter>>>;
};

export type TierUpdated_orderBy =
  | 'id'
  | 'merchant'
  | 'tierIndex'
  | 'spendingThreshold'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TotalSpendingStats = {
  id: Scalars['Int8']['output'];
  timestamp: Scalars['Timestamp']['output'];
  merchant: Merchant;
  totalAmount: Scalars['BigInt']['output'];
  count: Scalars['Int8']['output'];
};

export type TotalSpendingStats_filter = {
  id?: InputMaybe<Scalars['Int8']['input']>;
  id_gt?: InputMaybe<Scalars['Int8']['input']>;
  id_lt?: InputMaybe<Scalars['Int8']['input']>;
  id_gte?: InputMaybe<Scalars['Int8']['input']>;
  id_lte?: InputMaybe<Scalars['Int8']['input']>;
  id_in?: InputMaybe<Array<Scalars['Int8']['input']>>;
  timestamp?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Timestamp']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  merchant?: InputMaybe<Scalars['String']['input']>;
  merchant_?: InputMaybe<Merchant_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TotalSpendingStats_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TotalSpendingStats_filter>>>;
};

export type UserSubscribed = {
  id: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
  merchant: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type UserSubscribed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merchant_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merchant_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserSubscribed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserSubscribed_filter>>>;
};

export type UserSubscribed_orderBy =
  | 'id'
  | 'user'
  | 'merchant'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type OwnershipTransferRequested = {
  id: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferRequested_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferRequested_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferRequested_filter>>>;
};

export type OwnershipTransferRequested_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type OwnershipTransferred = {
  id: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_filter>>>;
};

export type OwnershipTransferred_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RequestFulfilled = {
  id: Scalars['Bytes']['output'];
  Contract_id: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RequestFulfilled_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Contract_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Contract_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RequestFulfilled_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RequestFulfilled_filter>>>;
};

export type RequestFulfilled_orderBy =
  | 'id'
  | 'Contract_id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RequestSent = {
  id: Scalars['Bytes']['output'];
  Contract_id: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RequestSent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_not?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Contract_id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  Contract_id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  Contract_id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RequestSent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RequestSent_filter>>>;
};

export type RequestSent_orderBy =
  | 'id'
  | 'Contract_id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Response = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['Bytes']['output'];
  response: Scalars['Bytes']['output'];
  err: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Response_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  requestId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  requestId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  response?: InputMaybe<Scalars['Bytes']['input']>;
  response_not?: InputMaybe<Scalars['Bytes']['input']>;
  response_gt?: InputMaybe<Scalars['Bytes']['input']>;
  response_lt?: InputMaybe<Scalars['Bytes']['input']>;
  response_gte?: InputMaybe<Scalars['Bytes']['input']>;
  response_lte?: InputMaybe<Scalars['Bytes']['input']>;
  response_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  response_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  response_contains?: InputMaybe<Scalars['Bytes']['input']>;
  response_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  err?: InputMaybe<Scalars['Bytes']['input']>;
  err_not?: InputMaybe<Scalars['Bytes']['input']>;
  err_gt?: InputMaybe<Scalars['Bytes']['input']>;
  err_lt?: InputMaybe<Scalars['Bytes']['input']>;
  err_gte?: InputMaybe<Scalars['Bytes']['input']>;
  err_lte?: InputMaybe<Scalars['Bytes']['input']>;
  err_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  err_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  err_contains?: InputMaybe<Scalars['Bytes']['input']>;
  err_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Response_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Response_filter>>>;
};

export type Response_orderBy =
  | 'id'
  | 'requestId'
  | 'response'
  | 'err'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type RewardPurchaseFailed = {
  id: Scalars['Bytes']['output'];
  receiver: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  reason: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RewardPurchaseFailed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardPurchaseFailed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardPurchaseFailed_filter>>>;
};

export type RewardPurchaseFailed_orderBy =
  | 'id'
  | 'receiver'
  | 'amount'
  | 'reason'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TransactionRecorded = {
  id: Scalars['Bytes']['output'];
  receiver: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TransactionRecorded_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransactionRecorded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransactionRecorded_filter>>>;
};

export type TransactionRecorded_orderBy =
  | 'id'
  | 'receiver'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  Merchant: ResolverTypeWrapper<Merchant>;
  MerchantRegistered: ResolverTypeWrapper<MerchantRegistered>;
  MerchantRegistered_filter: MerchantRegistered_filter;
  MerchantRegistered_orderBy: MerchantRegistered_orderBy;
  MerchantSubscriber: ResolverTypeWrapper<MerchantSubscriber>;
  MerchantSubscriber_filter: MerchantSubscriber_filter;
  MerchantSubscriber_orderBy: MerchantSubscriber_orderBy;
  Merchant_filter: Merchant_filter;
  Merchant_orderBy: Merchant_orderBy;
  OrderDirection: OrderDirection;
  RewardTierReached: ResolverTypeWrapper<RewardTierReached>;
  RewardTierReached_filter: RewardTierReached_filter;
  RewardTierReached_orderBy: RewardTierReached_orderBy;
  SpendingTracked: ResolverTypeWrapper<SpendingTracked>;
  SpendingTrackedData: ResolverTypeWrapper<SpendingTrackedData>;
  SpendingTrackedData_filter: SpendingTrackedData_filter;
  SpendingTrackedData_orderBy: SpendingTrackedData_orderBy;
  SpendingTracked_filter: SpendingTracked_filter;
  SpendingTracked_orderBy: SpendingTracked_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscriber: ResolverTypeWrapper<Subscriber>;
  Subscriber_filter: Subscriber_filter;
  Subscriber_orderBy: Subscriber_orderBy;
  TierUpdated: ResolverTypeWrapper<TierUpdated>;
  TierUpdated_filter: TierUpdated_filter;
  TierUpdated_orderBy: TierUpdated_orderBy;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  TotalSpendingStats: ResolverTypeWrapper<TotalSpendingStats>;
  TotalSpendingStats_filter: TotalSpendingStats_filter;
  UserSubscribed: ResolverTypeWrapper<UserSubscribed>;
  UserSubscribed_filter: UserSubscribed_filter;
  UserSubscribed_orderBy: UserSubscribed_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  OwnershipTransferRequested: ResolverTypeWrapper<OwnershipTransferRequested>;
  OwnershipTransferRequested_filter: OwnershipTransferRequested_filter;
  OwnershipTransferRequested_orderBy: OwnershipTransferRequested_orderBy;
  OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  OwnershipTransferred_orderBy: OwnershipTransferred_orderBy;
  RequestFulfilled: ResolverTypeWrapper<RequestFulfilled>;
  RequestFulfilled_filter: RequestFulfilled_filter;
  RequestFulfilled_orderBy: RequestFulfilled_orderBy;
  RequestSent: ResolverTypeWrapper<RequestSent>;
  RequestSent_filter: RequestSent_filter;
  RequestSent_orderBy: RequestSent_orderBy;
  Response: ResolverTypeWrapper<Response>;
  Response_filter: Response_filter;
  Response_orderBy: Response_orderBy;
  RewardPurchaseFailed: ResolverTypeWrapper<RewardPurchaseFailed>;
  RewardPurchaseFailed_filter: RewardPurchaseFailed_filter;
  RewardPurchaseFailed_orderBy: RewardPurchaseFailed_orderBy;
  TransactionRecorded: ResolverTypeWrapper<TransactionRecorded>;
  TransactionRecorded_filter: TransactionRecorded_filter;
  TransactionRecorded_orderBy: TransactionRecorded_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Merchant: Merchant;
  MerchantRegistered: MerchantRegistered;
  MerchantRegistered_filter: MerchantRegistered_filter;
  MerchantSubscriber: MerchantSubscriber;
  MerchantSubscriber_filter: MerchantSubscriber_filter;
  Merchant_filter: Merchant_filter;
  RewardTierReached: RewardTierReached;
  RewardTierReached_filter: RewardTierReached_filter;
  SpendingTracked: SpendingTracked;
  SpendingTrackedData: SpendingTrackedData;
  SpendingTrackedData_filter: SpendingTrackedData_filter;
  SpendingTracked_filter: SpendingTracked_filter;
  String: Scalars['String']['output'];
  Subscriber: Subscriber;
  Subscriber_filter: Subscriber_filter;
  TierUpdated: TierUpdated;
  TierUpdated_filter: TierUpdated_filter;
  Timestamp: Scalars['Timestamp']['output'];
  TotalSpendingStats: TotalSpendingStats;
  TotalSpendingStats_filter: TotalSpendingStats_filter;
  UserSubscribed: UserSubscribed;
  UserSubscribed_filter: UserSubscribed_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  OwnershipTransferRequested: OwnershipTransferRequested;
  OwnershipTransferRequested_filter: OwnershipTransferRequested_filter;
  OwnershipTransferred: OwnershipTransferred;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  RequestFulfilled: RequestFulfilled;
  RequestFulfilled_filter: RequestFulfilled_filter;
  RequestSent: RequestSent;
  RequestSent_filter: RequestSent_filter;
  Response: Response;
  Response_filter: Response_filter;
  RewardPurchaseFailed: RewardPurchaseFailed;
  RewardPurchaseFailed_filter: RewardPurchaseFailed_filter;
  TransactionRecorded: TransactionRecorded;
  TransactionRecorded_filter: TransactionRecorded_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  merchantRegistered?: Resolver<Maybe<ResolversTypes['MerchantRegistered']>, ParentType, ContextType, RequireFields<QuerymerchantRegisteredArgs, 'id' | 'subgraphError'>>;
  merchantRegistereds?: Resolver<Array<ResolversTypes['MerchantRegistered']>, ParentType, ContextType, RequireFields<QuerymerchantRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  merchant?: Resolver<Maybe<ResolversTypes['Merchant']>, ParentType, ContextType, RequireFields<QuerymerchantArgs, 'id' | 'subgraphError'>>;
  merchants?: Resolver<Array<ResolversTypes['Merchant']>, ParentType, ContextType, RequireFields<QuerymerchantsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriber?: Resolver<Maybe<ResolversTypes['Subscriber']>, ParentType, ContextType, RequireFields<QuerysubscriberArgs, 'id' | 'subgraphError'>>;
  subscribers?: Resolver<Array<ResolversTypes['Subscriber']>, ParentType, ContextType, RequireFields<QuerysubscribersArgs, 'skip' | 'first' | 'subgraphError'>>;
  merchantSubscriber?: Resolver<Maybe<ResolversTypes['MerchantSubscriber']>, ParentType, ContextType, RequireFields<QuerymerchantSubscriberArgs, 'id' | 'subgraphError'>>;
  merchantSubscribers?: Resolver<Array<ResolversTypes['MerchantSubscriber']>, ParentType, ContextType, RequireFields<QuerymerchantSubscribersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardTierReached?: Resolver<Maybe<ResolversTypes['RewardTierReached']>, ParentType, ContextType, RequireFields<QueryrewardTierReachedArgs, 'id' | 'subgraphError'>>;
  rewardTierReacheds?: Resolver<Array<ResolversTypes['RewardTierReached']>, ParentType, ContextType, RequireFields<QueryrewardTierReachedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  spendingTracked?: Resolver<Maybe<ResolversTypes['SpendingTracked']>, ParentType, ContextType, RequireFields<QueryspendingTrackedArgs, 'id' | 'subgraphError'>>;
  spendingTrackeds?: Resolver<Array<ResolversTypes['SpendingTracked']>, ParentType, ContextType, RequireFields<QueryspendingTrackedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  spendingTrackedData?: Resolver<Maybe<ResolversTypes['SpendingTrackedData']>, ParentType, ContextType, RequireFields<QueryspendingTrackedDataArgs, 'id' | 'subgraphError'>>;
  spendingTrackedDatas?: Resolver<Array<ResolversTypes['SpendingTrackedData']>, ParentType, ContextType, RequireFields<QueryspendingTrackedDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tierUpdated?: Resolver<Maybe<ResolversTypes['TierUpdated']>, ParentType, ContextType, RequireFields<QuerytierUpdatedArgs, 'id' | 'subgraphError'>>;
  tierUpdateds?: Resolver<Array<ResolversTypes['TierUpdated']>, ParentType, ContextType, RequireFields<QuerytierUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userSubscribed?: Resolver<Maybe<ResolversTypes['UserSubscribed']>, ParentType, ContextType, RequireFields<QueryuserSubscribedArgs, 'id' | 'subgraphError'>>;
  userSubscribeds?: Resolver<Array<ResolversTypes['UserSubscribed']>, ParentType, ContextType, RequireFields<QueryuserSubscribedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  totalSpendingStats_collection?: Resolver<Array<ResolversTypes['TotalSpendingStats']>, ParentType, ContextType, RequireFields<QuerytotalSpendingStats_collectionArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  merchantSearch?: Resolver<Array<ResolversTypes['Merchant']>, ParentType, ContextType, RequireFields<QuerymerchantSearchArgs, 'text' | 'first' | 'skip' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  ownershipTransferRequested?: Resolver<Maybe<ResolversTypes['OwnershipTransferRequested']>, ParentType, ContextType, RequireFields<QueryownershipTransferRequestedArgs, 'id' | 'subgraphError'>>;
  ownershipTransferRequesteds?: Resolver<Array<ResolversTypes['OwnershipTransferRequested']>, ParentType, ContextType, RequireFields<QueryownershipTransferRequestedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: Resolver<Maybe<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: Resolver<Array<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestFulfilled?: Resolver<Maybe<ResolversTypes['RequestFulfilled']>, ParentType, ContextType, RequireFields<QueryrequestFulfilledArgs, 'id' | 'subgraphError'>>;
  requestFulfilleds?: Resolver<Array<ResolversTypes['RequestFulfilled']>, ParentType, ContextType, RequireFields<QueryrequestFulfilledsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestSent?: Resolver<Maybe<ResolversTypes['RequestSent']>, ParentType, ContextType, RequireFields<QueryrequestSentArgs, 'id' | 'subgraphError'>>;
  requestSents?: Resolver<Array<ResolversTypes['RequestSent']>, ParentType, ContextType, RequireFields<QueryrequestSentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryresponseArgs, 'id' | 'subgraphError'>>;
  responses?: Resolver<Array<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryresponsesArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardPurchaseFailed?: Resolver<Maybe<ResolversTypes['RewardPurchaseFailed']>, ParentType, ContextType, RequireFields<QueryrewardPurchaseFailedArgs, 'id' | 'subgraphError'>>;
  rewardPurchaseFaileds?: Resolver<Array<ResolversTypes['RewardPurchaseFailed']>, ParentType, ContextType, RequireFields<QueryrewardPurchaseFailedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transactionRecorded?: Resolver<Maybe<ResolversTypes['TransactionRecorded']>, ParentType, ContextType, RequireFields<QuerytransactionRecordedArgs, 'id' | 'subgraphError'>>;
  transactionRecordeds?: Resolver<Array<ResolversTypes['TransactionRecorded']>, ParentType, ContextType, RequireFields<QuerytransactionRecordedsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  merchantRegistered?: SubscriptionResolver<Maybe<ResolversTypes['MerchantRegistered']>, "merchantRegistered", ParentType, ContextType, RequireFields<SubscriptionmerchantRegisteredArgs, 'id' | 'subgraphError'>>;
  merchantRegistereds?: SubscriptionResolver<Array<ResolversTypes['MerchantRegistered']>, "merchantRegistereds", ParentType, ContextType, RequireFields<SubscriptionmerchantRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  merchant?: SubscriptionResolver<Maybe<ResolversTypes['Merchant']>, "merchant", ParentType, ContextType, RequireFields<SubscriptionmerchantArgs, 'id' | 'subgraphError'>>;
  merchants?: SubscriptionResolver<Array<ResolversTypes['Merchant']>, "merchants", ParentType, ContextType, RequireFields<SubscriptionmerchantsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriber?: SubscriptionResolver<Maybe<ResolversTypes['Subscriber']>, "subscriber", ParentType, ContextType, RequireFields<SubscriptionsubscriberArgs, 'id' | 'subgraphError'>>;
  subscribers?: SubscriptionResolver<Array<ResolversTypes['Subscriber']>, "subscribers", ParentType, ContextType, RequireFields<SubscriptionsubscribersArgs, 'skip' | 'first' | 'subgraphError'>>;
  merchantSubscriber?: SubscriptionResolver<Maybe<ResolversTypes['MerchantSubscriber']>, "merchantSubscriber", ParentType, ContextType, RequireFields<SubscriptionmerchantSubscriberArgs, 'id' | 'subgraphError'>>;
  merchantSubscribers?: SubscriptionResolver<Array<ResolversTypes['MerchantSubscriber']>, "merchantSubscribers", ParentType, ContextType, RequireFields<SubscriptionmerchantSubscribersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardTierReached?: SubscriptionResolver<Maybe<ResolversTypes['RewardTierReached']>, "rewardTierReached", ParentType, ContextType, RequireFields<SubscriptionrewardTierReachedArgs, 'id' | 'subgraphError'>>;
  rewardTierReacheds?: SubscriptionResolver<Array<ResolversTypes['RewardTierReached']>, "rewardTierReacheds", ParentType, ContextType, RequireFields<SubscriptionrewardTierReachedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  spendingTracked?: SubscriptionResolver<Maybe<ResolversTypes['SpendingTracked']>, "spendingTracked", ParentType, ContextType, RequireFields<SubscriptionspendingTrackedArgs, 'id' | 'subgraphError'>>;
  spendingTrackeds?: SubscriptionResolver<Array<ResolversTypes['SpendingTracked']>, "spendingTrackeds", ParentType, ContextType, RequireFields<SubscriptionspendingTrackedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  spendingTrackedData?: SubscriptionResolver<Maybe<ResolversTypes['SpendingTrackedData']>, "spendingTrackedData", ParentType, ContextType, RequireFields<SubscriptionspendingTrackedDataArgs, 'id' | 'subgraphError'>>;
  spendingTrackedDatas?: SubscriptionResolver<Array<ResolversTypes['SpendingTrackedData']>, "spendingTrackedDatas", ParentType, ContextType, RequireFields<SubscriptionspendingTrackedDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tierUpdated?: SubscriptionResolver<Maybe<ResolversTypes['TierUpdated']>, "tierUpdated", ParentType, ContextType, RequireFields<SubscriptiontierUpdatedArgs, 'id' | 'subgraphError'>>;
  tierUpdateds?: SubscriptionResolver<Array<ResolversTypes['TierUpdated']>, "tierUpdateds", ParentType, ContextType, RequireFields<SubscriptiontierUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userSubscribed?: SubscriptionResolver<Maybe<ResolversTypes['UserSubscribed']>, "userSubscribed", ParentType, ContextType, RequireFields<SubscriptionuserSubscribedArgs, 'id' | 'subgraphError'>>;
  userSubscribeds?: SubscriptionResolver<Array<ResolversTypes['UserSubscribed']>, "userSubscribeds", ParentType, ContextType, RequireFields<SubscriptionuserSubscribedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  totalSpendingStats_collection?: SubscriptionResolver<Array<ResolversTypes['TotalSpendingStats']>, "totalSpendingStats_collection", ParentType, ContextType, RequireFields<SubscriptiontotalSpendingStats_collectionArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  ownershipTransferRequested?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferRequested']>, "ownershipTransferRequested", ParentType, ContextType, RequireFields<SubscriptionownershipTransferRequestedArgs, 'id' | 'subgraphError'>>;
  ownershipTransferRequesteds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferRequested']>, "ownershipTransferRequesteds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferRequestedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferred']>, "ownershipTransferred", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferred']>, "ownershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestFulfilled?: SubscriptionResolver<Maybe<ResolversTypes['RequestFulfilled']>, "requestFulfilled", ParentType, ContextType, RequireFields<SubscriptionrequestFulfilledArgs, 'id' | 'subgraphError'>>;
  requestFulfilleds?: SubscriptionResolver<Array<ResolversTypes['RequestFulfilled']>, "requestFulfilleds", ParentType, ContextType, RequireFields<SubscriptionrequestFulfilledsArgs, 'skip' | 'first' | 'subgraphError'>>;
  requestSent?: SubscriptionResolver<Maybe<ResolversTypes['RequestSent']>, "requestSent", ParentType, ContextType, RequireFields<SubscriptionrequestSentArgs, 'id' | 'subgraphError'>>;
  requestSents?: SubscriptionResolver<Array<ResolversTypes['RequestSent']>, "requestSents", ParentType, ContextType, RequireFields<SubscriptionrequestSentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  response?: SubscriptionResolver<Maybe<ResolversTypes['Response']>, "response", ParentType, ContextType, RequireFields<SubscriptionresponseArgs, 'id' | 'subgraphError'>>;
  responses?: SubscriptionResolver<Array<ResolversTypes['Response']>, "responses", ParentType, ContextType, RequireFields<SubscriptionresponsesArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardPurchaseFailed?: SubscriptionResolver<Maybe<ResolversTypes['RewardPurchaseFailed']>, "rewardPurchaseFailed", ParentType, ContextType, RequireFields<SubscriptionrewardPurchaseFailedArgs, 'id' | 'subgraphError'>>;
  rewardPurchaseFaileds?: SubscriptionResolver<Array<ResolversTypes['RewardPurchaseFailed']>, "rewardPurchaseFaileds", ParentType, ContextType, RequireFields<SubscriptionrewardPurchaseFailedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transactionRecorded?: SubscriptionResolver<Maybe<ResolversTypes['TransactionRecorded']>, "transactionRecorded", ParentType, ContextType, RequireFields<SubscriptiontransactionRecordedArgs, 'id' | 'subgraphError'>>;
  transactionRecordeds?: SubscriptionResolver<Array<ResolversTypes['TransactionRecorded']>, "transactionRecordeds", ParentType, ContextType, RequireFields<SubscriptiontransactionRecordedsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MerchantResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Merchant'] = ResolversParentTypes['Merchant']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscribers?: Resolver<Array<ResolversTypes['MerchantSubscriber']>, ParentType, ContextType, RequireFields<MerchantsubscribersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MerchantRegisteredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerchantRegistered'] = ResolversParentTypes['MerchantRegistered']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MerchantSubscriberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerchantSubscriber'] = ResolversParentTypes['MerchantSubscriber']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Subscriber'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RewardTierReachedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardTierReached'] = ResolversParentTypes['RewardTierReached']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpendingTrackedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpendingTracked'] = ResolversParentTypes['SpendingTracked']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amountSpent?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpendingTrackedDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpendingTrackedData'] = ResolversParentTypes['SpendingTrackedData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscriber'] = ResolversParentTypes['Subscriber']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchants?: Resolver<Array<ResolversTypes['MerchantSubscriber']>, ParentType, ContextType, RequireFields<SubscribermerchantsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TierUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TierUpdated'] = ResolversParentTypes['TierUpdated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tierIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spendingThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TotalSpendingStatsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TotalSpendingStats'] = ResolversParentTypes['TotalSpendingStats']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserSubscribedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserSubscribed'] = ResolversParentTypes['UserSubscribed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipTransferRequestedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferRequested'] = ResolversParentTypes['OwnershipTransferRequested']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OwnershipTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OwnershipTransferred'] = ResolversParentTypes['OwnershipTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestFulfilledResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RequestFulfilled'] = ResolversParentTypes['RequestFulfilled']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  Contract_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RequestSentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RequestSent'] = ResolversParentTypes['RequestSent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  Contract_id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  response?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  err?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RewardPurchaseFailedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardPurchaseFailed'] = ResolversParentTypes['RewardPurchaseFailed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionRecordedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionRecorded'] = ResolversParentTypes['TransactionRecorded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Merchant?: MerchantResolvers<ContextType>;
  MerchantRegistered?: MerchantRegisteredResolvers<ContextType>;
  MerchantSubscriber?: MerchantSubscriberResolvers<ContextType>;
  RewardTierReached?: RewardTierReachedResolvers<ContextType>;
  SpendingTracked?: SpendingTrackedResolvers<ContextType>;
  SpendingTrackedData?: SpendingTrackedDataResolvers<ContextType>;
  Subscriber?: SubscriberResolvers<ContextType>;
  TierUpdated?: TierUpdatedResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  TotalSpendingStats?: TotalSpendingStatsResolvers<ContextType>;
  UserSubscribed?: UserSubscribedResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  OwnershipTransferRequested?: OwnershipTransferRequestedResolvers<ContextType>;
  OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>;
  RequestFulfilled?: RequestFulfilledResolvers<ContextType>;
  RequestSent?: RequestSentResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  RewardPurchaseFailed?: RewardPurchaseFailedResolvers<ContextType>;
  TransactionRecorded?: TransactionRecordedResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = PerklysubscriptionTypes.Context & ChainlinkTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/chainlink/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/perklysubscription/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const perklysubscriptionTransforms = [];
const chainlinkTransforms = [];
const additionalTypeDefs = [] as any[];
const perklysubscriptionHandler = new GraphqlHandler({
              name: "perklysubscription",
              config: {"endpoint":"https://api.studio.thegraph.com/query/92897/perklysubscription/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("perklysubscription"),
              logger: logger.child("perklysubscription"),
              importFn,
            });
const chainlinkHandler = new GraphqlHandler({
              name: "chainlink",
              config: {"endpoint":"https://api.studio.thegraph.com/query/92897/chainlink/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("chainlink"),
              logger: logger.child("chainlink"),
              importFn,
            });
sources[0] = {
          name: 'perklysubscription',
          handler: perklysubscriptionHandler,
          transforms: perklysubscriptionTransforms
        }
sources[1] = {
          name: 'chainlink',
          handler: chainlinkHandler,
          transforms: chainlinkTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
const documentHashMap = {
        "21622cf46a429ee984669123adaa99c4c462d8eb479ef9e54bb7ea18fe08a77a": GetDailySpendingsMerchantDocument,
"8df7aa323e6551adf47e8480041f819b5e3967199ff658a2667f0d781cd791dc": GetMerchantDashboardDataDocument,
"b51a171cabaf946e5d0c96fd8f9ae88e1e6a9afad7cae03b3f6a9e261a87207b": GetMerchantSubscribersDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
        ...{}
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetDailySpendingsMerchantDocument,
        get rawSDL() {
          return printWithCache(GetDailySpendingsMerchantDocument);
        },
        location: 'GetDailySpendingsMerchantDocument.graphql',
        sha256Hash: '21622cf46a429ee984669123adaa99c4c462d8eb479ef9e54bb7ea18fe08a77a'
      },{
        document: GetMerchantDashboardDataDocument,
        get rawSDL() {
          return printWithCache(GetMerchantDashboardDataDocument);
        },
        location: 'GetMerchantDashboardDataDocument.graphql',
        sha256Hash: '8df7aa323e6551adf47e8480041f819b5e3967199ff658a2667f0d781cd791dc'
      },{
        document: GetMerchantSubscribersDocument,
        get rawSDL() {
          return printWithCache(GetMerchantSubscribersDocument);
        },
        location: 'GetMerchantSubscribersDocument.graphql',
        sha256Hash: 'b51a171cabaf946e5d0c96fd8f9ae88e1e6a9afad7cae03b3f6a9e261a87207b'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetDailySpendingsMerchantQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetDailySpendingsMerchantQuery = { totalSpendingStats_collection: Array<(
    Pick<TotalSpendingStats, 'id' | 'timestamp' | 'totalAmount'>
    & { merchant: Pick<Merchant, 'id' | 'name'> }
  )> };

export type GetMerchantDashboardDataQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetMerchantDashboardDataQuery = { spendingTrackeds: Array<Pick<SpendingTracked, 'id' | 'amountSpent' | 'user' | 'merchant' | 'blockTimestamp' | 'transactionHash'>>, userSubscribeds: Array<Pick<UserSubscribed, 'id' | 'user' | 'blockTimestamp' | 'transactionHash'>> };

export type GetMerchantSubscribersQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMerchantSubscribersQuery = { subscribers: Array<Pick<Subscriber, 'id'>> };


export const GetDailySpendingsMerchantDocument = gql`
    query GetDailySpendingsMerchant($merchantId: Bytes) {
  totalSpendingStats_collection(
    interval: day
    where: {merchant_: {id: $merchantId}}
    first: 1
  ) {
    id
    merchant {
      id
      name
    }
    timestamp
    totalAmount
  }
}
    ` as unknown as DocumentNode<GetDailySpendingsMerchantQuery, GetDailySpendingsMerchantQueryVariables>;
export const GetMerchantDashboardDataDocument = gql`
    query GetMerchantDashboardData($merchantId: Bytes) {
  spendingTrackeds(where: {merchant: $merchantId}) {
    id
    amountSpent
    user
    merchant
    blockTimestamp
    transactionHash
  }
  userSubscribeds(where: {merchant: $merchantId}) {
    id
    user
    blockTimestamp
    transactionHash
  }
}
    ` as unknown as DocumentNode<GetMerchantDashboardDataQuery, GetMerchantDashboardDataQueryVariables>;
export const GetMerchantSubscribersDocument = gql`
    query GetMerchantSubscribers($merchantId: String) {
  subscribers(where: {merchants_: {merchant: $merchantId}}) {
    id
  }
}
    ` as unknown as DocumentNode<GetMerchantSubscribersQuery, GetMerchantSubscribersQueryVariables>;




export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetDailySpendingsMerchant(variables?: GetDailySpendingsMerchantQueryVariables, options?: C): Promise<GetDailySpendingsMerchantQuery> {
      return requester<GetDailySpendingsMerchantQuery, GetDailySpendingsMerchantQueryVariables>(GetDailySpendingsMerchantDocument, variables, options) as Promise<GetDailySpendingsMerchantQuery>;
    },
    GetMerchantDashboardData(variables?: GetMerchantDashboardDataQueryVariables, options?: C): Promise<GetMerchantDashboardDataQuery> {
      return requester<GetMerchantDashboardDataQuery, GetMerchantDashboardDataQueryVariables>(GetMerchantDashboardDataDocument, variables, options) as Promise<GetMerchantDashboardDataQuery>;
    },
    GetMerchantSubscribers(variables?: GetMerchantSubscribersQueryVariables, options?: C): Promise<GetMerchantSubscribersQuery> {
      return requester<GetMerchantSubscribersQuery, GetMerchantSubscribersQueryVariables>(GetMerchantSubscribersDocument, variables, options) as Promise<GetMerchantSubscribersQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;