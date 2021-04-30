<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [ClientOptions](./influxdb-client.clientoptions.md)

## ClientOptions interface

Options used by [InfluxDB](./influxdb-client.influxdb.md) .

<b>Signature:</b>

```typescript
export interface ClientOptions extends ConnectionOptions 
```
<b>Extends:</b> [ConnectionOptions](./influxdb-client.connectionoptions.md)

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [transport?](./influxdb-client.clientoptions.transport.md) | Transport | <i>(Optional)</i> specifies custom transport |
|  [writeOptions?](./influxdb-client.clientoptions.writeoptions.md) | Partial&lt;[WriteOptions](./influxdb-client.writeoptions.md)<!-- -->&gt; | <i>(Optional)</i> supplies and overrides default writing options |
