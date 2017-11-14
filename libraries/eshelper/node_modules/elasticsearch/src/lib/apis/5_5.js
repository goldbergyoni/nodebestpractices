var ca = require('../client_action').makeFactoryWithModifier(function (spec) {
  return require('../utils').merge(spec, {
    params: {
      filterPath: {
        type: 'list',
        name: 'filter_path'
      }
    }
  });
});
var namespace = require('../client_action').namespaceFactory;
var api = module.exports = {};

api._namespaces = ['cat', 'cluster', 'indices', 'ingest', 'nodes', 'remote', 'snapshot', 'tasks'];

/**
 * Perform a [bulk](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-bulk.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the bulk operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-string,`String`>>} params.refresh - If `true` then refresh the effected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` (the default) then do nothing with refreshes.
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>} params.type - Default document type for items which don't provide one
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - Default comma-separated list of fields to return in the response for updates, can be overridden on each sub-request
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or default list of fields to return, can be overridden on each sub-request
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - Default list of fields to exclude from the returned _source field, can be overridden on each sub-request
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - Default list of fields to extract and return from the _source field, can be overridden on each sub-request
 * @param {<<api-param-type-string,`String`>>} params.pipeline - The pipeline id to preprocess incoming documents with
 * @param {<<api-param-type-string,`String`>>} params.index - Default index for items which don't provide one
 */
api.bulk = ca({
  params: {
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    refresh: {
      type: 'enum',
      options: [
        'true',
        'false',
        'wait_for',
        ''
      ]
    },
    routing: {
      type: 'string'
    },
    timeout: {
      type: 'time'
    },
    type: {
      type: 'string'
    },
    fields: {
      type: 'list'
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
    pipeline: {
      type: 'string'
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

api.cat = namespace();

/**
 * Perform a [cat.aliases](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - A comma-separated list of alias names to return
 */
api.cat.prototype.aliases = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/aliases/<%=name%>',
      req: {
        name: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/aliases'
    }
  ]
});

/**
 * Perform a [cat.allocation](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-allocation.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>} params.bytes - The unit in which to display byte values
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information
 */
api.cat.prototype.allocation = ca({
  params: {
    format: {
      type: 'string'
    },
    bytes: {
      type: 'enum',
      options: [
        'b',
        'k',
        'kb',
        'm',
        'mb',
        'g',
        'gb',
        't',
        'tb',
        'p',
        'pb'
      ]
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/allocation/<%=nodeId%>',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/allocation'
    }
  ]
});

/**
 * Perform a [cat.count](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-count.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to limit the returned information
 */
api.cat.prototype.count = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/count/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/count'
    }
  ]
});

/**
 * Perform a [cat.fielddata](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-fielddata.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>} params.bytes - The unit in which to display byte values
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return the fielddata size
 */
api.cat.prototype.fielddata = ca({
  params: {
    format: {
      type: 'string'
    },
    bytes: {
      type: 'enum',
      options: [
        'b',
        'k',
        'kb',
        'm',
        'mb',
        'g',
        'gb',
        't',
        'tb',
        'p',
        'pb'
      ]
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    },
    fields: {
      type: 'list'
    }
  },
  urls: [
    {
      fmt: '/_cat/fielddata/<%=fields%>',
      req: {
        fields: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/fielddata'
    }
  ]
});

/**
 * Perform a [cat.health](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-health.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.ts=true] - Set to false to disable timestamping
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.health = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    ts: {
      type: 'boolean',
      'default': true
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/health'
  }
});

/**
 * Perform a [cat.help](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 */
api.cat.prototype.help = ca({
  params: {
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    }
  },
  url: {
    fmt: '/_cat'
  }
});

/**
 * Perform a [cat.indices](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-indices.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>} params.bytes - The unit in which to display byte values
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-string,`String`>>} params.health - A health status ("green", "yellow", or "red" to filter only indices matching the specified health status
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-boolean,`Boolean`>>} params.pri - Set to true to return stats only for primary shards
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to limit the returned information
 */
api.cat.prototype.indices = ca({
  params: {
    format: {
      type: 'string'
    },
    bytes: {
      type: 'enum',
      options: [
        'b',
        'k',
        'm',
        'g'
      ]
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    health: {
      type: 'enum',
      'default': null,
      options: [
        'green',
        'yellow',
        'red'
      ]
    },
    help: {
      type: 'boolean',
      'default': false
    },
    pri: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/indices/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/indices'
    }
  ]
});

/**
 * Perform a [cat.master](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-master.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.master = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/master'
  }
});

/**
 * Perform a [cat.nodeattrs](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-nodeattrs.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.nodeattrs = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/nodeattrs'
  }
});

/**
 * Perform a [cat.nodes](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-nodes.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fullId - Return the full node ID instead of the shortened version (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.nodes = ca({
  params: {
    format: {
      type: 'string'
    },
    fullId: {
      type: 'boolean',
      name: 'full_id'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/nodes'
  }
});

/**
 * Perform a [cat.pendingTasks](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-pending-tasks.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.pendingTasks = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/pending_tasks'
  }
});

/**
 * Perform a [cat.plugins](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-plugins.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.plugins = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/plugins'
  }
});

/**
 * Perform a [cat.recovery](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-recovery.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>} params.bytes - The unit in which to display byte values
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to limit the returned information
 */
api.cat.prototype.recovery = ca({
  params: {
    format: {
      type: 'string'
    },
    bytes: {
      type: 'enum',
      options: [
        'b',
        'k',
        'kb',
        'm',
        'mb',
        'g',
        'gb',
        't',
        'tb',
        'p',
        'pb'
      ]
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/recovery/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/recovery'
    }
  ]
});

/**
 * Perform a [cat.repositories](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-repositories.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.repositories = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean',
      'default': false
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/repositories'
  }
});

/**
 * Perform a [cat.segments](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-segments.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to limit the returned information
 */
api.cat.prototype.segments = ca({
  params: {
    format: {
      type: 'string'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/segments/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/segments'
    }
  ]
});

/**
 * Perform a [cat.shards](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-shards.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to limit the returned information
 */
api.cat.prototype.shards = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/shards/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/shards'
    }
  ]
});

/**
 * Perform a [cat.snapshots](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Set to true to ignore unavailable snapshots
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.repository - Name of repository from which to fetch the snapshot information
 */
api.cat.prototype.snapshots = ca({
  params: {
    format: {
      type: 'string'
    },
    ignoreUnavailable: {
      type: 'boolean',
      'default': false,
      name: 'ignore_unavailable'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/snapshots/<%=repository%>',
      req: {
        repository: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/snapshots'
    }
  ]
});

/**
 * Perform a [cat.tasks](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/tasks.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.actions - A comma-separated list of actions that should be returned. Leave empty to return all.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.detailed - Return detailed task information (default: false)
 * @param {<<api-param-type-string,`String`>>} params.parentNode - Return tasks with specified parent node.
 * @param {<<api-param-type-number,`Number`>>} params.parentTask - Return tasks with specified parent task id. Set to -1 to return all.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 */
api.cat.prototype.tasks = ca({
  params: {
    format: {
      type: 'string'
    },
    nodeId: {
      type: 'list',
      name: 'node_id'
    },
    actions: {
      type: 'list'
    },
    detailed: {
      type: 'boolean'
    },
    parentNode: {
      type: 'string',
      name: 'parent_node'
    },
    parentTask: {
      type: 'number',
      name: 'parent_task'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  url: {
    fmt: '/_cat/tasks'
  }
});

/**
 * Perform a [cat.templates](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>} params.name - A pattern that returned template names must match
 */
api.cat.prototype.templates = ca({
  params: {
    format: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/templates/<%=name%>',
      req: {
        name: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_cat/templates'
    }
  ]
});

/**
 * Perform a [cat.threadPool](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cat-thread-pool.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.format - a short version of the Accept header, e.g. json, yaml
 * @param {<<api-param-type-string,`String`>>} params.size - The multiplier in which to display values
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.h - Comma-separated list of column names to display
 * @param {<<api-param-type-boolean,`Boolean`>>} params.help - Return help information
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.s - Comma-separated list of column names or column aliases to sort by
 * @param {<<api-param-type-boolean,`Boolean`>>} params.v - Verbose mode. Display column headers
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.threadPoolPatterns - A comma-separated list of regular-expressions to filter the thread pools in the output
 */
api.cat.prototype.threadPool = ca({
  params: {
    format: {
      type: 'string'
    },
    size: {
      type: 'enum',
      options: [
        '',
        'k',
        'm',
        'g',
        't',
        'p'
      ]
    },
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    h: {
      type: 'list'
    },
    help: {
      type: 'boolean',
      'default': false
    },
    s: {
      type: 'list'
    },
    v: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_cat/thread_pool/<%=threadPoolPatterns%>',
      req: {
        threadPoolPatterns: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cat/thread_pool'
    }
  ]
});

/**
 * Perform a [clearScroll](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-request-scroll.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.scrollId - A comma-separated list of scroll IDs to clear
 */
api.clearScroll = ca({
  urls: [
    {
      fmt: '/_search/scroll/<%=scrollId%>',
      req: {
        scrollId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_search/scroll'
    }
  ],
  paramAsBody: {
    param: 'scrollId',
    body: 'scroll_id'
  },
  method: 'DELETE'
});

api.cluster = namespace();

/**
 * Perform a [cluster.allocationExplain](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-allocation-explain.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeYesDecisions - Return 'YES' decisions in explanation (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDiskInfo - Return information about disk usage and shard sizes (default: false)
 */
api.cluster.prototype.allocationExplain = ca({
  params: {
    includeYesDecisions: {
      type: 'boolean',
      name: 'include_yes_decisions'
    },
    includeDiskInfo: {
      type: 'boolean',
      name: 'include_disk_info'
    }
  },
  url: {
    fmt: '/_cluster/allocation/explain'
  },
  method: 'POST'
});

/**
 * Perform a [cluster.getSettings](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-update-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDefaults - Whether to return all default clusters setting.
 */
api.cluster.prototype.getSettings = ca({
  params: {
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    },
    includeDefaults: {
      type: 'boolean',
      'default': false,
      name: 'include_defaults'
    }
  },
  url: {
    fmt: '/_cluster/settings'
  }
});

/**
 * Perform a [cluster.health](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-health.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} [params.level=cluster] - Specify the level of detail for returned information
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Wait until the specified number of shards is active
 * @param {<<api-param-type-string,`String`>>} params.waitForNodes - Wait until the specified number of nodes is available
 * @param {<<api-param-type-string,`String`>>} params.waitForEvents - Wait until all currently queued events with the given priority are processed
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForNoRelocatingShards - Whether to wait until there are no relocating shards in the cluster
 * @param {<<api-param-type-string,`String`>>} params.waitForStatus - Wait until cluster is in a specific state
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - Limit the information returned to a specific index
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
      type: 'string',
      name: 'wait_for_active_shards'
    },
    waitForNodes: {
      type: 'string',
      name: 'wait_for_nodes'
    },
    waitForEvents: {
      type: 'enum',
      options: [
        'immediate',
        'urgent',
        'high',
        'normal',
        'low',
        'languid'
      ],
      name: 'wait_for_events'
    },
    waitForNoRelocatingShards: {
      type: 'boolean',
      name: 'wait_for_no_relocating_shards'
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
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cluster/health'
    }
  ]
});

/**
 * Perform a [cluster.pendingTasks](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-pending.html) request
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
 * Perform a [cluster.putSettings](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-update-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 */
api.cluster.prototype.putSettings = ca({
  params: {
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    }
  },
  url: {
    fmt: '/_cluster/settings'
  },
  method: 'PUT'
});

/**
 * Perform a [cluster.reroute](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-reroute.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.dryRun - Simulate the operation only and return the resulting state
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - Return an explanation of why the commands can or cannot be executed
 * @param {<<api-param-type-boolean,`Boolean`>>} params.retryFailed - Retries allocation of shards that are blocked due to too many subsequent allocation failures
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.metric - Limit the information returned to the specified metrics. Defaults to all but metadata
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 */
api.cluster.prototype.reroute = ca({
  params: {
    dryRun: {
      type: 'boolean',
      name: 'dry_run'
    },
    explain: {
      type: 'boolean'
    },
    retryFailed: {
      type: 'boolean',
      name: 'retry_failed'
    },
    metric: {
      type: 'list',
      options: [
        '_all',
        'blocks',
        'metadata',
        'nodes',
        'routing_table',
        'master_node',
        'version'
      ]
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    }
  },
  url: {
    fmt: '/_cluster/reroute'
  },
  method: 'POST'
});

/**
 * Perform a [cluster.state](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-state.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.metric - Limit the information returned to the specified metrics
 */
api.cluster.prototype.state = ca({
  params: {
    local: {
      type: 'boolean'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/_cluster/state/<%=metric%>/<%=index%>',
      req: {
        metric: {
          type: 'list',
          options: [
            '_all',
            'blocks',
            'metadata',
            'nodes',
            'routing_table',
            'routing_nodes',
            'master_node',
            'version'
          ]
        },
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cluster/state/<%=metric%>',
      req: {
        metric: {
          type: 'list',
          options: [
            '_all',
            'blocks',
            'metadata',
            'nodes',
            'routing_table',
            'routing_nodes',
            'master_node',
            'version'
          ]
        }
      }
    },
    {
      fmt: '/_cluster/state'
    }
  ]
});

/**
 * Perform a [cluster.stats](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-stats.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 */
api.cluster.prototype.stats = ca({
  params: {
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    timeout: {
      type: 'time'
    }
  },
  urls: [
    {
      fmt: '/_cluster/stats/nodes/<%=nodeId%>',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_cluster/stats'
    }
  ]
});

/**
 * Perform a [count](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-count.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-number,`Number`>>} params.minScore - Include only documents with a specific `_score` value in the result
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of indices to restrict the results
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of types to restrict the results
 */
api.count = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
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
    q: {
      type: 'string'
    },
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
    lenient: {
      type: 'boolean'
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
 * Perform a [countPercolate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-percolate.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>} params.percolateIndex - The index to count percolate the document into. Defaults to index.
 * @param {<<api-param-type-string,`String`>>} params.percolateType - The type to count percolate document into. Defaults to type.
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.index - The index of the document being count percolated.
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document being count percolated.
 * @param {<<api-param-type-string,`String`>>} params.id - Substitute the document in the request body with a document that is known by the specified id. On top of the id, the index and type parameter will be used to retrieve the document from within the cluster.
 */
api.countPercolate = ca({
  params: {
    routing: {
      type: 'list'
    },
    preference: {
      type: 'string'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    percolateIndex: {
      type: 'string',
      name: 'percolate_index'
    },
    percolateType: {
      type: 'string',
      name: 'percolate_type'
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external',
        'external_gte',
        'force'
      ],
      name: 'version_type'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/<%=id%>/_percolate/count',
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
      fmt: '/<%=index%>/<%=type%>/_percolate/count',
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
  method: 'POST'
});

/**
 * Perform a [create](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-index_.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the index operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.refresh - If `true` then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` (the default) then do nothing with refreshes.
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timestamp - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.ttl - Expiration time for the document
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.pipeline - The pipeline id to preprocess incoming documents with
 * @param {<<api-param-type-string,`String`>>} params.id - Document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.create = ca({
  params: {
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    parent: {
      type: 'string'
    },
    refresh: {
      type: 'enum',
      options: [
        'true',
        'false',
        'wait_for',
        ''
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
        'external',
        'external_gte',
        'force'
      ],
      name: 'version_type'
    },
    pipeline: {
      type: 'string'
    }
  },
  url: {
    fmt: '/<%=index%>/<%=type%>/<%=id%>/_create',
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
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [delete](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-delete.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the delete operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of parent document
 * @param {<<api-param-type-string,`String`>>} params.refresh - If `true` then refresh the effected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` (the default) then do nothing with refreshes.
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
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    parent: {
      type: 'string'
    },
    refresh: {
      type: 'enum',
      options: [
        'true',
        'false',
        'wait_for',
        ''
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
        'external',
        'external_gte',
        'force'
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
 * Perform a [deleteByQuery](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-delete-by-query.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-number,`Number`>>} params.from - Starting offset (default: 0)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.conflicts=abort] - What to do when the delete-by-query hits version conflicts?
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.scroll - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.searchTimeout - Explicit timeout for each search request. Defaults to no timeout.
 * @param {<<api-param-type-number,`Number`>>} params.size - Number of hits to return (default: 10)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.sort - A comma-separated list of <field>:<direction> pairs
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-number,`Number`>>} params.terminateAfter - The maximum number of documents to collect for each shard, upon reaching which the query execution will terminate early.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.stats - Specific 'tag' of the request for logging and statistical purposes
 * @param {<<api-param-type-boolean,`Boolean`>>} params.version - Specify whether to return document version as part of a hit
 * @param {<<api-param-type-boolean,`Boolean`>>} params.requestCache - Specify if request cache should be used for this request or not, defaults to index level setting
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Should the effected indexes be refreshed?
 * @param {<<api-param-type-duration-string,`DurationString`>>} [params.timeout=1m] - Time each individual bulk request should wait for shards that are unavailable.
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the delete by query operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-number,`Number`>>} params.scrollSize - Size on the scroll request powering the update_by_query
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.waitForCompletion=true] - Should the request should block until the delete-by-query is complete.
 * @param {<<api-param-type-number,`Number`>>} params.requestsPerSecond - The throttle for this request in sub-requests per second. -1 means no throttle.
 * @param {<<api-param-type-number,`Number`>>} [params.slices=1] - The number of slices this task should be divided into. Defaults to 1 meaning the task isn't sliced into subtasks.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to search; leave empty to perform the operation on all types
 */
api.deleteByQuery = ca({
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
    from: {
      type: 'number'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    conflicts: {
      type: 'enum',
      'default': 'abort',
      options: [
        'abort',
        'proceed'
      ]
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    lenient: {
      type: 'boolean'
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
        'dfs_query_then_fetch'
      ],
      name: 'search_type'
    },
    searchTimeout: {
      type: 'time',
      name: 'search_timeout'
    },
    size: {
      type: 'number'
    },
    sort: {
      type: 'list'
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
    terminateAfter: {
      type: 'number',
      name: 'terminate_after'
    },
    stats: {
      type: 'list'
    },
    version: {
      type: 'boolean'
    },
    requestCache: {
      type: 'boolean',
      name: 'request_cache'
    },
    refresh: {
      type: 'boolean'
    },
    timeout: {
      type: 'time',
      'default': '1m'
    },
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    scrollSize: {
      type: 'number',
      name: 'scroll_size'
    },
    waitForCompletion: {
      type: 'boolean',
      'default': true,
      name: 'wait_for_completion'
    },
    requestsPerSecond: {
      type: 'number',
      'default': 0,
      name: 'requests_per_second'
    },
    slices: {
      type: 'number',
      'default': 1
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_delete_by_query',
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
      fmt: '/<%=index%>/_delete_by_query',
      req: {
        index: {
          type: 'list'
        }
      }
    }
  ],
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [deleteScript](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-scripting.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - Script ID
 * @param {<<api-param-type-string,`String`>>} params.lang - Script language
 */
api.deleteScript = ca({
  urls: [
    {
      fmt: '/_scripts/<%=lang%>/<%=id%>',
      req: {
        lang: {
          type: 'string'
        },
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_scripts/<%=lang%>',
      req: {
        lang: {
          type: 'string'
        }
      }
    }
  ],
  method: 'DELETE'
});

/**
 * Perform a [deleteTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-template.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - Template ID
 */
api.deleteTemplate = ca({
  url: {
    fmt: '/_search/template/<%=id%>',
    req: {
      id: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [exists](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.storedFields - A comma-separated list of stored fields to return in the response
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
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document (use `_all` to fetch the first document matching the ID across all types)
 */
api.exists = ca({
  params: {
    storedFields: {
      type: 'list',
      name: 'stored_fields'
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
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external',
        'external_gte',
        'force'
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
  method: 'HEAD'
});

/**
 * Perform a [existsSource](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-get.html) request
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
api.existsSource = ca({
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
        'external',
        'external_gte',
        'force'
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
  },
  method: 'HEAD'
});

/**
 * Perform a [explain](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-explain.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcards and prefix queries in the query string query should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer for the query string query
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The default field for query string query (default: _all)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.storedFields - A comma-separated list of stored fields to return in the response
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-string,`String`>>} params.parent - The ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
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
    storedFields: {
      type: 'list',
      name: 'stored_fields'
    },
    lenient: {
      type: 'boolean'
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
 * Perform a [fieldCaps](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-field-caps.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of field names
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.fieldCaps = ca({
  params: {
    fields: {
      type: 'list'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_field_caps',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_field_caps'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [fieldStats](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-field-stats.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields for to get field statistics for (min value, max value, and more)
 * @param {<<api-param-type-string,`String`>>} [params.level=cluster] - Defines if field stats should be returned on a per index level or on a cluster wide level
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.fieldStats = ca({
  params: {
    fields: {
      type: 'list'
    },
    level: {
      type: 'enum',
      'default': 'cluster',
      options: [
        'indices',
        'cluster'
      ]
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_field_stats',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_field_stats'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [get](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.storedFields - A comma-separated list of stored fields to return in the response
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
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document (use `_all` to fetch the first document matching the ID across all types)
 */
api.get = ca({
  params: {
    storedFields: {
      type: 'list',
      name: 'stored_fields'
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
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external',
        'external_gte',
        'force'
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
  }
});

/**
 * Perform a [getScript](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-scripting.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - Script ID
 * @param {<<api-param-type-string,`String`>>} params.lang - Script language
 */
api.getScript = ca({
  urls: [
    {
      fmt: '/_scripts/<%=lang%>/<%=id%>',
      req: {
        lang: {
          type: 'string'
        },
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_scripts/<%=lang%>',
      req: {
        lang: {
          type: 'string'
        }
      }
    }
  ]
});

/**
 * Perform a [getSource](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-get.html) request
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
        'external',
        'external_gte',
        'force'
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
 * Perform a [getTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-template.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - Template ID
 */
api.getTemplate = ca({
  url: {
    fmt: '/_search/template/<%=id%>',
    req: {
      id: {
        type: 'string'
      }
    }
  }
});

/**
 * Perform a [index](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-index_.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the index operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-string,`String`>>} [params.opType=index] - Explicit operation type
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of the parent document
 * @param {<<api-param-type-string,`String`>>} params.refresh - If `true` then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` (the default) then do nothing with refreshes.
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timestamp - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.ttl - Expiration time for the document
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.pipeline - The pipeline id to preprocess incoming documents with
 * @param {<<api-param-type-string,`String`>>} params.id - Document ID
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.index = ca({
  params: {
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
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
    refresh: {
      type: 'enum',
      options: [
        'true',
        'false',
        'wait_for',
        ''
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
        'external',
        'external_gte',
        'force'
      ],
      name: 'version_type'
    },
    pipeline: {
      type: 'string'
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
 * Perform a [indices.analyze](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-analyze.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The name of the analyzer to use
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.charFilter - A comma-separated list of character filters to use for the analysis
 * @param {<<api-param-type-string,`String`>>} params.field - Use the analyzer configured for this field (instead of passing the analyzer name)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.filter - A comma-separated list of filters to use for the analysis
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index to scope the operation
 * @param {<<api-param-type-boolean,`Boolean`>>} params.preferLocal - With `true`, specify that a local shard should be used if available, with `false`, use a random shard (default: true)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.text - The text on which the analysis should be performed (when request body is not used)
 * @param {<<api-param-type-string,`String`>>} params.tokenizer - The name of the tokenizer to use for the analysis
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - With `true`, outputs more advanced details. (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.attributes - A comma-separated list of token attributes to output, this parameter works only with `explain=true`
 * @param {<<api-param-type-string,`String`>>} [params.format=detailed] - Format of the output
 */
api.indices.prototype.analyze = ca({
  params: {
    analyzer: {
      type: 'string'
    },
    charFilter: {
      type: 'list',
      name: 'char_filter'
    },
    field: {
      type: 'string'
    },
    filter: {
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
      type: 'list'
    },
    tokenizer: {
      type: 'string'
    },
    explain: {
      type: 'boolean'
    },
    attributes: {
      type: 'list'
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
 * Perform a [indices.clearCache](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-clearcache.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fieldData - Clear field data
 * @param {<<api-param-type-boolean,`Boolean`>>} params.fielddata - Clear field data
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to clear when using the `field_data` parameter (default: all)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.query - Clear query caches
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index name to limit the operation
 * @param {<<api-param-type-boolean,`Boolean`>>} params.recycler - Clear the recycler cache
 * @param {<<api-param-type-boolean,`Boolean`>>} params.requestCache - Clear request cache
 * @param {<<api-param-type-boolean,`Boolean`>>} params.request - Clear request cache
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
    query: {
      type: 'boolean'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    index: {
      type: 'list'
    },
    recycler: {
      type: 'boolean'
    },
    requestCache: {
      type: 'boolean',
      name: 'request_cache'
    },
    request: {
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
 * Perform a [indices.close](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-open-close.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma separated list of indices to close
 */
api.indices.prototype.close = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  url: {
    fmt: '/<%=index%>/_close',
    req: {
      index: {
        type: 'list'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [indices.create](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-create-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Set the number of active shards to wait for before the operation returns.
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.updateAllTypes - Whether to update the mapping for all fields with the same name across all types or not
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 */
api.indices.prototype.create = ca({
  params: {
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    updateAllTypes: {
      type: 'boolean',
      name: 'update_all_types'
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
  method: 'PUT'
});

/**
 * Perform a [indices.delete](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-delete-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of indices to delete; use `_all` or `*` string to delete all indices
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
  url: {
    fmt: '/<%=index%>',
    req: {
      index: {
        type: 'list'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [indices.deleteAlias](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names (supports wildcards); use `_all` for all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - A comma-separated list of aliases to delete (supports wildcards); use `_all` to delete all aliases for the specified indices.
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
        type: 'list'
      },
      name: {
        type: 'list'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [indices.deleteTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-templates.html) request
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
 * Perform a [indices.exists](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-exists.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Ignore unavailable indexes (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Ignore if a wildcard expression resolves to no concrete indices (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether wildcard expressions should get expanded to open or closed indices (default: open)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDefaults - Whether to return all default setting for each of the indices.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names
 */
api.indices.prototype.exists = ca({
  params: {
    local: {
      type: 'boolean'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    includeDefaults: {
      type: 'boolean',
      'default': false,
      name: 'include_defaults'
    }
  },
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
 * Perform a [indices.existsAlias](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=all] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to filter aliases
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - A comma-separated list of alias names to return
 */
api.indices.prototype.existsAlias = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'all',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    local: {
      type: 'boolean'
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
 * Perform a [indices.existsTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - The comma separated names of the index templates
 */
api.indices.prototype.existsTemplate = ca({
  params: {
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    local: {
      type: 'boolean'
    }
  },
  url: {
    fmt: '/_template/<%=name%>',
    req: {
      name: {
        type: 'list'
      }
    }
  },
  method: 'HEAD'
});

/**
 * Perform a [indices.existsType](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-types-exists.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` to check the types across all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to check
 */
api.indices.prototype.existsType = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    local: {
      type: 'boolean'
    }
  },
  url: {
    fmt: '/<%=index%>/_mapping/<%=type%>',
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
 * Perform a [indices.flush](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-flush.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.force - Whether a flush should be forced even if it is not necessarily needed ie. if no changes will be committed to the index. This is useful if transaction log IDs should be incremented even if no uncommitted changes are present. (This setting can be considered as internal)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitIfOngoing - If set to true the flush operation will block until the flush can be executed if another flush operation is already executing. The default is true. If set to false the flush will be skipped iff if another flush operation is already running.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string for all indices
 */
api.indices.prototype.flush = ca({
  params: {
    force: {
      type: 'boolean'
    },
    waitIfOngoing: {
      type: 'boolean',
      name: 'wait_if_ongoing'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
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
 * Perform a [indices.flushSynced](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-synced-flush.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string for all indices
 */
api.indices.prototype.flushSynced = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_flush/synced',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_flush/synced'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.forcemerge](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-forcemerge.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flush - Specify whether the index should be flushed after performing the operation (default: true)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-number,`Number`>>} params.maxNumSegments - The number of segments the index should be merged into (default: dynamic)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.onlyExpungeDeletes - Specify whether the operation should only expunge deleted documents
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForMerge - Specify whether the request should block until the merge process is finished (default: true)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.forcemerge = ca({
  params: {
    flush: {
      type: 'boolean'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
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
    waitForMerge: {
      type: 'boolean',
      name: 'wait_for_merge'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_forcemerge',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_forcemerge'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.get](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-get-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Ignore unavailable indexes (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Ignore if a wildcard expression resolves to no concrete indices (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether wildcard expressions should get expanded to open or closed indices (default: open)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDefaults - Whether to return all default setting for each of the indices.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.feature - A comma-separated list of features
 */
api.indices.prototype.get = ca({
  params: {
    local: {
      type: 'boolean'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    includeDefaults: {
      type: 'boolean',
      'default': false,
      name: 'include_defaults'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=feature%>',
      req: {
        index: {
          type: 'list'
        },
        feature: {
          type: 'list',
          options: [
            '_settings',
            '_mappings',
            '_aliases'
          ]
        }
      }
    },
    {
      fmt: '/<%=index%>',
      req: {
        index: {
          type: 'list'
        }
      }
    }
  ]
});

/**
 * Perform a [indices.getAlias](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=all] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to filter aliases
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - A comma-separated list of alias names to return
 */
api.indices.prototype.getAlias = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'all',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    local: {
      type: 'boolean'
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
    },
    {
      fmt: '/<%=index%>/_alias',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_alias'
    }
  ]
});

/**
 * Perform a [indices.getFieldMapping](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-get-field-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDefaults - Whether the default mapping values should be returned as well
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields
 */
api.indices.prototype.getFieldMapping = ca({
  params: {
    includeDefaults: {
      type: 'boolean',
      name: 'include_defaults'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    local: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_mapping/<%=type%>/field/<%=fields%>',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'list'
        },
        fields: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/<%=index%>/_mapping/field/<%=fields%>',
      req: {
        index: {
          type: 'list'
        },
        fields: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_mapping/<%=type%>/field/<%=fields%>',
      req: {
        type: {
          type: 'list'
        },
        fields: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_mapping/field/<%=fields%>',
      req: {
        fields: {
          type: 'list'
        }
      }
    }
  ]
});

/**
 * Perform a [indices.getMapping](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-get-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types
 */
api.indices.prototype.getMapping = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    local: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_mapping/<%=type%>',
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
      fmt: '/_mapping/<%=type%>',
      req: {
        type: {
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
 * Perform a [indices.getSettings](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-get-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open,closed] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeDefaults - Whether to return all default setting for each of the indices.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - The name of the settings that should be included
 */
api.indices.prototype.getSettings = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': [
        'open',
        'closed'
      ],
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    local: {
      type: 'boolean'
    },
    includeDefaults: {
      type: 'boolean',
      'default': false,
      name: 'include_defaults'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_settings/<%=name%>',
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
      fmt: '/<%=index%>/_settings',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_settings/<%=name%>',
      req: {
        name: {
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
 * Perform a [indices.getTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.name - The comma separated names of the index templates
 */
api.indices.prototype.getTemplate = ca({
  params: {
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    local: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/_template/<%=name%>',
      req: {
        name: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_template'
    }
  ]
});

/**
 * Perform a [indices.getUpgrade](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-upgrade.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.getUpgrade = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_upgrade',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_upgrade'
    }
  ]
});

/**
 * Perform a [indices.open](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-open-close.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=closed] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma separated list of indices to open
 */
api.indices.prototype.open = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'closed',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  url: {
    fmt: '/<%=index%>/_open',
    req: {
      index: {
        type: 'list'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [indices.putAlias](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit timestamp for the document
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names the alias should point to (supports wildcards); use `_all` to perform the operation on all indices.
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
  url: {
    fmt: '/<%=index%>/_alias/<%=name%>',
    req: {
      index: {
        type: 'list'
      },
      name: {
        type: 'string'
      }
    }
  },
  method: 'PUT'
});

/**
 * Perform a [indices.putMapping](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-put-mapping.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.updateAllTypes - Whether to update the mapping for all fields with the same name across all types or not
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names the mapping should be added to (supports wildcards); use `_all` or omit to add the mapping on all indices.
 * @param {<<api-param-type-string,`String`>>} params.type - The name of the document type
 */
api.indices.prototype.putMapping = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    updateAllTypes: {
      type: 'boolean',
      name: 'update_all_types'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_mapping/<%=type%>',
      req: {
        index: {
          type: 'list'
        },
        type: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_mapping/<%=type%>',
      req: {
        type: {
          type: 'string'
        }
      }
    }
  ],
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [indices.putSettings](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-update-settings.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.preserveExisting - Whether to update existing settings. If set to `true` existing settings on an index remain unchanged, the default is `false`
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.putSettings = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    preserveExisting: {
      type: 'boolean',
      name: 'preserve_existing'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
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
 * Perform a [indices.putTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-templates.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-number,`Number`>>} params.order - The order for this template when merging multiple matching ones (higher numbers are merged later, overriding the lower numbers)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.create - Whether the index template should only be added if new or can also replace an existing one
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-string,`String`>>} params.name - The name of the template
 */
api.indices.prototype.putTemplate = ca({
  params: {
    order: {
      type: 'number'
    },
    create: {
      type: 'boolean',
      'default': false
    },
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
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
 * Perform a [indices.recovery](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-recovery.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.detailed - Whether to display detailed information about shard recovery
 * @param {<<api-param-type-boolean,`Boolean`>>} params.activeOnly - Display only those recoveries that are currently on-going
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.recovery = ca({
  params: {
    detailed: {
      type: 'boolean',
      'default': false
    },
    activeOnly: {
      type: 'boolean',
      'default': false,
      name: 'active_only'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_recovery',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_recovery'
    }
  ]
});

/**
 * Perform a [indices.refresh](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-refresh.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.refresh = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
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
 * Perform a [indices.rollover](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-rollover-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.dryRun - If set to true the rollover action will only be validated but not actually performed even if a condition matches. The default is false
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Set the number of active shards to wait for on the newly created rollover index before the operation returns.
 * @param {<<api-param-type-string,`String`>>} params.alias - The name of the alias to rollover
 * @param {<<api-param-type-string,`String`>>} params.newIndex - The name of the rollover index
 */
api.indices.prototype.rollover = ca({
  params: {
    timeout: {
      type: 'time'
    },
    dryRun: {
      type: 'boolean',
      name: 'dry_run'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    }
  },
  urls: [
    {
      fmt: '/<%=alias%>/_rollover/<%=newIndex%>',
      req: {
        alias: {
          type: 'string'
        },
        newIndex: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/<%=alias%>/_rollover',
      req: {
        alias: {
          type: 'string'
        }
      }
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.segments](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-segments.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-boolean,`Boolean`>>} params.verbose - Includes detailed memory usage by Lucene.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.segments = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    operationThreading: {
      name: 'operation_threading'
    },
    verbose: {
      type: 'boolean',
      'default': false
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
 * Perform a [indices.shardStores](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-shards-stores.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.status - A comma-separated list of statuses used to filter on shards to get store information for
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.shardStores = ca({
  params: {
    status: {
      type: 'list',
      options: [
        'green',
        'yellow',
        'red',
        'all'
      ]
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    operationThreading: {
      name: 'operation_threading'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_shard_stores',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_shard_stores'
    }
  ]
});

/**
 * Perform a [indices.shrink](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-shrink-index.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Set the number of active shards to wait for on the shrunken index before the operation returns.
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the source index to shrink
 * @param {<<api-param-type-string,`String`>>} params.target - The name of the target index to shrink into
 */
api.indices.prototype.shrink = ca({
  params: {
    timeout: {
      type: 'time'
    },
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    }
  },
  url: {
    fmt: '/<%=index%>/_shrink/<%=target%>',
    req: {
      index: {
        type: 'string'
      },
      target: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [indices.stats](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-stats.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.completionFields - A comma-separated list of fields for `fielddata` and `suggest` index metric (supports wildcards)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fielddataFields - A comma-separated list of fields for `fielddata` index metric (supports wildcards)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields for `fielddata` and `completion` index metric (supports wildcards)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.groups - A comma-separated list of search groups for `search` index metric
 * @param {<<api-param-type-string,`String`>>} [params.level=indices] - Return stats aggregated at cluster, index or shard level
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.types - A comma-separated list of document types for the `indexing` index metric
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeSegmentFileSizes - Whether to report the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.metric - Limit the information returned the specific metrics.
 */
api.indices.prototype.stats = ca({
  params: {
    completionFields: {
      type: 'list',
      name: 'completion_fields'
    },
    fielddataFields: {
      type: 'list',
      name: 'fielddata_fields'
    },
    fields: {
      type: 'list'
    },
    groups: {
      type: 'list'
    },
    level: {
      type: 'enum',
      'default': 'indices',
      options: [
        'cluster',
        'indices',
        'shards'
      ]
    },
    types: {
      type: 'list'
    },
    includeSegmentFileSizes: {
      type: 'boolean',
      'default': false,
      name: 'include_segment_file_sizes'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_stats/<%=metric%>',
      req: {
        index: {
          type: 'list'
        },
        metric: {
          type: 'list',
          options: [
            '_all',
            'completion',
            'docs',
            'fielddata',
            'query_cache',
            'flush',
            'get',
            'indexing',
            'merge',
            'percolate',
            'request_cache',
            'refresh',
            'search',
            'segments',
            'store',
            'warmer',
            'suggest'
          ]
        }
      }
    },
    {
      fmt: '/_stats/<%=metric%>',
      req: {
        metric: {
          type: 'list',
          options: [
            '_all',
            'completion',
            'docs',
            'fielddata',
            'query_cache',
            'flush',
            'get',
            'indexing',
            'merge',
            'percolate',
            'request_cache',
            'refresh',
            'search',
            'segments',
            'store',
            'warmer',
            'suggest'
          ]
        }
      }
    },
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
 * Perform a [indices.updateAliases](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-aliases.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Request timeout
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Specify timeout for connection to master
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
 * Perform a [indices.upgrade](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/indices-upgrade.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForCompletion - Specify whether the request should block until the all segments are upgraded (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.onlyAncientSegments - If true, only ancient (an older Lucene major release) segments will be upgraded
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 */
api.indices.prototype.upgrade = ca({
  params: {
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    waitForCompletion: {
      type: 'boolean',
      name: 'wait_for_completion'
    },
    onlyAncientSegments: {
      type: 'boolean',
      name: 'only_ancient_segments'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/_upgrade',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_upgrade'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [indices.validateQuery](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-validate.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - Return detailed information about the error
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {anything} params.operationThreading - TODO: ?
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-boolean,`Boolean`>>} params.rewrite - Provide a more detailed explanation showing the actual Lucene query that will be executed.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allShards - Execute validation on all shards instead of one random shard per index
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to restrict the operation; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to restrict the operation; leave empty to perform the operation on all types
 */
api.indices.prototype.validateQuery = ca({
  params: {
    explain: {
      type: 'boolean'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    operationThreading: {
      name: 'operation_threading'
    },
    q: {
      type: 'string'
    },
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
    lenient: {
      type: 'boolean'
    },
    rewrite: {
      type: 'boolean'
    },
    allShards: {
      type: 'boolean',
      name: 'all_shards'
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
 * Perform a [info](https://www.elastic.co/guide/) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 */
api.info = ca({
  url: {
    fmt: '/'
  }
});

api.ingest = namespace();

/**
 * Perform a [ingest.deletePipeline](https://www.elastic.co/guide/en/elasticsearch/plugins/5.5/ingest.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>} params.id - Pipeline ID
 */
api.ingest.prototype.deletePipeline = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    }
  },
  url: {
    fmt: '/_ingest/pipeline/<%=id%>',
    req: {
      id: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [ingest.getPipeline](https://www.elastic.co/guide/en/elasticsearch/plugins/5.5/ingest.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>} params.id - Comma separated list of pipeline ids. Wildcards supported
 */
api.ingest.prototype.getPipeline = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  urls: [
    {
      fmt: '/_ingest/pipeline/<%=id%>',
      req: {
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_ingest/pipeline'
    }
  ]
});

/**
 * Perform a [ingest.putPipeline](https://www.elastic.co/guide/en/elasticsearch/plugins/5.5/ingest.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>} params.id - Pipeline ID
 */
api.ingest.prototype.putPipeline = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    }
  },
  url: {
    fmt: '/_ingest/pipeline/<%=id%>',
    req: {
      id: {
        type: 'string'
      }
    }
  },
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [ingest.simulate](https://www.elastic.co/guide/en/elasticsearch/plugins/5.5/ingest.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.verbose - Verbose mode. Display data output for each processor in executed pipeline
 * @param {<<api-param-type-string,`String`>>} params.id - Pipeline ID
 */
api.ingest.prototype.simulate = ca({
  params: {
    verbose: {
      type: 'boolean',
      'default': false
    }
  },
  urls: [
    {
      fmt: '/_ingest/pipeline/<%=id%>/_simulate',
      req: {
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_ingest/pipeline/_simulate'
    }
  ],
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [mget](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-multi-get.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.storedFields - A comma-separated list of stored fields to return in the response
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specify whether to perform the operation in realtime or search mode
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Refresh the shard containing the document before performing the operation
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-string,`String`>>} params.index - The name of the index
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document
 */
api.mget = ca({
  params: {
    storedFields: {
      type: 'list',
      name: 'stored_fields'
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
 * Perform a [mpercolate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-percolate.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>} params.index - The index of the document being count percolated to use as default
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document being percolated to use as default.
 */
api.mpercolate = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_mpercolate',
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
      fmt: '/<%=index%>/_mpercolate',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_mpercolate'
    }
  ],
  needBody: true,
  bulkBody: true,
  method: 'POST'
});

/**
 * Perform a [msearch](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-multi-search.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-number,`Number`>>} params.maxConcurrentSearches - Controls the maximum number of concurrent searches the multi search api will execute
 * @param {<<api-param-type-boolean,`Boolean`>>} params.typedKeys - Specify whether aggregation and suggester names should be prefixed by their respective types in the response
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
        'dfs_query_and_fetch'
      ],
      name: 'search_type'
    },
    maxConcurrentSearches: {
      type: 'number',
      name: 'max_concurrent_searches'
    },
    typedKeys: {
      type: 'boolean',
      name: 'typed_keys'
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
 * Perform a [msearchTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-template.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-boolean,`Boolean`>>} params.typedKeys - Specify whether aggregation and suggester names should be prefixed by their respective types in the response
 * @param {<<api-param-type-number,`Number`>>} params.maxConcurrentSearches - Controls the maximum number of concurrent searches the multi search api will execute
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to use as default
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to use as default
 */
api.msearchTemplate = ca({
  params: {
    searchType: {
      type: 'enum',
      options: [
        'query_then_fetch',
        'query_and_fetch',
        'dfs_query_then_fetch',
        'dfs_query_and_fetch'
      ],
      name: 'search_type'
    },
    typedKeys: {
      type: 'boolean',
      name: 'typed_keys'
    },
    maxConcurrentSearches: {
      type: 'number',
      name: 'max_concurrent_searches'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_msearch/template',
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
      fmt: '/<%=index%>/_msearch/template',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_msearch/template'
    }
  ],
  needBody: true,
  bulkBody: true,
  method: 'POST'
});

/**
 * Perform a [mtermvectors](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-multi-termvectors.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.ids - A comma-separated list of documents ids. You must define ids as parameter or set "ids" or "docs" in the request body
 * @param {<<api-param-type-boolean,`Boolean`>>} params.termStatistics - Specifies if total term frequency and document frequency should be returned. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.fieldStatistics=true] - Specifies if document count, sum of document frequencies and sum of total term frequencies should be returned. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.offsets=true] - Specifies if term offsets should be returned. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.positions=true] - Specifies if term positions should be returned. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.payloads=true] - Specifies if term payloads should be returned. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random) .Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-string,`String`>>} params.parent - Parent id of documents. Applies to all returned documents unless otherwise specified in body "params" or "docs".
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specifies if requests are real-time as opposed to near-real-time (default: true).
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.index - The index in which the document resides.
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document.
 */
api.mtermvectors = ca({
  params: {
    ids: {
      type: 'list',
      required: false
    },
    termStatistics: {
      type: 'boolean',
      'default': false,
      required: false,
      name: 'term_statistics'
    },
    fieldStatistics: {
      type: 'boolean',
      'default': true,
      required: false,
      name: 'field_statistics'
    },
    fields: {
      type: 'list',
      required: false
    },
    offsets: {
      type: 'boolean',
      'default': true,
      required: false
    },
    positions: {
      type: 'boolean',
      'default': true,
      required: false
    },
    payloads: {
      type: 'boolean',
      'default': true,
      required: false
    },
    preference: {
      type: 'string',
      required: false
    },
    routing: {
      type: 'string',
      required: false
    },
    parent: {
      type: 'string',
      required: false
    },
    realtime: {
      type: 'boolean',
      required: false
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external',
        'external_gte',
        'force'
      ],
      name: 'version_type'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_mtermvectors',
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
      fmt: '/<%=index%>/_mtermvectors',
      req: {
        index: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_mtermvectors'
    }
  ],
  method: 'POST'
});

api.nodes = namespace();

/**
 * Perform a [nodes.hotThreads](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-nodes-hot-threads.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.interval - The interval for the second sampling of threads
 * @param {<<api-param-type-number,`Number`>>} params.snapshots - Number of samples of thread stacktrace (default: 10)
 * @param {<<api-param-type-number,`Number`>>} params.threads - Specify the number of threads to provide information for (default: 3)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreIdleThreads - Don't show threads that are in known-idle places, such as waiting on a socket select or pulling from an empty task queue (default: true)
 * @param {<<api-param-type-string,`String`>>} params.type - The type to sample (default: cpu)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 */
api.nodes.prototype.hotThreads = ca({
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
    ignoreIdleThreads: {
      type: 'boolean',
      name: 'ignore_idle_threads'
    },
    type: {
      type: 'enum',
      options: [
        'cpu',
        'wait',
        'block'
      ]
    },
    timeout: {
      type: 'time'
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
 * Perform a [nodes.info](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-nodes-info.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.flatSettings - Return settings in flat format (default: false)
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.metric - A comma-separated list of metrics you wish returned. Leave empty to return all.
 */
api.nodes.prototype.info = ca({
  params: {
    flatSettings: {
      type: 'boolean',
      name: 'flat_settings'
    },
    timeout: {
      type: 'time'
    }
  },
  urls: [
    {
      fmt: '/_nodes/<%=nodeId%>/<%=metric%>',
      req: {
        nodeId: {
          type: 'list'
        },
        metric: {
          type: 'list',
          options: [
            'settings',
            'os',
            'process',
            'jvm',
            'thread_pool',
            'transport',
            'http',
            'plugins',
            'ingest'
          ]
        }
      }
    },
    {
      fmt: '/_nodes/<%=nodeId%>',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_nodes/<%=metric%>',
      req: {
        metric: {
          type: 'list',
          options: [
            'settings',
            'os',
            'process',
            'jvm',
            'thread_pool',
            'transport',
            'http',
            'plugins',
            'ingest'
          ]
        }
      }
    },
    {
      fmt: '/_nodes'
    }
  ]
});

/**
 * Perform a [nodes.stats](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-nodes-stats.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.completionFields - A comma-separated list of fields for `fielddata` and `suggest` index metric (supports wildcards)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fielddataFields - A comma-separated list of fields for `fielddata` index metric (supports wildcards)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields for `fielddata` and `completion` index metric (supports wildcards)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.groups - A comma-separated list of search groups for `search` index metric
 * @param {<<api-param-type-string,`String`>>} [params.level=node] - Return indices stats aggregated at index, node or shard level
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.types - A comma-separated list of document types for the `indexing` index metric
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.includeSegmentFileSizes - Whether to report the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.metric - Limit the information returned to the specified metrics
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.indexMetric - Limit the information returned for `indices` metric to the specific index metrics. Isn't used if `indices` (or `all`) metric isn't specified.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 */
api.nodes.prototype.stats = ca({
  params: {
    completionFields: {
      type: 'list',
      name: 'completion_fields'
    },
    fielddataFields: {
      type: 'list',
      name: 'fielddata_fields'
    },
    fields: {
      type: 'list'
    },
    groups: {
      type: 'boolean'
    },
    level: {
      type: 'enum',
      'default': 'node',
      options: [
        'indices',
        'node',
        'shards'
      ]
    },
    types: {
      type: 'list'
    },
    timeout: {
      type: 'time'
    },
    includeSegmentFileSizes: {
      type: 'boolean',
      'default': false,
      name: 'include_segment_file_sizes'
    }
  },
  urls: [
    {
      fmt: '/_nodes/<%=nodeId%>/stats/<%=metric%>/<%=indexMetric%>',
      req: {
        nodeId: {
          type: 'list'
        },
        metric: {
          type: 'list',
          options: [
            '_all',
            'breaker',
            'fs',
            'http',
            'indices',
            'jvm',
            'os',
            'process',
            'thread_pool',
            'transport',
            'discovery'
          ]
        },
        indexMetric: {
          type: 'list',
          options: [
            '_all',
            'completion',
            'docs',
            'fielddata',
            'query_cache',
            'flush',
            'get',
            'indexing',
            'merge',
            'percolate',
            'request_cache',
            'refresh',
            'search',
            'segments',
            'store',
            'warmer',
            'suggest'
          ]
        }
      }
    },
    {
      fmt: '/_nodes/<%=nodeId%>/stats/<%=metric%>',
      req: {
        nodeId: {
          type: 'list'
        },
        metric: {
          type: 'list',
          options: [
            '_all',
            'breaker',
            'fs',
            'http',
            'indices',
            'jvm',
            'os',
            'process',
            'thread_pool',
            'transport',
            'discovery'
          ]
        }
      }
    },
    {
      fmt: '/_nodes/stats/<%=metric%>/<%=indexMetric%>',
      req: {
        metric: {
          type: 'list',
          options: [
            '_all',
            'breaker',
            'fs',
            'http',
            'indices',
            'jvm',
            'os',
            'process',
            'thread_pool',
            'transport',
            'discovery'
          ]
        },
        indexMetric: {
          type: 'list',
          options: [
            '_all',
            'completion',
            'docs',
            'fielddata',
            'query_cache',
            'flush',
            'get',
            'indexing',
            'merge',
            'percolate',
            'request_cache',
            'refresh',
            'search',
            'segments',
            'store',
            'warmer',
            'suggest'
          ]
        }
      }
    },
    {
      fmt: '/_nodes/<%=nodeId%>/stats',
      req: {
        nodeId: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_nodes/stats/<%=metric%>',
      req: {
        metric: {
          type: 'list',
          options: [
            '_all',
            'breaker',
            'fs',
            'http',
            'indices',
            'jvm',
            'os',
            'process',
            'thread_pool',
            'transport',
            'discovery'
          ]
        }
      }
    },
    {
      fmt: '/_nodes/stats'
    }
  ]
});

/**
 * Perform a [percolate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-percolate.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>} params.percolateIndex - The index to percolate the document into. Defaults to index.
 * @param {<<api-param-type-string,`String`>>} params.percolateType - The type to percolate document into. Defaults to type.
 * @param {<<api-param-type-string,`String`>>} params.percolateRouting - The routing value to use when percolating the existing document.
 * @param {<<api-param-type-string,`String`>>} params.percolatePreference - Which shard to prefer when executing the percolate request.
 * @param {<<api-param-type-string,`String`>>} params.percolateFormat - Return an array of matching query IDs instead of objects
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.index - The index of the document being percolated.
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document being percolated.
 * @param {<<api-param-type-string,`String`>>} params.id - Substitute the document in the request body with a document that is known by the specified id. On top of the id, the index and type parameter will be used to retrieve the document from within the cluster.
 */
api.percolate = ca({
  params: {
    routing: {
      type: 'list'
    },
    preference: {
      type: 'string'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    percolateIndex: {
      type: 'string',
      name: 'percolate_index'
    },
    percolateType: {
      type: 'string',
      name: 'percolate_type'
    },
    percolateRouting: {
      type: 'string',
      name: 'percolate_routing'
    },
    percolatePreference: {
      type: 'string',
      name: 'percolate_preference'
    },
    percolateFormat: {
      type: 'enum',
      options: [
        'ids'
      ],
      name: 'percolate_format'
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external',
        'external_gte',
        'force'
      ],
      name: 'version_type'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/<%=id%>/_percolate',
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
      fmt: '/<%=index%>/<%=type%>/_percolate',
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
  method: 'POST'
});

/**
 * Perform a [ping](https://www.elastic.co/guide/) request
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
 * Perform a [putScript](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-scripting.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - Script ID
 * @param {<<api-param-type-string,`String`>>} params.lang - Script language
 */
api.putScript = ca({
  urls: [
    {
      fmt: '/_scripts/<%=lang%>/<%=id%>',
      req: {
        lang: {
          type: 'string'
        },
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_scripts/<%=lang%>',
      req: {
        lang: {
          type: 'string'
        }
      }
    }
  ],
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [putTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-template.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - Template ID
 */
api.putTemplate = ca({
  url: {
    fmt: '/_search/template/<%=id%>',
    req: {
      id: {
        type: 'string'
      }
    }
  },
  needBody: true,
  method: 'PUT'
});

/**
 * Perform a [reindex](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-reindex.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Should the effected indexes be refreshed?
 * @param {<<api-param-type-duration-string,`DurationString`>>} [params.timeout=1m] - Time each individual bulk request should wait for shards that are unavailable.
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the reindex operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.waitForCompletion=true] - Should the request should block until the reindex is complete.
 * @param {<<api-param-type-number,`Number`>>} params.requestsPerSecond - The throttle to set on this request in sub-requests per second. -1 means no throttle.
 * @param {<<api-param-type-number,`Number`>>} [params.slices=1] - The number of slices this task should be divided into. Defaults to 1 meaning the task isn't sliced into subtasks.
 */
api.reindex = ca({
  params: {
    refresh: {
      type: 'boolean'
    },
    timeout: {
      type: 'time',
      'default': '1m'
    },
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    waitForCompletion: {
      type: 'boolean',
      'default': true,
      name: 'wait_for_completion'
    },
    requestsPerSecond: {
      type: 'number',
      'default': 0,
      name: 'requests_per_second'
    },
    slices: {
      type: 'number',
      'default': 1
    }
  },
  url: {
    fmt: '/_reindex'
  },
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [reindexRethrottle](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-reindex.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-number,`Number`>>} params.requestsPerSecond - The throttle to set on this request in floating sub-requests per second. -1 means set no throttle.
 * @param {<<api-param-type-string,`String`>>} params.taskId - The task id to rethrottle
 */
api.reindexRethrottle = ca({
  params: {
    requestsPerSecond: {
      type: 'number',
      required: true,
      name: 'requests_per_second'
    }
  },
  url: {
    fmt: '/_reindex/<%=taskId%>/_rethrottle',
    req: {
      taskId: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

api.remote = namespace();

/**
 * Perform a [remote.info](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/cluster-remote-info.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 */
api.remote.prototype.info = ca({
  url: {
    fmt: '/_remote/info'
  }
});

/**
 * Perform a [renderSearchTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-template.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.id - The id of the stored search template
 */
api.renderSearchTemplate = ca({
  urls: [
    {
      fmt: '/_render/template/<%=id%>',
      req: {
        id: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_render/template'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [scroll](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-request-scroll.html) request
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
  paramAsBody: {
    param: 'scrollId',
    body: 'scroll_id'
  },
  method: 'POST'
});

/**
 * Perform a [search](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-search.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - Specify whether to return detailed information about score computation as part of a hit
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.storedFields - A comma-separated list of stored fields to return as part of a hit
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.docvalueFields - A comma-separated list of fields to return as the docvalue representation of a field for each hit
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fielddataFields - A comma-separated list of fields to return as the docvalue representation of a field for each hit
 * @param {<<api-param-type-number,`Number`>>} params.from - Starting offset (default: 0)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.scroll - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-number,`Number`>>} params.size - Number of hits to return (default: 10)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.sort - A comma-separated list of <field>:<direction> pairs
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-number,`Number`>>} params.terminateAfter - The maximum number of documents to collect for each shard, upon reaching which the query execution will terminate early.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.stats - Specific 'tag' of the request for logging and statistical purposes
 * @param {<<api-param-type-string,`String`>>} params.suggestField - Specify which field to use for suggestions
 * @param {<<api-param-type-string,`String`>>} [params.suggestMode=missing] - Specify suggest mode
 * @param {<<api-param-type-number,`Number`>>} params.suggestSize - How many suggestions to return in response
 * @param {<<api-param-type-string,`String`>>} params.suggestText - The source text for which the suggestions should be returned
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.trackScores - Whether to calculate and return scores even if they are not used for sorting
 * @param {<<api-param-type-boolean,`Boolean`>>} params.typedKeys - Specify whether aggregation and suggester names should be prefixed by their respective types in the response
 * @param {<<api-param-type-boolean,`Boolean`>>} params.version - Specify whether to return document version as part of a hit
 * @param {<<api-param-type-boolean,`Boolean`>>} params.requestCache - Specify if request cache should be used for this request or not, defaults to index level setting
 * @param {<<api-param-type-number,`Number`>>} [params.batchedReduceSize=512] - The number of shard results that should be reduced at once on the coordinating node. This value should be used as a protection mechanism to reduce the memory overhead per search request if the potential number of shards in the request can be large.
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
    storedFields: {
      type: 'list',
      name: 'stored_fields'
    },
    docvalueFields: {
      type: 'list',
      name: 'docvalue_fields'
    },
    fielddataFields: {
      type: 'list',
      name: 'fielddata_fields'
    },
    from: {
      type: 'number'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    lenient: {
      type: 'boolean'
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
        'dfs_query_then_fetch'
      ],
      name: 'search_type'
    },
    size: {
      type: 'number'
    },
    sort: {
      type: 'list'
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
    terminateAfter: {
      type: 'number',
      name: 'terminate_after'
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
    trackScores: {
      type: 'boolean',
      name: 'track_scores'
    },
    typedKeys: {
      type: 'boolean',
      name: 'typed_keys'
    },
    version: {
      type: 'boolean'
    },
    requestCache: {
      type: 'boolean',
      name: 'request_cache'
    },
    batchedReduceSize: {
      type: 'number',
      'default': 512,
      name: 'batched_reduce_size'
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
 * Perform a [searchShards](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-shards.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to search; leave empty to perform the operation on all types
 */
api.searchShards = ca({
  params: {
    preference: {
      type: 'string'
    },
    routing: {
      type: 'string'
    },
    local: {
      type: 'boolean'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_search_shards',
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
      fmt: '/<%=index%>/_search_shards',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_search_shards'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [searchTemplate](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-template.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.scroll - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-boolean,`Boolean`>>} params.explain - Specify whether to return detailed information about score computation as part of a hit
 * @param {<<api-param-type-boolean,`Boolean`>>} params.profile - Specify whether to profile the query execution
 * @param {<<api-param-type-boolean,`Boolean`>>} params.typedKeys - Specify whether aggregation and suggester names should be prefixed by their respective types in the response
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to search; leave empty to perform the operation on all types
 */
api.searchTemplate = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    preference: {
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
        'dfs_query_and_fetch'
      ],
      name: 'search_type'
    },
    explain: {
      type: 'boolean'
    },
    profile: {
      type: 'boolean'
    },
    typedKeys: {
      type: 'boolean',
      name: 'typed_keys'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_search/template',
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
      fmt: '/<%=index%>/_search/template',
      req: {
        index: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_search/template'
    }
  ],
  method: 'POST'
});

api.snapshot = namespace();

/**
 * Perform a [snapshot.create](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForCompletion - Should this request wait until the operation has completed before returning
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 * @param {<<api-param-type-string,`String`>>} params.snapshot - A snapshot name
 */
api.snapshot.prototype.create = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    waitForCompletion: {
      type: 'boolean',
      'default': false,
      name: 'wait_for_completion'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>/<%=snapshot%>',
    req: {
      repository: {
        type: 'string'
      },
      snapshot: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [snapshot.createRepository](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-boolean,`Boolean`>>} params.verify - Whether to verify the repository after creation
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 */
api.snapshot.prototype.createRepository = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    },
    verify: {
      type: 'boolean'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>',
    req: {
      repository: {
        type: 'string'
      }
    }
  },
  needBody: true,
  method: 'POST'
});

/**
 * Perform a [snapshot.delete](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 * @param {<<api-param-type-string,`String`>>} params.snapshot - A snapshot name
 */
api.snapshot.prototype['delete'] = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>/<%=snapshot%>',
    req: {
      repository: {
        type: 'string'
      },
      snapshot: {
        type: 'string'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [snapshot.deleteRepository](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.repository - A comma-separated list of repository names
 */
api.snapshot.prototype.deleteRepository = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>',
    req: {
      repository: {
        type: 'list'
      }
    }
  },
  method: 'DELETE'
});

/**
 * Perform a [snapshot.get](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether to ignore unavailable snapshots, defaults to false which means a SnapshotMissingException is thrown
 * @param {<<api-param-type-boolean,`Boolean`>>} params.verbose - Whether to show verbose snapshot info or only show the basic info found in the repository index blob
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.snapshot - A comma-separated list of snapshot names
 */
api.snapshot.prototype.get = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    verbose: {
      type: 'boolean'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>/<%=snapshot%>',
    req: {
      repository: {
        type: 'string'
      },
      snapshot: {
        type: 'list'
      }
    }
  }
});

/**
 * Perform a [snapshot.getRepository](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.local - Return local information, do not retrieve the state from master node (default: false)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.repository - A comma-separated list of repository names
 */
api.snapshot.prototype.getRepository = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    local: {
      type: 'boolean'
    }
  },
  urls: [
    {
      fmt: '/_snapshot/<%=repository%>',
      req: {
        repository: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_snapshot'
    }
  ]
});

/**
 * Perform a [snapshot.restore](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForCompletion - Should this request wait until the operation has completed before returning
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 * @param {<<api-param-type-string,`String`>>} params.snapshot - A snapshot name
 */
api.snapshot.prototype.restore = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    waitForCompletion: {
      type: 'boolean',
      'default': false,
      name: 'wait_for_completion'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>/<%=snapshot%>/_restore',
    req: {
      repository: {
        type: 'string'
      },
      snapshot: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [snapshot.status](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether to ignore unavailable snapshots, defaults to false which means a SnapshotMissingException is thrown
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.snapshot - A comma-separated list of snapshot names
 */
api.snapshot.prototype.status = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    }
  },
  urls: [
    {
      fmt: '/_snapshot/<%=repository%>/<%=snapshot%>/_status',
      req: {
        repository: {
          type: 'string'
        },
        snapshot: {
          type: 'list'
        }
      }
    },
    {
      fmt: '/_snapshot/<%=repository%>/_status',
      req: {
        repository: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_snapshot/_status'
    }
  ]
});

/**
 * Perform a [snapshot.verifyRepository](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/modules-snapshots.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.masterTimeout - Explicit operation timeout for connection to master node
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.timeout - Explicit operation timeout
 * @param {<<api-param-type-string,`String`>>} params.repository - A repository name
 */
api.snapshot.prototype.verifyRepository = ca({
  params: {
    masterTimeout: {
      type: 'time',
      name: 'master_timeout'
    },
    timeout: {
      type: 'time'
    }
  },
  url: {
    fmt: '/_snapshot/<%=repository%>/_verify',
    req: {
      repository: {
        type: 'string'
      }
    }
  },
  method: 'POST'
});

/**
 * Perform a [suggest](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-suggesters.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to restrict the operation; use `_all` or empty string to perform the operation on all indices
 */
api.suggest = ca({
  params: {
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    preference: {
      type: 'string'
    },
    routing: {
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
  needBody: true,
  method: 'POST'
});

api.tasks = namespace();

/**
 * Perform a [tasks.cancel](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/tasks.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.actions - A comma-separated list of actions that should be cancelled. Leave empty to cancel all.
 * @param {<<api-param-type-string,`String`>>} params.parentNode - Cancel tasks with specified parent node.
 * @param {<<api-param-type-string,`String`>>} params.parentTask - Cancel tasks with specified parent task id (node_id:task_number). Set to -1 to cancel all.
 * @param {<<api-param-type-string,`String`>>} params.taskId - Cancel the task with specified task id (node_id:task_number)
 */
api.tasks.prototype.cancel = ca({
  params: {
    nodeId: {
      type: 'list',
      name: 'node_id'
    },
    actions: {
      type: 'list'
    },
    parentNode: {
      type: 'string',
      name: 'parent_node'
    },
    parentTask: {
      type: 'string',
      name: 'parent_task'
    }
  },
  urls: [
    {
      fmt: '/_tasks/<%=taskId%>/_cancel',
      req: {
        taskId: {
          type: 'string'
        }
      }
    },
    {
      fmt: '/_tasks/_cancel'
    }
  ],
  method: 'POST'
});

/**
 * Perform a [tasks.get](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/tasks.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForCompletion - Wait for the matching tasks to complete (default: false)
 * @param {<<api-param-type-string,`String`>>} params.taskId - Return the task with specified id (node_id:task_number)
 */
api.tasks.prototype.get = ca({
  params: {
    waitForCompletion: {
      type: 'boolean',
      name: 'wait_for_completion'
    }
  },
  url: {
    fmt: '/_tasks/<%=taskId%>',
    req: {
      taskId: {
        type: 'string'
      }
    }
  }
});

/**
 * Perform a [tasks.list](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/tasks.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.nodeId - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.actions - A comma-separated list of actions that should be returned. Leave empty to return all.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.detailed - Return detailed task information (default: false)
 * @param {<<api-param-type-string,`String`>>} params.parentNode - Return tasks with specified parent node.
 * @param {<<api-param-type-string,`String`>>} params.parentTask - Return tasks with specified parent task id (node_id:task_number). Set to -1 to return all.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.waitForCompletion - Wait for the matching tasks to complete (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.groupBy=nodes] - Group tasks by nodes or parent/child relationships
 */
api.tasks.prototype.list = ca({
  params: {
    nodeId: {
      type: 'list',
      name: 'node_id'
    },
    actions: {
      type: 'list'
    },
    detailed: {
      type: 'boolean'
    },
    parentNode: {
      type: 'string',
      name: 'parent_node'
    },
    parentTask: {
      type: 'string',
      name: 'parent_task'
    },
    waitForCompletion: {
      type: 'boolean',
      name: 'wait_for_completion'
    },
    groupBy: {
      type: 'enum',
      'default': 'nodes',
      options: [
        'nodes',
        'parents'
      ],
      name: 'group_by'
    }
  },
  url: {
    fmt: '/_tasks'
  }
});

/**
 * Perform a [termvectors](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-termvectors.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-boolean,`Boolean`>>} params.termStatistics - Specifies if total term frequency and document frequency should be returned.
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.fieldStatistics=true] - Specifies if document count, sum of document frequencies and sum of total term frequencies should be returned.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return.
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.offsets=true] - Specifies if term offsets should be returned.
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.positions=true] - Specifies if term positions should be returned.
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.payloads=true] - Specifies if term payloads should be returned.
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random).
 * @param {<<api-param-type-string,`String`>>} params.routing - Specific routing value.
 * @param {<<api-param-type-string,`String`>>} params.parent - Parent id of documents.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.realtime - Specifies if request is real-time as opposed to near-real-time (default: true).
 * @param {<<api-param-type-number,`Number`>>} params.version - Explicit version number for concurrency control
 * @param {<<api-param-type-string,`String`>>} params.versionType - Specific version type
 * @param {<<api-param-type-string,`String`>>} params.index - The index in which the document resides.
 * @param {<<api-param-type-string,`String`>>} params.type - The type of the document.
 * @param {<<api-param-type-string,`String`>>} params.id - The id of the document, when not specified a doc param should be supplied.
 */
api.termvectors = ca({
  params: {
    termStatistics: {
      type: 'boolean',
      'default': false,
      required: false,
      name: 'term_statistics'
    },
    fieldStatistics: {
      type: 'boolean',
      'default': true,
      required: false,
      name: 'field_statistics'
    },
    fields: {
      type: 'list',
      required: false
    },
    offsets: {
      type: 'boolean',
      'default': true,
      required: false
    },
    positions: {
      type: 'boolean',
      'default': true,
      required: false
    },
    payloads: {
      type: 'boolean',
      'default': true,
      required: false
    },
    preference: {
      type: 'string',
      required: false
    },
    routing: {
      type: 'string',
      required: false
    },
    parent: {
      type: 'string',
      required: false
    },
    realtime: {
      type: 'boolean',
      required: false
    },
    version: {
      type: 'number'
    },
    versionType: {
      type: 'enum',
      options: [
        'internal',
        'external',
        'external_gte',
        'force'
      ],
      name: 'version_type'
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/<%=id%>/_termvectors',
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
      fmt: '/<%=index%>/<%=type%>/_termvectors',
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
  method: 'POST'
});

/**
 * Perform a [update](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-update.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the update operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.fields - A comma-separated list of fields to return in the response
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-string,`String`>>} params.lang - The script language (default: painless)
 * @param {<<api-param-type-string,`String`>>} params.parent - ID of the parent document. Is is only used for routing and when for the upsert request
 * @param {<<api-param-type-string,`String`>>} params.refresh - If `true` then refresh the effected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` (the default) then do nothing with refreshes.
 * @param {<<api-param-type-number,`Number`>>} params.retryOnConflict - Specify how many times should the operation be retried when a conflict occurs (default: 0)
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
api.update = ca({
  params: {
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    fields: {
      type: 'list'
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
    lang: {
      type: 'string'
    },
    parent: {
      type: 'string'
    },
    refresh: {
      type: 'enum',
      options: [
        'true',
        'false',
        'wait_for',
        ''
      ]
    },
    retryOnConflict: {
      type: 'number',
      name: 'retry_on_conflict'
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
        'force'
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
 * Perform a [updateByQuery](https://www.elastic.co/guide/en/elasticsearch/reference/5.5/docs-update-by-query.html) request
 *
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {<<api-param-type-string,`String`>>} params.analyzer - The analyzer to use for the query string
 * @param {<<api-param-type-boolean,`Boolean`>>} params.analyzeWildcard - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {<<api-param-type-string,`String`>>} [params.defaultOperator=OR] - The default operator for query string query (AND or OR)
 * @param {<<api-param-type-string,`String`>>} params.df - The field to use as default where no field prefix is given in the query string
 * @param {<<api-param-type-number,`Number`>>} params.from - Starting offset (default: 0)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.ignoreUnavailable - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.allowNoIndices - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {<<api-param-type-string,`String`>>} [params.conflicts=abort] - What to do when the update by query hits version conflicts?
 * @param {<<api-param-type-string,`String`>>} [params.expandWildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {<<api-param-type-boolean,`Boolean`>>} params.lenient - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {<<api-param-type-string,`String`>>} params.pipeline - Ingest pipeline to set on index requests made by this action. (default: none)
 * @param {<<api-param-type-string,`String`>>} params.preference - Specify the node or shard the operation should be performed on (default: random)
 * @param {<<api-param-type-string,`String`>>} params.q - Query in the Lucene query string syntax
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.routing - A comma-separated list of specific routing values
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.scroll - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {<<api-param-type-string,`String`>>} params.searchType - Search operation type
 * @param {<<api-param-type-duration-string,`DurationString`>>} params.searchTimeout - Explicit timeout for each search request. Defaults to no timeout.
 * @param {<<api-param-type-number,`Number`>>} params.size - Number of hits to return (default: 10)
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.sort - A comma-separated list of <field>:<direction> pairs
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._source - True or false to return the _source field or not, or a list of fields to return
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceExclude - A list of fields to exclude from the returned _source field
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params._sourceInclude - A list of fields to extract and return from the _source field
 * @param {<<api-param-type-number,`Number`>>} params.terminateAfter - The maximum number of documents to collect for each shard, upon reaching which the query execution will terminate early.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.stats - Specific 'tag' of the request for logging and statistical purposes
 * @param {<<api-param-type-boolean,`Boolean`>>} params.version - Specify whether to return document version as part of a hit
 * @param {<<api-param-type-boolean,`Boolean`>>} params.versionType - Should the document increment the version number (internal) on hit or not (reindex)
 * @param {<<api-param-type-boolean,`Boolean`>>} params.requestCache - Specify if request cache should be used for this request or not, defaults to index level setting
 * @param {<<api-param-type-boolean,`Boolean`>>} params.refresh - Should the effected indexes be refreshed?
 * @param {<<api-param-type-duration-string,`DurationString`>>} [params.timeout=1m] - Time each individual bulk request should wait for shards that are unavailable.
 * @param {<<api-param-type-string,`String`>>} params.waitForActiveShards - Sets the number of shard copies that must be active before proceeding with the update by query operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {<<api-param-type-number,`Number`>>} params.scrollSize - Size on the scroll request powering the update_by_query
 * @param {<<api-param-type-boolean,`Boolean`>>} [params.waitForCompletion=true] - Should the request should block until the update by query operation is complete.
 * @param {<<api-param-type-number,`Number`>>} params.requestsPerSecond - The throttle to set on this request in sub-requests per second. -1 means no throttle.
 * @param {<<api-param-type-number,`Number`>>} [params.slices=1] - The number of slices this task should be divided into. Defaults to 1 meaning the task isn't sliced into subtasks.
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.index - A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices
 * @param {<<api-param-type-string,`String`>>, <<api-param-type-string-array,`String[]`>>, <<api-param-type-boolean,`Boolean`>>} params.type - A comma-separated list of document types to search; leave empty to perform the operation on all types
 */
api.updateByQuery = ca({
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
    from: {
      type: 'number'
    },
    ignoreUnavailable: {
      type: 'boolean',
      name: 'ignore_unavailable'
    },
    allowNoIndices: {
      type: 'boolean',
      name: 'allow_no_indices'
    },
    conflicts: {
      type: 'enum',
      'default': 'abort',
      options: [
        'abort',
        'proceed'
      ]
    },
    expandWildcards: {
      type: 'enum',
      'default': 'open',
      options: [
        'open',
        'closed',
        'none',
        'all'
      ],
      name: 'expand_wildcards'
    },
    lenient: {
      type: 'boolean'
    },
    pipeline: {
      type: 'string'
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
        'dfs_query_then_fetch'
      ],
      name: 'search_type'
    },
    searchTimeout: {
      type: 'time',
      name: 'search_timeout'
    },
    size: {
      type: 'number'
    },
    sort: {
      type: 'list'
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
    terminateAfter: {
      type: 'number',
      name: 'terminate_after'
    },
    stats: {
      type: 'list'
    },
    version: {
      type: 'boolean'
    },
    versionType: {
      type: 'boolean',
      name: 'version_type'
    },
    requestCache: {
      type: 'boolean',
      name: 'request_cache'
    },
    refresh: {
      type: 'boolean'
    },
    timeout: {
      type: 'time',
      'default': '1m'
    },
    waitForActiveShards: {
      type: 'string',
      name: 'wait_for_active_shards'
    },
    scrollSize: {
      type: 'number',
      name: 'scroll_size'
    },
    waitForCompletion: {
      type: 'boolean',
      'default': true,
      name: 'wait_for_completion'
    },
    requestsPerSecond: {
      type: 'number',
      'default': 0,
      name: 'requests_per_second'
    },
    slices: {
      type: 'number',
      'default': 1
    }
  },
  urls: [
    {
      fmt: '/<%=index%>/<%=type%>/_update_by_query',
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
      fmt: '/<%=index%>/_update_by_query',
      req: {
        index: {
          type: 'list'
        }
      }
    }
  ],
  method: 'POST'
});
