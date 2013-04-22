{
    "name" : "pianalytics",
    "replicationClass" : "SimpleStrategy",
    "replicationFactor" : 1,
    "definitions" : [
        {
            "name": "audit",
            "fields": [
                {"name": "object_type", "type": "varchar"},
                {"name": "object_id", "type": "varchar"},
                {"name": "change_source_type", "type": "bigint"},
                {"name": "change_source_id", "type": "int"},
                {"name": "type", "type": "int"},
                {"name": "user", "type": "varchar"},
                {"name": "changes", "type": "varchar"}
            ],
            "indexes" : [
                {
                    "key": "object_id:object_type",
                    "shardingStrategy": {"type": "ShardingStrategyNone"}
                },
                {
                    "key": "object_id:object_type:type",
                    "shardingStrategy": {"type": "ShardingStrategyNone"}
                },
                {
                    "key": "change_source_id:change_source_type",
                    "shardingStrategy": {"type": "ShardingStrategyNone"}
                }
            ]
        },
        {
            "name": "testtype",
            "fields": [
                {"name": "foreignid", "type": "bigint"},
                {"name": "type", "type": "int"},
                {"name": "instance", "type": "bigint"},
                {"name": "filtered", "type": "int"},
                {"name": "data1", "type": "varchar"},
                {"name": "data2", "type": "varchar"},
                {"name": "data3", "type": "varchar"}
            ],
            "indexes" : [
                {
                    "key": "foreignid",
                    "shardingStrategy": {"type": "ShardingStrategyNone"}
                },
                {
                    "key": "type:instance",
                    "shardingStrategy": {"type": "ShardingStrategyMonthly"}
                },
                {
                    "key": "foreignid:type:instance",
                    "shardingStrategy": {"type": "ShardingStrategyMonthly"}
                }
            ]
        }
    ]
}


