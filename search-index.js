var searchIndex = JSON.parse('{\
"dynomite":{"doc":"Dynomite is the set of high-level interfaces making …","t":[8,6,8,8,8,8,14,0,10,10,10,10,10,10,10,10,0,10,4,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,12,13,13,13,4,8,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11],"n":["Attribute","Attributes","DynamoDbExt","FromAttributes","IntoAttributes","Item","attr_map","error","from_attr","from_attrs","into_attr","into_attrs","key","list_backups_pages","list_tables_pages","query_pages","retry","scan_pages","AttributeError","InvalidFormat","InvalidType","MissingField","borrow","borrow_mut","eq","fmt","fmt","from","into","ne","to_string","try_from","try_into","type_id","vzip","name","Exponential","Limit","Pause","Policy","Retries","RetryingDynamoDb","batch_execute_statement","batch_get_item","batch_write_item","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","create_backup","create_global_table","create_table","default","delete_backup","delete_item","delete_table","describe_backup","describe_continuous_backups","describe_contributor_insights","describe_endpoints","describe_export","describe_global_table","describe_global_table_settings","describe_kinesis_streaming_destination","describe_limits","describe_table","describe_table_replica_auto_scaling","describe_time_to_live","disable_kinesis_streaming_destination","enable_kinesis_streaming_destination","eq","execute_statement","execute_transaction","export_table_to_point_in_time","fmt","from","from","get_item","into","into","list_backups","list_contributor_insights","list_exports","list_global_tables","list_tables","list_tags_of_resource","ne","new","put_item","query","restore_table_from_backup","restore_table_to_point_in_time","scan","tag_resource","to_owned","to_owned","transact_get_items","transact_write_items","try_from","try_from","try_into","try_into","type_id","type_id","untag_resource","update_continuous_backups","update_contributor_insights","update_global_table","update_global_table_settings","update_item","update_table","update_table_replica_auto_scaling","update_time_to_live","vzip","vzip","with_retries","with_retries"],"q":["dynomite","","","","","","","","","","","","","","","","","","dynomite::error","","","","","","","","","","","","","","","","","dynomite::error::AttributeError","dynomite::retry","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A type capable of being converted into an or from and AWS …","Type alias for map of named attribute values","Extension methods for DynamoDb client types","A type capable of being produced from a set of string …","A type capable of being serialized into a set of string …","A type which can be converted to and from a set of String …","Creates a <code>HashMap<String, AttributeValue></code> from a list of …","Dynomite error types","Returns a fallible conversion from an <code>AttributeValue</code>","Returns an instance of of a type resolved at runtime from …","Returns a conversion into an <code>AttributeValue</code>","Converts <code>self</code> into <code>Attributes</code> by accepting a <code>sink</code> …","Returns the set of attributes which make up this item’s …","An auto-paginating <code>Stream</code> oriented version of <code>list_backups</code>","An auto-paginating <code>Stream</code> oriented version of <code>list_tables</code>","An auto-paginating <code>Stream</code> oriented version of <code>query</code>","Retry functionality","An auto-paginating <code>Stream</code> oriented version of <code>scan</code>","Errors that may result of attribute value conversions","Will be returned if an AttributeValue is present, and is …","Will be returned if provided AttributeValue is not of the …","Will be returned if provided attributes does not included …","","","","","","","","","","","","","","Name of the field that is missing","Limited number of times to retry with an exponential …","Limited number of times to retry","Limited number of times to retry with fixed pause between …","Pre-configured retry policies for fallible operations","An interface for adapting a <code>DynamoDb</code> impl to a …","A type which implements <code>DynamoDb</code> and retries all …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Return a new instance with a configured retry policy","","","","","","","","","","","","","","","","","","","","","","","","","","","","Consumes a <code>DynamoDb</code> impl and produces a <code>DynamoDb</code> which …",""],"i":[0,0,0,0,0,0,0,0,1,2,1,3,4,5,5,5,0,5,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,8,8,8,0,0,0,9,9,9,8,9,8,9,8,9,8,9,9,9,9,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,9,9,9,8,8,9,9,8,9,9,9,9,9,9,9,8,9,9,9,9,9,9,9,8,9,9,9,8,9,8,9,8,9,9,9,9,9,9,9,9,9,9,8,9,10,9],"f":[null,null,null,null,null,null,null,null,[[["attributevalue",3]],[["result",4],["attributeerror",4]]],[[["attributes",6]],[["result",4],["attributeerror",4]]],[[],["attributevalue",3]],[[["attributes",6]]],[[],["attributes",6]],[[["listbackupsinput",3]],[["pin",3],["box",3]]],[[["listtablesinput",3]],[["pin",3],["box",3]]],[[["queryinput",3]],[["pin",3],["box",3]]],null,[[["scaninput",3]],[["box",3],["pin",3]]],null,null,null,null,[[]],[[]],[[["attributeerror",4]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["attributeerror",4]],["bool",15]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],null,null,null,null,null,null,null,[[["batchexecutestatementinput",3]],[["pin",3],["box",3]]],[[["batchgetiteminput",3]],[["pin",3],["box",3]]],[[["batchwriteiteminput",3]],[["pin",3],["box",3]]],[[]],[[]],[[]],[[]],[[],["policy",4]],[[],["retryingdynamodb",3]],[[]],[[]],[[["createbackupinput",3]],[["pin",3],["box",3]]],[[["createglobaltableinput",3]],[["box",3],["pin",3]]],[[["createtableinput",3]],[["box",3],["pin",3]]],[[]],[[["deletebackupinput",3]],[["box",3],["pin",3]]],[[["deleteiteminput",3]],[["box",3],["pin",3]]],[[["deletetableinput",3]],[["box",3],["pin",3]]],[[["describebackupinput",3]],[["pin",3],["box",3]]],[[["describecontinuousbackupsinput",3]],[["box",3],["pin",3]]],[[["describecontributorinsightsinput",3]],[["box",3],["pin",3]]],[[],[["pin",3],["box",3]]],[[["describeexportinput",3]],[["pin",3],["box",3]]],[[["describeglobaltableinput",3]],[["pin",3],["box",3]]],[[["describeglobaltablesettingsinput",3]],[["pin",3],["box",3]]],[[["describekinesisstreamingdestinationinput",3]],[["pin",3],["box",3]]],[[],[["pin",3],["box",3]]],[[["describetableinput",3]],[["pin",3],["box",3]]],[[["describetablereplicaautoscalinginput",3]],[["pin",3],["box",3]]],[[["describetimetoliveinput",3]],[["box",3],["pin",3]]],[[["kinesisstreamingdestinationinput",3]],[["pin",3],["box",3]]],[[["kinesisstreamingdestinationinput",3]],[["pin",3],["box",3]]],[[["policy",4]],["bool",15]],[[["executestatementinput",3]],[["pin",3],["box",3]]],[[["executetransactioninput",3]],[["box",3],["pin",3]]],[[["exporttabletopointintimeinput",3]],[["box",3],["pin",3]]],[[["formatter",3]],["result",6]],[[]],[[]],[[["getiteminput",3]],[["box",3],["pin",3]]],[[]],[[]],[[["listbackupsinput",3]],[["pin",3],["box",3]]],[[["listcontributorinsightsinput",3]],[["box",3],["pin",3]]],[[["listexportsinput",3]],[["pin",3],["box",3]]],[[["listglobaltablesinput",3]],[["pin",3],["box",3]]],[[["listtablesinput",3]],[["box",3],["pin",3]]],[[["listtagsofresourceinput",3]],[["pin",3],["box",3]]],[[["policy",4]],["bool",15]],[[["policy",4]]],[[["putiteminput",3]],[["box",3],["pin",3]]],[[["queryinput",3]],[["box",3],["pin",3]]],[[["restoretablefrombackupinput",3]],[["pin",3],["box",3]]],[[["restoretabletopointintimeinput",3]],[["pin",3],["box",3]]],[[["scaninput",3]],[["pin",3],["box",3]]],[[["tagresourceinput",3]],[["pin",3],["box",3]]],[[]],[[]],[[["transactgetitemsinput",3]],[["pin",3],["box",3]]],[[["transactwriteitemsinput",3]],[["pin",3],["box",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[["untagresourceinput",3]],[["pin",3],["box",3]]],[[["updatecontinuousbackupsinput",3]],[["pin",3],["box",3]]],[[["updatecontributorinsightsinput",3]],[["box",3],["pin",3]]],[[["updateglobaltableinput",3]],[["pin",3],["box",3]]],[[["updateglobaltablesettingsinput",3]],[["pin",3],["box",3]]],[[["updateiteminput",3]],[["pin",3],["box",3]]],[[["updatetableinput",3]],[["box",3],["pin",3]]],[[["updatetablereplicaautoscalinginput",3]],[["pin",3],["box",3]]],[[["updatetimetoliveinput",3]],[["pin",3],["box",3]]],[[]],[[]],[[["policy",4]],["retryingdynamodb",3]],[[["policy",4]],["retryingdynamodb",3]]],"p":[[8,"Attribute"],[8,"FromAttributes"],[8,"IntoAttributes"],[8,"Item"],[8,"DynamoDbExt"],[4,"AttributeError"],[13,"MissingField"],[4,"Policy"],[3,"RetryingDynamoDb"],[8,"Retries"]]},\
"dynomite_derive":{"doc":"Provides procedural macros for deriving dynomite types …","t":[24,24,24],"n":["Attribute","Attributes","Item"],"q":["dynomite_derive","",""],"d":["Derives <code>dynomite::Attribute</code> for enum types","similar in spirit to <code>#[derive(Item)]</code> except these are …","Derives <code>dynomite::Item</code> type for struts with named fields"],"i":[0,0,0],"f":[null,null,null],"p":[]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};