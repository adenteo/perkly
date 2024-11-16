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
import type { PerklyVoucherTypes } from './sources/perklyVoucher/types';
import * as importedModule$0 from "./sources/perklysubscription/introspectionSchema";
import * as importedModule$1 from "./sources/perklyVoucher/introspectionSchema";
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
  spendingTrackedDataUser?: Maybe<SpendingTrackedDataUser>;
  spendingTrackedDataUsers: Array<SpendingTrackedDataUser>;
  tierUpdated?: Maybe<TierUpdated>;
  tierUpdateds: Array<TierUpdated>;
  userSubscribed?: Maybe<UserSubscribed>;
  userSubscribeds: Array<UserSubscribed>;
  /** Collection of aggregated `TotalSpendingStats` values */
  totalSpendingStats_collection: Array<TotalSpendingStats>;
  /** Collection of aggregated `TotalSpendingStatsUser` values */
  totalSpendingStatsUsers: Array<TotalSpendingStatsUser>;
  merchantSearch: Array<Merchant>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  airdropCompleted?: Maybe<AirdropCompleted>;
  airdropCompleteds: Array<AirdropCompleted>;
  airdropRequest?: Maybe<AirdropRequest>;
  airdropRequests: Array<AirdropRequest>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  batchMetadataUpdate?: Maybe<BatchMetadataUpdate>;
  batchMetadataUpdates: Array<BatchMetadataUpdate>;
  coordinatorSet?: Maybe<CoordinatorSet>;
  coordinatorSets: Array<CoordinatorSet>;
  metadataUpdate?: Maybe<MetadataUpdate>;
  metadataUpdates: Array<MetadataUpdate>;
  ownershipTransferRequested?: Maybe<OwnershipTransferRequested>;
  ownershipTransferRequesteds: Array<OwnershipTransferRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  subscriberAdded?: Maybe<SubscriberAdded>;
  subscriberAddeds: Array<SubscriberAdded>;
  tokenBurn?: Maybe<TokenBurn>;
  tokenBurns: Array<TokenBurn>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  voucherDiscountsSet?: Maybe<VoucherDiscountsSet>;
  voucherDiscountsSets: Array<VoucherDiscountsSet>;
  randomRecipientSelected?: Maybe<randomRecipientSelected>;
  randomRecipientSelecteds: Array<randomRecipientSelected>;
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


export type QueryspendingTrackedDataUserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryspendingTrackedDataUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpendingTrackedDataUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpendingTrackedDataUser_filter>;
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


export type QuerytotalSpendingStatsUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interval: Aggregation_interval;
  where?: InputMaybe<TotalSpendingStatsUser_filter>;
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


export type QueryairdropCompletedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryairdropCompletedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AirdropCompleted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AirdropCompleted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryairdropRequestArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryairdropRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AirdropRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AirdropRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybatchMetadataUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybatchMetadataUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchMetadataUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BatchMetadataUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycoordinatorSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycoordinatorSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CoordinatorSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoordinatorSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetadataUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymetadataUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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


export type QuerysubscriberAddedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriberAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriberAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriberAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenBurnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenBurnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBurn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenBurn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvoucherDiscountsSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvoucherDiscountsSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoucherDiscountsSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VoucherDiscountsSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrandomRecipientSelectedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrandomRecipientSelectedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<randomRecipientSelected_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<randomRecipientSelected_filter>;
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
  spendingTrackedDataUser?: Maybe<SpendingTrackedDataUser>;
  spendingTrackedDataUsers: Array<SpendingTrackedDataUser>;
  tierUpdated?: Maybe<TierUpdated>;
  tierUpdateds: Array<TierUpdated>;
  userSubscribed?: Maybe<UserSubscribed>;
  userSubscribeds: Array<UserSubscribed>;
  /** Collection of aggregated `TotalSpendingStats` values */
  totalSpendingStats_collection: Array<TotalSpendingStats>;
  /** Collection of aggregated `TotalSpendingStatsUser` values */
  totalSpendingStatsUsers: Array<TotalSpendingStatsUser>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  airdropCompleted?: Maybe<AirdropCompleted>;
  airdropCompleteds: Array<AirdropCompleted>;
  airdropRequest?: Maybe<AirdropRequest>;
  airdropRequests: Array<AirdropRequest>;
  approval?: Maybe<Approval>;
  approvals: Array<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  batchMetadataUpdate?: Maybe<BatchMetadataUpdate>;
  batchMetadataUpdates: Array<BatchMetadataUpdate>;
  coordinatorSet?: Maybe<CoordinatorSet>;
  coordinatorSets: Array<CoordinatorSet>;
  metadataUpdate?: Maybe<MetadataUpdate>;
  metadataUpdates: Array<MetadataUpdate>;
  ownershipTransferRequested?: Maybe<OwnershipTransferRequested>;
  ownershipTransferRequesteds: Array<OwnershipTransferRequested>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  subscriberAdded?: Maybe<SubscriberAdded>;
  subscriberAddeds: Array<SubscriberAdded>;
  tokenBurn?: Maybe<TokenBurn>;
  tokenBurns: Array<TokenBurn>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  voucherDiscountsSet?: Maybe<VoucherDiscountsSet>;
  voucherDiscountsSets: Array<VoucherDiscountsSet>;
  randomRecipientSelected?: Maybe<randomRecipientSelected>;
  randomRecipientSelecteds: Array<randomRecipientSelected>;
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


export type SubscriptionspendingTrackedDataUserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionspendingTrackedDataUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SpendingTrackedDataUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SpendingTrackedDataUser_filter>;
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


export type SubscriptiontotalSpendingStatsUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  interval: Aggregation_interval;
  where?: InputMaybe<TotalSpendingStatsUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionairdropCompletedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionairdropCompletedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AirdropCompleted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AirdropCompleted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionairdropRequestArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionairdropRequestsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AirdropRequest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AirdropRequest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionapprovalForAllsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbatchMetadataUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbatchMetadataUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BatchMetadataUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BatchMetadataUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncoordinatorSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncoordinatorSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CoordinatorSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CoordinatorSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetadataUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmetadataUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MetadataUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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


export type SubscriptionsubscriberAddedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriberAddedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SubscriberAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriberAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenBurnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenBurnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenBurn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenBurn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvoucherDiscountsSetArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvoucherDiscountsSetsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoucherDiscountsSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VoucherDiscountsSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrandomRecipientSelectedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrandomRecipientSelectedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<randomRecipientSelected_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<randomRecipientSelected_filter>;
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

export type SpendingTrackedDataUser = {
  id: Scalars['Int8']['output'];
  timestamp: Scalars['Timestamp']['output'];
  subscriber: Subscriber;
  amount: Scalars['BigInt']['output'];
};

export type SpendingTrackedDataUser_filter = {
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
  and?: InputMaybe<Array<InputMaybe<SpendingTrackedDataUser_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SpendingTrackedDataUser_filter>>>;
};

export type SpendingTrackedDataUser_orderBy =
  | 'id'
  | 'timestamp'
  | 'subscriber'
  | 'subscriber__id'
  | 'amount';

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

export type TotalSpendingStatsUser = {
  id: Scalars['Int8']['output'];
  timestamp: Scalars['Timestamp']['output'];
  subscriber: Subscriber;
  totalAmount: Scalars['BigInt']['output'];
  count: Scalars['Int8']['output'];
};

export type TotalSpendingStatsUser_filter = {
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
  subscriber?: InputMaybe<Scalars['String']['input']>;
  subscriber_?: InputMaybe<Subscriber_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TotalSpendingStatsUser_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TotalSpendingStatsUser_filter>>>;
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

export type AirdropCompleted = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['BigInt']['output'];
  selectedRecipient: Scalars['Bytes']['output'];
  voucherId: Scalars['BigInt']['output'];
  merchant: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AirdropCompleted_filter = {
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
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selectedRecipient?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  selectedRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  selectedRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  voucherId?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_not?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voucherId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<AirdropCompleted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AirdropCompleted_filter>>>;
};

export type AirdropCompleted_orderBy =
  | 'id'
  | 'requestId'
  | 'selectedRecipient'
  | 'voucherId'
  | 'merchant'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type AirdropRequest = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['BigInt']['output'];
  merchant: Scalars['Bytes']['output'];
  ipfsHash: Scalars['String']['output'];
  subscribers: Array<Scalars['Bytes']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AirdropRequest_filter = {
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
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subscribers?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscribers_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscribers_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscribers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscribers_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscribers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<AirdropRequest_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AirdropRequest_filter>>>;
};

export type AirdropRequest_orderBy =
  | 'id'
  | 'requestId'
  | 'merchant'
  | 'ipfsHash'
  | 'subscribers'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Approval = {
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  approved: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll = {
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll_filter = {
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
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_filter>>>;
};

export type ApprovalForAll_orderBy =
  | 'id'
  | 'owner'
  | 'operator'
  | 'approved'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Approval_filter = {
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
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_lt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_lte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  approved_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Approval_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Approval_filter>>>;
};

export type Approval_orderBy =
  | 'id'
  | 'owner'
  | 'approved'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type BatchMetadataUpdate = {
  id: Scalars['Bytes']['output'];
  _fromTokenId: Scalars['BigInt']['output'];
  _toTokenId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BatchMetadataUpdate_filter = {
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
  _fromTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  _fromTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  _fromTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _fromTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _fromTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _fromTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _fromTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _fromTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _toTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  _toTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  _toTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _toTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _toTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _toTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _toTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _toTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<BatchMetadataUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BatchMetadataUpdate_filter>>>;
};

export type BatchMetadataUpdate_orderBy =
  | 'id'
  | '_fromTokenId'
  | '_toTokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type CoordinatorSet = {
  id: Scalars['Bytes']['output'];
  vrfCoordinator: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CoordinatorSet_filter = {
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
  vrfCoordinator?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_not?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vrfCoordinator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vrfCoordinator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vrfCoordinator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  and?: InputMaybe<Array<InputMaybe<CoordinatorSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CoordinatorSet_filter>>>;
};

export type CoordinatorSet_orderBy =
  | 'id'
  | 'vrfCoordinator'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type MetadataUpdate = {
  id: Scalars['Bytes']['output'];
  _tokenId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MetadataUpdate_filter = {
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
  _tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  _tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  _tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<MetadataUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MetadataUpdate_filter>>>;
};

export type MetadataUpdate_orderBy =
  | 'id'
  | '_tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

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

export type SubscriberAdded = {
  id: Scalars['Bytes']['output'];
  subscriber: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SubscriberAdded_filter = {
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
  subscriber?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lt?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_gte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_lte?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  subscriber_contains?: InputMaybe<Scalars['Bytes']['input']>;
  subscriber_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  and?: InputMaybe<Array<InputMaybe<SubscriberAdded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SubscriberAdded_filter>>>;
};

export type SubscriberAdded_orderBy =
  | 'id'
  | 'subscriber'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TokenBurn = {
  id: Scalars['Bytes']['output'];
  voucherId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TokenBurn_filter = {
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
  voucherId?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_not?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voucherId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voucherId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<TokenBurn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenBurn_filter>>>;
};

export type TokenBurn_orderBy =
  | 'id'
  | 'voucherId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Transfer = {
  id: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Transfer_filter = {
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
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'tokenId'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type VoucherDiscountsSet = {
  id: Scalars['Bytes']['output'];
  merchant: Scalars['Bytes']['output'];
  discounts: Array<Scalars['Int']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type VoucherDiscountsSet_filter = {
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
  discounts?: InputMaybe<Array<Scalars['Int']['input']>>;
  discounts_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  discounts_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  discounts_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  discounts_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  discounts_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  and?: InputMaybe<Array<InputMaybe<VoucherDiscountsSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VoucherDiscountsSet_filter>>>;
};

export type VoucherDiscountsSet_orderBy =
  | 'id'
  | 'merchant'
  | 'discounts'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type randomRecipientSelected = {
  id: Scalars['Bytes']['output'];
  requestId: Scalars['BigInt']['output'];
  selectedRecipient: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type randomRecipientSelected_filter = {
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
  requestId?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_not?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selectedRecipient?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  selectedRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  selectedRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  selectedRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  and?: InputMaybe<Array<InputMaybe<randomRecipientSelected_filter>>>;
  or?: InputMaybe<Array<InputMaybe<randomRecipientSelected_filter>>>;
};

export type randomRecipientSelected_orderBy =
  | 'id'
  | 'requestId'
  | 'selectedRecipient'
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
  SpendingTrackedDataUser: ResolverTypeWrapper<SpendingTrackedDataUser>;
  SpendingTrackedDataUser_filter: SpendingTrackedDataUser_filter;
  SpendingTrackedDataUser_orderBy: SpendingTrackedDataUser_orderBy;
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
  TotalSpendingStatsUser: ResolverTypeWrapper<TotalSpendingStatsUser>;
  TotalSpendingStatsUser_filter: TotalSpendingStatsUser_filter;
  TotalSpendingStats_filter: TotalSpendingStats_filter;
  UserSubscribed: ResolverTypeWrapper<UserSubscribed>;
  UserSubscribed_filter: UserSubscribed_filter;
  UserSubscribed_orderBy: UserSubscribed_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  AirdropCompleted: ResolverTypeWrapper<AirdropCompleted>;
  AirdropCompleted_filter: AirdropCompleted_filter;
  AirdropCompleted_orderBy: AirdropCompleted_orderBy;
  AirdropRequest: ResolverTypeWrapper<AirdropRequest>;
  AirdropRequest_filter: AirdropRequest_filter;
  AirdropRequest_orderBy: AirdropRequest_orderBy;
  Approval: ResolverTypeWrapper<Approval>;
  ApprovalForAll: ResolverTypeWrapper<ApprovalForAll>;
  ApprovalForAll_filter: ApprovalForAll_filter;
  ApprovalForAll_orderBy: ApprovalForAll_orderBy;
  Approval_filter: Approval_filter;
  Approval_orderBy: Approval_orderBy;
  BatchMetadataUpdate: ResolverTypeWrapper<BatchMetadataUpdate>;
  BatchMetadataUpdate_filter: BatchMetadataUpdate_filter;
  BatchMetadataUpdate_orderBy: BatchMetadataUpdate_orderBy;
  CoordinatorSet: ResolverTypeWrapper<CoordinatorSet>;
  CoordinatorSet_filter: CoordinatorSet_filter;
  CoordinatorSet_orderBy: CoordinatorSet_orderBy;
  MetadataUpdate: ResolverTypeWrapper<MetadataUpdate>;
  MetadataUpdate_filter: MetadataUpdate_filter;
  MetadataUpdate_orderBy: MetadataUpdate_orderBy;
  OwnershipTransferRequested: ResolverTypeWrapper<OwnershipTransferRequested>;
  OwnershipTransferRequested_filter: OwnershipTransferRequested_filter;
  OwnershipTransferRequested_orderBy: OwnershipTransferRequested_orderBy;
  OwnershipTransferred: ResolverTypeWrapper<OwnershipTransferred>;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  OwnershipTransferred_orderBy: OwnershipTransferred_orderBy;
  SubscriberAdded: ResolverTypeWrapper<SubscriberAdded>;
  SubscriberAdded_filter: SubscriberAdded_filter;
  SubscriberAdded_orderBy: SubscriberAdded_orderBy;
  TokenBurn: ResolverTypeWrapper<TokenBurn>;
  TokenBurn_filter: TokenBurn_filter;
  TokenBurn_orderBy: TokenBurn_orderBy;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
  VoucherDiscountsSet: ResolverTypeWrapper<VoucherDiscountsSet>;
  VoucherDiscountsSet_filter: VoucherDiscountsSet_filter;
  VoucherDiscountsSet_orderBy: VoucherDiscountsSet_orderBy;
  randomRecipientSelected: ResolverTypeWrapper<randomRecipientSelected>;
  randomRecipientSelected_filter: randomRecipientSelected_filter;
  randomRecipientSelected_orderBy: randomRecipientSelected_orderBy;
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
  SpendingTrackedDataUser: SpendingTrackedDataUser;
  SpendingTrackedDataUser_filter: SpendingTrackedDataUser_filter;
  SpendingTrackedData_filter: SpendingTrackedData_filter;
  SpendingTracked_filter: SpendingTracked_filter;
  String: Scalars['String']['output'];
  Subscriber: Subscriber;
  Subscriber_filter: Subscriber_filter;
  TierUpdated: TierUpdated;
  TierUpdated_filter: TierUpdated_filter;
  Timestamp: Scalars['Timestamp']['output'];
  TotalSpendingStats: TotalSpendingStats;
  TotalSpendingStatsUser: TotalSpendingStatsUser;
  TotalSpendingStatsUser_filter: TotalSpendingStatsUser_filter;
  TotalSpendingStats_filter: TotalSpendingStats_filter;
  UserSubscribed: UserSubscribed;
  UserSubscribed_filter: UserSubscribed_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  AirdropCompleted: AirdropCompleted;
  AirdropCompleted_filter: AirdropCompleted_filter;
  AirdropRequest: AirdropRequest;
  AirdropRequest_filter: AirdropRequest_filter;
  Approval: Approval;
  ApprovalForAll: ApprovalForAll;
  ApprovalForAll_filter: ApprovalForAll_filter;
  Approval_filter: Approval_filter;
  BatchMetadataUpdate: BatchMetadataUpdate;
  BatchMetadataUpdate_filter: BatchMetadataUpdate_filter;
  CoordinatorSet: CoordinatorSet;
  CoordinatorSet_filter: CoordinatorSet_filter;
  MetadataUpdate: MetadataUpdate;
  MetadataUpdate_filter: MetadataUpdate_filter;
  OwnershipTransferRequested: OwnershipTransferRequested;
  OwnershipTransferRequested_filter: OwnershipTransferRequested_filter;
  OwnershipTransferred: OwnershipTransferred;
  OwnershipTransferred_filter: OwnershipTransferred_filter;
  SubscriberAdded: SubscriberAdded;
  SubscriberAdded_filter: SubscriberAdded_filter;
  TokenBurn: TokenBurn;
  TokenBurn_filter: TokenBurn_filter;
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
  VoucherDiscountsSet: VoucherDiscountsSet;
  VoucherDiscountsSet_filter: VoucherDiscountsSet_filter;
  randomRecipientSelected: randomRecipientSelected;
  randomRecipientSelected_filter: randomRecipientSelected_filter;
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
  spendingTrackedDataUser?: Resolver<Maybe<ResolversTypes['SpendingTrackedDataUser']>, ParentType, ContextType, RequireFields<QueryspendingTrackedDataUserArgs, 'id' | 'subgraphError'>>;
  spendingTrackedDataUsers?: Resolver<Array<ResolversTypes['SpendingTrackedDataUser']>, ParentType, ContextType, RequireFields<QueryspendingTrackedDataUsersArgs, 'skip' | 'first' | 'subgraphError'>>;
  tierUpdated?: Resolver<Maybe<ResolversTypes['TierUpdated']>, ParentType, ContextType, RequireFields<QuerytierUpdatedArgs, 'id' | 'subgraphError'>>;
  tierUpdateds?: Resolver<Array<ResolversTypes['TierUpdated']>, ParentType, ContextType, RequireFields<QuerytierUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userSubscribed?: Resolver<Maybe<ResolversTypes['UserSubscribed']>, ParentType, ContextType, RequireFields<QueryuserSubscribedArgs, 'id' | 'subgraphError'>>;
  userSubscribeds?: Resolver<Array<ResolversTypes['UserSubscribed']>, ParentType, ContextType, RequireFields<QueryuserSubscribedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  totalSpendingStats_collection?: Resolver<Array<ResolversTypes['TotalSpendingStats']>, ParentType, ContextType, RequireFields<QuerytotalSpendingStats_collectionArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  totalSpendingStatsUsers?: Resolver<Array<ResolversTypes['TotalSpendingStatsUser']>, ParentType, ContextType, RequireFields<QuerytotalSpendingStatsUsersArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  merchantSearch?: Resolver<Array<ResolversTypes['Merchant']>, ParentType, ContextType, RequireFields<QuerymerchantSearchArgs, 'text' | 'first' | 'skip' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  airdropCompleted?: Resolver<Maybe<ResolversTypes['AirdropCompleted']>, ParentType, ContextType, RequireFields<QueryairdropCompletedArgs, 'id' | 'subgraphError'>>;
  airdropCompleteds?: Resolver<Array<ResolversTypes['AirdropCompleted']>, ParentType, ContextType, RequireFields<QueryairdropCompletedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  airdropRequest?: Resolver<Maybe<ResolversTypes['AirdropRequest']>, ParentType, ContextType, RequireFields<QueryairdropRequestArgs, 'id' | 'subgraphError'>>;
  airdropRequests?: Resolver<Array<ResolversTypes['AirdropRequest']>, ParentType, ContextType, RequireFields<QueryairdropRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approval?: Resolver<Maybe<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<QueryapprovalArgs, 'id' | 'subgraphError'>>;
  approvals?: Resolver<Array<ResolversTypes['Approval']>, ParentType, ContextType, RequireFields<QueryapprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAll?: Resolver<Maybe<ResolversTypes['ApprovalForAll']>, ParentType, ContextType, RequireFields<QueryapprovalForAllArgs, 'id' | 'subgraphError'>>;
  approvalForAlls?: Resolver<Array<ResolversTypes['ApprovalForAll']>, ParentType, ContextType, RequireFields<QueryapprovalForAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  batchMetadataUpdate?: Resolver<Maybe<ResolversTypes['BatchMetadataUpdate']>, ParentType, ContextType, RequireFields<QuerybatchMetadataUpdateArgs, 'id' | 'subgraphError'>>;
  batchMetadataUpdates?: Resolver<Array<ResolversTypes['BatchMetadataUpdate']>, ParentType, ContextType, RequireFields<QuerybatchMetadataUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  coordinatorSet?: Resolver<Maybe<ResolversTypes['CoordinatorSet']>, ParentType, ContextType, RequireFields<QuerycoordinatorSetArgs, 'id' | 'subgraphError'>>;
  coordinatorSets?: Resolver<Array<ResolversTypes['CoordinatorSet']>, ParentType, ContextType, RequireFields<QuerycoordinatorSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metadataUpdate?: Resolver<Maybe<ResolversTypes['MetadataUpdate']>, ParentType, ContextType, RequireFields<QuerymetadataUpdateArgs, 'id' | 'subgraphError'>>;
  metadataUpdates?: Resolver<Array<ResolversTypes['MetadataUpdate']>, ParentType, ContextType, RequireFields<QuerymetadataUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferRequested?: Resolver<Maybe<ResolversTypes['OwnershipTransferRequested']>, ParentType, ContextType, RequireFields<QueryownershipTransferRequestedArgs, 'id' | 'subgraphError'>>;
  ownershipTransferRequesteds?: Resolver<Array<ResolversTypes['OwnershipTransferRequested']>, ParentType, ContextType, RequireFields<QueryownershipTransferRequestedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: Resolver<Maybe<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: Resolver<Array<ResolversTypes['OwnershipTransferred']>, ParentType, ContextType, RequireFields<QueryownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriberAdded?: Resolver<Maybe<ResolversTypes['SubscriberAdded']>, ParentType, ContextType, RequireFields<QuerysubscriberAddedArgs, 'id' | 'subgraphError'>>;
  subscriberAddeds?: Resolver<Array<ResolversTypes['SubscriberAdded']>, ParentType, ContextType, RequireFields<QuerysubscriberAddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenBurn?: Resolver<Maybe<ResolversTypes['TokenBurn']>, ParentType, ContextType, RequireFields<QuerytokenBurnArgs, 'id' | 'subgraphError'>>;
  tokenBurns?: Resolver<Array<ResolversTypes['TokenBurn']>, ParentType, ContextType, RequireFields<QuerytokenBurnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  voucherDiscountsSet?: Resolver<Maybe<ResolversTypes['VoucherDiscountsSet']>, ParentType, ContextType, RequireFields<QueryvoucherDiscountsSetArgs, 'id' | 'subgraphError'>>;
  voucherDiscountsSets?: Resolver<Array<ResolversTypes['VoucherDiscountsSet']>, ParentType, ContextType, RequireFields<QueryvoucherDiscountsSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  randomRecipientSelected?: Resolver<Maybe<ResolversTypes['randomRecipientSelected']>, ParentType, ContextType, RequireFields<QueryrandomRecipientSelectedArgs, 'id' | 'subgraphError'>>;
  randomRecipientSelecteds?: Resolver<Array<ResolversTypes['randomRecipientSelected']>, ParentType, ContextType, RequireFields<QueryrandomRecipientSelectedsArgs, 'skip' | 'first' | 'subgraphError'>>;
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
  spendingTrackedDataUser?: SubscriptionResolver<Maybe<ResolversTypes['SpendingTrackedDataUser']>, "spendingTrackedDataUser", ParentType, ContextType, RequireFields<SubscriptionspendingTrackedDataUserArgs, 'id' | 'subgraphError'>>;
  spendingTrackedDataUsers?: SubscriptionResolver<Array<ResolversTypes['SpendingTrackedDataUser']>, "spendingTrackedDataUsers", ParentType, ContextType, RequireFields<SubscriptionspendingTrackedDataUsersArgs, 'skip' | 'first' | 'subgraphError'>>;
  tierUpdated?: SubscriptionResolver<Maybe<ResolversTypes['TierUpdated']>, "tierUpdated", ParentType, ContextType, RequireFields<SubscriptiontierUpdatedArgs, 'id' | 'subgraphError'>>;
  tierUpdateds?: SubscriptionResolver<Array<ResolversTypes['TierUpdated']>, "tierUpdateds", ParentType, ContextType, RequireFields<SubscriptiontierUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userSubscribed?: SubscriptionResolver<Maybe<ResolversTypes['UserSubscribed']>, "userSubscribed", ParentType, ContextType, RequireFields<SubscriptionuserSubscribedArgs, 'id' | 'subgraphError'>>;
  userSubscribeds?: SubscriptionResolver<Array<ResolversTypes['UserSubscribed']>, "userSubscribeds", ParentType, ContextType, RequireFields<SubscriptionuserSubscribedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  totalSpendingStats_collection?: SubscriptionResolver<Array<ResolversTypes['TotalSpendingStats']>, "totalSpendingStats_collection", ParentType, ContextType, RequireFields<SubscriptiontotalSpendingStats_collectionArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  totalSpendingStatsUsers?: SubscriptionResolver<Array<ResolversTypes['TotalSpendingStatsUser']>, "totalSpendingStatsUsers", ParentType, ContextType, RequireFields<SubscriptiontotalSpendingStatsUsersArgs, 'skip' | 'first' | 'interval' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  airdropCompleted?: SubscriptionResolver<Maybe<ResolversTypes['AirdropCompleted']>, "airdropCompleted", ParentType, ContextType, RequireFields<SubscriptionairdropCompletedArgs, 'id' | 'subgraphError'>>;
  airdropCompleteds?: SubscriptionResolver<Array<ResolversTypes['AirdropCompleted']>, "airdropCompleteds", ParentType, ContextType, RequireFields<SubscriptionairdropCompletedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  airdropRequest?: SubscriptionResolver<Maybe<ResolversTypes['AirdropRequest']>, "airdropRequest", ParentType, ContextType, RequireFields<SubscriptionairdropRequestArgs, 'id' | 'subgraphError'>>;
  airdropRequests?: SubscriptionResolver<Array<ResolversTypes['AirdropRequest']>, "airdropRequests", ParentType, ContextType, RequireFields<SubscriptionairdropRequestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approval?: SubscriptionResolver<Maybe<ResolversTypes['Approval']>, "approval", ParentType, ContextType, RequireFields<SubscriptionapprovalArgs, 'id' | 'subgraphError'>>;
  approvals?: SubscriptionResolver<Array<ResolversTypes['Approval']>, "approvals", ParentType, ContextType, RequireFields<SubscriptionapprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  approvalForAll?: SubscriptionResolver<Maybe<ResolversTypes['ApprovalForAll']>, "approvalForAll", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllArgs, 'id' | 'subgraphError'>>;
  approvalForAlls?: SubscriptionResolver<Array<ResolversTypes['ApprovalForAll']>, "approvalForAlls", ParentType, ContextType, RequireFields<SubscriptionapprovalForAllsArgs, 'skip' | 'first' | 'subgraphError'>>;
  batchMetadataUpdate?: SubscriptionResolver<Maybe<ResolversTypes['BatchMetadataUpdate']>, "batchMetadataUpdate", ParentType, ContextType, RequireFields<SubscriptionbatchMetadataUpdateArgs, 'id' | 'subgraphError'>>;
  batchMetadataUpdates?: SubscriptionResolver<Array<ResolversTypes['BatchMetadataUpdate']>, "batchMetadataUpdates", ParentType, ContextType, RequireFields<SubscriptionbatchMetadataUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  coordinatorSet?: SubscriptionResolver<Maybe<ResolversTypes['CoordinatorSet']>, "coordinatorSet", ParentType, ContextType, RequireFields<SubscriptioncoordinatorSetArgs, 'id' | 'subgraphError'>>;
  coordinatorSets?: SubscriptionResolver<Array<ResolversTypes['CoordinatorSet']>, "coordinatorSets", ParentType, ContextType, RequireFields<SubscriptioncoordinatorSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  metadataUpdate?: SubscriptionResolver<Maybe<ResolversTypes['MetadataUpdate']>, "metadataUpdate", ParentType, ContextType, RequireFields<SubscriptionmetadataUpdateArgs, 'id' | 'subgraphError'>>;
  metadataUpdates?: SubscriptionResolver<Array<ResolversTypes['MetadataUpdate']>, "metadataUpdates", ParentType, ContextType, RequireFields<SubscriptionmetadataUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferRequested?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferRequested']>, "ownershipTransferRequested", ParentType, ContextType, RequireFields<SubscriptionownershipTransferRequestedArgs, 'id' | 'subgraphError'>>;
  ownershipTransferRequesteds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferRequested']>, "ownershipTransferRequesteds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferRequestedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ownershipTransferred?: SubscriptionResolver<Maybe<ResolversTypes['OwnershipTransferred']>, "ownershipTransferred", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredArgs, 'id' | 'subgraphError'>>;
  ownershipTransferreds?: SubscriptionResolver<Array<ResolversTypes['OwnershipTransferred']>, "ownershipTransferreds", ParentType, ContextType, RequireFields<SubscriptionownershipTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriberAdded?: SubscriptionResolver<Maybe<ResolversTypes['SubscriberAdded']>, "subscriberAdded", ParentType, ContextType, RequireFields<SubscriptionsubscriberAddedArgs, 'id' | 'subgraphError'>>;
  subscriberAddeds?: SubscriptionResolver<Array<ResolversTypes['SubscriberAdded']>, "subscriberAddeds", ParentType, ContextType, RequireFields<SubscriptionsubscriberAddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenBurn?: SubscriptionResolver<Maybe<ResolversTypes['TokenBurn']>, "tokenBurn", ParentType, ContextType, RequireFields<SubscriptiontokenBurnArgs, 'id' | 'subgraphError'>>;
  tokenBurns?: SubscriptionResolver<Array<ResolversTypes['TokenBurn']>, "tokenBurns", ParentType, ContextType, RequireFields<SubscriptiontokenBurnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  voucherDiscountsSet?: SubscriptionResolver<Maybe<ResolversTypes['VoucherDiscountsSet']>, "voucherDiscountsSet", ParentType, ContextType, RequireFields<SubscriptionvoucherDiscountsSetArgs, 'id' | 'subgraphError'>>;
  voucherDiscountsSets?: SubscriptionResolver<Array<ResolversTypes['VoucherDiscountsSet']>, "voucherDiscountsSets", ParentType, ContextType, RequireFields<SubscriptionvoucherDiscountsSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  randomRecipientSelected?: SubscriptionResolver<Maybe<ResolversTypes['randomRecipientSelected']>, "randomRecipientSelected", ParentType, ContextType, RequireFields<SubscriptionrandomRecipientSelectedArgs, 'id' | 'subgraphError'>>;
  randomRecipientSelecteds?: SubscriptionResolver<Array<ResolversTypes['randomRecipientSelected']>, "randomRecipientSelecteds", ParentType, ContextType, RequireFields<SubscriptionrandomRecipientSelectedsArgs, 'skip' | 'first' | 'subgraphError'>>;
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

export type SpendingTrackedDataUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SpendingTrackedDataUser'] = ResolversParentTypes['SpendingTrackedDataUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Subscriber'], ParentType, ContextType>;
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

export type TotalSpendingStatsUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TotalSpendingStatsUser'] = ResolversParentTypes['TotalSpendingStatsUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int8'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Subscriber'], ParentType, ContextType>;
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

export type AirdropCompletedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AirdropCompleted'] = ResolversParentTypes['AirdropCompleted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  selectedRecipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  voucherId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AirdropRequestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AirdropRequest'] = ResolversParentTypes['AirdropRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ipfsHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscribers?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApprovalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Approval'] = ResolversParentTypes['Approval']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApprovalForAllResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApprovalForAll'] = ResolversParentTypes['ApprovalForAll']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BatchMetadataUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BatchMetadataUpdate'] = ResolversParentTypes['BatchMetadataUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  _fromTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  _toTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoordinatorSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CoordinatorSet'] = ResolversParentTypes['CoordinatorSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  vrfCoordinator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataUpdate'] = ResolversParentTypes['MetadataUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  _tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
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

export type SubscriberAddedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscriberAdded'] = ResolversParentTypes['SubscriberAdded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenBurn'] = ResolversParentTypes['TokenBurn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  voucherId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VoucherDiscountsSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VoucherDiscountsSet'] = ResolversParentTypes['VoucherDiscountsSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  merchant?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type randomRecipientSelectedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['randomRecipientSelected'] = ResolversParentTypes['randomRecipientSelected']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  requestId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  selectedRecipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
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
  SpendingTrackedDataUser?: SpendingTrackedDataUserResolvers<ContextType>;
  Subscriber?: SubscriberResolvers<ContextType>;
  TierUpdated?: TierUpdatedResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  TotalSpendingStats?: TotalSpendingStatsResolvers<ContextType>;
  TotalSpendingStatsUser?: TotalSpendingStatsUserResolvers<ContextType>;
  UserSubscribed?: UserSubscribedResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  AirdropCompleted?: AirdropCompletedResolvers<ContextType>;
  AirdropRequest?: AirdropRequestResolvers<ContextType>;
  Approval?: ApprovalResolvers<ContextType>;
  ApprovalForAll?: ApprovalForAllResolvers<ContextType>;
  BatchMetadataUpdate?: BatchMetadataUpdateResolvers<ContextType>;
  CoordinatorSet?: CoordinatorSetResolvers<ContextType>;
  MetadataUpdate?: MetadataUpdateResolvers<ContextType>;
  OwnershipTransferRequested?: OwnershipTransferRequestedResolvers<ContextType>;
  OwnershipTransferred?: OwnershipTransferredResolvers<ContextType>;
  SubscriberAdded?: SubscriberAddedResolvers<ContextType>;
  TokenBurn?: TokenBurnResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  VoucherDiscountsSet?: VoucherDiscountsSetResolvers<ContextType>;
  randomRecipientSelected?: randomRecipientSelectedResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = PerklysubscriptionTypes.Context & PerklyVoucherTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/perklysubscription/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/perklyVoucher/introspectionSchema":
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
const perklyVoucherTransforms = [];
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
const perklyVoucherHandler = new GraphqlHandler({
              name: "perklyVoucher",
              config: {"endpoint":"https://api.studio.thegraph.com/query/92897/perklyvoucher/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("perklyVoucher"),
              logger: logger.child("perklyVoucher"),
              importFn,
            });
sources[0] = {
          name: 'perklysubscription',
          handler: perklysubscriptionHandler,
          transforms: perklysubscriptionTransforms
        }
sources[1] = {
          name: 'perklyVoucher',
          handler: perklyVoucherHandler,
          transforms: perklyVoucherTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
const documentHashMap = {
        "3c3ecddb4efcffbef0fe60922c7cfd6a60f1b690c819af8defab7de8ee5eb4e5": GetAirdropCompletedsDocument,
"21622cf46a429ee984669123adaa99c4c462d8eb479ef9e54bb7ea18fe08a77a": GetDailySpendingsMerchantDocument,
"98b953689db5851856ed83a12b196a7b401c705b5e26555adcd0f042b897cc8e": GetMerchantByNameDocument,
"8df7aa323e6551adf47e8480041f819b5e3967199ff658a2667f0d781cd791dc": GetMerchantDashboardDataDocument,
"b51a171cabaf946e5d0c96fd8f9ae88e1e6a9afad7cae03b3f6a9e261a87207b": GetMerchantSubscribersDocument,
"6473788b7e690bf8ccfb761ab2ff7bf45ba62ca0f5219f6522de60d3dec67499": GetSubscriberSpendingsDocument,
"7e87b1431e874a2f7a038ec6ea73f1b25ddef33f8c1c486b611b44674582e64b": GetUserDashboardDocument
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
        document: GetAirdropCompletedsDocument,
        get rawSDL() {
          return printWithCache(GetAirdropCompletedsDocument);
        },
        location: 'GetAirdropCompletedsDocument.graphql',
        sha256Hash: '3c3ecddb4efcffbef0fe60922c7cfd6a60f1b690c819af8defab7de8ee5eb4e5'
      },{
        document: GetDailySpendingsMerchantDocument,
        get rawSDL() {
          return printWithCache(GetDailySpendingsMerchantDocument);
        },
        location: 'GetDailySpendingsMerchantDocument.graphql',
        sha256Hash: '21622cf46a429ee984669123adaa99c4c462d8eb479ef9e54bb7ea18fe08a77a'
      },{
        document: GetMerchantByNameDocument,
        get rawSDL() {
          return printWithCache(GetMerchantByNameDocument);
        },
        location: 'GetMerchantByNameDocument.graphql',
        sha256Hash: '98b953689db5851856ed83a12b196a7b401c705b5e26555adcd0f042b897cc8e'
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
      },{
        document: GetSubscriberSpendingsDocument,
        get rawSDL() {
          return printWithCache(GetSubscriberSpendingsDocument);
        },
        location: 'GetSubscriberSpendingsDocument.graphql',
        sha256Hash: '6473788b7e690bf8ccfb761ab2ff7bf45ba62ca0f5219f6522de60d3dec67499'
      },{
        document: GetUserDashboardDocument,
        get rawSDL() {
          return printWithCache(GetUserDashboardDocument);
        },
        location: 'GetUserDashboardDocument.graphql',
        sha256Hash: '7e87b1431e874a2f7a038ec6ea73f1b25ddef33f8c1c486b611b44674582e64b'
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
export type GetAirdropCompletedsQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetAirdropCompletedsQuery = { airdropCompleteds: Array<Pick<AirdropCompleted, 'merchant' | 'selectedRecipient' | 'blockTimestamp'>> };

export type GetDailySpendingsMerchantQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetDailySpendingsMerchantQuery = { totalSpendingStats_collection: Array<(
    Pick<TotalSpendingStats, 'id' | 'timestamp' | 'totalAmount'>
    & { merchant: Pick<Merchant, 'id' | 'name'> }
  )> };

export type GetMerchantByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetMerchantByNameQuery = { merchantSearch: Array<(
    Pick<Merchant, 'id' | 'name'>
    & { subscribers: Array<Pick<MerchantSubscriber, 'id'>> }
  )> };

export type GetMerchantDashboardDataQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetMerchantDashboardDataQuery = { spendingTrackeds: Array<Pick<SpendingTracked, 'id' | 'amountSpent' | 'user' | 'merchant' | 'blockTimestamp' | 'transactionHash'>>, userSubscribeds: Array<Pick<UserSubscribed, 'id' | 'user' | 'blockTimestamp' | 'transactionHash'>> };

export type GetMerchantSubscribersQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMerchantSubscribersQuery = { subscribers: Array<Pick<Subscriber, 'id'>> };

export type GetSubscriberSpendingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscriberSpendingsQuery = { spendingTrackeds: Array<Pick<SpendingTracked, 'id' | 'merchant' | 'transactionHash' | 'user' | 'amountSpent' | 'blockTimestamp'>> };

export type GetUserDashboardQueryVariables = Exact<{
  userAddress?: InputMaybe<Scalars['Bytes']['input']>;
}>;


export type GetUserDashboardQuery = { airdropCompleteds: Array<Pick<AirdropCompleted, 'id' | 'merchant' | 'blockTimestamp' | 'voucherId' | 'transactionHash'>>, spendingTrackeds: Array<Pick<SpendingTracked, 'merchant' | 'amountSpent' | 'blockTimestamp'>>, userSubscribeds: Array<Pick<UserSubscribed, 'merchant' | 'blockTimestamp'>> };


export const GetAirdropCompletedsDocument = gql`
    query GetAirdropCompleteds($merchantId: Bytes) {
  airdropCompleteds(
    orderBy: blockTimestamp
    first: 5
    orderDirection: desc
    where: {merchant: $merchantId}
  ) {
    merchant
    selectedRecipient
    blockTimestamp
  }
}
    ` as unknown as DocumentNode<GetAirdropCompletedsQuery, GetAirdropCompletedsQueryVariables>;
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
export const GetMerchantByNameDocument = gql`
    query GetMerchantByName($name: String!) {
  merchantSearch(text: $name) {
    id
    name
    subscribers {
      id
    }
  }
}
    ` as unknown as DocumentNode<GetMerchantByNameQuery, GetMerchantByNameQueryVariables>;
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
export const GetSubscriberSpendingsDocument = gql`
    query GetSubscriberSpendings {
  spendingTrackeds {
    id
    merchant
    transactionHash
    user
    amountSpent
    blockTimestamp
  }
}
    ` as unknown as DocumentNode<GetSubscriberSpendingsQuery, GetSubscriberSpendingsQueryVariables>;
export const GetUserDashboardDocument = gql`
    query GetUserDashboard($userAddress: Bytes) {
  airdropCompleteds(where: {selectedRecipient: $userAddress}) {
    id
    merchant
    blockTimestamp
    voucherId
    transactionHash
  }
  spendingTrackeds(where: {user: $userAddress}) {
    merchant
    amountSpent
    blockTimestamp
  }
  userSubscribeds(where: {user: $userAddress}) {
    merchant
    blockTimestamp
  }
}
    ` as unknown as DocumentNode<GetUserDashboardQuery, GetUserDashboardQueryVariables>;








export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetAirdropCompleteds(variables?: GetAirdropCompletedsQueryVariables, options?: C): Promise<GetAirdropCompletedsQuery> {
      return requester<GetAirdropCompletedsQuery, GetAirdropCompletedsQueryVariables>(GetAirdropCompletedsDocument, variables, options) as Promise<GetAirdropCompletedsQuery>;
    },
    GetDailySpendingsMerchant(variables?: GetDailySpendingsMerchantQueryVariables, options?: C): Promise<GetDailySpendingsMerchantQuery> {
      return requester<GetDailySpendingsMerchantQuery, GetDailySpendingsMerchantQueryVariables>(GetDailySpendingsMerchantDocument, variables, options) as Promise<GetDailySpendingsMerchantQuery>;
    },
    GetMerchantByName(variables: GetMerchantByNameQueryVariables, options?: C): Promise<GetMerchantByNameQuery> {
      return requester<GetMerchantByNameQuery, GetMerchantByNameQueryVariables>(GetMerchantByNameDocument, variables, options) as Promise<GetMerchantByNameQuery>;
    },
    GetMerchantDashboardData(variables?: GetMerchantDashboardDataQueryVariables, options?: C): Promise<GetMerchantDashboardDataQuery> {
      return requester<GetMerchantDashboardDataQuery, GetMerchantDashboardDataQueryVariables>(GetMerchantDashboardDataDocument, variables, options) as Promise<GetMerchantDashboardDataQuery>;
    },
    GetMerchantSubscribers(variables?: GetMerchantSubscribersQueryVariables, options?: C): Promise<GetMerchantSubscribersQuery> {
      return requester<GetMerchantSubscribersQuery, GetMerchantSubscribersQueryVariables>(GetMerchantSubscribersDocument, variables, options) as Promise<GetMerchantSubscribersQuery>;
    },
    GetSubscriberSpendings(variables?: GetSubscriberSpendingsQueryVariables, options?: C): Promise<GetSubscriberSpendingsQuery> {
      return requester<GetSubscriberSpendingsQuery, GetSubscriberSpendingsQueryVariables>(GetSubscriberSpendingsDocument, variables, options) as Promise<GetSubscriberSpendingsQuery>;
    },
    GetUserDashboard(variables?: GetUserDashboardQueryVariables, options?: C): Promise<GetUserDashboardQuery> {
      return requester<GetUserDashboardQuery, GetUserDashboardQueryVariables>(GetUserDashboardDocument, variables, options) as Promise<GetUserDashboardQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;