// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

var context = require.context('./test', true, /.+\.spec\.ts$/);
context.keys().forEach(context);

module.exports = context;