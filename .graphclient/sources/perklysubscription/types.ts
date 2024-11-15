// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PerklysubscriptionTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type EpnsNotificationCounter = {
  id: Scalars['ID']['output'];
  totalCount: Scalars['BigInt']['output'];
};

export type EpnsNotificationCounter_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  totalCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EpnsNotificationCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EpnsNotificationCounter_filter>>>;
};

export type EpnsNotificationCounter_orderBy =
  | 'id'
  | 'totalCount';

export type EpnsPushNotification = {
  id: Scalars['ID']['output'];
  notificationNumber: Scalars['BigInt']['output'];
  recipient: Scalars['String']['output'];
  notification: Scalars['String']['output'];
};

export type EpnsPushNotification_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  notificationNumber?: InputMaybe<Scalars['BigInt']['input']>;
  notificationNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  notificationNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  notificationNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  notificationNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  notificationNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  notificationNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notificationNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  recipient_not?: InputMaybe<Scalars['String']['input']>;
  recipient_gt?: InputMaybe<Scalars['String']['input']>;
  recipient_lt?: InputMaybe<Scalars['String']['input']>;
  recipient_gte?: InputMaybe<Scalars['String']['input']>;
  recipient_lte?: InputMaybe<Scalars['String']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipient_contains?: InputMaybe<Scalars['String']['input']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['String']['input']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<Scalars['String']['input']>;
  notification_not?: InputMaybe<Scalars['String']['input']>;
  notification_gt?: InputMaybe<Scalars['String']['input']>;
  notification_lt?: InputMaybe<Scalars['String']['input']>;
  notification_gte?: InputMaybe<Scalars['String']['input']>;
  notification_lte?: InputMaybe<Scalars['String']['input']>;
  notification_in?: InputMaybe<Array<Scalars['String']['input']>>;
  notification_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  notification_contains?: InputMaybe<Scalars['String']['input']>;
  notification_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  notification_not_contains?: InputMaybe<Scalars['String']['input']>;
  notification_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  notification_starts_with?: InputMaybe<Scalars['String']['input']>;
  notification_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  notification_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  notification_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  notification_ends_with?: InputMaybe<Scalars['String']['input']>;
  notification_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  notification_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  notification_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EpnsPushNotification_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EpnsPushNotification_filter>>>;
};

export type EpnsPushNotification_orderBy =
  | 'id'
  | 'notificationNumber'
  | 'recipient'
  | 'notification';

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

export type Query = {
  epnsNotificationCounter?: Maybe<EpnsNotificationCounter>;
  epnsNotificationCounters: Array<EpnsNotificationCounter>;
  epnsPushNotification?: Maybe<EpnsPushNotification>;
  epnsPushNotifications: Array<EpnsPushNotification>;
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
};


export type QueryepnsNotificationCounterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryepnsNotificationCountersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EpnsNotificationCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EpnsNotificationCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryepnsPushNotificationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryepnsPushNotificationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EpnsPushNotification_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EpnsPushNotification_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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

export type Subscription = {
  epnsNotificationCounter?: Maybe<EpnsNotificationCounter>;
  epnsNotificationCounters: Array<EpnsNotificationCounter>;
  epnsPushNotification?: Maybe<EpnsPushNotification>;
  epnsPushNotifications: Array<EpnsPushNotification>;
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
};


export type SubscriptionepnsNotificationCounterArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionepnsNotificationCountersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EpnsNotificationCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EpnsNotificationCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionepnsPushNotificationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionepnsPushNotificationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EpnsPushNotification_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EpnsPushNotification_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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

  export type QuerySdk = {
      /** null **/
  epnsNotificationCounter: InContextSdkMethod<Query['epnsNotificationCounter'], QueryepnsNotificationCounterArgs, MeshContext>,
  /** null **/
  epnsNotificationCounters: InContextSdkMethod<Query['epnsNotificationCounters'], QueryepnsNotificationCountersArgs, MeshContext>,
  /** null **/
  epnsPushNotification: InContextSdkMethod<Query['epnsPushNotification'], QueryepnsPushNotificationArgs, MeshContext>,
  /** null **/
  epnsPushNotifications: InContextSdkMethod<Query['epnsPushNotifications'], QueryepnsPushNotificationsArgs, MeshContext>,
  /** null **/
  merchantRegistered: InContextSdkMethod<Query['merchantRegistered'], QuerymerchantRegisteredArgs, MeshContext>,
  /** null **/
  merchantRegistereds: InContextSdkMethod<Query['merchantRegistereds'], QuerymerchantRegisteredsArgs, MeshContext>,
  /** null **/
  merchant: InContextSdkMethod<Query['merchant'], QuerymerchantArgs, MeshContext>,
  /** null **/
  merchants: InContextSdkMethod<Query['merchants'], QuerymerchantsArgs, MeshContext>,
  /** null **/
  subscriber: InContextSdkMethod<Query['subscriber'], QuerysubscriberArgs, MeshContext>,
  /** null **/
  subscribers: InContextSdkMethod<Query['subscribers'], QuerysubscribersArgs, MeshContext>,
  /** null **/
  merchantSubscriber: InContextSdkMethod<Query['merchantSubscriber'], QuerymerchantSubscriberArgs, MeshContext>,
  /** null **/
  merchantSubscribers: InContextSdkMethod<Query['merchantSubscribers'], QuerymerchantSubscribersArgs, MeshContext>,
  /** null **/
  rewardTierReached: InContextSdkMethod<Query['rewardTierReached'], QueryrewardTierReachedArgs, MeshContext>,
  /** null **/
  rewardTierReacheds: InContextSdkMethod<Query['rewardTierReacheds'], QueryrewardTierReachedsArgs, MeshContext>,
  /** null **/
  spendingTracked: InContextSdkMethod<Query['spendingTracked'], QueryspendingTrackedArgs, MeshContext>,
  /** null **/
  spendingTrackeds: InContextSdkMethod<Query['spendingTrackeds'], QueryspendingTrackedsArgs, MeshContext>,
  /** null **/
  spendingTrackedData: InContextSdkMethod<Query['spendingTrackedData'], QueryspendingTrackedDataArgs, MeshContext>,
  /** null **/
  spendingTrackedDatas: InContextSdkMethod<Query['spendingTrackedDatas'], QueryspendingTrackedDatasArgs, MeshContext>,
  /** null **/
  tierUpdated: InContextSdkMethod<Query['tierUpdated'], QuerytierUpdatedArgs, MeshContext>,
  /** null **/
  tierUpdateds: InContextSdkMethod<Query['tierUpdateds'], QuerytierUpdatedsArgs, MeshContext>,
  /** null **/
  userSubscribed: InContextSdkMethod<Query['userSubscribed'], QueryuserSubscribedArgs, MeshContext>,
  /** null **/
  userSubscribeds: InContextSdkMethod<Query['userSubscribeds'], QueryuserSubscribedsArgs, MeshContext>,
  /** Collection of aggregated `TotalSpendingStats` values **/
  totalSpendingStats_collection: InContextSdkMethod<Query['totalSpendingStats_collection'], QuerytotalSpendingStats_collectionArgs, MeshContext>,
  /** null **/
  merchantSearch: InContextSdkMethod<Query['merchantSearch'], QuerymerchantSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  epnsNotificationCounter: InContextSdkMethod<Subscription['epnsNotificationCounter'], SubscriptionepnsNotificationCounterArgs, MeshContext>,
  /** null **/
  epnsNotificationCounters: InContextSdkMethod<Subscription['epnsNotificationCounters'], SubscriptionepnsNotificationCountersArgs, MeshContext>,
  /** null **/
  epnsPushNotification: InContextSdkMethod<Subscription['epnsPushNotification'], SubscriptionepnsPushNotificationArgs, MeshContext>,
  /** null **/
  epnsPushNotifications: InContextSdkMethod<Subscription['epnsPushNotifications'], SubscriptionepnsPushNotificationsArgs, MeshContext>,
  /** null **/
  merchantRegistered: InContextSdkMethod<Subscription['merchantRegistered'], SubscriptionmerchantRegisteredArgs, MeshContext>,
  /** null **/
  merchantRegistereds: InContextSdkMethod<Subscription['merchantRegistereds'], SubscriptionmerchantRegisteredsArgs, MeshContext>,
  /** null **/
  merchant: InContextSdkMethod<Subscription['merchant'], SubscriptionmerchantArgs, MeshContext>,
  /** null **/
  merchants: InContextSdkMethod<Subscription['merchants'], SubscriptionmerchantsArgs, MeshContext>,
  /** null **/
  subscriber: InContextSdkMethod<Subscription['subscriber'], SubscriptionsubscriberArgs, MeshContext>,
  /** null **/
  subscribers: InContextSdkMethod<Subscription['subscribers'], SubscriptionsubscribersArgs, MeshContext>,
  /** null **/
  merchantSubscriber: InContextSdkMethod<Subscription['merchantSubscriber'], SubscriptionmerchantSubscriberArgs, MeshContext>,
  /** null **/
  merchantSubscribers: InContextSdkMethod<Subscription['merchantSubscribers'], SubscriptionmerchantSubscribersArgs, MeshContext>,
  /** null **/
  rewardTierReached: InContextSdkMethod<Subscription['rewardTierReached'], SubscriptionrewardTierReachedArgs, MeshContext>,
  /** null **/
  rewardTierReacheds: InContextSdkMethod<Subscription['rewardTierReacheds'], SubscriptionrewardTierReachedsArgs, MeshContext>,
  /** null **/
  spendingTracked: InContextSdkMethod<Subscription['spendingTracked'], SubscriptionspendingTrackedArgs, MeshContext>,
  /** null **/
  spendingTrackeds: InContextSdkMethod<Subscription['spendingTrackeds'], SubscriptionspendingTrackedsArgs, MeshContext>,
  /** null **/
  spendingTrackedData: InContextSdkMethod<Subscription['spendingTrackedData'], SubscriptionspendingTrackedDataArgs, MeshContext>,
  /** null **/
  spendingTrackedDatas: InContextSdkMethod<Subscription['spendingTrackedDatas'], SubscriptionspendingTrackedDatasArgs, MeshContext>,
  /** null **/
  tierUpdated: InContextSdkMethod<Subscription['tierUpdated'], SubscriptiontierUpdatedArgs, MeshContext>,
  /** null **/
  tierUpdateds: InContextSdkMethod<Subscription['tierUpdateds'], SubscriptiontierUpdatedsArgs, MeshContext>,
  /** null **/
  userSubscribed: InContextSdkMethod<Subscription['userSubscribed'], SubscriptionuserSubscribedArgs, MeshContext>,
  /** null **/
  userSubscribeds: InContextSdkMethod<Subscription['userSubscribeds'], SubscriptionuserSubscribedsArgs, MeshContext>,
  /** Collection of aggregated `TotalSpendingStats` values **/
  totalSpendingStats_collection: InContextSdkMethod<Subscription['totalSpendingStats_collection'], SubscriptiontotalSpendingStats_collectionArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["perklysubscription"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
