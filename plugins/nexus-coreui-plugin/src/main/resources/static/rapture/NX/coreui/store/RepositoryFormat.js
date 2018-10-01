/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * Repository Formats store.
 *
 * @since 3.14
 */
Ext.define('NX.coreui.store.RepositoryFormat', {
  extend: 'Ext.data.Store',
  model: 'NX.coreui.model.Format',

  proxy: {
    type: 'direct',
    paramsAsHash: false,

    api: {
      read: 'NX.direct.coreui_Repository.readFormats'
    },

    reader: {
      type: 'json',
      rootProperty: 'data',
      idProperty: 'value',
      successProperty: 'success'
    }
  },

  sorters: [{property: 'value', direction: 'ASC'}],

  listeners: {
    load: function() {
      var me = this;
      me.insert(0, Ext.create('NX.coreui.model.Format', {
        value: NX.I18n.get('Repository_Formats_All')
      }));
    }
  }
});
