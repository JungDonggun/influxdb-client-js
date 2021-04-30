<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [PostQueryRequest](./influxdb-client-apis.postqueryrequest.md)

## PostQueryRequest interface

<b>Signature:</b>

```typescript
export interface PostQueryRequest 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [body](./influxdb-client-apis.postqueryrequest.body.md) | [Query](./influxdb-client-apis.query.md) \| [InfluxQLQuery](./influxdb-client-apis.influxqlquery.md) | Flux query or specification to execute |
|  [org?](./influxdb-client-apis.postqueryrequest.org.md) | string | <i>(Optional)</i> Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both <code>orgID</code> and <code>org</code> are specified, <code>org</code> takes precedence. |
|  [orgID?](./influxdb-client-apis.postqueryrequest.orgid.md) | string | <i>(Optional)</i> Specifies the ID of the organization executing the query. If both <code>orgID</code> and <code>org</code> are specified, <code>org</code> takes precedence. |
