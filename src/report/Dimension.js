/**
 * {@code Dimension} provides the break-down and filterable types available for
 * running a {@link ReportJob}. Aggregate and percentage columns will be
 * calculated based on these groupings.
 */
const Dimension = {
  /**
   * Breaks down reporting data by month and year in the network time zone. Can
   * be used to filter on month using ISO 4601 format 'YYYY-MM'.
   */
  MONTH_AND_YEAR: 'MONTH_AND_YEAR',

  /**
   * Breaks down reporting data by week of the year in the network time zone.
   * Cannot be used for filtering.
   */
  WEEK: 'WEEK',

  /**
   * Breaks down reporting data by date in the network time zone. Can be used to
   * filter by date using ISO 8601's format 'YYYY-MM-DD'".
   */
  DATE: 'DATE',

  /**
   * Breaks down reporting data by day of the week in the network time zone. Can
   * be used to filter by day of the week using the index of the day (from 1 for
   * Monday is 1 to 7 for Sunday).
   */
  DAY: 'DAY',

  /**
   * Breaks down reporting data by hour of the day in the network time zone. Can
   * be used to filter by hour of the day (from 0 to 23).
   */
  HOUR: 'HOUR',

  /**
   * Breaks down reporting data by {@link LineItem#id}. Can be used to
   * filter by {@link LineItem#id}.
   */
  LINE_ITEM_ID: 'LINE_ITEM_ID',

  /**
   * Breaks down reporting data by line item. {@link LineItem#name} and
   * {@link LineItem#id} are automatically included as columns in the report.
   * Can be used to filter by {@link LineItem#name}.
   */
  LINE_ITEM_NAME: 'LINE_ITEM_NAME',

  /**
   * Breaks down reporting data by {@link LineItem#lineItemType}. Can be used
   * to filter by line item type using {@link LineItemType} enumeration names.
   */
  LINE_ITEM_TYPE: 'LINE_ITEM_TYPE',

  /**
   * Breaks down reporting data by aggregated demand channel type.
   */
  AGGREGATED_DEMAND_CHANNEL: 'AGGREGATED_DEMAND_CHANNEL',

  /**
   * Breaks down reporting data by {@link Order#id}. Can be used to filter by
   * {@link Order#id}.
   */
  ORDER_ID: 'ORDER_ID',

  /**
   * Breaks down reporting data by order. {@link Order#name} and
   * {@link Order#id} are automatically included as columns in the report. Can
   * be used to filter by {@link Order#name}.
   */
  ORDER_NAME: 'ORDER_NAME',

  /**
   * Delivery status of the order. Not available as a dimension to report on,
   * but exists as a dimension in order to filter on it using PQL.
   * Valid values are 'STARTED', 'NOT_STARTED' and 'COMPLETED'.
   */
  ORDER_DELIVERY_STATUS: 'ORDER_DELIVERY_STATUS',

  /**
   * Breaks down reporting data by advertising company {@link Company#id}. Can
   * be used to filter by {@link Company#id}.
   */
  ADVERTISER_ID: 'ADVERTISER_ID',

  /**
   * Breaks down reporting data by advertising company. {@link Company#name} and
   * {@link Company#id} are automatically included as columns in the report.
   * Can be used to filter by {@link Company#name}.
   */
  ADVERTISER_NAME: 'ADVERTISER_NAME',

  /**
   * The network that provided the ad for SDK ad mediation.
   * <p>
   * If selected for a report, that report will include only SDK mediation ads and will not
   * contain non-SDK mediation ads.
   * <p>
   * SDK mediation ads are ads for mobile devices. They have a list of ad networks which can
   * provide ads to serve. Not every ad network will have an ad to serve so the device will try
   * each network one-by-one until it finds an ad network with an ad to serve. The ad network that
   * ends up serving the ad will appear here. Note that this id does not correlate to anything in
   * the companies table and is not the same id as is served by {@link #ADVERTISER_ID}.
   */
  AD_NETWORK_ID: 'AD_NETWORK_ID',

  /**
   * The name of the network defined in {@link #AD_NETWORK_ID}.
   */
  AD_NETWORK_NAME: 'AD_NETWORK_NAME',

  /**
   * Breaks down reporting data by salesperson {@link User#id}. Can be used to
   * filter by {@link User#id}.
   */
  SALESPERSON_ID: 'SALESPERSON_ID',

  /**
   * Breaks down reporting data by salesperson. {@link User#name} and
   * {@link User#id} of the salesperson are automatically included as columns in
   * the report. Can be used to filter by {@link User#name}.
   */
  SALESPERSON_NAME: 'SALESPERSON_NAME',

  /**
   * Breaks down reporting data by {@link Creative#id} or creative set id
   * (master's {@link Creative#id}) if the creative is part of a creative set.
   * Can be used to filter by {@link Creative#id}.
   */
  CREATIVE_ID: 'CREATIVE_ID',

  /**
   * Breaks down reporting data by creative. {@link Creative#name} and
   * {@link Creative#id} are automatically included as columns in the report.
   * Can be used to filter by {@link Creative#name}.
   */
  CREATIVE_NAME: 'CREATIVE_NAME',

  /**
   * Breaks down reporting data by creative type.
   */
  CREATIVE_TYPE: 'CREATIVE_TYPE',

  /**
   * Breaks down reporting data by creative billing type.
   */
  CREATIVE_BILLING_TYPE: 'CREATIVE_BILLING_TYPE',

  /**
   * Breaks down reporting data by custom event ID.
   */
  CUSTOM_EVENT_ID: 'CUSTOM_EVENT_ID',

  /**
   * Breaks down reporting data by custom event name.
   */
  CUSTOM_EVENT_NAME: 'CUSTOM_EVENT_NAME',

  /**
   * Breaks down reporting data by custom event type (timer/exit/counter).
   */
  CUSTOM_EVENT_TYPE: 'CUSTOM_EVENT_TYPE',

  /**
   * Breaks down reporting data by {@link Creative#size}. Cannot be used for
   * filtering.
   */
  CREATIVE_SIZE: 'CREATIVE_SIZE',

  /**
   * Breaks down reporting data by {@link AdUnit#id}. Can be used to filter by
   * {@link AdUnit#id}. {@link #AD_UNIT_NAME}, i.e. {@link AdUnit#name}, is
   * automatically included as a dimension in the report.
   */
  AD_UNIT_ID: 'AD_UNIT_ID',

  /**
   * Breaks down reporting data by ad unit. {@link AdUnit#name} and
   * {@link AdUnit#id} are automatically included as columns in the report. Can
   * be used to filter by {@link AdUnit#name}.
   */
  AD_UNIT_NAME: 'AD_UNIT_NAME',

  /**
   * Used to filter on all the descendants of an ad unit by {@link AdUnit#id}.
   * Not available as a dimension to report on.
   */
  PARENT_AD_UNIT_ID: 'PARENT_AD_UNIT_ID',

  /**
   * Used to filter on all the descendants of an ad unit by {@link AdUnit#name}.
   * Not available as a dimension to report on.
   */
  PARENT_AD_UNIT_NAME: 'PARENT_AD_UNIT_NAME',

  /**
   * Breaks down reporting data by {@link Placement#id}. Can be used to filter
   * by {@link Placement#id}.
   */
  PLACEMENT_ID: 'PLACEMENT_ID',

  /**
   * Breaks down reporting data by placement. {@link Placement#name} and
   * {@link Placement#id} are automatically included as columns in the report.
   * Can be used to filter by {@link Placement#name}.
   */
  PLACEMENT_NAME: 'PLACEMENT_NAME',

  /**
   * Status of the placement. Not available as a dimension to report on, but
   * exists as a dimension in order to filter on it using PQL. Can be used to
   * filter on {@link Placement#status} by using {@link InventoryStatus}
   * enumeration names.
   */
  PLACEMENT_STATUS: 'PLACEMENT_STATUS',

  /**
   * Breaks down reporting data by criteria predefined by DoubleClick For
   * Publishers like the operating system, browser etc. Cannot be used for
   * filtering.
   */
  TARGETING: 'TARGETING',

  /**
   * The ID of the device category to which an ad is being targeted.
   * Can be used to filter by device category ID.
   */
  DEVICE_CATEGORY_ID: 'DEVICE_CATEGORY_ID',

  /**
   * The category of device (smartphone, feature phone, tablet, or desktop) to which an ad is
   * being targeted.
   * Can be used to filter by device category name.
   */
  DEVICE_CATEGORY_NAME: 'DEVICE_CATEGORY_NAME',

  /**
   * Breaks down reporting data by country criteria ID. Can be used to filter by
   * country criteria ID.
   */
  COUNTRY_CRITERIA_ID: 'COUNTRY_CRITERIA_ID',

  /**
   * Breaks down reporting data by country name. The country name and the
   * country criteria ID are automatically included as columns in the report.
   * Can be used to filter by country name using the US English name.
   */
  COUNTRY_NAME: 'COUNTRY_NAME',

  /**
   * Breaks down reporting data by region criteria ID. Can be used to filter by
   * region criteria ID.
   */
  REGION_CRITERIA_ID: 'REGION_CRITERIA_ID',

  /**
   * Breaks down reporting data by region name. The region name and the region
   * criteria ID are automatically included as columns in the report. Can be
   * used to filter by region name using the US English name.
   */
  REGION_NAME: 'REGION_NAME',

  /**
   * Breaks down reporting data by city criteria ID. Can be used to filter by
   * city criteria ID.
   */
  CITY_CRITERIA_ID: 'CITY_CRITERIA_ID',

  /**
   * Breaks down reporting data by city name. The city name and the city
   * criteria ID are automatically included as columns in the report. Can be
   * used to filter by city name using the US English name.
   */
  CITY_NAME: 'CITY_NAME',

  /**
   * Breaks down reporting data by metro criteria ID. Can be used to filter by
   * metro criteria ID.
   */
  METRO_CRITERIA_ID: 'METRO_CRITERIA_ID',

  /**
   * Breaks down reporting data by metro name. The metro name and the metro
   * criteria ID are automatically included as columns in the report. Can be
   * used to filter by metro name using the US English name.
   */
  METRO_NAME: 'METRO_NAME',

  /**
   * Breaks down reporting data by postal code criteria ID. Can be used to
   * filter by postal code criteria ID.
   */
  POSTAL_CODE_CRITERIA_ID: 'POSTAL_CODE_CRITERIA_ID',

  /**
   * Breaks down reporting data by postal code. The postal code and the postal
   * code criteria ID are automatically included as columns in the report. Can
   * be used to filter by postal code.
   */
  POSTAL_CODE: 'POSTAL_CODE',

  /**
   * Breaks down reporting data by {@link CustomTargetingValue#id}. Can be used
   * to filter by {@link CustomTargetingValue#id}.
   */
  CUSTOM_TARGETING_VALUE_ID: 'CUSTOM_TARGETING_VALUE_ID',

  /**
   * Breaks down reporting data by custom criteria. The {@link CustomTargetingValue} is
   * displayed in the form:
   * <ul>
   * <li>
   * car=honda when value match type is
   * {@link CustomTargetingValue.MatchType#EXACT}
   * </li>
   * <li>
   * car~honda when value match type is
   * {@link CustomTargetingValue.MatchType#BROAD}
   * </li>
   * <li>
   * car=*honda when value match type is
   * {@link CustomTargetingValue.MatchType#PREFIX}
   * </li>
   * <li>
   * car~*honda when value match type is
   * {@link CustomTargetingValue.MatchType#BROAD_PREFIX}
   * </li>
   * </ul>
   * {@link #CUSTOM_TARGETING_VALUE_ID}, i.e. {@link CustomTargetingValue#id} is
   * automatically included as a column in the report.
   * Cannot be used for filtering; use {@link #CUSTOM_TARGETING_VALUE_ID} instead.
   * <p>
   * When using this {@code Dimension}, metrics for freeform key values are only
   * reported on when they are registered with {@code CustomTargetingService}.
   */
  CUSTOM_CRITERIA: 'CUSTOM_CRITERIA',

  /**
   * Breaks down reporting data by activity ID. Can be used to filter by
   * activity ID.
   */
  ACTIVITY_ID: 'ACTIVITY_ID',

  /**
   * Breaks down reporting data by activity. The activity name and the activity
   * ID are automatically included as columns in the report. Can be used to
   * filter by activity name.
   */
  ACTIVITY_NAME: 'ACTIVITY_NAME',

  /**
   * Breaks down reporting data by activity group ID. Can be used to filter by
   * activity group ID.
   */
  ACTIVITY_GROUP_ID: 'ACTIVITY_GROUP_ID',

  /**
   * Breaks down reporting data by activity group. The activity group name and
   * the activity group ID are automatically included as columns in the report.
   * Can be used to filter by activity group name.
   */
  ACTIVITY_GROUP_NAME: 'ACTIVITY_GROUP_NAME',

  /**
   * Breaks down reporting data by {@link Content#id}. Can be used to filter by
   * {@link Content#id}.
   */
  CONTENT_ID: 'CONTENT_ID',

  /**
   * Breaks down reporting data by content. {@link Content#name} and
   * {@link Content#id} are automatically included as columns in the report. Can
   * be used to filter by {@link Content#name}.
   */
  CONTENT_NAME: 'CONTENT_NAME',

  /**
   * Breaks down reporting data by {@link ContentBundle#id}. Can be used to filter
   * by {@link ContentBundle#id}.
   */
  CONTENT_BUNDLE_ID: 'CONTENT_BUNDLE_ID',

  /**
   * Breaks down reporting data by content bundle. {@link ContentBundle#name} and
   * {@link ContentBundle#id} are automatically included as columns in the
   * report. Can be used to filter by {@link ContentBundle#name}.
   */
  CONTENT_BUNDLE_NAME: 'CONTENT_BUNDLE_NAME',

  /**
   * Breaks down reporting data by the content hierarchy. To use this dimension, a list of custom
   * targeting key IDs must be specified in
   * {@link ReportQuery#contentMetadataKeyHierarchyCustomTargetingKeyIds}.
   * <p>
   * This dimension can be used as a filter in the {@link Statement} in PQL syntax:
   * CONTENT_HIERARCHY_CUSTOM_TARGETING_KEY[contentMetadataKeyHierarchyCustomTargetingKeyId]_ID =
   * {@link CustomTargetingValue#id custom targeting value ID}
   * <p>
   * For example: WHERE CONTENT_HIERARCHY_CUSTOM_TARGETING_KEY[4242]_ID = 53423
   */
  CONTENT_HIERARCHY: 'CONTENT_HIERARCHY',

  /**
   * Breaks down reporting data by the fallback position of the video ad, i.e.,
   * {@code NON_FALLBACK}, {@code FALLBACK_POSITION_1}, {@code FALLBACK_POSITION_2}, etc. Can be
   * used for filtering.
   */
  VIDEO_FALLBACK_POSITION: 'VIDEO_FALLBACK_POSITION',

  /**
   * Breaks down reporting data by the position of the video ad within the video stream, i.e.,
   * {@code UNKNOWN_POSITION}, {@code PREROLL}, {@code POSTROLL}, {@code UNKNOWN_MIDROLL},
   * {@code MIDROLL_1}, {@code MIDROLL_2}, etc. {@code UNKNOWN_MIDROLL} represents a midroll, but
   * which specific midroll is unknown. Can be used for filtering.
   */
  POSITION_OF_POD: 'POSITION_OF_POD',

  /**
   * Breaks down reporting data by the position of the video ad within the pod, i.e.,
   * {@code UNKNOWN_POSITION}, {@code POSITION_1}, {@code POSITION_2}, etc.
   * Can be used for filtering.
   */
  POSITION_IN_POD: 'POSITION_IN_POD',

  /**
   * Breaks down reporting data by partner {@link Company#id}.
   */
  PARTNER_MANAGEMENT_PARTNER_ID: 'PARTNER_MANAGEMENT_PARTNER_ID',

  /**
   * Breaks down reporting data by partner {@link Company#name} and {@link Company#id} are
   * automatically included as columns in the report.
   */
  PARTNER_MANAGEMENT_PARTNER_NAME: 'PARTNER_MANAGEMENT_PARTNER_NAME',

  /**
   * Breaks down reporting data by partner label {@link Label#id}.
   */
  PARTNER_MANAGEMENT_PARTNER_LABEL_ID: 'PARTNER_MANAGEMENT_PARTNER_LABEL_ID',

  /**
   * Breaks down reporting data by partner label. {@link Label#name} and {@link Label#id} are
   * automatically included as columns in the report.
   */
  PARTNER_MANAGEMENT_PARTNER_LABEL_NAME:
    'PARTNER_MANAGEMENT_PARTNER_LABEL_NAME',

  /**
   * Breaks down reporting data by gender and age group, i.e., MALE_13_TO_17, MALE_18_TO_24,
   * MALE_25_TO_34, MALE_35_TO_44, MALE_45_TO_54, MALE_55_TO_64, MALE_65_PLUS, FEMALE_13_TO_17,
   * FEMALE_18_TO_24, FEMALE_25_TO_34, FEMALE_35_TO_44, FEMALE_45_TO_54, FEMALE_55_TO_64,
   * FEMALE_65_PLUS, UNKNOWN_0_TO_17 and UNKNOWN.
   * Whenever this dimension is selected, {@link #COUNTRY_NAME} must be selected.
   * <p>
   * This dimension is supported only for GRP columns.
   */
  GRP_DEMOGRAPHICS: 'GRP_DEMOGRAPHICS',

  /**
   * Size of the creative requested for an ad.
   */
  AD_REQUEST_SIZE: 'AD_REQUEST_SIZE',

  /**
   * Breaks down reporting data by the ad unit sizes specified in ad requests.
   * <p>Formatted as comma separated values, e.g. "300x250,300x250v,300x60".
   * <p>This dimension is supported only for sell-through columns.
   */
  AD_REQUEST_AD_UNIT_SIZES: 'AD_REQUEST_AD_UNIT_SIZES',

  /**
   * Breaks down reporting data by the custom criteria specified in ad requests.
   * <p>Formatted as comma separated
   * {@link CustomTargetingKey key}-{@link CustomTargetingValue values}, where a key-value is
   * formatted as {@code key1=value_1|...|value_n,key2=value_1|...|value_n,...}.
   * <p>This dimension is supported only for sell-through columns.
   */
  AD_REQUEST_CUSTOM_CRITERIA: 'AD_REQUEST_CUSTOM_CRITERIA',

  /**
   * The unique identifier used for an ad network that is associated with the
   * company that the ad is served for.
   */
  BUYER_ID: 'BUYER_ID',

  /**
   * The name of the ad network that is associated with the company that the ad is served for.
   */
  BUYER_NAME: 'BUYER_NAME',

  /**
   * ID of the advertiser that filled the ad either directly (through DFP) or indirectly via
   * Google Ad Exchange or another ad network or exchange.
   */
  VERIFIED_ADVERTISER_ID: 'VERIFIED_ADVERTISER_ID',

  /**
   * Name of the advertiser that filled the ad either directly (through DFP) or indirectly
   * via Google Ad Exchange or another ad network or exchange.
   */
  VERIFIED_ADVERTISER_NAME: 'VERIFIED_ADVERTISER_NAME',

  /**
   * Status of the ad unit. Not available as a dimension to report on,
   * but exists as a dimension in order to filter on it using PQL.
   * Valid values correspond to {@link InventoryStatus}.
   */
  AD_UNIT_STATUS: 'AD_UNIT_STATUS',

  /**
   * Breaks down reporting data by {@link Creative#id}. This includes regular creatives,
   * and master and companions in case of creative sets.
   */
  MASTER_COMPANION_CREATIVE_ID: 'MASTER_COMPANION_CREATIVE_ID',

  /**
   * Breaks down reporting data by creative. This includes regular creatives,
   * and master and companions in case of creative sets.
   */
  MASTER_COMPANION_CREATIVE_NAME: 'MASTER_COMPANION_CREATIVE_NAME',

  /**
   * Breaks down reporting data by {@link ProposalLineItem#id}. Can be used to filter by
   * {@link ProposalLineItem#id}.
   */
  PROPOSAL_LINE_ITEM_ID: 'PROPOSAL_LINE_ITEM_ID',

  /**
   * Breaks down reporting data by {@link ProposalLineItem#name}. Can be used to filter by
   * {@link ProposalLineItem#name}.
   */
  PROPOSAL_LINE_ITEM_NAME: 'PROPOSAL_LINE_ITEM_NAME',

  /**
   * Breaks down reporting data by {@link Proposal#id}. Can be used to filter by
   * {@link Proposal#id}.
   */
  PROPOSAL_ID: 'PROPOSAL_ID',

  /**
   * Breaks down reporting data by {@link Proposal#name}. Can be used to filter by
   * {@link Proposal#name}.
   */
  PROPOSAL_NAME: 'PROPOSAL_NAME',

  /**
   * Breaks down reporting data by salesperson {@link User#id}, including both salesperson and
   * secondary salespeople. Can be used to filter by all salespeople {@link User#id}.
   */
  ALL_SALESPEOPLE_ID: 'ALL_SALESPEOPLE_ID',

  /**
   * Breaks down reporting data by salesperson {@link User#name}, including both salesperson and
   * secondary salespeople. Can be used to filter by all salespeople {@link User#name}.
   */
  ALL_SALESPEOPLE_NAME: 'ALL_SALESPEOPLE_NAME',

  /**
   * Used to filter by {@link User#id} in sales team. Sales team includes salesperson, secondary
   * salesperson, sales planners. Not available as a dimension to report on.
   */
  SALES_TEAM_ID: 'SALES_TEAM_ID',

  /**
   * Used to filter by {@link User#name} in sales team. Sales team includes salesperson, secondary
   * salesperson, sales planners. Not available as a dimension to report on.
   */
  SALES_TEAM_NAME: 'SALES_TEAM_NAME',

  /**
   * Breaks down reporting data by proposal agency {@link Company#id}. Can be used to filter by
   * proposal agency {@link Company#id}.
   */
  PROPOSAL_AGENCY_ID: 'PROPOSAL_AGENCY_ID',

  /**
   * Breaks down reporting data by proposal agency {@link Company#name}. Can be used to filter by
   * proposal agency {@link Company#name}.
   */
  PROPOSAL_AGENCY_NAME: 'PROPOSAL_AGENCY_NAME',

  /**
   * Breaks down reporting data by {@link Product#id}. Can be used to filter by
   * {@link Product#id}.
   */
  PRODUCT_ID: 'PRODUCT_ID',

  /**
   * Breaks down reporting data by {@link Product#name}.
   */
  PRODUCT_NAME: 'PRODUCT_NAME',

  /**
   * Breaks down reporting data by {@link ProductTemplate#id}. Can be used to filter by
   * {@link ProductTemplate#id}.
   */
  PRODUCT_TEMPLATE_ID: 'PRODUCT_TEMPLATE_ID',

  /**
   * Breaks down reporting data by {@link ProductTemplate#name}. Can be used to filter by
   * {@link ProductTemplate#name}.
   */
  PRODUCT_TEMPLATE_NAME: 'PRODUCT_TEMPLATE_NAME',

  /**
   * Breaks down reporting data by {@link RateCard#id}. Can be used to filter by
   * {@link RateCard#id}.
   */
  RATE_CARD_ID: 'RATE_CARD_ID',

  /**
   * Breaks down reporting data by {@link RateCard#name}. Can be used to filter by
   * {@link RateCard#name}.
   */
  RATE_CARD_NAME: 'RATE_CARD_NAME',

  /**
   * Used to filter by {@link Workflow#id}. Not available as a dimension to report on.
   */
  WORKFLOW_ID: 'WORKFLOW_ID',

  /**
   * Used to filter by {@link Workflow#name}. Not available as a dimension to report on.
   */
  WORKFLOW_NAME: 'WORKFLOW_NAME',

  /**
   * Breaks down reporting data by {@link Package#id}.
   */
  PACKAGE_ID: 'PACKAGE_ID',

  /**
   * Breaks down reporting data by {@link Package#name}.
   */
  PACKAGE_NAME: 'PACKAGE_NAME',

  /**
   * Breaks down reporting data by {@link ProductPackage#id}. Can be used to filter by
   * {@link ProductPackage#id}.
   */
  PRODUCT_PACKAGE_ID: 'PRODUCT_PACKAGE_ID',

  /**
   * Breaks down reporting data by {@link ProductPackage#name}. Can be used to filter by
   * {@link ProductPackage#name}.
   */
  PRODUCT_PACKAGE_NAME: 'PRODUCT_PACKAGE_NAME',

  /**
   * Breaks down reporting data by billable audience segment ID.
   */
  AUDIENCE_SEGMENT_ID: 'AUDIENCE_SEGMENT_ID',

  /**
   * Breaks down reporting data by billable audience segment name.
   */
  AUDIENCE_SEGMENT_NAME: 'AUDIENCE_SEGMENT_NAME',

  /**
   * Breaks down reporting data by audience segment data provider name.
   */
  AUDIENCE_SEGMENT_DATA_PROVIDER_NAME: 'AUDIENCE_SEGMENT_DATA_PROVIDER_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange ad size.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_AD_SIZE_NAME: 'AD_EXCHANGE_AD_SIZE_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange platforms.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_PLATFORM_TYPE_NAME: 'AD_EXCHANGE_PLATFORM_TYPE_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange pricing rules.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_PRICING_RULE_NAME: 'AD_EXCHANGE_PRICING_RULE_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange tags.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_TAG_NAME: 'AD_EXCHANGE_TAG_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange URLs.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_URL_CHANNEL_NAME: 'AD_EXCHANGE_URL_CHANNEL_NAME',

  /**
   * Breaks down data by Ad Exchange linked web properties.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_AD_CLIENT_ID: 'AD_EXCHANGE_AD_CLIENT_ID',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange creative size.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_CREATIVE_SIZES: 'AD_EXCHANGE_CREATIVE_SIZES',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange ad types.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_AD_FORMAT_NAME: 'AD_EXCHANGE_AD_FORMAT_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange channels.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_CHANNEL_NAME: 'AD_EXCHANGE_CHANNEL_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange products.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_PRODUCT_NAME: 'AD_EXCHANGE_PRODUCT_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange sites.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_SITE_NAME: 'AD_EXCHANGE_SITE_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange request sources.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_REQUEST_SOURCES: 'AD_EXCHANGE_REQUEST_SOURCES',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange ad transaction.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_TRANSACTION_TYPE_NAME: 'AD_EXCHANGE_TRANSACTION_TYPE_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by the Ad Exchange advertiser name that bids
   * on ads.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_ADVERTISER_NAME: 'AD_EXCHANGE_ADVERTISER_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange agency.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_AGENCY: 'AD_EXCHANGE_AGENCY',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange bid type.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_BID_TYPE: 'AD_EXCHANGE_BID_TYPE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange branding type. Examples:
   * Branded, Anonymous.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_BRANDING_TYPE: 'AD_EXCHANGE_BRANDING_TYPE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange ad network name. Example:
   * Google Adwords.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_BUYER_NETWORK_NAME: 'AD_EXCHANGE_BUYER_NETWORK_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange date.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_DATE: 'AD_EXCHANGE_DATE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange deal CPM cost.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_DEAL_CPM: 'AD_EXCHANGE_DEAL_CPM',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange deal id.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_DEAL_ID: 'AD_EXCHANGE_DEAL_ID',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange deal name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_DEAL_NAME: 'AD_EXCHANGE_DEAL_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange deal/transaction type.
   * Example: Open auction.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_DEAL_TYPE: 'AD_EXCHANGE_DEAL_TYPE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange DSP buyer network name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_DSP_BUYER_NETWORK_NAME: 'AD_EXCHANGE_DSP_BUYER_NETWORK_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange expansion type.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_EXPANSION_TYPE: 'AD_EXCHANGE_EXPANSION_TYPE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange country code.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_COUNTRY_CODE: 'AD_EXCHANGE_COUNTRY_CODE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange country name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_COUNTRY_NAME: 'AD_EXCHANGE_COUNTRY_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange inventory ownership.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_INVENTORY_OWNERSHIP: 'AD_EXCHANGE_INVENTORY_OWNERSHIP',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange advertiser landing page
   * domain.
   *
   * <b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_LANDING_PAGE_DOMAIN: 'AD_EXCHANGE_LANDING_PAGE_DOMAIN',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange mobile app name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_MOBILE_APP_NAME: 'AD_EXCHANGE_MOBILE_APP_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange mobile carrier name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_MOBILE_CARRIER_NAME: 'AD_EXCHANGE_MOBILE_CARRIER_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange mobile device name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_MOBILE_DEVICE_NAME: 'AD_EXCHANGE_MOBILE_DEVICE_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange mobile inventory type.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_MOBILE_INVENTORY_TYPE: 'AD_EXCHANGE_MOBILE_INVENTORY_TYPE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange month.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_MONTH: 'AD_EXCHANGE_MONTH',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange partner name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_NETWORK_PARTNER_NAME: 'AD_EXCHANGE_NETWORK_PARTNER_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange operating system version.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_OS_VERSION_NAME: 'AD_EXCHANGE_OS_VERSION_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange pricing rule id.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_PRICING_RULE_ID: 'AD_EXCHANGE_PRICING_RULE_ID',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange tags.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_TAG_CODE: 'AD_EXCHANGE_TAG_CODE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange targeting type.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_TARGETING_TYPE: 'AD_EXCHANGE_TARGETING_TYPE',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange third party buyer account
   * name.
   * <b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_THIRD_PARTY_BUYER_ACCOUNT_NAME:
    'AD_EXCHANGE_THIRD_PARTY_BUYER_ACCOUNT_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange third-party network tag
   * currency.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_THIRD_PARTY_NETWORK_TAG_CURRENCY:
    'AD_EXCHANGE_THIRD_PARTY_NETWORK_TAG_CURRENCY',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange network tag name.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_THIRD_PARTY_NETWORK_TAG_NAME:
    'AD_EXCHANGE_THIRD_PARTY_NETWORK_TAG_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange channel id.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_URL_CHANNEL_ID: 'AD_EXCHANGE_URL_CHANNEL_ID',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange user bandwidth.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_USER_BANDWIDTH_NAME: 'AD_EXCHANGE_USER_BANDWIDTH_NAME',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange video ad duration.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_VIDEO_AD_DURATION: 'AD_EXCHANGE_VIDEO_AD_DURATION',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange raw video ad duration.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_VIDEO_AD_DURATION_RAW: 'AD_EXCHANGE_VIDEO_AD_DURATION_RAW',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange video ad type.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_VIDEO_AD_FORMAT: 'AD_EXCHANGE_VIDEO_AD_FORMAT',

  /**
   * Breaks down linked Ad Exchange web property data by Ad Exchange week.
   * <p><b>This experimental dimension only works with Ad Exchange web properties linked with an
   * active status.</b>
   */
  AD_EXCHANGE_WEEK: 'AD_EXCHANGE_WEEK',

  /**
   * Campaign date segment of Nielsen Digital Ad Ratings reporting.
   */
  NIELSEN_SEGMENT: 'NIELSEN_SEGMENT',

  /**
   * Breaks down reporting data by gender and age group, i.e., MALE_18_TO_20, MALE_21_TO_24,
   * MALE_25_TO_29, MALE_30_TO_35, MALE_35_TO_39, MALE_40_TO_44, MALE_45_TO_49, MALE_50_TO_54,
   * MALE_55_TO_64, MALE_65_PLUS, FEMALE_18_TO_20, FEMALE_21_TO_24, FEMALE_25_TO_29,
   * FEMALE_30_TO_34, FEMALE_35_TO_39, FEMALE_40_TO_44, FEMALE_45_TO_49, FEMALE_50_TO_54,
   * FEMALE_55_TO_64, FEMALE_65_PLUS, and OTHER.
   */
  NIELSEN_DEMOGRAPHICS: 'NIELSEN_DEMOGRAPHICS',

  /**
   * Data restatement date of Nielsen Digital Ad Ratings data.
   */
  NIELSEN_RESTATEMENT_DATE: 'NIELSEN_RESTATEMENT_DATE'
};

export default Dimension;
