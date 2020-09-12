var searchIndex = JSON.parse('{\
"dynomite":{"doc":"Dynomite is the set of high-level interfaces making…","i":[[0,"error","dynomite","Dynomite error types",null,null],[4,"AttributeError","dynomite::error","Errors that may result of attribute value conversions",null,null],[13,"InvalidFormat","","Will be returned if an AttributeValue is present, and is…",0,null],[13,"InvalidType","","Will be returned if provided AttributeValue is not of the…",0,null],[13,"MissingField","","Will be returned if provided attributes does not included…",0,null],[12,"name","dynomite::error::AttributeError","Name of the field that is missing",1,null],[0,"retry","dynomite","Retry functionality",null,null],[3,"RetryingDynamoDb","dynomite::retry","A type which implements `DynamoDb` and retries all…",null,null],[4,"Policy","","Pre-configured retry policies for fallible operations",null,null],[13,"Limit","","Limited number of times to retry",2,null],[13,"Pause","","Limited number of times to retry with fixed pause between…",2,null],[13,"Exponential","","Limited number of times to retry with an exponential pause…",2,null],[8,"Retries","","An interface for adapting a `DynamoDb` impl to a…",null,null],[10,"with_retries","","Consumes a `DynamoDb` impl and produces a `DynamoDb` which…",3,[[["policy",4]],["retryingdynamodb",3]]],[11,"new","","Return a new instance with a configured retry policy",4,[[["policy",4]]]],[6,"Attributes","dynomite","Type alias for map of named attribute values",null,null],[8,"DynamoDbExt","","Extension methods for DynamoDb client types",null,null],[10,"list_backups_pages","","An auto-paginating `Stream` oriented version of…",5,[[["listbackupsinput",3]],[["box",3],["pin",3]]]],[10,"list_tables_pages","","An auto-paginating `Stream` oriented version of…",5,[[["listtablesinput",3]],[["pin",3],["box",3]]]],[10,"query_pages","","An auto-paginating `Stream` oriented version of `query`",5,[[["queryinput",3]],[["box",3],["pin",3]]]],[10,"scan_pages","","An auto-paginating `Stream` oriented version of `scan`",5,[[["scaninput",3]],[["pin",3],["box",3]]]],[8,"Item","","A type which can be converted to and from a set of String…",null,null],[10,"key","","Returns the set of attributes which make up this item\'s…",6,[[],["attributes",6]]],[8,"Attribute","","A type capable of being converted into an or from and AWS…",null,null],[10,"into_attr","","Returns a conversion into an `AttributeValue`",7,[[],["attributevalue",3]]],[10,"from_attr","","Returns a fallible conversion from an `AttributeValue`",7,[[["attributevalue",3]],[["result",4],["attributeerror",4]]]],[8,"FromAttributes","","A type capable of being produced from a set of string keys…",null,null],[11,"from_attrs","","Shortcut for `FromAttributes::from_mut_attrs(&mut attrs)`.…",8,[[["attributes",6]],[["result",4],["attributeerror",4]]]],[10,"from_mut_attrs","","Returns an instance of of a type resolved at runtime from…",8,[[["attributes",6]],[["result",4],["attributeerror",4]]]],[8,"IntoAttributes","","You should implement this trait instead of `From<T> for…",null,null],[11,"into_attrs","","A shortcut for `IntoAttributes::into_mut_attrs()` that…",9,[[],["attributes",6]]],[10,"into_mut_attrs","","Converts `self` into `Attributes` by accepting a `sink`…",9,[[["attributes",6]]]],[14,"attr_map","","Creates a `HashMap<String, AttributeValue>` from a list of…",null,null],[11,"from","dynomite::error","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"with_retries","dynomite::retry","",4,[[["policy",4]],["retryingdynamodb",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"into","","",2,[[],["retrypolicy",3]]],[11,"clone","","",2,[[],["policy",4]]],[11,"clone","","",4,[[],["retryingdynamodb",3]]],[11,"default","","",2,[[]]],[11,"eq","dynomite::error","",0,[[["attributeerror",4]]]],[11,"ne","","",0,[[["attributeerror",4]]]],[11,"eq","dynomite::retry","",2,[[["policy",4]]]],[11,"ne","","",2,[[["policy",4]]]],[11,"fmt","dynomite::error","",0,[[["formatter",3]],["result",6]]],[11,"fmt","dynomite::retry","",2,[[["formatter",3]],["result",6]]],[11,"fmt","dynomite::error","",0,[[["formatter",3]],["result",6]]],[11,"batch_get_item","dynomite::retry","",4,[[["batchgetiteminput",3]],[["pin",3],["box",3]]]],[11,"batch_write_item","","",4,[[["batchwriteiteminput",3]],[["box",3],["pin",3]]]],[11,"create_backup","","",4,[[["createbackupinput",3]],[["pin",3],["box",3]]]],[11,"create_global_table","","",4,[[["createglobaltableinput",3]],[["pin",3],["box",3]]]],[11,"create_table","","",4,[[["createtableinput",3]],[["box",3],["pin",3]]]],[11,"delete_backup","","",4,[[["deletebackupinput",3]],[["pin",3],["box",3]]]],[11,"delete_item","","",4,[[["deleteiteminput",3]],[["pin",3],["box",3]]]],[11,"delete_table","","",4,[[["deletetableinput",3]],[["pin",3],["box",3]]]],[11,"describe_backup","","",4,[[["describebackupinput",3]],[["pin",3],["box",3]]]],[11,"describe_continuous_backups","","",4,[[["describecontinuousbackupsinput",3]],[["box",3],["pin",3]]]],[11,"describe_contributor_insights","","",4,[[["describecontributorinsightsinput",3]],[["pin",3],["box",3]]]],[11,"describe_global_table","","",4,[[["describeglobaltableinput",3]],[["pin",3],["box",3]]]],[11,"describe_global_table_settings","","",4,[[["describeglobaltablesettingsinput",3]],[["box",3],["pin",3]]]],[11,"describe_limits","","",4,[[],[["box",3],["pin",3]]]],[11,"describe_table","","",4,[[["describetableinput",3]],[["box",3],["pin",3]]]],[11,"describe_table_replica_auto_scaling","","",4,[[["describetablereplicaautoscalinginput",3]],[["box",3],["pin",3]]]],[11,"describe_time_to_live","","",4,[[["describetimetoliveinput",3]],[["pin",3],["box",3]]]],[11,"get_item","","",4,[[["getiteminput",3]],[["pin",3],["box",3]]]],[11,"list_backups","","",4,[[["listbackupsinput",3]],[["box",3],["pin",3]]]],[11,"list_contributor_insights","","",4,[[["listcontributorinsightsinput",3]],[["pin",3],["box",3]]]],[11,"list_global_tables","","",4,[[["listglobaltablesinput",3]],[["pin",3],["box",3]]]],[11,"list_tables","","",4,[[["listtablesinput",3]],[["pin",3],["box",3]]]],[11,"list_tags_of_resource","","",4,[[["listtagsofresourceinput",3]],[["box",3],["pin",3]]]],[11,"put_item","","",4,[[["putiteminput",3]],[["pin",3],["box",3]]]],[11,"query","","",4,[[["queryinput",3]],[["pin",3],["box",3]]]],[11,"restore_table_from_backup","","",4,[[["restoretablefrombackupinput",3]],[["box",3],["pin",3]]]],[11,"restore_table_to_point_in_time","","",4,[[["restoretabletopointintimeinput",3]],[["box",3],["pin",3]]]],[11,"scan","","",4,[[["scaninput",3]],[["box",3],["pin",3]]]],[11,"tag_resource","","",4,[[["tagresourceinput",3]],[["pin",3],["box",3]]]],[11,"untag_resource","","",4,[[["untagresourceinput",3]],[["pin",3],["box",3]]]],[11,"update_continuous_backups","","",4,[[["updatecontinuousbackupsinput",3]],[["pin",3],["box",3]]]],[11,"update_contributor_insights","","",4,[[["updatecontributorinsightsinput",3]],[["pin",3],["box",3]]]],[11,"update_global_table","","",4,[[["updateglobaltableinput",3]],[["box",3],["pin",3]]]],[11,"update_global_table_settings","","",4,[[["updateglobaltablesettingsinput",3]],[["box",3],["pin",3]]]],[11,"update_item","","",4,[[["updateiteminput",3]],[["box",3],["pin",3]]]],[11,"update_table","","",4,[[["updatetableinput",3]],[["pin",3],["box",3]]]],[11,"update_table_replica_auto_scaling","","",4,[[["updatetablereplicaautoscalinginput",3]],[["box",3],["pin",3]]]],[11,"update_time_to_live","","",4,[[["updatetimetoliveinput",3]],[["box",3],["pin",3]]]],[11,"describe_endpoints","","",4,[[],[["pin",3],["box",3]]]],[11,"transact_get_items","","",4,[[["transactgetitemsinput",3]],[["pin",3],["box",3]]]],[11,"transact_write_items","","",4,[[["transactwriteitemsinput",3]],[["pin",3],["box",3]]]]],"p":[[4,"AttributeError"],[13,"MissingField"],[4,"Policy"],[8,"Retries"],[3,"RetryingDynamoDb"],[8,"DynamoDbExt"],[8,"Item"],[8,"Attribute"],[8,"FromAttributes"],[8,"IntoAttributes"]]},\
"dynomite_derive":{"doc":"Provides procedural macros for deriving dynomite types for…","i":[[24,"Item","dynomite_derive","Derives `dynomite::Item` type for struts with named fields",null,null],[24,"Attributes","","similar in spirit to `#[derive(Item)]` except these are…",null,null],[24,"Attribute","","Derives `dynomite::Attribute` for enum types",null,null]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);