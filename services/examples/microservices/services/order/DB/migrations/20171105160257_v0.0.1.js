
exports.up = function(knex, Promise) {﻿
    const raw = `ALTER TABLE public.process_mappings ADD COLUMN filter character varying(2000);`;
    return knex.schema.raw(raw);
  };
  
  exports.down = function(knex, Promise) {
    const raw = `ALTER TABLE public.process_mappings DROP COLUMN filter;`;
    return knex.schema.raw(raw);
  };
  