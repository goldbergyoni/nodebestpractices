var ca = require('../client_action').factory;
var namespace = require('../client_action').namespaceFactory;
var api = module.exports = {};

api._namespaces = ['cluster', 'indices'];

/**
 * Perform a [bulk](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-bulk.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.consistency - Explicit write consistency setting for the operation
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the index after performing the operation
 * @param {<<api-param-type-string,`String`>>} [params.replication=sync] - Explicitely set the replication type
 * @param {<<api-param-type-string,`String`>>} params.type - Default document type for items which don't provide one
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>} params.index - Default index for items which don't provide one
 */
api.bulk = ca({
  params: {
    consistency: {
      type: 'enum',
      options: [
        'one',
        'quorum',
        'all'
      ]
    },
    refresh: {
      type: 'boolean'
    },
    replication: {
      type: 'enum',
      'default': 'sync',
      options: [
        'sync',
        'async'
      ]
    },
    type: {
      type: 'string'
    },
    timeout: {
      type: 'time'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_bulk',
      req: {
        index: {
          type: 'string'
        },
        type: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_bulk',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_bulk'
    }
  ],
  needBody: true,
  bulkBody: true,
  method: 'POST'
});

/**
 * Perform a [clearScroll](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-request-scroll.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.scrollId - A comma-separated list of scroll IDs to clear
 */
api.clearScroll = ca({
  url: {
    fmt: '/_search/scroll/<%=scrollId%>',
    req: {
      scrollId: {
        type: 'list'
      }
    }
  },
  paramAsBody: 'scrollId',
  method: 'DELETE'
});

api.cluster = namespace();

/**
 * Perform a [cluster.getSettings](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-update-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 */
api.cluster.prototype.getSettings = ca({
  url: {
    fmt: '/_cluster/settings'
  }
});

/**
 * Perform a [cluster.health](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-health.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.level=cluster] - Specify the level of detail for returned information
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-number,`Number`>>} params.waitForActiveShards - Wait until the specified number of shards is active
 * @param {<<api-param-type-string,`String`>>} params.waitForNodes - Wait until the specified number of nodes is available
 * @param {<<api-param-type-number,`Number`>>} params.waitForRelocatingShards - Wait until the specified number of relocating shards is finished
 * @param {<<api-param-type-string,`String`>>} params.waitForStatus - Wait until cluster is in a specific state
 * @param {<<api-param-type-string,`String`>>} params.index - Limit the information returned to a specific index
 */
api.cluster.prototype.health = ca({
  params: {
    level: {
      type: 'enum',
      'default': 'cluster',
      options: [
        'cluster',
        'indices',
        'shards'
      ]
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    },
    waitForActiveShards: {
      type: 'number',
      name: 'wait_for_active_shards'
    },
    waitForNodes: {
      type: 'string',
      name: 'wait_for_nodes'
    },
    waitForRelocatingShards: {
      type: 'number',
      name: 'wait_for_relocating_shards'
    },
    waitForStatus: {
      type: 'enum',
      'default': null,
      options: [
        'green',
        'yellow',
        'red'
      ],
      name: 'wait_for_status'
    }
  },
  urls: [
    {
      fmt: '/_cluster/health/<%=index%>',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_cluster/health'
    }
  ]
});

/**
 * Perform a [cluster.nodeHotThreads](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-nodes-hot-threads.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.interval - The interval for the second sampling of threads
 * @param {<<api-param-type-number,`Number`>>} params.snapshots - Number of samples of thread stacktrace (default: 10)
 * @param {<<api-param-type-number,`Number`>>} params.threads - Specify the number of threads to provide information for (default: 3)
 * @param {<<api-param-type-string,`String`>>} params.type - The type to sample (default: cpu)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 */
api.cluster.prototype.nodeHotThreads = ca({
  params: {
    interval: {
      type: 'time'
    },
    snapshots: {
      type: 'number'
    },
    threads: {
      type: 'number'
    },
    type: {
      type: 'enum',
      options: [
        'cpu',
        'wait',
        'block'
      ]
    }
  },
  urls: [
    {
      fmt: '/_nodes/<%=nodeId%>/hotthreads',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_nodes/hotthreads'
    }
  ]
});

/**
 * Perform a [cluster.nodeInfo](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-nodes-info.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.all - Return all available information
 * @param {<<api-param-type-boolean,`Boolean`>>} params.clear - Reset the default settings
 * @param {<<api-param-type-boolean,`Boolean`>>} params.http - Return information about HTTP
 * @param {<<api-param-type-boolean,`Boolean`>>} params.jvm - Return information about the JVM
 * @param {<<api-param-type-boolean,`Boolean`>>} params.network - Return information about network
 * @param {<<api-param-type-boolean,`Boolean`>>} params.os - Return information about the operating system
 * @param {<<api-param-type-boolean,`Boolean`>>} params.plugin - Return information about plugins
 * @param {<<api-param-type-boolean,`Boolean`>>} params.process - Return information about the Elasticsearch process
 * @param {<<api-param-type-boolean,`Boolean`>>} params.settings - Return information about node settings
 * @param {<<api-param-type-boolean,`Boolean`>>} params.threadPool - Return information about the thread pool
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.transport - Return information about transport
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 */
api.cluster.prototype.nodeInfo = ca({
  params: {
    all: {
      type: 'boolean'
    },
    clear: {
      type: 'boolean'
    },
    http: {
      type: 'boolean'
    },
    jvm: {
      type: 'boolean'
    },
    network: {
      type: 'boolean'
    },
    os: {
      type: 'boolean'
    },
    plugin: {
      type: 'boolean'
    },
    process: {
      type: 'boolean'
    },
    settings: {
      type: 'boolean'
    },
    threadPool: {
      type: 'boolean',
      name: 'thread_pool'
    },
    timeout: {
      type: 'time'
    },
    transport: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/_nodes/<%=nodeId%>',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_nodes'
    }
  ]
});

/**
 * Perform a [cluster.nodeShutdown](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-nodes-shutdown.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.delay - Set the delay for the operation (default: 1s)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.exit - Exit the JVM as well (default: true)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to perform the operation on; use `_local` to perform the operation on the node you're connected to, leave empty to perform the operation on all nodes
 */
api.cluster.prototype.nodeShutdown = ca({
  params: {
    delay: {
      type: 'time'
    },
    exit: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/_cluster/nodes/<%=nodeId%>/_shutdown',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_shutdown'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [cluster.nodeStats](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-nodes-stats.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.all - Return all available information
 * @param {<<api-param-type-boolean,`Boolean`>>} params.clear - Reset the default level of detail
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return detailed information for, when returning the `indices` metric family (supports wildcards)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fs - Return information about the filesystem
 * @param {<<api-param-type-boolean,`Boolean`>>} params.http - Return information about HTTP
 * @param {<<api-param-type-boolean,`Boolean`>>} params.indices - Return information about indices
 * @param {<<api-param-type-boolean,`Boolean`>>} params.jvm - Return information about the JVM
 * @param {<<api-param-type-boolean,`Boolean`>>} params.network - Return information about network
 * @param {<<api-param-type-boolean,`Boolean`>>} params.os - Return information about the operating system
 * @param {<<api-param-type-boolean,`Boolean`>>} params.process - Return information about the Elasticsearch process
 * @param {<<api-param-type-boolean,`Boolean`>>} params.threadPool - Return information about the thread pool
 * @param {<<api-param-type-boolean,`Boolean`>>} params.transport - Return information about transport
 * @param {<<api-param-type-string,`String`>>} params.metricFamily - Limit the information returned to a certain metric family
 * @param {<<api-param-type-string,`String`>>} params.metric - Limit the information returned for `indices` family to a specific metric
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 */
api.cluster.prototype.nodeStats = ca({
  params: {
    all: {
      type: 'boolean'
    },
    clear: {
      type: 'boolean'
    },
    fields: {
      type: 'list'
    },
    fs: {
      type: 'boolean'
    },
    http: {
      type: 'boolean'
    },
    indices: {
      type: 'boolean'
    },
    jvm: {
      type: 'boolean'
    },
    network: {
      type: 'boolean'
    },
    os: {
      type: 'boolean'
    },
    process: {
      type: 'boolean'
    },
    threadPool: {
      type: 'boolean',
      name: 'thread_pool'
    },
    transport: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/_nodes/<%=nodeId%>/stats',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_nodes/stats'
    }
  ]
});

/**
 * Perform a [cluster.pendingTasks](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-pending.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 */
api.cluster.prototype.pendingTasks = ca({
  params: {
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/_cluster/pending_tasks'
  }
});

/**
 * Perform a [cluster.putSettings](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-update-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 */
api.cluster.prototype.putSettings = ca({
  url: {
    fmt: '/_cluster/settings'
  },
  method: 'PUT'
});

/**
 * Perform a [cluster.reroute](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-reroute.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.dryRun - Simulate the operation only and return the resulting state
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterMetadata - Don't return cluster state metadata (default: false)
 */
api.cluster.prototype.reroute = ca({
  params: {
    dryRun: {
      type: 'boolean',
      name: 'dry_run'
    },
    filterMetadata: {
      type: 'boolean',
      name: 'filter_metadata'
    }
  },
  url: {
    fmt: '/_cluster/reroute'
  },
  method: 'POST'
});

/**
 * Perform a [cluster.state](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/cluster-state.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterBlocks - Do not return information about blocks
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterIndexTemplates - Do not return information about index templates
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.filterIndices - Limit returned metadata information to specific indices
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterMetadata - Do not return information about indices metadata
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterNodes - Do not return information about nodes
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterRoutingTable - Do not return information about shard allocation (`routing_table` and `routing_nodes`)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 */
api.cluster.prototype.state = ca({
  params: {
    filterBlocks: {
      type: 'boolean',
      name: 'filter_blocks'
    },
    filterIndexTemplates: {
      type: 'boolean',
      name: 'filter_index_templates'
    },
    filterIndices: {
      type: 'list',
      name: 'filter_indices'
    },
    filterMetadata: {
      type: 'boolean',
      name: 'filter_metadata'
    },
    filterNodes: {
      type: 'boolean',
      name: 'filter_nodes'
    },
    filterRoutingTable: {
      type: 'boolean',
      name: 'filter_routing_table'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/_cluster/state'
  }
});

/**
 * Perform a [count](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-count.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-number,`Number`>>} params.minScore - Include only documents with a specific `_score` value in the result
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.source - The URL-encoded query definition (instead of using the request body)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of indices to restrict the results
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of types to restrict the results
 */
api.count = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    minScore: {
      type: 'number',
      name: 'min_score'
    },
    preference: {
      type: 'string'
    },
    routing: {
      type: 'string'
    },
    source: {
      type: 'string'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_count',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_count',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_count'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [delete](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-delete.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.consistency - Specific write consistency setting for the operation
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of parent document
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the index after performing the operation
 * @param {<<api-param-type-string,`String`>>} [params.replication=sync] - Specific replication type
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.id - The document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api['delete'] = ca({
  params: {
    consistency: {
      type: 'enum',
      options: [
        'one',
        'quorum',
        'all'
      ]
    },
    parent: {
      type: 'string'
    },
    refresh: {
      type: 'boolean'
    },
    replication: {
      type: 'enum',
      'default': 'sync',
      options: [
        'sync',
        'async'
      ]
    },
    routing: {
      type: 'string'
    },
    timeout: {
      type: 'time'
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external'
      ],
      name: 'version_type'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [deleteByQuery](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-delete-by-query.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-string,`String`>>} params.consistency - Specific write consistency setting for the operation
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>} [params.replication=sync] - Specific replication type
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.source - The URL-encoded query definition (instead of using the request body)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of indices to restrict the operation; use `_all` to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of types to restrict the operation
 */
api.deleteByQuery = ca({
  params: {
    analyzer: {
      type: 'string'
    },
    consistency: {
      type: 'enum',
      options: [
        'one',
        'quorum',
        'all'
      ]
    },
    defaultOperator: {
      type: 'enum',
      'default': 'OR',
      options: [
        'AND',
        'OR'
      ],
      name: 'default_operator'
    },
    df: {
      type: 'string'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    replication: {
      type: 'enum',
      'default': 'sync',
      options: [
        'sync',
        'async'
      ]
    },
    q: {
      type: 'string'
    },
    routing: {
      type: 'string'
    },
    source: {
      type: 'string'
    },
    timeout: {
      type: 'time'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_query',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_query',
      req: {
        index: {
          type: 'list'
        }
      }
    }
  ],
  method: 'DELETE'
});

/**
 * Perform a [exists](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.parent - The ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specify whether to perform the operation in realtime or search mode
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the shard containing the document before performing the operation
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.id - The document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document (use `_all` to fetch the first document matching the ID across all types)
 */
api.exists = ca({
  params: {
    parent: {
      type: 'string'
    },
    preference: {
      type: 'string'
    },
    realtime: {
      type: 'boolean'
    },
    refresh: {
      type: 'boolean'
    },
    routing: {
      type: 'string'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  },
  method: 'HEAD'
});

/**
 * Perform a [explain](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-explain.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcards and prefix queries in the query string query should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer for the query string query
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The default field for query string query (default: _all)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return in the response
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lowercaseExpandedTerms - Specify whether query terms should be lowercased
 * @param {<<api-param-type-string,`String`>>} params.parent - The ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.source - The URL-encoded query definition (instead of using the request body)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-string,`String`>>} params.id - The document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.explain = ca({
  params: {
    analyzeWildcard: {
      type: 'boolean',
      name: 'analyze_wildcard'
    },
    analyzer: {
      type: 'string'
    },
    defaultOperator: {
      type: 'enum',
      'default': 'OR',
      options: [
        'AND',
        'OR'
      ],
      name: 'default_operator'
    },
    df: {
      type: 'string'
    },
    fields: {
      type: 'list'
    },
    lenient: {
      type: 'boolean'
    },
    lowercaseExpandedTerms: {
      type: 'boolean',
      name: 'lowercase_expanded_terms'
    },
    parent: {
      type: 'string'
    },
    preference: {
      type: 'string'
    },
    q: {
      type: 'string'
    },
    routing: {
      type: 'string'
    },
    source: {
      type: 'string'
    },
    _source: {
      type: 'list'
    },
    _sourceExclude: {
      type: 'list',
      name: '_source_exclude'
    },
    _sourceInclude: {
      type: 'list',
      name: '_source_include'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>/_explain',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [get](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return in the response
 * @param {<<api-param-type-string,`String`>>} params.parent - The ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specify whether to perform the operation in realtime or search mode
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the shard containing the document before performing the operation
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-string,`String`>>} params.id - The document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document (use `_all` to fetch the first document matching the ID across all types)
 */
api.get = ca({
  params: {
    fields: {
      type: 'list'
    },
    parent: {
      type: 'string'
    },
    preference: {
      type: 'string'
    },
    realtime: {
      type: 'boolean'
    },
    refresh: {
      type: 'boolean'
    },
    routing: {
      type: 'string'
    },
    _source: {
      type: 'list'
    },
    _sourceExclude: {
      type: 'list',
      name: '_source_exclude'
    },
    _sourceInclude: {
      type: 'list',
      name: '_source_include'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  }
});

/**
 * Perform a [getSource](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.parent - The ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specify whether to perform the operation in realtime or search mode
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the shard containing the document before performing the operation
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.id - The document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document; use `_all` to fetch the first document matching the ID across all types
 */
api.getSource = ca({
  params: {
    parent: {
      type: 'string'
    },
    preference: {
      type: 'string'
    },
    realtime: {
      type: 'boolean'
    },
    refresh: {
      type: 'boolean'
    },
    routing: {
      type: 'string'
    },
    _source: {
      type: 'list'
    },
    _sourceExclude: {
      type: 'list',
      name: '_source_exclude'
    },
    _sourceInclude: {
      type: 'list',
      name: '_source_include'
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external'
      ],
      name: 'version_type'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>/_source',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  }
});

/**
 * Perform a [index](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-index_.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.consistency - Explicit write consistency setting for the operation
 * @param {<<api-param-type-string,`String`>>} [params.opType=index] - Explicit operation type
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.percolate - Percolator queries to execute while indexing the document
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the index after performing the operation
 * @param {<<api-param-type-string,`String`>>} [params.replication=sync] - Specific replication type
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timestamp - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.ttl - Expiration time for the document
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.id - Document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.index = ca({
  params: {
    consistency: {
      type: 'enum',
      options: [
        'one',
        'quorum',
        'all'
      ]
    },
    opType: {
      type: 'enum',
      'default': 'index',
      options: [
        'index',
        'create'
      ],
      name: 'op_type'
    },
    parent: {
      type: 'string'
    },
    percolate: {
      type: 'string'
    },
    refresh: {
      type: 'boolean'
    },
    replication: {
      type: 'enum',
      'default': 'sync',
      options: [
        'sync',
        'async'
      ]
    },
    routing: {
      type: 'string'
    },
    timeout: {
      type: 'time'
    },
    timestamp: {
      type: 'time'
    },
    ttl: {
      type: 'time'
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external'
      ],
      name: 'version_type'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/<%=id%>',
      req: {
        index: {
          type: 'string'
        },
        type: {
          type: 'string'
        },
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/<%=type%>',
      req: {
        index: {
          type: 'string'
        },
        type: {
          type: 'string'
        }
      }
    }
  ],
  needBody: true,
  method: 'POST'
});

api.indices = namespace();

/**
 * Perform a [indices.analyze](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-analyze.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The name of the analyzer to use
 * @param {<<api-param-type-string,`String`>>} params.field - Use the analyzer configured for this field (instead of passing the analyzer name)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.filters - A comma-separated list of filters to use for the analysis
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index to scope the operation
 * @param {<<api-param-type-boolean,`Boolean`>>} params.preferLocal - With `true`, specify that a local shard should be used if available, with `false`, use a random shard (default: true)
 * @param {<<api-param-type-string,`String`>>} params.text - The text on which the analysis should be performed (when request body is not used)
 * @param {<<api-param-type-string,`String`>>} params.tokenizer - The name of the tokenizer to use for the analysis
 * @param {<<api-param-type-string,`String`>>} [params.format=detailed] - Format of the output
 */
api.indices.prototype.analyze = ca({
  params: {
    analyzer: {
      type: 'string'
    },
    field: {
      type: 'string'
    },
    filters: {
      type: 'list'
    },
    index: {
      type: 'string'
    },
    preferLocal: {
      type: 'boolean',
      name: 'prefer_local'
    },
    text: {
      type: 'string'
    },
    tokenizer: {
      type: 'string'
    },
    format: {
      type: 'enum',
      'default': 'detailed',
      options: [
        'detailed',
        'text'
      ]
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_analyze',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_analyze'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.clearCache](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-clearcache.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fieldData - Clear field data
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fielddata - Clear field data
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to clear when using the `field_data` parameter (default: all)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filter - Clear filter caches
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterCache - Clear filter caches
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterKeys - A comma-separated list of keys to clear when using the `filter_cache` parameter (default: all)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.id - Clear ID caches for parent/child
 * @param {<<api-param-type-boolean,`Boolean`>>} params.idCache - Clear ID caches for parent/child
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index name to limit the operation
 * @param {<<api-param-type-boolean,`Boolean`>>} params.recycler - Clear the recycler cache
 */
api.indices.prototype.clearCache = ca({
  params: {
    fieldData: {
      type: 'boolean',
      name: 'field_data'
    },
    fielddata: {
      type: 'boolean'
    },
    fields: {
      type: 'list'
    },
    filter: {
      type: 'boolean'
    },
    filterCache: {
      type: 'boolean',
      name: 'filter_cache'
    },
    filterKeys: {
      type: 'boolean',
      name: 'filter_keys'
    },
    id: {
      type: 'boolean'
    },
    idCache: {
      type: 'boolean',
      name: 'id_cache'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    index: {
      type: 'list'
    },
    recycler: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_cache/clear',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cache/clear'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.close](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-open-close.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 */
api.indices.prototype.close = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/<%=index%>/_close',
    req: {
      index: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [indices.create](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-create-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 */
api.indices.prototype.create = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/<%=index%>',
    req: {
      index: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [indices.delete](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-delete-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of indices to delete; use `_all` or empty string to delete all indices
 */
api.indices.prototype['delete'] = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/'
    }
  ],
  method: 'DELETE'
});

/**
 * Perform a [indices.deleteAlias](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index with an alias
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the alias to be deleted
 */
api.indices.prototype.deleteAlias = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/<%=index%>/_alias/<%=name%>',
    req: {
      index: {
        type: 'string'
      },
      name: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [indices.deleteMapping](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-delete-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` for all indices
 * @param {<<api-param-type-string,`String`>>} params.type - The name of the document type to delete
 */
api.indices.prototype.deleteMapping = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>',
    req: {
      index: {
        type: 'list'
      },
      type: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [indices.deleteTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the template
 */
api.indices.prototype.deleteTemplate = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/_template/<%=name%>',
    req: {
      name: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [indices.deleteWarmer](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-warmers.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to register warmer for; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the warmer (supports wildcards); leave empty to delete all warmers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to register warmer for; use `_all` or empty string to perform the operation on all types
 */
api.indices.prototype.deleteWarmer = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_warmer/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        },
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_warmer/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_warmer',
      req: {
        index: {
          type: 'list'
        }
      }
    }
  ],
  method: 'DELETE'
});

/**
 * Perform a [indices.exists](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-get-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of indices to check
 */
api.indices.prototype.exists = ca({
  url: {
    fmt: '/<%=index%>',
    req: {
      index: {
        type: 'list'
      }
    }
  },
  method: 'HEAD'
});

/**
 * Perform a [indices.existsAlias](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to filter aliases
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - A comma-separated list of alias names to return
 */
api.indices.prototype.existsAlias = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_alias/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        name: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_alias/<%=name%>',
      req: {
        name: {
          type: 'list'
        }
      }
    }
  ],
  method: 'HEAD'
});

/**
 * Perform a [indices.existsType](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-types-exists.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` to check the types across all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to check
 */
api.indices.prototype.existsType = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>',
    req: {
      index: {
        type: 'list'
      },
      type: {
        type: 'list'
      }
    }
  },
  method: 'HEAD'
});

/**
 * Perform a [indices.flush](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-flush.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.force - Whether a flush should be forced even if it is not necessarily needed ie. if no changes will be committed to the index. This is useful if transaction log IDs should be incremented even if no uncommitted changes are present. (This setting can be considered as internal)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.full - If set to true a new index writer is created and settings that have been changed related to the index writer will be refreshed. Note: if a full flush is required for a setting to take effect this will be part of the settings update process and it not required to be executed by the user. (This setting can be considered as internal)
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the index after performing the operation
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string for all indices
 */
api.indices.prototype.flush = ca({
  params: {
    force: {
      type: 'boolean'
    },
    full: {
      type: 'boolean'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    refresh: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_flush',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_flush'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.getAlias](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to filter aliases
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - A comma-separated list of alias names to return
 */
api.indices.prototype.getAlias = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_alias/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        name: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_alias/<%=name%>',
      req: {
        name: {
          type: 'list'
        }
      }
    }
  ]
});

/**
 * Perform a [indices.getAliases](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to filter aliases
 */
api.indices.prototype.getAliases = ca({
  params: {
    timeout: {
      type: 'time'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_aliases',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_aliases'
    }
  ]
});

/**
 * Perform a [indices.getFieldMapping](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-get-field-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDefaults - Whether the default mapping values should be returned as well
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.field - A comma-separated list of fields
 */
api.indices.prototype.getFieldMapping = ca({
  params: {
    includeDefaults: {
      type: 'boolean',
      name: 'include_defaults'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_mapping/field/<%=field%>',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        },
        field: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_mapping/field/<%=field%>',
      req: {
        index: {
          type: 'list'
        },
        field: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_mapping/field/<%=field%>',
      req: {
        field: {
          type: 'list'
        }
      }
    }
  ]
});

/**
 * Perform a [indices.getMapping](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-get-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types
 */
api.indices.prototype.getMapping = ca({
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_mapping',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_mapping',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_mapping'
    }
  ]
});

/**
 * Perform a [indices.getSettings](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-get-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.getSettings = ca({
  urls: [
    {
      fmt: '/<%=index%>/_settings',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_settings'
    }
  ]
});

/**
 * Perform a [indices.getTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the template
 */
api.indices.prototype.getTemplate = ca({
  urls: [
    {
      fmt: '/_template/<%=name%>',
      req: {
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_template'
    }
  ]
});

/**
 * Perform a [indices.getWarmer](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-warmers.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to restrict the operation; use `_all` to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the warmer (supports wildcards); leave empty to get all warmers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to restrict the operation; leave empty to perform the operation on all types
 */
api.indices.prototype.getWarmer = ca({
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_warmer/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        },
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_warmer/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_warmer',
      req: {
        index: {
          type: 'list'
        }
      }
    }
  ]
});

/**
 * Perform a [indices.open](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-open-close.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 */
api.indices.prototype.open = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/<%=index%>/_open',
    req: {
      index: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [indices.optimize](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-optimize.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flush - Specify whether the index should be flushed after performing the operation (default: true)
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-number,`Number`>>} params.maxNumSegments - The number of segments the index should be merged into (default: dynamic)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.onlyExpungeDeletes - Specify whether the operation should only expunge deleted documents
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Specify whether the index should be refreshed after performing the operation (default: true)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForMerge - Specify whether the request should block until the merge process is finished (default: true)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.optimize = ca({
  params: {
    flush: {
      type: 'boolean'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    maxNumSegments: {
      type: 'number',
      name: 'max_num_segments'
    },
    onlyExpungeDeletes: {
      type: 'boolean',
      name: 'only_expunge_deletes'
    },
    operationThreading: {
      name: 'operation_threading'
    },
    refresh: {
      type: 'boolean'
    },
    waitForMerge: {
      type: 'boolean',
      name: 'wait_for_merge'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_optimize',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_optimize'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.putAlias](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index with an alias
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the alias to be created or updated
 */
api.indices.prototype.putAlias = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_alias/<%=name%>',
      req: {
        index: {
          type: 'string'
        },
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_alias/<%=name%>',
      req: {
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_alias',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_alias'
    }
  ],
  method: 'PUT'
});

/**
 * Perform a [indices.putMapping](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-put-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreConflicts - Specify whether to ignore conflicts while updating the mapping (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>} params.type - The name of the document type
 */
api.indices.prototype.putMapping = ca({
  params: {
    ignoreConflicts: {
      type: 'boolean',
      name: 'ignore_conflicts'
    },
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/_mapping',
    req: {
      index: {
        type: 'list'
      },
      type: {
        type: 'string'
      }
    }
  },
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [indices.putSettings](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-update-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.putSettings = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_settings',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_settings'
    }
  ],
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [indices.putTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-number,`Number`>>} params.order - The order for this template when merging multiple matching ones (higher numbers are merged later, overriding the lower numbers)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the template
 */
api.indices.prototype.putTemplate = ca({
  params: {
    order: {
      type: 'number'
    },
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/_template/<%=name%>',
    req: {
      name: {
        type: 'string'
      }
    }
  },
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [indices.putWarmer](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-warmers.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to register the warmer for; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the warmer
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to register the warmer for; leave empty to perform the operation on all types
 */
api.indices.prototype.putWarmer = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_warmer/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        },
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_warmer/<%=name%>',
      req: {
        index: {
          type: 'list'
        },
        name: {
          type: 'string'
        }
      }
    }
  ],
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [indices.refresh](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-refresh.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.refresh = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    operationThreading: {
      name: 'operation_threading'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_refresh',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_refresh'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.segments](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-segments.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.segments = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    operationThreading: {
      name: 'operation_threading'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_segments',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_segments'
    }
  ]
});

/**
 * Perform a [indices.snapshotIndex](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-gateway-snapshot.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string for all indices
 */
api.indices.prototype.snapshotIndex = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_gateway/snapshot',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_gateway/snapshot'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.stats](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-stats.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.all - Return all available information
 * @param {<<api-param-type-boolean,`Boolean`>>} params.clear - Reset the default level of detail
 * @param {<<api-param-type-boolean,`Boolean`>>} params.completion - Return information about completion suggester stats
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.completionFields - A comma-separated list of fields for `completion` metric (supports wildcards)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.docs - Return information about indexed and deleted documents
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fielddata - Return information about field data
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fielddataFields - A comma-separated list of fields for `fielddata` metric (supports wildcards)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return detailed information for, when returning the `search` statistics
 * @param {<<api-param-type-boolean,`Boolean`>>} params.filterCache - Return information about filter cache
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flush - Return information about flush operations
 * @param {<<api-param-type-boolean,`Boolean`>>} params.get - Return information about get operations
 * @param {<<api-param-type-boolean,`Boolean`>>} params.groups - A comma-separated list of search groups for `search` statistics
 * @param {<<api-param-type-boolean,`Boolean`>>} params.idCache - Return information about ID cache
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-boolean,`Boolean`>>} params.indexing - Return information about indexing operations
 * @param {<<api-param-type-boolean,`Boolean`>>} params.merge - Return information about merge operations
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Return information about refresh operations
 * @param {<<api-param-type-boolean,`Boolean`>>} params.search - Return information about search operations; use the `groups` parameter to include information for specific search groups
 * @param {<<api-param-type-boolean,`Boolean`>>} params.store - Return information about the size of the index
 * @param {<<api-param-type-boolean,`Boolean`>>} params.warmer - Return information about warmers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.indexingTypes - A comma-separated list of document types to include in the `indexing` statistics
 * @param {<<api-param-type-string,`String`>>} params.metricFamily - Limit the information returned to a specific metric
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.searchGroups - A comma-separated list of search groups to include in the `search` statistics
 */
api.indices.prototype.stats = ca({
  params: {
    all: {
      type: 'boolean'
    },
    clear: {
      type: 'boolean'
    },
    completion: {
      type: 'boolean'
    },
    completionFields: {
      type: 'list',
      name: 'completion_fields'
    },
    docs: {
      type: 'boolean'
    },
    fielddata: {
      type: 'boolean'
    },
    fielddataFields: {
      type: 'list',
      name: 'fielddata_fields'
    },
    fields: {
      type: 'list'
    },
    filterCache: {
      type: 'boolean',
      name: 'filter_cache'
    },
    flush: {
      type: 'boolean'
    },
    get: {
      type: 'boolean'
    },
    groups: {
      type: 'boolean'
    },
    idCache: {
      type: 'boolean',
      name: 'id_cache'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    indexing: {
      type: 'boolean'
    },
    merge: {
      type: 'boolean'
    },
    refresh: {
      type: 'boolean'
    },
    search: {
      type: 'boolean'
    },
    store: {
      type: 'boolean'
    },
    warmer: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_stats',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_stats'
    }
  ]
});

/**
 * Perform a [indices.status](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-status.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-boolean,`Boolean`>>} params.recovery - Return information about shard recovery
 * @param {<<api-param-type-boolean,`Boolean`>>} params.snapshot - TODO: ?
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.status = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    operationThreading: {
      name: 'operation_threading'
    },
    recovery: {
      type: 'boolean'
    },
    snapshot: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_status',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_status'
    }
  ]
});

/**
 * Perform a [indices.updateAliases](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Request timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to filter aliases
 */
api.indices.prototype.updateAliases = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/_aliases'
  },
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [indices.validateQuery](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-validate.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - Return detailed information about the error
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-string,`String`>>} params.source - The URL-encoded query definition (instead of using the request body)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to restrict the operation; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to restrict the operation; leave empty to perform the operation on all types
 */
api.indices.prototype.validateQuery = ca({
  params: {
    explain: {
      type: 'boolean'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    operationThreading: {
      name: 'operation_threading'
    },
    source: {
      type: 'string'
    },
    q: {
      type: 'string'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_validate/query',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_validate/query',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_validate/query'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [info](http://www.elasticsearch.org/guide/) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 */
api.info = ca({
  url: {
    fmt: '/'
  }
});

/**
 * Perform a [mget](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-multi-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return in the response
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specify whether to perform the operation in realtime or search mode
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the shard containing the document before performing the operation
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.mget = ca({
  params: {
    fields: {
      type: 'list'
    },
    preference: {
      type: 'string'
    },
    realtime: {
      type: 'boolean'
    },
    refresh: {
      type: 'boolean'
    },
    _source: {
      type: 'list'
    },
    _sourceExclude: {
      type: 'list',
      name: '_source_exclude'
    },
    _sourceInclude: {
      type: 'list',
      name: '_source_include'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_mget',
      req: {
        index: {
          type: 'string'
        },
        type: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=index%>/_mget',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_mget'
    }
  ],
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [mlt](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-more-like-this.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-number,`Number`>>} params.boostTerms - The boost factor
 * @param {<<api-param-type-number,`Number`>>} params.maxDocFreq - The word occurrence frequency as count: words with higher occurrence in the corpus will be ignored
 * @param {<<api-param-type-number,`Number`>>} params.maxQueryTerms - The maximum query terms to be included in the generated query
 * @param {<<api-param-type-number,`Number`>>} params.maxWordLen - The minimum length of the word: longer words will be ignored
 * @param {<<api-param-type-number,`Number`>>} params.minDocFreq - The word occurrence frequency as count: words with lower occurrence in the corpus will be ignored
 * @param {<<api-param-type-number,`Number`>>} params.minTermFreq - The term frequency as percent: terms with lower occurence in the source document will be ignored
 * @param {<<api-param-type-number,`Number`>>} params.minWordLen - The minimum length of the word: shorter words will be ignored
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.mltFields - Specific fields to perform the query against
 * @param {<<api-param-type-number,`Number`>>} params.percentTermsToMatch - How many terms have to match in order to consider the document a match (default: 0.3)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-number,`Number`>>} params.searchFrom - The offset from which to return results
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.searchIndices - A comma-separated list of indices to perform the query against (default: the index containing the document)
 * @param {<<api-param-type-string,`String`>>} params.searchQueryHint - The search query hint
 * @param {<<api-param-type-string,`String`>>} params.searchScroll - A scroll search request definition
 * @param {<<api-param-type-number,`Number`>>} params.searchSize - The number of documents to return (default: 10)
 * @param {<<api-param-type-string,`String`>>} params.searchSource - A specific search request definition (instead of using the request body)
 * @param {<<api-param-type-string,`String`>>} params.searchType - Specific search type (eg. `dfs_then_fetch`, `count`, etc)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.searchTypes - A comma-separated list of types to perform the query against (default: the same type as the document)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.stopWords - A list of stop words to be ignored
 * @param {<<api-param-type-string,`String`>>} params.id - The document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document (use `_all` to fetch the first document matching the ID across all types)
 */
api.mlt = ca({
  params: {
    boostTerms: {
      type: 'number',
      name: 'boost_terms'
    },
    maxDocFreq: {
      type: 'number',
      name: 'max_doc_freq'
    },
    maxQueryTerms: {
      type: 'number',
      name: 'max_query_terms'
    },
    maxWordLen: {
      type: 'number',
      name: 'max_word_len'
    },
    minDocFreq: {
      type: 'number',
      name: 'min_doc_freq'
    },
    minTermFreq: {
      type: 'number',
      name: 'min_term_freq'
    },
    minWordLen: {
      type: 'number',
      name: 'min_word_len'
    },
    mltFields: {
      type: 'list',
      name: 'mlt_fields'
    },
    percentTermsToMatch: {
      type: 'number',
      name: 'percent_terms_to_match'
    },
    routing: {
      type: 'string'
    },
    searchFrom: {
      type: 'number',
      name: 'search_from'
    },
    searchIndices: {
      type: 'list',
      name: 'search_indices'
    },
    searchQueryHint: {
      type: 'string',
      name: 'search_query_hint'
    },
    searchScroll: {
      type: 'string',
      name: 'search_scroll'
    },
    searchSize: {
      type: 'number',
      name: 'search_size'
    },
    searchSource: {
      type: 'string',
      name: 'search_source'
    },
    searchType: {
      type: 'string',
      name: 'search_type'
    },
    searchTypes: {
      type: 'list',
      name: 'search_types'
    },
    stopWords: {
      type: 'list',
      name: 'stop_words'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>/_mlt',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [msearch](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-multi-search.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to use as default
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to use as default
 */
api.msearch = ca({
  params: {
    searchType: {
      type: 'enum',
      options: [
        'query_then_fetch',
        'query_and_fetch',
        'dfs_query_then_fetch',
        'dfs_query_and_fetch',
        'count',
        'scan'
      ],
      name: 'search_type'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_msearch',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_msearch',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_msearch'
    }
  ],
  needBody: true,
  bulkBody: true,
  method: 'POST'
});

/**
 * Perform a [percolate](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-percolate.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.preferLocal - With `true`, specify that a local shard should be used if available, with `false`, use a random shard (default: true)
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index with a registered percolator query
 * @param {<<api-param-type-string,`String`>>} params.type - The document type
 */
api.percolate = ca({
  params: {
    preferLocal: {
      type: 'boolean',
      name: 'prefer_local'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/_percolate',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      }
    }
  },
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [ping](http://www.elasticsearch.org/guide/) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 */
api.ping = ca({
  url: {
    fmt: '/'
  },
  requestTimeout: 3000,
  method: 'HEAD'
});

/**
 * Perform a [scroll](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-request-scroll.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.scroll - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {<<api-param-type-string,`String`>>} params.scrollId - The scroll ID
 */
api.scroll = ca({
  params: {
    scroll: {
      type: 'time'
    },
    scrollId: {
      type: 'string',
      name: 'scroll_id'
    }
  },
  urls: [
    {
      fmt: '/_search/scroll/<%=scrollId%>',
      req: {
        scrollId: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_search/scroll'
    }
  ],
  paramAsBody: 'scrollId',
  method: 'POST'
});

/**
 * Perform a [search](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-search.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - Specify whether to return detailed information about score computation as part of a hit
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return as part of a hit
 * @param {<<api-param-type-number,`Number`>>} params.from - Starting offset (default: 0)
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.indicesBoost - Comma-separated list of index boosts
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lowercaseExpandedTerms - Specify whether query terms should be lowercased
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.scroll - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-number,`Number`>>} params.size - Number of hits to return (default: 10)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.sort - A comma-separated list of <field>:<direction> pairs
 * @param {<<api-param-type-string,`String`>>} params.source - The URL-encoded request definition using the Query DSL (instead of using request body)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.stats - Specific 'tag' of the request for logging and statistical purposes
 * @param {<<api-param-type-string,`String`>>} params.suggestField - Specify which field to use for suggestions
 * @param {<<api-param-type-string,`String`>>} [params.suggestMode=missing] - Specify suggest mode
 * @param {<<api-param-type-number,`Number`>>} params.suggestSize - How many suggestions to return in response
 * @param {<<api-param-type-string,`String`>>} params.suggestText - The source text for which the suggestions should be returned
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.version - Specify whether to return document version as part of a hit
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to search; leave empty to perform the operation on all types
 */
api.search = ca({
  params: {
    analyzer: {
      type: 'string'
    },
    analyzeWildcard: {
      type: 'boolean',
      name: 'analyze_wildcard'
    },
    defaultOperator: {
      type: 'enum',
      'default': 'OR',
      options: [
        'AND',
        'OR'
      ],
      name: 'default_operator'
    },
    df: {
      type: 'string'
    },
    explain: {
      type: 'boolean'
    },
    fields: {
      type: 'list'
    },
    from: {
      type: 'number'
    },
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    indicesBoost: {
      type: 'list',
      name: 'indices_boost'
    },
    lenient: {
      type: 'boolean'
    },
    lowercaseExpandedTerms: {
      type: 'boolean',
      name: 'lowercase_expanded_terms'
    },
    preference: {
      type: 'string'
    },
    q: {
      type: 'string'
    },
    routing: {
      type: 'list'
    },
    scroll: {
      type: 'time'
    },
    searchType: {
      type: 'enum',
      options: [
        'query_then_fetch',
        'query_and_fetch',
        'dfs_query_then_fetch',
        'dfs_query_and_fetch',
        'count',
        'scan'
      ],
      name: 'search_type'
    },
    size: {
      type: 'number'
    },
    sort: {
      type: 'list'
    },
    source: {
      type: 'string'
    },
    _source: {
      type: 'list'
    },
    _sourceExclude: {
      type: 'list',
      name: '_source_exclude'
    },
    _sourceInclude: {
      type: 'list',
      name: '_source_include'
    },
    stats: {
      type: 'list'
    },
    suggestField: {
      type: 'string',
      name: 'suggest_field'
    },
    suggestMode: {
      type: 'enum',
      'default': 'missing',
      options: [
        'missing',
        'popular',
        'always'
      ],
      name: 'suggest_mode'
    },
    suggestSize: {
      type: 'number',
      name: 'suggest_size'
    },
    suggestText: {
      type: 'string',
      name: 'suggest_text'
    },
    timeout: {
      type: 'time'
    },
    version: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_search',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_search',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_search'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [suggest](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/search-search.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.ignoreIndices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.source - The URL-encoded request definition (instead of using request body)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to restrict the operation; use `_all` or empty string to perform the operation on all indices
 */
api.suggest = ca({
  params: {
    ignoreIndices: {
      type: 'enum',
      'default': 'none',
      options: [
        'none',
        'missing'
      ],
      name: 'ignore_indices'
    },
    preference: {
      type: 'string'
    },
    routing: {
      type: 'string'
    },
    source: {
      type: 'string'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_suggest',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_suggest'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [update](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-update.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.consistency - Explicit write consistency setting for the operation
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return in the response
 * @param {<<api-param-type-string,`String`>>} params.lang - The script language (default: mvel)
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.percolate - Perform percolation during the operation; use specific registered query name, attribute, or wildcard
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the index after performing the operation
 * @param {<<api-param-type-string,`String`>>} [params.replication=sync] - Specific replication type
 * @param {<<api-param-type-number,`Number`>>} params.retryOnConflict - Specify how many times should the operation be retried when a conflict occurs (default: 0)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.script - The URL-encoded script definition (instead of using request body)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timestamp - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.ttl - Expiration time for the document
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.id - Document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.update = ca({
  params: {
    consistency: {
      type: 'enum',
      options: [
        'one',
        'quorum',
        'all'
      ]
    },
    fields: {
      type: 'list'
    },
    lang: {
      type: 'string'
    },
    parent: {
      type: 'string'
    },
    percolate: {
      type: 'string'
    },
    refresh: {
      type: 'boolean'
    },
    replication: {
      type: 'enum',
      'default': 'sync',
      options: [
        'sync',
        'async'
      ]
    },
    retryOnConflict: {
      type: 'number',
      name: 'retry_on_conflict'
    },
    routing: {
      type: 'string'
    },
    script: {
      type: 'string'
    },
    timeout: {
      type: 'time'
    },
    timestamp: {
      type: 'time'
    },
    ttl: {
      type: 'time'
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external'
      ],
      name: 'version_type'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>/_update',
    req: {
      index: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      id: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [create](https://www.elastic.co/guide/en/elasticsearch/reference/0.90/docs-index_.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.consistency - Explicit write consistency setting for the operation
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.percolate - Percolator queries to execute while indexing the document
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the index after performing the operation
 * @param {<<api-param-type-string,`String`>>} [params.replication=sync] - Specific replication type
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timestamp - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.ttl - Expiration time for the document
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.id - Document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.create = ca.proxy(api.index, {
  transform: function (params) {
    params.op_type = 'create';
  }
});
